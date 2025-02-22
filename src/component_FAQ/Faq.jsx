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
                {clicked && <p className="ml-6 ">{item.answer}</p>}
            </div>
        </>
    );
}

export default Faq