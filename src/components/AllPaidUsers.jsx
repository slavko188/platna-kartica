import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restorePerson } from "../store/userSlice";

function AllPaidUsers() {
  const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restorePerson(JSON.parse(localStorage.getItem("PayUsers"))));
  });

  return (
    <div>
      <h1 className="text-center font-bold text-[#be185d] text-4xl mt-[50px]">
        Svi uplatioci kursa
      </h1>

      {user && (
        <div>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.email}</div>
          <div>{user.city}</div>
          <div>{user.brojKartice}</div>
        </div>
      )}
    </div>
  );
}

export default AllPaidUsers;
