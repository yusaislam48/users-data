import React from 'react';

const ShowData = (props) => {
    const {name, username, address, email, image, phone} = props.user;
    console.log(props.user);
    return (
        <div>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
        </div>
    );
};

export default ShowData;