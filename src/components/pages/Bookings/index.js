import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAPI, submitAPI } from '../../../utils/lemonAPI';
import pages from '../../../utils/pages';
import BookingForm from './BookingForm';
import divider from '../Home/assets/divider.png';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('confirmedBooking').path);
  }; 

  return (
    <>
    <div className="page-header"><h2>Table Reservation</h2>
      <img src={divider} alt="divider" className="divider" /></div>
    <div className="bookings">
      
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
    </>
  );
};

export default Bookings;
