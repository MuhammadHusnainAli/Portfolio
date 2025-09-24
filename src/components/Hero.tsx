import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import { openExternalLink, copyToClipboard } from '../utils/helperFunctions';
import data from '../data.json';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['AI Engineer', 'LLM Specialist', 'Chatbot Developer', 'Agentic AI Expert'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = () => {
    copyToClipboard(data.personal.email);
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: data.social.linkedin,
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      url: data.social.github,
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: FaTwitter,
      url: data.social.twitter,
      label: 'Twitter',
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Profile Image */}
          <motion.div
            className={styles.imageContainer}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="/src/assets/images/avatar.jpg"
                alt={data.personal.name}
                className={styles.profileImage}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=AI';
                }}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className={styles.textContent}>
            <motion.div
              className={styles.greeting}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm
            </motion.div>

            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {data.personal.name}
            </motion.h1>

            <motion.div
              className={styles.roleContainer}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className={styles.rolePrefix}>I'm a </span>
              <motion.span
                key={currentRole}
                className={styles.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              className={styles.bio}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {data.personal.bio}
            </motion.p>

            <motion.div
              className={styles.stats}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>{data.personal.yearsOfExperience}</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{data.projects.length}+</span>
                <span className={styles.statLabel}>AI Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>LLMs Fine-tuned</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.button
                className={styles.primaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
              >
                <FaEnvelope />
                Get In Touch
              </motion.button>

              <motion.button
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openExternalLink('/resume.pdf')}
              >
                <FaDownload />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.button
                    key={social.label}
                    className={styles.socialLink}
                    style={{ '--social-color': social.color } as React.CSSProperties}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                    onClick={() => openExternalLink(social.url)}
                    aria-label={social.label}
                  >
                    <IconComponent />
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          <motion.div
            className={styles.floatingElement}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🤖
          </motion.div>
          <motion.div
            className={`${styles.floatingElement} ${styles.floatingElement2}`}
            animate={{
              y: [20, -20, 20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            🧠
          </motion.div>
          <motion.div
            className={`${styles.floatingElement} ${styles.floatingElement3}`}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            ⚡
          </motion.div>
        </div>

        {/* Background Gradient */}
        <div className={styles.backgroundGradient}></div>
      </div>
    </section>
  );
};

export default Hero;
