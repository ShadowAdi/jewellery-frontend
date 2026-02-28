import Link from 'next/link'
import { Sparkles } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2d2d2d] leading-tight mb-6" style={{fontFamily: 'var(--font-playfair)'}}>
                            Jewelry For<br />
                            Exclusive<br />
                            Collections
                        </h1>
                        <p className="text-[#5a5a5a] text-base md:text-lg leading-relaxed max-w-md">
                            Surrounding the gem, delicate filigree work crafted with meticulous attention, creating an heirloom worthy of generations.
                        </p>
                    </div>
                    
                    <Link 
                        href="/products"
                        className="inline-block bg-[#2d2d2d] text-white px-10 py-4 font-medium hover:bg-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Explore Now
                    </Link>

                    {/* Testimonial */}
                    <div className="flex items-center gap-4 pt-8">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                                alt="Customer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[#2d2d2d] text-sm italic mb-1">
                                "Absolutely breathtaking! I couldn't be happier with my purchase."
                            </p>
                            <p className="text-[#5a5a5a] text-sm font-medium">— Maria Sarapova</p>
                        </div>
                    </div>
                </div>

                <div className="relative h-125 lg:h-150">
                    <div className="absolute top-0 right-20 text-[#d4af37] opacity-60">
                        <Sparkles size={40} />
                    </div>

                    <div className="absolute top-0 right-0 w-70 h-70 md:w-85 md:h-85 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
                            alt="Elegant jewelry model"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute top-40 right-50 md:right-60 bg-[#2d2d2d] text-white px-6 py-3 rounded-full shadow-xl z-20">
                        <p className="text-2xl font-bold">10000+</p>
                        <p className="text-xs">Products</p>
                    </div>

                    <div className="absolute bottom-20 left-0 w-60 h-60 md:w-70 md:h-70 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80"
                            alt="Luxury jewelry showcase"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-0 right-16 bg-white px-6 py-4 rounded-2xl shadow-xl">
                        <p className="text-2xl font-bold text-[#2d2d2d]">25,000+</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                            </div>
                            <p className="text-xs text-[#5a5a5a]">Happy Customer</p>
                        </div>
                    </div>

                    <div className="absolute bottom-32 right-0 text-[#d4af37] opacity-60">
                        <Sparkles size={32} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
