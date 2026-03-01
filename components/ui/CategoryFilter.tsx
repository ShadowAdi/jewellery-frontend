interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap pb-2 md:pb-0">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border-2 rounded-lg whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-[#2d2d2d] text-white border-[#2d2d2d]'
                : 'bg-transparent text-[#5a5a5a] border-[#e5e5e5] hover:border-[#2d2d2d]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
