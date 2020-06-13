CREATE SCHEMA IF NOT EXISTS employee_schema;

CREATE TABLE IF NOT EXISTS employee_schema.employee (
	fullname VARCHAR NOT NULL PRIMARY KEY,
    boss VARCHAR,
	function VARCHAR NOT NULL,
    FOREIGN KEY (boss) REFERENCES employee_schema.employee(fullname)
);