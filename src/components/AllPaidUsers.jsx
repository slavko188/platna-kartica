import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restorePerson } from "../store/userSlice";

const AllPaidUsers = () => {
  const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restorePerson(JSON.parse(localStorage.getItem("PayUsers"))));
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center font-bold text-[#be185d] text-4xl mt-[50px]">
        Svi uplatioci kursa
      </h1>

      <div className=" text-center">
        <div className="flex flex-col text-2xl"> Ime:{user.firstName}</div>
        <div className="flex flex-col text-2xl">Prezime:{user.lastName}</div>
        <div className="flex flex-col text-2xl">Email:{user.email}</div>
        <div className="flex flex-col text-2xl">Grad:{user.city}</div>
        <div className="flex flex-col text-2xls">
          Broj_Kartice:{user.brojKartice}
        </div>
      </div>
    </div>
  );
};

export default AllPaidUsers;
