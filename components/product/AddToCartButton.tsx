import { ShoppingCart } from 'lucide-react'

interface AddToCartButtonProps {
  onClick?: () => void
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex-1 cursor-pointer flex items-center justify-center gap-3 bg-[#2d2d2d] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#1a1a1a] transition-all duration-300"
    >
      <ShoppingCart size={20} />
      Add to Cart
    </button>
  )
}
