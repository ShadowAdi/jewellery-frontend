import { Menu, Search } from 'lucide-react'

export default function Header() {
    return (
        <header className='w-full flex items-center justify-between space-x-3 sm:space-x-5 mx-auto py-4 sm:py-6 max-w-7xl px-4 sm:px-6'>
            <Menu size={28} className='sm:w-8 sm:h-8 cursor-pointer text-[#555d71]'/>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#555d71] tracking-wide font-playfair'>
                Bonny
            </h1>
            <Search size={28} className='sm:w-8 sm:h-8 cursor-pointer text-[#555d71]'/>
        </header>
    )
}