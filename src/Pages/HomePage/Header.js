import React from 'react'
import { blob, SunnyURL, SiteOwner } from '../../Universalcomponents/UniversalVariables'

export default function Header() {
    return (

        //The span element in this case is used to wrap the word "Jeg er" in a separate element. This is done so that the word "Jeg er" can be hidden on small screens (using the w3-hide-small class) while still allowing the rest of the text ("Solveig Grønseth") to be displayed.
        <div>
            <header className='w3-container w3-padding-32 w3-center w3-black'>
                <h1 className='w3-jumbo'><span className='w3-hide-small'>Jeg er </span>
                    {SiteOwner}
                    <span className='w3-hide-small'>.</span></h1>
                <p>Photographer and Web Designer.</p>
                <img src={`${blob}${SunnyURL}`} alt="Solveig Grønseth" className='w3-image' width="992" height="1108"></img>
            </header>
        </div >
    )
}
