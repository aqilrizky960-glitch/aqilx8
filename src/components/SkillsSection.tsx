import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Vue.js', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 82 },
    { name: 'GraphQL', level: 78 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Figma', level: 85 },
    { name: 'CI/CD', level: 82 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full bg-blue-500"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="font-bold mb-4">Frontend</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={index} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Backend</h3>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillBar key={index} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Tools</h3>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <SkillBar key={index} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}