import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import PirateView from './views/PirateView';
import AddPirate from './views/AddPirate';
import EditPirate from './views/EditPirate';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path ={`/pirates`}>
          <Main/>
        </Route>
        <Route exact path ={`/pirates/new`}>
          <AddPirate/>
        </Route>
        <Route exact path ={`/pirates/edit/:id`}>
          <EditPirate/>
        </Route>
        <Route exact path={`/pirates/view/:id`}>
          <PirateView/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
