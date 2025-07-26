import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { userAuth } from '../pages/context/AuthContext';

interface TransactionPopProps {
    routeContext: string;
    popActionParam: boolean;
    onDone?: () => void;
    onCancel?: () => void;
    endPoint?: () => void;
}


const TransactionPop: React.FC<TransactionPopProps> = ({ routeContext, popActionParam, onDone, onCancel, endPoint}) => {

    const {baseUrl, token, trp, setTrp} = userAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [popUp, setPopUp] = useState<boolean>(false);
    const [pinRoute, setPinRoute] = useState<string>('');

    useEffect(() => {
        setPopUp(popActionParam);
        setPinRoute(routeContext);
    }, [popActionParam, routeContext]); 


    const closeModal = () => {
        setPopUp(false);
        if (onDone) {
            onDone(); 
        }
        if (onCancel) {
            onCancel(); 
        }
    };
    
    const [password, setPassword] = useState<string>('');
    const [otp, setOtp] = useState<string[]>(['', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
    const handleInputChange = (index: number, value: string) => {
      if (value.length > 1) return;
  
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (value !== '' && index < 3 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    };
  
    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace' && index > 0 && otp[index] === '' && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    };
    const submitpin = () => {
        const isOtpComplete = otp.every(value => value !== '');
        if(isOtpComplete){
          const otpNumber = parseInt(otp.reduce((acc, current) => acc + current, ''));
          handleLogin(otpNumber);
        }else{
            toast.error("Your transaction pin should be four");
            setLoading(false);
        }
    }

    const handleLogin = async (otp : number) => {
        setLoading(true);
        const raw = {
        "transactionPin" : otp
        };
        const requestOptions: RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : token
          },
          body: JSON.stringify(raw),
        };
        try {
          const response = await fetch(`${baseUrl}/setpin`, requestOptions);
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
          const result = await response.json();
          toast.success(result.message);
          setOtp(['', '', '', '']);
          setPopUp(false);
          setTrp(true);
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
      const submitResetPin = async () => {
        setLoading(true);
        const isOtpComplete = otp.every(value => value !== '');
        if(isOtpComplete){
          const otpNumber = parseInt(otp.reduce((acc, current) => acc + current, ''));
        const raw = {
        "transactionPin" : otpNumber,
        "password" : password
        };
        const requestOptions: RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : token
          },
          body: JSON.stringify(raw),
        };
        try {
          const response = await fetch(`${baseUrl}/resetpin`, requestOptions);
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
          const result = await response.json();
          toast.success(result.message);
          setOtp(['', '', '', '']);
          setPassword('');
          setPopUp(false);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
            toast.error(error.message);
          } else {
            toast.error('An unknown error occurred.');
          }
        } 
    }else{
        toast.error("Your transaction pin should be four");
        setLoading(false);
    }

      };
  
      const deactivatPin = async () => {
        setLoading(true);
       
        const requestOptions: RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : token
          },
       
        };
        try {
          const response = await fetch(`${baseUrl}/deactivatepin`, requestOptions);
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
          const result = await response.json();
          toast.success(result.message);
          setLoading(false);
          setPopUp(false);
          setTrp(false);
        } catch (error) {
          setLoading(false);
          if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
            toast.error(error.message);
          } else {
            toast.error('An unknown error occurred.');
          }
        }
      };

      const confirmPin = async () => {
        setLoading(true);
        const isOtpComplete = otp.every(value => value !== '');
        if(isOtpComplete){
          const otpNumber = parseInt(otp.reduce((acc, current) => acc + current, ''));
        const raw = {
        "transactionPin" : otpNumber
        };
        const requestOptions: RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : token
          },
          body: JSON.stringify(raw),
        };
        try {
          const response = await fetch(`${baseUrl}/verifypin`, requestOptions);
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
          const result = await response.json();
          if (endPoint) {
            endPoint(); 
          }
        //   toast.success(result.message);
          setOtp(['', '', '', '']);
        //   setPopUp(false);
            

        //   setLoading(false);
        } catch (error) {
          setLoading(false);
          if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
            toast.error(error.message);
          } else {
            toast.error('An unknown error occurred.');
          }
        } 
    }else{
        toast.error("Your transaction pin should be four");
        setLoading(false);
    }


         
      }
      
  return (
    <div>
       {
        pinRoute  == "set" ? (
            <div className="otp-con" style={{display: popUp ? "flex" : "none"}}>

            <div className="otp-header">

            <div className="otp-flex">
            <div><h3>Set Up Transaction pin</h3></div>
            <div className="cancel" onClick={closeModal}>x</div>
            </div>
            <div>
                <p>you are about to set up transaction pin</p>
            </div>
        </div>
        <div className="otp-container">
            <div className="otp-title">
                <p>set up transaction pin</p>
            </div>
            <div className="otp-input-set">
        
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="number"
                            id={`otp-reset-${index + 1}`}
                            maxLength={1}
                            value={value}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            onChange={(event) => handleInputChange(index, event.target.value)}
                            onKeyDown={(event) => handleKeyDown(index, event)}
                        />
                        ))}

            </div>
            {
                loading ? (
                    <div className="setsubmit">
                        processing.....
                    </div>
                ) : (
                    <div className="setsubmit" onClick={submitpin}>
                      submit
                    </div>
                )
            }
            
            </div>
        </div>
        ) : pinRoute == "reset" ? (

<div className="otp-con-reset"  style={{display: popUp ? "flex" : "none"}}>

<div className="otp-header">
    <div className="otp-flex">
    <div><h3>Reset Transaction pin</h3></div>
    <div className="cancel" onClick={closeModal}>x</div>
    </div>

    <div>
        <p>you are about to reset transaction pin</p>
    </div>
</div>

<div className="otp-container">
    <div className="otp-title">
        <p>set up transaction pin</p>
    </div>
    <div className="otp-input-set">
    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="number"
                            id={`otp-reset-${index + 1}`}
                            maxLength={1}
                            value={value}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            onChange={(event) => handleInputChange(index, event.target.value)}
                            onKeyDown={(event) => handleKeyDown(index, event)}
                        />
                        ))}
    </div>

    <div className="otp-container">
        <div className="otp-title">
            <p>Enter Your Password</p>
        </div>
        <div className="otp-input-set">
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width : "80%" }} />
        </div>
    </div>
             {
                loading ? (
                    <div className="setsubmit">
                        processing.....
                    </div>
                ) : (
                    <div className="setsubmit" onClick={submitResetPin}>
                      submit
                    </div>
                )
            }
</div>
</div>
    ) : pinRoute == "enterpin" ? (

    <div className="otp-con" style={{display: popUp ? "flex" : "none"}}>

        <div className="otp-header">
            <div className="otp-flex">
            <div><h3>Confirm Transaction</h3></div>
            <div className="cancel" onClick={closeModal}>x</div>
            </div>

            <div>
                <p>you are about to make purchase </p>
            </div>
       </div>

    <div className="otp-container">
        <div className="otp-title">
            <p>enter pin</p>
        </div>
        <div className="otp-input">
        {otp.map((value, index) => (
                        <input
                            key={index}
                            type="number"
                            id={`otp-reset-${index + 1}`}
                            maxLength={1}
                            value={value}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            onChange={(event) => handleInputChange(index, event.target.value)}
                            onKeyDown={(event) => handleKeyDown(index, event)}
                        />
                        ))}
        </div>
        
        {
                loading ? (
                    <div className="setsubmit">
                        processing.....
                    </div>
                ) : (
                    <div className="setsubmit" onClick={confirmPin}>
                      submit
                    </div>
                )
            }

    </div>
    </div>

    ) : (
            <div className="otp-con-deactivate"  style={{display: popUp ? "flex" : "none"}}>
            <div className="otp-header">
                <div className="otp-flex">
                <div><h3>Deactivate Transaction pin</h3></div>
                <div className="cancel" onClick={closeModal}>x</div>
                </div>
            </div>
       
            <div className="otp-container">
                <div className="otp-title">
                    <p>are you sure you want to deactivate transaction pin</p>
                </div>
       
               <div style={{
                gap: "50px",
               alignItems: "center",
               justifyContent: "center",
               display: "flex"
             }}
           >
                
                {
                loading ? (
                    <div className="setsubmit">Processing.....</div>
                    
                ) : (
                    <div className="setsubmit" onClick={deactivatPin} style={{ background: "red" }}>Yes</div>
                )
            }

                <div className="setsubmit" onClick={closeModal}>No</div>
               </div>
       
            </div>
            </div>
        )
    }

    </div>
  )
}

export default TransactionPop
