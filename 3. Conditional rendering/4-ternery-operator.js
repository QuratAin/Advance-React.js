import React, { useState } from 'react';

// ternary operator

const ShortCircuit = () => {

    const [isError, setIsError] = useState(false);


    return <>
         <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
         {isError ? <p>Error...(true)</p> : <p>No Error(false)</p>}
    </>;
};

export default ShortCircuit;