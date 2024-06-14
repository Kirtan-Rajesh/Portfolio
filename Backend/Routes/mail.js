const express = require('express');
const router = express.Router();
const Mail = require('../Models/mailModel');
const {
    createMail,   // Correct function name
    getMail,
    getMails,
    deleteMail    // Ensure this is imported from the controller
} = require("../Controllers/mailController");

// Get all mails
router.get('/', getMails);

// Get a single mail
router.get('/:id', getMail);

// Create a new mail
router.post('/', createMail); // Use the controller function directly

// Delete a mail
router.delete('/:id', deleteMail); // Use the controller function directly

module.exports = router;
