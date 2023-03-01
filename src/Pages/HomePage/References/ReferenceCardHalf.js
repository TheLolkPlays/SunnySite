import React from 'react';

export function ReferenceCardLeft(props) {
    const { image, name, title, comment } = props;

    return (
        <div className="w3-half">
            <img src={image} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
            <p><span className="w3-large w3-margin-right">{name}</span>{title}</p>
            <p>{comment}</p>
        </div>
    );
}

export function ReferenceCardRight(props) {
    const { image, name, title, comment } = props;

    return (
        <div className="w3-half">
            <img src={image} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
            <p><span className="w3-large w3-margin-right">{name}</span>{title}</p>
            <p>{comment}</p>
        </div>
    );
}
