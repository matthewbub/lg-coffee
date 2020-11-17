#!/usr/bin/env node
/* eslint-disable */

const chalk = require('chalk');
const program = require('commander');
const fs = require('fs-extra');
const shell = require('shelljs');
const path = require('path');
const inquirer = require('inquirer');
const engine = require('./package.json').engines.node;

const CWD = process.cwd();
process.chdir(__dirname);
program.version(engine);

const buildDir = process.cwd();
const newProjectName = 'lg-coffee';

const promptUserForProjectName = async () => {
  console.log();
  console.log('lg-coffe setup');
  console.log();
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a project name');
          return false;
        }
      },
    },
  ]);
};

const moveTemplateToUserCurrentWorkingDirectory = (name) =>
  fs.moveSync(
    path.resolve(buildDir, 'lib/template'),
    path.resolve(CWD, name),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        return console.log('success!');
      }
    }
  );

const prepBuild = () => {
  if (!process.argv.slice(2)[0]) {
    // if no args
    return promptUserForProjectName().then((res) =>
      moveTemplateToUserCurrentWorkingDirectory(res.name)
    );
  } else if (process.argv.slice(2)[1]) {
    // if to many args
    console.log();
    console.log('lg-coffe setup');
    console.log();
    console.log(
      `To Many Arguments! Remove "${
        process.argv.slice(2)[1]
      }" and try your command again.`
    );
    console.log();
    console.log('e.g. npx lg-init myAwesomeStore');
    console.log(`Run ${chalk.yellow('--help')} for more options`);
    console.log();
  } else if (process.argv.slice(2)[0]) {
    // if name provided
    console.log();
    console.log('lg-coffe setup');
    console.log();
    console.log(
      `building project in ${path.resolve(CWD, process.argv.slice(2)[0])}`
    );
    return moveTemplateToUserCurrentWorkingDirectory(process.argv.slice(2)[0]);
  } else {
    // idk what wen't wrong, did but it didn't work
    console.log("Something wen't wrong.");
    console.log(`Run ${chalk.yellow('--help')} for more options`);
  }
};

prepBuild();
