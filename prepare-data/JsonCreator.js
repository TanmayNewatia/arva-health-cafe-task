const fs = require('fs');

const locations = [
    { address: 'MG Road, Bangalore, Karnataka, India', latitude: 12.9716, longitude: 77.5946 },
    { address: 'MG Road, Pune, Maharashtra, India', latitude: 18.5204, longitude: 73.8567 },
    { address: 'MG Road, Chennai, Tamil Nadu, India', latitude: 13.0827, longitude: 80.2707 },
    { address: 'Connaught Place, New Delhi, India', latitude: 28.6333, longitude: 77.2195 },
    { address: 'Park Street, Kolkata, West Bengal, India', latitude: 22.5531, longitude: 88.3578 }
];

const names = [
    'Brew Bliss', 'Coffee Corner', 'Cafe Delight', 'Mocha Magic', 'Espresso Express',
    'Cappuccino Cove', 'Latte Lounge', 'Bean There', 'Grounded Cafe', 'Brewed Awakening'
];

const descriptions = [
    'A cozy place to enjoy your coffee', 'Perfect for a quick coffee break', 'A delightful cafe with a variety of coffee',
    'Best place to relax and enjoy a mocha', 'Fast service with a smile', 'Perfect blend of taste and comfort',
    'Coffee and conversations', 'Home away from home', 'Best coffee in town', 'Wake up with our brew'
];

const images = [
    'https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2551794/pexels-photo-2551794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2307221/pexels-photo-2307221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const generateRandomRating = () => ({
    score: Math.floor(Math.random() * 5) + 1,
});

const generateRandomImage = () => ({
    url: images[Math.floor(Math.random() * images.length)]
});

const generateRandomLocation = () => {
    const location = locations[Math.floor(Math.random() * locations.length)];
    return {
        address: location.address,
        latitude: location.latitude,
        longitude: location.longitude
    };
};

const products = [
    { name: 'Espresso', price: 150, category: 'Coffee', image: 'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Cappuccino', price: 200, category: 'Coffee', image: 'https://images.pexels.com/photos/2956954/pexels-photo-2956954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Latte', price: 180, category: 'Coffee', image: 'https://images.pexels.com/photos/910086/pexels-photo-910086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Iced Coffee', price: 220, category: 'Drinks', image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Muffin', price: 120, category: 'Food', image: 'https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sandwich', price: 150, category: 'Food', image: 'https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Croissant', price: 130, category: 'Food', image: 'https://images.pexels.com/photos/1510685/pexels-photo-1510685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Tea', price: 100, category: 'Drinks', image: 'https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Mocha', price: 190, category: 'Coffee', image: 'https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Smoothie', price: 250, category: 'Drinks', image: 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
];

const generateRandomProduct = () => products[Math.floor(Math.random() * products.length)];

const generateCoffeeShop = (id) => ({
    id: id,
    name: names[Math.floor(Math.random() * names.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    location: generateRandomLocation(),
    ratings: Array.from({ length: 1 }, generateRandomRating),
    images: Array.from({ length: 1 }, generateRandomImage),
    products: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, generateRandomProduct)
});

const coffeeShops = Array.from({ length: 200 }, (_, i) => generateCoffeeShop(i));

fs.writeFileSync('coffee_shops.json', JSON.stringify(coffeeShops, null, 2));

console.log('Generated 200 coffee shop records in coffee_shops.json');
