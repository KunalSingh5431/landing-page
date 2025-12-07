"use client";

import React from "react";
import { Box, Typography, Container, Card, CardContent, styled } from "@mui/material";

const Section = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  py: 48, // increased vertical padding
  px: 2,
  background: `
    linear-gradient(145deg, #F0F4FA 0%, #DCE4F2 45%, #E8EFF9 100%)
  `,
}));

const Ambient = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background: `
    radial-gradient(1200px 600px at 12% 12%, rgba(90, 120, 255, 0.12), transparent 75%),
    radial-gradient(1200px 600px at 88% 10%, rgba(255, 140, 90, 0.10), transparent 75%)
  `,
}));

const GlassCard = styled(Card)(() => ({
  height: "100%",
  borderRadius: 22,
  overflow: "hidden",
  background: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 22px 54px rgba(0,0,0,0.08)",
  transition: "transform 200ms ease, box-shadow 200ms ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 36px 72px rgba(0,0,0,0.14)",
  },
}));

const ResultCard = ({ number, title, description, stats }: any) => (
  <GlassCard>
    <CardContent
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.6,
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 900, color: "#2B3A5C", letterSpacing: -0.3 }}
      >
        {number}
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: 800, color: "#1C1F2A", letterSpacing: -0.2 }}
      >
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: "#4A5065", lineHeight: 1.75 }}>
        {description}
      </Typography>

      {stats && (
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 1.2,
            pt: 2,
            borderTop: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {stats.map((stat: any, index: number) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 120px",
                minWidth: 120,
                p: 1.2,
                borderRadius: 14,
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 900,
                  color: stat.color,
                  letterSpacing: -0.1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ color: "#586078" }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </CardContent>
  </GlassCard>
);

export default function RealResultsSection() {
  const results = [
    {
      number: "01",
      title: "BrightRiver Creative: 43% Faster Delivery",
      description:
        "40-member digital agency replaced 6 tools and delivered projects 43% faster with WorkElate’s unified platform.",
      stats: null,
    },
    {
      number: "02",
      title: "Navjyot Engineering: Payroll In 1 Day",
      description:
        "150-employee manufacturing company eliminated 7 spreadsheets and reduced payroll from 8 days to 1 day.",
      stats: null,
    },
    {
      number: "03",
      title: "TechFlow Software: 3× Sales Velocity",
      description:
        "B2B SaaS company accelerated sales cycles from 90 days to 30 days with Forms + TaskMatic + WAO automation.",
      stats: [
        { value: "3×", label: "Faster Cycles", color: "primary.main" },
        { value: "+47%", label: "Conversion Rate", color: "success.main" },
        { value: "₹14L", label: "Annual Savings", color: "warning.main" },
      ],
    },
    {
      number: "04",
      title: "CloudScale: NPS from 48 → 67",
      description:
        "Cloud infrastructure company improved NPS by 19 points and reduced churn by 62% using xNetic + WorkAnalytics.",
      stats: [
        { value: "+19", label: "NPS Points", color: "primary.main" },
        { value: "-62%", label: "Churn", color: "error.main" },
        { value: "₹18L", label: "Revenue Retained", color: "success.main" },
      ],
    },
    {
      number: "05",
      title: "View All 10 Case Studies",
      description:
        "See how companies across 10 industries achieved transformational results with WorkElate.",
      stats: null,
    },
    {
      number: "06",
      title: "Customer Success Boosts NPS from 48 to 67",
      description:
        "E-commerce platform improved customer satisfaction dramatically by giving CS team unified view of every customer interaction.",
      stats: null,
    },
  ];

  return (
    <Section>
      <Ambient />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            fontWeight: 900,
            letterSpacing: -0.6,
            color: "#1C1F2A",
            mt: 15,
            mb: 4, // increased margin
          }}
        >
          Real Results from Real Teams
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            mb: 12, // increased margin for spacing from cards
            color: "#4E556C",
            fontWeight: 500,
          }}
        >
          See how companies like yours transformed with WorkElate — faster delivery, cleaner ops, lower spend.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mb: 15,
            gap: 4,
            justifyContent: "center",
          }}
        >
          {results.map((result, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 48%", md: "1 1 31%" },
                minWidth: { xs: "100%", sm: "280px" },
                display: "flex",
              }}
            >
              <ResultCard {...result} />
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
