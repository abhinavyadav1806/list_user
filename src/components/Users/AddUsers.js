import React, {useState} from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [entereAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
       
        if( entereAge.trim().length === 0 || enteredUsername.trim().length === 0 ) {
            return;
        }

        if( +entereAge < 1 ) {
            return;
        }

        console.log(enteredUsername, entereAge);
        setEnteredUsername('');
        setEnteredAge('');

    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">username</label>
                <input id="username" onChange={usernameChangeHandler} className={classes.input} value={enteredUsername} type="text" placeholder="Enter Username"/>

                <label htmlFor="age">Age ( Year )</label>
                <input id="age" onChange={ageChangeHandler} className={classes.input} value={entereAge} type="number" placeholder="Enter age"/>

                <Button type="submit"> Add User </Button>
            </form>
        </Card>
    );
};

export default AddUser;