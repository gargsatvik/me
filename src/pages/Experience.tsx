import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const experiences = [
  {
    company: "Web3Task",
    role: "Front End Developer Intern",
    period: "August 2025 – September 2025",
    location: "Gurgaon, India",
    achievements: [
      "Built AI/Automation for event management; automated booking reduced manual workload by 55%",
      "Engineered automation systems that significantly reduced operational errors",
      "Maintained CI/CD via GitHub Actions, ensuring 99.5% uptime",
      "Built data analytics dashboard; insights increased attendance by 20%",
    ],
    metrics: [
      { value: "55%", label: "Workload Reduced" },
      { value: "99.5%", label: "Uptime" },
      { value: "20%", label: "Attendance Increase" },
    ],
  },
  {
    company: "Zentech Solutions",
    role: "Web Developer Intern",
    period: "June 2025 – August 2025",
    location: "New Delhi, India",
    achievements: [
      "Delivered 3 production websites serving 8,000+ monthly users, increasing lead conversion by 30%",
      "Improved React/Next.js performance, reducing page load time by 35% (3.2s → 2.1s)",
      "Introduced unit + integration tests (Jest) with 80% coverage, cutting reported bugs by 25%",
    ],
    metrics: [
      { value: "8,000+", label: "Monthly Users" },
      { value: "35%", label: "Faster Load" },
      { value: "80%", label: "Test Coverage" },
    ],
  },
];

const Experience = () => {
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
              EXPERIENCE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building real-world solutions and gaining valuable industry experience 
              through impactful internships.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-16 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-1/2"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10`} />

                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:ml-8"}`}>
                  <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{exp.role}</h3>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Metrics */}
                    <div className={`flex flex-wrap gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="px-3 py-1.5 bg-primary/10 rounded-lg"
                        >
                          <span className="text-primary font-bold">{metric.value}</span>
                          <span className="text-xs text-muted-foreground ml-1">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{achievement}</span>
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
    </Layout>
  );
};

export default Experience;
