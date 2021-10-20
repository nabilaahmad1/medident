import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import ServiceDetail from './Component/ServiceDetail/ServiceDetail';
import Doctor from './Component/Doctor/Doctor';
import Appointment from './Component/Appointment/Appointment';
import Login from './Component/Login/Login';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import AuthProvider from './Context/AuthProvider';
import Register from './Component/Register/Register';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/servicedetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctor></Doctor>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
