import './Avatar.css'
import PropTypes from 'prop-types';


Avatar.propTypes = {
    src: PropTypes.string.isRequired, 
  };

export default function Avatar({src}) {
  return (
    <div className="avatar">
    <img src={src} alt="avatar" />
  </div>
  )
}
