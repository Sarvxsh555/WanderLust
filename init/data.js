const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
  },

  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
  },

  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911],
    },
  },

  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this restored villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },

  {
    title: "Luxury Penthouse with City Views",
    description: "Panoramic city views from this stunning penthouse.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },

  {
    title: "Ski-In Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2286, 46.0961],
    },
  },

  {
    title: "Safari Lodge in Serengeti",
    description: "Experience the thrill of wildlife in comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333],
    },
  },

  {
    title: "Private Island Retreat",
    description: "An entire island to yourself.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [178.065, -17.7134],
    },
  },

  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
  },

  {
    title: "Luxury Villa in the Maldives",
    description: "Overwater villa with ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
  },

  // 🔥 Extra high-quality listings
  {
    title: "Desert Oasis in Dubai",
    description: "Luxury living in the desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },

  {
    title: "Modern Apartment in Tokyo",
    description: "Explore Tokyo from a central modern apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },
  {
  title: "Cliffside Villa in Santorini",
  description: "Wake up to breathtaking sunsets and whitewashed architecture overlooking the Aegean Sea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1718939048678-61be3fe7e5d6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 3200,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [25.4615, 36.3932],
  },
},

{
  title: "Himalayan Wooden Cottage",
  description: "A peaceful wooden cottage surrounded by pine forests and snow-capped Himalayan peaks.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  price: 900,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.1892, 32.2396],
  },
},

{
  title: "Overwater Bungalow in Bora Bora",
  description: "Luxury overwater bungalow with crystal-clear lagoon views and private deck access.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1703549068359-49d854524ddd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 8500,
  location: "Bora Bora",
  country: "French Polynesia",
  geometry: {
    type: "Point",
    coordinates: [-151.7415, -16.5004],
  },
},

{
  title: "Scandinavian Glass Cabin",
  description: "Minimalist glass cabin perfect for watching the northern lights in complete comfort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  },
  price: 2800,
  location: "Lapland",
  country: "Finland",
  geometry: {
    type: "Point",
    coordinates: [25.7482, 67.9222],
  },
},

{
  title: "Rainforest Eco Lodge",
  description: "Sustainable eco-lodge deep inside the rainforest, surrounded by wildlife and waterfalls.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
  },
  price: 1300,
  location: "Amazon Rainforest",
  country: "Brazil",
  geometry: {
    type: "Point",
    coordinates: [-60.0258, -3.4653],
  },
  title: "Royal Heritage Haveli",
  description: "Live like royalty in this beautifully restored Rajasthani haveli with traditional architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
  },
  price: 1800,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [75.7873, 26.9124],
  },
},

{
  title: "Houseboat Stay in Backwaters",
  description: "Experience Kerala’s serene backwaters on a luxury houseboat with full amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  price: 1400,
  location: "Alappuzha",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [76.3388, 9.4981],
  },
},

{
  title: "Luxury Desert Camp",
  description: "Sleep under the stars in a luxury desert camp with cultural performances.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
  },
  price: 2200,
  location: "Jaisalmer",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [70.9083, 26.9157],
  },
},

{
  title: "Colonial Bungalow in Ooty",
  description: "A peaceful colonial-era bungalow surrounded by tea gardens and misty hills.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1200&q=80",
  },
  price: 1200,
  location: "Ooty",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [76.6950, 11.4064],
  },
},

{
  title: "Luxury Apartment near Eiffel Tower",
  description: "Elegant Parisian apartment just steps away from the Eiffel Tower.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
  price: 3000,
  location: "Paris",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [2.2945, 48.8584],
  },
},

{
  title: "Countryside Stone Cottage",
  description: "Charming countryside cottage surrounded by rolling green fields.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  price: 1100,
  location: "Yorkshire",
  country: "United Kingdom",
  geometry: {
    type: "Point",
    coordinates: [-1.0873, 53.9583],
  },
},

{
  title: "Lake View Chalet",
  description: "Wooden chalet with panoramic lake views and peaceful surroundings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  price: 1700,
  location: "Interlaken",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [7.8632, 46.6863],
  },
},

{
  title: "Traditional Ryokan Experience",
  description: "Authentic Japanese ryokan with tatami rooms and hot spring baths.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
  },
  price: 2100,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [135.7681, 35.0116],
  },
},

{
  title: "Ocean View Apartment",
  description: "Modern apartment with sweeping ocean views and beach access.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1678770419103-015a54d1e2ee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 2600,
  location: "Sydney",
  country: "Australia",
  geometry: {
    type: "Point",
    coordinates: [151.2093, -33.8688],
  },
},

{
  title: "Winery Estate Stay",
  description: "Stay at a luxury winery estate surrounded by vineyards and rolling hills.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  price: 2400,
  location: "Napa Valley",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-122.2869, 38.5025],
  },
},
];


module.exports = { data: sampleListings };