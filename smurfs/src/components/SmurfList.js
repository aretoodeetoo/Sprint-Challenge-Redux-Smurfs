import React from 'react';
import './Smurf.css';

function SmurfList(props){
    return(
        <div className="smurfWrapper">
        {props.smurfs.map(smurf => (
            <div  className="singleSmurf">
            <div>
            <div key={smurf.id}>{smurf.name}</div>
            <div>{smurf.age} years old</div>
            <div>{smurf.height} tall</div>
            </div>
            <div className="deleteButton">
            <img src="https://img.icons8.com/dusk/18/000000/clear-symbol.png" alt="delete" onClick={() => props.deleteSmurf(smurf.id)}/>
            </div>
            </div>
        ))}
        </div>
    );
}

export default SmurfList;