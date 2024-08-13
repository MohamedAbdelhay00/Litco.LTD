import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginTop: "5rem" }}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold" }}>
          404
        </Typography>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SentimentDissatisfiedIcon
          sx={{ fontSize: "4rem", color: "#004aad" }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          {t("error404")}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Typography variant="body1" sx={{ marginTop: "1rem", color: "gray" }}>
          {t("error404Description")}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ marginTop: "2rem", padding: "0.75rem 2rem" }}
        >
          {t("backToHome")}
        </Button>
      </motion.div>
    </Container>
  );
};

export default NotFound;
