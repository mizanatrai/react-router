import './App.css';
import Home from './Home/Home';
import Friends from './Friends/Friends';
import About from './About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Friend from './Friend/Friend';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my fancy routing website!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='friends' element={<Friends />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
