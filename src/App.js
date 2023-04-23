import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Regist from './components/registration';
import AddBook from './components/addBook';
import Home from './components/home';
import EditBook from './components/edit';
import BookDetails from './components/bookDetail';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
   <Router>
    <Nav/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Regist/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/EditBook' element={<EditBook/>}/>
      <Route path='/BookDetails' element={<BookDetails/>}/>
      <Route path='/AddBook' element={<AddBook/>}/>

    </Routes>
   </Router>
  

    </div>
  );
}

export default App;
