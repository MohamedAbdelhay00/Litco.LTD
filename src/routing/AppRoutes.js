// src/routing/AppRoutes.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NotFound from "../Components/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default AppRoutes;
