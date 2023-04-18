import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Link } from 'react-router-dom';
// Components
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <h1>Budget App</h1>
          <button>
            NEW TRANSACTION
          </button>
      </header>
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
