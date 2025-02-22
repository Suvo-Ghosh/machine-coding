import React from 'react'

function PaginationBar({ currentPage, setCurrentPage, totalPages }) {
    return (
        <div className="flex justify-center my-2">
            <button className='text-2xl cursor-pointer' disabled={currentPage === 0 ? true : false} onClick={() => setCurrentPage(prev => prev - 1)}>◀</ button>
            {[...Array(totalPages).keys()].map((n) => {
                return <button
                    key={n}
                    className={`${n === currentPage ? "ring - 2" : null} mx-1 px-4 py-2 rounded bg-gray-500 text-white`}
                    onClick={() => {
                        setCurrentPage(n)
                    }}
                >
                    {n + 1}
                </button>
            })}
            <button className='text-2xl cursor-pointer' disabled={currentPage + 1 === totalPages ? true : false} onClick={() => setCurrentPage(prev => prev + 1)}>▶</ button>
        </div >
    )
}

export default PaginationBar