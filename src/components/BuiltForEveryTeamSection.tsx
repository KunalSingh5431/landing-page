"use client";

import React from "react";
import { Box, Typography, Container, Card, CardContent, styled } from "@mui/material";

import ShowChartIcon from "@mui/icons-material/ShowChart";
import GroupIcon from "@mui/icons-material/Group";
import MegaphoneIcon from "@mui/icons-material/Campaign";
import AppsIcon from "@mui/icons-material/Apps";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// ====== section + background ======
const Section = styled(Box)({
  position: "relative",
  paddingTop: "120px",      // ⬆ EXTRA SPACE TOP
  paddingBottom: "120px",   // ⬇ EXTRA SPACE BOTTOM
  paddingLeft: "16px",
  paddingRight: "16px",
  overflow: "hidden",
  background: "linear-gradient(145deg, #f3f5ff 0%, #eef2ff 38%, #ffffff 100%)",
});

const Ambient = styled(Box)({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(1200px 520px at 18% 12%, rgba(140, 90, 255, 0.16), transparent 72%)," +
    "radial-gradient(980px 520px at 86% 10%, rgba(0, 255, 214, 0.14), transparent 70%)",
});

// ====== card styling (equal height friendly) ======
const TeamCardRoot = styled(Card)({
  height: "100%",
  borderRadius: 22,
  overflow: "hidden",
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(18, 24, 48, 0.14)",
  boxShadow: "0 18px 42px rgba(15, 20, 40, 0.12), inset 0 0 0 1px rgba(255,255,255,0.55)",
  transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 32px 72px rgba(15,20,40,0.16), 0 0 20px rgba(0,255,214,0.14)",
    borderColor: "rgba(0,255,214,0.22)",
  },
});

const IconBadge = styled("div")({
  width: 64,
  height: 64,
  borderRadius: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 14,
  background: "linear-gradient(135deg, rgba(150,108,255,0.22), rgba(0,255,214,0.12))",
  border: "1px solid rgba(18, 24, 48, 0.14)",
  boxShadow: "0 12px 22px rgba(15, 20, 40, 0.12), inset 0 0 18px rgba(0,255,214,0.10)",
});

const TeamCard = ({ icon: Icon, teamName, before, after, impact }: any) => (
  <TeamCardRoot>
    <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <IconBadge>
        <Icon sx={{ fontSize: 34 }} color="primary" />
      </IconBadge>

      <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 700 }}>
        {teamName}
      </Typography>

      <Typography variant="body2" sx={{ mb: 1.1, lineHeight: 1.55, color: "text.secondary" }}>
        <Box component="span" sx={{ fontWeight: 700, color: "error.main" }}>
          Before:
        </Box>{" "}
        {before}
      </Typography>

      <Typography variant="body2" sx={{ mb: 1.3, lineHeight: 1.55, color: "text.secondary" }}>
        <Box component="span" sx={{ fontWeight: 700, color: "success.main" }}>
          After:
        </Box>{" "}
        {after}
      </Typography>

      <Box
        sx={{
          mt: "auto",
          pt: 1,
          borderTop: "1px solid rgba(18, 24, 48, 0.14)",
          display: "flex",
          gap: 1,
          alignItems: "flex-start",
        }}
      >
        <Typography component="span" sx={{ fontWeight: 800 }}>
          Impact
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary" }}>
          {impact}
        </Typography>
      </Box>
    </CardContent>
  </TeamCardRoot>
);

export default function BuiltForEveryTeamSection() {
  const teams = [
    {
      icon: ShowChartIcon,
      teamName: "Sales Teams",
      before: "CRM in one tool, tasks in another, email in a third, reports scattered.",
      after: "Full pipeline + email campaigns + contact management + tasks in one place.",
      impact: "50% faster deal closing, 30% higher lead conversion.",
    },
    {
      icon: GroupIcon,
      teamName: "HR Teams",
      before: "Spreadsheets for tracking, email for comms, separate ATS.",
      after: "Complete HRMS, automated onboarding, performance tracking, payroll integrations.",
      impact: "40% less HR admin time, 20% faster hiring.",
    },
    {
      icon: MegaphoneIcon,
      teamName: "Marketing",
      before: "Campaign tracking in sheets, content in docs, feedback via email.",
      after: "Campaign management + personas + forms + content + social workflow in one hub.",
      impact: "60% faster launches, 25% higher engagement.",
    },
    {
      icon: AppsIcon,
      teamName: "Product Teams",
      before: "Roadmap in one tool, feedback in forms, dev tasks in Jira.",
      after: "Features → tasks → sprint, all connected and visible.",
      impact: "50% better prioritization, faster shipping cycles.",
    },
    {
      icon: BusinessCenterIcon,
      teamName: "Consultants",
      before: "Client work scattered; proposals in docs; follow-up manual.",
      after: "Journeys, proposals, delivery + feedback—one orchestrated workflow.",
      impact: "Handle 2× more clients with the same effort.",
    },
    {
      icon: SchoolIcon,
      teamName: "Training Companies",
      before: "Registration forms separate, content elsewhere, feedback disconnected.",
      after: "Registration → schedule → delivery → surveys, end-to-end automation.",
      impact: "3× batch capacity, 90% admin time saved.",
    },
  ];

  return (
    <Section>
      <Ambient />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* ====== Heading with theme color ====== */}
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 900,
            color: "#1c1f2a", // 🌈 MATCHED THE THEME COLOR
          }}
        >
          Built for every team
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 7, color: "text.secondary", maxWidth: 760, mx: "auto" }}
        >
          One platform — infinite workflows (sales, HR, marketing, product, services & training).
        </Typography>

        {/* ====== Flex layout (no Grid) ====== */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {teams.map((team, idx) => (
            <Box
              key={idx}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 calc(50% - 12px)",
                  md: "1 1 calc(33.333% - 16px)",
                },
                minWidth: { xs: "100%", sm: "280px" },
                display: "flex",
              }}
            >
              <TeamCard {...team} />
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
