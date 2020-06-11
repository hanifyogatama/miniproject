import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assests/images/logo.svg';
import '../assests/css/App.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Reset = ({history}) => {
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
    
         
      <div class="container box py-3 reset">
      <p className="ganti-password">Ganti Password</p>
      <p className="ganti-password1">Masukkan alamat e-mail anda dan kami akan<br></br>Mengirimkan link untuk mengganti password</p>
      <form
                    className=''
                    onSubmit={handleSubmit}
                  >
                    <input 
                      className='form-control Rectangle-reset'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange('email')}
                      value={email}
                     />
      <button
                      type='Submit'
                      className='button-forget mt-10 Rectangle-reset1'
                    >
                      <span className='ml-3 text-masuk'>Kirim</span>
                    </button>
      </form>
      <div class="container box py-3 reset1 mb-20"></div>
      </div>

      <footer className="footer1">
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

export default Reset;
