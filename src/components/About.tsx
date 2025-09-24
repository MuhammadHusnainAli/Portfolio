import { motion } from 'framer-motion';
import { FaBrain, FaRocket, FaUsers, FaAward } from 'react-icons/fa';
import data from '../data.json';
import styles from './About.module.css';

const About = () => {
  const highlights = [
    {
      icon: FaBrain,
      title: 'AI Expertise',
      description: 'Deep knowledge in LLMs, neural networks, and machine learning algorithms'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Building cutting-edge AI solutions that solve real-world problems'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Leading cross-functional teams to deliver successful AI projects'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Committed to delivering high-quality, scalable AI solutions'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Passionate about pushing the boundaries of artificial intelligence
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Bio Section */}
          <motion.div
            className={styles.bioSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.bioText}>
              <p>
                With over {data.personal.yearsOfExperience} years of experience in artificial intelligence, 
                I specialize in developing sophisticated AI systems that transform how businesses operate. 
                My expertise spans across large language models, agentic AI systems, and intelligent chatbots.
              </p>
              <p>
                I've successfully fine-tuned numerous LLMs for domain-specific applications, built 
                autonomous AI agents that can handle complex workflows, and created conversational 
                AI systems that serve millions of users. My approach combines deep technical knowledge 
                with practical business understanding to deliver AI solutions that truly make a difference.
              </p>
              <p>
                Currently working on advancing the field of agentic AI, where multiple AI agents 
                collaborate to solve complex problems autonomously. I'm passionate about making 
                AI more accessible, reliable, and beneficial for everyone.
              </p>
            </div>

            <div className={styles.highlights}>
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    className={styles.highlight}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.highlightIcon}>
                      <IconComponent />
                    </div>
                    <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                    <p className={styles.highlightDescription}>{highlight.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className={styles.skillsSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.skillsTitle}>Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {data.skills.technical.map((skillCategory, categoryIndex) => (
                <motion.div
                  key={skillCategory.category}
                  className={styles.skillCategory}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className={styles.categoryTitle}>{skillCategory.category}</h4>
                  <div className={styles.skillTags}>
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={styles.skillTag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <motion.div
              className={styles.softSkills}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h4 className={styles.softSkillsTitle}>Core Competencies</h4>
              <div className={styles.softSkillsList}>
                {data.skills.soft.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className={styles.softSkill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <motion.div
          className={styles.credentialsSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.education}>
            <h3 className={styles.credentialsTitle}>Education</h3>
            {data.education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className={styles.educationItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className={styles.degree}>{edu.degree}</h4>
                <p className={styles.school}>{edu.school}</p>
                <p className={styles.year}>{edu.year}</p>
                <p className={styles.description}>{edu.description}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.certifications}>
            <h3 className={styles.credentialsTitle}>Certifications</h3>
            <div className={styles.certificationsList}>
              {data.certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  className={styles.certification}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
