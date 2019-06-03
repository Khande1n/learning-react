import React, { Component } from 'react';
import './App.css';
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

        // this.setState({
        //     persons: [
        //         { name: 'Nikhil', age: 22 },
        //         { name: event.target.value, age: 31 },
        //         { name: 'Nandini', age: 8}
        //     ]
        // })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow});
    }
    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null

        if (this.state.showPerson) {
            style.backgroundColor = "Blue";

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

        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (

            <div className="App">
                <h1>Hi, I am react app</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Some Event</button>
                {persons}
            </div>

        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am react app'));
    }
}

export default App;
