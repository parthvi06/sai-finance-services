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
import Covid19 from './pages/Covid19';
import FAQ from './pages/FAQ';
import SignUp from './pages/SignUp';
import BracesConsult from './pages/BracesConsult';
import Fillings from './pages/Fillings';
import RootCanal from './pages/RootCanal';
import ChildrenCrown from './pages/ChildrenCrown';
import ToothRemoval from './pages/ToothRemoval';
import SpaceMaintainer from './pages/SpaceMaintainer';
import DigitalXray from './pages/DigitalXray';
import EmergencyTreatment from './pages/EmergencyTreatment';
import Braces from './pages/Braces';
import Invisalign from './pages/Invisalign';
import ClearAlignerOrBraces from './pages/ClearAlignerOrBraces';
import EarlyOrthodontics from './pages/EarlyOrthodontics';
import OralHabits from './pages/OralHabits';
import Retainers from './pages/Retainers';
import OrthodonticCorrections from './pages/OrthodonticCorrections';
import MyoFunctionalTreatment from './pages/MyoFunctionalTreatment';
import OrthodonticsTeen from './pages/OrthodonticsTeen';
import SportsDentistry from './pages/SportsDentistry';
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
            <Route exact path='/covid-update' component={Covid19}/>
            <Route exact path='/faq' component={FAQ}/>
            <Route exact path='/sign-up' component={SignUp}/>
            <Route exact path='/braces-consult' component={BracesConsult}/>
            <Route exact path='/fillings' component={Fillings}/>
            <Route exact path='/root-canal' component={RootCanal}/>
            <Route excat path='/children-crown' component={ChildrenCrown}/>
            <Route exact path='/tooth-removal' component={ToothRemoval}/>
            <Route excat path='/space-maintainer' component={SpaceMaintainer}/>
            <Route exact path='/digital-Xray' component={DigitalXray}/>
            <Route excat path='/emergency-treatment' component={EmergencyTreatment}/>
            <Route exact path='/braces' component={Braces}/>
            <Route excat path='/invisalign' component={Invisalign}/>
            <Route exact path='/clear-aligner-braces' component={ClearAlignerOrBraces}/>
            <Route excat path='/early-orthodontics' component={EarlyOrthodontics}/>
            <Route exact path='/oral-habits' component={OralHabits}/>
            <Route excat path='/retainers' component={Retainers}/>
            <Route excat path='/orthodontics-corrections' component={OrthodonticCorrections}/>
            <Route excat path='/myofunctional-treatment' component={MyoFunctionalTreatment}/>
            <Route excat path='/orthodontics-teen' component={OrthodonticsTeen}/>
            <Route excat path='/sports-dentistry' component={SportsDentistry}/>
            <Route component={Page404}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
