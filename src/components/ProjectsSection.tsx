import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Online Shop Project',
    description: 'Menjalankan bisnis online dengan strategi marketing, promosi, dan customer handling.',
    tags: ['Marketing', 'Sales', 'Branding'],
    image: '🛍️',
    color: 'from-red-500/20 to-orange-500/20',
    demo: '#',
  },
  {
    title: 'Gaming Competitive',
    description: 'Bermain secara kompetitif dengan fokus pada strategi, teamwork, dan skill mekanik.',
    tags: ['Strategy', 'Teamwork', 'Reaction'],
    image: '🎮',
    color: 'from-red-500/20 to-orange-500/20',
    demo: '#',
  },
  {
    title: 'Content Creator',
    description: 'Membuat konten video pendek untuk sosial media seperti TikTok dan Instagram.',
    tags: ['CapCut', 'Editing', 'Content'],
    image: '📱',
    color: 'from-red-500/20 to-orange-500/20',
    youtube: '#',
    isContent: true,
  },
  {
    title: 'Design Project',
    description: 'Membuat desain visual menggunakan Photoshop untuk kebutuhan konten dan branding.',
    tags: ['Photoshop', 'Design', 'Creative'],
    image: '🎨',
    color: 'from-red-500/20 to-orange-500/20',
    demo: '#',
  },
  {
    title: 'Video Editing',
    description: 'Editing video menggunakan CapCut untuk konten yang menarik dan engaging.',
    tags: ['CapCut', 'Editing', 'Video'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    youtube: '#',
    isContent: true,
  },
  {
    title: 'Data Management',
    description: 'Mengelola data sederhana menggunakan Excel untuk kebutuhan bisnis.',
    tags: ['Excel', 'Data', 'Management'],
    image: '📊',
    color: 'from-red-500/20 to-orange-500/20',
    demo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-medium mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projects & Karya
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
              <div className="h-full p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white">
                
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-5xl">{project.image}</span>
                </div>

                <div className="space-y-3">
                  
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-600">
                        Content
                      </span>
                    )}
                    <h3 className="text-lg font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-red-50 text-red-700 hover:bg-red-100 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    
                    {project.demo && (
                      <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}

                    {project.youtube && (
                      <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50" asChild>
                        <a href={project.youtube}>
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}