const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

function createCard(data) {
  const createManagerCard = (manager) => {
    return `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${managerName}</h2>
                    <h3 class="card-title"><i class="fas fa-coffee"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <h5 class="card-text">ID: ${managerID}</h5>
                    <h5 class="card-text">Email: ${managerEmail}</h5>
                    <h5 class="card-text">Office Number: ${managerOfficeNumber}</h5>
                </div>
            </div>
            `;
  };
}
