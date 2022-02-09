import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState, useCallback } from 'react';

// I dont have a great spot to add this comment so I'll just add here
// All your files that have jsx in it, should be named with the jsx extension
// (e.g. .jsx instead of .js)
// Many tools look for jsx based on the file extension, so using .js would mean it could get skipped

function App() {
  const [navToggle, setNavToggle] = useState(false);

  /**
   * Since we're passing this function as a prop,
   * it's helpful to memoize it with useCallback
   * In this specific scenario it wouldn't make a difference,
   * but its good to show you know how to use it
  */ 
  const navClick = useCallback(() => {
    /**
     * Since we're now memoizing the navClick function,
     * the navToggle will become stale if we don't include it in the dependency array
     * for useCallback. But if we add navToggle to the dependency array, that'll mostly undo any benefit we
     * get memoizing this function in the first place since it'll then trigger this reference to change
     * each time navToggle changes. To work around this, we can use a function as an argument to set the state
     * https://reactjs.org/docs/hooks-reference.html#functional-updates
     */
    setNavToggle(navToggle => !navToggle)
  }, [])

  return (
    <div className="App">
      {/* There's a great package called classnames which makes conditionally applying classes much easier */}
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              {/*
                I think the exact prop may be unnecessary for the routes below
                They infact may become a problem if you create subroutes nested inside these pages
                like /about/me
                Also, the latest version of react-router moves away from using exact
                https://medium.com/@manishsundriyal/whats-new-in-react-router-v6-20eefe665be9
                Additionally, when you do update react-router-dom, this will have to be refactored. Instead
                of passing the component as a child, you will pass it as the value for the component prop.
                See above link
               */}
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
