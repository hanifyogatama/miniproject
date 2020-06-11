import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assests/images/logo.svg';
import verificon from '../assests/images/verification.svg';
import '../assests/css/App.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const Verification = ({history}) => {
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
      
      <img className="Group-2 mt-10" img alt="logo" src={logo} />
      <div class="container box py-3 containerverif">
      <img className="verificon mt-12" img alt="verificon" src={verificon} />
      <p className="verifikasi">Selamat</p>
      <p className="verifikasi1">Pendaftaran berhasil. Segera cek e-mail anda <span className="paragrafverif">twingkywingky@gmail.com</span> dan lakukan verifikasi</p>
      
      </div>
      ;
    </div>
  );
};

export default Verification;
