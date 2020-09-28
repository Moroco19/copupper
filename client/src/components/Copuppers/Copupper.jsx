import React from 'react';
import { Link } from 'react-router-dom';

const Copupper = ({name, breed, age, id}) => (
    <Link to={`/copuppers/${id}`} className="listed-copuppers">
        <div className="copupper">
            <h3>{name}</h3>
            <p>Breed: {breed} | Age: {age}</p>
        </div>
    </Link>
)

export default Copupper;