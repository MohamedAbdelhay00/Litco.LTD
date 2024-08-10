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
        padding: "20px",
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
            fontSize: { xs: "2.5rem", md: "3rem" },
            color: "#fff",
            textAlign: "center",
            width: { xs: "100%", md: "50%" },
            paddingTop: "20px",
            
          }}
        >
          {t('welcome')}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            color: "#fff",
            textAlign: "center",
            width: { xs: "75%", md: "50%" },
            paddingTop: "20px",
          }}
        >
          {t('homeDescription')}
        </Typography>
        <Button 
          variant="contained" 
          sx={{ mt: 1, padding: "10px 20px" }}
          onClick={scrollToContact} // Scroll to contact on click
        >
          {t("contact")}
        </Button>
      </Box>
    </Stack>
  );
}
