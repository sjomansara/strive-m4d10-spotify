import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Album from './pages/Album';
import Artist from './pages/Artist';
import { Row } from 'react-bootstrap'

function App() {
  return (
    <Router>
    <Row>
      <MyNav title="My Book Store" color="light" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/album" exact component={Album} />
        <Route path="/artist" exact component={Artist} />
      </Switch>
      <MyFooter />
    </Row>
    </Router>
  );
}

export default App;
