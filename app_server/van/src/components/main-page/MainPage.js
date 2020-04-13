import React from 'react';

import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import "./MainPage.css";

function MainPage() {    
    return(
        <div className="container">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;