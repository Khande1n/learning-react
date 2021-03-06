import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     console.log(nextProps.persons,this.props.persons);
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed
    //     ) {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot1'};
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapShot);
    }

    componentDidUnMount() {
        console.log('[Persons.js] componentDidUnMount');
    }

    render() {
        console.log('[Persons.js] rendering....');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
};

export default Persons;
