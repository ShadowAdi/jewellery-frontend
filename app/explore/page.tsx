'use client'

import { useState, useMemo } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import CategoryFilter from '@/components/ui/CategoryFilter'
import SortDropdown from '@/components/ui/SortDropdown'
import ProductCard from '@/components/ui/ProductCard'
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

  const handleSortSelect = (value: string) => {
    setSortBy(value)
    setIsDropdownOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        backLink="/"
        backText="Back to Home"
        title="Bonny"
      />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2d2d2d] mb-4 font-playfair">
            Explore Collection
          </h2>
          <p className="text-[#5a5a5a] text-lg max-w-2xl">
            Discover our carefully curated selection of handcrafted jewelry. Each piece tells a story of artistry, precision, and timeless elegance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 pb-6 border-b border-gray-200">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <SortDropdown
            sortBy={sortBy}
            isOpen={isDropdownOpen}
            onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
            onSelect={handleSortSelect}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
              shortDescription={product.shortDescription}
            />
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
          <h3 className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] mb-4 font-playfair">
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