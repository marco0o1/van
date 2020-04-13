// importart libreria react
import React from 'react';

import './Header.css';

//  crear function que regresa el html
function Header() {
    return(
        <nav className="header">
            <div className="home">Home</div>
            <div className="search">Search</div>  
            <div className="logout">Logout</div>
        </nav>
    );
}

// exportar function creada como default
export default Header;