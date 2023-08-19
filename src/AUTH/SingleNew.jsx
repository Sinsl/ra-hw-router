import { useEffect, useState, useContext } from "react";
import { funcFetch } from "./funcFetch";
import { AuthContext } from "./StartPage";
import { useParams, useNavigate } from "react-router-dom";
import { ErrorBox } from "./ErrorBox";

export const SingleNew = () => {
  const { auth } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [singleNew, setNew] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    ( async () => {
      const token = JSON.parse(localStorage.getItem('token'));
      const res = await funcFetch('/private/news/' + id,{
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401) {
        setErr('Вы не авторизованы для просмотра контента.\nПожалуйста авторизируйтесь.')
      } else {
        const result = await res.json();
        res.ok === true ? setNew(result) : setErr(result.message);
      } 
    })()
  }, [auth, id])

  const backHandler = () => {
    navigate(-1);
  }
  return (
    <div>
      <div className="back-box">
        <div className="btn-auth-back" onClick={backHandler}>&#60; Назад</div>
      </div>
      {auth && !err &&
        <div className='single-content-box' data-id={singleNew.id}>
          <img className='single-img' src={singleNew.img} alt="img" />
          <div className="single-text-box">
            <div className='new-title'>{singleNew.title}</div>
            <div className='new-text'>{singleNew.content}</div>
          </div>
        </div>
      }
      {err && 
        <ErrorBox msg={err}/>
      }
    </div>
  )
}