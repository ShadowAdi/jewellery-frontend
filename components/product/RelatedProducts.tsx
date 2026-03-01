import ProductCard from '@/components/ui/ProductCard'

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  shortDescription: string
}

interface RelatedProductsProps {
  products: Product[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="border-t border-gray-200 pt-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] mb-10 font-playfair">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            variant="compact"
          />
        ))}
      </div>
    </section>
  )
}
