import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest'
import Settings from './Settings'

function TabForm() {
    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
        interest: [],
        theme: 'dark'
    })

    const [error, setError] = useState({})

    const [activeTab, setActiveTab] = useState(0)

    let tabs = [
        {
            name: 'Profile',
            component: <Profile data={data} setData={setData} error={error} />
        },
        {
            name: 'Interest',
            component: <Interest data={data} setData={setData} error={error} />
        },
        {
            name: 'Settings',
            component: <Settings data={data} setData={setData} error={error} />
        }

    ]

    let ActiveTabComponent = tabs[activeTab].component

    let handleNext = () => {

        if (activeTab === 0 && (data.name === '' || data.name.length < 2)) {
            setError({ name: 'Name is required and should be greater than 2' })
            return
        }

        if (activeTab === 0 && (data.age === '' || data.age < 18)) {
            setError({ age: 'Age is required and should be greater than 18' })
            return
        }

        if (activeTab === 0 && data.email === '') {
            setError({ email: 'Email is required' })
            return
        }

        if (activeTab === 1 && data.interest.length === 0) {
            setError({ interest: 'Interest is required' })
            return
        }

        if (activeTab === 2 && data.theme === '') {
            setError({ theme: 'Theme is required' })
            return
        }

        setError({})

        setActiveTab(prev => prev + 1)
    }

    let handlePrev = () => {
        setActiveTab(prev => prev - 1)
    }

    let handleSubmit = () => {

        console.log(data)
        setActiveTab(0)
        setData({
            name: '',
            age: '',
            email: '',
            interest: [],
            theme: 'dark'
        })
        alert('Form Submitted')
    }

    return (
        <>
            <ul className='flex text-xl m-10 mb-0'>
                {tabs.map((tab, index) => {
                    return <li onClick={() => handleNext() && setActiveTab(index)} className='p-1 border cursor-pointer border-black' key={index}>{tab.name}</li>
                })}
            </ul>
            <div className='border border-black p-2 ml-10 mr-4 h-58'>
                {ActiveTabComponent}
            </div>
            <div className="flex justify-center">
                {activeTab > 0 && < button onClick={handlePrev} className='p-2 border border-black '> ← Prev</button >}
                {activeTab === tabs.length - 1 && < button onClick={handleSubmit} className='p-2 border border-black '> Submit</button >}
                {activeTab < tabs.length - 1 && < button onClick={handleNext} className='p-2 border border-black '> Next →</button >}
            </div>
        </>
    )
}

export default TabForm