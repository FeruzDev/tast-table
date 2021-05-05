import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";
import {ToastContainer} from "react-toastify";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path='/' component={Login}/>
          <PrivateRoute exact path='/admin' component={Admin}/>


          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
      <ToastContainer/>

    </div>
  );
}

export default App;
