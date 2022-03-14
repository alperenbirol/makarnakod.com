import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import ProblemPage from './components/Pages/Problems/ProblemDescription';
import AlgorithmPage from './components/Pages/Problems/Algorithm/AlgorithmPage';
import DataStructuresPage from './components/Pages/Problems/DataStructures/DataStructuresPage';
import FifteenDaysOfPythonPage from './components/Pages/Problems/FifteenDaysOfPython/FifteenDaysOfPythonPage';
import Login from './components/Pages/UserAuthentication/Login';
import Register from './components/Pages/UserAuthentication/Register';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:path/:path' exact component={ProblemPage} />
            <Route path='/15-gunde-python-kiti' exact component={FifteenDaysOfPythonPage}/>
            <Route path='/algoritma' exact component={AlgorithmPage} />
            <Route path='/veri-yapilari' exact component={DataStructuresPage} />
            <Route path='/giris-yap' exact component={Login} />
            <Route path='/uye-ol' exact component={Register} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;