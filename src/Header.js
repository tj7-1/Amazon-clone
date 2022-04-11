import React from 'react';
import './Header.css';
//import logo from "../src/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = ()=>{
    const [{basket,user},dispatch]=useStateValue();
    
    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <>
        <div className='header'>

        <Link to='/'>

            {/* <img src={logo} alt="logo"/> */}
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
         
        </Link>
           
        <div className="header_search">
            <input className="header_searchinput" type="text"/>
            <SearchIcon className="header_searchicon" />
        </div>

        <div className="header_nav">
        <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header_option">
                <span className="header_optionlineone">Hello Guest</span>
                <span className="header_optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
        </Link>
            <div className="header_option">
                <span className="header_optionlineone">Returns</span>
                <span className="header_optionlinetwo">& Orders</span>
            </div>
            <div className="header_option">
                <span className="header_optionlineone">Your</span>
                <span className="header_optionlinetwo">Prime</span>
            </div>
            <Link to='/checkout'>
            <div className="header_optionbasket">                
            <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>       {/*{basket?.length} = this is called optional chaining and it if you any reason dont have any value it wont freak out and handle the area */}
            </div>
            </Link>
            
        </div>

        </div>
        </>
    )
}

export default Header;
