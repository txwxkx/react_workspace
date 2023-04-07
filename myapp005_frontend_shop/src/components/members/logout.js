import { useEffect } from 'react';
//import {useNavigate} from "react-router-dom"

const LogOut = () => {
  //const navigator = useNavigate();

  useEffect(() => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('username');
    localStorage.removeItem('isLogin');
    localStorage.clear();
    // navigation("/");
    window.location.replace('/');
  });
};

export default LogOut;