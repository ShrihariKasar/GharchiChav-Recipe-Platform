import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { galleryImages, type GalleryImage } from "../../data/galleryData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ["All", "Sweets", "Snacks", "Daily Food", "Specials"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF8F0] grain-texture pt-24 pb-20">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 bg-gradient-to-br from-[#66BB6A] to-[#43A047] text-white overflow-hidden mb-12"
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A visual journey through authentic Maharashtrian cuisine
          </p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3.5 rounded-2xl font-semibold shadow-lg transition ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#66BB6A] to-[#43A047] text-white"
                  : "bg-white text-[#6D4C41]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
          <Masonry gutter="24px">
            {filteredImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Empty */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold">No images found</h3>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Gallery Card ---------- */

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer mb-6"
    >
      <ImageWithFallback src={image.src} alt={image.title} className="w-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
        <div className="text-white">
          <h3 className="text-xl font-bold">{image.title}</h3>
          <p className="text-sm">{image.category}</p>
        </div>
      </div>

      <Sparkles className="absolute top-4 right-4 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 animate-spin" />
    </motion.div>
  );
}

/* ---------- Lightbox ---------- */

function Lightbox({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white">
        <X size={28} />
      </button>

      <motion.img
        src={image.src}
        alt={image.title}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="max-h-[85vh] rounded-3xl shadow-2xl"
      />
    </motion.div>
  );
}