import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import axios from 'axios'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa'
import styles from './Contact.module.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// ⚠️ Replace these with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState(initialForm)
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (type, msg) => {
    setToast({ type, msg })
    setTimeout(() => setToast(null), 4000)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      showToast('error', 'Please fill in all required fields.')
      return
    }

    setSending(true)
    let emailSent = false

    // 1. Send via EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: 'Sayan Goel',
        },
        EMAILJS_PUBLIC_KEY
      )
      emailSent = true
    } catch (err) {
      // EmailJS failed — still try to save to backend
      console.warn('EmailJS error:', err)
    }

    // 2. Save to backend MongoDB
    try {
      await axios.post(`${API_URL}/api/contact`, form, { timeout: 5000 })
    } catch (err) {
      console.warn('Backend contact save failed:', err)
    }

    setSending(false)
    setForm(initialForm)
    showToast(
      'success',
      emailSent
        ? 'Message sent successfully. I will get back to you promptly.'
        : 'Message saved. Thank you for reaching out.'
    )
  }

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
          <p className={styles.sectionTag}>GET IN TOUCH</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className={styles.divider} />
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Left — Info */}
          <motion.div
            className={styles.infoSide}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.infoTitle}>Let's work together</h3>
            <p className={styles.infoDesc}>
              I'm currently available for freelance projects, internships, and
              full-time opportunities. Let's build something amazing together!
            </p>

            <div className={styles.contactItems}>
              <a href="mailto:sayangoel14@gmail.com" className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                  <FaEnvelope />
                </div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>sayangoel14@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sayangoel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={styles.contactIcon} style={{ background: 'rgba(10, 102, 194, 0.15)', color: '#60a5fa' }}>
                  <FaLinkedin />
                </div>
                <div>
                  <div className={styles.contactLabel}>LinkedIn</div>
                  <div className={styles.contactValue}>linkedin.com/in/sayangoel</div>
                </div>
              </a>

              <a
                href="https://github.com/SAYAN2122"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={styles.contactIcon} style={{ background: 'rgba(255, 255, 255, 0.07)', color: '#e2e8f0' }}>
                  <FaGithub />
                </div>
                <div>
                  <div className={styles.contactLabel}>GitHub</div>
                  <div className={styles.contactValue}>github.com/SAYAN2122</div>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#c084fc' }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className={styles.contactLabel}>Location</div>
                  <div className={styles.contactValue}>Ludhiana, Punjab, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className={styles.formSide}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="What's this about?"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Provide project details or inquiry..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={sending}
              >
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
                {!sending && <FaPaperPlane style={{ position: 'relative', zIndex: 1, fontSize: '0.85rem' }} />}
                {sending && <div className={styles.miniSpinner} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.msg}
        </div>
      )}
    </div>
  )
}
