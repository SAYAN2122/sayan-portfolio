import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'
import { FaExternalLinkAlt, FaCode, FaAward, FaFire, FaCalendarCheck } from 'react-icons/fa'
import styles from './LeetCode.module.css'

export default function LeetCode() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const stats = {
    totalSolved: 194,
    easy: 71,
    medium: 105,
    hard: 18,
    activeDays: '170+',
    streak: '21 Days',
    badges: [
      { name: '100 Days Badge 2026', icon: 'https://assets.leetcode.com/static_assets/others/100_1080_1080.png' },
      { name: '50 Days Badge 2026', icon: 'https://assets.leetcode.com/static_assets/others/50_1080_1080.png' }
    ]
  }

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
          <p className={styles.sectionTag}>PROBLEM SOLVING &amp; ALGORITHMS</p>
          <h2 className="section-title">
            LeetCode <span className="gradient-text">Milestones</span>
          </h2>
          <div className={styles.divider} />
        </motion.div>

        {/* Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.cardLeft}>
            <div className={styles.logoWrapper}>
              <SiLeetcode className={styles.lcLogo} />
            </div>
            <div className={styles.profileInfo}>
              <span className={styles.username}>SAYAN_GOEL</span>
              <span className={styles.platform}>LeetCode Profile</span>
            </div>

            {/* Badges preview */}
            <div className={styles.badgeContainer}>
              {stats.badges.map((b) => (
                <div key={b.name} className={styles.badgePill} title={b.name}>
                  <img src={b.icon} alt={b.name} className={styles.badgeIcon} />
                  <span>{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cardRight}>
            <p className={styles.description}>
              Consistent algorithmic problem-solving with a focus on <strong>Arrays, Dynamic Programming, Trees &amp; Graphs</strong>. 
              Demonstrated strong analytical rigor with <strong>194+ solved challenges</strong> and multi-month consistency streaks.
            </p>

            {/* Breakdown stats */}
            <div className={styles.progressSection}>
              <div className={styles.totalHeader}>
                <span className={styles.totalNumber}>{stats.totalSolved}</span>
                <span className={styles.totalLabel}>Problems Solved</span>
              </div>

              <div className={styles.barsGrid}>
                {/* Easy */}
                <div className={styles.barItem}>
                  <div className={styles.barTop}>
                    <span className={styles.easyText}>Easy</span>
                    <span className={styles.barCount}>{stats.easy}</span>
                  </div>
                  <div className={styles.barBg}>
                    <div className={styles.barFillEasy} style={{ width: `${(stats.easy / stats.totalSolved) * 100}%` }} />
                  </div>
                </div>

                {/* Medium */}
                <div className={styles.barItem}>
                  <div className={styles.barTop}>
                    <span className={styles.medText}>Medium</span>
                    <span className={styles.barCount}>{stats.medium}</span>
                  </div>
                  <div className={styles.barBg}>
                    <div className={styles.barFillMed} style={{ width: `${(stats.medium / stats.totalSolved) * 100}%` }} />
                  </div>
                </div>

                {/* Hard */}
                <div className={styles.barItem}>
                  <div className={styles.barTop}>
                    <span className={styles.hardText}>Hard</span>
                    <span className={styles.barCount}>{stats.hard}</span>
                  </div>
                  <div className={styles.barBg}>
                    <div className={styles.barFillHard} style={{ width: `${(stats.hard / stats.totalSolved) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Consistency Stats */}
            <div className={styles.statRow}>
              <div className={styles.statItem}>
                <FaCalendarCheck className={styles.statIcon} />
                <div>
                  <div className={styles.statLabel}>Active Days</div>
                  <div className={styles.statValue}>{stats.activeDays}</div>
                </div>
              </div>

              <div className={styles.statItem}>
                <FaFire className={styles.statIcon} style={{ color: '#ef4444' }} />
                <div>
                  <div className={styles.statLabel}>Current Streak</div>
                  <div className={styles.statValue}>{stats.streak}</div>
                </div>
              </div>

              <div className={styles.statItem}>
                <FaAward className={styles.statIcon} style={{ color: '#f59e0b' }} />
                <div>
                  <div className={styles.statLabel}>Achievements</div>
                  <div className={styles.statValue}>100 Days &amp; 50 Days Badges</div>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href="https://leetcode.com/u/SAYAN_GOEL/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Verify on LeetCode</span>
                <FaExternalLinkAlt style={{ position: 'relative', zIndex: 1, fontSize: '0.8rem' }} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
