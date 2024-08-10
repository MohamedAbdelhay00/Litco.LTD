import { Box, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import missionVisionImg from "../assets/images/vision 2.jpg"; // Replace with a relevant image
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Mission() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <Stack sx={{ padding: "5% 10%", marginBottom: "20px" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={missionVisionImg}
              alt="Mission and Vision"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              sx={{
                textAlign: { xs: "center", md: isArabic ? "right" : "left" },
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#333",
              }}
              variant="h4"
            >
                {t("MissionVision")}
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", md: isArabic ? "right" : "left" },
                fontSize: "1.1rem",
                color: "#555",
                marginTop: "20px",
              }}
            >
              {t("missionDescription")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
