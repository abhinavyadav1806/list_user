import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UsersLists from "./components/Users/UsersLists";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersLists users={userList} />
    </div>
  );
}

export default App;
