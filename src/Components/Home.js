import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../assets/images/ship-5247536.jpg";
import { useTranslation } from "react-i18next";
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export default function Home() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
        padding: { xs: "10px", md: "20px" },
        boxSizing: "border-box",
        animation: `${fadeIn} 2s ease-in-out`,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          width: `calc(100% - 20px)`,
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          margin: "0 10px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },  // Adjusted for smaller screens
            color: "#fff",
            textAlign: "center",
            width: { xs: "90%", md: "50%" },
            paddingTop: "20px",
            lineHeight: 1.2, // Improved line height
          }}
        >
          {t('welcome')}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            color: "#fff",
            textAlign: "center",
            width: { xs: "80%", md: "50%" },
            paddingTop: "20px",
            fontSize: { xs: "1rem", md: "1.5rem" },  // Adjusted for smaller screens
          }}
        >
          {t('homeDescription')}
        </Typography>
        <Button 
          variant="contained" 
          sx={{ mt: 1, padding: "10px 20px", fontSize: "1rem" }}
          onClick={scrollToContact} // Scroll to contact on click
        >
          {t("contact")}
        </Button>
      </Box>
    </Stack>
  );
}
