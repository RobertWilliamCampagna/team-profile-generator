// import dependencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs')

// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html');
// const render = require('./lib/htmlRenderer');
const Employee = require('./lib/Employee');

const teamArray = []

function addManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your manager\'s name?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a name for your manager!'
                } else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your manager\'s Id?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a manger\'s Id!'
                }else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your manager\'s email?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a manager\'s email!'
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your manager\'s office number?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter manager\'s office number!'
                }else {
                    return true;
                }
            }
         }
    ]).then(responses =>{
        const manager = new Manager (responses.managerName, responses.managerId, responses.managerEmail, responses.managerOfficeNumber)
        teamArray.push (manager)
        addTeamMember()
    })
}

function addTeamMember(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'pizza',
            message: 'Would you like to add an Engineer or Intern or Done?',
            choices: ['Engineer', 'Intern', 'All Done']
        }
    ]).then(res =>{
        switch(res.pizza){
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:

            buildTeam();


        }
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineer\'s name?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a name for your engineer!'
                } else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your engineer\'s Id?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a engineer\'s Id!'
                }else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineer\'s email?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a engineer\'s email!'
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineer\'s github page?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter engineers\'s githun page!'
                }else {
                    return true;
                }
            }
         }
    ]).then(responses =>{
        const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGithub)
        teamArray.push (engineer)
        addTeamMember();
    })
}

buildTeam();

// function addTeamMember(){
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'pizza',
//             message: 'Would you like to add Engineer or Intern or Done?',
//             choices: ['Engineer', 'Intern', 'All Done']
//         }
//     ]).then(res =>{
//         switch(res.pizza){
//             case 'Engineer':
//                 addEngineer();
//                 break;
//             case 'Intern':
//                 addIntern();
//                 break;
//             default:

//             buildTeam();


//         }
//     })
// }

function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your intern\'s name?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a name for your intern!'
                } else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your intern\'s Id?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a intern\'s Id!'
                }else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your intern\'s email?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter a intern\'s email!'
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school did your intern attend?',
            validate: answer => {
                if (answer === ''){
                    return 'Please enter intern\'s school!!'
                }else {
                    return true;
                }
            }
         }
    ]).then(responses =>{
        const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool)
        teamArray.push (intern)
        addTeamMember();
    })
};

function buildTeam(){

};

addManager();
// addIntern();