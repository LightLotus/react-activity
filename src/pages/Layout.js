import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";

function Layout() {
  return (
    <>
      <nav>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Link to="/"></Link>
          <Button variant="contained">
            <Link to="/exercise1">Exercise1</Link>
          </Button>
          <Button variant="contained">
            <Link to="/exercise2">Exercise2</Link>
          </Button>
          <Button variant="contained">
            <Link to="/exercise3">Exercise3</Link>
          </Button>
          <Button variant="contained">
            <Link to="/exercise4">Exercise4</Link>
          </Button>
          <Button variant="contained">
            <Link to="/exercise5">Exercise5</Link>
          </Button>
          <Button variant="contained">
            <Link to="/exercise6">Exercise6</Link>
          </Button>
        </ButtonGroup>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
