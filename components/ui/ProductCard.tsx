import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  id: number
  name: string
  price: number
  category: string
  image: string
  shortDescription: string
  variant?: 'default' | 'compact'
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  category, 
  image, 
  shortDescription,
  variant = 'default' 
}: ProductCardProps) {
  if (variant === 'compact') {
    return (
      <Link href={`/product/${id}`} className="group">
        <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4 relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <p className="text-sm text-[#8a8a8a] mb-1">{category}</p>
        <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2 group-hover:text-[#d4af37] transition-colors">
          {name}
        </h3>
        <p className="text-xl font-semibold text-[#2d2d2d] font-playfair">
          ${price.toLocaleString()}
        </p>
      </Link>
    )
  }

  return (
    <Link href={`/product/${id}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-gray-50 mb-4 aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
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
          <h3 className="text-xl font-semibold text-[#2d2d2d] group-hover:text-[#d4af37] transition-colors duration-300 font-playfair">
            {name}
          </h3>
          <span className="text-lg font-bold text-[#2d2d2d] whitespace-nowrap">
            ${price.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-[#5a5a5a] line-clamp-2 leading-relaxed">
          {shortDescription}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#888] pt-1">
          <span className="px-3 py-1 bg-gray-100 rounded-full">
            {category}
          </span>
        </div>
      </div>
    </Link>
  )
}
