import React from 'react';
import './Offers.css';
import big1 from './img/big1.png';
import horizontal1 from './img/horizontal1.png';
import horizontal2 from './img/horizontal2.png';
import horizontal3 from './img/horizontal3.png'; 
import horizontal4 from './img/horizontal4.jpg';
import horizontal5 from './img/horizontal5.png';
import horizontal6 from './img/horizontal6.png';
import horizontal7 from './img/horizontal7.png';
import horizontal8 from './img/horizontal8.png';
import normal1 from './img/normal1.png';
import normal2 from './img/normal2.png';
import normal3 from './img/normal3.png';
import normal4 from './img/normal4.png';
import normal5 from './img/normal5.jpg';
import vertical1 from './img/vertical1.png';
  
function Offers(props) {
    return(
        <React.Fragment>
        {props.category === 'Homepage' ?
            <PageContent currentCategory="Homepage"></PageContent>
        :
            <PageContent currentCategory="Other"></PageContent>

        }  
        </React.Fragment>
    );
};

function PageContent(props) {
    return (
        <>
            {props.currentCategory === "Homepage" ?
                <div className="offers">
                    {whichFragments(15, 0)}
                </div>

            : <React.Fragment>
                <div className="offers">
                    {whichFragments(3, 0)}
                </div>
            </React.Fragment>
            }
        </>
    );
}

function whichFragments(n, position) {
    const offers = [
        {key: "big", src: big1, alt: "Big Image 1"},
        {key: "horizontal", src: horizontal1, alt: "Horizontal Image 1"},
        {key: "horizontal", src: horizontal2, alt: "Horizontal Image 2"},
        {key: "horizontal", src: horizontal3, alt: "Horizontal Image 3"},
        {key: "horizontal", src: horizontal4, alt: "Horizontal Image 4"},
        {key: "horizontal", src: horizontal5, alt: "Horizontal Image 5"},
        {key: "horizontal", src: horizontal6, alt: "Horizontal Image 6"},
        {key: "horizontal", src: horizontal7, alt: "Horizontal Image 7"},
        {key: "horizontal", src: horizontal8, alt: "Horizontal Image 8"},
        {key: "vertical", src: vertical1, alt: "Vertical Image 1"},
        {key: "normal", src: normal1, alt: "Normal Image 1"},
        {key: "normal", src: normal2, alt: "Normal Image 2"},
        {key: "normal", src: normal3, alt: "Normal Image 3"},
        {key: "normal", src: normal4, alt: "Normal Image 4"},
        {key: "normal", src: normal5, alt: "Normal Image 5"}
    ]


    var reactHTML = [];
    var i = position;
    for(i; i < n + position; i++) {
        reactHTML.push(
            <div className={offers[i].key}>
                <img src={offers[i].src} alt={offers[i].alt}/>
            </div>
        );
    }

    return reactHTML;
}

export default Offers;