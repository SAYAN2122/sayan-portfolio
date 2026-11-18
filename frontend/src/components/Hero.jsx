import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import styles from './Hero.module.css'

const GITHUB_AVATAR = 'https://avatars.githubusercontent.com/u/192669532?v=4'

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/SAYAN2122',
    label: 'GitHub',
    color: '#e2e8f0',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/sayangoel',
    label: 'LinkedIn',
    color: '#0a66c2',
  },
  {
    icon: <SiLeetcode />,
    href: 'https://leetcode.com/u/SAYAN_GOEL/',
    label: 'LeetCode',
    color: '#ffa116',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* Animated background particles */}
      <div className={styles.particles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{ '--i': i }} />
        ))}
      </div>

      {/* Gradient blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        {/* Left content */}
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className={styles.badgeDot} />
            Available for opportunities
          </motion.div>

          <motion.h1
            className={styles.name}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sayan Goel</span>
          </motion.h1>

          <motion.div
            className={styles.typing}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Engineer',
                2000,
                'AI App Builder',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={styles.typedText}
            />
          </motion.div>

          <motion.p
            className={styles.subtitle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            B.Tech CSE (3rd Year) @{' '}
            <span className={styles.college}>
              Punjab College of Technical Engineering, Ludhiana
            </span>
          </motion.p>

          <motion.div
            className={styles.ctas}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="btn-primary"
            >
              <span>View My Projects</span>
              <FaArrowRight style={{ position: 'relative', zIndex: 1 }} />
            </Link>
            <a
              href="https://github.com/SAYAN2122"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className={styles.socials}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={s.label}
                style={{ '--hover-color': s.color }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right content — avatar */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.avatarWrapper}>
            <div className={styles.ring1} />
            <div className={styles.ring2} />
            <div className={styles.avatarFrame}>
              <img
                src={GITHUB_AVATAR}
                alt="Sayan Goel"
                className={styles.avatar}
              />
            </div>
            {/* Floating badges */}
            <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
              <span>⚡</span> MERN Stack
            </div>
            <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
              <span>🤖</span> AI Apps
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className={styles.scrollDot} />
      </motion.div>
    </div>
  )
}
