interface ProductSpecificationsProps {
  material: string
  stone: string
  weight: string
  craftsmanship: string
}

export default function ProductSpecifications({ 
  material, 
  stone, 
  weight, 
  craftsmanship 
}: ProductSpecificationsProps) {
  const specs = [
    { label: 'Material', value: material },
    { label: 'Stone', value: stone },
    { label: 'Weight', value: weight },
    { label: 'Craftsmanship', value: craftsmanship }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#2d2d2d] mb-4 font-playfair">
        Specifications
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {specs.map((spec) => (
          <div key={spec.label}>
            <p className="text-sm text-[#8a8a8a] mb-1">{spec.label}</p>
            <p className="text-[#2d2d2d] font-medium">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
