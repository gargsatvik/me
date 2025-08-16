'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  short: string
  tech: string[]
  impact: string
  repoUrl?: string
  liveUrl?: string
  image: string
}

const ProjectCard = ({ title, short, tech, impact, repoUrl, liveUrl, image }: ProjectCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        {image && image !== '/images/projects/placeholder.png' ? (
          <img 
            src={image} 
            alt={`${title} screenshot`} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`text-center text-gray-500 ${image && image !== '/images/projects/placeholder.png' ? 'hidden' : ''}`}>
          <div className="text-4xl mb-2">🚀</div>
          <div className="text-sm font-medium">{title}</div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-secondary mb-3">
        {title}
      </h3>
      
      <p className="text-muted-text mb-4 leading-relaxed">
        {short}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
          >
            {techItem}
          </span>
        ))}
      </div>
      
      <p className="text-sm text-muted-text mb-4 italic">
        "{impact}"
      </p>
      
      <div className="flex gap-2">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-text hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-text hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
