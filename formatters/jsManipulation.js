function orderValuesWithProperties(carModel) {
  if (!carModel) return;

  const { brand, model, ...rest } = carModel;

  const keys = Object.keys(rest);
  const values = Object.values(rest);

  const shiftedValues = values.slice(-2).concat(values.slice(0, -2));

  const shiftedObj = { brand, model };
  keys.forEach((key, index) => {
    shiftedObj[key] = shiftedValues[index];
  });

  return shiftedObj;
}

function orderValuesWithPropertiesForMultipleModels(carModels) {
  return carModels.map((model) => orderValuesWithProperties(model));
}

function setUniqueBrand(carModels) {
  if (!carModels) return;

  if (!carModels.length || !carModels.every((item) => "brand" in item)) {
    console.error("Array is empty or not all elements have a brand property.");
    return;
  }

  const result = {
    brand: carModels[0].brand,
    models: [],
  };

  carModels.forEach((item) => {
    const { brand, ...model } = item;
    result.models.push({...model, value: +model.value.replace(/\./g, "")});
  });

  return result;
}

function formatMultipleBrands(brands) {
  if (!brands) return;

  return brands.map((brand) =>
    setUniqueBrand(orderValuesWithPropertiesForMultipleModels(brand))
  );
}

module.exports = formatMultipleBrands;
