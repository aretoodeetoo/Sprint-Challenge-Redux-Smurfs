import React from 'react';

function SmurfList(props){
    return(
        <div>
        {props.smurfs.map(smurf => (
            <div className="singleSmurf">
            <div key={smurf.id}>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
            </div>
        ))}
        </div>
    );
}

export default SmurfList;