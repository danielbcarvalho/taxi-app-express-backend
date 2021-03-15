# WeTaxi - Express Backend
A React-Native App that links Taxi Drivers and Passengers. 

Backend server for managing the database (Mongodb) and auth of the app.

## Installation

From terminal install dependencies

```
yarn
```

Create a MongoDB Atlas database on https://www.mongodb.com/ 

Connect to your application and copy de connection string:
```
mongodb+srv://<username>:<password>@your-db.d9con.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Create a file named mongodb.js inside the config folder.

Add the Mongodb string with your personal db's information.
```
const mongodb = "mongodb+srv://<username>:<password>@your-db.d9con.mongodb.net/<dbname>?retryWrites=true&w=majority";

module.exports = mongodb;
```

## Running

```
$ node index.js
```



## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: danielborgesdecarvalho@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/daniel-carvalho-0a4916122/)

Thank you!
