import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaEye } from 'react-icons/fa';
import { openExternalLink } from '../utils/helperFunctions';
import data from '../data.json';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open source':
        return '#10B981';
      case 'production':
        return '#3B82F6';
      case 'client project':
        return '#8B5CF6';
      default:
        return '#6B7280';
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Innovative AI solutions that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className={styles.projectsGrid}>
          {data.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                selectedProject === index ? styles.expanded : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleProjectClick(index)}
            >
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x250/1E293B/3B82F6?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.projectStatus}>
                    <span 
                      className={styles.statusBadge}
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectLinks}>
                    {project.github && (
                      <motion.button
                        className={styles.linkButton}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openExternalLink(project.github);
                        }}
                        aria-label="View on GitHub"
                      >
                        <FaGithub />
                      </motion.button>
                    )}
                    {project.demo && (
                      <motion.button
                        className={styles.linkButton}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openExternalLink(project.demo);
                        }}
                        aria-label="View Demo"
                      >
                        <FaExternalLinkAlt />
                      </motion.button>
                    )}
                  </div>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.techMore}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <motion.div
                  className={styles.expandedContent}
                  initial={false}
                  animate={{
                    height: selectedProject === index ? 'auto' : 0,
                    opacity: selectedProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.featuresSection}>
                    <h4 className={styles.featuresTitle}>Key Features:</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className={styles.feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            selectedProject === index
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <FaStar className={styles.featureIcon} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.allTechnologies}>
                    <h4 className={styles.allTechTitle}>Technologies Used:</h4>
                    <div className={styles.allTechTags}>
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={styles.allTechTag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            selectedProject === index
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className={styles.projectFooter}>
                  <motion.button
                    className={styles.expandButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaEye />
                    {selectedProject === index ? 'Show Less' : 'Learn More'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.ctaTitle}>Interested in collaborating?</h3>
          <p className={styles.ctaDescription}>
            I'm always open to discussing new AI projects and innovative solutions.
          </p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openExternalLink('mailto:' + data.personal.email)}
          >
            <FaCode />
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
