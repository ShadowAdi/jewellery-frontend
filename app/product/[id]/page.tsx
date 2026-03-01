'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import products from '@/data/products.json'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === Number(params.id))

  useEffect(() => {
    if (!product) {
      router.push('/explore')
    }
  }, [product, router])

  if (!product) {
    return null
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link 
            href="/explore"
            className="flex items-center gap-3 text-[#555d71] hover:text-[#d4af37] transition-colors duration-300"
          >
            <ArrowLeft size={24} />
            <span className="text-sm font-medium">Back to Collection</span>
          </Link>
          
          <h1 
            className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] tracking-wide" 
            style={{fontFamily: 'var(--font-playfair)'}}
          >
            Bonny
          </h1>
          
          <div className="w-32"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="space-y-6">
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm text-[#d4af37] font-medium mb-2 tracking-wider uppercase">
                {product.category}
              </p>
              <h1 
                className="text-4xl md:text-5xl font-semibold text-[#2d2d2d] mb-4"
                style={{fontFamily: 'var(--font-playfair)'}}
              >
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <span className="text-sm text-[#5a5a5a]">(124 reviews)</span>
              </div>
              <p className="text-5xl font-semibold text-[#2d2d2d]" style={{fontFamily: 'var(--font-playfair)'}}>
                ${product.price.toLocaleString()}
              </p>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-[#5a5a5a] text-lg leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#2d2d2d] mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#8a8a8a] mb-1">Material</p>
                  <p className="text-[#2d2d2d] font-medium">{product.material}</p>
                </div>
                <div>
                  <p className="text-sm text-[#8a8a8a] mb-1">Stone</p>
                  <p className="text-[#2d2d2d] font-medium">{product.stone}</p>
                </div>
                <div>
                  <p className="text-sm text-[#8a8a8a] mb-1">Weight</p>
                  <p className="text-[#2d2d2d] font-medium">{product.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-[#8a8a8a] mb-1">Craftsmanship</p>
                  <p className="text-[#2d2d2d] font-medium">{product.craftsmanship}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-6 py-3 cursor-pointer text-[#2d2d2d] hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-8 py-3 text-[#2d2d2d] font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-6 py-3 cursor-pointer text-[#2d2d2d] hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 cursor-pointer flex items-center justify-center gap-3 bg-[#2d2d2d] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#1a1a1a] transition-all duration-300">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                    isWishlisted 
                      ? 'border-[#d4af37] bg-[#d4af37] text-white' 
                      : 'border-gray-200 text-[#5a5a5a] hover:border-[#d4af37]'
                  }`}
                >
                  <Heart size={20} fill={isWishlisted ? 'white' : 'none'} />
                </button>
              </div>
            </div>

            <div className="bg-[#fce2db] rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>
                <p className="text-[#2d2d2d] text-sm">Complimentary shipping on orders over $1,000</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>
                <p className="text-[#2d2d2d] text-sm">30-day return policy</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>
                <p className="text-[#2d2d2d] text-sm">Authenticity certificate included</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>
                <p className="text-[#2d2d2d] text-sm">Lifetime warranty on craftsmanship</p>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="border-t border-gray-200 pt-16">
            <h2 
              className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] mb-10"
              style={{fontFamily: 'var(--font-playfair)'}}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-sm text-[#8a8a8a] mb-1">{relatedProduct.category}</p>
                  <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2 group-hover:text-[#d4af37] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-xl font-semibold text-[#2d2d2d]" style={{fontFamily: 'var(--font-playfair)'}}>
                    ${relatedProduct.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}