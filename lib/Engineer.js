const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
}

module.exports = Engineer;
