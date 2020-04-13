import React from 'react';
import "./Categories.css";


function Categories(props) {
    return (
        <div className="categories">               
            <a href="/">
                Electronics
            </a>
            <button onClick={props.callback}>
                Homemade
            </button>
            <a href="">
                Comics
            </a>
            <a href="">
                Entertainment
            </a>
            <a href="">
                Health
            </a>
        </div>
    );
};

export default Categories;