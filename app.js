const express = require('express');
const connectDB = require('./db/connect')
const app = express();
require('dotenv').config()

const tasks = require('./routes/tasks');
const users = require('./routes/users');
app.use(express.json());
app.use('/home', express.static('./public'));
app.use('/auth', express.static('./public/auth'));

// app.use('/', tasks)
app.use('/user', users);

const port = 3000;

const start  = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server started at port ' + port));
    } catch (error) {
        console.log(error);
    }
}

start();