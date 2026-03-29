import { motion } from 'framer-motion';

const skills = {
  business: [
    { name: 'Marketing', level: 85 },
    { name: 'Sales Strategy', level: 80 },
    { name: 'Negotiation', level: 75 },
    { name: 'Customer Handling', level: 82 },
    { name: 'Branding', level: 78 },
  ],
  gaming: [
    { name: 'Game Strategy', level: 88 },
    { name: 'Team Coordination', level: 80 },
    { name: 'Reaction Time', level: 85 },
    { name: 'Competitive Play', level: 82 },
    { name: 'Game Sense', level: 87 },
  ],
  creative: [
    { name: 'Design (Photoshop)', level: 83 },
    { name: 'Video Editing (CapCut)', level: 87 },
    { name: 'Content Creation', level: 80 },
    { name: 'Visual Creativity', level: 82 },
    { name: 'Basic Data (Excel)', level: 75 },
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
            <h3 className="font-bold mb-4">Business</h3>
            <div className="space-y-4">
              {skills.business.map((skill, index) => (
                <SkillBar key={index} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Gaming</h3>
            <div className="space-y-4">
              {skills.gaming.map((skill, index) => (
                <SkillBar key={index} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Creative</h3>
            <div className="space-y-4">
              {skills.creative.map((skill, index) => (
                <SkillBar key={index} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}