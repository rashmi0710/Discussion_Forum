import React from 'react'
import { NavLink } from 'react-router-dom';

const AccountCreated = () => {

    return(
        <>
        <section className='card_for_login'>
            <div className='login-card'>
            <i className="fa-solid fa-circle-check fa-2xl i_logo"></i>
            <h2>Account Created SucessFully</h2>
            <p style={{ textAlign: 'center' }}>
                <NavLink to='/login'>Login</NavLink>
            </p>
            <button className='butt_log' type='submit'> Create Your frist Post <i className="fa-solid fa-arrow-right"></i></button>
            
            </div>
        </section>
    </>
    )
}

export default AccountCreated;