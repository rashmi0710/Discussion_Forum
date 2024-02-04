import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email,setEmail] = useState("");

  const navigate = useNavigate();

  console.log(email);

  const sendOtp = async(e)=>{
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email !")
    }else{
      const data = {
        email:email
      }

      const response = await sentOtpFunction(data);
      if(response.status === 200){
        navigate("/user/otp")
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
            
            <button className='butt_log' type='submit' onClick={sendOtp}>Login<i className="fa-solid fa-arrow-right"></i></button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default LoginPage;
