'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import PageHeader from '@/components/ui/PageHeader'
import ProductRating from '@/components/product/ProductRating'
import ProductSpecifications from '@/components/product/ProductSpecifications'
import QuantitySelector from '@/components/product/QuantitySelector'
import AddToCartButton from '@/components/product/AddToCartButton'
import WishlistButton from '@/components/product/WishlistButton'
import ProductBenefits from '@/components/product/ProductBenefits'
import RelatedProducts from '@/components/product/RelatedProducts'
import products from '@/data/products.json'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
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

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product.name} to cart`)
  }

  const handleQuantityIncrease = () => setQuantity(quantity + 1)
  const handleQuantityDecrease = () => setQuantity(Math.max(1, quantity - 1))

  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        backLink="/explore"
        backText="Back to Collection"
        title="Bonny"
      />

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
              <h1 className="text-4xl md:text-5xl font-semibold text-[#2d2d2d] mb-4 font-playfair">
                {product.name}
              </h1>
              <ProductRating />
              <p className="text-5xl font-semibold text-[#2d2d2d] mt-6 font-playfair">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-[#5a5a5a] text-lg leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            <ProductSpecifications
              material={product.material}
              stone={product.stone}
              weight={product.weight}
              craftsmanship={product.craftsmanship}
            />

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={handleQuantityIncrease}
                  onDecrease={handleQuantityDecrease}
                />
              </div>

              <div className="flex gap-4">
                <AddToCartButton onClick={handleAddToCart} />
                <WishlistButton
                  isWishlisted={isWishlisted}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                />
              </div>
            </div>

            <ProductBenefits />
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </main>
    </div>
  )
}