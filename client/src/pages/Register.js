import React, { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import { RegisterFunction } from '../services/Apis';
import { useNavigate } from "react-router-dom";



const RegisterPage = () => {
    const [passshow,setPassShow] = useState(false);
    const [inputdata, setInputdata] = useState({
        fname:"",
        email:"",
        password:""
    });

    const navigate = useNavigate();
    

    // console.log(inputdata)
    
    //setinputvalue
    const handleChange = (e)=>{
        const{name,value} = e.target;
        setInputdata({...inputdata,[name]:value})
    }
    //register data
    const handleSubmi = async(e)=>{
        e.preventDefault();
        const {fname, email, password} = inputdata;
        if(fname === ""){
            toast.error("Enter Your Name")
        }else if(email === ""){
            toast.error("Enter Your Email")
        }else if(!email.includes("@")){
            toast.error("Enter Your Valid Email")
        }else if(password.length < 6){
            toast.error("password lenth minimun 6 character")
        }else{
            const response = await RegisterFunction(inputdata);
            console.log(response)
            if(response.status === 201){
                setInputdata({...inputdata,fname:"",email:"",password:""});
                navigate('/user/sucess');
            }else{
                toast.error(response.data.error);
            }
        }
    }



    return(

        
        <>
        <section className='card_for_login'>
            <div className='login-card'>
            <i className="fa-solid fa-rocket fa-xl i_logo"></i>
            <h2>Create Your Account</h2>
            <form>
                <div className='form-group'>
                <input type='text' id='name' onChange={handleChange} name='fname' placeholder='Enter Your Name' />
                </div>
                <div className='form-group'>
                <input type='email' id='email' onChange={handleChange} name='email'  placeholder='Enter Your ID' />
                </div>
                <div className='form-group two'>
                    <input type={!passshow ? "password" : "text"} id='Password' onChange={handleChange} name='password' placeholder='Enter Your Password' />
                    <div className='showpass' onClick={()=>setPassShow(!passshow)}>
                        {!passshow ? "show" : "text"}
                    </div>
                </div>
                <button className='butt_log' type='submit' onClick={handleSubmi} >Continue <i className="fa-solid fa-arrow-right"></i></button>
            </form>
            </div>
            <ToastContainer />
        </section>
    </>
    )
}

export default RegisterPage;