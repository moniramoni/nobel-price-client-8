import React from 'react';
import './Nominate.css';

const Nominate = (props) => {
    console.log(props)
    const {nominate} = props;
    let total = 0;
    for(const nominy of nominate){
        total = total + nominy.monetaryAward;
    }
    
    return (
        <div>
            <h3>Total Added: {props.nominate.length}</h3>
            <h3>Total Monetary Award: {total}</h3>
            {
               nominate.map(cartItem => <Cartitem
               cartItem = {cartItem}
               ></Cartitem>)
           }    
        </div>
    );
    function Cartitem (props){
        const {name, country, monetaryAward, priceCategory, year} = props.cartItem;

        return <div className="catitem">
            <div>
                <p>Name: {name}</p>
                <h3>Country: {country}</h3>
                <h3>Price Category: {priceCategory}</h3>
                <h3>MonetaryAward: {monetaryAward}</h3>
                <h5>Year: {year}</h5>
            </div>
        </div>

    }
};

export default Nominate;