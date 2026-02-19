export const products = [
    {
        id: 1,
        name: 'Hand-Painted Madhubani Wall Art',
        artisanId: 1,
        artisan: 'Lakshmi Devi',
        category: 'Paintings',
        price: 'Contact for Price',
        description: 'This exquisite piece of traditional Madhubani art is hand-painted on handmade paper using natural dyes and pigments. The artwork depicts a vibrant scene from nature, featuring delicate floral patterns and symbolic motifs that are characteristic of the Mithila region.',
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop',
        featured: true,
        specifications: [
            { label: 'Material', value: 'Handmade Paper, Natural Pigments' },
            { label: 'Dimensions', value: '12 x 18 inches' },
            { label: 'Origin', value: 'Madhubani, Bihar' },
            { label: 'Technique', value: 'Freehand Painting with Nib Pens and Brushes' }
        ],
        images: [
            'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop'
        ]
    },
    {
        id: 2,
        name: 'Terracotta Decorative Vase',
        artisanId: 2,
        artisan: 'Ramesh Kumar',
        category: 'Pottery',
        price: 'Contact for Price',
        description: 'Handcrafted terracotta vase with traditional motifs, perfect for home decor. Each piece is unique and carries the signature style of the artisan.',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=600&fit=crop',
        featured: false,
        specifications: [
            { label: 'Material', value: 'Natural Clay' },
            { label: 'Weight', value: '1.5 kg' },
            { label: 'Origin', value: 'Rajasthan' },
            { label: 'Technique', value: 'Wheel-thrown & Hand-etched' }
        ],
        images: [
            'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop'
        ]
    },
    {
        id: 3,
        name: 'Handwoven Cotton Saree',
        artisanId: 3,
        artisan: 'Savita Sharma',
        category: 'Textiles',
        price: 'Contact for Price',
        description: 'Pure cotton saree with intricate handloom patterns. Breathable, comfortable and sustainable fashion straight from the weavers of Kutch.',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=600&fit=crop',
        featured: true,
        specifications: [
            { label: 'Material', value: '100% Organic Cotton' },
            { label: 'Length', value: '6.5 meters' },
            { label: 'Origin', value: 'Gujarat' },
            { label: 'Care', value: 'Dry Clean Recommended' }
        ],
        images: [
            'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=800&h=600&fit=crop'
        ]
    },
    {
        id: 4,
        name: 'Block Printed Table Runner',
        artisanId: 4,
        artisan: 'Meena Kumari',
        category: 'Textiles',
        price: 'Contact for Price',
        description: 'Hand block printed cotton table runner using vegetable dyes. Adds a touch of traditional elegance to your dining space.',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop',
        featured: false,
        specifications: [
            { label: 'Material', value: 'Heavy Cotton' },
            { label: 'Dimensions', value: '14 x 72 inches' },
            { label: 'Dyes', value: 'Eco-friendly Vegetable Dyes' },
            { label: 'Origin', value: 'Rajasthan' }
        ],
        images: [
            'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&h=600&fit=crop'
        ]
    },
    {
        id: 5,
        name: 'Hand-Carved Wooden Idol',
        artisanId: 5,
        artisan: 'Arjun Singh',
        category: 'Wood Craft',
        price: 'Contact for Price',
        description: 'Beautifully hand-carved sandalwood idol, demonstrating extreme precision and devotion. A masterpiece of traditional woodcraft.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        featured: false,
        specifications: [
            { label: 'Material', value: 'Sandalwood' },
            { label: 'Height', value: '10 inches' },
            { label: 'Origin', value: 'Karnataka' },
            { label: 'Type', value: 'Relief Carving' }
        ],
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1544274411-a7af6d1211bc?w=800&h=600&fit=crop'
        ]
    },
    {
        id: 6,
        name: 'Embroidered Cushion Cover',
        artisanId: 6,
        artisan: 'Radha Devi',
        category: 'Textiles',
        price: 'Contact for Price',
        description: 'Hand-embroidered cushion cover with traditional Zardosi patterns. Luxurious and authentic craft from the artisans of Uttar Pradesh.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
        featured: false,
        specifications: [
            { label: 'Material', value: 'Silk Blend' },
            { label: 'Size', value: '16 x 16 inches' },
            { label: 'Work', value: 'Hand Embroidery / Zardosi' },
            { label: 'Origin', value: 'Uttar Pradesh' }
        ],
        images: [
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1598257006736-c34621c7abc2?w=800&h=600&fit=crop'
        ]
    }
];
