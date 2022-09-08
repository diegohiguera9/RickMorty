import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Description from './pages/Description';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home/>}/>
            <Route path='/Description' element={<Description/>}>
                <Route path=':id' element={<Description/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
