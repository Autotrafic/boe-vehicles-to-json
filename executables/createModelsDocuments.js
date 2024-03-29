const { MongoClient, ObjectId } = require('mongodb');

async function migrateAndLinkModelsInBatches() {
  const url = 'mongodb+srv://autotrafic:theilie4@autotraficcluster.eqsc5uf.mongodb.net/';
  const dbName = 'vehicles-db';
  const client = new MongoClient(url);
  const batchSize = 1000;

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const brandsCollection = db.collection('car-brands');
    const modelsCollection = db.collection('car-models');

    const cursor = brandsCollection.find();
    while (await cursor.hasNext()) {
      const brand = await cursor.next();
      const modelsWithRefs = [];

      for (let model of brand.models) {
        model._id = new ObjectId();
        model.modelOf = brand._id;
        modelsWithRefs.push(model);
      }

      for (let i = 0; i < modelsWithRefs.length; i += batchSize) {
        const batch = modelsWithRefs.slice(i, i + batchSize);
        await modelsCollection.insertMany(batch);
      }

      await brandsCollection.updateOne({ _id: brand._id }, { $set: { models: modelsWithRefs } });
      console.log('working...');
    }
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

module.exports = migrateAndLinkModelsInBatches;