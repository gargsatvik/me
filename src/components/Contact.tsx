'use client'

import { motion } from 'framer-motion'
import { Mail, Download, ArrowRight } from 'lucide-react'
import profileData from '@/data/profile.json'

const Contact = () => {
  const { footer } = profileData

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary to-secondary/90 text-white">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="mailto:gargsatvik31@outlook.com"
            className="btn bg-white text-secondary hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          
          <a
            href={footer.downloadCv}
            className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-secondary px-8 py-4 text-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-300"
        >
          <p className="text-lg">
            Available for internships, hackathons, and collaborative projects
          </p>
          <p className="text-sm mt-2">
            Based in Manchester, UK • Open to remote opportunities
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
