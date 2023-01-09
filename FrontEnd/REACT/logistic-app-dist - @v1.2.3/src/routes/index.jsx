import { Route, Routes, BrowserRouter } from 'react-router-dom'

import SignUp from '../pages/signUp'
import Login from '../pages/login'
import Admin from '../pages/admin'
import Error from '../pages/error'
import Footer from '../components/footer'
import Worker from '../pages/workers'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default (props)=>{
  return (
    <BrowserRouter>
        <ToastContainer autoClose={2000} />
        <Routes>
          <Route exact path="/signup"   element={<SignUp/>} />
          <Route exact path="/"         element={<SignUp/>} />
          <Route exact path="/login"    element={<Login/>} />
          <Route exact path="*"         element={<Error/>} />
          <Route exact path="/dist/:id/administration" element={<Admin/>} />
          <Route exact path="/dist/worker/:id/administration" element={<Worker/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

 
