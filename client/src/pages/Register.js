import React from 'react'

const RegisterPage = () => {

    return(
        <>
        <section className='card_for_login'>
            <div className='login-card'>
            <i className="fa-solid fa-rocket fa-xl i_logo"></i>
            <h2>Create Your Account</h2>
            <form>
                <div className='form-group'>
                <input type='text' id='name' name='name' placeholder='Enter Your Name' />
                </div>
                <div className='form-group'>
                <input type='email' id='email' name='email' placeholder='Enter Your ID' />
                </div>
                <button className='butt_log' type='submit'>Continue <i class="fa-solid fa-arrow-right"></i></button>
            </form>
            </div>
        </section>
    </>
    )
}

export default RegisterPage;