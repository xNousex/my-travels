import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination:"Sydney, beautiful place!!",
        country:'Autralia',
        photo:"https://image.freepik.com/free-photo/beautiful-sydney-bay-view-sunset-from-mrs-macquarie-s-chair-viewpoint-evening_36331-15.jpg",
        distance:"16965",
    },
    {
        destination:"Awesommmme!!!",
        country:'Iceland',
        photo:"https://image.freepik.com/photos-gratuite/cascade-landmark-blue-water-mountain_1232-4516.jpg\"",
        distance:"2158",
    },
    {
        destination:"Surfin'USA!!!!!",
        country:'USA',
        photo:"https://image.freepik.com/photos-gratuite/coucher-du-soleil-santa-monica-californie-roue-pier-ferrys_79295-3336.jpg",
        distance:"15952",
    },
    {
        destination:"Nice Really nice",
        country:'New Zealand',
        photo:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/25/16/new-zealand.jpg?w968h681",
        distance:"19061",
    },
    {
        destination:"Beautiful wild",
        country:'Croatia',
        photo:"https://www.allibert-trekking.com/iconographie/f7/PA1_les-perles-de-la-cote-dalmate.jpg",
        distance:"1081",
    }
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel country={travel.country} photo={travel.photo} destination={travel.destination} distance={travel.distance} />
        ))}
    </div>
);

export default Travels;
