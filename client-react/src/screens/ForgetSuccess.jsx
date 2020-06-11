import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assests/images/logo.svg';
import verificon from '../assests/images/verification.svg';
import '../assests/css/App.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

class Forgetsuccess extends React.Component{
  render(){
  return (
    <div className='bg-white-100 text-gray-900 '>
      
      <img className="Group-2 mt-10" img alt="logo" src={logo} />
      <div class="container box py-3 containerverif">
      <img className="verificon mt-12" img alt="verificon" src={verificon} />
      <p className="verifikasi">Selesai</p>
      <p className="forgetsuccess">Segera cek e-mail anda <span className="paragrafverif">twingkywingky@gmail.com</span><br></br> Terdapat tautan link untuk mengganti password</p>
      
      <button
                      type='Submit'
                      className='button-forget mt-10'
                    >
                      <span className='ml-3 text-masuk'>Masuk</span>
                    </button>
      </div>
      ;
    </div>
  );
};
};

export default Forgetsuccess;
