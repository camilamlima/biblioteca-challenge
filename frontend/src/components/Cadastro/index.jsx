import React from 'react'
import {Component} from 'react'
import './cadastro.css'


class Cadastro extends Component{
    render(){
        return (
        <cadastro>
            <section className="fundo">
                <form class="form-inline" action="/">
                    <fieldset className="formulario">
                        <legend>Cadastre seu livro</legend>

                        <p className="nome_livro">Escolha seu livro:</p>
                        <select name="book" required>
                            <option value="">Selecione</option> 
                            <option value="livro1">Valor 1</option> 
                            <option value="livro2">Valor 2</option>
                            <option value="livro3">Valor 3</option>
                        </select>
    
                        <p className="avaliacao">Avalie o estado de conservação do livro:</p> 
                        <select name="conservation_state" required>
                            <option value="">Selecione</option> 
                            <option value="100">Ótimo</option> 
                            <option value="75">Bom</option>
                            <option value="50">Regular</option>
                            <option value="25">Ruim</option>
                        </select>
                    
                        <br/>
                        <br/>
                        <section className="avaliacao" >
                    		<label for="rate">Avalie o conteúdo do livro:</label>
                            <input  name="rate" type="number" min="0" max="10" id="nota_livro" required />
                        </section>
                        <br/>
                        <br/>

                        <section className="observacao">
                            <label for="comments">Observações:</label>
                            <textarea name="comments" id="comentario" rows="5" cols="33" maxlength="256" placeholder="Deixe seu comentario:" required></textarea>
                        </section>
                    </fieldset>
                    <button type="submit" class="btn btn-outline-danger">Salvar</button>
		        </form>
		    </section>
        </cadastro>     
        )
    }
}

export default Cadastro