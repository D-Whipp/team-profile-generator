const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

function app() {
  function createManager() {
    console.log("Build your team: ");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your manager's name? (REQUIRED)",
          validate: (managerNameInput) => {
            if (managerNameInput) {
              return true;
            } else {
              console.log("Enter the manager's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerID",
          message: "Please enter your manager's ID: ",
          validate: (managerIDInput) => {
            if (managerIDInput) {
              return true;
            } else {
              console.log("Please enter you manager's ID: (REQUIRED)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter your manager's Email: ",
          validate: (managerEmailInput) => {
            if (managerEmailInput) {
              return true;
            } else {
              console.log("Enter your manager's Email: (REQUIRED)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Enter your manager's Office Number: ",
          validate: (managerOfficeNumber) => {
            if (managerOfficeNumber) {
              return true;
            } else {
              console.log("Enter your manager's Office Number: (REQUIRED)");
              return false;
            }
          },
        },
      ])
      .then(function (data) {
        console.log(data);
        const manager = new Manager(
          data.managerName,
          data.managerID,
          data.managerEmail,
          data.managerOfficeNumber
        );
        teamMembers.push(manager);
        // createTeam();
      });
    console.log(manager);

    // function createTeam() {
    //   inquirer
    //     .prompt([
    //       {
    //         type: "list",
    //         name: "memberChoice",
    //         message: "Which type of team member would you like to add? ",
    //         choices: [
    //           "Engineer",
    //           "Intern",
    //           "I don't want to add any more team members",
    //         ],
    //       },
    //     ])
    //     .then((userChoice) => {
    //       switch (userChoice.memberChoice) {
    //         case "Engineer":
    //           addEngineer();
    //           break;
    //           addIntern();
    //           break;
    //         default:
    //           console.log("Got here!");
    //       }
    //     });
    // }

    // function addEngineer() {
    //   inquirer
    //     .prompt([
    //       {
    //         type: "input",
    //         name: "engineerName",
    //         message: "What is your engineer's name",
    //         validate: (engineerNameInput) => {
    //           if (engineerNameInput) {
    //             return true;
    //           } else {
    //             console.log("Enter your engineer's name: (REQUIRED)");
    //             return false;
    //           }
    //         },
    //       },
    //       {
    //         type: "input",
    //         name: "engineerID",
    //         message: "Please enter your engineer's ID: ",
    //         validate: (engineerIDInput) => {
    //           if (engineerIDInput) {
    //             return true;
    //           } else {
    //             console.log("Please enter you engineer's ID: (REQUIRED)");
    //             return false;
    //           }
    //         },
    //       },
    //       {
    //         type: "input",
    //         name: "engineerEmail",
    //         message: "Enter your engineer's Email: ",
    //         validate: (engineerEmailInput) => {
    //           if (engineerEmailInput) {
    //             return true;
    //           } else {
    //             console.log("Enter your engineer's Email: (REQUIRED)");
    //             return false;
    //           }
    //         },
    //       },
    //       {
    //         type: "input",
    //         name: "engineerGitHub",
    //         message: "Enter your engineer's GitHub: ",
    //         validate: (engineerGitHubInput) => {
    //           if (engineerGitHubInput) {
    //             return true;
    //           } else {
    //             console.log("Enter your engineer's GitHub: (REQUIRED)");
    //             return false;
    //           }
    //         },
    //       },
    //     ])
    //     .then(function (data) {
    //       const engineer = new Engineer(
    //         data.engineerName,
    //         data.engineerID,
    //         data.engineerEmail,
    //         data.engineerGitHub
    //       );
    //       console.log(engineer);
    //     });
    // }

    const indexData = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>My Team</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <script src="https://kit.fontawesome.com/14f10ad80a.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <div class="jumbotron bg-danger">
                    <div class="container">
                        <h1 class="display-4 text-light">My Team</h1>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 justify-content-center d-flex">
                            <div class="card">
                                <div class="card-header">
                                    <h2 class="card-title">${manager.getName()}</h2>
                                    <h3 class="card-title"><i class="fas fa-coffee"></i> Manager</h3>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-text">ID: ${manager.getID()}</h5>
                                    <h5 class="card-text">Email: ${manager.getEmail()}</h5>
                                    <h5 class="card-text">Office Number: ${manager.getOfficeNumber()}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
            `;

    fs.writeFile("index.html", indexData, (error) => {
      if (error) {
        console.log("Error: ", error);
      } else {
        console.log("index.html created successfully!");
      }
    });
  }

  createManager();
}

app();
