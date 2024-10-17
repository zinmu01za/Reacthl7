import Navbar from './Navbar';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import AddEdit2 from './pages/AddEdit2';
import View from './pages/View';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <div className="body">
          <ToastContainer position="top-center" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Create" element={<AddEdit />} />
            <Route exact path="/update/:id" element={<AddEdit2 />} />
            <Route exact path="/view/:id" element={<View />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
