import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="relative w-full max-w-7xl mx-auto  py-4">
            <div className="relative h-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80" 
                        alt="Luxury jewelry showcase"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex flex-col justify-center px-12 md:px-20">
                    <div className="max-w-2xl">
                        <p className="text-[#d4af37] text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-light">
                            Timeless Elegance
                        </p>
                        <h2 className="text-white text-5xl md:text-7xl font-semibold mb-6 leading-tight" style={{fontFamily: 'var(--font-playfair)'}}>
                            Golden Piece
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-8 font-light tracking-wide">
                            Jewellery Store
                        </p>
                        <Link 
                            href="/products"
                            className="inline-block bg-white text-[#555d71] px-10 py-4 rounded-full font-medium hover:bg-[#d4af37] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Explore Collection
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
