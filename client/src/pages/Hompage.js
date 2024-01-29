import React from 'react'
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    return(
        <>
        <section className='form_data'>
            <div className='small_heading'>
                <p><i className="fa-solid fa-rocket"></i> for Indian Users Only</p>
            </div>
            <div className='form_heading'>
                <h1> Start posting anonymously where no one will judge. </h1>
            </div>
            <p>Welcom to stranger discussion forum</p>
            <NavLink to='/register'><button className='btn' >Create Your Account <i className="fa-solid fa-arrow-right"></i></button></NavLink>
            <p>Already have account?<NavLink to='/login'>Login</NavLink></p>  
        </section>
        </>
    )
}

export default HomePage;