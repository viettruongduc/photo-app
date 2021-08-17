import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import DefaultBackground from './assets/image/background-default.jpg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Banner title="Default" backgroundURl={DefaultBackground}/> 
        <Switch>
          <Redirect exact from="/" to="/photos" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
