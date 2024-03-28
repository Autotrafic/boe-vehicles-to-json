const fs = require("fs");
const table = require("../data/table");
const manipulateHtmlTable = require("../formatters/htmlManipulation");

// IMPORTANT: After creating the file, the <result> inside formattedTable.js, has to be wrapped with: const formattedTable = `<result>`; and export it.

function generateHtmlFormattedTable() {
  const modifiedHtmlTable = manipulateHtmlTable(table);

  fs.writeFile("formattedTable.js", modifiedHtmlTable, function (err) {
    if (err) console.log("error", err);
  });
}

module.exports = generateHtmlFormattedTable;
