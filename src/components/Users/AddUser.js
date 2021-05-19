import React, { useRef, useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/button/Button'
import ErrorModal from '../UI/ErrorModal'
const AddUser = (props)=>{
    const userInputRef=useRef();
    const userAgeRef=useRef();

const addUserHandler = (event)=>{
    event.preventDefault();
    const enteredUsername = userInputRef.current.value;
    const enteredAge = userAgeRef.current.value;
    if(enteredUsername.trim().length === 0 ||
        enteredAge.trim().length === 0){
    return;
}

    if(+enteredAge < 1){
        return;
    }
    console.log(enteredUsername , enteredAge)
    props.onAddUser(enteredUsername,enteredAge);
    userInputRef.current.value=''
    userAgeRef.current.value=''
}

return (
    <div>
        <ErrorModal title="An error occured" message="something went wrong" />
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={userInputRef}/>

        <label htmlFor="age">Age</label>
        <input id="age" type="number" ref={userAgeRef}/>
        
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
)
}

export default AddUser;