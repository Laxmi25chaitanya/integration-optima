import React from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {BiWalletAlt} from "react-icons/bi";
import {GoGraph} from "react-icons/go";
import {GiPiggyBank} from "react-icons/gi";
import {CgMail} from "react-icons/cg";
import {RiMoneyDollarCircleLine} from "react-icons/ri";

const  Menu = (props) => {
    return (
        <div>
            <div className="menu">
                <a href="/home" className="active">
                    <AiOutlineHome />
                </a>
                <a href="/WalletPage">
                    <BiWalletAlt />
                </a>
                <a href="/SpendAnalysis">
                    <GoGraph />
                </a>
                <a href="/spendanalysis/budgetanalysis">
                    <GiPiggyBank />
                </a>
                <a>
                    <CgMail />
                </a>
                <a >
                    <RiMoneyDollarCircleLine />
                </a>
            </div>
        </div>
    )
}

export default Menu;