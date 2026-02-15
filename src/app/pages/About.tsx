import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Youtube, Instagram, Mail, Send, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [authorImage, setAuthorImage] = useState('');
  const [journeyImages, setJourneyImages] = useState<string[]>([]);

  useEffect(() => {
  // author image
  setAuthorImage("/assets/gallery/IMG-20260214-WA0067.jpg");

  // journey gallery images
  setJourneyImages([
    "/assets/gallery/IMG-20260214-WA0065.jpg",
    "/assets/gallery/IMG-20260214-WA0068.jpg",
    "/assets/gallery/IMG-20260214-WA0066.jpg",
  ]);
}, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const milestones = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started documenting family recipes and sharing them on social media',
      icon: '🌱',
    },
    {
      year: '2020',
      title: 'YouTube Channel',
      description: 'Launched video tutorials bringing recipes to life',
      icon: '🎥',
    },
    {
      year: '2023',
      title: 'Growing Community',
      description: 'Reached 100K followers across platforms',
      icon: '🎉',
    },
    {
      year: '2026',
      title: 'Gharchi Chav',
      description: 'Created this platform to preserve and share traditional recipes',
      icon: '❤️',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] grain-texture pt-24 pb-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-br from-[#FF6B35] via-[#D84315] to-[#FF6B35] text-white overflow-hidden mb-20"
      >
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Heart className="w-4 h-4" fill="currentColor" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Heart className="w-12 h-12" fill="currentColor" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Gharchi Chav</h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">घरची चव - Taste of Home</p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Preserving the authentic flavors of Maharashtrian home cooking, one recipe at a time
          </p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#FF6B35]/20 to-[#FFC107]/20 rounded-3xl blur-3xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {authorImage && (
                    <ImageWithFallback
                      src={authorImage}
                      alt="Cook"
                      className="w-full h-[600px] object-cover"
                    />
                  )}
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723]">My Culinary Journey</h2>

              <div className="space-y-4 text-lg text-[#6D4C41]/80 leading-relaxed">
                <p>
                  Growing up in a traditional Maharashtrian household, I was surrounded by the
                  aromas of home-cooked meals and the warmth of my grandmother's kitchen. Every dish
                  told a story, every spice blend held a secret passed down through generations.
                </p>

                <p>
                  Gharchi Chav was born from a desire to preserve these precious family recipes and
                  share them with the world. The name itself means "homemade taste" – that
                  irreplaceable flavor that comes from cooking with love and tradition.
                </p>

                <p>
                  What started as documenting recipes in a worn notebook has grown into a community
                  of food lovers who appreciate authentic, home-style cooking. Through this
                  platform, I hope to keep our culinary heritage alive and inspire others to
                  recreate the magic of traditional Indian home cooking.
                </p>

                <p className="text-[#FF6B35] font-semibold italic">
                  "Every recipe is a memory, every dish is a story worth sharing."
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Youtube className="w-7 h-7" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#D84315] text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Instagram className="w-7 h-7" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
              The Journey So Far
            </h2>
            <p className="text-lg text-[#6D4C41]/70">
              Milestones that shaped Gharchi Chav
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#D84315] rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                  >
                    {milestone.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-4 py-1 bg-[#FFC107] text-[#3E2723] rounded-full text-sm font-bold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#3E2723] mb-2">{milestone.title}</h3>
                    <p className="text-[#6D4C41]/80">{milestone.description}</p>
                  </div>
                </div>

                {/* Connector */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-[#FF6B35] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4">
              Behind the Scenes
            </h2>
            <p className="text-lg text-[#6D4C41]/70">Glimpses from my kitchen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeyImages.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
              >
                {imageUrl && (
                  <ImageWithFallback
                    src={imageUrl}
                    alt={`Behind the scenes ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-[#3E2723] mb-4">Get in Touch</h2>
              <p className="text-lg text-[#6D4C41]/70">
                Have a question or just want to say hello? I'd love to hear from you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#6D4C41] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF6B35] focus:bg-white transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#6D4C41] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF6B35] focus:bg-white transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[#6D4C41] font-semibold mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF6B35] focus:bg-white transition-all outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#D84315] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
