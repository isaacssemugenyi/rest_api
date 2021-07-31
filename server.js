const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const PORT = process.env.PORT || 3000;

require('./src/index')(app)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app;