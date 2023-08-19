import PropTypes from 'prop-types';
import { TaskHeader } from '../tasks/TaskHeader';
import { Route, Routes} from 'react-router-dom';
import { StartPage } from '../AUTH/StartPage';
import { ScreenSaver } from '../AUTH/ScreenSaver';
import { NewsList } from '../AUTH/NewsList';
import { SingleNew } from '../AUTH/SingleNew';
import { Box404 } from '../AUTH/Box404';


export const RoutesTask3 = ({title}) => {
  return (
    <Routes>
      <Route path='/ra-hw-router/task3' element={<TaskHeader title={title}/>}>
        <Route path='' element={<StartPage content={<ScreenSaver />}/>} />
        <Route path='news' element={<StartPage content={<NewsList />}/>} />
        <Route path='news/:id' element={<StartPage content={<SingleNew />}/>} />
        <Route path='*' element={<StartPage content={<Box404 />}/>} />
      </Route>
    </Routes>    
  )
}
RoutesTask3.propTypes = {
  title: PropTypes.string,
}