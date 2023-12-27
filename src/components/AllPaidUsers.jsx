import React from "react";
import { useSelector } from "react-redux";

function AllPaidUsers() {
  const { user } = useSelector((state) => state.userStore);

  return (
    <div>
      <h1>Svi uplatioci kursa</h1>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
      <div>{user.city}</div>
      <div>{user.brojKartice}</div>
    </div>
  );
}

export default AllPaidUsers;
