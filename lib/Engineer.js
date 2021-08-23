const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return "Engineer";
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;
