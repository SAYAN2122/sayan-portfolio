import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-scroll'
import styles from './Footer.module.css'

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

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>SG</div>
          <p className={styles.tagline}>
            Full-Stack Software Engineer specializing in MERN architectures, AI integration, and scalable web solutions.
          </p>
        </div>

        {/* Navigation */}
        <nav className={styles.navLinks}>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={500}
              offset={-70}
              className={styles.navLink}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className={styles.socials}>
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
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <span className={styles.copyright}>
            &copy; {currentYear} Sayan Goel. All rights reserved.
          </span>
          <span className={styles.location}>Ludhiana, Punjab, India</span>
        </div>
      </div>
    </footer>
  )
}
