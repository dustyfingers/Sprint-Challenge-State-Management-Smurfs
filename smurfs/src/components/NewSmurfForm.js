import React from 'react';
import { Link } from 'react-router-dom';

const NewSmurfForm = () => {
    return (
        <form>
            <input type="text" name="name" placeholder="Smurf name" />
            <input type="text" name="age" placeholder="Smurf age" />
            <input type="text" name="height" placeholder="Smurf height" />
            <button>CREATE NEW SMURF</button>
            <Link to="/"><button>BACK TO DASHBOARD</button></Link>
        </form>
    )
}

export default NewSmurfForm;
