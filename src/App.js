

import './App.css';
import { Route} from 'react-router-dom';
import firebase from './Firebase.js';

import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import TeamPage from './components/TeamPage/TeamPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Login from './components/Login/Login';
import Register from './components/RegisterPage/Register';
import MyComponent from './components/MyComponent/MyComponent';
import Logout from './components/Logout/Logout';
import OurProject from './components/OurProject/OurProject';
import Details from './components/DetailsPage/DetailsPage';
import CreateTeam from './components/CreateTeam/CreatTeam';
import MyTeam from './components/MyTeam/MyTeam';
import EditPage from './components/EditPage/EditPage';
function App() {
  return (
    <AuthProvider >
    <div className="App">
      <Header  />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/service" component={ServicesPage} />
      <Route path="/our-project" component={OurProject} />
      <Route path="/create-team" component={CreateTeam} />
      <Route path="/my-team" component={MyTeam} />
      <Route path="/edit/:teamId" component={EditPage} />
     <Route path="/login" component={Login} />
     <Route path="/register" component={Register} />
     <Route path="/logout" component={Logout} />
     <Route path="/details/:teamId" children={<Details />} />
   
    </div>
    </AuthProvider>
  );
}

export default App;
