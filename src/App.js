
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostsWithFetch from './PostsWithFetch'
import PostsWithAxios from './PostsWithAxios'

function App() {
  return (
    <Router>
     <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home (Default with Fetch Api Example)</Link>
          </li>
  
          <li>
            <Link to="/axios">Click Here - Posts With Axios Example</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/fetchapi">
          <PostsWithFetch />
        </Route>
        <Route path="/axios">
          <PostsWithAxios />
        </Route>
        <Route path="/">
          <PostsWithFetch />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
export default App;
