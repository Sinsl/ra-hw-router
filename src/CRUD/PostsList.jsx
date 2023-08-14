import { useContext } from "react";
import { PingContext } from "../App";
import { useHttpRequest } from "../http/useHttpRequest";
import { Post } from "./Post";
import './posts.css';
import { Link } from "react-router-dom";

export const PostsList = () => {
  const isPing = useContext(PingContext);
  const [data, loading, error] = useHttpRequest(import.meta.env.VITE_URL + '/posts'); 

  return (
    <div className="container">
      {!isPing && <div className="server">Сервер на Render запускается. Минуточку...</div>}
      {error && <div className='error'>Ошибка при загрузке постов</div>}
      {isPing && 
        <div className="posts">
          <div className="post-btn-box">
            {<Link to={'posts/new'} className="posts-btn">Создать пост</Link>}
          </div>
          {loading && 
            <div className="posts-list">{data.map(post => (<Post key={post.id} data={post}/>))}</div>
          }
        </div>      
      }      
    </div>
    
  )
}