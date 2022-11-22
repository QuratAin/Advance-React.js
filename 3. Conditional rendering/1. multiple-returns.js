import React, { useState } from 'react';

const MultipleReturns = () => {
    const [loading] = useState(true);

    if(loading){
        return <h2>loading...</h2>
        // example - if user is online you can display this components otherwise the below one.
    }
    return <h2>multiple returns</h2>;
};

export default MultipleReturns;
