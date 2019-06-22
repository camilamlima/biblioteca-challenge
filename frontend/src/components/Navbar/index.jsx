import React from 'react'
import {Component} from 'react'
import logo from './logo.gif'
import './navbar.css'

class Navbar extends Component{
    render(){
        return (
           <header>
                <div className="navbar">
                 <img className="rounded" src={logo} alt="" />     
                 <div className="title">
                    <h1 className="marketing_brand">BookSuggestion</h1>
                 </div>
                </div>    
           </header>        
        )
    }
}

export default Navbar


 	

	