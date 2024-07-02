import zodiacal6 from '../assets/img/zodiaco6.jpg'
import PropTypes from 'prop-types';

export const Zodiacal6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={zodiacal6} alt="Caballero Piscis" className="image" />
    </div>
  )
}

Zodiacal6.propTypes = {
  className: PropTypes.string
};