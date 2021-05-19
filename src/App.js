import React, { useState } from 'react';
import UsersList from './components/Users/UsersList'
import AddUser from './components/Users/AddUser'
function App() {
  const [usersList,setusersList]=useState([]);
  const addUserHandler=(uName , uAge)=>{
    setusersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
