import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Code2, Database, Globe, Server, 
  GitBranch, Cloud, TestTube, Cpu,
  Brain, Layers, Shield, Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "PHP", "HTML/CSS"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Flask", "REST APIs", "GraphQL"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "Firebase", "AWS", "Vercel", "Docker", "Kubernetes"],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "CI/CD", "Jest", "Postman", "GitHub Actions"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Machine Learning", "Transformers", "Deep Learning", "HuggingFace", "MediaPipe"],
  },
];

const coreCompetencies = [
  { icon: Layers, label: "System Design", description: "Scalable architecture patterns" },
  { icon: Zap, label: "Performance", description: "Optimization & monitoring" },
  { icon: Shield, label: "Security", description: "Auth & access control" },
  { icon: Cloud, label: "Cloud Native", description: "Deployment & scaling" },
  { icon: TestTube, label: "Testing", description: "Unit & integration tests" },
  { icon: Cpu, label: "Microservices", description: "Distributed systems" },
];

const Skills = () => {
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
              SKILLS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning the full development stack, 
              from frontend interfaces to scalable backend systems.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-sm rounded-lg border border-border hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Core <span className="text-gradient">Competencies</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreCompetencies.map((comp, index) => (
                <motion.div
                  key={comp.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border text-center hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <comp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm mb-1">{comp.label}</h4>
                  <p className="text-xs text-muted-foreground">{comp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 rounded-2xl card-gradient border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Development Approach
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Agile Methodology",
                "SDLC Best Practices",
                "Test-Driven Development",
                "Code Review Culture",
                "Documentation First",
                "Performance Monitoring",
              ].map((method) => (
                <span
                  key={method}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium border border-border"
                >
                  {method}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
