import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMemo, useState } from "react"

const ImageHover = () => {
    const [isMouseIn, setIsMouseIn] = useState<null | number>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const data = useMemo(() => {
        return [
            { id: 1, title: 'Work One', img: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2+" },
            { id: 2, title: 'Work Two', img: `https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2` },
            { id: 3, title: 'Work Three', img: `https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2` }
        ]
    }, [])


    useGSAP(() => {
        const onMouseMove = (e: MouseEvent) => {
            const movementX = e.clientX
            const movementY = e.clientY
            setMousePosition({ x: movementX, y: movementY })
        }
        window.addEventListener('mousemove', ((e) => {
            onMouseMove(e)
        }))
        gsap.to('.cursor', { x: mousePosition.x, y: mousePosition.y })
        window.removeEventListener('mousemove', ((e) => {
            onMouseMove(e)
        }))

    }, [mousePosition])
    return (
        <>
            <div className="h-screen">
                <div className="cursor pointer-events-none h-6 w-6 rounded-full bg-black fixed z-50">
                    {isMouseIn !== null && (
                        <div style={{ backgroundImage: `url(${data[isMouseIn].img})` }} className="bg-center bg-cover h-32 w-32"
                        >
                        </div>
                    )}
                </div>
            </div>
            <div className="h-screen bg-neutral-950 text-white flex items-center justify-center p-20">
                <div className="w-full">
                    {data.map((item, index) => {
                        return (
                            <div onMouseEnter={() => {
                                setIsMouseIn(index)
                            }}
                                onMouseLeave={() => {
                                    setIsMouseIn(null)
                                }}
                                key={item.id}
                                className="p-10 border-b border-white/20">
                                <h1 className="text-3xl">{item.title}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ImageHover