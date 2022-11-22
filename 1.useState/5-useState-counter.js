import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const reset = () => {
        setValue(0);
    }

    const complexIncrease = () =>{
        setTimeout(() => {
            // setValue(value + 1); value increases after 2 seconds but no matter how many times you click in those 2 seconds, there will be an increment of only one. functional update is the solution for this.
            setValue((prevState) => {
                return prevState + 1;
            }) // this function gets current value and updates it. 
        }, 2000)
    }
    return(
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
                <button className='btn' onClick={reset}>reset</button>
                <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
            </section>
        {/* functional update form */}
            <section style={{margin: '4rem 0'}}>
                <h2>complex counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>increase later</button>
            </section>
        </>
    );
};

export default UseStateCounter;