import './FindDeals.css'
import Card from '../UI/Card'
import React, { useState } from 'react';
import DealDate from './DealDate';
const FindDeals = (props) => {
    const [initial,finaltitle] = useState(props.initial);

    const clickerHandler = () => {
       finaltitle("999")
    };

    return (

        <Card className="find-deals">
            <div className="find-deals__header">
                <DealDate date={props.date} />
            </div>
            <div className="find-deals__description">
                <div className="find_deals__image">Image</div>
                <h2>{props.name}</h2>
                <h3 className="find-deals__price">${props.final}</h3>
                <h4>${initial}</h4>
            </div>
            <button onClick={clickerHandler}>Save Deal !!</button>
        </Card>


    )
}
export default FindDeals;