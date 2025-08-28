import React, { createContext, useContext, useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';

  interface AuthProviderProps {
    children: ReactNode;
  }

 interface accountDetails {
        accountName : string,
        accountNumber : string,
        bankCode : string,
        bankName : string,
        customerName : string,
  }

  interface AuthContextType {

      loggedIn: boolean;
      loginAuth: Function;
      logInUser: Function;
      logout: Function;

      setLoggedIn: Function;
      setUserId : Function;
      setName : Function;
      setEmail : Function;
      setMobile1 : Function;
      setMobile2 : Function;
      setAddress1 : Function;
      setAddress2 : Function;
      setState : Function;
      setCity : Function;
      setPostalCode : Function;
      setImage : Function;
      setRole : Function;
      setAdminLoading : Function;
      setToken : Function;
      baseUrl: string; 
      userId : string;
      name : string;
      email : string;
      mobile1 : string;
      mobile2 : string;
      address1 : string;
      address2 : string;
      state : string;
      city : string;
      postalCode : string;
      image : string;
      role : string;
      adminLoading : boolean;
      token: string;
      }
  
  const AuthContext = createContext<AuthContextType>({
      loggedIn: false,
      loginAuth: () => {},
      logInUser: () => {},
      logout: () => {},
      setLoggedIn : () => {},
      setUserId  : () => {},
      setName  : () => {},
      setEmail  : () => {},
      setMobile1  : () => {},
      setMobile2  : () => {},
      setAddress1  : () => {},
      setAddress2  : () => {},
      setState  : () => {},
      setCity  : () => {},
      setPostalCode  : () => {},
      setImage  : () => {},
      setRole  : () => {},
      setAdminLoading  : () => {},
      setToken  : () => {},
      baseUrl: '',
      userId : '',
      name : '',
      email : '',
      mobile1 : '',
      mobile2 : '',
      address1 : '',
      address2 : '',
      state : '',
      city : '',
      postalCode : '',
      image : '',
      role : '',
      adminLoading  : false,
      token: ''
  });

 const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();
   
    // const [baseUrl] = useState<string>('http://127.0.0.1:8000/api/v1');
    
    const [baseUrl] = useState<string>('https://api.omakvtu.com/api/v1');

  // ==========================================
    const [userId, setUserId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile1, setMobile1] = useState<string>('');
    const [mobile2, setMobile2] = useState<string>('');
    const [address1, setAddress1] = useState<string>('');
    const [address2, setAddress2] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [adminLoading, setAdminLoading] = useState<boolean>(false);
  
  // =========================

    const [token, setToken] = useState<string>(() => {
      const storedToken = localStorage.getItem('myToken');
      return storedToken ? storedToken : '';
    });   
  
    const [loggedIn, setLoggedIn] = useState<boolean>(() => {
      const storedState = localStorage.getItem('myState');
      return storedState ? JSON.parse(storedState) : false;
    });
  
    const logInUser = () => {
      setLoggedIn(true);
      localStorage.setItem('myState', JSON.stringify(true));
    };
  
    const loginAuth = (userId: string, name: string, email: string, mobile1: string, mobile2: string, address1: string, address2 : string, state : string, city : string, postalCode: string, image: string, role: string, adminLoading: boolean,  token?: string) => {
         setUserId(userId);
         setName(name);
         setEmail(email);
         setMobile1(mobile1);
         setMobile2(mobile2);
         setAddress1(address1);
         setAddress2(address2);
         setState(state);
         setCity(city);
         setPostalCode(postalCode);
         setAdminLoading(adminLoading);
         setImage(image);
         setRole(role);
      if(token){
          localStorage.setItem('myToken', token);
          setToken(token);
      }
      
    }

    const logout = (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const storedToken: string | null = localStorage.getItem('myToken');
      const tokens: string = storedToken || '';
      if(tokens !== ''){
         logOutUser(tokens);
      }else{
        localStorage.removeItem("myState");
        localStorage.removeItem("myToken");
        navigate("/login");
      }
    };

    const logOutUser = async (tokens : string) => {
      setAdminLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", tokens);
      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      try {
        const response = await fetch(`${baseUrl}/logout`, requestOptions);
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message);
        }
        const result = await response.json();
        setAdminLoading(false);
          localStorage.removeItem("myState");
          localStorage.removeItem("myToken");
          navigate("/login");
      } catch (error) {
        localStorage.removeItem("myState");
        localStorage.removeItem("myToken");
        navigate("/login");
      }
  };


   useEffect(() => {
  
    const exemptedPaths = [
  /^\/register$/,                     // /register
  /^\/register\/[^\/]+$/,            // /register/:referralId
  /^\/term$/,                         // /term
  /^\/disclamer$/,                    // /disclamer
  /^\/forgetpassword$/,              // /forgetpassword
  /^\/changepassword\/[^\/]+$/,     // /changepassword/:token
  /^\/emailconfirm\/[^\/]+$/,       // /emailconfirm/:token
  /^\/redirectform$/,                // /redirectform
  /^\/verifyotp$/,                   // /verifyotp
  /^\/login$/                        // /login
];
    const fetchData = async () => {
      
      const isExempted = exemptedPaths.some((pattern) => pattern.test(location.pathname));
      if (loggedIn) {
        const storedToken: string | null = localStorage.getItem('myToken');
        const tokens: string = storedToken || '';
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", tokens);
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        try {
          const response = await fetch(`${baseUrl}/auth/getuser`, requestOptions); 
        
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }

            const result = await response.json();

            // loginAuth(result.data.userId, result.data.name);  
                
            if(result.data.role !== "admin"){
              // setUserAccountDetails(result.data.bankAccount);
            }
             
        } catch (error) {          
          // if (!isExempted) {
          //   logout();
          // }
        }
      } else {       
        // if (!isExempted) {
        //     logout();
        //   }
      }
    };

         
  }, [loggedIn]);

    return (
      <AuthContext.Provider value={{
        loggedIn, loginAuth, logInUser, logout, setLoggedIn, 
      setUserId,
      setName,
      setEmail,
      setMobile1,
      setMobile2,
      setAddress1,
      setAddress2,
      setState,
      setCity,
      setPostalCode,
      setImage,
      setRole,
      setAdminLoading,
      setToken,
      baseUrl, userId, name, email,
      mobile1,
      mobile2,
      address1,
      address2,
      state,
      city,
      postalCode,
      image,
      role,
      adminLoading,
      token
      }}>

        {children}
      </AuthContext.Provider>
    );
  };

  export const userAuth = (): AuthContextType => {
    return useContext(AuthContext);
  };

  export { AuthContext, AuthProvider };