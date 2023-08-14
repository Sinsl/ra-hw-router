import './App.css';
import TopMenu from './tasks/TopMenu';
import { RoutesTask1 } from './routes/RoutesTask1';
import { RoutesTask2 } from './routes/RoutesTask2';
import { RoutesTask3 } from './routes/RoutesTask3';
import { useHttpRequest } from './http/useHttpRequest';
import { createContext } from 'react';
 
export const PingContext = createContext(false);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useHttpRequest(import.meta.env.VITE_URL_PING);  

  return (
    <PingContext.Provider value={loading}>
      <div className='main'>
        <header className='title'>
          <h1>Домашнее задание к теме &quot;React Router&quot;</h1>
          <TopMenu />
        </header>
          <div className='task'>
            <RoutesTask1 title='Задача 1: MENU'/>
            <RoutesTask2 title='Задача 2: CRUD'/>
            <RoutesTask3 title='Задача 3: Аутентификация'/>
          </div>                       
      </div>   
    </PingContext.Provider>  
  )
}

export default App