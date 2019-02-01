import React from 'react';

function SmurfList(props){
    return(
        {props.smurfs.map(smurf => (
            <div className="singleSmurf">
            <div key={smurf.id}>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
            </div>
        ))}
    );
}

export default SmurfList;