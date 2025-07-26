import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo1.png';

import {toast } from 'react-toastify';
import {NavLink, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const [loading, setLoading] = useState<boolean>(false);
  const [switchPassword, setSwitchPassword] = useState<boolean>(false);
  const {baseUrl, setTrp, setUserAccountDetails, setTransactions, setSellingPrice, setNetwork, setProvider, setProviderList, setProviderAirtime, setProviderBill, setProviderCable, setSiteName, setBaseColor, setSecondaryColor, setWebLogo, setWhatsAppLink, loginAuth, logInUser, webLogo} = userAuth();  

  const handleLogin = async () => {
    setLoading(true);
    const raw = {
      "emailorusername": email,
      "password": password
    };
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(raw),
    };
  
    try {
      const response = await fetch(`${baseUrl}/signinuser`, requestOptions);   
      // const results = await response.text();
      // console.log(results);
      
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }
      const result = await response.json();
      if(result.otp){
          navigate("/verifyotp");
      }else{
        if(result.data.role !== "admin"){
          toast.success("Logged in successfully!");
          loginAuth(result.data.userId, result.data.userName, result.data.email, result.data.firstName, result.data.lastName, result.data.city, result.data.country, result.data.countryCode, result.data.address, result.data.mobile, result.data.zipCode, result.data.accountNumber, result.data.balance, result.data.bonusBalance, result.data.image, result.data.role, result.token);
          setUserAccountDetails(result.data.bankAccount);
          setTransactions(result.data.transaction);
          setSellingPrice(result.price);
          setNetwork(result.network);
          setProvider(result.vtuProvider);
          setProviderList(result.providerList);
          setProviderAirtime(result.airtimeProvider);
          setProviderCable(result.cableProvider);
          setProviderBill(result.billProvider);
          setTrp(result.tr_pin);
          logInUser();
          navigate("/user/dashboard");
        } 

        if(result.data.role == "admin"){
          toast.success("Logged in successfully!");
          loginAuth(result.data.userId, result.data.userName, result.data.email, result.data.firstName, result.data.lastName, result.data.city, result.data.country, result.data.countryCode, result.data.address, result.data.mobile, result.data.zipCode, result.data.accountNumber, result.data.balance, result.data.bonusBalance, result.data.image, result.data.role, result.token);
          logInUser();
          navigate("/admin/admin-dashboard");
        }

      }
      setLoading(false);

    } catch (error) {
      setLoading(false);
      if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
        toast.error(error.message);
      } else {
        toast.error('An unknown error occurred.');
      }
    }
  }

 
  
  return (
    <div className="authMainWrapper">
      <section className="account-section bg_img">
{/* =================== */}
<div className="account-section-right">
        <div className="top text-center">
            <a href="/" className="account-logo">
                <img src={webLogo} />
            </a>
			<br/>
        </div>

        <div className="middle">
            <form className="account-form" onSubmit={(e) => e.preventDefault()}>               
               
                <div className="form-group">
                    <label htmlFor="username">Username or Email *</label>

                    <input type="text"  placeholder="Username or Email" className="form--control"  value={email} onChange={(e) => setEmail(e.target.value)}/>

                </div>

                <div className="form-group" style={{ position : "relative" }}>
                    <label htmlFor="password">Password *</label>

                    <input id="passwordInput" type= {switchPassword ? "text" : "password"} placeholder="Password" className="form--control" value={password} onChange={(e) => setPassword(e.target.value)}/>

                        {/* -------- eyes icon -------- */}
                        {
                          switchPassword ? (
                          <FaEyeSlash  className="openEyes"  onClick={() => setSwitchPassword(!switchPassword)}/>
                          ) : (
                           <FaEye  className="openEyes" onClick={() => setSwitchPassword(!switchPassword)}/> 
                          )
                        }
                        

                        
                </div>

                <div className="row">
                    <div className="col-md-7">
                        <div className="form-check custom--checkbox">
                            <input className="form-check-input" type="checkbox" name="remember" id="remember"/>
                            <label className="form-check-label" htmlFor="remember">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="col-md-5 text-md-end">
                        <NavLink to="/forgetpassword" className="custom--cl">
                            Forgot password?
                        </NavLink>
                    </div>
                </div>

              
      <div className="btnFlex">
        {   email !== '' && password !=='' ? (
           loading ? (
                <button >
                  processing.....
                </button>
           ) : (
                <button onClick={handleLogin}>
                  Sign In
                </button>
           )
           ) : (
            <button className="btnInactive">
            Sign In
          </button>
           )

        }
          
      </div>

    <p className="mt-xl-5 mt-3 text-white logContent"> Haven't an account ? 
        <NavLink to="/register">Signup here </NavLink>
    </p>
    </form>


        </div>
        {/* <div className="bottom">
            <div className="rowbottom">
                <div className="col-xl-12">
                    <ul className="d-flex flex-wrap align-items-center account-short-link justify-content-center">
                                                            <li><a href="http://127.0.0.1:8000/page/111-company-policy" target="blank">
                        Company Policy</a>
                        ,</li>
                                                            <li><a href="http://127.0.0.1:8000/page/85-terms-of-services" target="blank">
                        Terms of Services</a>
                        ,</li>
                                                            <li>
                        <a href="http://127.0.0.1:8000/page/84-privacy-policy" target="blank">
                        Privacy Policy</a>
                        .</li>
                                                    </ul>
                </div>
            </div>
        </div> */}
    </div>
{/* ==================== */}
      </section>
    </div>
  )
}

export default Login


