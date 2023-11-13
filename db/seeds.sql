INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"),("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 1),("Salesperson", 80000.00, 1),  ("Lead Engineer", 150000.00,2),("Software Engineer", 120000.00, 2), ("Account Manager"160000.00, 3),("Accountant", 125000.00, 3), ("Legal Team Lead", 250000.00, 4),("Lawyer", 190000.00, 4);


INSERT INTO role (first_name, last_name, role_id, manager_id)
VALUES  ("Eric", "Ericson", 1, 1), ("Loyd","Loydson",2,1), ("Olaf", "Olafson",3,3), ("Tim","Timson", 4,3), ("Tron", "Tronson",5,5),("Rick", "Rickson", 6,5), ("Ren", "Renson", 7,7), ("Ron","Ronson", 8,7);