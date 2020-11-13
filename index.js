const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/routes'); 

const app = express();

mongoose.connect('mongodb+srv://manojm:manojm@mnjcluster.d2up1.mongodb.net/UserDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT: ${PORT}`);
})