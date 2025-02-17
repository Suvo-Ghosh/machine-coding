import React, { useState } from 'react'

function Search() {
    const [data, setData] = useState(["Apple", "Banana", "Orange", "Mango"])
    const [search, setSearch] = useState('')

    let searchData = data.filter((item) => item.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='text-black'>
            <input onChange={(e) => setSearch(e.target.value)} type="text" className='mt-4 border-2 ml-10 p-2' placeholder='search here' />
            <ul>
                {searchData.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Search