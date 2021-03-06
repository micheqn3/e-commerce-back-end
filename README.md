
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## E-Commerce Back-End

This repository contains an E-Commerce shop's back-end and is powered by Express.js, MySQL, and Sequelize. <br>
The tables are created using Sequelize models and utilizes association methods to create relationships between the tables. <br>
Routes are created using Express.js and allows the user to perform RESTful CRUD Operations for each table.

### Installation 

1. Make sure you have Node.js to run the application
2. Clone this repo
> HTTPS: `https://github.com/micheqn3/e-commerce-back-end.git` <br>
> SSH: `git@github.com:micheqn3/e-commerce-back-end.git`
3. Install the NPM packages
> npm install
4. Provide your MySQL credentials in an .env file and make sure your MySQL server is running
5. Create the database in MySQL using the schema found in db/ schema.sql
6. Test routes by seeding the database
> npm run seed
7. Run the application in command line 
> node server.js


### This repository contains: 

- server.js - This file uses Sequelize to sync models to the database and establishes a connection to Express.js.
- /models - This folder contains all of the tables and associations created using Sequelize.
- /routes - This folder contains category, product, and tag routes that perform CRUD operations to the tables.
- /seeds - This folder contains seed data for all tables.
- /config / connection.js - This file initializes the connection to Sequelize.
- /db / schema.sql - This file contains the schema for the MySQL database.

### Technologies/Languages used: 

  - JavaScript
  - Node.js
  - MySQL2
  - Express.js
  - Nodemon
  - Dotenv

### Walkthrough Demo :video_camera:

[LINK TO DEMO](https://drive.google.com/file/d/19M-tdL8rBptRbpdvkbAC5qbYLU-tc1SU/view)


### License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT
