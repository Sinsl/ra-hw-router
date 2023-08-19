import { Link, useNavigate } from "react-router-dom"


export const Box404 = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    console.log('click')
    navigate('/ra-hw-router/task3')
  }
  return (
    <div className="err-404">
      <div className="err-msg-404">Страница не найдена</div>
      <Link onClick={clickHandler} className='btn-auth-back'>На главную</Link>
    </div>
  )
}