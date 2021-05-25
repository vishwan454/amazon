import { Search, ShoppingBasket, SportsBasketball } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import "./Header.css"
import { useStateValue } from './StateProvider'

function Header() {
    const [{basket, user}, dispatch] = useStateValue()
    const login =()=>{
        if(user){
            auth.signOut()
        }
    }
    console.log(basket);
    return (
        <nav className="header">

            {/* logo */}
            <Link to="/login">
                <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UkrE2FKzReOZBiG7o6WULcu6Gr9GTz4dY6xitdvVj2QYhynrUdr2fHwzlDU1hcV36A&usqp=CAU" alt="amazon logo" />
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchIcon"/>
            </div>
        
            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link className="header__link" to={!user && "/login"}>
                    <div onClick={login} className="header__option">
                        <span className="header__option1">hello 
                        {user?.email}</span>
                        <span className="header__option2">{user? 'Sign Out':'Sign In'}</span>
                    </div>
                    
                </Link>

                {/* 2nd link */}
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__option1">returns</span>
                        <span className="header__option2">Order</span>
                    </div>
                    
                </Link>

                {/* 3rd link */}
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__option1">your</span>
                        <span className="header__option2">Prime</span>
                    </div>
                    
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* bucket icon */}
                        <ShoppingBasket/>
                        {/* number */}
                        <span className="header__option2 header__basketCount" >{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* basket icon with number */}
        </nav>
    )
}

export default Header
