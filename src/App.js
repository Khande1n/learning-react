import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
                    {this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        })
                    }
                </div>
            )
            btnClass = classes.Red;
        }

        const assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (

            <div className={classes.App}>
                <h1>Hi, I am react app</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button
                    className={btnClass}
                    onClick={this.togglePersonHandler}>Some Event</button>
                {persons}
            </div>

        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am react app'));
    }
}

export default App;
