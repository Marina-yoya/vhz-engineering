

import './App.css';
import { Route} from 'react-router-dom';
import firebase from './Firebase.js';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import TeamPage from './components/TeamPage/TeamPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';
import Login from './components/Login/Login';
import Register from './components/RegisterPage/Register';
import MyComponent from './components/MyComponent/MyComponent';
import Logout from './components/Logout/Logout';
import OurProject from './components/OurProject/OurProject';


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Header  />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/service" component={ServicesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/our-project" component={OurProject} />
     <Route path="/login" component={Login} />
     <Route path="/register" component={Register} />
     <Route path="/logout" component={Logout} />
     
   
    </div>
    </AuthProvider>
  );
}

export default App;
