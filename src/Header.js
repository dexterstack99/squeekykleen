import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="header">
        <Link to="/">
           <img
            className="header_logo" 
            src="https://tse1.mm.bing.net/th?id=OIP.7RVODd8O4cnMyJyphxgv7AAAAA&pid=Api&P=0&w=300&h=300"
            alt="Squeekykleen"
            ></img> 
        </Link>
          
            

            <div
            className="header_search"
            >
                <input
                className="header_searchInput"
                type="text"
                
                />
                
                <div className="header_searchIcon">
                <SearchIcon />
                </div>
                </div>
                <div className="header_nav">
                <Link to="/login">
                    <div className="header_option">
                        <span
                        className="header_optionLineOne"
                        >
                        Hello Guest
                        </span>
                        <span
                        className="header_optionLineTwo"
                        >
                        Sign In
                        </span>
                    </div>
                </Link>
                    </div>
                    <div className="header_option">
                    <span
                        className="header_optionLineOne"
                        >
                        Returns
                        </span>
                        <span
                        className="header_optionLineTwo"
                        >
                        & Orders
                        </span>
                    </div>

                    <div className="header_option">
                    <span
                        className="header_optionLineOne"
                        >
                        Your 
                        </span>
                        <span
                        className="header_optionLineTwo"
                        >
                        Prime
                        </span>
                    </div>
                    <div className="header_optionBasket">
                    <Link to="/checkout">
                        <ShoppingBasketIcon />
                    </Link>
                        
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </div>
    )
}

export default Header;
