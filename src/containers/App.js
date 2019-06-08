import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id:'1', name: 'Nikhil', age: 32 },
            { id:'2', name: 'Suchita', age: 31 },
            { id:'3', name: 'Nandini', age: 2}
        ],
        showPerson: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentDidMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    loginHandler = () => {
        this.setState({authenticated: true});
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
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({ showPerson: !doesShow});
    }
    render() {
        console.log('[App.js] render');

        let persons = null

        if (this.state.showPerson) {
            persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.state.authenticated}/> ;
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
                <AuthContext.Provider value={{authenticated: this.state.authenticated, login:this.loginHandler}}>
                    {this.state.showCockpit ? <Cockpit
                        title={this.props.appTitle}
                        showPerson={this.state.showPerson}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonHandler}/>
                    : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>

        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I am react app'));
    }
}

export default withClass(App, classes.App);
