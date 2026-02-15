import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Clock,
  ChefHat,
  Leaf,
  Share2,
  Printer,
  BookmarkPlus,
  Check,
  Play,
  Quote,
  ArrowLeft,
} from 'lucide-react';
import Slider from 'react-slick';
import { recipes } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);
  const [mainImage, setMainImage] = useState('');
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (recipe) {
      fetch(`https://source.unsplash.com/1600x900/?${recipe.image}`)
        .then((response) => setMainImage(response.url))
        .catch(() => {});
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Recipe not found</h2>
          <Link to="/recipes">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-[#FF6B35] text-white rounded-2xl"
            >
              Browse Recipes
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedRecipes = recipes
    .filter((r) => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 4);

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleStep = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] grain-texture pt-24 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 mb-6">
        <Link to="/recipes">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-[#6D4C41] hover:text-[#FF6B35] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Recipes
          </motion.button>
        </Link>
      </div>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 mb-12"
      >
        <div className="relative h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
          {mainImage && (
            <ImageWithFallback
              src={mainImage}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Floating Info Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      recipe.type === 'Veg'
                        ? 'bg-[#66BB6A] text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {recipe.type}
                  </span>
                  {recipe.festival && (
                    <span className="px-3 py-1.5 bg-[#FFC107] text-[#3E2723] rounded-full text-xs font-semibold">
                      {recipe.festival}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-[#3E2723] mb-2">
                  {recipe.title}
                </h1>
                {recipe.titleMarathi && (
                  <p className="text-xl text-[#6D4C41]/70 mb-3">{recipe.titleMarathi}</p>
                )}
                <p className="text-[#6D4C41]/80">{recipe.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="flex lg:flex-col gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-2">
                    <Clock className="w-8 h-8 text-[#FF6B35]" />
                  </div>
                  <p className="text-sm text-[#6D4C41]/70">Total Time</p>
                  <p className="font-semibold text-[#3E2723]">{recipe.totalTime}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-2">
                    <ChefHat className="w-8 h-8 text-[#FFC107]" />
                  </div>
                  <p className="text-sm text-[#6D4C41]/70">Difficulty</p>
                  <p className="font-semibold text-[#3E2723]">{recipe.difficulty}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#66BB6A]/10 rounded-2xl flex items-center justify-center mb-2">
                    <Leaf className="w-8 h-8 text-[#66BB6A]" />
                  </div>
                  <p className="text-sm text-[#6D4C41]/70">Servings</p>
                  <p className="font-semibold text-[#3E2723]">{recipe.servings}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Actions Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 lg:px-8 mb-12"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            {
              icon: BookmarkPlus,
              label: isSaved ? 'Saved' : 'Save Recipe',
              onClick: () => setIsSaved(!isSaved),
              color: isSaved ? 'bg-[#FF6B35] text-white' : 'bg-white text-[#6D4C41]',
            },
            { icon: Share2, label: 'Share', onClick: handleShare, color: 'bg-white text-[#6D4C41]' },
            { icon: Printer, label: 'Print', onClick: handlePrint, color: 'bg-white text-[#6D4C41]' },
          ].map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={action.onClick}
              className={`px-6 py-3 ${action.color} rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
            >
              <action.icon className="w-5 h-5" />
              {action.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Ingredients */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-32">
              <h2 className="text-3xl font-bold text-[#3E2723] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white">
                  📝
                </span>
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    onClick={() => toggleIngredient(index)}
                    className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#FF6B35]/5 cursor-pointer transition-all duration-300"
                  >
                    <div
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        checkedIngredients.includes(index)
                          ? 'bg-[#66BB6A] border-[#66BB6A]'
                          : 'border-gray-300'
                      }`}
                    >
                      {checkedIngredients.includes(index) && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span
                      className={`flex-1 ${
                        checkedIngredients.includes(index)
                          ? 'line-through text-[#6D4C41]/50'
                          : 'text-[#6D4C41]'
                      }`}
                    >
                      {ingredient}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Steps & Video */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video Player */}
            {recipe.youtubeUrl && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#D84315]/20" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-[#FF6B35] ml-1" fill="currentColor" />
                  </motion.div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-semibold">Watch Video Tutorial</p>
                    <p className="text-sm text-white/80">Step-by-step cooking guide</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Cooking Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-[#3E2723] mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-[#FFC107] rounded-full flex items-center justify-center text-white">
                  👨‍🍳
                </span>
                Cooking Instructions
              </h2>

              <div className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          onClick={() => toggleStep(index)}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg cursor-pointer transition-all duration-300 ${
                            completedSteps.includes(index)
                              ? 'bg-[#66BB6A] text-white'
                              : 'bg-gradient-to-br from-[#FF6B35] to-[#D84315] text-white'
                          }`}
                        >
                          {completedSteps.includes(index) ? (
                            <Check className="w-6 h-6" />
                          ) : (
                            index + 1
                          )}
                        </motion.div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div
                          className={`p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 transition-all duration-300 ${
                            completedSteps.includes(index)
                              ? 'border-[#66BB6A] opacity-60'
                              : 'border-transparent'
                          }`}
                        >
                          <p
                            className={`text-[#6D4C41] leading-relaxed ${
                              completedSteps.includes(index) ? 'line-through' : ''
                            }`}
                          >
                            {step}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < recipe.steps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-[#FF6B35] to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Kitchen Tips */}
            {recipe.tips && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-gradient-to-br from-[#FFC107]/10 to-[#FFD54F]/10 rounded-3xl p-8 border-2 border-[#FFC107]/30"
              >
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-[#FFC107] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#3E2723] mb-2">Kitchen Tip</h3>
                    <p className="text-[#6D4C41] leading-relaxed italic">{recipe.tips}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold text-[#3E2723] mb-8 text-center">
              You Might Also Like
            </h2>
            <RelatedRecipesCarousel recipes={relatedRecipes} />
          </motion.section>
        )}
      </div>
    </div>
  );
}

function RelatedRecipesCarousel({ recipes }: { recipes: any[] }) {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    recipes.forEach((recipe) => {
      fetch(`https://source.unsplash.com/600x400/?${recipe.image}`)
        .then((response) => {
          setImageUrls((prev) => ({ ...prev, [recipe.id]: response.url }));
        })
        .catch(() => {});
    });
  }, [recipes]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="px-4">
          <Link to={`/recipe/${recipe.id}`}>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                {imageUrls[recipe.id] && (
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <ImageWithFallback
                      src={imageUrls[recipe.id]}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3E2723] mb-2">{recipe.title}</h3>
                <p className="text-[#6D4C41]/70 text-sm line-clamp-2">{recipe.description}</p>
              </div>
            </motion.div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
