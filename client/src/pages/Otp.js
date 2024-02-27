import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { userVerify } from '../services/Apis';
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
    const [otp, setOtp] = useState("");
    const location = useLocation();
    const Navigate = useNavigate();
    

    const loginUser = async (e) => {
        e.preventDefault();

        if (otp === "") {
            toast.error("Enter Your Otp");
        } else if (!/[^a-zA-Z]/.test(otp)) {
            toast.error("Enter Valid Otp");
        } else if (otp.length < 6) {
            toast.error("OTP Length minimum 6 digits");
        } else {
            const data = {
                username:location.state,
                otp,
                email: location.state
            };

            const response = await userVerify(data);
            if (response.status === 200) {
                localStorage.setItem("userdbtoken", response.data.userToken);
                toast.success(response.data.message);
                setTimeout(() => {
                    Navigate("/user/dashboard");
                }, 5000);
            } else {
                toast.error(response.response.data.error);
            }
        }
    };

    return (
        <><p className="welcome-message">Welcome username</p>
            <section className='card_for_login'>
                <div className='login-card'>
                    <i className="fa-solid fa-rocket fa-xl i_logo"></i>
                    <h2>Create Your Account</h2>
                    <p className='p_otp'>
                        Please verify your email ID ({location.state}) to continue. We have sent an OTP to this email.
                    </p>
                    <form>
                        <div className='form-group'>
                            <input type='text' id='' onChange={(e) => setOtp(e.target.value)} name='otp' placeholder='Please Enter otp here' />
                        </div>
                        <button className='butt_log' type='submit' onClick={loginUser}>Continue <i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    );
};

export default OtpPage;
