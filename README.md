# BOE Vehicles table to JSON

## Preparation

1. Copy the xml CAR tables from BOE page

2. Change the content of `data/table.js` file with the coppied xml car tables

## Usage

1. npm i

2. npm run start

3. Run the first step, the file `formattedTable.js` will be updated.

4. Inside the file, create a `formattedTable` constant with the content inside wrapped with backtip characters (``), and export the constant;

5. Run the second step running `npm run start`

6. Enjoy of your JSON file! 🚀

- IMPORTANT: When copying the xml car tables, NOT copy any space at the beginning, so the copy shoud start with: `<table...`

## Utils

### Upload JSON to database collection of MongoDB

`
Upload JSON:
mongoimport --uri "mongodb+srv://autotrafic:<password>@autotraficcluster.eqsc5uf.mongodb.net/" --db vehicles-db --collection cars-collection --drop --file fuel-motorcycles.json --jsonArray
`
