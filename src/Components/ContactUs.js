import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import ContactFormEn from "./ContactFormEn";
import ContactFormAr from "./ContactFormAr";

export default function ContactUs() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box sx={{ padding: "5% 10%", backgroundColor: "#ffffff", marginBottom: { xs: "2rem", md: "4rem" }, }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            color={"primary"}
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            {t("contact-us")}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", marginBottom: "20px" }}
          >
            {t("howCanWeHelp")}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>{t("fillForm")}</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                color: "#004aad", // Customize this color
              }}
              gap={2}
              onClick={() => window.open("tel:+966555344342")}
            >
              <IconButton
                sx={{ color: "#ffffff", backgroundColor: "#004aad" }}
                aria-label="phone"
              >
                <PhoneIcon fontSize="medium" />
              </IconButton>
              <Typography sx={{ marginLeft: "10px", direction: "ltr" }}>
                +966 55 534 4342
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                color: "#004aad", // Customize this color
              }}
              gap={2}
              onClick={() => window.open("mailto:fadi_omar2010@hotmail.com")}
            >
              <IconButton
                sx={{ color: "#ffffff", backgroundColor: "#004aad" }}
                aria-label="email"
              >
                <EmailIcon fontSize="medium" />
              </IconButton>
              <Typography sx={{ marginLeft: "10px" }}>
                fadi_omar2010@hotmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                color: "#004aad", // Customize this color
              }}
              gap={2}
              onClick={() =>
                window.open("https://wa.me/+966555344342?text=Hello", "_blank")
              }
            >
              <IconButton
                sx={{ color: "#ffffff", backgroundColor: "#004aad" }}
                aria-label="whatsapp"
              >
                <WhatsAppIcon fontSize="medium" />
              </IconButton>
              <Typography sx={{ marginLeft: "10px" }}>
                {t("whatsapp")}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {isArabic ? <ContactFormAr /> : <ContactFormEn />}
        </Grid>
      </Grid>
    </Box>
  );
}
