import PropTypes from 'prop-types';
import { TaskHeader } from '../tasks/TaskHeader';
import { Route, Routes} from 'react-router-dom';

export const RoutesTask3 = ({title}) => {
  return (
    <Routes>
      <Route path='/ra-hw-router/task3' element={<TaskHeader title={title}/>}>
        {/* <Route path='' element={<MenuBox content={<HomePage />}/>}/>
        <Route path='drift' element={<MenuBox content={<DriftPage />}/>}/>
        <Route path='timeattack' element={<MenuBox content={<TimeAttackPage />}/>}/>
        <Route path='forza' element={<MenuBox content={<ForzaPage />}/>}/> */}
      </Route>
    </Routes>    
  )
}
RoutesTask3.propTypes = {
  title: PropTypes.string,
}