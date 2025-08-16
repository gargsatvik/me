'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import profileData from '@/data/profile.json'

const Footer = () => {
  const { footer, hero } = profileData

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            {hero.name}
          </h3>
          <p className="text-gray-300 mb-6">
            Full-Stack Student Developer & Student Events Lead
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          <a
            href="mailto:gargsatvik31@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/garg-satvik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/gargsatvik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p className="mb-2">
            {footer.copyright} • Built with <Heart className="w-4 h-4 inline text-red-400" /> using {footer.madeWith}
          </p>
          <p>
            Available for opportunities in Manchester, UK and remote
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
