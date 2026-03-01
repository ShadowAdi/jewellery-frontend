import { ChevronDown } from 'lucide-react'

interface SortOption {
  value: string
  label: string
}

interface SortDropdownProps {
  sortBy: string
  isOpen: boolean
  onToggle: () => void
  onSelect: (value: string) => void
}

const sortOptions: SortOption[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' }
]

export default function SortDropdown({ sortBy, isOpen, onToggle, onSelect }: SortDropdownProps) {
  const currentLabel = sortOptions.find(opt => opt.value === sortBy)?.label || 'Featured'

  const handleSelect = (value: string) => {
    onSelect(value)
  }

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center justify-between gap-8 pl-6 pr-5 py-3.5 text-sm font-medium text-[#2d2d2d] cursor-pointer transition-all duration-300 bg-white hover:border-[#d4af37] group min-w-55 border-2 border-[#2d2d2d] rounded-lg"
      >
        <span>{currentLabel}</span>
        <ChevronDown 
          size={18} 
          className={`text-[#2d2d2d] transition-transform duration-300 group-hover:text-[#d4af37] ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={onToggle}
          />
          <div className="absolute top-full right-0 mt-2 w-full bg-white shadow-xl z-20 overflow-hidden border-2 border-[#2d2d2d] rounded-lg">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
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
  )
}
