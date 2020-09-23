#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");


const welcomeMessage = () => {
    console.log(
        chalk.red(
            figlet.textSync('v-genie', { horizontalLayout: 'full' })
        )
    );
};

const detectVueProject = () => {
    console.log(process.cwd());
};


(async () => {
    welcomeMessage();
})();