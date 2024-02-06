import React from "react";
import Card from "react-bootstrap/Card";
import TemplatePage from "../components/Templat";

const CreatePost = () => {
  return (
    <><TemplatePage/>
        <div className="rightPanelHome">
          <Card>
            <Card.Header>Create post</Card.Header>
            <form>
              <input style={{margin:'4%', textAlign:'left',backgroundColor:'black',border:'1px solid #404040',color:'white',width:'70%'}}
                className="inputpost"
                type="text"
                name="PostTitle"
                placeholder="Post Title ..."
              />
              <textarea rows="6" placeholder="Describe Your Post"></textarea>

              <button className="butt_logg" type="submit">
                Post Submit
              </button>
            </form>
          </Card>
        </div>
      
    </>
  );
};

export default CreatePost;
