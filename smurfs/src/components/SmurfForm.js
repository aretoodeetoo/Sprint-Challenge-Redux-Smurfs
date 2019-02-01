import React from 'react';

function SmurfForm(props){
    const handleClick = e => {
        e.preventDefault();
        props.addNewSmurf();
    }

    return(
        <div>
        <h1>Add A Smurf!</h1>
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

            <button onClick={handleClick}>Click to Add Smurf</button>
        </form>
        </div>
    );
}

export default SmurfForm;