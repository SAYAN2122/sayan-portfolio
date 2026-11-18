import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// GET /api/projects — return all projects sorted by order
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
});

// POST /api/projects — create a new project
router.post('/', async (req, res) => {
  try {
    const { title, description, githubUrl, liveUrl, technologies, image, featured, order } =
      req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required.' });
    }

    const project = new Project({
      title,
      description,
      githubUrl,
      liveUrl,
      technologies,
      image,
      featured,
      order,
    });

    await project.save();
    return res.status(201).json({ success: true, data: project });
  } catch (error) {
    console.error('Error creating project:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
});

export default router;
