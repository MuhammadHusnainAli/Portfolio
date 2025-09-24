import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import data from '../data.json';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Professional Experience</h2>
          <p className={styles.subtitle}>
            Building the future of AI, one project at a time
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {data.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                <div className={styles.markerLine}></div>
              </div>

              <motion.div
                className={styles.experienceCard}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <div className={styles.jobMeta}>
                    <div className={styles.duration}>
                      <FaCalendarAlt className={styles.icon} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className={styles.location}>
                      <FaMapMarkerAlt className={styles.icon} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <div className={styles.achievements}>
                  <h5 className={styles.achievementsTitle}>Key Achievements:</h5>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className={styles.achievement}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + achIndex * 0.1 + 0.3 
                        }}
                        viewport={{ once: true }}
                      >
                        <FaChevronRight className={styles.achievementIcon} />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={styles.technologies}>
                  <h5 className={styles.techTitle}>Technologies Used:</h5>
                  <div className={styles.techTags}>
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={styles.techTag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.2 + techIndex * 0.05 + 0.5 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Publications Section */}
        {data.publications && data.publications.length > 0 && (
          <motion.div
            className={styles.publications}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.publicationsTitle}>Recent Publications</h3>
            <div className={styles.publicationsList}>
              {data.publications.map((pub: any, index: number) => (
                <motion.div
                  key={pub.title}
                  className={styles.publication}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <h4 className={styles.publicationTitle}>{pub.title}</h4>
                  <p className={styles.publicationJournal}>
                    {pub.journal} • {pub.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
