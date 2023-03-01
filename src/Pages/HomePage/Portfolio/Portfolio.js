import React from 'react';
import PhotoAlbum from "react-photo-album";
import Line from "../../../Universalcomponents/Line"
import { blob } from '../../../Universalcomponents/UniversalVariables';

const photos = [
    { src: `${blob}/images/Images/Ahsoka.jpg`, width: 960, height: 951 },
    { src: `${blob}/images/Images/Tattoo1.jpg`, width: 409, height: 409 },
    { src: `${blob}/images/Images/Hunty.jpg`, width: 640, height: 640 },
    { src: `${blob}/images/Images/Shaky.jpg`, width: 1500, height: 1000 },
    { src: "https://www.w3schools.com/w3images/chef.jpg", width: 800, height: 533 },
    { src: "https://www.w3schools.com/w3images/wedding.jpg", width: 800, height: 500 },
    { src: "https://www.w3schools.com/w3images/p6.jpg", width: 400, height: 300 },

];

const GalleryInput = () => <PhotoAlbum layout="columns" photos={photos} columns="2" />;


function Gallery() {
    return (
        <div id="photos" className="w3-content">
            <h2 class="w3-text-light-grey">My Photos</h2>
            <Line/>
            <GalleryInput />
        </div>
    )
}
export default Gallery