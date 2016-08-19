#Smart Home

### Project Description

SmartHome is a home automation app. Features include current temperature inside or outside your home, monitoring open doors, and recommendation on whether you should water your lawn or garden based on the local weather forecast.

On the personal dashboard, users can see the temperature readings, status of their doors, sprinkler system advice, motion light status, and weather forecast for the week.

### Technical Notes:

SmartHome is a fully decoupled app. It consists of a client side (Firebase) website, server side (Heroku) API, PostgreSQL database, and a realtime firebase database that is updated by an Arduino MicroController.

Technologies Used:
* Front-End: AngularJS, AngularFire, HTML5, Sass, Font Awesome
* Server-Side: Node.js, Express, JWT Authentication, Knex.js, PG, bcrypt
* Database: PostgreSQL
* Hardware: Arduino Uno MicroController, Node.js, Johnny-Five, Firebase Realtime Database

### Sass
To run Sass with the program, ```cd``` into the css folder and run ```sass --watch sass/main.scss:main.css```.

### Deployed URL
https://smart-home-1fcd9.firebaseapp.com/#/home


[Link to Database Repo](https://github.com/bradford-hamilton/SmartHome-Database)

[Link to Hardware Server Repo](https://github.com/bradford-hamilton/SmartHome-HardwareFirebase)

[Link to Express API Repo](https://github.com/bradford-hamilton/SmartHome-ExpressAPI)

### Hardware Set-Up

![Arduino Uno Diagram](https://github.com/q3SmartHome/Client_Side/blob/master/SmartHomeDiagram.png)
