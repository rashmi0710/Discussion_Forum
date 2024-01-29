import React from 'react'
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    return(
        <>
        <section className='form_data'>
            <div className='small_heading'>
                <p><i class="fa-solid fa-rocket"></i> for Indian Users Only</p>
            </div>
            <div className='form_heading'>
                <h1> Start posting anonymously where no one will judge. </h1>
            </div>
            <p>Welcom to stranger discussion forum</p>
            <button>Create Your Account <i class="fa-solid fa-arrow-right"></i></button>
            <p>Already have account?<NavLink to='/login'>Login</NavLink></p>  
        </section>
        </>
    )
}

export default HomePage;