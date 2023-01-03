import './App.css';
import React, {Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
export default class App extends Component{
  render() {
  return (
    <>
    <Navbar/>
    {/* <News category="general"/> */}
   {/* <Router> */}
   
    <Routes>
    <Route exact path="/general" element= {<News category="general"/>}/>
    <Route exact path="/science" element= {<News category="science"/>} />
    <Route exact path="/business" element= {<News category="business"/>} />
    <Route exact path="/technology" element= {<News category="technology"/>} />
    <Route exact path="/sports" element= {<News category="sports"/>} />
    <Route exact path="/health" element= {<News category="health"/>} />
    <Route exact path="/entertainment" element= {<News category="entertainment"/>} />
    </Routes> 
   
   {/* </Router> */}
   </>
  );
}
}
