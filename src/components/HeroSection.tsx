import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

/**
 * Varians Animasi untuk Container (Framer Motion)
 * Membuat elemen anak (children) muncul berurutan
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda antar elemen anak
      delayChildren: 0.3,   // Delay sebelum animasi dimulai
    },
  },
};

/**
 * Varians Animasi untuk Elemen Individu
 */
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function HeroSection() {
  // Fungsi Helper untuk Smooth Scroll
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero py-20"
    >
      {/* BACKGROUND: ThreeJS Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* SISI KIRI: Visual / Foto Profil */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-center order-2 lg:order-1"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Efek Cahaya (Glow) di belakang foto */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Bingkai Foto Modern dengan Glassmorphism */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 glass shadow-2xl">
                <img 
                  src="/profile-photo.jpg" // SILAKAN GANTI DENGAN PATH FOTO ANDA
                  alt="Developer Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Badge Floating Dekoratif */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 glass rounded-2xl shadow-glow hidden md:block border border-white/20"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">🚀</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Available for Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* SISI KANAN: Konten Teks & CTA */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-1 lg:order-2"
          >
            {/* Greeting Badge */}
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 border border-primary/20"
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
            >
              Fullstack Developer
              <br />
              <span className="text-gradient"> & Content Creator</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Saya membangun aplikasi web yang indah dan fungsional, 
              serta membagikan pengetahuan melalui konten yang inspiratif di berbagai platform digital.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="rounded-full px-10 py-6 text-md font-semibold shadow-glow hover:scale-105 transition-transform"
                onClick={() => handleScroll('#projects')}
              >
                Lihat Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-10 py-6 text-md font-semibold border-primary/20 hover:bg-primary/5"
                onClick={() => handleScroll('#contact')}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Media Links dengan Target Blank */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {[
                { icon: Github, href: 'https://github.com/usernameanda', label: 'GitHub' },
                { icon: Youtube, href: 'https://youtube.com/@usernameanda', label: 'YouTube' },
                { icon: Instagram, href: 'https://instagram.com/usernameanda', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"           // Membuka di tab baru
                  rel="noopener noreferrer"  // Keamanan ekstra
                  className="p-3.5 rounded-full glass border border-white/10 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tombol Scroll Down di Bagian Bawah */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-4 rounded-full glass animate-bounce border border-white/10 cursor-pointer z-20 group hover:border-primary/50"
        aria-label="Scroll ke About"
      >
        <ArrowDown className="h-5 w-5 text-primary group-hover:scale-125 transition-transform" />
      </motion.button>
    </section>
  );
}