import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToExternalUrl = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://omakvtu.com';
  }, []);

  return null;
};


export default RedirectToExternalUrl