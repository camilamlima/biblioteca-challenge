import React from 'react'
import {Component} from 'react'
import logo from './logo.png'
import './navbar.css'

class Navbar extends Component{
    render(){
        return (
           <header>
                <div className="navbar">
                 <img className="rounded" src={logo} width="45" height="45" />               
                    <h1 className="marketing_brand">BookSuggestion</h1>
                </div>    
           </header>        
        )
    }
}

export default Navbar


 	

	