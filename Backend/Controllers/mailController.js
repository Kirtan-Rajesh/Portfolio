const mongoose = require('mongoose');
const Mail = require('../Models/mailModel');

// Get all mails
const getMails = async (req, res) => {
    try {
        const mails = await Mail.find({}).sort({ createdAt: -1 });
        res.status(200).json(mails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single mail
const getMail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid Mail ID' });
    }

    try {
        const mail = await Mail.findById(id);
        if (!mail) {
            return res.status(404).json({ error: 'No such Mail' });
        }
        res.status(200).json(mail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new mail
const createMail = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const mail = await Mail.create({ name, email, subject, message });
        res.status(201).json(mail);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a mail
const deleteMail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid Mail ID' });
    }

    try {
        const mail = await Mail.findByIdAndDelete({_id: id});
        if (!mail) {
            return res.status(404).json({ error: 'No such Mail' });
        }
        res.status(200).json({ message: 'Mail deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getMails,
    getMail,
    createMail,
    deleteMail
};
