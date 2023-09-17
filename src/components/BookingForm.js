import React, { useState } from 'react';
import './BookingForm.css';
// import bookingImage from './bookingImage.jpg';
import axios from 'axios';

function BookingForm({ services }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [location, setLocation] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create the booking data object
    const bookingData = {
      name,
      email,
      phone,
      date,
      time,
      selectedService,
      location,
      comments
    };

    // Send the booking data to the server
    axios.post('/api/bookings', bookingData)
      .then((response) => {
        console.log('Booking submitted:', response.data);
        // Clear the form fields
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setSelectedService('');
        setLocation('');
        setComments('');
      })
      .catch((error) => {
        console.error('Error submitting booking:', error);
      });
  };

  const filteredServices = services
  ? services.filter((service) => {
      const serviceMatch = service.title.toLowerCase().includes(selectedService.toLowerCase());
      const locationMatch = service.location.toLowerCase().includes(location.toLowerCase());
      return serviceMatch && locationMatch;
    })
  : [];


  return (
    <div className='booking-form'>
      <div className="booking-form-container">
        <form onSubmit={handleSubmit} className="">
          <label htmlFor="name" className="booking-label">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="booking-input"
          /><br/><br/>

          <label htmlFor="email" className="booking-label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="booking-input"
          /><br/><br/>

          <label htmlFor="phone" className="booking-label">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="booking-input"
          /><br/><br/>

          <label htmlFor="date" className="booking-label">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="booking-input"
          /><br/><br/>

          <label htmlFor="time" className="booking-label">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="booking-input"
          /><br/><br/>

          <label htmlFor="selectedService" className="booking-label">Select Service:</label>
          <select
            id="selectedService"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className="booking-input"
          >
            <option value="">Select a service</option>
            {filteredServices.map((service, index) => (
              <option value={service.title} key={index}>
                {service.title}
              </option>
            ))}
          </select><br/><br/>

          <label htmlFor="location" className="booking-label">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="booking-input"
          /><br/><br/>

          <label htmlFor="comments" className="booking-label">Comments:</label><br/>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows="4"
            cols="30"
            className="booking-textarea"
          ></textarea><br/><br/>

          <input type="submit" value="Submit" className="booking-submit" />
        </form>
        {filteredServices.length === 0 && (
          <p>No results found for the selected service and location.</p>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
