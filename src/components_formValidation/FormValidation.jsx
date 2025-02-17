import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'


function FormValidation() {
    const [error, setError] = useState("")

    const [data, setData] = useState([])

    const [formdata, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })


    const formSubmit = (e) => {
        e.preventDefault()

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formdata.email)) {
            setError("Email is not valid")
            return
        }
        if (formdata.password.length < 6) {
            setError("Password must be 6 character long")
            return
        }

        if (formdata.password !== formdata.confirmPassword) {
            setError("Password and Confirm password must be same")
            return
        }

        if (!/[!@#$%^&*<>?]/.test(formdata.password)) {
            setError("Password must contain any special character")
            return
        }

        if (!/[A-Z]/.test(formdata.password)) {
            setError("Password must contain any capital letter")
            return
        }

        setData(prev => (
            [
                ...prev,
                formdata
            ]
        ))

        toast.success('Login Successfull! ✅', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        setFormData({
            email: "",
            password: "",
            confirmPassword: ""
        })
        setError('')
    }

    let formChangeHandler = (e) => {
        setFormData(prev => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ));
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <form
                    action="/form"
                    method="get"
                    className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
                >
                    <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login into your Account</h1>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formdata.email}
                            onChange={formChangeHandler}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="******"
                            value={formdata.password}
                            onChange={formChangeHandler}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            placeholder="******"
                            value={formdata.confirmPassword}
                            onChange={formChangeHandler}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="text-red-600 mb-2">
                        {error}
                    </div>

                    <button
                        type="submit"
                        onClick={formSubmit}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Login
                    </button>
                </form>
            </div>
            <ToastContainer />
        </>

    )
}

export default FormValidation