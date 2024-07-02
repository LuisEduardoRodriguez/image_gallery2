import zodiacal1 from '../assets/img/zodiaco1.jpg'
import PropTypes from 'prop-types';

export const Zodiacal1 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={zodiacal1} alt="Caballero Aries" className="image" />
    </div>
  )
}

Zodiacal1.propTypes = {
  className: PropTypes.string
};
