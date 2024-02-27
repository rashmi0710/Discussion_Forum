import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import TemplatePage from "../components/Templat";
import { createPost } from "../services/Apis";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
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

  const [inputdata, setInputdata] = useState({
    fname: "",
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, title, description } = inputdata;

    if (!fname || !title || !description) {
      toast.error("Enter Post Title and Description!!");
    } else if (!/^[a-zA-Z\s.,!?'"()]+$/.test(description)) {
      toast.error("Please enter correct content");
    } else {
      const response = await createPost(inputdata);
      console.log(response);
      if (response.status === 201) {
        setInputdata({ ...inputdata, fname: "", title: "", description: "" });
        toast.success("post save sussesfully");
        setTimeout(() => {
          navigate("/user/allpost");
        }, 5000);
      } else {
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
              name="fname"
              placeholder="User Name"
              value={inputdata.fname}
            />
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
