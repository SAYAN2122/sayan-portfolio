import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView as useIOInView } from 'react-intersection-observer'
import styles from './About.module.css'

const GITHUB_AVATAR = 'https://avatars.githubusercontent.com/u/192669532?v=4'

const stats = [
  { number: 2, suffix: '+', label: 'Projects Built', icon: '🚀' },
  { number: 3, suffix: 'rd Year', label: 'B.Tech CSE', icon: '🎓' },
  { number: 1, suffix: ' Stack', label: 'MERN Specialist', icon: '⚡' },
  { number: 2, suffix: '+', label: 'AI-Powered Apps', icon: '🤖' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function StatCard({ stat, inView }) {
  return (
    <div className={styles.statCard}>
      <span className={styles.statIcon}>{stat.icon}</span>
      <div className={styles.statNumber}>
        {inView ? (
          <CountUp
            end={stat.number}
            duration={2}
            suffix={stat.suffix}
            useEasing
          />
        ) : (
          <span>0{stat.suffix}</span>
        )}
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [statsRef, statsInView] = useIOInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className={styles.sectionTag}>GET TO KNOW ME</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className={styles.divider} />
        </motion.div>

        <div className={styles.grid}>
          {/* Left — Avatar card */}
          <motion.div
            className={styles.avatarSide}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.avatarCard}>
              <div className={styles.avatarGlow} />
              <img
                src={GITHUB_AVATAR}
                alt="Sayan Goel"
                className={styles.avatar}
              />
              <div className={styles.avatarBadge}>
                <span className={styles.dot} />
                Open to Work
              </div>
            </div>
            <div className={styles.techPills}>
              {['React', 'Node.js', 'MongoDB', 'Express', 'Gemini AI'].map((t) => (
                <span key={t} className={styles.techPill}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + stats */}
          <motion.div
            className={styles.textSide}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className={styles.greeting}>
              I'm Sayan Goel 👋
            </h3>
            <p className={styles.bio}>
              I'm a passionate <strong>3rd-year B.Tech CSE student</strong> from{' '}
              <span className={styles.highlight}>
                Punjab College of Technical Engineering, Ludhiana
              </span>
              . I build full-stack web applications powered by AI, using the{' '}
              <span className={styles.highlight}>MERN stack</span>. I love turning
              ideas into real products that solve real problems.
            </p>
            <p className={styles.bio}>
              Whether it's building a study assistant with Gemini AI or creating an
              intelligent travel planner, I'm constantly exploring how modern AI can
              enhance everyday applications.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📍 Location</span>
                <span className={styles.infoValue}>Ludhiana, Punjab, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📧 Email</span>
                <a href="mailto:sayangoel14@gmail.com" className={styles.infoValue}>
                  sayangoel14@gmail.com
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>🎓 Degree</span>
                <span className={styles.infoValue}>B.Tech in CSE</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>💼 Stack</span>
                <span className={styles.infoValue}>MERN + AI</span>
              </div>
            </div>

            <a
              href="https://github.com/SAYAN2122"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', marginTop: '1rem' }}
            >
              <span>View GitHub Profile</span>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <StatCard stat={stat} inView={statsInView} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
