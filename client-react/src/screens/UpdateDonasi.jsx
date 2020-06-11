import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assests/images/logo.svg';
import '../assests/css/App.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

class UpdateDonasi extends React.Component{
  render(){
  return (
    <div className='bg-white-100 text-gray-900 ml-10 mt-20'>
      <ToastContainer />      
 
                    <div className="Rectangle-update-donasi"
                    
                    ></div>
     <footer className="footer2">
            <div className="container">
                <div className="row">
                    <div className="col-6 mb-5">
                        <a className="navbar-brand mb-3" href="">
                        <img className="Group-2 mt-10" img alt="logo" src={logo} />
                        </a>
                        <p style={{ textAlign: 'justify' }}>Ketjilbergerak adalah komunitas berbasis anak muda <br />
                        yang bergerak melalui berbagai praktik kerja seni, sosial <br />
                        dan budaya yang bersifat kolaboratif.
                        </p>

                        <ul class="list">
                            <li><i class="fas fx fa-envelope"></i><span> Ketjilbergerak@support.com</span></li>
                            <li><i class="fas fx fa-phone-square "></i> <span> 0899 - 8888 - 8888</span></li>
                        </ul>


                    </div>
                    <div className="col-6">
                        <h6 className="mt-2">Ikuti Update Kami</h6>
                        <ul class="social-network">
                            <li><a href="#" class="btn-twitter" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" class="btn-facebook" title="Facebook" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="#" class="btn-instagram" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="col text-center copyright">
                &#169;2020 Ketjilbergerak. All Right reserved
            </div>
        </footer >


      ;
    </div>
  );
};
};

export default UpdateDonasi;
