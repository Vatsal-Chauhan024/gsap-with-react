import { useMemo } from "react"
import { Link } from "react-router-dom"
import { English } from "../constants"

const GoToSpecificPage = () => {

    const linksData = useMemo(() => {
        return [
            { linkTo: "/imageHover", content: English.E1 },
            { linkTo: '/svgParticles', content: English.E2 }
        ]
    }, [])

    return (
        <div className="flex flex-col gap-5 h-screen w-screen justify-center items-center">
            {linksData.map((item) => {
                return <Link to={item.linkTo} className="text-slate-800 bg-white p-5 rounded-md border border-slate-400">{item?.content}</Link>
            })}
        </div>
    )
}

export default GoToSpecificPage