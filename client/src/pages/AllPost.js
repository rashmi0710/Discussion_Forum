import React from "react";
import TemplatePage from "../components/Templat";
import Card from "react-bootstrap/Card";

const AllPost = () => {
  return (
    <><TemplatePage /><div className="rightPanelHome">
      <Card>
        <Card.Header>All Posts</Card.Header>
        <Card.Body
          style={{
            marginTop: "4%",
            borderRadius: "5px",
            margin: "3%",
            padding: "2%",
            width: "36rem",
            backgroundColor: "#201c1c",
            Color: "#404040",
          }}
        >
          <Card.Title style={{ fontSize: "1rem", fontWeight: "bold" }}>
            Special title treatment
          </Card.Title>
          <div style={{ marginTop: "10px" }}>
            <span>Comments:</span>
            <span style={{ marginLeft: "10px" }}>Replies:</span>
          </div>
        </Card.Body>
      </Card>
    </div></>
  );
};

export default AllPost;
