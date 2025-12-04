import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Globe, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const projects = [
  {
    title: "Aether — AI Healthcare Assistant",
    description: "An AI-powered healthcare platform that leverages transformer models to provide intelligent medical assistance, improving patient outcomes through accurate diagnostics.",
    icon: Brain,
    tech: ["Python", "Flask", "HuggingFace", "Google GenAI", "Firebase", "Vercel"],
    date: "September 2025",
    highlights: [
      "Trained on 2.5M+ patient records with 0.88 F1 score",
      "Reduced misdiagnosis by 20%",
      "Sub-300ms API latency with 99.7% uptime",
      "200+ active users, 2,000+ monthly queries",
      "HIPAA-compliant with 100% data integrity",
      "98% crash-free sessions",
    ],
    metrics: [
      { value: "0.88", label: "F1 Score" },
      { value: "200+", label: "Active Users" },
      { value: "99.7%", label: "Uptime" },
    ],
    liveUrl: "https://health-app-lilac.vercel.app",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Smart Campus Connect Platform",
    description: "A comprehensive full-stack platform for campus management, featuring role-based authorization, real-time data synchronization, and seamless event management.",
    icon: Globe,
    tech: ["Next.js", "Prisma", "Firebase", "NextAuth.js", "Tailwind", "Vercel"],
    date: "June 2025",
    highlights: [
      "Role-based authorization with atomic DB transactions",
      "Reduced data conflicts by 40%",
      "15+ zero-downtime releases",
      "99.9% reliability",
      "35% increase in event conversion",
      "300+ active users within 2 months",
    ],
    metrics: [
      { value: "300+", label: "Active Users" },
      { value: "99.9%", label: "Reliability" },
      { value: "40%", label: "Less Conflicts" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Gym Buddy",
    description: "A real-time pose evaluation system built during a hackathon, providing instant feedback on exercise form for over 50 different exercise types.",
    icon: Dumbbell,
    tech: ["Python", "MediaPipe", "Node.js", "GitHub CI"],
    date: "April 2025",
    highlights: [
      "Real-time pose evaluation with 200ms latency",
      "50+ exercise types supported",
      "3rd place among 100+ teams",
      "200+ concurrent sessions",
      "Led a 4-member team",
    ],
    metrics: [
      { value: "3rd", label: "Place" },
      { value: "200ms", label: "Latency" },
      { value: "50+", label: "Exercises" },
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              PROJECTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in building 
              scalable, impactful applications.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all ${
                  project.featured ? "md:p-10" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground font-mono">
                        {project.date}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="px-4 py-2 bg-secondary rounded-lg"
                        >
                          <span className="text-xl font-bold text-primary">{metric.value}</span>
                          <span className="text-sm text-muted-foreground ml-2">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.highlights.slice(0, 4).map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/80 text-xs font-mono rounded-md border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      {project.liveUrl !== "#" && (
                        <Button variant="hero" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
