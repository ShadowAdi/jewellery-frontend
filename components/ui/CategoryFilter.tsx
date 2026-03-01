interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer border-2 rounded-lg ${
            selectedCategory === category
              ? 'bg-[#2d2d2d] text-white border-[#2d2d2d]'
              : 'bg-transparent text-[#5a5a5a] border-[#e5e5e5]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
