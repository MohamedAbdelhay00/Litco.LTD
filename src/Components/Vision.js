import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function Vision() {
  return (
    <Stack sx={{ backgroundColor: "#ffffff", padding: "40px 20px", marginBottom: "20px" }}>
      <Box>
        <Typography sx={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#333" }} variant="h4">
          Vision
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ width: "75%", textAlign: "center", fontSize: "1.1rem", color: "#555" }} variant="p">
            To be the preferred partner for brands looking to expand their reach and impact in the consumer market.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
