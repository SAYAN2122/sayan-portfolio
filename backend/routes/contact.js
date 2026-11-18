import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact — save a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
});

// GET /api/contact — retrieve all contacts (admin, no auth for now)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
});

export default router;
