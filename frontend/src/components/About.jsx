import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView as useIOInView } from 'react-intersection-observer'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
  FaLayerGroup,
  FaBrain
} from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from './About.module.css'

const stats = [
  { number: 2, suffix: '+', label: 'Deployed Apps', icon: <FaProjectDiagram /> },
  { number: 3, suffix: 'rd Year', label: 'B.Tech CSE', icon: <FaGraduationCap /> },
  { number: 1, suffix: ' Focus', label: 'MERN Specialist', icon: <FaLayerGroup /> },
  { number: 194, suffix: '+', label: 'LeetCode Solved', icon: <FaCode /> },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function StatCard({ stat, inView }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIcon}>{stat.icon}</div>
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
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [statsRef, statsInView] = useIOInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div className={`section-padding ${styles.section}`} ref={ref}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className={styles.sectionTag}>BACKGROUND &amp; PHILOSOPHY</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className={styles.divider} />
        </motion.div>

        <div className={styles.grid}>
          {/* Left — Professional Narrative */}
          <motion.div
            className={styles.textSide}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={styles.greeting}>
              Engineering robust digital products from concept to deployment.
            </h3>
            
            <p className={styles.bio}>
              I am a 3rd-year Computer Science &amp; Engineering undergraduate at{' '}
              <span className={styles.highlight}>
                Punjab College of Technical Engineering (PCTE), Ludhiana
              </span>
              . My technical focus centers on architecting scalable full-stack web applications using the MERN ecosystem (MongoDB, Express, React, Node.js), combined with modern AI integrations.
            </p>
            
            <p className={styles.bio}>
              I prioritize clean code structure, predictable state management, and responsive interfaces. Beyond application development, I actively strengthen my computational thinking through Data Structures and Algorithms practice.
            </p>

            {/* Structured Specifications Grid */}
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Ludhiana, Punjab, India</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaEnvelope />
                </div>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:sayangoel14@gmail.com" className={styles.infoLink}>
                    sayangoel14@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaGraduationCap />
                </div>
                <div>
                  <span className={styles.infoLabel}>Academics</span>
                  <span className={styles.infoValue}>B.Tech in Computer Science</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIconWrapper}>
                  <FaCode />
                </div>
                <div>
                  <span className={styles.infoLabel}>Core Stack</span>
                  <span className={styles.infoValue}>MongoDB, Express, React, Node.js</span>
                </div>
              </div>
            </div>

            <div className={styles.actionRow}>
              <a
                href="https://github.com/SAYAN2122"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <span>GitHub Repositories</span>
                <FiArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right — Key Technical Metrics */}
          <motion.div
            className={styles.statsSide}
            ref={statsRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.statsCardWrapper}>
              <div className={styles.statsHeader}>
                <h4 className={styles.statsTitle}>Engineering Profile</h4>
                <span className={styles.badgeLabel}>Active 2026</span>
              </div>
              <p className={styles.statsSummary}>
                Demonstrated commitment to building real-world software solutions and continuous problem-solving practice.
              </p>
              
              <div className={styles.statsGrid}>
                {stats.map((s) => (
                  <StatCard key={s.label} stat={s} inView={statsInView} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
