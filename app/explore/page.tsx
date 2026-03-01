'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import products from '@/data/products.json'

const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Accessories']

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? products 
      : products.filter(p => p.category === selectedCategory)

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return 0
    })

    return sorted
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-3 text-[#555d71] hover:text-[#d4af37] transition-colors duration-300"
          >
            <ArrowLeft size={24} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <h1 
            className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] tracking-wide text-center" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Bonny
          </h1>
          
          <div className="w-24"></div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2d2d2d] mb-4" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Explore Collection
          </h2>
          <p className="text-[#5a5a5a] text-lg max-w-2xl">
            Discover our carefully curated selection of handcrafted jewelry. Each piece tells a story of artistry, precision, and timeless elegance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 pb-6 border-b border-gray-200">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: selectedCategory === category ? '#2d2d2d' : 'transparent',
                  color: selectedCategory === category ? '#ffffff' : '#5a5a5a',
                  border: `2px solid ${selectedCategory === category ? '#2d2d2d' : '#e5e5e5'}`,
                  borderRadius: '8px'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-8 pl-6 pr-5 py-3.5 text-sm font-medium text-[#2d2d2d] cursor-pointer transition-all duration-300 bg-white hover:border-[#d4af37] group min-w-[220px]"
              style={{
                border: '2px solid #2d2d2d',
                borderRadius: '8px'
              }}
            >
              <span>
                {sortBy === 'featured' && 'Featured'}
                {sortBy === 'price-low' && 'Price: Low to High'}
                {sortBy === 'price-high' && 'Price: High to Low'}
              </span>
              <ChevronDown 
                size={18} 
                className={`text-[#2d2d2d] transition-transform duration-300 group-hover:text-[#d4af37] ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div 
                  className="absolute top-full right-0 mt-2 w-full bg-white shadow-xl z-20 overflow-hidden"
                  style={{
                    border: '2px solid #2d2d2d',
                    borderRadius: '8px'
                  }}
                >
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setIsDropdownOpen(false)
                      }}
                      className="w-full text-left px-6 py-3.5 text-sm font-medium transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: sortBy === option.value ? '#2d2d2d' : 'transparent',
                        color: sortBy === option.value ? '#ffffff' : '#5a5a5a',
                      }}
                      onMouseEnter={(e) => {
                        if (sortBy !== option.value) {
                          e.currentTarget.style.backgroundColor = '#fce2db'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (sortBy !== option.value) {
                          e.currentTarget.style.backgroundColor = 'transparent'
                        }
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map(product => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 mb-4 aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 bg-white text-[#2d2d2d] px-6 py-3 rounded-full font-medium text-sm hover:bg-[#d4af37] hover:text-white transition-colors duration-300">
                    <span>View Details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 
                    className="text-xl font-semibold text-[#2d2d2d] group-hover:text-[#d4af37] transition-colors duration-300" 
                    style={{fontFamily: 'var(--font-playfair)'}}
                  >
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-[#2d2d2d] whitespace-nowrap">
                    ${product.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-[#5a5a5a] line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#888] pt-1">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#5a5a5a] text-lg">No products found in this category.</p>
          </div>
        )}
      </section>

      <section className="bg-[#fce2db] py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 
            className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] mb-4" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Can't Find What You're Looking For?
          </h3>
          <p className="text-[#5a5a5a] mb-8 max-w-2xl mx-auto">
            Our master jewelers can create custom pieces tailored to your vision. Let's bring your dream jewelry to life.
          </p>
          <button className="bg-[#2d2d2d] text-white px-8 py-4 font-medium hover:bg-[#d4af37] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl cursor-pointer">
            Request Custom Design
          </button>
        </div>
      </section>
    </div>
  )
}