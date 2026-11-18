# Sayan Goel — Full-Stack MERN Portfolio

A modern, high-performance personal portfolio website built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled with clean glassmorphism and modern UI interactions. Tailored to highlight software engineering skills, competitive programming achievements, and AI-powered projects for recruiters and hiring managers.

---

## 🚀 Live Projects Highlighted
- **StudyAI**: AI-powered study assistant built with MERN stack, Groq/Gemini AI, document parsing, and quiz generation. ([Live Demo](https://study-ai-ashy-six.vercel.app) | [GitHub](https://github.com/SAYAN2122/studyAI))
- **AI Travel Planner**: End-to-end intelligent itinerary generator and budget planner. ([Live Demo](https://ai-travel-planner-woad-two.vercel.app) | [GitHub](https://github.com/SAYAN2122/AI-Travel-Planner))

---

## 💡 Key Features
- **Recruiter-First Hero & About**: Clear tagline, "Open to Work" status indicator, stats counter, and direct resume/contact links.
- **Interactive Projects Showcase**: Dynamic project cards loaded from MongoDB with live deployment links and GitHub repositories.
- **LeetCode Achievements Dashboard**: Showcases verified stats (194+ solved, 105 Medium, 71 Easy, 18 Hard, 100-Day & 50-Day Badges, 170+ active days).
- **Interactive Contact Form**: Sends messages directly to a MongoDB database with email notifications.
- **Fast & Responsive**: Built with Vite + React 18, Framer Motion animations, and mobile-first design.

---

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Framer Motion, React Icons, CSS Modules
- **Backend**: Node.js, Express.js, Helmet, CORS, Express Rate Limit
- **Database**: MongoDB (Mongoose ODM)
- **Deployment**: Vercel (Frontend), Render / Railway (Backend), MongoDB Atlas (Cloud Database)

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/SAYAN2122/sayan-portfolio.git
cd sayan-portfolio
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Fill in your MONGODB_URI in backend/.env
npm run seed   # Seeds the initial projects into MongoDB
npm run dev    # Starts backend server on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev    # Starts Vite dev server on http://localhost:5173
```

---

## 🌐 Free Cloud Deployment Guide

### Frontend Deployment (Vercel)
1. Push this repository to GitHub (`SAYAN2122/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your portfolio repo, set **Root Directory** to `frontend`.
4. Add Environment Variable:
   - `VITE_API_URL`: Your deployed backend URL.
5. Click **Deploy**. Your portfolio will be live instantly!

### Backend & Database Deployment (Render + MongoDB Atlas)
1. **MongoDB Atlas**:
   - Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a database user and copy your connection string: `mongodb+srv://<user>:<password>@cluster0.xxx.mongodb.net/portfolio`.
2. **Render**:
   - Create a new **Web Service** on [Render](https://render.com).
   - Point to your repo, set **Root Directory** to `backend`.
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Add Environment Variable: `MONGODB_URI` = your Atlas connection string.
