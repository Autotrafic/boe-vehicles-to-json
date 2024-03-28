const fs = require("fs");
const HtmlTableToJson = require("html-table-to-json");
const formattedTable = require("../formattedTable");
const formatMultipleBrands = require("../formatters/jsManipulation");

function generateDatabase() {
  const { results } = HtmlTableToJson.parse(formattedTable);

  const databaseObject = formatMultipleBrands(results);

  fs.writeFile("database.json", JSON.stringify(databaseObject), function (err) {
    if (err) console.log("error", err);
  });
}

module.exports = generateDatabase;
