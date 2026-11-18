import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import axios from 'axios'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import styles from './Projects.module.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const FALLBACK_PROJECTS = [
  {
    _id: '1',
    title: 'StudyAI',
    description:
      'An AI-powered study assistant that helps students learn smarter. Generates quizzes, summaries, and explanations from any topic using Google Gemini AI.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI'],
    githubUrl: 'https://github.com/SAYAN2122/studyAI',
    liveUrl: 'https://study-c6fa2r7ly-sayan2122.vercel.app',
    featured: true,
  },
  {
    _id: '2',
    title: 'AI Travel Planner',
    description:
      'An intelligent travel planning application that generates personalized itineraries, recommends destinations, and suggests activities powered by Gemini AI.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Vercel'],
    githubUrl: 'https://github.com/SAYAN2122/AI-Travel-Planner',
    liveUrl: 'https://ai-travel-planner-woad-two.vercel.app',
    featured: true,
  },
]

const BADGE_COLORS = {
  React: '#61dafb',
  'Node.js': '#68a063',
  Express: '#ffffff',
  MongoDB: '#4db33d',
  'Gemini AI': '#4285f4',
  Vercel: '#ffffff',
  Tailwind: '#38bdf8',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  TypeScript: '#3178c6',
}

function getBadgeColor(tech) {
  return BADGE_COLORS[tech] || '#a855f7'
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      className={styles.card}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={index}
    >
      {/* Top gradient border bar */}
      <div className={styles.cardTopBar} />

      {project.featured && (
        <div className={styles.featuredBadge}>
          <FaStar size={10} /> Featured
        </div>
      )}

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        {/* Tech badges */}
        <div className={styles.techStack}>
          {(project.techStack || []).map((tech) => (
            <span
              key={tech}
              className={styles.techBadge}
              style={{ '--badge-color': getBadgeColor(tech) }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card actions */}
      <div className={styles.cardActions}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionBtn}
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [projects, setProjects] = useState(FALLBACK_PROJECTS)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/projects`, { timeout: 4000 })
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data)
        }
      } catch {
        // Silently keep high-quality fallback projects
      }
    }
    fetchProjects()
  }, [])

  return (
    <div className={`section-padding ${styles.section}`} ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.sectionTag}>WHAT I'VE BUILT</p>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className={styles.divider} />
          <p className={`section-subtitle ${styles.desc}`}>
            Here are some of my featured projects. Each one is crafted with attention to detail and real-world utility.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className={styles.loadingWrapper}>
            <div className="spinner" />
          </div>
        )}

        {/* Projects grid */}
        {!loading && (
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <ProjectCard
                key={project._id || i}
                project={project}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/SAYAN2122"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  )
}
