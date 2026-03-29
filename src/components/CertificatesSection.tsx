import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Digital Marketing Basics',
    issuer: 'Online Course',
    date: '2024',
    credentialId: 'DM-001',
    image: '📈',
    color: 'from-red-200/20 to-red-400/20',
    link: '#',
  },
  {
    title: 'Video Editing Fundamentals',
    issuer: 'Self Learning',
    date: '2024',
    credentialId: 'VE-002',
    image: '🎬',
    color: 'from-red-300/20 to-red-500/20',
    link: '#',
  },
  {
    title: 'Photoshop Design Skill',
    issuer: 'Practice Project',
    date: '2023',
    credentialId: 'PS-003',
    image: '🎨',
    color: 'from-red-200/20 to-red-400/20',
    link: '#',
  },
  {
    title: 'Gaming Competitive Experience',
    issuer: 'Online Gaming',
    date: '2023',
    credentialId: 'GM-004',
    image: '🎮',
    color: 'from-red-300/20 to-red-500/20',
    link: '#',
  },
  {
    title: 'Content Creator Basics',
    issuer: 'Social Media',
    date: '2024',
    credentialId: 'CC-005',
    image: '📱',
    color: 'from-red-200/20 to-red-400/20',
    link: '#',
  },
  {
    title: 'Basic Data Management (Excel)',
    issuer: 'Self Learning',
    date: '2023',
    credentialId: 'EX-006',
    image: '📊',
    color: 'from-red-300/20 to-red-500/20',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-medium mb-2 block">
            Kredensial
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sertifikat & Lisensi
          </h2>

          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <div className="h-full p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white">

                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
                  <span className="text-3xl">{cert.image}</span>
                </div>

                <div className="space-y-3">

                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-red-500 mt-1" />
                    <h3 className="text-lg font-bold">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-500">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-red-500" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-xs text-gray-400 font-mono">
                    ID: {cert.credentialId}
                  </p>

                  <Button size="sm" variant="outline" asChild>
                    <a href={cert.link} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1 text-red-500" />
                      Lihat
                    </a>
                  </Button>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}