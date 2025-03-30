import React, { useEffect, useRef, useState } from 'react'

const OTP_DIGITS = 5;
function OTP() {
    const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
    const refArr = useRef([]);
    useEffect(() => {
        refArr.current[0]?.focus();
    }, []);
    const handleChange = (value, index) => {
        if (isNaN(value)) {
            return;
        }
        let newValue = value.trim();
        const arr = [...inputArr];
        arr[index] = newValue.slice(-1);
        setInputArr(arr);
        newValue && refArr.current[index + 1]?.focus();
    }

    const handelOnKeyDown = (e, index) => {
        if (!e.target.value && e.key === "Backspace") {
            refArr.current[index - 1]?.focus();
        }
    }


    return (
        <>
            <div>OTP Input</div>
            {inputArr.map((input, index) => {
                return <input className='otp-input border-2 outline-red-700 border-black w-10 m-2 h-10 text-[25px] text-center'
                    key={index} type="text"
                    ref={(input) => (refArr.current[index] = input)}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handelOnKeyDown(e, index)}
                    value={inputArr[index]} />
            })}
            {/* {Array.from({ length: OTP_DIGITS }, () => {
                return <div className="">Hii</div>
            })} */}
        </>
    )
}

export default OTP