import React, { Component } from 'react';
import './Gmore.css';

class Gmore extends Component {
  constructor(props) {
    super(props);

    // Initialize the component's state
    this.state = {
      date: '', // Selected date
      time: '', // Selected time
      duration: '', // Selected duration
      bookedSlots: [], // Array to store booked slots
      availableSlots: [
        { id: 1, date: '2023-10-01', time: '09:00 AM', duration: '1 hour' },
        { id: 2, date: '2023-10-01', time: '11:00 AM', duration: '2 hours' },
        { id: 3, date: '2023-10-02', time: '10:00 AM', duration: '1 hour' },
        // Add more available slots as needed
      ],
    };
  }

  // Function to handle date selection
  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  };

  // Function to handle time selection
  handleTimeChange = (event) => {
    this.setState({ time: event.target.value });
  };

  // Function to handle duration selection
  handleDurationChange = (event) => {
    this.setState({ duration: event.target.value });
  };

  // Function to handle slot booking
  handleSlotBooking = () => {
    const { date, time, duration, bookedSlots } = this.state;

    // Check if the selected slot is available
    const slotToBook = { date, time, duration };
    const isSlotAvailable = this.isSlotAvailable(slotToBook);

    if (isSlotAvailable) {
      // Update the booked slots array
      const updatedBookedSlots = [...bookedSlots, slotToBook];
      this.setState({ bookedSlots: updatedBookedSlots });

      // Reset the selected options
      this.setState({ date: '', time: '', duration: '' });

      // You can add additional logic here, such as making an API call to confirm the booking.
    } else {
      // Slot is not available, handle accordingly (e.g., show an error message).
      console.log('Slot not available.');
    }
  };

  // Function to check if a slot is available
  isSlotAvailable = (slot) => {
    const { bookedSlots } = this.state;
    // Implement your logic to check if the slot is available based on date, time, and duration.
    // For example, you can check if there are no overlapping bookings for the selected slot.
    // You may need to parse and compare dates and times here.

    return true; // Replace with your actual availability logic
  };

  render() {
    const { date, time, duration, availableSlots, bookedSlots } = this.state;

    return (
      <>
      <div className='booking-container'>
        <h2>Cricket Slot Booking</h2>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={this.handleDateChange} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={this.handleTimeChange} />
        </div>
        <div>
          <label>Duration:</label>
          <select value={duration} onChange={this.handleDurationChange}>
            <option value="">Select duration</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
            <option value="4 hours">4 hours</option>
            <option value="5 hours">5 hours</option>
            {/* Add more duration options as needed */}
          </select>
        </div>
        <button onClick={this.handleSlotBooking}>Book Slot</button>

        <h3>Available Slots:</h3>
        <ul>
          {availableSlots.map((slot) => (
            <li key={slot.id}>
              Date: {slot.date}, Time: {slot.time}, Duration: {slot.duration}
            </li>
          ))}
        </ul>

        <h3>Booked Slots:</h3>
        <ul>
          {bookedSlots.map((slot, index) => (
            <li key={index}>
              Date: {slot.date}, Time: {slot.time}, Duration: {slot.duration}
            </li>
          ))}
        </ul>
        </div>
      </>
    );
  }
}

export default Gmore;