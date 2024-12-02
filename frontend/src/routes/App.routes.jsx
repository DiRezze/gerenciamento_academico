import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import StudentPage from '../pages/studentPage';
import NotFoundPage from '../pages/notFoundPage';
import PrivateRoute from './Private.routes';
import EventsPage from '../pages/eventsPage';
import LoginPage from '../pages/loginPage';

const MainAppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
            <Route path="/alunos" element={<PrivateRoute element={<StudentPage />} />} />
            <Route path="/alunos" element={<PrivateRoute element={<EventsPage />} />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default MainAppRoutes;
