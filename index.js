const HtmlTableToJson = require("html-table-to-json");
var fs = require("fs");
const table = require("./data/table");
const manipulateHtmlTable = require("./formatters/htmlManipulation");
const formatMultipleBrands = require("./formatters/jsManipulation");

const modifiedHtmlTable = manipulateHtmlTable(table);

const { results } = HtmlTableToJson.parse(table);

const databaseObject = formatMultipleBrands(results);

fs.writeFile("database.txt", modifiedHtmlTable, function(err) {
    if(err) console.log('error', err);
});
