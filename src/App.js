import './App.css';
import Login from './component/pages/Login';
import Home from './component/pages/Home';

import Navbar from './component/layout/Navbar';
import Adduser from './component/users/Adduser';
import EditUser from './component/users/EditUser';
import User from './component/users/User';
import PageNotFound from './component/pages/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>

          <Route exact path="/user/add" component={Adduser}></Route>
          <Route exact path="/user/edit/:id" component={EditUser}></Route>
          <Route exact path="/user/:id" component={User}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
