import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ChildrenDentistry from './pages/ChildrenDentistry';
import KidsvilleMax from './pages/KidsvilleMax';
import Orthodontics from './pages/Orthodontics';
import PreventiveDentistry from './pages/PreventiveDentistry';
import SedationServices from './pages/SedationServices';
import Page404 from './pages/404';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact-us' component={ContactUs}/>
          <Route exact path='/children-dentistry' component={ChildrenDentistry}/>
          <Route exact path='/kidsville-max' component={KidsvilleMax}/>
          <Route exact path='/orthodontics' component={Orthodontics}/>
          <Route exact path='/preventive-dentistry' component={PreventiveDentistry}/>
          <Route exact path='/sedation-services' component={SedationServices}/>
          <Route exact path='/blogs' component={Blogs}/>
          <Route exact path='/blogs/:id' component={BlogPage} />
          <Route component={Page404}/>
        </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
