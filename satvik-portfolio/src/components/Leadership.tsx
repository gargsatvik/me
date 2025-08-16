'use client'

import { motion } from 'framer-motion'
import { Award, Users, Calendar } from 'lucide-react'
import profileData from '@/data/profile.json'

const Leadership = () => {
  const { leadership } = profileData

  return (
    <section id="leadership" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Leadership & Roles
          </h2>
          <p className="text-lg text-muted-text max-w-2xl mx-auto">
            Leading teams and organizing events across campus and beyond
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-muted-light rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {role.role}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {role.org}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-text mb-3">
                    <Calendar className="w-4 h-4" />
                    {role.dates}
                  </div>
                  <ul className="space-y-2">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="text-muted-text text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
