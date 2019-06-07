import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[useEffect] cockpit.js');
        setTimeout(() => {
            alert("Saved Output");
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[]');
    })

    const assignedClasses = [];
    let btnClass = '';

    if (
        props.showPerson) {
        btnClass = classes.Red;
    }

    if (
        props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (
        props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{
                props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={
                    props.clicked}>Some Event</button>
        </div>
    );
}

export default React.memo(cockpit);
