import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const projects = [
  {
    title: 'StudyAI',
    description:
      'AI-powered study assistant built with the MERN stack. Leverages the Gemini API to help students generate summaries, quizzes, and study plans from their notes.',
    githubUrl: 'https://github.com/SAYAN2122/studyAI',
    liveUrl: 'https://study-ai-ashy-six.vercel.app',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'AI/Gemini API', 'Tailwind CSS'],
    featured: true,
    order: 1,
  },
  {
    title: 'AI Travel Planner',
    description:
      'AI-powered travel planner built with the MERN stack. Uses the Gemini API to generate personalised itineraries, suggest destinations, and plan trips end-to-end.',
    githubUrl: 'https://github.com/SAYAN2122/AI-Travel-Planner',
    liveUrl: 'https://ai-travel-planner-woad-two.vercel.app',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'AI/Gemini API', 'Tailwind CSS'],
    featured: true,
    order: 2,
  },
];

const seed = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error('❌ MONGODB_URI is not set in .env. Aborting seed.');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    for (const projectData of projects) {
      const existing = await Project.findOne({ title: projectData.title });
      if (existing) {
        console.log(`⏭️  Project already exists, skipping: "${projectData.title}"`);
      } else {
        await Project.create(projectData);
        console.log(`✅ Inserted project: "${projectData.title}"`);
      }
    }

    console.log('🌱 Seeding complete.');
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
};

seed();
