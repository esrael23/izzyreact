import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Analytics from './components/Analytics/Analytics';
import News from './components/News/News';
import Reports from './components/reports/Reports';
import Homepage from './components/home/Homepage';

function App() {
  return (
    <Router>

    <div className="App">
     <ButtonAppBar/>
     <Routes>
     <Route path='/' element={<Homepage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/analytics' element={<Analytics/>}></Route>
      <Route path='/news' element={<News/>}></Route>
      <Route path="/reports" element={<Reports/>}></Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
