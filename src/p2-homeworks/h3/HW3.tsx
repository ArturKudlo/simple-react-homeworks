import React, { useState } from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";

// types
export type UserType = {
  _id: string; //fix
  name: string; //fix
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<UserType[]>([]); // need to fix any

  const addUserCallback = (name: string) => {
    // need to fix any
    const user = {
      _id: v1(),
      name: name,
    };
    setUsers([...users, user]); // need to fix
  };

  return (
    <div>
      <hr />
      homeworks 3{/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr />
    </div>
  );
}

export default HW3;
