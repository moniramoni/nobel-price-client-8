import React from 'react';
import './Laureates.css';

const Laureates = (props) => {
    const{name, country, img, monetaryAward, priceCategory, priceMotivation, priceShare, year } = props.laureate;
    // console.log(props)
    return (
        <div>
            <div className="laureates-container">
                {/* Laureate card information */}
                <div className="laureate">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <h3>Category: {priceCategory}</h3>
                    <h3>Year: {year}</h3>
                    <h3>Country: {country}</h3>
                    <h3>Prize Share: {priceShare}</h3>
                    <h3>Monetary Award: $ {monetaryAward}</h3>
                    <p>Prize Motivation: {priceMotivation.slice(1, 45)}</p>
                    <div className="card-button">
                        <a href="https://en.wikipedia.org/wiki/Nobel_Prize"><i className="fab fa-wikipedia-w"></i></a>
                        <button onClick={ () => props.AddToNominate(props.laureate)} className="btn">Nominate</button>                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laureates;