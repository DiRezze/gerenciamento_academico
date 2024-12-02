import { BrowserRouter } from 'react-router-dom';
import MainAppRoutes from './routes/App.routes';
import NavBar from './components/navbar';
import './App.css';
import { AuthProvider } from './contexts/useAuth';

const App = () => {
  return(
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <MainAppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
