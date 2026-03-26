import React from 'react';
import Card from './Card';

function AmazonCart() {
    const productobj = [
        {
            title: 'Wireless Mouse',
            description: 'Ergonomic design with smooth tracking',
            oldPrice: 999,
            newPrice: 599,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdpurfazjq09sSldLxEnQVwcS0Zl6KBqAHw&s',
            rating: 4.3
        },
        {
            title: 'Mechanical Keyboard',
            description: 'RGB backlit keys with tactile feedback',
            oldPrice: 3499,
            newPrice: 2499,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pMTMBVZRNTIIDPWjz7SHi3zxspxZySzwdA&shttps://m.media-amazon.com/images/I/61vF6ZQ7LzL._AC_.jpg',
            rating: 4.6
        },
        {
            title: 'USB-C Hub',
            description: 'Multi-port adapter with HDMI and USB 3.0',
            oldPrice: 1999,
            newPrice: 1299,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pMTMBVZRNTIIDPWjz7SHi3zxspxZySzwdA&shttps://m.media-amazon.com/images/I/61vF6ZQ7LzL._AC_.jpg',
            rating: 4.2
        },
        {
            title: 'Laptop Stand',
            description: 'Adjustable aluminum stand for better posture',
            oldPrice: 1499,
            newPrice: 899,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdpurfazjq09sSldLxEnQVwcS0Zl6KBqAHw&s',
            rating: 4.5
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center p-6 bg-gray-100 space-y-8">

            <h1 className="font-bold text-2xl text-center">
                Blockbuster Deals with Computer Accessories <span>|</span> Shop Now
            </h1>

            <Card productobj={productobj} />

        </div>
    );
}

export default AmazonCart;