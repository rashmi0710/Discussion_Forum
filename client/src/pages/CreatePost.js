import React from "react";
import Card from "react-bootstrap/Card";

const CreatePost = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="leftPanelHome">
          <button className="leftPanelButton activeBtn">All Post</button>
          <button className="leftPanelButton">Your Commented Post</button>
          <button className="leftPanelButton">Your Replied Post</button>

          <button className="leftPanelButton here">
            <i class="fa-solid fa-plus"></i> Create Post
          </button>
        </div>
        <div className="rightPanelHome">
          <Card>
            <Card.Header>Create post</Card.Header>
            <form>
              <input
                className="inputpost"
                type="text"
                name="PostTitle"
                placeholder="Post Title ..."
              />
              <textarea rows="6" placeholder="Describe Your Post"></textarea>

              <button className="butt_logg" type="submit">
                Continue <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
