import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo3.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { useDirection } from "../context/DirectionContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // State to track active link
  const { t, i18n } = useTranslation();
  const { setDirection } = useDirection();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    const newDirection = newLanguage === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = newLanguage;
  };

  const handleScroll = (id) => {
    setActiveLink(id); // Set the clicked link as active

    const element = document.getElementById(id);
    const navbar = document.querySelector("header"); // Assuming your navbar is in a header element
    const navbarHeight = navbar.offsetHeight;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight, // Scroll with offset
        behavior: "smooth",
      });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem button onClick={() => handleScroll("home")}>
          <ListItemText primary={t("home")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("about-us")}>
          <ListItemText primary={t("about")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("vision")}>
          <ListItemText primary={t("vision")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("services")}>
          <ListItemText primary={t("services")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("contact-us")}>
          <ListItemText primary={t("contact")} />
        </ListItem>
        <ListItem button onClick={changeLanguage}>
          <LanguageIcon />
          <ListItemText primary={i18n.language === "en" ? "AR" : "EN"} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
          backdropFilter: "blur(10px)", // Apply blur effect
          boxShadow: "none", // Remove default shadow
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Toolbar sx={{ color: "#000", justifyContent: "space-between" }}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img
              src={logo}
              alt="Leadership Ideas Trading Company"
              className="logo"
              style={{ borderRadius: "10px" }}
            />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex", gap: 2 },
              justifyContent: "center",
            }}
          >
            <Button
              color="inherit"
              onClick={() => handleScroll("home")}
              sx={{
                position: "relative",
                "&:hover:after": {
                  transform: "scaleX(1)",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "#1976d2", // Primary color
                  transform: activeLink === "home" ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.25s ease-out",
                },
              }}
            >
              {t("home")}
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll("about-us")}
              sx={{
                position: "relative",
                "&:hover:after": {
                  transform: "scaleX(1)",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "#1976d2", // Primary color
                  transform:
                    activeLink === "about-us" ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.25s ease-out",
                },
              }}
            >
              {t("about")}
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll("mission")}
              sx={{
                position: "relative",
                "&:hover:after": {
                  transform: "scaleX(1)",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "#1976d2", // Primary color
                  transform:
                    activeLink === "vision" ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.25s ease-out",
                },
              }}
            >
              {t("vision")}
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll("services")}
              sx={{
                position: "relative",
                "&:hover:after": {
                  transform: "scaleX(1)",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "#1976d2", // Primary color
                  transform:
                    activeLink === "services" ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.25s ease-out",
                },
              }}
            >
              {t("services")}
            </Button>
            <Button
              color="inherit"
              onClick={() => handleScroll("contact-us")}
              sx={{
                position: "relative",
                "&:hover:after": {
                  transform: "scaleX(1)",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "#1976d2", // Primary color
                  transform:
                    activeLink === "contact-us" ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.25s ease-out",
                },
              }}
            >
              {t("contact")}
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              onClick={changeLanguage}
              startIcon={<LanguageIcon sx={{ ml: 1 }} />}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
