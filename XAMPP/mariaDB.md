# MariaDB Learning Notes

A personal and community reference guide covering everything learned about MariaDB, SQL basics, database design, and important concepts to learn next.

---

# 1. What is MariaDB?

MariaDB is a **relational database management system (RDBMS)**.

It stores data in:

* Databases
* Tables
* Rows
* Columns

Example:

```
Database: school

Table: student

+----+---------+-----+
| id | name    | age |
+----+---------+-----+
| 1  | Rabbit  | 777 |
| 2  | Sayra   | 676 |
+----+---------+-----+
```

MariaDB uses SQL (Structured Query Language) to interact with data.

---

# 2. XAMPP vs MariaDB

## MariaDB

MariaDB is only the database engine.

XAMPP runs MariaDB locally.

Example:

```
Browser
   |
   ↓
Apache
   |
   ↓
PHP
   |
   ↓
MariaDB
   |
   ↓
Database
```

---

# 3. Connecting to MariaDB

```
opne xampp,
start module Apache and MySQL,
click shell
```
use this:
```bash
mysql -u root -h localhost
```

Meaning:

```
-u = username
-h = host
```

Example:

```bash
mysql -u root
```

connects as root user.

---

# 4. Basic MariaDB Commands

## Show databases

```sql
SHOW DATABASES;
```

## Create database

```sql
CREATE DATABASE school;
```

## Select database

```sql
USE school;
```

## Show tables

```sql
SHOW TABLES;
```

## Go Back Command 
```sql
\c
```

## Describe table, open the table

```sql
DESCRIBE student;
DESC student;
SHOW COLUMNS FROM student;

select*from table_name; (*=all columns)
select one_column,two_column from this_table_name;
select*from table_name\G (\G shows everything with spaces)
```

# MySQL Table Editing Cheat Sheet

## 1. ALTER TABLE (Change Table Structure)

`ALTER TABLE` is used to change the **structure/design** of a table.

It can:
- Add columns
- Delete columns
- Rename columns
- Change data types
- Add/remove keys


---

# ADD COLUMN

## Syntax

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

## Example

```sql
ALTER TABLE student
ADD email VARCHAR(100);
```

Before:

| id | name | age |
|---|---|---|
| 1 | Rabbit | 21 |

After:

| id | name | age | email |
|---|---|---|---|
| 1 | Rabbit | 21 | NULL |


---

# ADD Multiple Columns

```sql
ALTER TABLE student
ADD (
    email VARCHAR(100),
    address VARCHAR(200)
);
```


---

# MODIFY COLUMN TYPE

Change an existing column datatype.

## Syntax

```sql
ALTER TABLE table_name
MODIFY column_name datatype;
```

## Example

```sql
ALTER TABLE student
MODIFY age VARCHAR(3);
```


---

# RENAME COLUMN

## Syntax

```sql
ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;
```

## Example

```sql
ALTER TABLE student
RENAME COLUMN name TO student_name;
```


---

# CHANGE COLUMN NAME AND TYPE

```sql
ALTER TABLE student
CHANGE name student_name VARCHAR(150);
```


---

# DROP COLUMN

Deletes a column.

## Syntax

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

## Example

```sql
ALTER TABLE student
DROP COLUMN email;
```


---

# RENAME TABLE

```sql
ALTER TABLE student
RENAME TO students;
```


---

# ADD PRIMARY KEY

```sql
ALTER TABLE student
ADD PRIMARY KEY(id);
```


---

# DROP PRIMARY KEY

```sql
ALTER TABLE student
DROP PRIMARY KEY;
```


---

# ADD FOREIGN KEY

```sql
ALTER TABLE orders
ADD FOREIGN KEY(student_id)
REFERENCES student(id);
```


---

# 2. UPDATE (Change Data)

`UPDATE` changes the values stored inside rows.

---

# Basic UPDATE

## Syntax

```sql
UPDATE table_name
SET column=value;
```

Example:

```sql
UPDATE student
SET age=22;
```

⚠️ This changes every row.


---

# UPDATE With WHERE

`WHERE` selects which rows should be updated.

## Syntax

```sql
UPDATE table_name
SET column=value
WHERE condition;
```

Example:

```sql
UPDATE student
SET age=22
WHERE id=1;
```

Only the student with id 1 changes.


---

# UPDATE Multiple Columns

```sql
UPDATE student
SET 
    name='Rabbit',
    age=21
WHERE id=1;
```


---

# UPDATE Using Existing Values

Example:

```sql
UPDATE student
SET age = age + 1;
```

Everyone becomes one year older.


---

# 3. WHERE Clause

`WHERE` filters rows.

---

## Equal

```sql
WHERE id=1
```

---

## Not Equal

```sql
WHERE id != 1
```

or

```sql
WHERE id <> 1
```


---

## Greater Than

```sql
WHERE age > 18
```


---

## Less Than

```sql
WHERE age < 18
```


---

## BETWEEN

```sql
WHERE age BETWEEN 18 AND 25
```


---

## AND

Both conditions must be true.

```sql
WHERE age > 18
AND name='Rabbit'
```


---

## OR

One condition must be true.

```sql
WHERE age > 18
OR name='Rabbit'
```


---

## LIKE

Search patterns.

Starts with:

```sql
WHERE name LIKE 'R%'
```

Ends with:

```sql
WHERE name LIKE '%t'
```

Contains:

```sql
WHERE name LIKE '%ab%'
```


---

## NULL Checking

Find empty values:

```sql
WHERE email IS NULL
```

Find non-empty values:

```sql
WHERE email IS NOT NULL
```


---

# 4. DELETE (Remove Data)

`DELETE` removes rows.

---

# Delete Specific Row

## Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

Example:

```sql
DELETE FROM student
WHERE id=1;
```


---

# Delete Multiple Rows

```sql
DELETE FROM student
WHERE age < 18;
```


---

# Delete All Rows

```sql
DELETE FROM student;
```

The table remains, but all data is removed.


---

# 5. DROP TABLE

Deletes the entire table.

```sql
DROP TABLE student;
```

Deletes:

- Table
- Columns
- Data
- Structure


---

# 6. TRUNCATE TABLE

Deletes all rows quickly.

```sql
TRUNCATE TABLE student;
```

Difference:

| Command | Removes Data | Removes Structure |
|---|---|---|
| DELETE | Yes | No |
| TRUNCATE | Yes | No |
| DROP | Yes | Yes |


---

# 7. INSERT (Add Data)

## Insert One Row

```sql
INSERT INTO student(name, age)
VALUES('Rabbit',21);
```


---

## Insert Multiple Rows

```sql
INSERT INTO student(name, age)
VALUES
('Rabbit',21),
('Alex',20),
('John',22);
```


---

# 8. SELECT (View Data)

## View Everything

```sql
SELECT *
FROM student;
```


---

## View Specific Columns

```sql
SELECT name, age
FROM student;
```


---

## SELECT With WHERE

```sql
SELECT *
FROM student
WHERE age > 20;
```


---

# 9. ORDER BY

Sort results.

Ascending:

```sql
SELECT *
FROM student
ORDER BY age ASC;
```

Descending:

```sql
SELECT *
FROM student
ORDER BY age DESC;
```


---

# 10. LIMIT

Limit returned rows.

```sql
SELECT *
FROM student
LIMIT 5;
```


---

# Complete Example

## Create Table

```sql
CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    email VARCHAR(100)
);
```


## Insert Data

```sql
INSERT INTO student(name, age)
VALUES('Rabbit',21);
```


## Update Data

```sql
UPDATE student
SET age=22
WHERE name='Rabbit';
```


## Delete Data

```sql
DELETE FROM student
WHERE name='Rabbit';
```


## Add Column

```sql
ALTER TABLE student
ADD phone VARCHAR(20);
```


## Remove Column

```sql
ALTER TABLE student
DROP COLUMN phone;
```


## Delete Table

```sql
DROP TABLE student;
```


## Exit MariaDB

```sql
exit;
```

---

# 5. Creating Tables

Example:

```sql
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(100)
);
```

A table contains columns.

This table has:

| Column | Type    | Purpose           |
| ------ | ------- | ----------------- |
| id     | INT     | Unique identifier |
| name   | VARCHAR | Student name      |
| age    | INT     | Student age       |
| email  | VARCHAR | Email address     |

---

# 6. Data Types

## INT

Stores whole numbers.

Example:

```sql
age INT;
```

Good for:

* Age
* Counts
* IDs

---

## BIGINT

Stores very large numbers.

Example:

```sql
id BIGINT;
```

Useful for:

* Huge systems
* Billions of records

INT range:

```
-2,147,483,648 to 2,147,483,647
```

BIGINT range:

```
About 9 quintillion values
```

---

## VARCHAR

Stores text with a maximum length.

Example:

```sql
name VARCHAR(100);
```

Means:

* Maximum 100 characters
* Spaces count as characters
* Does not always use 100 bytes

Example:

```
"Mr Rabbit"

M r _ R a b b i t

9 characters
```

---

## DATE

Stores dates.

Example:

```sql
birth_date DATE;
```

Better than storing age because age changes every year.

---

# 7. Column Rules (Constraints)

## NOT NULL

Requires a value.

Example:

```sql
name VARCHAR(100) NOT NULL;
```

Cannot be:

```
NULL
```

---

## PRIMARY KEY

A unique identifier.

Example:

```sql
id INT PRIMARY KEY;
```

Rules:

* Unique
* Cannot be NULL
* Only one primary key per table

---

## AUTO_INCREMENT

Automatically generates numbers.

Example:

```sql
id INT AUTO_INCREMENT;
```

Creates:

```
1
2
3
4
```

---

## UNIQUE

Prevents duplicate values.

Example:

```sql
email VARCHAR(100) UNIQUE;
```

Cannot have:

```
rabbit@gmail.com
rabbit@gmail.com
```

---

## DEFAULT

Adds a default value.

Example:

```sql
age INT DEFAULT 18;
```

---

## CHECK

Adds conditions.

Example:

```sql
age INT CHECK(age > 0);
```

---

## UNSIGNED

Allows only positive numbers.

Example:

```sql
id INT UNSIGNED;
```

Useful for IDs.

---

## COMMENT

Adds documentation.

Example:

```sql
mobile VARCHAR(20)
COMMENT 'Student phone number';
```

View comments:

```sql
SHOW FULL COLUMNS FROM student;
```

---

# 8. VARCHAR vs INT

Use INT for values you calculate.

Example:

```
age = 20
```

Use VARCHAR for identifiers.

Example:

```
mobile = 01712345678
student_id = 04325205101031
```

Phone numbers should be:

```sql
mobile VARCHAR(20)
```

because:

* Leading zeros matter
* Country codes exist
* They are not used for calculations

---

# 9. AUTO_INCREMENT and Custom IDs

AUTO_INCREMENT is convenient:

```sql
id INT AUTO_INCREMENT PRIMARY KEY;
```

But custom IDs may need BIGINT or VARCHAR.

Bad:

```sql
id INT
```

with:

```
04325205101031
```

because INT cannot store it.

Better:

```sql
student_id VARCHAR(20) PRIMARY KEY;
```

Example:

```
04325205101031
```

keeps the leading zero.

---

# 10. CRUD Operations

CRUD = Create, Read, Update, Delete

---

## INSERT

Add data:

```sql
INSERT INTO student(name, age)
VALUES('Rabbit', 7);
```

Multiple rows:

```sql
INSERT INTO student(name, age)
VALUES
('Kamrul',7),
('Mamunur',8);
```

---

## SELECT

Read data:

```sql
SELECT * FROM student;
```

Specific columns:

```sql
SELECT name, age FROM student;
```

With conditions:

```sql
SELECT *
FROM student
WHERE age > 7;
```

---

## UPDATE

Change existing data:

```sql
UPDATE student
SET age = 10
WHERE id = 1;
```

Always use WHERE.

Without WHERE:

```sql
UPDATE student
SET age = 10;
```

changes every row.

---

## DELETE

Remove data:

```sql
DELETE FROM student
WHERE id = 1;
```

---

# 11. ALTER TABLE

Used to modify table structure.

---

## Add column

```sql
ALTER TABLE student
ADD department VARCHAR(50);
```

---

## Remove column

```sql
ALTER TABLE student
DROP COLUMN age;
```

---

## Modify column

Change properties:

```sql
ALTER TABLE student
MODIFY age INT NOT NULL;
```

Remember:

`MODIFY` requires the complete definition.

---

## Rename column

Use CHANGE:

```sql
ALTER TABLE student
CHANGE department dep VARCHAR(50) NOT NULL;
```

Syntax:

```
CHANGE old_name new_name definition
```

---

## Move column position

Example:

Move age after mobile:

```sql
ALTER TABLE student
MODIFY age INT AFTER mobile;
```

---

# 12. Relationships

Databases use relationships between tables.

---

# One-to-One

Example:

```
Student
 |
Profile
```

One student has one profile.

---

# One-to-Many

Example:

```
Department
     |
     |
 Students
```

One department has many students.

---

# Many-to-Many

Example:

Students and subjects:

```
Student
   |
   |
student_subject
   |
   |
Subject
```

Tables:

## Student

```
id
name
```

## Subject

```
id
name
```

## Student_Subject

```
student_id
subject_id
```

---

# 13. Foreign Keys

Connect tables.

Example:

```sql
FOREIGN KEY(student_id)
REFERENCES student(id);
```

Prevents invalid references.

---

# 14. JOIN

Combines data from multiple tables.

Example:

```sql
SELECT
student.name,
subject.name
FROM student
JOIN student_subject
ON student.id = student_subject.student_id
JOIN subject
ON subject.id = student_subject.subject_id;
```

---

# 15. Database Normalization

Avoid storing repeated data.

Bad:

```
student

name
subjects

Rabbit
Math, Physics, Chemistry
```

Good:

```
student

subject

student_subject
```

Rules:

* Store information once
* Avoid duplicate data
* Use relationships

---

# 16. Viewing Database Storage

Find MariaDB storage location:

```sql
SHOW VARIABLES LIKE 'datadir';
```

XAMPP default:

```
C:\xampp\mysql\data
```

---

View table creation:

```sql
SHOW CREATE TABLE student;
```

View table information:

```sql
SHOW TABLE STATUS;
```

---

# 17. Backup and Restore

## Export database

Use:

```bash
mysqldump -u root school > backup.sql
```

Meaning:

```
Database → File
```

---

## Restore database

Use:

```bash
mysql -u root school < backup.sql
```

Meaning:

```
File → Database
```

---

Inside MariaDB:

```sql
SOURCE C:/backup.sql;
```

---

# 18. Important Database Concepts To Learn Next

After basics:

## Indexes

Make searching faster.

```sql
CREATE INDEX idx_email
ON student(email);
```

---

## Transactions

Useful for operations that must all succeed.

Example:

Bank transfer:

```
Remove money
+
Add money
```

---

## Users and Permissions

Learn:

```sql
CREATE USER
GRANT
REVOKE
```

---

## Views

Virtual tables based on queries.

---

## Stored Procedures

Reusable SQL programs.

---

## Triggers

Automatically execute actions.

Example:

```
After inserting a student,
create a log entry.
```

---

## Database Security

Learn:

* SQL injection prevention
* User permissions
* Password security
* Backups

---

# Final Learning Path

Recommended order:

1. SQL syntax
2. CRUD
3. Data types
4. Constraints
5. ALTER TABLE
6. Relationships
7. Foreign Keys
8. JOINs
9. Normalization
10. Indexes
11. Transactions
12. Backend integration

---

MariaDB is the foundation of many backend systems. Understanding SQL deeply makes learning Spring Boot, Node.js, Go, Django, Laravel, and other backend technologies much easier.
