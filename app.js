const express = require('express');
const connectDB = require('./db/connect')
const app = express();
require('dotenv').config()

const tasks = require('./routes/tasks');
app.use(express.json());
app.get('/hello', (req, res) => {
    res.send("Hello");
});

app.use('/', tasks)

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