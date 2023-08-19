import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const New = ({elem}) => {
  return (
    <Link to={elem.id} className='new'>
      <div className='new-img-box' data-id={elem.id}>
        <img className='new-img' src={elem.img} alt="img" />
      </div>
      <div className='new-title'>{elem.title}</div>
      <div className='new-text'>{elem.content}</div>
    </Link>
  )
}

New.propTypes = {
  elem: PropTypes.object
}