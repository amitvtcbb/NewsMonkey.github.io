
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  pageSize = 15;
  state={
    progress:0
  }
 setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {

    return (
      <div>

        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
            {/* <Route exact path="/" ><News setProgress={setProgress} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={5} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={5} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={5} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={5} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={5} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={5} country="in" category="technology"/></Route>  */}

            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}