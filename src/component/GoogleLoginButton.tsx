import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleLoginButton() {


const handleGoogleLogin = () => {
        // This is the key: directly redirect to your Laravel backend's Socialite route.
        // Laravel will handle the entire OAuth flow with Google.
        window.location.href = 'http://localhost:8000/api/v1/auth/google/redirect';
    };

  return (
    <>
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const credential = credentialResponse.credential;
         
        if (!credential) {
          console.error("No credential received");
          return;
        }

        try {
          const res = await fetch('http://127.0.0.1:8000/api/v1/auth/google/callback', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${credential}`,
              'Content-Type': 'application/json',
            },
          });
             const dataText = await res.text();
          console.log("Error:", dataText);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          console.log("User logged in:", data);
        } catch (error) {
          console.error("Google login failed:", error);
        }
      }}
      onError={() => {
        console.log('Google Login Failed');
      }}
    />




     <button onClick={handleGoogleLogin} style={{ /* ... your styles ... */ }}>
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
            Sign in with Google
        </button>
    
    </>
    


  );
}


export default GoogleLoginButton