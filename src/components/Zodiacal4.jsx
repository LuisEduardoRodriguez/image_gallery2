import zodiacal4 from '../assets/img/zodiaco4.jpg'
import PropTypes from 'prop-types';

export const Zodiacal4 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={zodiacal4} alt="Caballero Tauro" className="image" />
    </div>
  )
}

Zodiacal4.propTypes = {
  className: PropTypes.string
};