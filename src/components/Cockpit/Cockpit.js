import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[useEffect] cockpit.js');
        // setTimeout(() => {
        //     alert("Saved Output");
        // }, 1000);
        toggleBtnRef.current.click();
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
                ref={toggleBtnRef}
                className={btnClass}
                onClick={
                    props.clicked}>Some Event</button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);
