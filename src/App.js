import './App.css';
import Home from './Home/Home';
import Friends from './Friends/Friends';
import About from './About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Friend from './Friend/Friend';
import Header from './Header/Header';
import FriendDetail from './FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='friends' element={<Friends />} />
        <Route path='/friend/:friendID' element={<FriendDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
