import React from 'react'
import {Component} from 'react'
import estante from './estante.png'
import './Banner.css'

class Banner extends Component{
    
    render(){
        return (
        <section className="jumbotron text-center">
            <div className="container">
            	<h1 className="brand_book">BookSuggestion</h1>
            	<div className="search_book">Pesquise os principais livros e veja suas avaliações com críticas e sugestões dele</div>
                
            	<nav class="navbar navbar-light bg-light">
					<form class="form-inline">
					<input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
				</nav>
				</div>
        </section>
        )
    }
}

export default Banner
