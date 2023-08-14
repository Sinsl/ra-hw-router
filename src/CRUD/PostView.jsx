import PropTypes from 'prop-types';
import { useHttpRequest } from "../http/useHttpRequest";
import { Link, useParams, useNavigate } from "react-router-dom";
import { PostHeader } from './PostHeader';

export const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL + '/posts/' + id;
  const [data, loading, error] = useHttpRequest(url);

  const clickHandler = async (e) => {
    e.preventDefault();
    console.log('delete')
    const res = await fetch(url, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    if (res.ok) {
      navigate('/ra-hw-router/task2');
    }
  }
  return (
    <div className="container">
      {error && <div className='error'>Ошибка при загрузке поста</div>}
      {loading && 
        <div className="posts">
          <div className="post-btn-box">{
            <Link className="posts-btn" onClick={() => navigate(-1)}>
              <span className="material-icons arrow-back">arrow_back</span>
              <span>Назад</span> 
            </Link>}
          </div>
          <div className='post' data-id={data.post.id}>
            <PostHeader date={data.post.created}/>
            <div className='post-content'>{data.post.content}</div>
          </div>
          <div className="post-btn-box">
            {<Link to={'/ra-hw-router/task2/posts/change/' + id} className="posts-btn">Изменить</Link>}
            {<Link className="posts-btn btn-red" onClick={clickHandler}>Удалить</Link>}
            </div>
        </div>      
      }      
    </div>
    
  );
}

PostView.propTypes = {
  id: PropTypes.string,
}