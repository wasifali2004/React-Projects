import React from 'react'
import "../css/Menu.css"
import {MenuList} from "../Helper/MenuList"
import MenuItems from "../Helper/MenuItems"
import "../css/Menu.css"
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'

function Menu() {
  return (
    <>
    <Navbar/>
    <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
        {MenuList.map((item, key) => {
         return <MenuItems key={key} image={item.image} name={item.name} price={item.price} />;
        })}

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Menu