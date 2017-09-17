# Phone Catalog Application Showing

This a web application that displays a phone catalog. It's based in Angular 4 and ngrx for reacting programming, it also uses Mongo as the data base platform.

It assumes that you already have Node.js, NPM and Mongo installed in your system.

TODO: Add images

## Instructions to run the application

### Create data base

* Run `mongoimport --db phoneCatalogDB --collection phones --file PATH_TO_PROJECT/phone-catalog-app/server/data/phones.json` in the terminal (change the PATH_TO_PROJECT section to your own path to the project). This command creates the mongo data base and imports the data from `phones.json`.
* Run `mongod` to start the mongo server.

### Start the server

* Run `cd phone-catalog-app` to get into the app's folder.
* Run `cd server` to get into the server's folder.
* Run `npm install` to install the dependencies.
* Run `npm start` to start the server.
* You should see a message saying `Phone Catalog RESTful API server started on: 3000`.

### Start the client app

* Run `cd phone-catalog-app` to get into the app's folder.
* Run `cd clientapp` to get into the client app's folder.
* Run `npm install` to install the dependencies.
* Run `ng serve` to start the client application.

## Run tests

* Run `npm test` in the `clientapp` folder.

Note: Tests are pending.