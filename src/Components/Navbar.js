import React, { useState, useEffect } from "react";
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
import { useTranslation } from "react-i18next";
import { useDirection } from "../context/DirectionContext";
import logo from "../assets/images/logo3.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
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
    setActiveLink(id);
    const element = document.getElementById(id);
    const navbar = document.querySelector("header");
    const navbarHeight = navbar.offsetHeight;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = ["home", "about-us", "mission", "strategy", "contact-us"];
    const navbar = document.querySelector("header");
    const navbarHeight = navbar.offsetHeight;

    const observerOptions = {
      root: null,
      rootMargin: `-${navbarHeight}px 0px 0px 0px`,
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem button onClick={() => handleScroll("home")}>
          <ListItemText primary={t("home")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("about-us")}>
          <ListItemText primary={t("about-us")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("mission")}>
          <ListItemText primary={t("mission")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("strategy")}>
          <ListItemText primary={t("strategy")} />
        </ListItem>
        <ListItem button onClick={() => handleScroll("contact-us")}>
          <ListItemText primary={t("contact-us")} />
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
        position: "sticky", // Standard support
        top: "0",
        zIndex: "1000",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        marginBottom: "20px",
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
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
            {["home", "about-us", "mission", "strategy", "contact-us"].map(
              (id) => (
                <Button
                  key={id}
                  color="inherit"
                  onClick={() => handleScroll(id)}
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
                      backgroundColor: "#1976d2",
                      transform: activeLink === id ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 0.25s ease-out",
                    },
                  }}
                >
                  {t(id)}
                </Button>
              )
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={changeLanguage}
              startIcon={<LanguageIcon sx={{ ml: 1 }} />}
              sx={{ display: { xs: "none", md: "flex" }, color: "#4F4F4F" }}
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
            keepMounted: true,
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
