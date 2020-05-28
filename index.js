var inquirer = require("inquirer");
var fs = require('fs');

// ****Provided code****
// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your Project Title?"
    },
    {
      type: "input",
      name: "desc",
      message: "What is your Project Description?"
    },
    {
      type: "input",
      name: "inst",
      message: "What steps are needed to install your Project?"
    },
    {
      type: "input",
      name: "usage",
      message: "What are the instructions on how to use your Project?"
    },
    {
      type: "input",
      name: "license",
      message: "Would you like to add a license to your Project?"
    },
    {
      type: "input",
      name: "contrib",
      message: "Who contributed to your Project?"
    },
    {
      type: "input",
      name: "test",
      message: "What tests have your run on your Project?"
    },
    {
      type: "input",
      name: "pic",
      message: "Whould you like to include your GitHub profile picture?"
    },
    {
      type: "input",
      name: "test",
      message: "Whould you like to include your GitHub email?"
    },

  
  ]).then(function(data) {
      
    var rMe = "readme.md";
    const text = `
# ${data.title}


## Description 
    
${data.desc}
    
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
    
    
## Installation
    
${data.inst}
    
    
## Usage 
    
${data.usage}
    
    
## Badges
    
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    
## Contributing
    
${data.contrib}
    
    
## Tests

${data.test}

`
  
    fs.appendFile(rMe, text, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
      console.log(rMe);
  
  
    });
  });