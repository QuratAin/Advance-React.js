// useEffect is used when we want to setup side effects i.e any work outside of the component e.g changing document title, signing up for a subscription, fetching data, event listner etc.

// useEffect = work outside of the component.

// how useEffect works - we pass in a callback function inside useEffect and inside callback function whatever functionality we place will run after every render and re-render.

// we can have as many useEffects as we want in a single component.

import React, { useState, useEffect } from 'react';

// by default useEffect runs after every render. 

const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    // useEffect(() =>{
    //     console.log('use effect runs');
    //     // another use of useEffect
    //     document.title = `New Messages(${value})`;
    // })

    // console.log('everytime this runs use effect will run');

    // now what if we only want to show new messages when value is > 0. 

    // if(value > 0){

    //     useEffect(() =>{
    //         document.title = `New Messages(${value})`;
    //     })
    // }

    // well above code cannot work because we cant use hooks conditionally. can be solved by using condition inside hook.

    // useEffect(() =>{
    //     if(value > 0){
    //         document.title = `New Messages(${value})`;
    //     }
    // })
    
    // use effect second parameter - list of dependencies

    useEffect(() =>{
        if(value > 0){
            document.title = `New Messages(${value})`;
        }
    },[value]); // if we leave this list empty it will run only on the initial render as given below. However, when we have some stuff inside list lets say a dependency array, each time we change this value, it triggers useEffect.
    
    useEffect(() => {
        console.log('hello there');
    },[]);

    return(
        <>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
            {/* everytime button is clicked both consoles above will run because we invoked setValue, here useState does two things -> it preserves the values bw two renders and -> secondly it triggeres re-render */}
        </>
    );
};

export default UseEffectBasics;

