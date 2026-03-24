import styles from './App.module.scss';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './Components/Root/root';
import Homepage from './Components/Home/home';
import Routines from './Pages/Routines/routines';
import Workout from './Pages/Workout/workout';
import Exercises from './Pages/Exercises/exercises';
import History from './Pages/History/history';
import { ApiProvider } from './Components/Api/api';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Homepage/>}/>
    <Route path="routines" element={<Routines/>}/>
    <Route path="/:i" element={<Workout/>}/>
    <Route path="exercises" element={<Exercises/>}/>
    <Route path="history" element={<History/>}/>
  </Route>
))

function App() {

  return (
    <ApiProvider>
      <RouterProvider className={styles.App} router={AppRouter}/>
    </ApiProvider>
  );
}

export default App;
