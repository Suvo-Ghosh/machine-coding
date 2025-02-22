import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import PaginationBar from './PaginationBar'

const PAGE_SIZE = 10

function Pagination() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)


    const fetchData = async () => {
        let res = await fetch('https://dummyjson.com/products?limit=100')
        let data = await res.json()
        setData(data.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const totalPages = Math.ceil(data.length / PAGE_SIZE)

    const start = currentPage * PAGE_SIZE
    const end = start + PAGE_SIZE

    return !data.length
        ? <h1>No products found</h1>
        : <>
            <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-red-950'>
                {data.slice(start, end).map((item, index) => {
                    return (
                        <ProductsCard key={index} item={item} />
                    )
                })}
            </div>
        </>
}

export default Pagination