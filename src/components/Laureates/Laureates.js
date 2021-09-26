import React from 'react';
import './Laureates.css';

const Laureates = (props) => {
    const{name, country, img, monetaryAward, priceCategory, priceMotivation, priceShare, year } = props.laureate;
    console.log(props.laureate)
    return (
        <div>
            <div className="laureates-container">
                <div className="laureate">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <h2>Category: {priceCategory}</h2>
                    <h3>Year: {year}</h3>
                    <h3>Country: {country}</h3>
                    <h3>Prize Share: {priceShare}</h3>
                    <h3>Monetary Award: $ {monetaryAward}</h3>
                    <p>Prize Motivation: {priceMotivation}</p>
                    <div className="card-button">
                        <a href="https://en.wikipedia.org/wiki/Nobel_Prize"><i className="fab fa-wikipedia-w"></i></a>
                        <button className="btn">Nominate</button>                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laureates;