import { BrowserRouter } from 'react-router-dom';
import MainAppRoutes from './routes/App.routes';
import NavBar from './components/navbar';
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <NavBar />
      <MainAppRoutes />
    </BrowserRouter>
  )
}

export default App;
