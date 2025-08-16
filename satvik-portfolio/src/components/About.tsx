'use client'

import { motion } from 'framer-motion'
import profileData from '@/data/profile.json'

const About = () => {
  const { about } = profileData

  return (
    <section id="about" className="section-padding bg-white pt-24">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-muted-text leading-relaxed text-balance text-center"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
