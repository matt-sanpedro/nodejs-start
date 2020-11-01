// jshint esversion:6

// this will never change, will throw error
const fs = require("fs");

fs.copyFileSync("file1.txt", "copy.txt");
