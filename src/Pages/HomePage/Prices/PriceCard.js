import React from 'react';

export default function PriceCard({ title, features, storage, support, price }) {
    return (
        <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li className="w3-dark-grey w3-xlarge w3-padding-32">{title}</li>
                {features.map(feature => (
                    <li key={feature} className="w3-padding-16">{feature}</li>
                ))}
                <li className="w3-padding-16">{storage}</li>
                <li className="w3-padding-16">{support}</li>
                <li className="w3-padding-16">
                    <h2>{price}</h2>
                    <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                </li>
            </ul>
        </div>
    );
}
