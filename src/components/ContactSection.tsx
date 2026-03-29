import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aqilrizky960@gmail.com',
    href: 'aqilrizky960@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 81361547493',
    href: 'tel:+628136154743',
  },
  {
    icon: MapPin,
    label: 'Banda Aceh',
    value: 'Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Pesan berhasil dikirim! ✅');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-medium mb-2 block">Kontak</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            <p className="text-gray-500">
              Punya project atau ingin kerja sama? Hubungi saya lewat form atau kontak di bawah.
            </p>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <info.icon className="text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </div>
            ))}

          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4 bg-white p-6 rounded-xl shadow"
          >

            <Input
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              name="subject"
              placeholder="Subjek"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <Textarea
              name="message"
              placeholder="Pesan..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />

            <Button type="submit" className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan
                </>
              )}
            </Button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}