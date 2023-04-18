import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { Link } from 'react-router-dom';
// Components
import Home from './pages/Home';
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';
import Edit from './pages/Edit';
import TransactionEditForm from './components/TransactionEditForm';

function App() {
 
  return (
    <div className="App">
      <Router>
        <header className="header">
          <h1><Link to="/">Budget App</Link></h1>
          <button>
            NEW TRANSACTION
          </button>
      </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<TransactionEditForm/>} />
            {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
