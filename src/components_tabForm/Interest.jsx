import React from 'react'

function Interest({ data, setData, error }) {
    let { interest } = data

    let handleChange = (e) => {
        let { name, checked } = e.target
        if (checked) {
            setData(prev => ({ ...prev, interest: [...prev.interest, name] }))
        } else {
            setData(prev => ({ ...prev, interest: prev.interest.filter(interest => interest !== name) }))
        }
    }

    return (
        <div>
            <label htmlFor="coding">
                <input type="checkbox" onChange={handleChange} checked={interest.includes("Coding")} name='Coding' id='coding' className='border p-1' /> Coding
            </label><br />
            <label htmlFor="cricket">
                <input type="checkbox" onChange={handleChange} checked={interest.includes("Cricket")} name='Cricket' id='cricket' className='border p-1' /> Cricket
            </label><br />
            <label htmlFor="music">
                <input type="checkbox" onChange={handleChange} checked={interest.includes("Music")} name='Music' id='music' className='border p-1' /> Music
            </label>
            {error.interest && <div className='text-red-500 mb-2'>{error.interest}</div>}
        </div>
    )
}

export default Interest