import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const LoginPage = () => {
  const [email,setEmail] = useState("");
  const [spiner,setSpiner] = useState(false);
  const navigate = useNavigate();

  console.log(email);

  const sendOtp = async(e)=>{
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email !")
    }else{
      setSpiner(true)
      const data = {
        email:email
      }

      const response = await sentOtpFunction(data);
      if(response.status === 200){
        setSpiner(false)
        navigate("/user/otp",{state:email})
      }else{
        toast.error(response.data.error);
      }
    }
  }

  return (
    <>
      <section className='card_for_login'>
        <div className='login-card'>
          <h2>Login</h2>
          <form>
            
            <div className='form-group'>
              <input type='email' id='email' name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
            </div>
            
            <button className='butt_log' type='submit' onClick={sendOtp}>Login<i className="fa-solid fa-arrow-right"></i>
            {spiner ? <span><Spinner animation="border" variant="light" /></span>:""}
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default LoginPage;