import React from 'react'

const OtpPage = () => {

    return(
        <>
        <section className='card_for_login'>
            <div className='login-card'>
            <i className="fa-solid fa-rocket fa-xl i_logo"></i>
            <h2>Create Your Account</h2>
            <p className='p_otp'>
                Please verify your email ID to continue. We have sent an OTP to this `email`.
            </p>
            <form>
                <div className='form-group'>
                <input type='otp' id='email_otp' name='email_otp' placeholder='Please Enter otp here' />
                </div>
                <button className='butt_log' type='submit'>Continue <i className="fa-solid fa-arrow-right"></i></button>
            </form>
            </div>
        </section>
    </>
    )
}

export default OtpPage;