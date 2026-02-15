import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Slider from "react-slick";
import {
  Clock,
  ChefHat,
  Leaf,
  Youtube,
  Instagram,
  BookmarkPlus,
} from "lucide-react";

import { recipes, Recipe } from "@/data/mockData";

/* ================= HERO ================= */

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/assets/gallery/IMG-20260214-WA0030.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-20 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          Gharchi Chav
        </h1>

        <p className="text-2xl text-yellow-400 mb-2">घरची चव</p>
        <p className="text-lg text-white/90 mb-10">
          Homemade Taste that Feels Like Home
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/recipes">
            <button className="px-8 py-4 bg-orange-600 text-white rounded-2xl font-semibold">
              View Recipes
            </button>
          </Link>

          <a
            href="https://www.youtube.com/@hinaligaikwad"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 text-white border rounded-2xl flex items-center gap-2"
          >
            <Youtube size={20} /> Watch Videos
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= RECIPE CARD ================= */

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [bookmarked, setBookmarked] = useState(false);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  const images = [recipe.image]; // always array → slider works

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg mx-3">
      {/* Slideshow */}
      <Slider {...sliderSettings}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={recipe.title}
            className="h-60 w-full object-cover"
          />
        ))}
      </Slider>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>

        <div className="flex gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {recipe.totalTime}
          </span>
          <span className="flex items-center gap-1">
            <ChefHat size={14} /> {recipe.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <Leaf size={14} /> {recipe.servings}
          </span>
        </div>

        {/* Bookmark */}
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="text-orange-600 mb-3"
        >
          <BookmarkPlus fill={bookmarked ? "currentColor" : "none"} />
        </button>

        {/* YouTube Button */}
        {recipe.youtubeUrl && (
          <a
            href={recipe.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-full py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
              Watch on YouTube
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

/* ================= FEATURED ================= */

function FeaturedRecipes() {
  const featured = recipes.filter((r) => r.featured);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-orange-50">
      <h2 className="text-4xl font-bold text-center mb-10">Featured Recipes</h2>

      <div className="px-6">
        <Slider {...settings}>
          {featured.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

/* ================= INSTAGRAM ================= */

function InstagramPreview() {
  const posts = recipes.slice(0, 6);

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-8">@heenali2025</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 mb-8">
        {posts.map((p) => (
          <img
            key={p.id}
            src={p.image}
            alt={p.title}
            className="rounded-2xl aspect-square object-cover"
          />
        ))}
      </div>

      <a
        href="https://www.instagram.com/heenali2025/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-orange-600 text-white rounded-xl inline-flex items-center gap-2"
      >
        <Instagram size={18} /> Follow on Instagram
      </a>
    </section>
  );
}

/* ================= YOUTUBE ================= */

function YouTubeSection() {
  const vids = recipes.filter((r) => r.youtubeUrl).slice(0, 3);

  return (
    <section className="py-20 bg-orange-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Watch on YouTube</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6 mb-10">
        {vids.map((v) => (
          <a
            key={v.id}
            href={v.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={v.image} alt={v.title} className="rounded-2xl mb-3" />
            <p className="font-semibold">{v.title}</p>
          </a>
        ))}
      </div>

      <a
        href="https://www.youtube.com/@hinaligaikwad"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-red-600 text-white rounded-xl inline-flex items-center gap-2"
      >
        <Youtube size={18} /> Subscribe
      </a>
    </section>
  );
}

/* ================= HOME ================= */

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedRecipes />
      <InstagramPreview />
      <YouTubeSection />
    </>
  );
}