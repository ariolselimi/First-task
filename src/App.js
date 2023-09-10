import './App.css';
import React from 'react';
import data from './data.json'; 
import Card from './components/Card'


const table = () => {
  return (
    <div className="container">
        {data.hero.map((item, index) => (
            <div key={index} className="item">
            <img src={item.image} alt={item.title} />
      <div>
            <h2>{item.title}</h2>
            <p>{item.paragraph}</p>
      </div>
    </div>
      ))}
      <Card card={data.card} />
    </div>
    
  );
};



export default table
