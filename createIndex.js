const fs = require("fs");

const createTeam = (team) => {
  const createManagerCard = function () {
    return `
      <div class="card">
      <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-coffee"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
      <h5 class="card-text">ID: ${manager.getID()}</h5>
      <h5 class="card-text">Email: ${manager.getEmail()}</h5>
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
        <h5 class="card-text">Email: ${engineer.getEmail()}</h5>
        <h5 class="card-text">GitHub: ${engineer.getGitHub()}</h5>
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
        <h5 class="card-text">Email: ${intern.getEmail()}</h5>
        <h5 class="card-text">School: ${intern.getSchool()}</h5>
        </div>
        </div>
        `;
  };
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
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};
