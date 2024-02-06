import React from "react";
import TemplatePage from "../components/Templat";
import Card from "react-bootstrap/Card";

const CommentedPost = () => {
  return (
    <><TemplatePage />
      <div className="rightPanelHome">
      <Card>
        <Card.Header>Commented Posts</Card.Header>
        
      </Card>
    </div>
    </>
  );
};

export default CommentedPost;
