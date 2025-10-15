import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
    "gal1.jpg", "gal2.jpeg", "gal3.jpeg", "gal4.jpeg", "gal5.jpeg",
    "gal6.jpeg", "gal7.jpeg", "gal8.jpeg", "gal9.jpeg", "gal10.jpeg",
    "gal11.jpeg", "gal12.jpeg", "gal13.jpeg", "gal14.jpeg", "gal15.jpeg",
    "gal16.jpeg", "gal17.jpeg", "gal18.jpeg", "gal19.jpeg", "gal20.jpeg",
    "gal21.jpeg",
]

const Gallery = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const autoplayInterval = useRef<any | null>(null)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        emblaApi.on('select', onSelect)
        onSelect()

        // Autoplay setup
        autoplayInterval.current = setInterval(() => {
            emblaApi.scrollNext()
        }, 3000) // cambia cada 3 segundos

        return () => {
            // Limpiar intervalo cuando el componente se desmonte
            if (autoplayInterval.current) clearInterval(autoplayInterval.current)
        }
    }, [emblaApi, onSelect])

    return (
        <section className="pb-16">
            <h2 className="text-center bg-white/20 p-10 py-4 rounded-b-2xl w-fit mx-auto text-3xl md:text-5xl font-bold text-[var(--yellow)] mb-10">
                GALERIA
            </h2>

            <div className="overflow-hidden relative" ref={emblaRef}>
                <div className="flex touch-pan-x ml-[-1rem]">
                    {images.map((src, idx) => (
                        <div key={idx} className="min-w-full md:min-w-6/12 px-10">
                            <div>
                                <img
                                    src={src}
                                    alt={`obra-${idx}`}
                                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-green-800 p-2 rounded-full shadow"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-green-800 p-2 rounded-full shadow"
                >
                    <ChevronRight />
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === selectedIndex ? 'bg-yellow-300' : 'bg-gray-200'
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Gallery
