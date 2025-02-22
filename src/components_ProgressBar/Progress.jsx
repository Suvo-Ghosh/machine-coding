import React, { useEffect, useState } from 'react'

function Progress({ progress }) {
    const [progressValue, setProgressValue] = useState(0)

    useEffect(() => {
        const id = setTimeout(setProgressValue(progress), 1000)

        return () => {
            clearTimeout(id)
        }
    }, [progress])

    return (
        <>
            <div className="outer w-full h-10 border overflow-hidden border-gray-300 rounded-full">
                <div
                    style={
                        {
                            backgroundColor: 'blue',
                            width: `${progressValue}%`,
                            height: '100%',
                            textAlign: 'right',
                            // transform: `translateX( ${progressValue - 100}%)`,
                            transition: '0.5s ease-in',
                        }
                    }
                    role="progressbar"
                    aria-valuenow={progressValue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {progressValue}%
                </div>
            </div>
        </>
    )

}

export default Progress