const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./engineer');
const Manager = require('./manager');
const Intern = require('./intern');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?",
    },
    {
        type: 'list',
        name: 'add',
        message: "What would you like to do now?",
        choices: ["Add an engineer to the team","Add an intern to the team","The team is complete - generate the HTML file"],
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
    
    },
    {
        type: 'list',
        name: 'add',
        message: "What would you like to do now?",
        choices: ["Add an engineer to the team","Add an intern to the team","The team is complete - generate the HTML file"],
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",

    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending?",
    },
    {
        type: 'list',
        name: 'add',
        message: "What would you like to do now?",
        choices: ["Add an engineer to the team","Add an intern to the team","The team is complete - generate the HTML file"],
    }

];


class Team {
    constructor() {
        this.members = [];
        inquirer.prompt(managerQuestions)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            this.members.push(manager);
            this.more(data.add);
        });
    } // end constructor

    add(role) {
        if(role == "engineer") {
            inquirer.prompt(engineerQuestions)
            .then((data) => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                this.members.push(engineer);
                this.more(data.add);
            }); 
        } else if(role == "intern") {
                inquirer.prompt(internQuestions)
                .then((data) => {
                    const intern = new Intern(data.name, data.id, data.email, data.school);
                    this.members.push(intern);
                    this.more(data.add);
                });
        } //end else
    } // end method

    more(ans) {
        switch(ans) {
            case "Add an engineer to the team":
                this.add("engineer");
                break;

            case "Add an intern to the team":
                this.add("intern");
                break;
            
            default:
                this.generateHTML();
        }//end switch
    } // end method

    generateHTML() {
      this.members.forEach((member) => {
          console.log(member.getRole());
      });  //end forEach  
    }//end method
} // end class

module.exports = Team;