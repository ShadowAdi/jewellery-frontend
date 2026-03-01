import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 sm:space-y-8 order-1 lg:order-1 z-10">
                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold text-[#2d2d2d] leading-[1.1] mb-4 sm:mb-6 font-playfair">
                            Jewelry For<br />
                            Exclusive<br />
                            Collections
                        </h1>
                        <p className="text-[#5a5a5a] text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                            Surrounding the gem, delicate filigree work crafted with meticulous attention, creating an heirloom worthy of generations.
                        </p>
                    </div>
                    
                    <Link 
                        href="/explore"
                        className="inline-block bg-[#2d2d2d] text-white px-8 sm:px-10 py-3 sm:py-4 font-medium hover:bg-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg text-sm sm:text-base"
                    >
                        Explore Now
                    </Link>

                    <div className="hidden sm:flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                                alt="Customer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[#2d2d2d] text-xs sm:text-sm italic mb-1">
                                "Absolutely breathtaking! I couldn't be happier with my purchase."
                            </p>
                            <p className="text-[#5a5a5a] text-xs sm:text-sm font-medium">— Maria Sarapova</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none order-2 lg:order-2">
                    <div className="hidden md:block absolute top-2 right-8 lg:right-12 text-[#d4af37] opacity-60 z-30">
                        <Sparkles size={28} className="lg:w-10 lg:h-10" />
                    </div>

                    {/* Top right circle - main image */}
                    <div className="absolute top-0 right-0 w-[55%] aspect-square rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
                            alt="Elegant jewelry model"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Products badge */}
                    <div className="absolute top-[30%] right-[5%] sm:right-[10%] md:right-[15%] bg-[#2d2d2d] text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-xl z-20">
                        <p className="text-base sm:text-xl md:text-2xl font-bold leading-none">10000+</p>
                        <p className="text-[9px] sm:text-[10px] md:text-xs mt-0.5">Products</p>
                    </div>

                    {/* Bottom left circle */}
                    <div className="absolute bottom-0 left-0 w-[48%] aspect-square rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80"
                            alt="Luxury jewelry showcase"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Happy customers badge */}
                    <div className="absolute bottom-[5%] right-[8%] sm:right-[12%] bg-white px-3 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-xl sm:rounded-2xl shadow-xl z-20 max-w-[150px] sm:max-w-[180px]">
                        <p className="text-base sm:text-xl md:text-2xl font-bold text-[#2d2d2d] leading-none">25,000+</p>
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-2">
                            <div className="flex -space-x-1.5 sm:-space-x-2">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white"></div>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                            </div>
                            <p className="text-[9px] sm:text-[10px] md:text-xs text-[#5a5a5a] whitespace-nowrap">Happy Customer</p>
                        </div>
                    </div>

                    {/* Bottom sparkle */}
                    <div className="hidden md:block absolute bottom-[20%] right-0 text-[#d4af37] opacity-60 z-30">
                        <Sparkles size={20} className="lg:w-7 lg:h-7" />
                    </div>
                </div>
            </div>
        </section>
    )
}
