import React from 'react';
import Discarded from './Discarded.js';
import './index.css';

class Discard extends React.Component{

    render(){
        return(
             <ul id="disc" className="list-inline">
                {this.props.card.map((card, i) => 
                <li key={i} className="list-inline-item"><Discarded  {...card} /> </li>)}
            </ul>
            
        );
    }
}

export default Discard;
