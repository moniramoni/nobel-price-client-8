import React, { useEffect, useState } from 'react';
import Laureates from '../Laureates/Laureates';
import './NobelPrice.css';

const NobelPrice = () => {
    const [laureates, setLaureates] = useState([])

    useEffect( () =>{
        fetch('./nobelprice.JSON')
        .then(res => res.json())
        .then(data => setLaureates(data))
    }, [])

    return (
        <div>
            
            <div className="nobel-prize-container">
                
                <div>
                    <div className="budget-div">
                        <p>The first Nobel Prizes were awarded in 1901. A gold medal, a diploma, and a monetary award of 10 million SEK, approx. US$1,145,000 (2020)</p>
                        <h1 className="total-budget">Total Budget: US$ = <span>1,145,000</span> </h1>
                    </div>
                    <div className="laureates-info">
                    {
                        laureates.map(laureate => <Laureates
                            key= {laureate.key} 
                            laureate= {laureate}
                            ></Laureates>)
                    }
                    </div>
                </div>
                <div className="nomination-events">
                    <h2>Nomination List</h2>
                </div>
            </div>
        </div>
    );
};

export default NobelPrice;