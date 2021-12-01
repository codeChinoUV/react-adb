
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from "react-router-dom";

import logo from "../logo.svg";


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" end>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" end>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
              <>
                
              </>
          </Route>
          <Route path="/users">
              <>
            
              </>
          </Route>
          <Route path="/">
             <>
               
              </>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
