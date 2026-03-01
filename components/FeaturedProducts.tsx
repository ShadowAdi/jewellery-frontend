'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredProducts = [
    {
        id: 3,
        name: 'Pearl Necklace',
        price: 2100,
        description: 'Akoya pearls with diamond clasp',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
        badge: 'Signature Piece'
    },
    {
        id: 10,
        name: 'Tennis Bracelet',
        price: 3200,
        description: 'Classic diamond tennis bracelet',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=700&auto=format&fit=crop',
        badge: 'Best Seller'
    },
    {
        id: 5,
        name: 'Sapphire Ring',
        price: 1850,
        description: 'Ceylon sapphire with diamond halo',
        image: 'https://images.unsplash.com/photo-1590166223826-12dee1677420?q=80&w=689&auto=format&fit=crop',
        badge: 'Editor\'s Choice'
    }
]

export default function FeaturedProducts() {
    return (
        <section className="w-full bg-gradient-to-b from-white to-[#faf8f5] py-16 sm:py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-sm text-[#d4af37] font-medium mb-2 tracking-wider uppercase">
                        Curated Selection
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2d2d2d] mb-4 font-playfair">
                        Featured Masterpieces
                    </h2>
                    <p className="text-[#5a5a5a] text-base sm:text-lg max-w-2xl mx-auto">
                        Handpicked treasures that exemplify our commitment to timeless elegance and unparalleled craftsmanship
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {featuredProducts.map((product, index) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                            style={{
                                gridColumn: index === 0 ? 'span 1' : 'span 1',
                            }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="bg-[#2d2d2d] text-white px-4 py-2 text-xs font-medium tracking-wide rounded-full">
                                        {product.badge}
                                    </span>
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-sm sm:text-base mb-2 opacity-90">
                                        {product.description}
                                    </p>
                                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 font-playfair">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xl sm:text-2xl font-bold">
                                            ${product.price.toLocaleString()}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <span>View Details</span>
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12 sm:mt-16">
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-3 bg-[#2d2d2d] text-white px-8 py-4 font-medium hover:bg-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg text-sm sm:text-base group"
                    >
                        <span>Explore Full Collection</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
