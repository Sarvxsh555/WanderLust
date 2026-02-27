const CATEGORY_CONFIG = [
  { value: "trending", label: "Trending" },
  { value: "rooms", label: "Rooms" },
  { value: "iconic_cities", label: "Iconic Cities" },
  { value: "castles", label: "Castles" },
  { value: "amazing_pools", label: "Amazing Pools" },
  { value: "camping", label: "Camping" },
  { value: "farms", label: "Farms" },
  { value: "arctic", label: "Arctic" },
  { value: "forest_retreats", label: "Forest Retreats" },
];

const CATEGORY_VALUES = CATEGORY_CONFIG.map((category) => category.value);

const CATEGORY_KEYWORDS = {
  rooms: ["room", "apartment", "loft", "penthouse", "bungalow", "villa", "cabin"],
  iconic_cities: ["city", "downtown", "tokyo", "new york", "los angeles", "florence"],
  castles: ["castle", "fort", "palace", "haveli", "heritage", "royal"],
  amazing_pools: ["pool", "water", "beach", "ocean", "lake", "overwater", "lagoon"],
  camping: ["camp", "tent", "outdoor", "campsite"],
  farms: ["farm", "ranch", "countryside", "barn"],
  arctic: ["arctic", "snow", "ice", "northern lights", "lapland"],
  forest_retreats: ["forest", "rainforest", "woods", "eco lodge", "cabin", "mountain"],
};

module.exports = {
  CATEGORY_CONFIG,
  CATEGORY_VALUES,
  CATEGORY_KEYWORDS,
};
