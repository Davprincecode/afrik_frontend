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
   interface networkInterface {
    networkName: string,
    networkCode: string
   }
   interface providerListInterface {
    providerName: string,
    providerUrl: string
   }

   interface providerInterface {
      id : string;
      networkCode : string,
      networkName : string,
      providerName : string,
      providerUrl : string,
      status : string
   }
  interface priceInterface{
    amount : number;
    role_name: string;
    package_type : string;
  }

  interface transaction {
        amount : string,
        charge : string,
        details : string,
        postBalance : string,
        purpose : string,
        transactionId : string,
        trx : string,
        trxType : string,
        date :string
  }

  interface Plan {
    id: string;
    network: string;
    plan: string;
    type: string;
    amount: number;
  }
  interface PlanAiben {
    id: number;
    cable: string;
    cable_id: string;
    plan: string;
    amount: number;
  }

  interface FormattedPlan {
    id: number;
    dataplan_id: string;
    network: number;
    plan_type: string;
    plan_network: string;
    month_validate: string;
    plan: string;
    plan_amount: string;
  }
  
  interface FormattedCablePlan {
      cable: string
      cableplan_id: string
      id : number
      package: string
      plan_amount : number
  }

  type GroupedPlans = Record<string, Record<string, FormattedPlan[]>>;
  type GroupedCables = Record<string, FormattedCablePlan[]>;

  
 

  interface AuthContextType {
    loggedIn: boolean;
    loginAuth: Function;
    logInUser: Function;
    logout: Function;
    setLoggedIn: Function;
    setUserId : Function
    setUserName : Function
    setEmail : Function
    setFirstName : Function
    setLastName : Function
    setCity : Function
    setCountry : Function
    setCountryCode : Function
    setAddress : Function
    setMobile : Function
    setZipCode : Function
    setAccountNumber : Function
    setBalance : Function
    setBonusBalance : Function
    setImage : Function
    setRole : Function
    setUserAccountDetails : Function
    setTransactions : Function
    setSellingPrice : Function
    setNetwork : Function
    setProviderList : Function
    setProvider : Function
    setProviderAirtime : Function
    setProviderCable : Function
    setProviderBill : Function
    setSmartspeed : Function
    setHusmodata : Function
     setAibentop : Function
     setMaskawasubapi : Function
     setAibenCable : Function
     setSmartCable : Function
     setHusmodataCable : Function
     setMaskawasubCable : Function
    setSiteName : Function
    setBaseColor : Function
    setSecondaryColor : Function
    setWebLogo : Function
    setWhatsAppLink : Function
    setTextPrimaryColor : Function
    setTextSecondaryColor : Function
    setWhatsAppGroupLink : Function
    setTrp : Function 
    setTwoStep : Function
    baseUrl: string; 
    userId : string
    userName : string
    email : string
    firstName : string
    lastName : string
    city : string
    country : string
    countryCode : string
    address : string
    mobile : string
    zipCode : string
    accountNumber : string
    balance : number
    bonusBalance : number
    image : string
    siteName : string
    baseColor : string
    secondaryColor : string
    webLogo : string
    whatsAppLink : string
    textPrimaryColor : string
    textSecondaryColor : string
    whatsAppGroupLink : string
    role : string
    twoStep : boolean;
    userAccountDetails : accountDetails[];
    transactions : transaction[];
    sellingPrice : priceInterface[];
    aibentop : GroupedPlans;
    smartspeed : GroupedPlans;
    husmodata : GroupedPlans;
    maskawasubapi : GroupedPlans;
    aibenCable : GroupedCables;
    maskawasubCable : GroupedCables;
    smartspeedCable : GroupedCables;
    husmodataCable : GroupedCables;
    providerList : providerListInterface[];
    network : networkInterface[];
    cable : networkInterface[];
    bill : networkInterface[];
    provider : providerInterface[];
    providerCable : providerInterface[];
    providerBill : providerInterface[];
    providerAirtime : providerInterface[];
    trp : boolean
    adminLoading : boolean
    token: string
      }
  
  const AuthContext = createContext<AuthContextType>({
    loggedIn: false,
    loginAuth: () => {},
    logInUser: () => {},
    logout: () => {},
    setLoggedIn: () => {},
   setUserId : () => {},
   setUserName : () => {},
   setEmail : () => {},
   setFirstName : () => {},
   setLastName : () => {},
   setCity : () => {},
   setCountry : () => {},
   setCountryCode : () => {},
   setAddress : () => {},
   setMobile : () => {},
   setZipCode : () => {},
   setAccountNumber : () => {},
   setBalance : () => {},
   setBonusBalance : () => {},
   setImage : () => {},
   setRole : () => {},
   setUserAccountDetails : () => {},
   setTransactions : () => {},
   setSellingPrice : () => {},
   setNetwork : () => {},
   setProviderList : () => {},
   setProvider : () => {},
   setProviderAirtime : () => {},
    setProviderCable : () => {},
    setProviderBill : () => {},
    setSmartspeed : () => {},
    setHusmodata : () => {},
    setAibentop : () => {},
    setMaskawasubapi : () => {},
    setAibenCable : () => {},
     setSmartCable : () => {},
     setHusmodataCable : () => {},
     setMaskawasubCable : () => {},
     setSiteName : () => {},
    setBaseColor : () => {},
    setSecondaryColor : () => {},
    setWebLogo : () => {},
    setWhatsAppLink : () => {},
    setTextPrimaryColor : () => {},
  setTextSecondaryColor : () => {},
  setWhatsAppGroupLink : () => {},
   setTrp : () => {},
   setTwoStep : () => {},
    baseUrl: '',
    userId : '',
    userName : '',
    email : '',
    firstName : '',
    lastName : '',
    city : '',
    country : '',
    countryCode : '',
    address : '',
    mobile : '',
    zipCode : '',
    accountNumber : '',
    balance : 0,
    bonusBalance : 0,
    image : '',
    role : '',
    userAccountDetails : [],
    transactions : [],
    sellingPrice : [],
    aibentop : {},
    smartspeed : {},
    husmodata : {},
    maskawasubapi : {},
    aibenCable : {},
    maskawasubCable : {},
    smartspeedCable : {},
    husmodataCable : {},
    network : [],
    cable : [],
    bill : [],
    providerList : [],
    provider : [],
    providerAirtime : [],
    providerBill : [],
    providerCable : [],
    siteName : '',
    baseColor : '',
    secondaryColor : '',
    webLogo : '',
    whatsAppLink : '',
    textPrimaryColor : '',
    textSecondaryColor : '',
    whatsAppGroupLink : '',
    trp : false,
    adminLoading : false,
    twoStep :  false,
    token: ''
  });

  const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
   
    // const [baseUrl] = useState<string>('http://127.0.0.1:8000/api/v1');
    
    const [baseUrl] = useState<string>('https://api.omakvtu.com/api/v1');

// ==========================================
const [userId, setUserId] = useState<string>('');
const [accountNumber, setAccountNumber] = useState<string>('');
const [address, setAddress] = useState<string>('');
const [balance, setBalance] = useState<number>(0);
const [bonusBalance, setBonusBalance] = useState<number>(0);
const [city, setCity] = useState<string>('');
const [country, setCountry] = useState<string>('');
const [countryCode, setCountryCode] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [firstName, setFirstName] = useState<string>('');
const [image, setImage] = useState<string>('');
const [lastName, setLastName] = useState<string>('');
const [mobile, setMobile] = useState<string>('');
const [role, setRole] = useState<string>('');
const [userName, setUserName] = useState<string>('');
const [zipCode, setZipCode] = useState<string>('');
const [trp, setTrp] = useState<boolean>(false);
const [adminLoading, setAdminLoading] = useState<boolean>(false);
const [twoStep, setTwoStep] =useState<boolean>(false);
const [userAccountDetails, setUserAccountDetails] = useState<accountDetails[]>([]);
const [transactions, setTransactions] = useState<transaction[]>([]);
const [sellingPrice, setSellingPrice] = useState<priceInterface[]>([]);
const [aibentop, setAibentop] = useState<GroupedPlans>({});
const [smartspeed, setSmartspeed] = useState<GroupedPlans>({});
const [husmodata, setHusmodata] = useState<GroupedPlans>({});

const [maskawasubapi, setMaskawasubapi] = useState<GroupedPlans>({});

const [aibenCable, setAibenCable] = useState<GroupedCables>({});
const [maskawasubCable, setMaskawasubCable] = useState<GroupedCables>({});
const [smartspeedCable, setSmartCable] = useState<GroupedCables>({});
const [husmodataCable, setHusmodataCable] = useState<GroupedCables>({});

const [providerList, setProviderList] = useState<providerListInterface[]>([]);
const [network, setNetwork] = useState<networkInterface[]>([]);
const [cable, setCable] = useState<networkInterface[]>([]);
const [bill, setBill] = useState<networkInterface[]>([]);
const [provider, setProvider] = useState<providerInterface[]>([]);
const [providerAirtime, setProviderAirtime] = useState<providerInterface[]>([]);
const [providerCable, setProviderCable] = useState<providerInterface[]>([]);
const [providerBill, setProviderBill] = useState<providerInterface[]>([]);
  const [siteName, setSiteName] = useState<string>('');
  const [baseColor, setBaseColor] = useState<string>('');
  const [secondaryColor, setSecondaryColor] = useState<string>('');
  const [webLogo, setWebLogo] = useState<string>('');
  const [whatsAppLink, setWhatsAppLink]  = useState<string>('');
  const [textPrimaryColor, setTextPrimaryColor]  = useState<string>('');
  const [textSecondaryColor, setTextSecondaryColor]  = useState<string>('');
  const [whatsAppGroupLink, setWhatsAppGroupLink]  = useState<string>('');
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
  
    const loginAuth = (userId: string, userName: string, email: string, firstName: string, lastName: string, city: string, country: string, countryCode: string, address: string, mobile: string, zipCode: string, accountNumber: string, balance: number, bonusBalance : number, image: string, role: string,  token?: string) => {
         setUserId(userId);
         setUserName(userName);
         setEmail(email);
         setFirstName(firstName);
         setLastName(lastName);
         setCity(city);
         setCountry(country);
         setCountryCode(countryCode);
         setAddress(address);
         setMobile(mobile);
         setZipCode(zipCode);
         setAccountNumber(accountNumber);
         setBalance(balance);
         setBonusBalance(bonusBalance);
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
          const response = await fetch(`${baseUrl}/getuser`, requestOptions); 
        
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
            const result = await response.json();  
            loginAuth(result.data.userId, result.data.userName, result.data.email, result.data.firstName, result.data.lastName, result.data.city, result.data.country, result.data.countryCode, result.data.address, result.data.mobile, result.data.zipCode, result.data.accountNumber, result.data.balance, result.data.bonusBalance, result.data.image, result.data.role);      
            if(result.data.role !== "admin"){
              setUserAccountDetails(result.data.bankAccount);
              setTransactions(result.data.transaction);
              setSellingPrice(result.price);
              setTrp(result.tr_pin);
            }
              setNetwork(result.network);
              setCable(result.cable);
              setBill(result.bill);
              setProvider(result.vtuProvider);
              setProviderAirtime(result.airtimeProvider);
              setProviderCable(result.cableProvider);
              setProviderBill(result.billProvider);
              setProviderList(result.providerList);
              setTwoStep(result.verification);
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

    const fetchTransaction = async () => {
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
          const response = await fetch(`${baseUrl}/transactiontrack`, requestOptions);
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
          }
            const result = await response.json();
        } catch (error) {
          
        }
    };
    fetchData();
    if(role !== "admin"){
      fetchTransaction();
    }        
  }, [loggedIn]);

    return (
      <AuthContext.Provider value={{loggedIn, loginAuth, logInUser, logout, setLoggedIn,  baseUrl, userId, userName, email, firstName, lastName, city, country, countryCode, address, mobile, zipCode, accountNumber, balance, bonusBalance, image, role, userAccountDetails, transactions, sellingPrice, aibentop, smartspeed, husmodata, maskawasubapi, aibenCable, maskawasubCable, smartspeedCable, husmodataCable, network, cable, bill, providerList, provider,providerAirtime, providerBill, providerCable, siteName, baseColor, secondaryColor, webLogo, 
     textPrimaryColor,textSecondaryColor, whatsAppGroupLink, whatsAppLink, trp, adminLoading, twoStep, setUserId, setUserName, setEmail, setFirstName, setLastName, setCity, setCountry, setCountryCode, setAddress, setMobile, setZipCode, setAccountNumber, setBalance, setBonusBalance, setImage, setRole, setUserAccountDetails, setTransactions, setSellingPrice, setNetwork, setProviderList, setProvider, setProviderAirtime, setProviderBill, setProviderCable, setSmartspeed, setHusmodata, setAibentop, setMaskawasubapi, setAibenCable, setSmartCable, setMaskawasubCable, setHusmodataCable, setSiteName, setBaseColor, setSecondaryColor, setWebLogo, setTextPrimaryColor, setTextSecondaryColor, setWhatsAppGroupLink, setWhatsAppLink, setTrp, setTwoStep, token,
      }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const userAuth = (): AuthContextType => {
    return useContext(AuthContext);
  };

  export { AuthContext, AuthProvider };