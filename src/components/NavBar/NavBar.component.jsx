import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Extralab
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            cursor: "pointer",
            flexGrow: 0.1,
            fontWeight: currentPage === ROUTES.MOVIES ? "bold" : "normal",
            color: currentPage === ROUTES.MOVIES ? "yellow" : "white",
          }}
          onClick={() => navigate(ROUTES.MOVIES)}
        >
          Home
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            cursor: "pointer",
            flexGrow: 0.1,
            fontWeight: currentPage === ROUTES.FAVOURITES ? "bold" : "normal",
            color: currentPage === ROUTES.FAVOURITES ? "yellow" : "white",
          }}
          onClick={() => navigate(ROUTES.FAVOURITES)}
        >
          Favourites
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
