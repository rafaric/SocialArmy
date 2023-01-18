import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import Registro from './pages/Registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/register' element={<Registro/>}/>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/post/:id' element={<Post />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
