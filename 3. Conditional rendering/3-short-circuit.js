import React, { useState } from 'react';

// short-circuit evaluation

const ShortCircuit = () => {
    // const [text, setText] = useState(''); //empty means false

    const [isError, setIsError] = useState(false);

    // const firstValue = text || 'hello world'; //or returns right-side value if text is false and returns left value if text true.
    // const secondValue = text && 'hello world'; // and returns no value if text is false and returns right-sided value if text is true.


    return <>
        {/* {if(){console.log('hello')}} */}
        {/* above will throw an error */}
        {/* <h1>{firstValue}</h1>
        <h1>value : {secondValue}</h1>
        <h1>{text || '|| - if text is false, display this' }</h1>
        {text && <h1>&& - if text is true display this</h1> } */}
         {/*using || we are showing something regardless, with && we can show or hide the component/element.  we can do opposite of above by using following: */}
         {/* {!text && <h1>!&& - if text is false display this</h1> } */}
         {/* <h1>{text || 'Qurat'}</h1> */}
         <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
         {isError && <h1>error...</h1>}
    </>;
};

export default ShortCircuit;