import React, { useEffect, useState } from 'react'

function Search() {

    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [cache, setCache] = useState({})

    const fetchData = async () => {
        if (cache[searchText]) {
            setSearchResults(cache[searchText])
            return
        }
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchText}`)
        const data = await response.json()
        setSearchResults(data?.recipes)
        setCache(prev => ({ ...prev, [searchText]: data?.recipes }))
    }


    useEffect(() => {
        const id = setTimeout(fetchData, 400)

        return () => clearTimeout(id)
    }, [searchText])

    return (
        <center>
            <h1 className='text-2xl mt-4'>Autocomplete Search Bar</h1>
            <input name='search'
                onBlur={() => setShowResults(false)}
                onFocus={() => setShowResults(true)}
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className='p-1 border border-black mt-4 w-1/2'
                type="text" placeholder='Search Here' />
            <div className="flax flex-col max-h-[300px]  overflow-y-scroll text-left border border-black w-1/2">
                {showResults && searchResults.map((item) => {
                    return <span className='text-black block cursor-pointer hover:bg-gray-300  p-1' onClick={(e) => setSearchText(e.target.textContent)
                    } key={item.id}>{item.name}</span>
                })}
            </div>
        </center>
    )
}

export default Search