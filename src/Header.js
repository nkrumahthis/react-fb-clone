import React from 'react'
import "./Header.css";

import { Avatar, IconButton } from "@material-ui/core";

import { useStateValue } from "./StateProvider";
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, Storefront, Subscriptions, SupervisedUserCircle } from '@material-ui/icons';

function Header() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <div className="header__input">
                    <Search/>
                    <input type="text" name="" id="" placeholder="search fb-clone"/>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <Home fontSize="large"/>
                </div>
                <div className="header__option">
                    <Flag fontSize="large"/>
                </div>
                <div className="header__option">
                    <Subscriptions fontSize="large"/>
                </div>
                <div className="header__option">
                    <Storefront fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
