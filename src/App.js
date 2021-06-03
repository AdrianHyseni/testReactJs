import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import  Home  from './components/pages/HomePage/Home'
import Footer from "./components/pages/Footer/Footer";
import AboutUs from "./components/pages/About/About";






function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Switch>
                  <Route path = '/home' exact component={Home} />
                  <Route path = '/about' exact component={AboutUs} />
              </Switch>
              <Footer/>
          </Router>
          </>
  );
}

export default App;
