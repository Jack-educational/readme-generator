const inquirer = require('inquirer');
const fs = require('fs');
const util =require('util');
const generateMarkdown = require('./generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a brief description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter installation instructions:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please enter usage information:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please enter contribution guidelines:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Please enter test instructions:',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Please choose a license for your application:',
      name: 'license',
      choices: ['MIT', 'GPL', 'Apache'],
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username:',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'email',
    },
  ])
  .then((data) => {
    // generate markdown file using user input
    const markdown = generateMarkdown(data);

    // write markdown file
    fs.writeFile('README.md', markdown, (err) =>
      err ? console.error(err) : console.log('README.md file created!')
    );
  });
