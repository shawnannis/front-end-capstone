import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const UnderConstruction = () => {
  return (
    <div class="bgimg">
  <div class="middle">
  <FontAwesomeIcon icon={faPersonDigging} size="7x" color='black' />
  <h2>Page under construction</h2>
  </div>
</div>
  );
};

export default UnderConstruction;
