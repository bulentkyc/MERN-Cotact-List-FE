import './App.css';
import Auth from './pages/Auth';
import Contacts from './pages/Contacts';
import GetContact from './pages/GetContact';
import Navbar from './components/Navbar';

import { Switch,Route } from "react-router-dom";


function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/get-contact">
        <GetContact />
      </Route>
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
    </div>
  );
}

export default App;