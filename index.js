//read from bottom to top avoided hoisting function expressions. 

// imports of libraries and classes from lib folder

const inquirer = require("inquirer");

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const execute = require("./src/helper");

// takes the objects returned with .push()

const objectsArr = [];

//holds all rendered cards to be input

let html = "";

// renderData calls for each object within the object array to be added to html
// variable as html. 

const renderData = () => {
  objectsArr.forEach((element) => {
    const { name, id, email } = element;
    console.log(element);
    html += (
    `<div class="${element.getRole() === 'Manager' ? `cardlg col-lg-10 col-10` : ` cardsm col-lg-2 col-10`}"> 
      <h2> ${element.getRole()} </h2>
      <br>
      <h4> ${name} </h4>
      <h4> ${id} </h4> 
      <button> <a href="mailto:${email}">  Send Email  </a> </button>
      ${
        element.getRole() === "Engineer"
          ? ` <button> <a href='${element.getGithub()}'  target='_blank'>  - Github -  </a> </button>`
          : ""
      }
      ${
        element.getRole() === "Manager"
          ? `<h3> ${element.getOfficeNumber()} </h3>`
          : ""
      }
      ${element.getRole() === "Intern" 
          ? `<h3> ${element.getSchool()} </h3>` 
          : ""
      }
  </div>`);
  });
  // execute function from helper.js that passes HTML inside html variable.

  execute(html);
};

// createObject function destructures variables form then return data of the ql
// then uses conditional statments to decided which object to create and pushh into
// objectsArr

const createObject = (
  { name, id, email, github, officeNumber, school },
  type
) => {
  if (type === "engineer") {
    objectsArr.push(new Engineer(name, id, email, github));
  }
  if (type === "manager") {
    objectsArr.push(new Manager(name, id, email, officeNumber));
  }
  if (type === "intern") {
    objectsArr.push(new Intern(name, id, email, school));
  }
  moreEmp();
};

// question line for Engineer selection

const qlForEng = (type) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this engineers name?  ",
        name: "name",
      },
      {
        type: "input",
        message: "What is this engineers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this engineers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is this engineers full github URL?",
        name: "github",
      },
    ])
    .then((data) => {
      createObject(data, type);
    });
};

// question line for Manager selection

const qlForMgmt = (type) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the managers name?  ",
        name: "name",
      },
      {
        type: "input",
        message: "What is the managers id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the managers email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the managers office number?",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      createObject(data, type);
    });
};

// question line for Intern selection

const qlForIntern = (type) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is this interns name?  ",
        name: "name",
      },
      {
        type: "input",
        message: "What is this interns id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is this interns email?",
        name: "email",
      },
      {
        type: "input",
        message: "Where is this intern going to school?",
        name: "school",
      },
    ])
    .then((data) => {
      createObject(data, type);
    });
};


// decided function makes the decision of what type of question line (ql) to
// execute. 

const decide = ({ type }) => {
  if (type === "engineer") {
    qlForEng(type);
  } else if (type === "manager") {
    qlForMgmt(type);
  } else if (type === "intern") {
    qlForIntern(type);
  }
};



// app function is the initial start of the app that passes data to decide func

const app = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee is this?",
        name: "type",
        choices: ["manager", "engineer", "intern"],
      },
    ])
    .then((data) => {
      decide(data);
    });
};

// moreEmp func decideds if the app should be recalled or if the prompts should
// exit out and render the pushed data to objectArr 

const moreEmp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you have another employee to list?",
        name: "more",
        choices: ["Yes", "No"],
      },
    ])
    .then((data) => {
      const { more } = data;
      if (more === "Yes") {
        app();
      } else if (more === "No") {
        renderData();
      }
    });
};

// Call of the app func
app();
