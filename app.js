const express = require('express');
const connectDB = require('./db/connect')
const app = express();
require('dotenv').config()

const tasks = require('./routes/tasks');
const users = require('./routes/users');
const notFound = require('./middleware/notFound');
const {errorHandler} = require('./middleware/errorHandler');


const middle1 = (req, res, next) => {
    console.log("middle1");
    next();
}

const middle2 = (req, res, next) => {
    console.log("middle2 " + res.status);
    next();
}

app.use(express.json());
app.use('/home', express.static('./public'));
app.use('/auth', express.static('./public/auth'));

// app.use(middle1);

app.use('/', tasks)
app.use('/user', users);
app.use(notFound);
app.use(errorHandler);

// app.use(middle2);

const port = 3000;

const start  = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server started at port ' + port));
    } catch (error) {
        console.log("Unable to connect to DB server");
        console.log(error);
    }
}

start();