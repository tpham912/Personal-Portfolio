import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form';


function App() {
  return (
    <Router>
    <>
    <Header />
    <Switch >
    <Route exact path="/Personal-Portfolio" component={Main}/>
    <Route exact path="/contactMe" component={Form}/>
    </Switch>
    <Contact />
    </>
    </Router>
  );
}

export default App;