import React from 'react'

function ProductsCard({ item }) {
    return (
        <div className='flex flex-col border max-w-[500px] p-4 m-4'>
            <h1 className='font-bold'>{item.title}</h1>
            <img className='mx-auto h-60' src={item.thumbnail} alt={item.title} />
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default ProductsCard