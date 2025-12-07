"use client";

import React from "react";
import { Box, Typography, Container, Card, CardContent, styled } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ComponentType } from "react";

// Keyframes for fade + slide + scale
const fadeUpScale = {
  "@keyframes fadeUpScale": {
    from: { opacity: 0, transform: "translateY(40px) scale(0.95)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
};

const FrostCard = styled(Card)(({ theme }) => ({
  flex: "1 1 300px",
  maxWidth: 350,
  borderRadius: 20,
  padding: theme.spacing(2),
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "0 10px 28px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.04)",
  transition: "0.3s ease",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: "10px",
  opacity: 0,
  transform: "translateY(40px) scale(0.95)",

  "&:hover": {
    transform: "translateY(-5px) scale(1.02)",
    boxShadow:
      "0 16px 38px rgba(0,0,0,0.28), 0 0 14px rgba(0,255,214,0.18), inset 0 0 0 1px rgba(255,255,255,0.12)",
    border: "1px solid rgba(0,255,214,0.38)",
  },
}));

const IconWrap = styled("div")(({ theme }) => ({
  width: 62,
  height: 62,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  marginBottom: theme.spacing(2.6),
  background: "linear-gradient(135deg, rgba(140, 90, 255, 0.2), rgba(0,255,214,0.12))",
  border: "1px solid rgba(255,255,255,0.22)",
  boxShadow: "0 6px 14px rgba(140,90,255,0.22), inset 0 0 18px rgba(0,255,214,0.16)",
}));

type ProblemCardProps = {
  icon: ComponentType<SvgIconProps>; // <— this removes the implicit any
  title: string;
  description: string;
  index: number;
};

const ProblemCard = ({ icon: Icon, title, description, index }: ProblemCardProps) => (
  <FrostCard
    sx={{
      ...fadeUpScale,
      animation: "fadeUpScale 0.8s ease-out forwards",
      animationDelay: `${index * 0.15}s`,
    }}
  >
    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <IconWrap>
        <Icon sx={{ fontSize: 36, opacity: 0.95, color: "#8c5aff" }} />
      </IconWrap>

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.2, letterSpacing: -0.2, color: "#1f1f1f" }}>
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{ opacity: 0.78, lineHeight: 1.55, fontWeight: 400, color: "#333", mt: "auto" }}
      >
        {description}
      </Typography>
    </CardContent>
  </FrostCard>
);

const ProblemSection = () => {
  const problems: Omit<ProblemCardProps, "index">[] = [
    {
      icon: AcUnitIcon,
      title: "Too many SaaS tools",
      description:
        "The average company uses 110+ SaaS apps. Your team drowns in logins, tabs and subscriptions.",
    },
    {
      icon: AcUnitIcon,
      title: "High per-user costs",
      description: "$1,000–$1,500 per employee per year just to get basic work done. Not sustainable.",
    },
    {
      icon: AcUnitIcon,
      title: "Context switching kills focus",
      description: "Jumping across 10–15 apps daily wastes 4+ hours per week per employee.",
    },
    {
      icon: AcUnitIcon,
      title: "Data fragmentation",
      description: "CRM, tasks, docs, chat — all scattered. Nothing connects, reporting becomes painful.",
    },
    {
      icon: AcUnitIcon,
      title: "Slow onboarding",
      description: "New hires spend weeks learning 15 different tools instead of being productive.",
    },
    {
      icon: AcUnitIcon,
      title: "Broken cross-team visibility",
      description: "Silos everywhere. Sales can’t see success data. HR can’t see ops. Chaos grows.",
    },
  ];

  return (
    <Box sx={{ py: 12, px: 2, position: "relative", background: "linear-gradient(135deg, #f7f8fc, #e0f2f7, #ffffff)" }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 900, letterSpacing: -0.6, color: "#1f1f1f" }}>
          The problem with today’s stack
        </Typography>

        <Typography variant="subtitle1" align="center" sx={{ mb: 6, opacity: 0.75, fontWeight: 500, color: "#555" }}>
          “Make AI invisible — outcomes visible.”
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProblemSection;
