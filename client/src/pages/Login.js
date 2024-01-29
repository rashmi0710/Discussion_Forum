import React from 'react';

const LoginPage = () => {
  return (
    <>
      <section className='card_for_login'>
        <div className='login-card'>
          <h2>Login</h2>
          <form>
            <div className='form-group'>
              <input type='text' id='name' name='name' placeholder='Name' />
            </div>
            <div className='form-group'>
              <input type='email' id='email' name='email' placeholder='Email' />
            </div>
            <div className='form-group'>
              <input type='password' id='password' name='password' placeholder='Password' />
            </div>
            <button className='butt_log' type='submit'>Continue <i class="fa-solid fa-arrow-right"></i></button>
          </form>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
