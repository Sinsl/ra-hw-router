import { Outlet } from 'react-router-dom';
import { CustomTopMenuLink } from '../customLink/CustomTopMenuLink';

const TopMenu = () => {
  return (
    <div className="top-menu">
      <nav>
            <CustomTopMenuLink to='/ra-hw-router/task1'>Задача 1</CustomTopMenuLink>
            <CustomTopMenuLink to='/ra-hw-router/task2'>Задача 2</CustomTopMenuLink>
            <CustomTopMenuLink to='/ra-hw-router/task3'>Задача 3</CustomTopMenuLink>
          </nav>
          <Outlet />
    </div>
  );
};


export default TopMenu;