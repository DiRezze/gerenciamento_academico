import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import StudentPage from '../pages/studentPage';
import NotFoundPage from '../pages/notFoundPage';

const MainAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/alunos" element={<StudentPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default MainAppRoutes;
