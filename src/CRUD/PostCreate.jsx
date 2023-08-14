import { Link, useNavigate, useParams } from "react-router-dom";
import { PostHeader } from "./PostHeader";
import { useRef, useEffect, useState } from 'react';

export const PostCreate = () => {
  const inputRef = useRef('');
  const [date, setDate] = useState(0);
  const { id } = useParams();
  let url = import.meta.env.VITE_URL + '/posts';
  const navigate = useNavigate();
  
  const opts = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await fetch(url + '/' + id, {});
        const result = await res.json();
        inputRef.current.value = result.post.content;
        setDate(result.post.created);
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault();
    opts.body = JSON.stringify({ content: inputRef.current.value });
    opts.method = id ? 'put' : 'post';
    const urlReq = id ? url + '/' + id : url;
    const res = await fetch(urlReq, opts);
    if (res.ok) {
      inputRef.current.value = '';
      navigate('/ra-hw-router/task2');
    }    
  }

  return (
    <div className="container">
      <div className="posts">
          <div className="post-btn-box">{
            <Link to={'/ra-hw-router/task2'} className="posts-btn">
              <span className="material-icons arrow-back">clear</span>
              <span>Назад</span> 
            </Link>}
          </div>
          <form className='post'>
            <PostHeader date={date}/>
            <textarea className='post-create' rows="5" ref={inputRef}></textarea>
          </form>
          <div className="post-btn-box">
            <button className="posts-btn" onClick={submitHandler}>{id ? 'Сохранить' : 'Опубликовать'}</button>
          </div>
        </div>     
    </div>
  )
}
