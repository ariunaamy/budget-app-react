import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/Index';
import Show from './pages/Show';
import TransactionEditForm from './components/TransactionEditForm';
import TransactionNewForm from './components/TransactionNewForm';

function App(){
  return (
    <div className="App">
      <Router>
        <header className="header">
          <h1><Link to="/">Budget App</Link></h1>
          <button>
            <Link to="/transactions/new">
            NEW TRANSACTION
            </Link>
            
          </button>
      </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<TransactionNewForm/>} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<TransactionEditForm/>} />
            {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
