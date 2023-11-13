const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./db")


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: process.env.DB_PASSWORD,
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
app.use((req, res) => {
  res.status(404).end();
});

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
          addEmployee();
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
      connection.query('INSERT INTO dpartment (name) VALUES(?)', [result.newDept], function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    })

}






















// not using sequelize
// const okToSync = process.env.NODE_ENV === "production" ? false : true;
// sequelize.sync({ force: okToSync }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });