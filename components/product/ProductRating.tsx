import { Star } from 'lucide-react'

interface ProductRatingProps {
  rating?: number
  reviewCount?: number
}

export default function ProductRating({ rating = 5, reviewCount = 124 }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} fill="#d4af37" color="#d4af37" />
        ))}
      </div>
      <span className="text-sm text-[#5a5a5a]">({reviewCount} reviews)</span>
    </div>
  )
}
