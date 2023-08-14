import { Outlet } from 'react-router-dom';
import { CustomTask1Menu } from '../customLink/CustomTask1Menu';

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <CustomTask1Menu to='/ra-hw-router/task1'>Главная</CustomTask1Menu>
        <CustomTask1Menu to='/ra-hw-router/task1/drift'>Дрифт-такси</CustomTask1Menu>
        <CustomTask1Menu to='/ra-hw-router/task1/timeattack'>Time Attack</CustomTask1Menu>
        <CustomTask1Menu to='/ra-hw-router/task1/forza'>Forza Karting</CustomTask1Menu>
      </nav>
      <Outlet />
    </>
  );
};


export default Menu;