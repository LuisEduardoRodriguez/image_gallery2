import zodiacal2 from '../assets/img/zodiaco2.jpg'
import PropTypes from 'prop-types';

export const Zodiacal2 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={zodiacal2} alt="Caballero Escorpin" className="image" />
    </div>
  )
}

Zodiacal2.propTypes = {
  className: PropTypes.string
};