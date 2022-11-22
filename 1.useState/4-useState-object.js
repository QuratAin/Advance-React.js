import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState(
        {
            name: 'qurat',
            age: 22, 
            message: 'you are doing great',
        });
    console.log(person);
    
    const changeMessage = () => {
        // setPerson({message: 'hi'}); // this could be done but it doesnt just change message, it vipes out name and age variables too. solution is spread operator.
        setPerson({...person, message: 'message changed'}); 
    }
    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className='btn' onClick={changeMessage}>change message</button>
        </>
    );
};

export default UseStateObject;

// alternate approach to object - multiple state values

// const UseStateObject = () => {

//     const [name, setName] = useState('Qurat');
//     const [age, setAge] = useState(22);
//     const [message, setMessage] = useState('You are doing good');

//     const changeName = () => {
//         setName('Ain'); 
//     }

//     return (
//         <>
//             <h3>{name}</h3>
//             <h3>{age}</h3>
//             <h3>{message}</h3>
//             <button className='btn' onClick={changeName}>change name</button>
//         </>
//     );
// };

