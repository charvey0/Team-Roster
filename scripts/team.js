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
      var html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
          <style>
              h1, h2 {
                  color: azure;
              }
              .card-header {
                  background-color: dimgray;
              }
          </style>
          <script src="https://kit.fontawesome.com/d000141de3.js" crossorigin="anonymous"></script>
          <title>Your Team</title>
      </head>
      <body>
          <main>
              <section class="jumbotron text-center bg-primary">
                  <div class="container">
                      <h1>My Team</h1>
                  </div>
              </section>
              <div class="album py-5 bg-light">
                  <div class="container">
                      <div class="row">`;  
      this.members.forEach((member) => {
          const role = member.getRole();
          html += `
          <div class="col-md-4">
          <div class="card mb-4 shadow-lg">
              <div class="card-header">
                  <h2>${member.getName()}</i></h2>
                  <h4><i class="fas fa-`;
            switch (role) {
              case "Manager":
                  html += `compass`;
                  break;
              case "Engineer":
                  html += `tools`;
                  break;
              case "Intern":
                   html += `school`;
                   break;
                }//end switch
                      
           html += `"></i> ${role}</h4>
              </div>
              <div class="card-body">
                  <p class="card-text">Id: ${member.getId()}</p>
                  <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                  <p>`;
            switch (role) {
                case "Manager":
                    html += `Office Number: ${member.getOfficeNumber()}`;
                    break;
                case "Engineer":
                    html += `GitHub Username: <a target="_blank" href="http://github.com/${member.getGithub()}">${member.getGithub()}</a>`;
                    break;
                case "Intern":
                    html += `School: ${member.getSchool()}`;
                    break;
            }//end switch
                  html +=`</p>
              </div>
          </div>
      </div>`;
      });  //end forEach  

      html += `
      </div>
      </div>
  </div>
</main>

</body>
</html>`;

      fs.writeFile("team.html",html, (err) => {
          if (err) throw err;
          console.log('The file "team.html" has been created.');
      });
    
    }//end method
} // end class

module.exports = Team;