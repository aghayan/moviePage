import './App.css';
import  Login  from './pages/login';
import {Route, Routes, useNavigate } from 'react-router-dom';
import {RegistrationForm} from './pages/registrationForm';
import MovieList from './component/movieList.js';
import { Homefilms } from './pages/homeFilms';
import ContactPage from './pages/contactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';


function App() {



  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signin" element={<RegistrationForm/>}/>
          <Route path="/movieList" element={<MovieList/>}/>
          <Route path='/homeFilms' element={<Homefilms/>}/>
          <Route path='/ContactPage' element={<ContactPage/>}/>
          <Route path='/ServicesPage' element={<ServicesPage/>}/>
          <Route path='/aboutPage' element={<AboutPage/>}/>
          <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>

    </div>
  );
}

export default App;
