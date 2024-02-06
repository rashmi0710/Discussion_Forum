import React from 'react';
import HomePage from './pages/Hompage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import OtpPage from './pages/Otp';
import AccountCreated from './pages/AccounCreated';
import DashBoardPage from './pages/Dashboard';
import ErrorPage from './pages/Error';
import NavBar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import CreatePost from './pages/CreatePost';
import AllPost from './pages/AllPost';
import CommentedPost from './pages/CommentedPost';
import RepliedPost from './pages/RepliedPost';

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/user/sucess' element={<AccountCreated/>}/>
      <Route path='/user/otp' element={<OtpPage/>}/>
      <Route path='/user/dashboard' element={<DashBoardPage/>}/>
      <Route path='/user/createpost' element={<CreatePost/>}/>
      <Route path='/user/allpost' element={<AllPost/>}/>
      <Route path='/user/commentedpost' element={<CommentedPost/>}/>
      <Route path='/user/repliedpost' element={<RepliedPost/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  );
};

export default App;
