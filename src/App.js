import logo from './logo.svg';
import './App.css';
import Addalbum from './components/Addalbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import ViewAllAlbum from './components/ViewAllAlbum';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addalbum/>}/>
      <Route path='/search' element={<SearchAlbum/>}/>
      <Route path='/delete' element={<DeleteAlbum/>}/>
      <Route path='/viewall' element={<ViewAllAlbum/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
