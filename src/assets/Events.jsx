import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const eventsList = [
  {
    id: 1,
    event: "Tech Fest 2024",
    description: "A grand event showcasing the latest in technology.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqNg3iD3byjbIOESI1RtsNn7eGrJnjXypOeZ_34ck4ZIp99ecBopNbj539pfxwy3lqJs&usqp=CAU'
  },
  {
    id: 2,
    event: "Annual Sports Day",
    description: "A day filled with exciting sports activities.",
    image: 'https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2149004634.jpg?size=626&ext=jpg&ga=GA1.1.1866393873.1697230672&semt=ais_user'
  },
  {
    id: 3,
    event: "Cultural Fest",
    description: "Celebrating diverse cultures with music and dance.",
    image: 'https://images.shiksha.com/mediadata/images/articles/1398182882phpVGC9y8.jpeg'
},
  {
    id: 4,
    event: "Science Fair",
    description: "Showcasing innovative science projects by students.",
    image: 'https://img.freepik.com/free-photo/futuristic-time-machine_23-2151599415.jpg?size=626&ext=jpg&ga=GA1.1.1866393873.1697230672&semt=sph'
  }
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsList.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-container">
      <div className="event-card">
        <img
          src={eventsList[currentEvent].image}
          alt={eventsList[currentEvent].event}
          className="event-image"
        />
        <div className="event-details">
          <h3 className="event-name">{eventsList[currentEvent].event}</h3>
          <p className="event-description">{eventsList[currentEvent].description}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;