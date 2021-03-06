import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import RecipeDetails from './RecipeDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/create">
              <Create></Create>
            </Route>
            <Route exact path="/recipes/:id">
              <RecipeDetails></RecipeDetails>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;