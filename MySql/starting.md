### For terminal/command promt

> Create a oracle account

> install mysql
> `sudo apt install mysql-server -y`

> run:   `sudo systemctl start mysql`
> check: `sudo systemctl status mysql`
> login: `sudo mysql -u root -p` or `mysql`

> show all db      : `SHOW DATABASES;`
> create new db    : `CREATE DATABASE database_name;`
> change current db: `USE database_name;`
> delete db        : `DROP DATABASE database_name;`

!!!NEVER DELETE GIVEN DB INSIDE MYSQL:
sys, information_schema, performance_schema, mysql!!!

> Create a new user:
> `CREATE USER 'phpuser'@'localhost' IDENTIFIED BY '1234';`
> `GRANT ALL PRIVILEGES ON firstphp.* TO 'phpuser'@'localhost';`
> `FLUSH PRIVILEGES;`

---

### Extra useful commands

> show tables in a db: `SHOW TABLES;`
> describe table: `DESCRIBE table_name;`
> exit mysql: `EXIT;`

---

### Important notes

> Password security:
>
> * Never store plain passwords
> * Always hash passwords in backend (bcrypt / argon2)

> Improve table structure (constraints)
>
> ```sql
> email VARCHAR(100) UNIQUE NOT NULL,
> name VARCHAR(100) NOT NULL,
> password VARCHAR(255) NOT NULL
> ```

> Update data in table
>
> ```sql
> UPDATE users
> SET name = 'NewName'
> WHERE id = 1;
> ```

> Delete a single row (NOT database)
>
> ```sql
> DELETE FROM users
> WHERE id = 1;
> ```

> Better login query:
>
> ```sql
> SELECT * FROM users WHERE email='rabbit@mail.com';
> ```

> Speed improvement (indexing)
>
> ```sql
> CREATE INDEX idx_email ON users(email);
> ```

> Create a new user: 
>```sql
> CREATE USER 'phpuser'@'localhost' IDENTIFIED BY '1234'; 
> GRANT ALL PRIVILEGES ON firstphp.* TO 'phpuser'@'localhost'; 
> FLUSH PRIVILEGES;
>```
>
> Safer user permissions
> Instead of ALL PRIVILEGES:
>
> ```sql
> GRANT SELECT, INSERT, UPDATE ON firstphp.* TO 'phpuser'@'localhost';
> ```

> Backup database
>
> ```bash
> mysqldump -u root -p firstphp > backup.sql
> ```

> Restore database
>
>```bash
>mysql -u root -p firstphp < backup.sql
>```