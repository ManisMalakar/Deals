import FindDeals from "./FindDeals";
import './Deals.css'
import Card from '../UI/Card'
import React from 'react';

const Deals = (props) => {
    return (
        <Card className="deals">
            {props.item.map(deals => 
            <FindDeals
                date={deals.date}
                name={deals.name}
                initial={deals.initial}
                final={deals.final} />
            )}
        </Card>
    )
}
export default Deals;