import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CardList from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/:zone' element={<CardList />}/>
              <Route exact path='/gym/:id' element={<Detail />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
