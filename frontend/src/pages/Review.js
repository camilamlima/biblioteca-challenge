import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import Cadastro from '../components/Cadastro';
import Footer from '../components/Footer';

export class ReviewPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="super_container">
                  <Navbar />
                  <Cadastro />
                  <Footer />
                </div>
            </Fragment>
        );
    }
}

