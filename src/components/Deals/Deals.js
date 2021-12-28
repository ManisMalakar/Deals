import FindDeals from "./FindDeals";
import './Deals.css'
import Card from '../UI/Card'
import React from 'react';

const Deals = (props) => {
    return (
        <Card className="deals">
            <FindDeals date={props.item[0].date}
                name={props.item[0].name}
                initial={props.item[0].initial}
                final={props.item[0].final} />
                
        </Card>
    )
}
export default Deals;