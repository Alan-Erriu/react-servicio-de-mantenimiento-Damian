import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import IconWhatsApp from "./helper/IconWhatsApp";
import logo from "./helper/img/logo.jpg";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { text: "Pintura", href: "#Pintura" },
  { text: "Albañilería", href: "#Albañilería" },
  { text: "Plomería", href: "#Plomería" },
  { text: "Electricidad", href: "#Electricidad" },
  { text: "Gas", href: "#Gasista" },
  { text: "Contacto", href: "#Contacto" },
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const params = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* -------------------------------------logo/link/home-desc----------------------------------------------  */}
          <Link
            onClick={() => window.scrollTo(0, 0)}
            style={{ textDecoration: "none" }}
            to="/"
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar
                alt="logo mantenimiento residencial"
                src={logo}
                sx={{ width: 50, height: 50 }}
              />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/*---------------------------- items menu mobile------------------------------------------- */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  <Typography color="black" textAlign="center">
                    Inicio
                  </Typography>
                </Link>
              </MenuItem>
              {params.pathname === "/"? pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <a style={{ textDecoration: "none" }} href={page.href}>
                    <Typography color="black" textAlign="center">
                      {page.text}
                    </Typography>
                  </a>
                </MenuItem>
              )):null}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link  onClick={() => window.scrollTo(0, 0)}  style={{ textDecoration: "none" }} to="/sobremi">
                  <Typography color="black" textAlign="center">
                    sobre mi
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            textAlign="center"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: "30px",
              flexGrow: 1,
            }}
          >
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://wa.me/1155296365"
            >
              <IconWhatsApp />
            </a>
          </Typography>
          {/* ---------------------------------links/mode/desc---------------------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              style={{ textDecoration: "none" }}
              to="/"
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Inicio
              </Button>
            </Link>

            {params.pathname === "/"
              ? pages.map((page) => (
                  <a
                    key={page.text}
                    style={{ textDecoration: "none" }}
                    href={page.href}
                  >
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      {page.text}
                    </Button>
                  </a>
                ))
              : null}
            <Link  onClick={() => window.scrollTo(0, 0)}  style={{ textDecoration: "none" }} to="/sobremi">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                sobre mi
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/*---------------------------------- whatsapp-icon-btn-desc-------------------------- */}

            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://wa.me/1155296365"
            >
              <Button>
                <Avatar
                  sx={{
                    width: "50px",
                    height: "50px",
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                  }}
                  alt="Whatsapp"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
                />
              </Button>
            </a>

            {/*---------------------------------- lacation-icon-btn-desc-------------------------- */}
            <Button>
              <a style={{ textDecoration: "none" }} href="#mapa">
                <Avatar
                  sx={{
                    width: "45px",
                    height: "45px",
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                  }}
                  alt="ubicacion"
                  src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA=w240-h480-rw"
                />
              </a>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
