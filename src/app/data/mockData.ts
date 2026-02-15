export interface Recipe {
  id: string;
  title: string;
  titleMarathi?: string;
  description: string;
  image: string;
  category: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'Veg' | 'Non-Veg';
  ingredients: string[];
  steps: string[];
  tips?: string;
  youtubeUrl?: string;
  featured?: boolean;
  festival?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Sweets' | 'Snacks' | 'Daily Food' | 'Specials';
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Puran Poli',
    titleMarathi: 'पुरण पोळी',
    description: 'Traditional Maharashtrian sweet flatbread stuffed with lentil and jaggery filling',
    image: 'indian sweet flatbread traditional',
    category: 'Sweets',
    prepTime: '30 mins',
    cookTime: '45 mins',
    totalTime: '1 hr 15 mins',
    servings: 8,
    difficulty: 'Medium',
    type: 'Veg',
    ingredients: [
      '2 cups chana dal',
      '1.5 cups jaggery',
      '2 cups wheat flour',
      '1 tsp cardamom powder',
      'Ghee for cooking'
    ],
    steps: [
      'Pressure cook chana dal until soft and mash well',
      'Add jaggery and cardamom powder, cook until thick',
      'Prepare soft dough with wheat flour',
      'Roll out dough, place filling in center',
      'Seal and roll flat carefully',
      'Cook on tawa with ghee until golden'
    ],
    tips: 'Keep the filling slightly thick to prevent it from oozing out while rolling',
    youtubeUrl: 'https://youtube.com/watch?v=example1',
    featured: true,
    festival: 'Holi Special'
  },
  {
    id: '2',
    title: 'Misal Pav',
    titleMarathi: 'मिसळ पाव',
    description: 'Spicy sprouts curry served with pav, topped with farsan and onions',
    image: 'indian spicy curry bread street food',
    category: 'Breakfast',
    prepTime: '20 mins',
    cookTime: '40 mins',
    totalTime: '1 hr',
    servings: 4,
    difficulty: 'Medium',
    type: 'Veg',
    ingredients: [
      '2 cups sprouted moth beans',
      '2 onions chopped',
      '3 tomatoes',
      'Misal masala',
      '8 pav buns',
      'Farsan for topping'
    ],
    steps: [
      'Pressure cook sprouted beans with turmeric',
      'Prepare spicy gravy with onions and tomatoes',
      'Add misal masala and cooked beans',
      'Simmer for 15 minutes',
      'Serve hot with pav, topped with farsan and onions'
    ],
    tips: 'Adjust spice level according to your preference',
    youtubeUrl: 'https://youtube.com/watch?v=example2',
    featured: true
  },
  {
    id: '3',
    title: 'Modak',
    titleMarathi: 'मोदक',
    description: 'Steamed sweet dumplings filled with coconut and jaggery, Ganesh Chaturthi special',
    image: 'indian steamed dumplings coconut sweet',
    category: 'Sweets',
    prepTime: '40 mins',
    cookTime: '20 mins',
    totalTime: '1 hr',
    servings: 15,
    difficulty: 'Hard',
    type: 'Veg',
    ingredients: [
      '2 cups rice flour',
      '2 cups grated coconut',
      '1 cup jaggery',
      '1 tsp cardamom powder',
      'Ghee'
    ],
    steps: [
      'Prepare coconut jaggery filling',
      'Boil water with ghee and salt',
      'Add rice flour and mix to form dough',
      'Shape into small cups and fill with mixture',
      'Seal edges and steam for 10-12 minutes'
    ],
    tips: 'Work quickly with hot dough and keep it covered to prevent drying',
    youtubeUrl: 'https://youtube.com/watch?v=example3',
    featured: true,
    festival: 'Ganesh Chaturthi Special'
  },
  {
    id: '4',
    title: 'Poha',
    titleMarathi: 'पोहे',
    description: 'Light and fluffy flattened rice breakfast with peanuts and curry leaves',
    image: 'indian flattened rice breakfast',
    category: 'Breakfast',
    prepTime: '10 mins',
    cookTime: '15 mins',
    totalTime: '25 mins',
    servings: 4,
    difficulty: 'Easy',
    type: 'Veg',
    ingredients: [
      '2 cups thick poha',
      '1 onion chopped',
      '2 green chillies',
      'Curry leaves',
      'Peanuts',
      'Turmeric and mustard seeds'
    ],
    steps: [
      'Rinse poha gently and drain',
      'Heat oil, add mustard seeds',
      'Add peanuts and fry until golden',
      'Add onions, chillies and curry leaves',
      'Add poha and turmeric, mix gently',
      'Garnish with coriander and lemon'
    ],
    tips: 'Don\'t over-rinse the poha or it will become mushy',
    featured: false
  },
  {
    id: '5',
    title: 'Varan Bhaat',
    titleMarathi: 'वरण भात',
    description: 'Comforting dal and rice, the soul food of every Maharashtrian home',
    image: 'indian dal rice comfort food',
    category: 'Lunch',
    prepTime: '10 mins',
    cookTime: '30 mins',
    totalTime: '40 mins',
    servings: 4,
    difficulty: 'Easy',
    type: 'Veg',
    ingredients: [
      '1 cup toor dal',
      '2 cups rice',
      '1 tsp turmeric',
      'Salt to taste',
      'Ghee for tempering',
      'Curry leaves and mustard seeds'
    ],
    steps: [
      'Pressure cook toor dal with turmeric',
      'Cook rice separately',
      'Prepare tempering with ghee and spices',
      'Mix dal with tempering',
      'Serve hot dal over rice with ghee'
    ],
    tips: 'A dollop of ghee on top makes it extra delicious',
    featured: false
  },
  {
    id: '6',
    title: 'Sabudana Khichdi',
    titleMarathi: 'साबुदाणा खिचडी',
    description: 'Pearl tapioca stir-fry with peanuts, perfect for fasting',
    image: 'indian tapioca pearls stir fry',
    category: 'Snacks',
    prepTime: '8 hrs',
    cookTime: '15 mins',
    totalTime: '8 hrs 15 mins',
    servings: 4,
    difficulty: 'Medium',
    type: 'Veg',
    ingredients: [
      '2 cups sabudana',
      '1 cup roasted peanuts',
      '2 potatoes cubed',
      '2 green chillies',
      'Curry leaves',
      'Lemon juice'
    ],
    steps: [
      'Soak sabudana overnight',
      'Roast and crush peanuts',
      'Fry potatoes until golden',
      'Add sabudana and mix gently',
      'Add peanuts and seasoning',
      'Garnish with coriander and lemon'
    ],
    tips: 'Make sure sabudana is properly soaked and drained',
    featured: false,
    festival: 'Vrat Special'
  },
  {
    id: '7',
    title: 'Bharli Vangi',
    titleMarathi: 'भरली वांगी',
    description: 'Stuffed baby eggplants in spicy masala gravy',
    image: 'indian stuffed eggplant curry',
    category: 'Lunch',
    prepTime: '30 mins',
    cookTime: '40 mins',
    totalTime: '1 hr 10 mins',
    servings: 4,
    difficulty: 'Medium',
    type: 'Veg',
    ingredients: [
      '12 small brinjals',
      '1 cup grated coconut',
      '2 tbsp peanuts',
      '2 tbsp sesame seeds',
      'Maharashtrian goda masala',
      'Tamarind paste'
    ],
    steps: [
      'Prepare stuffing with coconut, peanuts and spices',
      'Make slits in brinjals and stuff',
      'Heat oil and fry stuffed brinjals',
      'Add remaining stuffing and water',
      'Cook covered until brinjals are tender'
    ],
    tips: 'Choose tender small brinjals for best results',
    featured: true
  },
  {
    id: '8',
    title: 'Shrikhand',
    titleMarathi: 'श्रीखंड',
    description: 'Creamy sweetened yogurt flavored with saffron and cardamom',
    image: 'indian sweetened yogurt dessert saffron',
    category: 'Sweets',
    prepTime: '6 hrs',
    cookTime: '15 mins',
    totalTime: '6 hrs 15 mins',
    servings: 6,
    difficulty: 'Easy',
    type: 'Veg',
    ingredients: [
      '4 cups yogurt',
      '1 cup powdered sugar',
      'Few strands of saffron',
      '1 tsp cardamom powder',
      'Chopped nuts for garnish'
    ],
    steps: [
      'Hang yogurt in muslin cloth for 4-6 hours',
      'Transfer hung curd to bowl',
      'Add sugar and mix until smooth',
      'Add saffron and cardamom',
      'Chill and garnish with nuts'
    ],
    tips: 'Use thick curd for best results',
    featured: false
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Magic of Goda Masala in Maharashtrian Cooking',
    excerpt: 'Discover the secret blend that makes every dish authentically Maharashtrian',
    content: 'Goda masala is the heart and soul of Maharashtrian cuisine...',
    image: 'indian spice blend masala',
    date: '2026-02-10',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Festival Food Memories: Diwali in My Grandmother\'s Kitchen',
    excerpt: 'A journey through traditional Diwali sweets and the stories behind them',
    content: 'Every Diwali, my grandmother\'s kitchen transformed into a sweet shop...',
    image: 'indian diwali sweets traditional kitchen',
    date: '2026-02-05',
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'The Art of Making Perfect Chapatis',
    excerpt: 'Tips and techniques passed down through generations',
    content: 'Making soft, fluffy chapatis is an art that every home cook masters...',
    image: 'indian chapati bread making',
    date: '2026-01-28',
    readTime: '6 min'
  }
];

export const galleryImages: GalleryImage[] = [
  { id: '1', url: 'indian sweet modak dessert', title: 'Modak', category: 'Sweets' },
  { id: '2', url: 'indian puran poli sweet flatbread', title: 'Puran Poli', category: 'Sweets' },
  { id: '3', url: 'indian shrikhand yogurt dessert', title: 'Shrikhand', category: 'Sweets' },
  { id: '4', url: 'indian misal pav street food', title: 'Misal Pav', category: 'Snacks' },
  { id: '5', url: 'indian sabudana khichdi', title: 'Sabudana Khichdi', category: 'Snacks' },
  { id: '6', url: 'indian vada pav snack', title: 'Vada Pav', category: 'Snacks' },
  { id: '7', url: 'indian dal rice meal', title: 'Varan Bhaat', category: 'Daily Food' },
  { id: '8', url: 'indian chapati vegetables meal', title: 'Daily Thali', category: 'Daily Food' },
  { id: '9', url: 'indian bharli vangi stuffed eggplant', title: 'Bharli Vangi', category: 'Specials' },
  { id: '10', url: 'indian ukdiche modak ganesh chaturthi', title: 'Ukdiche Modak', category: 'Specials' }
];