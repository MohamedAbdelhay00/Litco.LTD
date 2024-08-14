import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import bg from "../../assets/images/ship-2.jpg";
import { useTranslation } from "react-i18next";
import { keyframes } from "@mui/system";
import i18n from "../../i18n";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export default function Home() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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
        marginBottom: { xs: "2rem", md: "4rem" },
        boxSizing: "border-box",
        animation: `${fadeIn} 2s ease-in-out`,
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${bg})`,
          width: `calc(100% - 20px)`,
          objectFit: "cover",
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
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#fff",
            textAlign: "center",
            width: { xs: "90%", md: "70%" },
            paddingTop: "5%",
            lineHeight: 1.2,
          }}
        >
          {t("welcome")}
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            width: { xs: "80%", md: isArabic ? "40%" : "50%" },
            paddingTop: "20px",
            fontSize: { xs: "1rem", md: "1.5rem" },
            marginBottom: "20px",
          }}
        >
          {t("homeDescription")}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 1, padding: "10px 20px", fontSize: "1rem" }}
          onClick={scrollToContact}
        >
          {t("contact-us")}
        </Button>
      </Box>
    </Stack>
  );
}
