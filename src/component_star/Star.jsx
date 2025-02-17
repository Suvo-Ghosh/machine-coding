import React from 'react'
import { useState } from 'react';

function Star() {
    let totalStars = 5
    const [rating, setRating] = useState(0);

    // const handleClick = (value) => {
    //     setRating(value)
    // }

    const handleClick = (e) => {
        let currentStarIndex = e.target.getAttribute('data-index')
        if (currentStarIndex !== null) {
            setRating(Number(currentStarIndex) + 1);
        }
    };
    return (
        // <div>
        //     {Array.from({ length: totalStars }, (_, index) => (
        //         <span
        //             key={index}
        //             className={`text-5xl h-0 cursor-pointer ${rating > index ? "text-yellow-500" : "text-gray-300"} `}
        //             // style={{ color: rating > index ? "yellow" : "gray" }}
        //             onClick={() => handleClick(index + 1)}
        //         >
        //             ★
        //         </span>
        //     ))
        //     }
        // </div >



        // Using event delegation
        <div
            className='flex justify-center mt-20'
            onClick={handleClick}>
            {Array.from({ length: totalStars }, (_, index) => (
                <span
                    key={index}
                    data-index={index}
                    className={`text-5xl h-0 cursor-pointer ${rating > index ? "text-yellow-500" : "text-gray-300"} `}
                // style={{ color: rating > index ? "yellow" : "gray" }}
                >
                    ★
                </span>
            ))
            }
        </div >
    )
}

export default Star