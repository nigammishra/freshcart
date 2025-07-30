// src/components/Dropdown/data.jsx
// import React from "react";
// Baby care images
import babycareproduct1 from "../../assets/products/babycare/baby-wipes-lemon-fragrance.webp";
import babycareproduct2 from "../../assets/products/babycare/pampers-premium-care-diapers-new-born.webp";
import babycareproduct3 from "../../assets/products/babycare/huggies-nature-care-diaper-pants-small-monthly-pack.webp";
import babycareproduct4 from "../../assets/products/babycare/premium-care-pants-baby-diapers.webp";

// Bakery items images
import bakeryproduct1 from "../../assets/products/bakery/bakery-delicious-double-chocochip-cake.webp";
import bakeryproduct2 from "../../assets/products/bakery/bakery-double-delight-chocolate-cashew-fruits-biscuits.webp";
import bakeryproduct3 from "../../assets/products/bakery/sunfeast-baked-creations-rich-chocochip-cookies.webp";
// import bakeryproduct4 from "../../assets/products/bakery/sunfeast-dark-fantasy-choco-fills.webp";

// Dairy items images
import dairyproduct1 from "../../assets/products/dairy/amul-amul-gold.webp";
// import dairyproduct2 from "../../assets/products/dairy/amul-cheese-slices.webp";
// import dairyproduct3 from "../../assets/products/dairy/heritage-daily-health-toned-milk.webp";
import dairyproduct4 from "../../assets/products/dairy/mother-dairy-butter.webp";
// import dairyproduct5 from "../../assets/products/dairy/mother-dairy-milk-shake-mango.webp";
// import dairyproduct6 from "../../assets/products/dairy/mother-dairy-mishti-doi.webp";

// Fruits images
// import fruitproduct1 from "../../assets/products/fruits/apple.webp";
import fruitproduct2 from "../../assets/products/fruits/banana.webp";
import fruitproduct3 from "../../assets/products/fruits/mango.webp";
import fruitproduct4 from "../../assets/products/fruits/mangosteen.webp";
import fruitproduct5 from "../../assets/products/fruits/papaya-small.webp";

// Household items
// import householdproduct1 from "../../assets/products/household/cartini-by-godrej-household-scissors.webp";
import householdproduct2 from "../../assets/products/household/microfibre-kitchen-household-cleaning-cloth-set.webp";
// import householdproduct3 from "../../assets/products/household/scotch-brite-household-scrubber-brush.webp";
import householdproduct4 from "../../assets/products/household/stanfresh-glass-cleaner-for-streak-free-finish-maintenance.webp";

// Non-Veg items (Meat, Fish, Eggs)

import nonvegproduct2 from "../../assets/products/meatsandfishandeggs/catla-fish.webp";
// import nonvegproduct3 from "../../assets/products/meatsandfishandeggs/chicken.webp";
import nonvegproduct4 from "../../assets/products/meatsandfishandeggs/eggs.webp";
// import nonvegproduct5 from "../../assets/products/meatsandfishandeggs/indian-prawn.webp";
// import nonvegproduct6 from "../../assets/products/meatsandfishandeggs/peri-peri-chicken-cubes-juicy-fresh.webp";
// import nonvegproduct7 from "../../assets/products/meatsandfishandeggs/rohi-fish.webp";

// Personal care
import personalcareProducts1 from "../../assets/products/personalcare/bella-cotton-buds.webp";
// import personalcareProducts2 from "../../assets/products/personalcare/facewash-acne-and-pimples.webp";
// import personalcareProducts3 from "../../assets/products/personalcare/himalaya-facewash.webp";
import personalcareProducts4 from "../../assets/products/personalcare/himalaya-personal-care-moisturizing-aloe-vera-face-gel.webp";

// Snacks
// import snacksproduct1 from "../../assets/products/snacks/5-star-choco.jpg";
// import snacksproduct2 from "../../assets/products/snacks/Nutichoice-biscuit.jpg";
// import snacksproduct3 from "../../assets/products/snacks/bingo-potato-chips-cream-onion.webp";
// import snacksproduct4 from "../../assets/products/snacks/haldirams-namkeen-khatta-meetha.webp";
// import snacksproduct5 from "../../assets/products/snacks/haldirams-soya-sticks.webp";
// import snacksproduct6 from "../../assets/products/snacks/lays-west-indies-hot-n-sweet-potato-chips-crispy-chips-snacks.webp";
// import snacksproduct7 from "../../assets/products/snacks/lays.jpg";
import snacksproduct8 from "../../assets/products/snacks/popcorn.jpg";
import snacksproduct9 from "../../assets/products/snacks/snack-kerala-banana-chips-peri-peri-flavour-thin-crispy-zero-cholesterol.webp";
import snacksproduct10 from "../../assets/products/snacks/snacks-alubhuji.jpg";

// Vegetables
import vegetableproduct1 from "../../assets/products/vegetables/cabbage.webp";
import vegetableproduct2 from "../../assets/products/vegetables/capsicum-green.webp";
// import vegetableproduct3 from "../../assets/products/vegetables/carrot-orange.webp";
// import vegetableproduct4 from "../../assets/products/vegetables/ladies-finger.webp";
// import vegetableproduct5 from "../../assets/products/vegetables/onion-organically-grown.webp";
// import vegetableproduct6 from "../../assets/products/vegetables/potato.webp";
// import vegetableproduct7 from "../../assets/products/vegetables/tomato-local.webp";

const allProducts = [
  {
    "name": "Baby Wipes Lemon Fragrance",
    "image": babycareproduct1,
    "price": 199,
    "oldPrice": 249,
    "rating": 4.6,
    "reviews": 82,
    "category": "Health & Baby",
    "description": "Soft and gentle wipes with refreshing lemon fragrance for babies.",
    "id": 1
  },
  {
    "name": "Pampers Premium Diapers New Born",
    "image": babycareproduct2,
    "price": 499,
    "oldPrice": 599,
    "rating": 4.7,
    "reviews": 110,
    "category": "Health & Baby",
    "description": "Premium care diapers for new born babies, skin-friendly and safe.",
    "id": 2
  },
  {
    "name": "Huggies Nature Care Diaper Pants",
    "image": babycareproduct3,
    "price": 389,
    "oldPrice": 449,
    "rating": 4.5,
    "reviews": 95,
    "category": "Health & Baby",
    "description": "Huggies diaper pants, gentle and leak-proof.",
    "id": 3
  },
  {
    "name": "Premium Care Pants Diapers",
    "image": babycareproduct4,
    "price": 420,
    "oldPrice": 499,
    "rating": 4.6,
    "reviews": 105,
    "category": "Health & Baby",
    "description": "Comfortable and highly absorbent baby diapers.",
    "id": 4
  },
  {
    "name": "Double Delight Choco Cashew Biscuits",
    "image": bakeryproduct2,
    "price": 99,
    "oldPrice": 120,
    "rating": 4.3,
    "reviews": 88,
    "category": "Bakery",
    "description": "Crispy biscuits with chocolate, cashew, and fruity goodness.",
    "id": 5
  },
  {
    "name": "Rich Chocochip Cookies",
    "image": bakeryproduct1,
    "price": 80,
    "oldPrice": 95,
    "rating": 4.4,
    "reviews": 120,
    "category": "Bakery",
    "description": "Sunfeast baked rich chocochip cookies, crunchy and tasty.",
    "id": 6
  },
  {
    "name": "Sunfeast Dark Fantasy Choco Fills",
    "image": bakeryproduct3,
    "price": 30,
    "oldPrice": 35,
    "rating": 4.6,
    "reviews": 200,
    "category": "Bakery",
    "description": "Mouth-watering choco-filled treats from Sunfeast.",
    "id": 7
  },
  {
    "name": "Amul Cheese Slices",
    "image": dairyproduct1,
    "price": 80,
    "oldPrice": 90,
    "rating": 4.7,
    "reviews": 180,
    "category": "Dairy",
    "description": "Delicious and creamy Amul cheese slices.",
    "id": 8
  },
  {
    "name": "Mother Dairy Butter",
    "image": dairyproduct4,
    "price": 55,
    "oldPrice": 65,
    "rating": 4.8,
    "reviews": 210,
    "category": "Dairy",
    "description": "Fresh and creamy butter from Mother Dairy.",
    "id": 9
  },
  {
    "name": "Haldiram's Soya Sticks",
    "image": snacksproduct10,
    "price": 25,
    "oldPrice": 30,
    "rating": 4.2,
    "reviews": 90,
    "category": "Snacks",
    "description": "Crunchy and protein-rich soya sticks.",
    "id": 10
  },
  {
    "name": "Popcorn",
    "image": snacksproduct8,
    "price": 45,
    "oldPrice": 50,
    "rating": 4.0,
    "reviews": 85,
    "category": "Snacks",
    "description": "Tasty popcorn, perfect for movie nights.",
    "id": 11
  },
  {
    "name": "Kerala Banana Chips Peri Peri",
    "image": snacksproduct9,
    "price": 60,
    "oldPrice": 75,
    "rating": 4.3,
    "reviews": 100,
    "category": "Snacks",
    "description": "Spicy and crispy banana chips, peri peri flavor.",
    "id": 12
  },
  {
    "name": "Banana",
    "image": fruitproduct2,
    "price": 40,
    "oldPrice": 50,
    "rating": 4.3,
    "reviews": 100,
    "category": "Fruits",
    "description": "Nutritious and ripe bananas, perfect for snacking.",
    "id": 13
  },
  {
    "name": "Mango",
    "image": fruitproduct3,
    "price": 150,
    "oldPrice": 180,
    "rating": 4.6,
    "reviews": 200,
    "category": "Fruits",
    "description": "Sweet and juicy mangoes full of tropical flavor.",
    "id": 14
  },
  {
    "name": "Mangosteen",
    "image": fruitproduct4,
    "price": 220,
    "oldPrice": 250,
    "rating": 4.5,
    "reviews": 75,
    "category": "Fruits",
    "description": "Exotic mangosteen fruit with a unique taste.",
    "id": 15
  },
  {
    "name": "Papaya Small",
    "image": fruitproduct5,
    "price": 60,
    "oldPrice": 80,
    "rating": 4.4,
    "reviews": 90,
    "category": "Fruits",
    "description": "Healthy and fresh papaya packed with enzymes.",
    "id": 16
  },
  {
    "name": "Cabbage",
    "image": vegetableproduct1,
    "price": 35,
    "oldPrice": 40,
    "rating": 4.1,
    "reviews": 45,
    "category": "Vegetables",
    "description": "Fresh cabbage, ideal for salads and stir-fries.",
    "id": 17
  },
  {
    "name": "Capsicum Green",
    "image": vegetableproduct2,
    "price": 60,
    "oldPrice": 70,
    "rating": 4.2,
    "reviews": 50,
    "category": "Vegetables",
    "description": "Crisp and fresh green capsicum for daily cooking.",
    "id": 18
  },
  {
    "name": "Kitchen Cleaning Cloth Set",
    "image": householdproduct2,
    "price": 150,
    "oldPrice": 180,
    "rating": 4.3,
    "reviews": 60,
    "category": "Household",
    "description": "Microfibre cloth set for effective kitchen cleaning.",
    "id": 19
  },
  {
    "name": "Glass Cleaner Spray",
    "image": householdproduct4,
    "price": 85,
    "oldPrice": 95,
    "rating": 4.4,
    "reviews": 40,
    "category": "Household",
    "description": "Stanfresh glass cleaner for a spotless finish.",
    "id": 20
  },
  {
    "name": "Catla Fish",
    "image": nonvegproduct2,
    "price": 320,
    "oldPrice": 350,
    "rating": 4.3,
    "reviews": 72,
    "category": "Non-Veg",
    "description": "Freshwater Catla fish, ideal for curry and fry.",
    "id": 21
  },
  {
    "name": "Eggs",
    "image": nonvegproduct4,
    "price": 60,
    "oldPrice": 70,
    "rating": 4.7,
    "reviews": 180,
    "category": "Non-Veg",
    "description": "Farm-fresh eggs, rich in protein.",
    "id": 22
  },
  {
    "name": "Bella Cotton Buds",
    "image": personalcareProducts1,
    "price": 25,
    "oldPrice": 30,
    "rating": 4.1,
    "reviews": 55,
    "category": "Personal Care",
    "description": "Soft and hygienic cotton buds for personal use.",
    "id": 23
  },
  {
    "name": "Himalaya Aloe Vera Face Gel",
    "image": personalcareProducts4,
    "price": 95,
    "oldPrice": 110,
    "rating": 4.5,
    "reviews": 130,
    "category": "Personal Care",
    "description": "Cooling and hydrating aloe vera gel for all skin types.",
    "id": 24
  }
];

export default allProducts;