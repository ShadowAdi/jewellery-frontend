import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PageHeaderProps {
  backLink: string
  backText: string
  title: string
}

export default function PageHeader({ backLink, backText, title }: PageHeaderProps) {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link 
          href={backLink}
          className="flex items-center gap-3 text-[#555d71] hover:text-[#d4af37] transition-colors duration-300"
        >
          <ArrowLeft size={24} />
          <span className="text-sm font-medium">{backText}</span>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2d2d2d] tracking-wide font-playfair">
          {title}
        </h1>
        
        <div className="w-24 md:w-32"></div>
      </div>
    </header>
  )
}
