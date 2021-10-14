import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import KidsvilleMax from './pages/KidsvilleMax';
import Page404 from './pages/404';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogPage';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import WhyUs from './pages/WhyUs';
import Location from './pages/Location';
import YourFirst from './pages/YourFirst';
import EmergencyDentist from './pages/EmergencyDentist';
import DentalHygiene from './pages/DentalHygiene';
import DentalHypomineralization from './pages/DentalHypomineralization';
import DentalSealant from './pages/DentalSealant';
import FluorideVarnish from './pages/FluorideVarnish';
import IVsedation from './pages/IVsedation';
import GeneralAnesthesia from './pages/GeneralAnesthesia';
import FAQ from './pages/FAQ';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact-us' component={ContactUs}/>
          <Route exact path='/kidsville-max' component={KidsvilleMax}/>
          <Route exact path='/blogs' component={Blogs}/>
          <Route exact path='/blogs/:id' component={BlogPage} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/our-team' component={OurTeam}/>
          <Route exact path='/why-us' component={WhyUs}/>
          <Route exact path='/location' component={Location}/>
          <Route exact path='/your-first' component={YourFirst}/>
          <Route exact path='/emergency-dentist' component={EmergencyDentist}/>
          <Route exact path='/dental-hygiene' component={DentalHygiene}/>
          <Route exact path='/dental-hypomineralization' component={DentalHypomineralization}/>
          <Route exact path='/dental-sealant' component={DentalSealant}/>
          <Route exact path='/fluoride-varnish' component={FluorideVarnish}/>
          <Route exact path='/iv-sedation' component={IVsedation}/>
          <Route exact path='/gerenal-anesthesia' component={GeneralAnesthesia}/>
          <Route exact path='/faq' component={FAQ}/>
          <Route exact path='/sign-up' component={SignUp}/>
          <Route component={Page404}/>
        </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
