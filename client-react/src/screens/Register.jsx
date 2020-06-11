import React, { useState } from 'react';
import logo from '../assests/images/logo.svg';
import logo1 from '../assests/images/login.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import '../assests/css/App.css'
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import { GoogleLogin } from 'react-google-login';
import { Link, Redirect } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    textChange: 'Sign Up'
  });

  const { name, email, password1, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name && email && password1) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            password: password1
          })
          .then(res => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password1: '',
              textChange: 'Submitted'
            });

            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password1: '',
              textChange: 'Sign Up'
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
    } else {
      toast.error('Please fill all fields');
    }
  };

  return (
    <div className=''>
      {isAuth() ? <Redirect to='/' /> : null}
      <ToastContainer />
        <div className="container isi">
          <div className="row">
            <div className="col-7">
              <img className="Group-1" img alt="logo" src={logo}/>
              <p className="Daftarkan">Daftarkan dirimu dan mulai <br></br>berdonasi melalui ketjilbergerak</p>
              <img className="Group-3" img alt="logo1" src={logo1}/>
            </div>
            <div className='col-5'>
              <div className='g:w-1/2 xl:w-5/12 p-6 sm:12 row'>
                <div className='mt-12 flex flex-col items-center'>
                  <h1 className='text2'>
                    Daftar
                  </h1>
                  <form
                    className='w-full flex-1 mt-0text-indigo-500'
                    onSubmit={handleSubmit}
                  >
                    <input
                      className='form-control Rectangle-1 mt-3'
                      type='text'
                      placeholder='name'
                      onChange={handleChange('name')}
                      value={name}
                    />
                    <input
                      className='form-control Rectangle-1 mt-3'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange('email')}
                      value={email}
                    />
                    <input
                      className='form-control Rectangle-1 mt-3'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange('password1')}
                      value={password1}
                    />
                    <button
                      type='submit'
                      className='button-masuk mt-3'
                    >
                      <span className='ml-3 text-center text-masuk'>Masuk</span>
                    </button>
                    <div className="container form-bawah mt-3">
                      <div className="row">
                        <div className="form-check check-input">
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label " for="defaultCheck1">
                              Dengan mendaftar, kamu setuju dengan <span>Syarat dan Ketentuan</span> ketjilbergerak
                            </label>     
                        </div>
                      </div>
                    </div>    
                  </form>
                <div className="or text-center">
                  <p className="ATAU my-4">ATAU</p>
                </div>
                <button
                  className='form-control Rectangle-1'
                >
                  <i className='fab fa-google ' />
                  <span className="">Sign In with Google</span>
               </button>                          
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Register;