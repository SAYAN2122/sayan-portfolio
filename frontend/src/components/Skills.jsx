import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiVercel,
  SiRender,
  SiGooglegemini,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import styles from './Skills.module.css'

const categories = [
  {
    label: 'Frontend',
    icon: '🎨',
    color: '#61dafb',
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61dafb', level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', level: 85 },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', level: 88 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8', level: 80 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: '#68a063',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', level: 85 },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', level: 82 },
      { name: 'REST APIs', icon: <TbApi />, color: '#a855f7', level: 88 },
    ],
  },
  {
    label: 'Database',
    icon: '🗄️',
    color: '#4db33d',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d', level: 82 },
      { name: 'Mongoose', icon: <SiMongoose />, color: '#880000', level: 78 },
    ],
  },
  {
    label: 'Tools & Others',
    icon: '🛠️',
    color: '#f97316',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032', level: 85 },
      { name: 'GitHub', icon: <FaGithub />, color: '#e2e8f0', level: 88 },
      { name: 'Vercel', icon: <SiVercel />, color: '#e2e8f0', level: 80 },
      { name: 'Render', icon: <SiRender />, color: '#46e3b7', level: 75 },
      { name: 'Gemini AI', icon: <SiGooglegemini />, color: '#4285f4', level: 72 },
      { name: 'Postman', icon: <SiPostman />, color: '#ff6c37', level: 82 },
    ],
  },
]

function SkillCard({ skill, delay, isInView }) {
  return (
    <motion.div
      className={`${styles.skillCard} glass`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, boxShadow: `0 12px 30px rgba(0,0,0,0.3)` }}
    >
      <div className={styles.skillIcon} style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <div className={styles.skillInfo}>
        <div className={styles.skillName}>{skill.name}</div>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
            style={{ '--skill-color': skill.color }}
          />
        </div>
        <span className={styles.levelText}>{skill.level}%</span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.sectionTag}>WHAT I WORK WITH</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className={styles.divider} />
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Technologies and tools I use to build full-stack applications
          </p>
        </motion.div>

        {/* Categories */}
        <div className={styles.categories}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3
                  className={styles.catLabel}
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>
              </div>
              <div className={styles.skillsGrid}>
                {cat.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={ci * 0.1 + si * 0.07}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
