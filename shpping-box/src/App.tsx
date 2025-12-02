import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BoxForm from './components/BoxForm';
import BoxList from './components/BoxList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BoxForm />} />
            <Route path="/list" element={<BoxList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
