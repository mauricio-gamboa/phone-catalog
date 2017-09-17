# Phone Catalog Application

This is a web application that displays a phone catalog. It's based in Angular 4 and Ngrx for reacting programming, it also uses Mongo as the data base platform.

TODO: Add images

## Instructions to run the application

Note: These instructions assume that you already have Node.js, NPM and Mongo installed in your system.

### Create data base

* Run `mongoimport --db phoneCatalogDB --collection phones --file PATH_TO_PROJECT/phone-catalog/server/data/phones.json` in the terminal (change the PATH_TO_PROJECT section to your own path to the project). This command creates the mongo data base and imports the data from `phones.json`.
* Run `mongod` to start the mongo server.

### Start the server

* Navigate to the `phone-catalog` folder in your terminal.
* Run `cd server` to get into the server's folder.
* Run `npm install` to install the dependencies.
* Run `npm start` to start the server.
* You should see a message saying `Phone Catalog RESTful API server started on: 3000`.

### Start the client app

* Navigate to the `phone-catalog` folder in your terminal.
* Run `cd clientapp` to get into the client app's folder.
* Run `npm install` to install the dependencies.
* Run `ng serve` to start the client application.

## Run tests

* Run `npm test` in the `clientapp` folder.

Note: Tests are pending.