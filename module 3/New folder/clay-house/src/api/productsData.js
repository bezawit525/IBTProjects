import mug from '../assets/mug.jpg'
import mugLarge from '../assets/mug-large.jpg'
import bowl from '../assets/bowl.jpg'
import vase from '../assets/vase.jpg'
import plate from '../assets/plate.jpg'

export const CATEGORIES = ['Mugs', 'Bowls', 'Plates', 'Vases', 'Decor']

export const PRODUCTS = [
  {
    id: 'ceramic-mug',
    name: 'Ceramic Mug',
    category: 'Mugs',
    price: 18,
    rating: 4.8,
    reviews: 24,
    stock: 12,
    images: [mugLarge, mug],
    description: 'Handmade ceramic mug with a unique speckled finish. Perfect for your morning coffee or tea.',
    details: ['Handmade ceramic', '12 oz capacity', 'Dishwasher safe', 'Unique speckled glaze'],
  },
  {
    id: 'serving-bowl',
    name: 'Serving Bowl',
    category: 'Bowls',
    price: 26,
    rating: 4.7,
    reviews: 18,
    stock: 8,
    images: [bowl],
    description: 'A wide, shallow stoneware bowl with a soft cream glaze. Made for sharing salads, pasta and fruit.',
    details: ['Hand-thrown stoneware', '9 in diameter', 'Food safe glaze', 'Hand wash recommended'],
  },
  {
    id: 'decorative-vase',
    name: 'Decorative Vase',
    category: 'Vases',
    price: 32,
    rating: 4.9,
    reviews: 31,
    stock: 5,
    images: [vase],
    description: 'A terracotta vase with a warm matte finish. Holds dried stems or stands alone as a sculptural piece.',
    details: ['Hand-built terracotta', '8 in tall', 'Not watertight — best for dried stems', 'Each piece is one of a kind'],
  },
  {
    id: 'dinner-plate',
    name: 'Dinner Plate',
    category: 'Plates',
    price: 24,
    rating: 4.6,
    reviews: 12,
    stock: 6,
    images: [plate],
    description: 'A generous dinner plate with a speckled sand glaze and a gently raised rim.',
    details: ['Handmade stoneware', '10.5 in diameter', 'Dishwasher and microwave safe', 'Speckled sand glaze'],
  },
]
