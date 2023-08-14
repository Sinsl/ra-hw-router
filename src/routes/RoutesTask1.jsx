import PropTypes from 'prop-types';
import { TaskHeader } from '../tasks/TaskHeader';
import { MenuBox } from '../MENU/MenuBox';
import { Route, Routes, Navigate} from 'react-router-dom';
import { HomePage } from '../MENU/pages/HomePage';
import { DriftPage } from '../MENU/pages/DriftPage';
import { TimeAttackPage } from '../MENU/pages/TimeAttackPage';
import { ForzaPage } from '../MENU/pages/ForzaPage';

export const RoutesTask1 = ({title}) => {
  return (
    <Routes>
      <Route path='/ra-hw-router/task1' element={<TaskHeader title={title}/>}>
        <Route path='' element={<MenuBox content={<HomePage />}/>}/>
        <Route path='drift' element={<MenuBox content={<DriftPage />}/>}/>
        <Route path='timeattack' element={<MenuBox content={<TimeAttackPage />}/>}/>
        <Route path='forza' element={<MenuBox content={<ForzaPage />}/>}/>
      </Route>
      <Route path='/ra-hw-router' element={<Navigate to='task1' replace />} />
    </Routes>    
  )
}
RoutesTask1.propTypes = {
  title: PropTypes.string,
}