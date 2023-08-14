import PropTypes from 'prop-types';

export const PostHeader = ({date}) => {
  const dateStr = date ? new Date(date).toLocaleDateString() : 'now';
  return (
    <div className='post-header'>
      <div className='post-avatar'>
        <span className="material-icons">account_circle</span>
      </div>
      <div className='post-meta'>
        <div className='post-author'>User Name</div>
        <div className='post-created'>created: {dateStr}</div>
      </div>        
    </div>  
  )
}
PostHeader.propTypes = {
  date: PropTypes.number,
}