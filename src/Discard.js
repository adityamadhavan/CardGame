import React from 'react';
import Discarded from './Discarded.js';
import './discard.css';

class Discard extends React.Component{

    render(){
        return(
             <ul className="list-inline disc">
                {this.props.card.map((card, i) => 
                <li key={i} className="list-inline-item"><Discarded  {...card} /> </li>)}
            </ul>
            
        );
    }
}

export default Discard;
