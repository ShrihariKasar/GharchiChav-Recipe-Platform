import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router';
import { Search, SlidersHorizontal, Clock, ChefHat, Leaf, BookmarkPlus, X } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { recipes, Recipe } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Sweets'];
  const types = ['All', 'Veg', 'Non-Veg'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  useEffect(() => {
    // Load images for all recipes
    recipes.forEach(recipe => {
      fetch(`https://source.unsplash.com/800x600/?${recipe.image}`)
        .then(response => {
          setImageUrls(prev => ({ ...prev, [recipe.id]: response.url }));
        })
        .catch(() => {});
    });
  }, []);

  useEffect(() => {
    let filtered = recipes;

    if (searchQuery) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.titleMarathi?.includes(searchQuery)
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(recipe => recipe.type === selectedType);
    }

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(recipe => recipe.difficulty === selectedDifficulty);
    }

    setFilteredRecipes(filtered);
  }, [searchQuery, selectedCategory, selectedType, selectedDifficulty]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedType('All');
    setSelectedDifficulty('All');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] grain-texture pt-24 pb-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 bg-gradient-to-br from-[#FF6B35] to-[#D84315] text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            All Recipes
          </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
            Explore our collection of authentic Maharashtrian home recipes
          </p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 lg:px-8 mt-12">
        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky top-24 z-40 bg-white rounded-3xl shadow-xl p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF6B35] focus:bg-white transition-all duration-300 outline-none"
              />
            </div>

            {/* Filter Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3.5 bg-[#FF6B35] text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </motion.button>
          </div>

          {/* Filter Options */}
          <motion.div
            initial={false}
            animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-4">
              {/* Categories */}
              <div>
                <label className="text-sm font-semibold text-[#6D4C41] mb-2 block">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-[#FF6B35] text-white shadow-lg'
                          : 'bg-gray-100 text-[#6D4C41] hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div>
                <label className="text-sm font-semibold text-[#6D4C41] mb-2 block">
                  Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <motion.button
                      key={type}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedType === type
                          ? 'bg-[#66BB6A] text-white shadow-lg'
                          : 'bg-gray-100 text-[#6D4C41] hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <label className="text-sm font-semibold text-[#6D4C41] mb-2 block">
                  Difficulty
                </label>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <motion.button
                      key={difficulty}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedDifficulty === difficulty
                          ? 'bg-[#FFC107] text-[#3E2723] shadow-lg'
                          : 'bg-gray-100 text-[#6D4C41] hover:bg-gray-200'
                      }`}
                    >
                      {difficulty}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'All' || selectedType !== 'All' || selectedDifficulty !== 'All' || searchQuery) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearFilters}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-full font-medium flex items-center gap-2 hover:bg-red-100 transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                  Clear All Filters
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-[#6D4C41] text-lg">
            Found <span className="font-bold text-[#FF6B35]">{filteredRecipes.length}</span> recipes
          </p>
        </motion.div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <Masonry columnsCount={3} gutter="24px" className="masonry-grid">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                imageUrl={imageUrls[recipe.id]}
                index={index}
              />
            ))}
          </Masonry>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-2">No recipes found</h3>
            <p className="text-[#6D4C41]/70 mb-6">Try adjusting your filters</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFilters}
              className="px-6 py-3 bg-[#FF6B35] text-white rounded-2xl font-semibold"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function RecipeCard({ recipe, imageUrl, index }: { recipe: Recipe; imageUrl?: string; index: number }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-6"
    >
      <Link to={`/recipe/${recipe.id}`}>
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {imageUrl && (
              <ImageWithFallback
                src={imageUrl}
                alt={recipe.title}
                className="w-full h-64 object-cover"
              />
            )}
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Type Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
              recipe.type === 'Veg' ? 'bg-[#66BB6A] text-white' : 'bg-red-500 text-white'
            }`}>
              {recipe.type}
            </span>
          </div>

          {/* Bookmark */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              setIsBookmarked(!isBookmarked);
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <BookmarkPlus className={`w-5 h-5 ${isBookmarked ? 'fill-[#FF6B35] text-[#FF6B35]' : 'text-gray-600'}`} />
          </motion.button>

          {/* Festival Tag */}
          {recipe.festival && (
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1.5 bg-[#FFC107] text-[#3E2723] rounded-full text-xs font-semibold">
                {recipe.festival}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 className="text-xl font-bold text-[#3E2723] mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
            {recipe.title}
          </h3>
          {recipe.titleMarathi && (
            <p className="text-sm text-[#6D4C41]/70 mb-3">{recipe.titleMarathi}</p>
          )}
          <p className="text-[#6D4C41]/80 mb-4 line-clamp-2">{recipe.description}</p>

          <div className="flex items-center gap-4 text-sm text-[#6D4C41]/70">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.totalTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="flex items-center gap-1">
              <Leaf className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
