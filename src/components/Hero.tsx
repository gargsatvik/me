'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download } from 'lucide-react'
import profileData from '@/data/profile.json'

const Hero = () => {
  const { hero } = profileData

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted-light to-white">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
            {hero.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-semibold mb-3">
            {hero.tagline}
          </p>
          
          <p className="text-lg text-muted-text mb-6 max-w-3xl mx-auto">
            {hero.subtag} · {hero.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {hero.ctas.map((cta, index) => (
            <a
              key={index}
              href={cta.href}
              className={`btn ${cta.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
            >
              {cta.variant === 'primary' && <Download className="w-4 h-4 mr-2" />}
              {cta.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {hero.contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-text hover:text-primary transition-colors"
            >
              {contact.label === 'Email' && <Mail className="w-4 h-4" />}
              {contact.label === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
              {contact.label === 'GitHub' && <Github className="w-4 h-4" />}
              <span className="text-sm">{contact.value}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
