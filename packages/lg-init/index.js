#!/usr/bin/env node
/* eslint-disable */
const chalk = require('chalk');
const program = require('commander');
const fs = require('fs-extra');
// const shell = require('shelljs');
const path = require('path');
const inquirer = require('inquirer');
const emoji = require('node-emoji');
const engine = require('./package.json').engines.node;

const CWD = process.cwd();
process.chdir(__dirname);
program.version(engine);

const buildDir = process.cwd();

const handleHelpOptions = (async = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'Help',
      message: 'What would you like to do?',
      choices: ['Generate new project'],
      validate: (help) => {
        console.log('yoooo');
        if (help === 'Generate new project') {
          console.log('yoooo');
          return true;
        } else {
          console.log('Please enter a project name');
          return false;
        }
      },
    },
  ]);
});

const promptUserForProjectName = async () => {
  console.log();
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else if (nameInput === '') {
          console.log('Please enter a project name');
          return false;
        }
      },
    },
  ]);
};

const handleNameFormatting = (input) => {
  const specialChars = /\W/;
  if (specialChars.test(input)) {
    return true;
  }
  return false;
};

const moveTemplateToUserCurrentWorkingDirectory = (name) => {
  if (handleNameFormatting(name)) {
    console.log(`${name} is invalid, no special characters allowed`);
    return;
  }
  try {
    fs.moveSync(
      path.resolve(buildDir, 'lib/templates/og'),
      path.resolve(CWD, name),
      (err) => {
        if (err) {
          console.error(err);
        } else {
          return console.log('success!');
        }
      }
    );
    console.log();
    console.log(
      name + ' has been successfully created!' + emoji.emojify(':rocket:')
    );
    console.log();
    console.log('Quick start:');
    console.log(chalk.bold(`cd ${name} && npm i && npm run dev`));
    console.log();
    console.log('Have questions? Visit the docs for more info!');
    console.log('https://github.com/hi-matbub/lg-coffee');
    console.log();
  } catch {
    console.log();
    console.log("Something wen't wrong.");
    console.log(`Run ${chalk.yellow('npx lgCoffee --help')} for more options`);
    console.log();
  }
};

const prepBuild = () => {
  if (!process.argv.slice(2)[0]) {
    console.log();
    console.log('lg-coffe setup');
    console.log();
    // if no args
    return promptUserForProjectName().then((res) =>
      moveTemplateToUserCurrentWorkingDirectory(res.name)
    );
  } else if (process.argv.slice(2)[1]) {
    // if to many args
    console.log();
    console.log('lg-coffee setup');
    console.log();
    console.log(
      `To Many Arguments! Remove "${
        process.argv.slice(2)[1]
      }" and try your command again.`
    );
    console.log();
    console.log('e.g. npx lg-init myAwesomeStore');
    console.log(`Run ${chalk.yellow('npx lg-init --help')} for more options`);
    console.log();
  } else if (process.argv.slice(2)[0] === '--help') {
    console.log();
    console.log('lg-coffee setup');
    console.log();
    handleHelpOptions().then((data) => {
      if (data.Help === 'Generate new project') promptUserForProjectName();
      // future conditionals
    });
  } else if (process.argv.slice(2)[0]) {
    // if name provided
    console.log();
    console.log('lg-coffee setup');
    console.log();
    console.log(
      `building project in ${path.resolve(CWD, process.argv.slice(2)[0])}`
    );
    return moveTemplateToUserCurrentWorkingDirectory(process.argv.slice(2)[0]);
  } else {
    // idk what wen't wrong, did but it didn't work
    console.log("Something wen't wrong.");
    console.log(`Run ${chalk.yellow('npx lg-init --help')} for more options`);
  }
};

prepBuild();
