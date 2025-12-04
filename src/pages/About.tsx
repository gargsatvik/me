import { motion } from "framer-motion";
import { GraduationCap, Target, Code, Zap, Users, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
                ABOUT ME
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate about building{" "}
                <span className="text-gradient">impactful solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A dedicated Computer Science student with a strong foundation in software 
                development and a drive to create meaningful digital experiences.
              </p>
            </motion.div>

            {/* Bio Section */}
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">My Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Satvik Garg, a Computer Science student at the University of Manchester, 
                  where I've consistently ranked in the top 10% of my cohort. My passion lies 
                  in building scalable web applications and exploring the intersection of 
                  AI and software development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through internships and personal projects, I've delivered production-ready 
                  applications serving thousands of users, always focusing on performance, 
                  reliability, and user experience.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="font-medium">Focus Areas</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full-Stack Development, AI/ML Integration, System Design, Performance Optimization
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-medium">Core Stack</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript, Python, Node.js, PostgreSQL
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-medium">Interests</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scalable Architecture, Machine Learning, Healthcare Tech, Open Source
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h2>
              
              <div className="relative">
                <div className="p-8 rounded-2xl card-gradient border border-border">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        University of Manchester
                      </h3>
                      <p className="text-muted-foreground">
                        BSc (Hons) Computer Science
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Sep 2024 – Jun 2027 (Expected)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-4 py-2 bg-primary/20 rounded-lg">
                      <span className="text-2xl font-bold text-primary">75%</span>
                      <span className="text-sm text-muted-foreground ml-2">First-Class Average</span>
                    </div>
                    <div className="px-4 py-2 bg-secondary rounded-lg">
                      <span className="text-lg font-semibold">Top 10%</span>
                      <span className="text-sm text-muted-foreground ml-2">of 250 students</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Core Modules Excellence
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Algorithms", "Machine Learning"].map((module) => (
                        <span
                          key={module}
                          className="px-3 py-1.5 bg-secondary text-sm rounded-lg border border-border"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Leadership Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                Leadership & Extracurricular
              </h2>
              
              <div className="p-8 rounded-2xl card-gradient border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Logistics Head</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Great Uni Hack — UNICS, University of Manchester
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Nov 2024 – Present
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">8</div>
                    <div className="text-sm text-muted-foreground">Team Members Led</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">25%</div>
                    <div className="text-sm text-muted-foreground">Setup Time Reduced</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <div className="text-2xl font-bold text-primary mb-1">15%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Increase</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    Led a team of 8 volunteers, optimizing event process flow
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    Reduced setup time by 25% through efficient coordination
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    Increased attendee satisfaction by 15% through improved logistics
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
