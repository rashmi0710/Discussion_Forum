import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
      <div className="homeContainer">
        <div className="leftPanelHome">
          <button className="leftPanelButton activeBtn">All Post</button>
          <button className="leftPanelButton">Commented Post</button>
          <button className="leftPanelButton">Replied Post</button>

          <button className="leftPanelButton here">
            <i class="fa-solid fa-plus"></i> Create Post
          </button>
        </div>
        <div className="rightPanelHome">
          <Card>
            <Card.Header>All Posts</Card.Header>
            <Card.Body style={{ marginTop: '10px',borderRadius:'5px',margin:'3%',padding:'2%',width:'500px',backgroundColor:'#201c1c',Color: '#404040' }}>
              <Card.Title style={{fontSize:'1rem',fontWeight:'bold'}}>Special title treatment</Card.Title>
              <div style={{ marginTop: '10px' }}>
                <span>Comments:</span>
                <span style={{ marginLeft: '10px' }}>Replies:</span>
              </div>
            </Card.Body>
            
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
