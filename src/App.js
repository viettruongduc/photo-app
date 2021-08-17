import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Redirect exact from="/" to="/photos" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
