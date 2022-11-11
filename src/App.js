import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Components/About";
import Header from "./Components/Header"
// import "./Styling/App.css"

function App() {
  return (
    <div className = "App">
      <Router>
          <Route path="/" />
          <Route path="/about" component={About}/>
          <Route path="/shiny" />
          <Route path="/contact" />
      </Router>
    </div>
    
  );
}

export default App;



