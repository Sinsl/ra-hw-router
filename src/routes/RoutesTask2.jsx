import PropTypes from 'prop-types';
import { TaskHeader } from '../tasks/TaskHeader';
import { Route, Routes} from 'react-router-dom';
import { PostsList } from '../CRUD/PostsList';
import { PostView } from '../CRUD/PostView';
import { PostCreate } from '../CRUD/PostCreate';

export const RoutesTask2 = ({title}) => {
  return (
    <Routes>
      <Route path='/ra-hw-router/task2' element={<TaskHeader title={title}/>}>
        <Route path='' element={<PostsList />}/>
        <Route path='posts/:id' element={<PostView />}/>
        <Route path='posts/new' element={<PostCreate />}/>
        <Route path='posts/change/:id' element={<PostCreate />}/>
      </Route>
    </Routes>    
  )
}
RoutesTask2.propTypes = {
  title: PropTypes.string,
}