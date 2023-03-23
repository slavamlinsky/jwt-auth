require('dotenv').config();
const express = require('express');
const cors= require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router')
const errorMiddleware = require('./middlewares/error-middleware')


const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json());
app.use(cookieParser());

const corsOptions ={
    origin: process.env.CLIENT_URL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));


app.use('/api', router);
app.use(errorMiddleware);


const start = async () => {
    //console.log(process.env.DB_URL);
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=> console.log(`Server Started on PORT = ${PORT}`))    
    } catch (e) {
        console.log(e);
    }
}

start()
