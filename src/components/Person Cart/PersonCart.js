import React from 'react';
import './PersonCart.css';

const PersonCart = (props) => {
    const {cart} = props;

    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalSalary = totalSalary + element.annualSalary;
    }
    return (
        <div className="flex">
            <div className="cart">
                <h2>Total Person Added:  <span className="colorBlack">{cart.length}</span></h2>
                <h3>Annual salary of this <span className="colorBlack">{cart.length}</span> person: <span className="colorBlack">${totalSalary}</span></h3>
            </div>
        </div>
    );
};

export default PersonCart;