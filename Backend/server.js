const express =require('express')
require('dotenv').config()
const mailroutes=require("./Routes/mail")
const mongoose = require('mongoose');
const app= express();
const cors = require('cors');

app.use(cors());
// middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/mails',mailroutes)




// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        
        // Start the server once connected to the database
        app.listen(process.env.PORT, () => {
            console.log(`Server is running and listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });



//listen for requests


process.env
