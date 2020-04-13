import React, {useState} from 'react';
import './Body.css';
import Categories from '../../categories/Categories';
import Offers from '../../offers/Offers';

function Body(){
    const [category, setCategory] = useState("Homepage");

    const changeCategory = () => {
        setCategory("Other");
    } 

    return (
        <div className="body">
            <Categories category={category} callback={changeCategory}></Categories>
            <Offers category={category}></Offers>
        </div>
    );
};

export default Body;

