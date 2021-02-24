import React from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {BiWalletAlt} from "react-icons/bi";
import {GoGraph} from "react-icons/go";
import {GiPiggyBank} from "react-icons/gi";
import {CgMail} from "react-icons/cg";
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import { NavLink } from "react-router-dom";

const  Menu = (props) => {
    return (
        <div>
            <div className="menu">
                <NavLink to="/home" activeClassName="selected">
                    <AiOutlineHome />

                </NavLink>
                <NavLink to="/WalletPage" activeClassName="selected">
                    <BiWalletAlt />
                </NavLink>
                <NavLink to="/SpendAnalysis" activeClassName="selected">
                    <GoGraph />
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;