import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewSmurfForm = () => {
    const [values, setValues] = useState({
        name: '',
        height: '',
        age: ''
    });
    const handleNewSmurf = (evt) => {
        evt.preventDefault();
        console.log(values);
        const res = axios.post('http://localhost:3333/smurfs', values);
        console.log(res);
    };

    const updateValues = ({ target }) => {
        setValues({ ...values, [target.name]: target.value })
    };

    return (
        <>
            <form onSubmit={handleNewSmurf}>
                <input type="text" name="name" placeholder="Smurf name" onChange={updateValues} />
                <input type="text" name="age" placeholder="Smurf age" onChange={updateValues} />
                <input type="text" name="height" placeholder="Smurf height" onChange={updateValues} />
                <button type="submit">CREATE NEW SMURF</button>
            </form>
            <Link to="/"><button>BACK TO DASHBOARD</button></Link>
        </>
    )
}

export default NewSmurfForm;
