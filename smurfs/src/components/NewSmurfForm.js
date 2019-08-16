import React from 'react';
import { Link } from 'react-router-dom';

const NewSmurfForm = () => {
    return (
        <form>
            <input type="text" name="name" placeholder="Smurf name" />

            <Link to="/"><button>DASHBOARD</button></Link>
        </form>
    )
}

export default NewSmurfForm;
