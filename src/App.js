import Header from "./components/header/Header";
import { Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import './fonts/css/all.css';
import './App.css';
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Projectdeck from "./components/Portfolio/ProjectDeck";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>
          <Route exact path="/project">
            <Header />
            <Projectdeck />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
