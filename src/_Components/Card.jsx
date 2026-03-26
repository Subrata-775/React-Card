import React from 'react';

function Card({ productobj }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {productobj.map((product, index) => (
                <div
                    key={index}
                    className="bg-blue-100 border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition duration-300"
                >
                    {/* Title */}
                    <h1 className="font-bold text-lg mb-2">{product.title}</h1>

                    {/* Image */}
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-[140px] object-contain mb-3"
                    />

                    {/* Description */}
                    <p className="text-sm text-gray-700 mb-2">
                        {product.description}
                    </p>

                    {/* Price Section */}
                    <div className="flex gap-4 items-center mb-2">
                        <span className="line-through text-gray-500 text-sm">
                            ₹{product.oldPrice}
                        </span>
                        <span className="font-bold text-green-600">
                            ₹{product.newPrice}
                        </span>
                    </div>

                    {/* Rating */}
                    <p className="text-yellow-500 font-semibold">
                        ⭐ {product.rating}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Card;