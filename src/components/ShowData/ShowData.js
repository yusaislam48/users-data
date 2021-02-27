import React from 'react';
import './ShowData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const ShowData = (props) => {
    const {name, address, email, image, phone, annualSalary} = props.user;
    // console.log(annualSalary);
    return (
        <div className="user">
            <img src={image} alt={name}/>
            <h2>Name: <span className="color">{name}</span></h2>
            <p><span className="color">Email:</span> {email}</p>
            <p><span className="color">Phone:</span> {phone}</p>
            <p><span className="color">Address:</span> {address.street}, {address.suite}, {address.city}.</p>
            <button onClick= {() => props.handleAddPerson(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Person!</button>
        </div>
    );
};

export default ShowData;