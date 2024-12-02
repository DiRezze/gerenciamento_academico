import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import StudentPage from '../pages/studentPage';
import NotFoundPage from '../pages/notFoundPage';
import PrivateRoute from './Private.routes';

const MainAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/alunos" element={<PrivateRoute element={<StudentPage />} />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default MainAppRoutes;
