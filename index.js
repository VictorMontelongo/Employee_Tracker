const inquirer = require("inquirer");
const mysql = require("mysql2");
// const app = require("./db")


const PORT = process.env.PORT || 3001;


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Trontron333',
    database: 'employee_info_db'
  },
  console.log(`Connected to the employee_info_db database.`)
);

// Query database
// db.query('SELECT * FROM department', function (err, results) {
//   if (err) throw err;
//   console.log(results);
// });

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

function start() {
  inquirer
    .prompt({
      type: "list",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View department",
        "View role",
        "View employee",
        "Update employee role",
        "Quit"
      ],
      message: "What would you like to do?",
      name: "options"
      // .then will lead into the next page to spawn the next options, found with W3 in creating functions for the specified answers
    }).then(function (answer) {
      switch (answer.options) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View department":
          viewDepartment();
          break;
        case "View role":
          viewRole();
          break;
        case "View employee":
          viewEmployee();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          quit();
      }
    });
}

function addDepartment() {
  inquirer.prompt({
    type: "input",
    message: "What is the name of the new department?",
    name: "newDept"
  })
    // could I make result into answer or would that mess with the functions and calls. left as result
    .then(function (result) {
      db.query("INSERT INTO department (name) VALUES(?)", [result.newDept], function (err, result) {
        if (err) throw err;
        console.log(result);
        start();
      });
    })
}

function addRole() {
  inquirer.prompt({
    type: "input",
    message: "What is the name of the new role?",
    name: "newRole"

  },
    {
      type: "input",
      message: "What is the salary of this role?",
      name: "newSalary"
    },
    {
      type: "input",
      message: "What is the department id  associated with this role?",
      name: "roleDept"

    })
    // could I make result into answer or would that mess with the functions and calls. left as result
    .then(function (result) {
      db.query("INSERT INTO role (title, salary, department_id) VALUES(?,?,?)", [result.newRole, result.newSalary, result.roleDept], function (err, result) {
        if (err) throw err;
        console.log(result);
        start();
      });
    })
}

function addEmployee() {
  inquirer.prompt({
    type: "input",
    message: "What is the first name of the new employee?",
    name: "newEmployeeFirst"

  },
    {
      type: "input",
      message: "What is the last name of the new employee?",
      name: "newEmployeeLast"
    },
    {
      type: "input",
      message: "What is the role id associated with this employee?",
      name: "employeeRole"

    },
    {
      type: "input",
      message: "What manager id is associated with this employee?",
      name: "employeeMan"
    })
    // could I make result into answer or would that mess with the functions and calls. left as result
    .then(function (result) {
      db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)", [result.newEmployeeFirst, result.newEmployeeLast, result.employeeRole, result.employeeMan], function (err, result) {
        if (err) throw err;
        console.log(result);
        start();
      });
    })
}

function updateEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "Which employee are you updating?",
      name: "employeeUpdate"
    },
    {
      type: "input",
      message: "What are we updating?",
      name: "roleUpdate"

    }])
    // this one the answers need to be reversed for it to work
    .then(function (result) {
      db.query("UPDATE employee SET role_id =? WHERE first_name=?", [result.roleUpdate, result.employeeUpdate], function (err, result) {
        if (err) throw err;
        console.log(result);
        start();
      });
    })
}



function viewDepartment() {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });

  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  start();
}

function viewRole() {
  db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
  });

  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  start();
}

function viewEmployee() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });

  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  start();
}

function quit() {
  db.end();
  process.exit();
}























// not using sequelize
// const okToSync = process.env.NODE_ENV === "production" ? false : true;
// sequelize.sync({ force: okToSync }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });