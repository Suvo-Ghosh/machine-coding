import React from 'react'

function Profile({ data, setData, error }) {

    let { name, age, email } = data

    let handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <div className=" ">
                Name : <input onChange={handleChange} value={name} name='name' className='border p-1' type="text" />
            </div>
            {error.name && <div className='text-red-500 mb-2'>{error.name}</div>}
            <div className="">
                Age : <input onChange={handleChange} value={age} name='age' className='border p-1' type="text" />
            </div>
            {error.age && <div className='text-red-500 mb-2'>{error.age}</div>}
            <div className="">
                Email : <input onChange={handleChange} value={email} name='email' className='border p-1' type="text" />
            </div>
            {error.email && <div className='text-red-500 mb-2'>{error.email}</div>}
        </>
    )
}

export default Profile