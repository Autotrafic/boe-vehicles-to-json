const readline = require("readline");
const generateDatabase = require("./executables/generateDatabase");
const generateHtmlFormattedTable = require("./executables/generateHtmlFormattedTable");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = `Please choose an option:
1. First step -> Generate HTML Formatted table
2. Second step -> Generate Database
Enter number (1 or 2): `;

rl.question(question, (answer) => {
  if (answer === "1") {
    generateHtmlFormattedTable();
  } else if (answer === "2") {
    generateDatabase();
  } else {
    console.log(
      "Invalid option, please run the script again and select either 1 or 2."
    );
  }

  rl.close();
});
