import { Heart } from 'lucide-react'

interface WishlistButtonProps {
  isWishlisted: boolean
  onClick: () => void
}

export default function WishlistButton({ isWishlisted, onClick }: WishlistButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg cursor-pointer border-2 transition-all duration-300 ${
        isWishlisted 
          ? 'border-[#d4af37] bg-[#d4af37] text-white' 
          : 'border-gray-200 text-[#5a5a5a] hover:border-[#d4af37]'
      }`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart size={20} fill={isWishlisted ? 'white' : 'none'} />
    </button>
  )
}
