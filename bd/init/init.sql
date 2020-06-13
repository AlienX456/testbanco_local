CREATE SCHEMA IF NOT EXISTS employee_schema;

CREATE TABLE IF NOT EXISTS employee_schema.employee (
    id INTEGER NOT NULL PRIMARY KEY CONSTRAINT positive_id CHECK (id > 0),
	fullname VARCHAR NOT NULL,
    boss INTEGER,
	function VARCHAR NOT NULL,
    FOREIGN KEY (boss) REFERENCES employee_schema.employee(id)
);