import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Album from './pages/Album';
import Artist from './pages/Artist';

function App() {
  return (
    <Router>
    <div>
      <MyNav title="My Book Store" color="light" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/album" exact component={Album} />
        <Route path="/artist" exact component={Artist} />
      </Switch>
      <MyFooter />
    </div>
    </Router>
  );
}

export default App;
