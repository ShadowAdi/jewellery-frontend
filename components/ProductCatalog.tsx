'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const products = [
    {
        id: 1,
        name: 'Diamond Earrings',
        price: '$850',
        category: 'Earrings',
        image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Gold Wedding Band',
        price: '$1,200',
        category: 'Rings',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Pearl Necklace',
        price: '$2,100',
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80'
    },
    {
        id: 4,
        name: 'Rose Gold Bracelet',
        price: '$950',
        category: 'Bracelets',
        image: 'https://images.unsplash.com/photo-1585960622850-ed33c41d6418?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        name: 'Sapphire Ring',
        price: '$1,850',
        category: 'Rings',
        image: 'https://images.unsplash.com/photo-1590166223826-12dee1677420?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        name: 'Silver Chain Necklace',
        price: '$680',
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 7,
        name: 'Emerald Pendant',
        price: '$1,450',
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1599458349289-18f0ee82e6ed?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 8,
        name: 'Platinum Cufflinks',
        price: '$780',
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

export default function ProductCatalog() {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [dims, setDims] = useState({ containerH: 520, cardH: 480, cardW: 340 })

    useEffect(() => {
        const update = () => {
            const vw = window.innerWidth
            const vh = window.innerHeight
            if (vw < 480) {
                setDims({ containerH: Math.min(420, vh * 0.65), cardH: Math.min(380, vh * 0.58), cardW: Math.min(280, vw * 0.85) })
            } else if (vw < 768) {
                setDims({ containerH: Math.min(480, vh * 0.72), cardH: Math.min(440, vh * 0.65), cardW: Math.min(320, vw * 0.80) })
            } else {
                setDims({ containerH: 520, cardH: 480, cardW: 340 })
            }
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    useEffect(() => {
        const wrapper = wrapperRef.current
        if (!wrapper) return

        const slides = [...wrapper.querySelectorAll<HTMLElement>('[data-slide]')]
        if (slides.length === 0) return

        let current = 0
        let target = 0
        let isDragging = false
        let startX = 0
        let startScroll = 0
        let prevX = 0
        let prevTime = 0
        let velocity = 0
        let momentum = 0
        let animId: number

        const LERP = 0.06
        const MOMENTUM_MULT = 12
        const MOMENTUM_DECAY = 0.95

        const getGap = () => window.innerWidth * 0.03

        const getMaxScroll = () => {
            const slideW = slides[0].offsetWidth
            const gap = getGap()
            return -((slides.length - 1) * (slideW + gap))
        }

        const clamp = (v: number, lo: number, hi: number) =>
            Math.min(hi, Math.max(lo, v))

        const render = () => {
            const vwOff = window.innerWidth * 0.10

            slides.forEach((slide, i) => {
                const slideLeft = slide.offsetLeft + current
                const slideW = slide.offsetWidth
                const isLast = i === slides.length - 1

                if (slideLeft < 0 && !isLast) {
                    const ratio = Math.min(1, Math.abs(slideLeft) / slideW)
                    slide.style.transformOrigin = 'left 80%'
                    slide.style.transform = `translateX(${
                        current + Math.abs(slideLeft) + ratio * vwOff
                    }px) rotate(${-15 * ratio}deg) scale(${1 - ratio * 0.35})`
                    slide.style.zIndex = `${i + 1}`
                    slide.style.opacity = `${1 - ratio * 0.15}`
                } else {
                    slide.style.transformOrigin = ''
                    slide.style.transform = `translateX(${current}px)`
                    slide.style.zIndex = `${i + 1}`
                    slide.style.opacity = '1'
                }
            })
        }

        const tick = () => {
            if (!isDragging) {
                if (Math.abs(momentum) > 0.5) {
                    target += momentum
                    momentum *= MOMENTUM_DECAY
                    target = clamp(target, getMaxScroll(), 0)
                }
                current += (target - current) * LERP
            }
            render()
            animId = requestAnimationFrame(tick)
        }

        const onDown = (e: PointerEvent) => {
            isDragging = true
            startX = e.clientX
            startScroll = target
            prevX = e.clientX
            prevTime = performance.now()
            velocity = 0
            momentum = 0
            wrapper.setPointerCapture(e.pointerId)
        }

        const onMove = (e: PointerEvent) => {
            if (!isDragging) return
            const dx = e.clientX - startX
            target = clamp(startScroll + dx, getMaxScroll(), 0)
            current = target
            const now = performance.now()
            const dt = now - prevTime
            if (dt > 0) velocity = (e.clientX - prevX) / dt
            prevX = e.clientX
            prevTime = now
        }

        const onUp = () => {
            if (!isDragging) return
            isDragging = false
            momentum = velocity * MOMENTUM_MULT
        }

        wrapper.addEventListener('pointerdown', onDown)
        wrapper.addEventListener('pointermove', onMove)
        wrapper.addEventListener('pointerup', onUp)
        wrapper.addEventListener('pointercancel', onUp)

        const block = (e: Event) => e.preventDefault()
        wrapper.addEventListener('selectstart', block)
        wrapper.style.userSelect = 'none';
        (wrapper.style as any).webkitUserSelect = 'none'
        wrapper.style.touchAction = 'pan-y'

        tick()

        return () => {
            cancelAnimationFrame(animId)
            wrapper.removeEventListener('pointerdown', onDown)
            wrapper.removeEventListener('pointermove', onMove)
            wrapper.removeEventListener('pointerup', onUp)
            wrapper.removeEventListener('pointercancel', onUp)
            wrapper.removeEventListener('selectstart', block)
        }
    }, [products, dims])

    return (
        <section className="w-full py-16 bg-[#fce2db]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header - 30% width */}
                <div className="mb-8" style={{ maxWidth: '30%', minWidth: '250px' }}>
                    <h2 
                        className="text-4xl md:text-5xl text-[#2d2d2d] font-semibold mb-3" 
                        style={{fontFamily: 'var(--font-playfair)'}}
                    >
                        Our Collection
                    </h2>
                    <p className="text-[#5a5a5a] text-sm">
                        Discover timeless pieces crafted with precision
                    </p>
                </div>
            </div>

            {/* Product Swiper */}
            <div
                className="w-full overflow-hidden relative"
                style={{ height: `${dims.containerH}px` }}
            >
                <div
                    ref={wrapperRef}
                    className="flex h-full items-center cursor-grab active:cursor-grabbing"
                    style={{ willChange: 'transform', paddingLeft: '4vw' }}
                >
                    {products.map((product, i) => (
                        <div
                            key={product.id}
                            data-slide
                            className="shrink-0 pointer-events-none relative group"
                            style={{
                                width: `${dims.cardW}px`,
                                height: `${dims.cardH}px`,
                                marginRight: '3vw',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                            }}
                        >
                            <img 
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                draggable={false}
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white/80 text-sm uppercase tracking-wider mb-2">
                                    {product.category}
                                </p>
                                <h3 
                                    className="text-white text-2xl font-semibold mb-3" 
                                    style={{fontFamily: 'var(--font-playfair)'}}
                                >
                                    {product.name}
                                </h3>
                                <p className="text-white text-xl font-bold mb-4">
                                    {product.price}
                                </p>
                                <Link
                                    href={`/products/${product.id}`}
                                    className="inline-block bg-white text-[#2d2d2d] px-8 py-3 font-medium hover:bg-[#d4af37] hover:text-white transition-all duration-300 pointer-events-auto"
                                >
                                    Explore Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium select-none pointer-events-none"
                    style={{
                        background: 'rgba(0,0,0,0.05)',
                        color: 'rgba(0,0,0,0.4)',
                        backdropFilter: 'blur(4px)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5-7 7 7 7" />
                    </svg>
                    <span>Drag to explore</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
