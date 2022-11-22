import React, { useState } from 'react';

// useState is a hook/function coming from react.

// Once we invoke the function by writing useState() we need to pass some value in (), any value (number,boolean,string,array,object etc).

// Once it is invoked, it returns an array of 2 values, [randomvalue,function that controls that randomvalue].

// Whatever we pass in the function we got from array, will be new value in place of randomvalue.

// useState preserves the previous state when we refresh page.


const UseStateBasics = () => {
    // console.log(useState('hello'));
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value,handler);

    // array destructuring:
    const [text, setText] = useState('random title');

    const handleClick = () =>{
        if(text === 'random title'){
            setText('Title Changed');
        }else{
            setText('random title');
        }
    };

    return <React.Fragment>
        <h1>{text}</h1>
        <button className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
};

export default UseStateBasics;

// some imp points about hooks(for both custom and default):

// 1. Name will start with 'use', useState,useEffect,useCallback etc.

// 2. Components where we invoke these hooks must have names starting with an uppercase letter, you cannot write useStateBasics, it will give a big fat error.

// 3. Hook must be in component or function body. Invoked only inside function body.

// 4. We cannot call hook conditionally. i.e if (hook), but we can put conditions inside hooks function as above. This is explained in more detail in useEffect example.
