import React from 'react';
import PriceCard from './PriceCard';

export default function Prices() {
    const basicFeatures = [
        "Web Design",
        "Photography",
        "5GB Storage",
        "Mail Support"
    ];

    const proFeatures = [
        "Web Design",
        "Photography",
        "50GB Storage",
        "Endless Support"
    ];

    return (
        <div className='w3-content'>
            <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
            <div className='w3-row-padding' style={{ margin: '0 -16px' }}>
                <PriceCard
                    title="Basic"
                    features={basicFeatures}
                    storage="5GB Storage"
                    support="Mail Support"
                    price="$ 10"
                />
                <PriceCard
                    title="Pro"
                    features={proFeatures}
                    storage="50GB Storage"
                    support="Endless Support"
                    price="$ 25"
                />
            </div>
        </div>
    );
}
