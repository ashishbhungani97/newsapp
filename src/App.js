import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Navbar/>
        <Switch>
          <Route exact key="business" path="/business">
             <News pagesize={5} country="in" category="business"/>
          </Route>
          <Route exact key="entertainment" path="/entertainment">
             <News pagesize={5} country="in" category="entertainment"/>
          </Route>
          <Route exact key="general" path="/">
             <News pagesize={5} country="in" category="general"/>
          </Route>
          <Route exact key="health" path="/health">
             <News pagesize={5} country="in" category="health"/>
          </Route>
          <Route exact key="sports" path="/sports">
             <News pagesize={5} country="in" category="sports"/>
          </Route>
          <Route exact key="technology" path="/technology">
             <News pagesize={5} country="in" category="technology"/>
          </Route>
          <Route exact key="science" path="/science">
             <News pagesize={5} country="in" category="science"/>
          </Route>

        </Switch>
        
        
      </div>
      </Router>
    )
  }
}

export default App
