import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import TemplatePage from "../components/Templat";
import { createPost } from "../services/Apis";
import { ToastContainer, toast } from "react-toastify";

const CreatePost = () => {
  const [inputdata, setInputdata] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {title, description } = inputdata;

    if ( !title || !description) {
      toast.error("Enter Post Title and Description!!");
    } else if (!/^[a-zA-Z\s.,!?'"()]+$/.test(description)) {
      toast.error("Please enter correct content");
    } else {
      try {
        const response = await createPost(inputdata);
        console.log(response);
      } catch (error) {
        console.error("Error creating post:", error);
        toast.error("Failed to create post. Please try again later.");
      }
    }
  };

  return (
    <>
      <TemplatePage />
      <div className="rightPanelHome">
        <Card>
          <Card.Header>Create post</Card.Header>
          <form>
            <input
              onChange={handleInputChange}
              style={{
                margin: "4%",
                textAlign: "left",
                backgroundColor: "black",
                border: "1px solid #404040",
                color: "white",
                width: "70%",
              }}
              className="inputpost"
              type="text"
              name="title"
              placeholder="Post Title ..."
              value={inputdata.title}
            />
            <textarea
              onChange={handleInputChange}
              name="description"
              rows="6"
              placeholder="Describe Your Post"
              value={inputdata.description}
            ></textarea>

            <button onClick={handleSubmit} className="butt_logg" type="button">
              Post Submit
            </button>
          </form>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreatePost;
