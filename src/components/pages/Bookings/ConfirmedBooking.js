import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slicedLemon from './assets/sliced-lemon.png';

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
      <a href="./">
      {/* <img 
          className="dinner" 
          src={slicedLemon} 
          alt="sliced-lemon" 
        /> */}
      <div className="confirmation">
          <svg className="flex flex-row" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Arrow-Back-Circle-Sharp--Streamline-Ionic-Sharp" height="48" width="48"><desc>Arrow Back Circle Sharp Streamline Icon: https://streamlinehq.com</desc><path fill="#495e57" d="M0.48 24C0.48 36.9892 11.0109 47.52 24 47.52c12.9892 0 23.52 -10.5308 23.52 -23.52S36.9892 0.48 24 0.48C11.0109 0.48 0.48 11.0108 0.48 24Zm25.3292 -9.0563 -7.1894 7.2471h16.914v3.6184h-16.914l7.1894 7.2471 -2.5668 2.5488L11.7266 24l11.5158 -11.6051 2.5668 2.5488Z" stroke-width="1"></path></svg>
          <h3 className="flex flex-row">Return home</h3>
        
      </div>
      </a>
    </div>
  );
};

export default ConfirmedBooking;
