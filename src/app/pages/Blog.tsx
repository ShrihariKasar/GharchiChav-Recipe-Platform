import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "../../data/mockData";

export function Blog() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-[#FFF8F0] pt-24 pb-20">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] text-[#3E2723] mb-12 text-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-5xl md:text-6xl font-bold">Kitchen Stories</h1>
          </div>

          <p className="text-xl max-w-2xl mx-auto">
            Tales from the heart of home cooking and traditions
          </p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4">

        {/* FEATURED */}
        {featuredPost && (
          <motion.article className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-2xl">

              {/* IMAGE */}
              <div className="h-[400px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-10 flex flex-col justify-center">
                <div className="flex gap-4 mb-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                <Link to={`/blog/${featuredPost.id}`}>
                  <button className="px-6 py-3 bg-orange-600 text-white rounded-xl flex items-center gap-2">
                    Read Full Story <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.article>
        )}

        {/* OTHER POSTS */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex gap-4 text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <Link to={`/blog/${post.id}`} className="text-orange-600 font-semibold">
          Read More →
        </Link>
      </div>
    </motion.article>
  );
}