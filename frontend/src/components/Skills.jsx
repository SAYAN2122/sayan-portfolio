import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaTools
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

const skillGroups = [
  {
    label: 'Frontend Engineering',
    icon: <FaDesktop />,
    description: 'Component architecture, responsive layouts, and state management.',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML5 Semantic', icon: <FaHtml5 /> },
      { name: 'CSS3 Modules', icon: <FaCss3Alt /> },
    ],
  },
  {
    label: 'Backend & APIs',
    icon: <FaServer />,
    description: 'RESTful API design, middleware pipelines, and authentication.',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'RESTful Architecture', icon: <TbApi /> },
      { name: 'JWT & Security', icon: <FaTools /> },
    ],
  },
  {
    label: 'Database Systems',
    icon: <FaDatabase />,
    description: 'Document schema design, data modeling, and query optimization.',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Mongoose ODM', icon: <SiMongoose /> },
      { name: 'MongoDB Atlas', icon: <SiMongodb /> },
    ],
  },
  {
    label: 'DevOps & Tooling',
    icon: <FaTools />,
    description: 'Version control, cloud deployment platforms, and AI integrations.',
    skills: [
      { name: 'Git Version Control', icon: <FaGitAlt /> },
      { name: 'GitHub Actions', icon: <FaGithub /> },
      { name: 'Vercel Deployment', icon: <SiVercel /> },
      { name: 'Render Cloud', icon: <SiRender /> },
      { name: 'Gemini / Groq AI', icon: <SiGooglegemini /> },
      { name: 'Postman Testing', icon: <SiPostman /> },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className={`section-padding ${styles.section}`} ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.sectionTag}>TECHNICAL CAPABILITIES</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            A structured stack built around modern JavaScript and scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Groups Grid */}
        <div className={styles.groupsGrid}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.groupCard}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.groupIconWrapper}>
                  {group.icon}
                </div>
                <div>
                  <h3 className={styles.groupTitle}>{group.label}</h3>
                  <p className={styles.groupDesc}>{group.description}</p>
                </div>
              </div>

              <div className={styles.chipsContainer}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillChip}>
                    <span className={styles.chipIcon}>{skill.icon}</span>
                    <span className={styles.chipName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
