import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Detail from './pages/Detail';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/gym/:id' element={<Detail />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
