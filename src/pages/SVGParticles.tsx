import { useGSAP } from "@gsap/react"
import { StarsSVG } from "../components"
import { English, Images } from "../constants"
import gsap from "gsap"

const SVGParticles = () => {

    useGSAP(() => {
        gsap.utils.toArray(".cir").forEach((cir, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return gsap.fromTo(cir as any, {
                y: 500
            }, { y: -400, repeat: -1, duration: 3 + index })
        })
    })

    return (
        <div className="h-screen bg-slate-950 p-20 flex flex-col items-center justify-center">
            <div className="w-96 svgBg">
                <StarsSVG />
            </div>
            <div className="-translate-y-14 w-96 bg-slate-950 border border-white/20 p-6 rounded-lg shadow-2xl shadow-[#5833a6]/20">
                <div className="text-white space-y-4">
                    <div className="h-10 w-10">
                        <img src={Images.Youtube} />
                    </div>
                    <h1 className="text-4xl font-bold uppercase tracking-tighter bg-gradient-to-tr from-[#5833a6] to-white bg-clip-text text-transparent leading-none">{English.E3}</h1>
                    <p className="text-sm">{English.E4}</p>
                    <button className="bg-indigo-500 text-white py-2 w-full rounded-md">{English.E5}</button>
                </div>
            </div>
        </div>
    )
}

export default SVGParticles