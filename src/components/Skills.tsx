'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Database, Users, Lightbulb } from 'lucide-react'
import profileData from '@/data/profile.json'

const Skills = () => {
  const { skills } = profileData

  const skillCategories = [
    { name: 'Programming', icon: Code, skills: skills.programming },
    { name: 'Frameworks', icon: Cpu, skills: skills.frameworks },
    { name: 'Data & ML', icon: Database, skills: skills.data_ml },
    { name: 'Hardware', icon: Cpu, skills: skills.hardware },
    { name: 'Soft Skills', icon: Users, skills: skills.soft }
  ]

  return (
    <section id="skills" className="section-padding bg-muted-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-text max-w-2xl mx-auto">
            Technical expertise and soft skills I've developed through projects and leadership
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-muted-light text-muted-text text-sm rounded-full border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
