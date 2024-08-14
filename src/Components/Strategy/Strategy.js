import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { Business, ThumbUp, TrendingUp, Verified } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Strategy() {
  const { t } = useTranslation();

  const strategies = [
    {
      icon: (
        <Business
          sx={{ color: "#1976d2", fontSize: "3rem", marginBottom: "10px" }}
        />
      ),
      title: t("valueCreation"),
      description: t("valueCreationDescription"),
    },
    {
      icon: (
        <ThumbUp
          sx={{ color: "#1976d2", fontSize: "3rem", marginBottom: "10px" }}
        />
      ),
      title: t("distributionChannels"),
      description: t("distributionChannelsDescription"),
    },
    {
      icon: (
        <TrendingUp
          sx={{ color: "#1976d2", fontSize: "3rem", marginBottom: "10px" }}
        />
      ),
      title: t("innovativeStrategies"),
      description: t("innovativeStrategiesDescription"),
    },
    {
      icon: (
        <Verified
          sx={{ color: "#1976d2", fontSize: "3rem", marginBottom: "10px" }}
        />
      ),
      title: t("qualityCommitment"),
      description: t("qualityCommitmentDescription"),
    },
    {
      icon: (
        <ThumbUp
          sx={{ color: "#1976d2", fontSize: "3rem", marginBottom: "10px" }}
        />
      ),
      title: t("exceedExpectations"),
      description: t("exceedExpectationsDescription"),
    },
  ];

  return (
    <Box
      sx={{
        padding: "5% 10%",
        background: "linear-gradient(180deg, #f9f9f9 0%, #e0e0e0 100%)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        {t("strategy")}
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        justifyContent="center"
        sx={{ textAlign: "center", gap: "20px", paddingBottom: "20px" }}
      >
        {strategies.map((strategy, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={index}
            sx={{
              width: { xs: "100%", sm: "48%", md: "30%" },
              marginBottom: "0px",
            }}
          >
            <Card
              sx={{
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
                height: "100%",
              }}
            >
              <CardContent>
                {strategy.icon}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginTop: "10px",
                    fontSize: "1.2rem",
                    color: "#333",
                  }}
                >
                  {strategy.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "10px", color: "#555" }}
                >
                  {strategy.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
