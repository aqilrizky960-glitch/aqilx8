import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-red-50">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-medium mb-2 block">
            Tentang Saya
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Profil Pribadi
          </h2>

          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <div className="w-full h-full bg-gradient-to-br from-red-200 to-red-400 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-md">
                <p className="font-bold text-2xl text-red-500">5+ Tahun</p>
                <p className="text-sm text-gray-500">Pengalaman</p>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Mengenal Lebih Dekat
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Nama Saya Aqil Risky Ramadhan, saya lahir pada tanggal 2 September 2009.
              Saya adalah siswa kelas X-8 dari MAN 1 Banda Aceh dan tinggal di Lamlagang.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Saat ini saya sedang belajar coding dan ini adalah pertama kali saya membuat portfolio.
              Saya ingin terus belajar teknologi dan berkembang melalui berbagai platform.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-white rounded-xl text-center shadow-md hover:shadow-lg transition"
                >
                  <stat.icon className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}