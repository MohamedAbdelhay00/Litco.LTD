import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function CompanyProfile() {
  return (
    <Stack sx={{ backgroundColor: "#ffffff", padding: "40px 20px", marginBottom: "20px" }}>
      <Box>
        <Typography sx={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#333" }} variant="h4">
          Company Profile
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ width: "75%", textAlign: "center", fontSize: "1.1rem", color: "#555" }} variant="p">
            <Typography sx={{ fontWeight: "bold", display: "inline-block", color: "#0056b3" }}>
              Litco LTD
            </Typography>{" "}
            is a leading force in the FMCG landscape, renowned for our exceptional sales and distribution capabilities. With a rich heritage in the consumer goods industry, our company has consistently demonstrated unparalleled proficiency in navigating the complex market dynamics to deliver outstanding results.
            <br /><br />
            Our extensive network, built on the pillars of reliability and efficiency, ensures that a diverse range of consumer goods reaches the marketplace with precision and speed. Our expertise spans across various categories, including but not limited to, food and beverages, personal care, household essentials, and wellness products.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
