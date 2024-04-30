import beveragesProducts from './beveragesProduct';
import coffeeProducts from './coffeeProducts';
import popularProducts from './popularProduct';
import snacksProducts from './snacksProduct';
import teaProducts from './teaProducts'; 
import image1 from '../assets/tea2.png'; // Import a background image
import image2 from '../assets/tea3.png';
import image3 from '../assets/tea2.png';
import image4 from '../assets/burger.jpg';
import image5 from '../assets/beverage.jpg';
const productCategories = [
    {
        id: 1,
        name: 'Popular Items',
        image: image1,
        color: '#FF5733', // Popular Items color: Reddish-Orange
        products: popularProducts
    },
    {
        id: 2,
        name: 'Tea',
        image: image2, // Use the imported image for Tea category
        color: '#33FF57', // Tea color: Green
        products: teaProducts,
    },
    {
        id: 3,
        name: 'Coffee',
        image: image3,
        color: '#3366FF', // Coffee color: Blue
        products: coffeeProducts,
    },
    {
        id: 4,
        name: 'Snacks',
        image: image4,
        color: '#FF33CC', // Snacks color: Pink
        products: snacksProducts,
    },
    {
        id: 5,
        name: 'Beverages',
        image: image5,
        color: '#800080', // Beverages color: Yellow
        products: beveragesProducts,
    },
];

export default productCategories;
