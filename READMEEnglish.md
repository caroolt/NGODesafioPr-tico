

<h1 align="center">Voting API</h1>

![issues](https://img.shields.io/github/issues/caroolt/votingAPI?color=red) ![license](https://img.shields.io/github/license/caroolt/votingAPI)

![Banner de pessoas votando](https://user-images.githubusercontent.com/82682093/156283363-a3c602e7-b249-4b8e-ad9f-bf3928ec5378.png)

## Index
  1. [Project Description](#description)
  2. [Techniques and Technologies](#technologies)
  3. [Open and run the project](#run_project)
  4. [Project Features](#project_features)
  4. [People who helped develop the project](#developers)
  5. [Portuguese Readme](./README.md)

### Project Description
###### description
The goal of this project is to develop an API for voting using Node.js and some dependencies.

### Techniques and Technologies
###### technologies
- Node.js v14.17.0
- Express
- mySQL
- Sequelize


## 🛠️ Open and run the project
###### run_project

#### 1- Clone the Project
#### 2- Edit the default.json file inside the config folder
 - In this step your machine must have and be running [mySQL](https://dev.mysql.com/downloads/)
 - The user and password must be the same as the one used in mySQL

![config](https://user-images.githubusercontent.com/82682093/156618162-2c8e5237-d657-4c5a-a0e5-46461bb20a62.png)

#### 3- Install all dependencies
   `yarn install`
   
#### 4- Create the database
  - In CMD type the following command
  
  `mysql -u root -p -P 3307`
 
  - To create the database you need to type the command in CMD
  
  mysql>`CREATE DATABASE name_defined_in_config_file;`
  
  - Then all you have to do is switch to the database
  
  mysql> `use name_defined_in_config_file`

#### 5- Create the tables
  - After you have connected to the database just create the table you are using
  
  `node api/database/createTables.js`

#### 6- Run the project 
   `yarn start`
 
#### 7- Non-mandatory step
   - In the insomnia folder there is a json with the methods to be tested. To use them in insomnia just import the json and you are done.
   
   _Insomnia is a REST API client tool, like Postman, but has some additional features, such as GraphQL support, gRPC, and others._

### :hammer: Project Features
###### project_features
- `Candidate Registration`: Basic candidate registration (without worrying about authentication and more complex registration with JWT);
- `Get All Candidates`: It should be possible to list all candidates;
- `Vote Registration`: Vote registration (based on ID)
  - If successful, it should `return` the candidate ID along with the total number of votes the candidate received (code 200);
  - If it votes for a candidate ID that does not exist, it will return code 404 with an error message;
- `Get All votes for a candidate`: It should be possible to `get' all the votes for X candidate based on the ID;
- Delete a candidate`: It should be possible to delete a candidate based on their ID

Translated with www.DeepL.com/Translator (free version)

## Project Developer
###### developers
| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) | 
| :---: |


