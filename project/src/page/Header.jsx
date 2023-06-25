import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
        <li>
          <Link to="/state">State</Link>
        </li>

        <li>
          <Link to="/props">Props</Link>
        </li>
        <li>
          <Link to="/eventsForms">Events & Forms</Link>
        </li>
        <li>
          <Link to="/listConditionRendering">
            Lists & conditional rendering
          </Link>
        </li>
        <li>
          <Link to="/useState">useState hook</Link>
        </li>
        <li>
          <Link to="/useEffect">UseEffect hook</Link>
        </li>
        <li>
          <Link to="/useRef">useRef hook</Link>
        </li>
        <li>
          <Link to="/useLayoutEffect">useLayoutEffect hook</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo hook</Link>
        </li>
        <li>
          <Link to="/useCallback">useCallback hook</Link>
        </li>
        <li>
          <Link to="/useReducer">useReducer hook</Link>
        </li>
        <li>
          <Link to="/useContext">useContext hook</Link>
        </li>
        <li>
          <Link to="/imperativeHandler">useImperativeHandle hook</Link>
        </li>
        <li>
          <Link to="/useDebugValue">useDebugValue hook</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
