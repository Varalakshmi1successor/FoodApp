import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="24"
            viewBox="0 0 52 24"
          >
            <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 47)"
                fill="#574c4c"
              />
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 67)"
                fill="#574c4c"
              />
              <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                width="52"
                height="4"
                rx="2"
                transform="translate(294 57)"
                fill="#574c4c"
              />
            </g>
          </svg>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Home = () => <h2>You are in the Home</h2>;
const Blogs = () => <h2>You are in the Blogs</h2>;
const Projects = () => <h2>You are in the Projects</h2>;
const About = () => <h2>You are in the About</h2>;
const Contact = () => <h2>You are in the Contact</h2>;

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
