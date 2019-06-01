import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Nikhil', age: 32 },
            { name: 'Suchita', age: 31 },
            { name: 'Nandini', age: 2}
        ]
    });

    const [otherState, setOtherState] = useState({otherState: 'Random Variable Name'});

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        //console.log('Working fine!');
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: 22 },
                { name: 'Suchita', age: 31 },
                { name: 'Nandini', age: 8}
            ]
        })
    };

    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Some Event</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am react app'));
}

export default app;
