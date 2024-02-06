import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
import { PlusCircle } from "lucide-react";
import "../styles/style.css";

const TemplatePage = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  
  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  };

  const handleButtonClick = (path) => {
    setIsClicked(true);
    navigate(path);
  };

  useEffect(() => {
    userValid();
  });

  return (
    <>
      <div className="homeContainer">
        <div className="leftPanelHome">
          <button
            className={`leftPanelButton ${isClicked ? "activeBtn" : ""}`}
            onClick={() => handleButtonClick("/user/allpost")}
          >
            All Post
          </button>
          <button
            className={`leftPanelButton ${isClicked ? "activeBtn" : ""}`}
            onClick={() => handleButtonClick("/user/commentedpost")}
          >
            Commented Post
          </button>
          <button
            className={`leftPanelButton ${isClicked ? "activeBtn" : ""}`}
            onClick={() => handleButtonClick("/user/repliedpost")}
          >
            Replied Post
          </button>
          <button
            className={`leftPanelButton here ${isClicked ? "activeBtn" : ""}`}
            onClick={() => handleButtonClick("/user/createpost")}
          >
            <PlusCircle style={{ padding: "5%" }} /> Create Post
          </button>
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
