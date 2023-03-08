const fs = require("fs");

// writeHtml returns the html declaration and head closing html tag, data argument
// is the card data that is returned by index.js. 

const writeHtml = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <header>
        <nav>
          <h1> - My Team - </h1> 
        </nav> 
      </header>
      <main class="row">
        ${data}
      </main>
    </body>
  </html>
    `;
};

// execute is exported and used inside of index.js the data passed in is param
// execute then writes the html by using fs.write, param is a place holder for
// card data fromm the html variable in index.js. 

const execute = async (param) => {
  const fill = writeHtml(param);
  fs.writeFile("./dist/index.html", fill, (err) => {
    err ? console.log(err) : console.log("sucess");
  });
};

module.exports = execute;
