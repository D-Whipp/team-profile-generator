const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

function app() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Enter Manager name: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Manager name: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerID",
          message: "Enter Manager ID: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Manager ID: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter Manager Email: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Manager Email: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Enter Manager Office Number: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Manager Office Number: (Required)");
              return false;
            }
          },
        },
      ])
      .then(function (data) {
        const manager = new Manager(
          data.managerName,
          data.managerID,
          data.managerEmail,
          data.managerOfficeNumber
        );

        teamMembers.push(manager);
        addTeamMember();
      });
  }

  function addTeamMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamMemberChoice",
          message: "Select a Team Member to add to your team: ",
          choices: ["Engineer", "Intern", "All done!"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.teamMemberChoice) {
          case "Engineer":
            createEngi();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            console.log("Goodbye!");
            createTeam();
            break;
        }
      });
  }

  function createEngi() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engiName",
          message: "Enter Engineer name: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Engineer name: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engiID",
          message: "Enter Engineer ID: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Engineer ID: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engiEmail",
          message: "Enter Engineer Email: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Engineer Email: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engiGitHub",
          message: "Enter Engineer GitHub: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Engineer GitHub: (Required)");
              return false;
            }
          },
        },
      ])
      .then(function (data) {
        const engineer = new Engineer(
          data.engiName,
          data.engiID,
          data.engiEmail,
          data.engiGitHub
        );
        teamMembers.push(engineer);
        addTeamMember();
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Enter Intern name: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Intern name: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internID",
          message: "Enter Intern ID: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Intern ID: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "Enter Intern Email: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Intern Email: (Required)");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Enter Intern School: (Required)",
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Enter Intern School: (Required)");
              return false;
            }
          },
        },
      ])
      .then(function (data) {
        const intern = new Intern(
          data.internName,
          data.internID,
          data.internEmail,
          data.internSchool
        );
        teamMembers.push(intern);
        addTeamMember();
      });
  }

  function createTeam() {
    teamContainer = teamMembers;
    populatedTeam = [];
    // console.log("teamContainer: ", teamContainer);

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // PAGE CONSTRUCTOR START
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const createManagerCard = function () {
      return `
          <div class="card">
          <div class="card-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-coffee"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
          <h5 class="card-text">ID: ${manager.getID()}</h5>
          <h5 class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h5>
          <h5 class="card-text">Office Number: ${manager.getOfficeNumber()}</h5>
          </div>
          </div>
          `;
    };

    const createEngiCard = function () {
      return `
            <div class="card">
            <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
            <h5 class="card-text">ID: ${engineer.getID()}</h5>
            <h5 class="card-text">Email: <a href="mailto${engineer.getEmail()}"> ${engineer.getEmail()}</a></h5>
            <h5 class="card-text">GitHub: <a href="https://github.com/${
              engineer.getGitHub
            }" ${engineer.getGitHub()}</a></h5>
            </div>
            </div>
            `;
    };

    const createInternCard = function () {
      return `
            <div class="card">
            <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="far fa-user-circle"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
            <h5 class="card-text">ID: ${intern.getID()}</h5>
            <h5 class="card-text">Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></h5>
            <h5 class="card-text">School: ${intern.getSchool()}</h5>
            </div>
            </div>
            `;
    };

    const createIndexHtml = function () {
      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width", initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <script
          src="https://kit.fontawesome.com/14f10ad80a.js"
          crossorigin="anonymous"
          ></script>
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
                    ${populatedTeam}
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
    };

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // PAGE CONSTRUCTOR END
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    for (let index = 0; index < teamContainer.length; index++) {
      // console.log(
      //   "Looping through teamContainer: ",
      //   teamContainer[index].constructor.name
      // );
      if (teamContainer[index].constructor.name === "Manager") {
        manager = teamContainer[index];
        const m = createManagerCard();
        // console.log("Manager Card: ", m);
        populatedTeam.push(m);
        // console.log(populatedTeam);
      } else if (teamContainer[index].constructor.name === "Engineer") {
        engineer = teamContainer[index];
        const e = createEngiCard();
        // console.log("Engineer Card: ", e);
        populatedTeam.push(e);
      } else if (teamContainer[index].constructor.name === "Intern") {
        intern = teamContainer[index];
        const i = createInternCard();
        // console.log("Intern Card: ", i);
        populatedTeam.push(i);
      }
      // console.log(populatedTeam);
      createIndexHtml();
    }
  }

  createManager();
}

app();
