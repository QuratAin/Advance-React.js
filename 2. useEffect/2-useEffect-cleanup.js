import React, { useState, useEffect } from 'react';

// cleanup function

const UseEffectCleanup = () => {

    const [size, setSize] = useState(window.innerWidth);

    // const checkSize = () => {
    //     setSize(window.innerWidth);
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', checkSize);
    //     // this works all fine but it will create so many even listners, high mem consumption.
    // })

    // solution of above: cleanup function

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
            // clean up occurs after each render i.e before useEffect is called again. clean up function is really imp when we will deal with component appearing and disappearing. 
        }
    })

    return <>
        <h1>window</h1>
        <h2>{size} PX</h2>
    </>
};

export default UseEffectCleanup;