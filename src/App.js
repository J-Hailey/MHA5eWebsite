import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages'

function App() {

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
