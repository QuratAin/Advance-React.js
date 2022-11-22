import React from 'react';
import {data} from '../../data'; //relative path

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data); //use this syntax if you are using useState only once otherwise import useState.

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id );
        setPeople((newPeople));
    }

    // functional form:
    // const removeItem = (id) => {
    // setPeople((oldPeople) => {
    //     let newPeople = oldPeople.filter((person) => person.id !== id );
    //     return newPeople;
    // });
    
    return ( 
        <>
            {people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            <button className='btn' onClick={() => setPeople([])}>clear items</button>
            {/* above in onclick we setup an arrow function and then invoke setpeople so that setpeople runs only when we click not when page loads. This is done only when we are passing parameters here otherwise you just need to write function name*/}
        </>
    );
};


export default UseStateArray;