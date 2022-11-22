import React from 'react';

const ErrorExample = () => {
    let title = 'Random Title';
    const handleClick = () =>{
        title = 'hello world'; // title changed in console but not in jsx - here comes need of useState
        console.log(title);
    }
    return <React.Fragment>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
};

export default ErrorExample;
