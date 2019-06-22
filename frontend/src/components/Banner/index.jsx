import React from 'react'
import {Component} from 'react'
import layout from './layout.jpg'
import './Banner.css'

class Banner extends Component{
    
    render(){
        return (
        <section className="jumbotron text-center">
            <div className="container">
            	<h1 className="brand_book">BookSuggestion</h1>
            	<div className="search_book">Para avaliar os seus livros digite seu usuário</div>
					<form class="form-online">
					<input class="form-control mr-sm-2" type="search" placeholder="username" aria-label="Search"/>
					<button type="submit" class="btn btn-outline-danger">Buscar</button>
				</form>
				</div>
        </section>
        )
    }
}

export default Banner
