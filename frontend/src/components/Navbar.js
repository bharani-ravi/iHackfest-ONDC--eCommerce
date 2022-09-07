import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import cart from "../assets/img/cart.svg";
import search from "../assets/img/search.svg";
import userIcon from "../assets/img/user.svg";
import heart from "../assets/img/heart.svg";
import "../App.css";
import SelectOpt from "../components/SelectOpt";

const Navbar = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="front-page">
      <div className="header">
        <div className="logo-image">
          <img src={logo} alt="logo" width="100px" />
        </div>

        <div className="search">
          <div className="searchbar">
            <img src={search} alt="" width="25px" />
            <input
              type="text"
              placeholder="Type to Search..."
              className="search-input"
            />
          </div>
          <button>Search</button>
        </div>
        {user && (
          <div className="sign-in">
            <img src={userIcon} alt="sign-in" width="30px" />
            <div className="flex">
              <span>Hello</span>
              <h5>Recon</h5>
            </div>
            <div className="flex-row">
              <img src={heart} alt="fav" width="30px" />
              <img src={cart} width="30px" alt="cart" />
            </div>
          </div>
        )}
        {!user && (
          <div className="sign-in">
            <img src={userIcon} alt="sign-in" width="30px" />
            <div className="flex">
              <span>Sign In</span>
              <h5>Account</h5>
            </div>
            <div className="flex-row">
              <img src={heart} alt="fav" width="30px" />
              <img src={cart} width="30px" alt="cart" />
            </div>
          </div>
        )}
      </div>

      <div className="section">
        <div>
          <SelectOpt />
        </div>
      </div>
      <div className="cart">cart</div>
    </div>
  );
};

export default Navbar;
