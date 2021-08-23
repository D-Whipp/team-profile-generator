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
          data.managerID
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
      ])
      .then(function (data) {
        console.log(data);
      });
  }

  createManager();
}

app();
