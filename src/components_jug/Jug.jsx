import { useEffect, useState } from "react"

function Jug({ waterLevel }) {
    const [waterLevelChange, setWaterLevelChange] = useState(false)
    useEffect(() => {
        setWaterLevelChange(true)

        let timeOutId = setTimeout(() => {
            setWaterLevelChange(false)
        }, 3000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [waterLevel])
    return (
        <div className='relative w-[200px] h-[400px] border-2 border-black border-t-0'>
            <div style={{ height: `${waterLevel}%` }} className={`absolute bottom-0 bg-blue-700 w-full -z-10 ${waterLevelChange ? "animate-wave" : undefined}`}></div>
            <div className="absolute bottom-0 right-[39%] text-2xl text-black">{`${waterLevel}%`}</div>
        </div >
    )
}

export default Jug