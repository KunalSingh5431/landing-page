"use client";

import React from "react";
import { Box, Typography, Button, Container, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SparklesIcon from "@mui/icons-material/AutoAwesome";

// Keyframe animation: fade in + slide up
const fadeUp = {
  "@keyframes fadeUp": {
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

// Deep gradient background
const HeroRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "85vh",
  padding: theme.spacing(10, 2),
  textAlign: "center",
  background: `linear-gradient(135deg, #1f1c2c 0%, #4b3f72 50%, #00ffd6 100%)`,
  color: "#fff",
  overflow: "hidden",
}));

// Primary gradient button
const PrimaryBtn = styled(Button)(({ theme }) => ({
  borderRadius: 999,
  textTransform: "none",
  fontWeight: 700,
  fontSize: "1.05rem",
  letterSpacing: 0.25,
  paddingInline: theme.spacing(3),
  background: "linear-gradient(135deg, #8c5aff, #00ffd6)",
  color: "#fff",
  boxShadow: "0 18px 42px rgba(140,90,255,0.25), 0 10px 24px rgba(0,255,214,0.12)",
  "&:hover": {
    filter: "brightness(1.1)",
    boxShadow: "0 22px 50px rgba(140,90,255,0.35), 0 12px 28px rgba(0,255,214,0.15)",
  },
}));

// Ghost button
const GhostBtn = styled(Button)(({ theme }) => ({
  borderRadius: 999,
  textTransform: "none",
  fontWeight: 600,
  fontSize: "1rem",
  letterSpacing: 0.2,
  paddingInline: theme.spacing(2.5),
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  "&:hover": {
    background: "rgba(255,255,255,0.16)",
  },
}));

export default function HeroSection() {
  return (
    <HeroRoot>
      <Container maxWidth="md">
        {/* Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            px: 1.5,
            py: 0.5,
            borderRadius: 999,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.12)",
            mb: 3,
            justifyContent: "center",
            mx: "auto",
            ...fadeUp,
            animation: "fadeUp 0.8s ease-out forwards",
          }}
        >
          <SparklesIcon sx={{ fontSize: 18, opacity: 0.9 }} />
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.2 }}>
            AI-native workflow layer · one workspace
          </Typography>
        </Box>

        <Typography
          component="h1"
          variant="h2"
          sx={{
            fontWeight: 900,
            letterSpacing: -0.5,
            lineHeight: 1.1,
            mb: 3,
            ...fadeUp,
            animation: "fadeUp 1s ease-out forwards",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          One platform to replace 15+ SaaS tools
        </Typography>

        <Typography
          component="p"
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 500,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            ...fadeUp,
            animation: "fadeUp 1s ease-out forwards",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          WorkElate unifies CRM, HRMS, tasks, email, chat, forms, boards, journeys,
          automation & analytics — so teams run faster from one AI-native workspace.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            flexWrap: "wrap",
            justifyContent: "center",
            ...fadeUp,
            animation: "fadeUp 1s ease-out forwards",
            animationDelay: "0.6s",
            opacity: 0,
          }}
        >
          <PrimaryBtn variant="contained" size="large">
            Start Free <ArrowForwardIcon sx={{ ml: 0.5, fontSize: 20 }} />
          </PrimaryBtn>
          <GhostBtn variant="outlined" size="large">
            Watch Demo
          </GhostBtn>
          <GhostBtn variant="outlined" size="large">
            See Cost Savings
          </GhostBtn>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 3,
            color: "rgba(255,255,255,0.7)",
            ...fadeUp,
            animation: "fadeUp 1s ease-out forwards",
            animationDelay: "0.8s",
            opacity: 0,
          }}
        >
          Built for founders, teams, SMBs & emerging enterprises — tuned for speed and clarity.
        </Typography>
      </Container>
    </HeroRoot>
  );
}
