import React from 'react';    
import './Smurf.css';

function SmurfForm(props){
    const handleClick = e => {
        e.preventDefault();
        props.addNewSmurf();
    }

    return(
        <div className="smurfForm">
        <h1 style={{color: 'blue'}}>Add A Smurf!</h1>
        <form>
            <input 
            type="text"
            name="name"
            placeholder="Name"
            onChange={props.changeHandler}
            value={props.smurf.name}
            />
            <input 
            type="text"
            name="age"
            placeholder="Age"
            onChange={props.changeHandler}
            value={props.smurf.age}
            />
            <input 
            type="text"
            name="height"
            placeholder="Height"
            onChange={props.changeHandler}
            value={props.smurf.height}
            />
            <div className="formButton">
            <button onClick={handleClick}>Click to Add Smurf</button>
            </div>
        </form>
        </div>
    );
}

export default SmurfForm;