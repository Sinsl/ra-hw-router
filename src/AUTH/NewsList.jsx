import { useEffect, useState, useContext } from "react";
import { funcFetch } from "./funcFetch";
import { AuthContext } from "./StartPage";
import { New } from "./New";
import { ErrorBox } from "./ErrorBox";


export const NewsList = () => {
  const { auth } = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [err, setErr] = useState('');
  
  useEffect(() => {
    ( async () => {
      const token = JSON.parse(localStorage.getItem('token'));
      const res = await funcFetch('/private/news',{
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.status === 401) {
        setErr('Вы не авторизованы для просмотра контента.\nПожалуйста авторизируйтесь.')
      } else {
        const result = await res.json();
        res.ok ? setNews(result) : setErr(result.message);
      }      
    })()
  }, [auth])

  return (
    <>
    {auth && !err &&
      <div className="news">
        {news.map(item => <New key={item.id} elem={item}/>)}
      </div>
    }
    {err &&
      <ErrorBox msg={err}/>
    }
    </>
    
  )
}