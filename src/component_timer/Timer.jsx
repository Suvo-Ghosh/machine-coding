import React, { useEffect, useState } from 'react'

function Timer() {
    const [isStart, setIsStart] = useState(false);
    const [isPause, setIsPause] = useState(false);

    const [form, setForm] = useState({ hour: 0, min: 0, sec: 0 });

    const onInputChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: parseInt(e.target.value) }))
    }

    const onStart = () => {
        if (isNaN(form.hour) || isNaN(form.min) || isNaN(form.sec)) {
            alert("Please enter the time")
            return
        }

        if (form.hour <= 0 && form.min <= 0 && form.sec <= 0) {
            alert("Please enter a valid time");
            return;
        }
        setIsStart(true)

    }


    useEffect(() => {
        let id
        if (isStart && !isPause) {
            id = setInterval(() => {
                setForm((prev) => {
                    if (prev.sec > 0) {
                        return { ...prev, sec: prev.sec - 1 };
                    } else if (prev.min > 0) {
                        return { ...prev, min: prev.min - 1, sec: 59 };
                    } else if (prev.hour > 0) {
                        return { ...prev, hour: prev.hour - 1, min: 59, sec: 59 };
                    } else {
                        clearInterval(id);
                        setIsStart(false);
                        setIsPause(false);
                        alert("Time is up!");
                        return { hour: 0, min: 0, sec: 0 };
                    }
                });
            }, 1000);
        }

        return () => {
            clearInterval(id)
        }

    }, [isStart, isPause])

    return (
        <>
            <h1 className='text-xl text-center'>Count Down Timer</h1>
            {isStart ?
                <div className="flex justify-center mt-10"> {form.hour < 10 ? `0${form.hour}` : form.hour} : {form.min < 10 ? `0${form.min}` : form.min} :{form.sec < 10 ? `0${form.sec}` : form.sec}</div> :
                <div className="flex justify-center gap-2 mt-10">
                    <input
                        type="number"
                        value={form.hour}
                        onChange={onInputChange}
                        name='hour'
                        placeholder='HH'
                        className='w-20 border border-black'
                    />
                    <input
                        type="number"
                        value={form.min}
                        onChange={onInputChange}
                        name='min'
                        placeholder='MM'
                        className='w-20 border border-black'
                    />
                    <input
                        type="number"
                        value={form.sec}
                        onChange={onInputChange}
                        name='sec'
                        placeholder='SS'
                        className='w-20 border border-black'
                    />
                </div>
            }

            <div className="flex justify-center gap-2 mt-4">
                {isStart ?
                    <>
                        <button
                            className='border border-black px-2 py-1 rounded bg-orange-400 '
                            onClick={() => (setIsPause(prev => !prev))}
                        >
                            {isPause ? "Resume" : "Pause"}
                        </button>
                        <button
                            className='border border-black px-2 py-1 rounded bg-blue-400 '
                            onClick={() => (setIsStart(false), setIsPause(false), setForm({ hour: 0, min: 0, sec: 0 }))}
                        >
                            Reset
                        </button>
                    </>
                    : <button
                        className='border border-black px-2 py-1 rounded bg-green-400 '
                        onClick={onStart}

                    >Start
                    </button>
                }


            </div >
        </>
    )
}

export default Timer