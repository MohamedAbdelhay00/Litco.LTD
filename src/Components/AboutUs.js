import { Box, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import aboutusImg from "../assets/images/about-us 2.jpg"; // Replace with a relevant image
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function AboutUs() {
  const { t } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <Stack sx={{ backgroundColor: "#f9f9f9", padding: "5% 10%",}}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography sx={{  textAlign: { xs: "center", md: isArabic ? "right" : "left" }, fontSize: "2.5rem", fontWeight: "bold", color: "#333", marginBottom: "30px" }} variant="h4">
            {t("aboutUS")}
            </Typography>
            <Typography sx={{ textAlign: isArabic ? "right" : "left", fontSize: "1.1rem", color: "#555", marginTop: "20px" }}>
              <Typography sx={{ fontWeight: "bold", display: "inline-block", color: "#0056b3" }}>
                Litco LTD
              </Typography>{" "}
              {t("aboutDescription")}
              <br /><br />
              {t("aboutDescriptionP2")}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", margin: "20px" }}>
            <img src={aboutusImg} alt="Company Overview" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
