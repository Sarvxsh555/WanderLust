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
    category: "amazing_pools",
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
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
    category: "iconic_cities",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
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
    category: "forest_retreats",
    geometry: { type: "Point", coordinates: [-106.837, 39.1911] },
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
    category: "castles",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
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
    category: "rooms",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
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
    category: "camping",
    geometry: { type: "Point", coordinates: [7.2286, 46.0961] },
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
    category: "farms",
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
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
    category: "amazing_pools",
    geometry: { type: "Point", coordinates: [178.065, -17.7134] },
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
    category: "amazing_pools",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
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
    category: "amazing_pools",
    geometry: { type: "Point", coordinates: [73.2207, 3.2028] },
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
    category: "iconic_cities",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },

  {
    title: "Cliffside Villa in Santorini",
    description: "Wake up to breathtaking sunsets overlooking the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1718939048678-61be3fe7e5d6",
    },
    price: 3200,
    location: "Santorini",
    country: "Greece",
    category: "amazing_pools",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] },
  },

  {
    title: "Himalayan Wooden Cottage",
    description: "Peaceful cottage surrounded by Himalayan peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 900,
    location: "Manali",
    country: "India",
    category: "forest_retreats",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] },
  },

  {
    title: "Overwater Bungalow in Bora Bora",
    description: "Luxury overwater bungalow with lagoon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1703549068359-49d854524ddd",
    },
    price: 8500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "amazing_pools",
    geometry: { type: "Point", coordinates: [-151.7415, -16.5004] },
  },

  {
    title: "Scandinavian Glass Cabin",
    description: "Perfect for watching the northern lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    price: 2800,
    location: "Lapland",
    country: "Finland",
    category: "arctic",
    geometry: { type: "Point", coordinates: [25.7482, 67.9222] },
  },

  {
    title: "Rainforest Eco Lodge",
    description: "Sustainable lodge deep in the rainforest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    },
    price: 1300,
    location: "Amazon Rainforest",
    country: "Brazil",
    category: "forest_retreats",
    geometry: { type: "Point", coordinates: [-60.0258, -3.4653] },
  },

  {
    title: "Royal Heritage Haveli",
    description: "Live like royalty in a Rajasthani haveli.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
    },
    price: 1800,
    location: "Jaipur",
    country: "India",
    category: "castles",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },
];

module.exports = { data: sampleListings };
