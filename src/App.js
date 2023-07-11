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
import Navigation from './Components/Navigation';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
          <Route exact path='/' element={<DashboardPage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/jobs' element={<JobRegistrationPage />} />
          <Route exact path='/news' element={<NewsPage />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
