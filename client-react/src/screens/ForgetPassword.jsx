import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assests/images/logo.svg';
import '../assets/css/App.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const ForgetPassword = ({history}) => {
  const [formData, setFormData] = useState({
    email: '',
    textChange: 'Submit'
  });
  const { email, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
          email
        })
        .then(res => {
          
            setFormData({
              ...formData,
              email: '',
              
            });
            toast.success(`Please check your email`);
          
        })
        .catch(err => {
        console.log(err.response)
          toast.error(err.response.data.error);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
    <div className='bg-white-100 text-gray-900 '>
      <ToastContainer />
      
      <img className="Group-2 mt-10" img alt="logo" src={logo} />
      <div class="container box py-3 containerforget">
      <p className="lupapassword">Lupa Password</p>
      <p className="lupapassword2">Masukkan alamat e-mail dan kami akan Mengirimkan link untuk mengganti password</p>
      <form
                    className=''
                    onSubmit={handleSubmit}
                  >
                    <input 
                      className='form-control mt-20 Rectangle-forget'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange('email')}
                      value={email}
                     />
      <button
                      type='Submit'
                      className='button-forget mt-10'
                    >
                      <span className='ml-3 text-masuk'>Kirim</span>
                    </button>
      </form>
      </div>
      ;
    </div>
  );
};

export default ForgetPassword;
