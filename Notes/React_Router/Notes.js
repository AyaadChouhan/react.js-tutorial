// React Router DOM...................
// React Router DOM is a library that enables navigation between different components (pages) in a React application. It provides powerful tools to build dynamic single-page applications (SPAs) where components can be rendered conditionally based on the URL path.

// BrowserRouter......

// Wraps the entire application and enables routing.
// It keeps the UI in sync with the URL.
// Typically used in index.js or main.js to wrap the root component

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// ========================================================

// Routes and Route.................

// Defines the route paths and which components to render when the URL matches a specific path.
// Routes is a container for multiple Route components.
// Each Route component specifies a path and a component to render.

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

// ==========================================

// Link.....................

// Used to create navigation links in your app.
// The Link component prevents full page reloads and allows client-side navigation.

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

// ===========================================

// useNavigate...................

// A hook that allows programmatic navigation.
// Can be used for redirection within event handlers (e.g., after form submission or button click).
//means when we click on the button we want to naviagte to orders Page

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>hello from Home Page</p>
      <button
        onClick={() => {
          navigate("order");
        }}
      >
        order
      </button>
    </div>
  );
}

export default Home;

// ======================================================

// Features of React Router DOM
// Dynamic Routing: React Router provides dynamic routing, where components are rendered as per the route configuration.
// Nested Routes: You can define child routes inside parent routes, making it easier to handle complex layouts.
// Route Parameters: Dynamic segments in routes (e.g., /user/:id) can be accessed via hooks like useParams.
// Redirects: You can redirect users conditionally using the Navigate component or useNavigate hook.
// URL State: React Router DOM allows passing state via the Link component to access it in other routes.

// Useful Hooks in React Router DOM
// useNavigate: For programmatic navigation.
// useParams: For accessing dynamic parameters in routes.
// useLocation: For accessing the current location (URL path).
// useMatch: To match the current URL with a specific route pattern.
