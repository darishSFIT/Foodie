import React from 'react'
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
export default function Header() {
  
  const {user,logout}= useAuth();
  const {cart} = useCart();

  const handleRedirectClick = () => {
      window.location.href = 'http://localhost:3001';
    };

    return(
    <header className={classes.header}>
        <div className={classes.container}>
            <ul className={classes.logoul}>
            <li className={classes.menu_container}>
            <div>
            <Link to="/" className={classes.logo}>
                Foodie
            </Link>
            
            <Link to="/table-booking" className={classes.booking} onClick={handleRedirectClick}>
                Foodie-reservations 
            </Link>
            </div>
            </li>
            </ul>
            <nav>
                <ul>
                    {
                        user? (
                        <li className={classes.menu_container}>
                            <Link to="/profile">{user.name}</Link>
                            <div className={classes.menu}>
                                <Link to="/profile">profile</Link>
                                <Link to="/orders">Orders</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </li> 
                        ) : (
                        <Link to="/login">Login</Link>
                    )}
                        <li>
                            <Link to="/cart">Cart 
                            {<span className={classes.cart_count}>{cart.totalCount}</span>}
                            </Link>
                        </li>
                </ul>
            </nav>
        </div>
    </header>
    );
}