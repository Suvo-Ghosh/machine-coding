import React from 'react'

function Settings({ data, setData, error }) {
    let { theme } = data

    let handleChange = (e) => {
        setData(prev => ({ ...prev, theme: e.target.name }))
    }
    return (
        <div>
            <input type="radio" onChange={handleChange} name='dark' checked={theme === "dark"} /> Drak <br />
            <input type="radio" onChange={handleChange} name='light' checked={theme === "light"} /> Light <br />
            {error.theme && <div className='text-red-500 mb-2'>{error.theme}</div>}
        </div>
    )
}

export default Settings