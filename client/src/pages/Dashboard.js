import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllPost from "./AllPost";

const DashBoardPage = () => {
  

  const navigate = useNavigate();
  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    userValid();
  });


  return (
    <>
      <AllPost/>
    </>
  );
};

export default DashBoardPage;
