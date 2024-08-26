import HomePage from './Templates/Home_Page';
import DestinationPage from './Templates/Destination_page';
import CrewPage from './Templates/Crew';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Destination' element={<DestinationPage/>}/>
            <Route path='/Crew' element={<CrewPage/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
