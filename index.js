// jshint esversion:6

// // this will never change, will throw error
// const fs = require("fs");
// fs.copyFileSync("file1.txt", "copy.txt");

var superheroes = require("superheroes");
var supervillains = require("supervillains");

// experiment with random superhero names
var mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);

// experiment with random villain names
var mySuperVillainName = supervillains.random();
console.log(mySuperVillainName);
