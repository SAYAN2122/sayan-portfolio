import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
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
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />

      <div className={styles.container}>
        {/* Logo & tagline */}
        <div className={styles.brand}>
          <div className={styles.logo}>SG</div>
          <p className={styles.tagline}>
            Building impactful software with <FaHeart className={styles.heart} /> and the MERN stack.
          </p>
        </div>

        {/* Nav links */}
        <nav className={styles.navLinks}>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              offset={-80}
              className={styles.navLink}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
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

      {/* Bottom row */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2026 <span className={styles.name}>Sayan Goel</span>. All rights reserved.
        </p>
        <p className={styles.builtWith}>
          Built with <FaHeart className={styles.heart} /> using MERN Stack
        </p>
      </div>
    </footer>
  )
}
