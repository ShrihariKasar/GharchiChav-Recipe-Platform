/* ================= TYPES ================= */

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
  difficulty: "Easy" | "Medium" | "Hard";
  type: "Veg" | "Non-Veg";
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
  category: "Sweets" | "Snacks" | "Daily Food" | "Specials";
}

export const recipes: Recipe[] = [
  {
    id: "pohe",
    title: "Pohe",
    titleMarathi: "पोहे",
    description: "Traditional Maharashtrian flattened rice breakfast",
    image: "/assets/gallery/IMG-20260214-WA0067.jpg",
    category: "Breakfast",
    prepTime: "10 mins",
    cookTime: "15 mins",
    totalTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    type: "Veg",
    ingredients: ["Poha", "Onion", "Peanuts", "Turmeric"],
    steps: ["Rinse poha", "Cook masala", "Mix and serve"],
    featured: true,
  },

  {
    id: "methi-bhaji",
    title: "Methi Bhaji",
    description: "Healthy fenugreek leaf sabzi",
    image: "/assets/gallery/IMG-20260214-WA0065.jpg",
    category: "Daily Food",
    prepTime: "10 mins",
    cookTime: "20 mins",
    totalTime: "30 mins",
    servings: 3,
    difficulty: "Easy",
    type: "Veg",
    ingredients: ["Methi leaves", "Garlic", "Spices"],
    steps: ["Clean methi", "Cook with spices"],
  },

  {
    id: "lasuni-methi",
    title: "Lasuni Methi",
    description: "Garlic flavored methi sabzi",
    image: "/assets/gallery/IMG-20260214-WA0068.jpg",
    category: "Daily Food",
    prepTime: "10 mins",
    cookTime: "20 mins",
    totalTime: "30 mins",
    servings: 3,
    difficulty: "Easy",
    type: "Veg",
    ingredients: ["Methi", "Garlic", "Oil"],
    steps: ["Saute garlic", "Cook methi"],
  },

  {
    id: "kothimbir-wadi",
    title: "Kothimbir Wadi",
    description: "Steamed and fried coriander snack",
    image: "/assets/gallery/IMG-20260214-WA0066.jpg",
    category: "Snacks",
    prepTime: "20 mins",
    cookTime: "20 mins",
    totalTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    type: "Veg",
    ingredients: ["Coriander", "Besan", "Spices"],
    steps: ["Prepare batter", "Steam", "Fry pieces"],
  },

  {
    id: "masala-wang",
    title: "Masala Wang",
    description: "Spicy brinjal curry",
    image: "/assets/gallery/IMG-20260214-WA0069.jpg",
    category: "Specials",
    prepTime: "20 mins",
    cookTime: "25 mins",
    totalTime: "45 mins",
    servings: 3,
    difficulty: "Medium",
    type: "Veg",
    ingredients: ["Brinjal", "Masala", "Oil"],
    steps: ["Cook masala", "Add brinjal"],
  },

  {
    id: "sabudana-wada",
    title: "Sabudana Wada",
    description: "Crispy fasting snack made with tapioca pearls",
    image: "/assets/gallery/IMG-20260214-WA0045.jpg",
    category: "Snacks",
    prepTime: "8 hrs",
    cookTime: "15 mins",
    totalTime: "8 hrs 15 mins",
    servings: 4,
    difficulty: "Medium",
    type: "Veg",
    ingredients: ["Sabudana", "Peanuts", "Potato"],
    steps: ["Soak sabudana", "Shape wada", "Deep fry"],
    festival: "Vrat Special",
  },

  {
    id: "dal-palak",
    title: "Dal Palak",
    description: "Nutritious spinach dal",
    image: "/assets/gallery/IMG-20260214-WA0035.jpg",
    category: "Daily Food",
    prepTime: "10 mins",
    cookTime: "25 mins",
    totalTime: "35 mins",
    servings: 4,
    difficulty: "Easy",
    type: "Veg",
    ingredients: ["Toor dal", "Palak"],
    steps: ["Cook dal", "Add palak"],
  },

  {
    id: "bharli-wangi",
    title: "Bharli Wangi",
    titleMarathi: "भरली वांगी",
    description: "Stuffed brinjal curry in Maharashtrian style",
    image: "/assets/gallery/IMG-20260214-WA0028.jpg",
    category: "Specials",
    prepTime: "30 mins",
    cookTime: "40 mins",
    totalTime: "1 hr 10 mins",
    servings: 4,
    difficulty: "Medium",
    type: "Veg",
    ingredients: ["Baby brinjals", "Peanut masala"],
    steps: ["Stuff brinjals", "Cook gravy"],
    featured: true,
  },

  {
    id: "strawberry-milkshake",
    title: "Strawberry Milkshake",
    description: "Refreshing fruit milkshake",
    image: "/assets/gallery/IMG-20260214-WA0041.jpg",
    category: "Sweets",
    prepTime: "5 mins",
    cookTime: "0 mins",
    totalTime: "5 mins",
    servings: 2,
    difficulty: "Easy",
    type: "Veg",
    ingredients: ["Strawberry", "Milk", "Sugar"],
    steps: ["Blend all ingredients"],
  },
];
export const blogPosts: BlogPost[] = [
  {
    id: "goda-masala",
    title: "The Magic of Goda Masala in Maharashtrian Cooking",
    excerpt:
      "Discover the spice blend that gives Maharashtrian food its authentic soul.",
    content:
      "Goda masala is the backbone of traditional Maharashtrian cooking, used in dals, bhajis, and festive dishes.",
    image: "/assets/gallery/IMG-20260214-WA0064.jpg",
    date: "2026-02-10",
    readTime: "5 min",
  },
  {
    id: "diwali-memories",
    title: "Festival Food Memories from My Grandmother’s Kitchen",
    excerpt:
      "Traditional sweets, warmth, and stories that shaped my love for cooking.",
    content:
      "Festivals in Maharashtra are incomplete without homemade sweets and family traditions.",
    image: "/assets/gallery/IMG-20260214-WA0057.jpg",
    date: "2026-02-05",
    readTime: "8 min",
  },
  {
    id: "perfect-dosa",
    title: "Secrets to Making Soft Moong Dosa at Home",
    excerpt: "Simple tips for healthy and delicious homemade dosa.",
    content:
      "Moong dosa is nutritious, quick, and perfect for breakfast or light dinner.",
    image: "/assets/gallery/IMG-20260214-WA0031.jpg",
    date: "2026-01-28",
    readTime: "6 min",
  },
];
/* ================= GALLERY ================= */

export const galleryImages: GalleryImage[] = [
  // Top Section
  { id: "1", url: "/assets/gallery/IMG-20260214-WA0067.jpg", title: "Pohe", category: "Daily Food" },
  { id: "2", url: "/assets/gallery/IMG-20260214-WA0065.jpg", title: "Methi Bhaji", category: "Daily Food" },
  { id: "3", url: "/assets/gallery/IMG-20260214-WA0068.jpg", title: "Lasuni Methi", category: "Daily Food" },
  { id: "4", url: "/assets/gallery/IMG-20260214-WA0066.jpg", title: "Kothimbir Wadi", category: "Snacks" },
  { id: "5", url: "/assets/gallery/IMG-20260214-WA0069.jpg", title: "Masala Wang", category: "Specials" },
  { id: "6", url: "/assets/gallery/IMG-20260214-WA0064.jpg", title: "Tomato Chutney", category: "Daily Food" },
  { id: "7", url: "/assets/gallery/IMG-20260214-WA0063.jpg", title: "Shepu Palak Chuka Bhaji", category: "Daily Food" },
  { id: "8", url: "/assets/gallery/IMG-20260214-WA0070.jpg", title: "ABC Juice", category: "Sweets" },

  // Middle Section
  { id: "9", url: "/assets/gallery/IMG-20260214-WA0062.jpg", title: "Wang Batata Bhaji", category: "Daily Food" },
  { id: "10", url: "/assets/gallery/IMG-20260214-WA0061.jpg", title: "Kharik Khobare Ladu", category: "Sweets" },
  { id: "11", url: "/assets/gallery/IMG-20260214-WA0059.jpg", title: "Cauliflower Bhaji", category: "Daily Food" },
  { id: "12", url: "/assets/gallery/IMG-20260214-WA0058.jpg", title: "Paneer Masala", category: "Specials" },
  { id: "13", url: "/assets/gallery/IMG-20260214-WA0060.jpg", title: "Shepu Bhaji", category: "Daily Food" },
  { id: "14", url: "/assets/gallery/IMG-20260214-WA0057.jpg", title: "Gajar Halwa", category: "Sweets" },
  { id: "15", url: "/assets/gallery/IMG-20260214-WA0056.jpg", title: "Vatana Bhaji", category: "Daily Food" },
  { id: "16", url: "/assets/gallery/IMG-20260214-WA0053.jpg", title: "Veg Pulav", category: "Specials" },

  // Non-Veg / Snacks
  { id: "17", url: "/assets/gallery/IMG-20260214-WA0052.jpg", title: "Chicken Soup", category: "Specials" },
  { id: "18", url: "/assets/gallery/IMG-20260214-WA0054.jpg", title: "Chicken Masala", category: "Specials" },
  { id: "19", url: "/assets/gallery/IMG-20260214-WA0055.jpg", title: "Bhindi for Kids", category: "Daily Food" },
  { id: "20", url: "/assets/gallery/IMG-20260214-WA0051.jpg", title: "Kadhi", category: "Daily Food" },
  { id: "21", url: "/assets/gallery/IMG-20260214-WA0049.jpg", title: "Mirchi Pakoda", category: "Snacks" },
  { id: "22", url: "/assets/gallery/IMG-20260214-WA0048.jpg", title: "Palak Puri", category: "Snacks" },
  { id: "23", url: "/assets/gallery/IMG-20260214-WA0050.jpg", title: "Kothimbir Thalipeeth", category: "Snacks" },

  // Remaining
  { id: "24", url: "/assets/gallery/IMG-20260214-WA0046.jpg", title: "Shev Bhaji", category: "Daily Food" },
  { id: "25", url: "/assets/gallery/IMG-20260214-WA0047.jpg", title: "Aloo Sabji", category: "Daily Food" },
  { id: "26", url: "/assets/gallery/IMG-20260214-WA0045.jpg", title: "Sabudana Wada", category: "Snacks" },
  { id: "27", url: "/assets/gallery/IMG-20260214-WA0044.jpg", title: "Shewaya Kheer", category: "Sweets" },
  { id: "28", url: "/assets/gallery/IMG-20260214-WA0041.jpg", title: "Strawberry Milkshake", category: "Sweets" },
  { id: "29", url: "/assets/gallery/IMG-20260214-WA0040.jpg", title: "Instant Maggi", category: "Snacks" },
  { id: "30", url: "/assets/gallery/IMG-20260214-WA0039.jpg", title: "Sandwich for Kids", category: "Snacks" },
  { id: "31", url: "/assets/gallery/IMG-20260214-WA0043.jpg", title: "Onion Chutney", category: "Daily Food" },
  { id: "32", url: "/assets/gallery/IMG-20260214-WA0042.jpg", title: "Appe", category: "Snacks" },

  // Bottom
  { id: "33", url: "/assets/gallery/IMG-20260214-WA0038.jpg", title: "Dodkyachi Bhaji", category: "Daily Food" },
  { id: "34", url: "/assets/gallery/IMG-20260214-WA0035.jpg", title: "Dal Palak", category: "Daily Food" },
  { id: "35", url: "/assets/gallery/IMG-20260214-WA0037.jpg", title: "Kaut Chutney", category: "Daily Food" },
  { id: "36", url: "/assets/gallery/IMG-20260214-WA0036.jpg", title: "Matki Bhaji", category: "Daily Food" },
  { id: "37", url: "/assets/gallery/IMG-20260214-WA0034.jpg", title: "Bhogi Special Bhaji", category: "Specials" },
  { id: "38", url: "/assets/gallery/IMG-20260214-WA0033.jpg", title: "Bharit", category: "Specials" },
  { id: "39", url: "/assets/gallery/IMG-20260214-WA0032.jpg", title: "Moog Bhaji", category: "Daily Food" },
  { id: "40", url: "/assets/gallery/IMG-20260214-WA0031.jpg", title: "Moog Dosa", category: "Snacks" },
  { id: "41", url: "/assets/gallery/IMG-20260214-WA0030.jpg", title: "Dosa Coconut Chutney", category: "Snacks" },
  { id: "42", url: "/assets/gallery/IMG-20260214-WA0029.jpg", title: "Kandyachi Path", category: "Daily Food" },
  { id: "43", url: "/assets/gallery/IMG-20260214-WA0028.jpg", title: "Bharli Wangi", category: "Specials" },
];