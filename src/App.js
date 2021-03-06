import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons: [
            { id:'1', name: 'Nikhil', age: 32 },
            { id:'2', name: 'Suchita', age: 31 },
            { id:'3', name: 'Nandini', age: 2}
        ],
        showPerson: false
    }

    switchNameHandler = (newName) => {
        //console.log('Working fine!');
        this.setState({
            persons: [
                { name: newName, age: 22 },
                { name: 'Suchita', age: 31 },
                { name: 'Nandini', age: 8}
            ]
        })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons:persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow});
    }
    render() {
        let persons = null
        let btnClass = '';

        if (this.state.showPerson) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}/>
                </div>
            )
            btnClass = classes.Red;
        }

        return (

            <div className={classes.App}>
                <cockpit />
                {persons}
            </div>

        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am react app'));
    }
}

export default App;
