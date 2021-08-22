const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter the manager's name!");
          return false;
        }
      },
    },
  ])
  .then(function (data) {
    console.log(data);

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
        <link rel="stylesheet" href="style.css>
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
                    <h2>${data.managerName}</h2>
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
  });
