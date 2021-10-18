import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';
import backgroundImage from './assets/images/white.jpg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <>
    <div id="background-img"><img src={backgroundImage}/> </div>
    <Header />
    <Switch >
    <Route exact path="/Personal-Portfolio" component={Main}/>
    <Route exact path="/contactMe" component={Form}/>
    </Switch>
    <Footer />
    </>
    </Router>
  );
}

export default App;