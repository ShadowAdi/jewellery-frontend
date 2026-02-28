import { Menu, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <header className='w-full flex items-center justify-between space-x-5 max-w-360 px-12 py-6'>
            <Menu size={32} color='#555d71' className='cursor-pointer'/>
            <h1 className='text-4xl font-semibold text-center text-[#555d71] tracking-wide' style={{fontFamily: 'var(--font-playfair)'}}>
                Bonny
            </h1>
            <Search size={32} color='#555d71' className='cursor-pointer'/>
        </header>
    )
}

export default Header