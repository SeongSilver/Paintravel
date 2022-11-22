import React, {useState, useEffect} from "react";
import "../../styles/common/header.scss";
import { Link } from "react-router-dom";
import logo from "../../img/common/logo.png";
import {useSelector} from 'react-redux';


function Header() {
  // const [loginState, setLoginState] = useState(false);
  // const loginInfo = useSelector((state) => state.user.userData);
  // setLoginState(loginInfo);
  // console.log(loginState);
  return (
    <header className="header">
      <div className="headerWrapper">
        <div className="skipNav">
          <Link to="/">본문바로가기</Link>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="headerRight">
          <Link to="/mypage" className="headLink">
            my page
          </Link>
          <Link to="/Login" className="headLink">
            sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
