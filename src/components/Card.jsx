import React from 'react';
import './card.css';


const Card = ({card}) => {


    return (
    <div className="container">
        {card.map((item, index) => (
        <div key={index} className="card">
            <div className="date">{item.date}</div>
            <div className="top-section">
            <div className="button-and-image">
                <button className="green-button" style={{backgroundColor: item.color, width: item.width}}>{item.buttonText}</button>
                <img src={item.profilePic} alt="Profile" className="profile-pic" />
            </div>
                <h4>{item.h4}</h4>
            </div>
                <div className="text-content">
            <p>{item.paragraph}</p>
            </div>
        <button className="download-button">Download</button>   
    </div> 
    ))}
</div>
);
};


export default Card;
