interface QuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export default function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center border-2 border-gray-200 rounded-lg">
      <button
        onClick={onDecrease}
        className="px-6 py-3 cursor-pointer text-[#2d2d2d] hover:bg-gray-50 transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="px-8 py-3 text-[#2d2d2d] font-medium">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-6 py-3 cursor-pointer text-[#2d2d2d] hover:bg-gray-50 transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
