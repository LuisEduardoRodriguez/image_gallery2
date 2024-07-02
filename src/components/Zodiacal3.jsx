import zodiacal3 from '../assets/img/zodiaco3.jpg'
import PropTypes from 'prop-types';

export const Zodiacal3 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={zodiacal3} alt="Caballero Virgo" className="image" />
    </div>
  )
}

Zodiacal3.propTypes = {
  className: PropTypes.string
};