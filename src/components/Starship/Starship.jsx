import React from 'react';
import { Link } from 'react-router-dom'; 

const Starship = (props) =>
  <div className="starship details">
    <div className="row"><span>NAME:</span> <span>{props.name}</span></div>
    <div className="row"><span>MODEL:</span> <span>{props.model}</span></div>
    <div><Link to="/">RETURN</Link></div>
  </div>

export default Starship;
