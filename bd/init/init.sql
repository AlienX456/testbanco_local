CREATE SCHEMA IF NOT EXISTS employee_schema;

CREATE TABLE IF NOT EXISTS employee_schema.employee (
	fullname VARCHAR NOT NULL PRIMARY KEY,
	function VARCHAR NOT NULL
);