import React from 'react';
import { ReferenceCardLeft, ReferenceCardRight } from './ReferenceCardHalf';
import { ReferenceCardContainer } from './ReferenceCardContainer';

export default function References() {
    return (
        <div className='w3-content'>
            <h3 className='w3-padding-24 w3-text-light-grey'>My Reputation</h3>

            <div className='w3-container w3-padding-16'>
                <ReferenceCardLeft
                    image="https://www.w3schools.com/w3images/bandmember.jpg"
                    name="Chris Fox."
                    title="CEO at Mighty Schools."
                    comment="John Doe saved us from a web disaster."
                />
                <ReferenceCardRight
                    image="https://www.w3schools.com/w3images/avatar_g2.jpg"
                    name="Rebecca Flex."
                    title="CEO at Company."
                    comment="No one is better than John Doe."
                />
            </div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div className='w3-padding-16'>
                <ReferenceCardContainer
                    image="https://www.w3schools.com/w3images/avatar_g2.jpg"
                    name="Rebecca Flex."
                    title="CEO at Company."
                    comment="No one is better than John Doe." />

                <ReferenceCardContainer
                    image="https://www.w3schools.com/w3images/avatar_g2.jpg"
                    name="Rebecca Flex."
                    title="CEO at Company."
                    comment="No one is better than John Doe." />
            </div>

        </div>
    );
}
