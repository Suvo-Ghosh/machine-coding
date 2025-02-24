import React, { useState } from 'react'

function Faq({ item }) {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <div className="mb-2 p-4 shadow-md bg-white">
                <h1 className="cursor-pointer text-xl" onClick={() => setClicked((prev) => !prev)}>
                    {clicked ? "▼" : "►"}
                    {item.question}
                </h1>
                <p className={`ml-6 overflow-hidden transition-all duration-400 ease-in-out ${clicked ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    {item.answer}
                </p>
            </div>
        </>
    );
}

export default Faq