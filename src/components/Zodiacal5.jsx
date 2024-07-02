import zodiacal5 from '../assets/img/zodiaco5.jpg'
import PropTypes from 'prop-types';

export const Zodiacal5 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={zodiacal5} alt="Caballero Capricornio" className="image" />
    </div>
  )
}

Zodiacal5.propTypes = {
  className: PropTypes.string
};