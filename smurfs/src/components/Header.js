import React from 'react'
import {NavLink } from "react-router-dom";

const header={
    height: '60px',
    color: 'white',
    background: '#4F4A47',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

const style ={
    color: 'white',
    textDecoration: 'none',
    opacity: '.6'
}


const Header = () => {

    return (
        <div style={header}>

             <NavLink style= {style} activeStyle={{
                        textDecoration: "underline",
                        color: "white",
                        opacity: "1"
                        }} to="/"> Home </NavLink>


	         <NavLink style={style} activeStyle={{
                        textDecoration: "underline",
                        color: "white",
                        opacity: "1"
                        }} to="/add"> Add A Smurf </NavLink>


             <NavLink style={style} activeStyle={{
                        textDecoration: "underline",
                        color: "white",
                        opacity: "1"
                        }} to ="/about">About</NavLink>
        </div>
    )
}


export default Header