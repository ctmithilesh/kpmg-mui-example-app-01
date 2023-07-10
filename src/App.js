import { Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import JobRegistrationForm from './Components/JobRegistrationForm';
import NewsCard from './Components/NewsCard';
import TodoList from './Components/TodoList';
import DashboardPage from './Pages/DashboardPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import JobRegistrationPage from './Pages/JobRegistrationPage';
import NewsPage from './Pages/NewsPage';

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<DashboardPage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/job-registration' element={<JobRegistrationPage />} />
        <Route exact path='/business-news' element={<NewsPage />} />
    </Routes>

  );
}

export default App;
