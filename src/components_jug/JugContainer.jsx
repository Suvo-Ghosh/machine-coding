import { useState } from 'react'
import Jug from './Jug'


function JugContainer() {
    let [waterFill, setWaterFill] = useState(0)
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <Jug waterLevel={waterFill} />
            <div className="mt-4">
                <button
                    onClick={() => setWaterFill((prev) => Math.min(prev + 10, 100))}
                    className='text-4xl bg-green-600 mr-4 rounded-full h-12 w-12'>
                    &uarr;
                </button>
                <button
                    onClick={() => setWaterFill((prev) => Math.max(prev - 10, 0))}
                    className='text-4xl bg-red-600 rounded-full h-12 w-12'>
                    &darr;
                </button>
            </div>
        </div>
    )
}

export default JugContainer