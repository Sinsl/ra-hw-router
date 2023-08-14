import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { PostHeader } from './PostHeader';

export const Post = ({data}) => {
  return (
    <Link className='post' data-id={data.id} to={'posts/' + data.id}>      
      <PostHeader date={data.created}/>
      <div className='post-content'>{data.content}</div>
    </Link>
  );
}

Post.propTypes = {
  data: PropTypes.object,
}