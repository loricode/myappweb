import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Course from './pages/course/Course';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/course">
            <Course/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
