import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa';
import { 
  openExternalLink, 
  copyToClipboard, 
  isValidEmail, 
  showSuccessToast, 
  showErrorToast 
} from '../utils/helperFunctions';
import data from '../data.json';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: data.social.linkedin,
      label: 'LinkedIn',
      color: '#0077B5',
      username: '@husnain'
    },
    {
      icon: FaGithub,
      url: data.social.github,
      label: 'GitHub',
      color: '#333',
      username: '@husnain'
    },
    {
      icon: FaTwitter,
      url: data.social.twitter,
      label: 'Twitter',
      color: '#1DA1F2',
      username: '@husnain'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      showErrorToast('Please enter your name');
      return;
    }
    
    if (!formData.email.trim()) {
      showErrorToast('Please enter your email');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      showErrorToast('Please enter a valid email address');
      return;
    }
    
    if (!formData.message.trim()) {
      showErrorToast('Please enter a message');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:${data.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      showSuccessToast('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      showErrorToast('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    copyToClipboard(data.personal.email);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>
            Ready to bring your AI vision to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get In Touch</h3>
              <p className={styles.infoDescription}>
                I'm always excited to discuss new opportunities, innovative AI projects, 
                or potential collaborations. Whether you're looking to implement cutting-edge 
                AI solutions or need consultation on your existing systems, I'm here to help.
              </p>

              <div className={styles.contactDetails}>
                <motion.div
                  className={styles.contactItem}
                  whileHover={{ x: 5 }}
                  onClick={handleEmailClick}
                >
                  <div className={styles.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>{data.personal.email}</span>
                  </div>
                </motion.div>

                <motion.div
                  className={styles.contactItem}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>{data.personal.location}</span>
                  </div>
                </motion.div>
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Connect With Me</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.div
                        key={social.label}
                        className={styles.socialLink}
                        style={{ '--social-color': social.color } as React.CSSProperties}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        onClick={() => openExternalLink(social.url)}
                      >
                        <div className={styles.socialIcon}>
                          <IconComponent />
                        </div>
                        <div className={styles.socialInfo}>
                          <span className={styles.socialLabel}>{social.label}</span>
                          <span className={styles.socialUsername}>{social.username}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <h3 className={styles.formTitle}>Send Me a Message</h3>
              
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <div className={styles.inputIcon}>
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <div className={styles.inputIcon}>
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputIcon}>
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or how I can help you..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows={6}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.footerText}>
            © 2024 {data.personal.name}. Built with React, TypeScript & Framer Motion.
          </p>
          <p className={styles.footerSubtext}>
            Crafted with ❤️ for the AI community
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
