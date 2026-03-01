const benefits = [
  'Complimentary shipping on orders over $1,000',
  '30-day return policy',
  'Authenticity certificate included',
  'Lifetime warranty on craftsmanship'
]

export default function ProductBenefits() {
  return (
    <div className="bg-[#fce2db] rounded-xl p-6 space-y-3">
      {benefits.map((benefit) => (
        <div key={benefit} className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></div>
          <p className="text-[#2d2d2d] text-sm">{benefit}</p>
        </div>
      ))}
    </div>
  )
}
