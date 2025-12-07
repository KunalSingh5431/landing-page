"use client";

import React from "react";
import { Box, Typography, Container, Card, CardContent, Avatar, styled } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// Ambient soft lights (updated colors)
const Ambient = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background: `
    radial-gradient(900px 420px at 10% 18%, rgba(140, 90, 255, 0.14), transparent 70%),
    radial-gradient(900px 420px at 88% 12%, rgba(0, 255, 214, 0.12), transparent 70%),
    radial-gradient(600px 300px at 50% 6%, rgba(255,255,255,0.06), transparent 60%)
  `,
}));

// Styled Card
const TestimonialCardRoot = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: 24,
  borderRadius: 20,
  background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 14px 32px rgba(8,12,24,0.18), inset 0 0 0 1px rgba(255,255,255,0.02)",
  transition: "transform 250ms ease, box-shadow 250ms ease",
  cursor: "default",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 28px 52px rgba(8,12,24,0.28), inset 0 0 0 1px rgba(255,255,255,0.04)",
  },
}));

const TestimonialCard = ({ quote, name, title, avatar }: any) => (
  <TestimonialCardRoot>
    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <FormatQuoteIcon color="primary" sx={{ fontSize: 44, mb: 2, transform: "scaleX(-1)" }} />
      <Typography variant="body1" sx={{ fontStyle: "italic", mb: 4, lineHeight: 1.8, fontSize: 17 }}>
        "{quote}"
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
        {avatar && (
          <Avatar
            src={avatar}
            alt={name}
            sx={{
              mr: 2.5,
              width: 60,
              height: 60,
              border: "2px solid rgba(0,255,214,0.18)",
              boxShadow: "0 0 10px rgba(0,255,214,0.12)",
              transition: "transform 200ms ease",
              "&:hover": { transform: "scale(1.06)" },
            }}
          />
        )}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, fontSize: 16, color: "#0f1724" }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 14 }}>
            {title}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </TestimonialCardRoot>
);

const WhatLeadersSaySection = () => {
  const testimonials = [
    {
      quote:
        "WorkElate did what I thought was impossible—replaced our entire SaaS stack with one platform. We’re saving $50K annually and our team is actually MORE productive. The AI automation alone is worth 10x the price.",
      name: "Rajesh Mehta",
      title: "Founder & CEO, TechVenture Solutions",
      avatar: "/rajesh-mehta.jpg",
    },
    {
      quote:
        "As an HR Head managing 150+ employees, I was drowning in spreadsheets and tools. WorkElate’s HRMS transformed our operations overnight. Onboarding that took one week now takes one day. It’s magical.",
      name: "Priya Sharma",
      title: "HR Head, Global Manufacturing Inc.",
      avatar: "/priya-sharma.jpg",
    },
    {
      quote:
        "We consolidated five different tools into WorkElate and cut our monthly SaaS bill by 60%. The team collaboration improvements were immediate — fewer meetings, clearer ownership.",
      name: "Ankit Roy",
      title: "Head of Product, BrightRiver Creative",
      avatar: "/ankit-roy.jpg",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        px: 2,
        overflow: "hidden",
        // new section background: subtle dusk gradient
        background: "linear-gradient(180deg, #F7FAFF 0%, #EEF6FF 45%, #F3FBFF 100%)",
      }}
    >
      <Ambient />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: 900, letterSpacing: -0.5, mb: 2, color: "#0f1724" }}
        >
          What Leaders Say
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, fontSize: 16, opacity: 0.9 }}
        >
          Hear from the people who've made the switch
        </Typography>

        {/* Flexbox wrapper: allow three cards in one row on md+ */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "1 1 100%", sm: "1 1 48%", md: "1 1 30%" },
                display: "flex",
              }}
            >
              <TestimonialCard {...testimonial} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhatLeadersSaySection;
