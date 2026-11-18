import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaBrain
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowUpRight, FiLayers } from 'react-icons/fi'
import styles from './Hero.module.css'

const GITHUB_AVATAR = 'https://avatars.githubusercontent.com/u/192669532?v=4'

const socialLinks = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/SAYAN2122',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/sayangoel',
    label: 'LinkedIn',
  },
  {
    icon: <SiLeetcode />,
    href: 'https://leetcode.com/u/SAYAN_GOEL/',
    label: 'LeetCode',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* Subtle modern backdrop grid */}
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className={styles.badgeDot} />
            Available for Software Engineering Roles
          </motion.div>

          <motion.h1
            className={styles.name}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Sayan Goel
          </motion.h1>

          <motion.div
            className={styles.typing}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <span className={styles.typingPrefix}>Specializing in </span>
            <TypeAnimation
              sequence={[
                'Full-Stack Web Engineering',
                2200,
                'MERN Stack Architecture',
                2200,
                'AI-Powered Applications',
                2200,
                'Algorithmic Problem Solving',
                2200,
              ]}
              wrapper="span"
              speed={45}
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
            B.Tech Computer Science &amp; Engineering student at{' '}
            <span className={styles.institution}>
              Punjab College of Technical Engineering
            </span>
            . Building production-grade full-stack software with modern frameworks, clean system architecture, and integrated AI.
          </motion.p>

          {/* Action CTAs */}
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
              duration={500}
              offset={-70}
              className="btn-primary"
            >
              <span>Explore Projects</span>
              <FaArrowRight size={13} />
            </Link>
            
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-70}
              className="btn-outline"
            >
              <span>Get in Touch</span>
            </Link>
          </motion.div>

          {/* Social Links */}
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
              >
                {s.icon}
                <span className={styles.socialLabel}>{s.label}</span>
                <FiArrowUpRight size={13} className={styles.arrowIcon} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Content — Executive Profile Card */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.cardContainer}>
            <div className={styles.avatarFrame}>
              <img
                src={GITHUB_AVATAR}
                alt="Sayan Goel"
                className={styles.avatar}
              />
            </div>

            <div className={styles.cardDetails}>
              <div className={styles.cardNameRow}>
                <div>
                  <h3 className={styles.profileName}>Sayan Goel</h3>
                  <p className={styles.profileRole}>Full-Stack &amp; AI Developer</p>
                </div>
                <span className={styles.statusIndicator}>Ludhiana, IN</span>
              </div>

              {/* Core Skill Pills — Clean SVG, No Emojis */}
              <div className={styles.pillGrid}>
                <div className={styles.skillPill}>
                  <FaCode className={styles.pillIcon} />
                  <span>React &amp; Node.js</span>
                </div>
                <div className={styles.skillPill}>
                  <FaDatabase className={styles.pillIcon} />
                  <span>MongoDB Atlas</span>
                </div>
                <div className={styles.skillPill}>
                  <FaBrain className={styles.pillIcon} />
                  <span>AI / LLM Systems</span>
                </div>
                <div className={styles.skillPill}>
                  <FiLayers className={styles.pillIcon} />
                  <span>Express Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
