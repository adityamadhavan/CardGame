import React from 'react';
import './App.css';
import Card from './Card.js';

class Hand extends React.Component{

    render(){
        return(
            <div>
                <ul className="list-inline">
                    {this.props.card.map((card, i) => <li className="list-inline-item"><Card key={i} {...card} /> </li>)}
                </ul>
            </div>
        );
    }
}

export default Hand;
