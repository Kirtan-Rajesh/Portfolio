const express = require('express');
require('dotenv').config();
const mailroutes = require('./Routes/mail');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// List of allowed origins for CORS
const allowedOrigins = [
    "https://portfolio-e2yw7qbld-kirtans-projects-444621e3.vercel.app/"  // Add your custom domain here
];

// CORS configuration
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["POST", "GET"],
    credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Logging middleware to track requests
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request Path: ${req.path}`);
    next();
});

// API routes
app.use('/api/mails', mailroutes);

// Root route for testing
app.get('/', (req, res) => {
    res.json("hello");
});

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        
        // Start the server once connected to the database
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running and listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
