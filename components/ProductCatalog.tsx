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
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
    const [isHovering, setIsHovering] = useState(false)

    const didDragRef = useRef(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePos({ x, y })
    }

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (didDragRef.current) {
            e.preventDefault()
            e.stopPropagation()
            return false
        }
    }

    useEffect(() => {
        const update = () => {
            const vw = window.innerWidth
            const vh = window.innerHeight
            if (vw < 380) {
                setDims({ containerH: Math.min(360, vh * 0.6), cardH: Math.min(320, vh * 0.52), cardW: Math.min(240, vw * 0.82) })
            } else if (vw < 480) {
                setDims({ containerH: Math.min(400, vh * 0.62), cardH: Math.min(360, vh * 0.55), cardW: Math.min(260, vw * 0.80) })
            } else if (vw < 640) {
                setDims({ containerH: Math.min(440, vh * 0.65), cardH: Math.min(400, vh * 0.58), cardW: Math.min(280, vw * 0.75) })
            } else if (vw < 768) {
                setDims({ containerH: Math.min(480, vh * 0.68), cardH: Math.min(440, vh * 0.62), cardW: Math.min(300, vw * 0.70) })
            } else if (vw < 1024) {
                setDims({ containerH: 500, cardH: 460, cardW: 320 })
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
        let dragStartX = 0

        const LERP = 0.06
        const DRAG_THRESHOLD = 8  // px — must move this much to count as a drag
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
            dragStartX = e.clientX
            startScroll = target
            prevX = e.clientX
            prevTime = performance.now()
            velocity = 0
            momentum = 0
            // Reset drag flag on every new press
            didDragRef.current = false
            wrapper.setPointerCapture(e.pointerId)
        }

        const onMove = (e: PointerEvent) => {
            if (!isDragging) return
            const dx = e.clientX - startX
            const totalDragDistance = Math.abs(e.clientX - dragStartX)

            // Mark as a real drag only once threshold is exceeded
            if (totalDragDistance > DRAG_THRESHOLD) {
                didDragRef.current = true
            }

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
            setTimeout(() => { didDragRef.current = false }, 10)
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
        <section className="w-full py-8 sm:py-12 md:py-16 bg-[#fce2db]">
            <div className="max-w-7xl mx-auto px-6 sm:px-6">
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2d2d2d] font-semibold mb-2 sm:mb-3 font-playfair">
                        Our Collection
                    </h2>
                    <p className="text-[#5a5a5a] text-xs sm:text-sm">
                        Discover timeless pieces crafted with precision
                    </p>
                </div>
            </div>

            <div
                className="w-full overflow-hidden relative pl-6 m:pl-0"
                style={{ height: `${dims.containerH}px` }}
            >
                <div
                    ref={wrapperRef}
                    className="flex h-full items-center cursor-grab active:cursor-grabbing"
                    style={{ willChange: 'transform', paddingLeft: 'max(16px, 4vw)' }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            data-slide
                            className="shrink-0 relative group"
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

                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                }}
                            />

                            <div 
                                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                <h3 
                                    className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 font-playfair" 
                                    style={{
                                        textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {product.name}
                                </h3>
                                <p 
                                    className="text-white text-base sm:text-lg md:text-xl font-bold"
                                    style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}
                                >
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}

                    <Link
                        href="/explore"
                        data-slide
                        className="shrink-0 relative overflow-hidden block"
                        style={{
                            width: `${dims.cardW}px`,
                            height: `${dims.cardH}px`,
                            marginRight: '3vw',
                            borderRadius: '1.5rem',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                            border: '2px solid #e5e5e5',
                            cursor: 'pointer',
                            pointerEvents: 'auto',
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onClick={handleLinkClick}
                    >
                        <div 
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                width: isHovering ? '200%' : '0%',
                                height: isHovering ? '200%' : '0%',
                                background: '#d4af37',
                                left: isHovering ? `${mousePos.x}%` : '50%',
                                top: isHovering ? `${mousePos.y}%` : '50%',
                                transform: 'translate(-50%, -50%)',
                                transition: isHovering 
                                    ? 'width 0.7s ease-out, height 0.7s ease-out' 
                                    : 'width 0.6s ease-in, height 0.6s ease-in, left 0s 0.6s, top 0s 0.6s',
                            }}
                        />

                        <div 
                            className="absolute inset-0 pointer-events-none transition-opacity duration-600"
                            style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
                                opacity: isHovering ? 0 : 1,
                            }}
                        />

                        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8 z-10">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-3 transition-all duration-500 flex items-center justify-center"
                                style={{
                                    borderColor: isHovering ? '#ffffff' : '#d4af37',
                                    borderWidth: '3px',
                                }}
                            >
                                <svg 
                                    width="32" 
                                    height="32" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke={isHovering ? '#ffffff' : '#d4af37'}
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className="transition-colors duration-500 sm:w-10 sm:h-10"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>

                            <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 relative z-20">
                                <h3 
                                    className="text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-500 font-playfair"
                                    style={{
                                        color: isHovering ? '#ffffff' : '#2d2d2d',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Explore More
                                </h3>
                                <p 
                                    className="text-xs sm:text-sm md:text-base font-medium transition-colors duration-500 max-w-xs px-2"
                                    style={{
                                        color: isHovering ? 'rgba(255, 255, 255, 0.9)' : '#5a5a5a',
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Discover our complete collection of handcrafted jewelry
                                </p>
                            </div>

                            <div 
                                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 transition-all duration-500 font-semibold text-xs sm:text-sm tracking-wide z-50"
                                style={{
                                    borderColor: isHovering ? '#ffffff' : '#2d2d2d',
                                    color: isHovering ? '#ffffff' : '#2d2d2d',
                                    background: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                                }}
                            >
                                <span className="whitespace-nowrap">View All Products</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>

                <div
                    className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium select-none pointer-events-none"
                    style={{
                        background: 'rgba(0,0,0,0.05)',
                        color: 'rgba(0,0,0,0.4)',
                        backdropFilter: 'blur(4px)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3.5 sm:h-3.5">
                        <path d="M5 12h14" /><path d="m12 5-7 7 7 7" />
                    </svg>
                    <span className="hidden xs:inline sm:inline">Drag to explore</span>
                    <span className="xs:hidden sm:hidden">Swipe</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3.5 sm:h-3.5">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                </div>
            </div>
        </section>
    )
}