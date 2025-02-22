import React from 'react'
import Progress from './Progress'

function ProgressBar() {
    const progress = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

    return (
        <div className='p-4'>
            {progress.map((item, index) => (
                <Progress key={index} progress={item} />
            ))}
        </div>
    )
}

export default ProgressBar