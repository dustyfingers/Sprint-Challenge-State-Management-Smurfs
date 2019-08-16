import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import SmurfContext from '../contexts/SmurfContext';

const SmurfsDashboard = () => {
    const smurfs = useContext(SmurfContext);
    return (
        <div>
            <h1>SMURFS!</h1>
            {smurfs.map(({ name, age, height, id }) => (
                <div key={id}>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{height}</p>
                </div>
            ))}
            <Link to="/new-smurf"><button>ADD A NEW SMURF</button></Link>
        </div>
    )
}

export default SmurfsDashboard;
