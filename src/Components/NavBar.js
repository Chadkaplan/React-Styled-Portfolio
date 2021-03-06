import headshot from '../img/chadheadshot.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={headshot} alt="headshot"/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        {/* Same comments here as in App.js about routes */}
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        {/* Lets use the js date object to get the current year instead of hard-coding */}
                        @2021 Chad Kaplan
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
