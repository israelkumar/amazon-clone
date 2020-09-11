import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    
    const [{basket,user},dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" alt="logo" 
            src="amazon_PNG11.png"
            />
            </Link>
                
        <div className="header_search"> 
          <input
            className="header_searchInput"
            type="text" />
           <SearchIcon className="header_searchIcon" />
            {/* Logo */}

        </div>
        
        <div className="header_nav">
            <Link to={!user && "./login"}>
            <div onClick={handleAuthenticaton} className="header_option">
                <span className="header_optionLine1">{!user ? 'Guest' : user.email}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <div className="header_option">
                <span className="header_optionLine1">Returns</span>
                <span className="header_optionLine2">& Orders</span>
            </div>
            <Link to='/checkout'>
            <div className="header_optionBasket">
                <ShoppingBasketIcon></ShoppingBasketIcon>
                <span className="header_optionLine2 header_basketCount">
                    {basket?.length}</span>
            </div>
            </Link>
        </div>
        
        

        </div>
    );
}

export default Header
