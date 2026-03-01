import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#2d2d2d] leading-tight mb-4 sm:mb-6 font-playfair">
                            Jewelry For<br />
                            Exclusive<br />
                            Collections
                        </h1>
                        <p className="text-[#5a5a5a] text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                            Surrounding the gem, delicate filigree work crafted with meticulous attention, creating an heirloom worthy of generations.
                        </p>
                    </div>
                    
                    <Link 
                        href="/explore"
                        className="inline-block bg-[#2d2d2d] text-white px-8 sm:px-10 py-3 sm:py-4 font-medium hover:bg-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl rounded text-sm sm:text-base"
                    >
                        Explore Now
                    </Link>

                    <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-8">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                                alt="Customer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[#2d2d2d] text-xs sm:text-sm italic mb-1">
                                "Absolutely breathtaking! I couldn't be happier with my purchase."
                            </p>
                            <p className="text-[#5a5a5a] text-xs sm:text-sm font-medium">— Maria Sarapova</p>
                        </div>
                    </div>
                </div>

                <div className="relative h-96 sm:h-112 lg:h-128 xl:h-144 order-1 lg:order-2">
                    <div className="hidden sm:block absolute top-0 right-12 sm:right-16 lg:right-20 text-[#d4af37] opacity-60">
                        <Sparkles size={32} className="sm:w-10 sm:h-10" />
                    </div>

                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
                            alt="Elegant jewelry model"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute top-32 sm:top-40 right-36 sm:right-44 md:right-52 lg:right-60 bg-[#2d2d2d] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl z-20">
                        <p className="text-lg sm:text-2xl font-bold">10000+</p>
                        <p className="text-[10px] sm:text-xs">Products</p>
                    </div>

                    <div className="absolute bottom-16 sm:bottom-20 left-0 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80"
                            alt="Luxury jewelry showcase"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-0 right-8 sm:right-12 md:right-16 bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl max-w-40 sm:max-w-none">
                        <p className="text-lg sm:text-2xl font-bold text-[#2d2d2d]">25,000+</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex -space-x-2">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-linear-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                            </div>
                            <p className="text-[10px] sm:text-xs text-[#5a5a5a] whitespace-nowrap">Happy Customer</p>
                        </div>
                    </div>

                    <div className="hidden sm:block absolute bottom-24 sm:bottom-32 right-0 text-[#d4af37] opacity-60">
                        <Sparkles size={24} className="sm:w-8 sm:h-8" />
                    </div>
                </div>
            </div>
        </section>
    )
}
