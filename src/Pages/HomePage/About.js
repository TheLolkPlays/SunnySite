import React from 'react'
import { SunnyjpgURL, SiteOwner } from '../../Universalcomponents/UniversalVariables'
import Line from "../../Universalcomponents/Line"

export default function About() {
    return (
        <div className='w3-content w3-justify w3-text-grey w3-padding-64' id="about">
            <h2 className='w3-text-light-grey'>{SiteOwner}</h2>
            <Line />
            <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit,</p>
            <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    )
}
