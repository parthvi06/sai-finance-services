import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Page404 from './pages/404';
import About from './pages/About';
import Location from './pages/Location';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Helmet>
            <title>Kidsville | Pediatric Dental Clinic</title>
            <meta name="description" content=""/>
            <meta name="keywords" content="kidsville, Dentist, Dental clinic"/>
          </Helmet>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact-us' component={ContactUs}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/location' component={Location}/>
            <Route component={Page404}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
} 
export default App;
 

 
 