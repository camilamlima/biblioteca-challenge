import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="super_container">
                  <Navbar />
                  <Banner />
                  <Footer />
                </div>
            </Fragment>
        );
    }
}
