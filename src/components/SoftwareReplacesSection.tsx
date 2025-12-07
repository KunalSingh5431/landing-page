"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ForumIcon from "@mui/icons-material/Forum";
import WorkIcon from "@mui/icons-material/Work";
import PaletteIcon from "@mui/icons-material/Palette";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Section = styled(Box)({
  position: "relative",
  overflow: "hidden",
  paddingTop: "110px",
  paddingBottom: "110px",
  paddingLeft: "16px",
  paddingRight: "16px",
  background:
    "linear-gradient(145deg, #f6f7ff 0%, #eef3ff 34%, #ffffff 100%)",
});

const Ambient = styled(Box)({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(880px 480px at 16% 14%, rgba(140, 90, 255, 0.18), transparent 72%)," +
    "radial-gradient(820px 480px at 86% 12%, rgba(0, 255, 214, 0.16), transparent 72%)",
});

const GlassCard = styled(Card)({
  height: "100%",
  borderRadius: 22,
  overflow: "hidden",
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(18, 24, 48, 0.14)",
  boxShadow:
    "0 18px 42px rgba(15, 20, 40, 0.10), inset 0 0 0 1px rgba(255,255,255,0.55)",
  transition: "transform 200ms ease, box-shadow 200ms ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow:
      "0 32px 72px rgba(15,20,40,0.16), 0 0 20px rgba(0,255,214,0.14)",
    borderColor: "rgba(0,255,214,0.22)",
  },
});

const StatusChip = styled(Chip)({
  fontWeight: 800,
  borderRadius: 999,
  border: "1px solid rgba(18, 24, 48, 0.14)",
  padding: "2px 4px",
});

const FeatureItem = ({ text }: { text: string }) => (
  <Box sx={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
    <CheckCircleOutlineIcon sx={{ mt: "2px" }} color="success" fontSize="small" />
    <Typography variant="body2" sx={{ opacity: 0.9 }}>
      {text}
    </Typography>
  </Box>
);

// Keyframes for fade-up + slight scale
const fadeUpKeyframes = {
  "@keyframes fadeUp": {
    from: { opacity: 0, transform: "translateY(18px) scale(0.985)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
};

const ReplacementCard = ({
  icon: Icon,
  category,
  replacements,
  index,
}: any) => {
  const isReducedMotion = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  return (
    <GlassCard
      sx={{
        // inject keyframes and staggered animation
        ...fadeUpKeyframes,
        opacity: 0,
        transform: "translateY(18px) scale(0.985)",
        animation: isReducedMotion
          ? "none"
          : `fadeUp 560ms cubic-bezier(.2,.9,.2,1) forwards`,
        animationDelay: `${index * 110}ms`,
      }}
    >
      <CardContent
        sx={{
          p: 2.4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            gap: 1.2,
            alignItems: "center",
            mb: 1.3,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(150,108,255,0.22), rgba(0,255,214,0.12))",
              border: "1px solid rgba(18, 24, 48, 0.12)",
            }}
          >
            <Icon color="primary" sx={{ fontSize: 22 }} />
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: -0.3,
              fontSize: "1.1rem",
            }}
          >
            Replace {category}
          </Typography>
        </Box>

        {/* Replacement list */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.7,
            flex: 1,
          }}
        >
          {replacements.map((item: any, idx: number) => {
            const isFull = item.status === "FULLY REPLACED";
            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                  alignItems: "center",
                  p: "6px 10px",
                  borderRadius: 12,
                  border: "1px solid rgba(18, 24, 48, 0.10)",
                  background: "rgba(255,255,255,0.78)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "#1e2332" }}
                >
                  {item.name}
                </Typography>

                <StatusChip
                  size="small"
                  label={item.status}
                  sx={{
                    background: isFull
                      ? "rgba(0, 255, 214, 0.16)"
                      : "rgba(255, 193, 7, 0.18)",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </GlassCard>
  );
};

export default function SoftwareReplacesSection() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const replacementCategories = [
    { icon: BusinessIcon, category: "CRM Tools", replacements: [{ name: "Zoho CRM", status: "FULLY REPLACED" }] },
    { icon: PeopleIcon, category: "HRMS Tools", replacements: [{ name: "Keka (Lite)", status: "FULLY REPLACED" }] },

    {
      icon: WorkIcon,
      category: "Productivity Apps",
      replacements: [
        { name: "Notion (tasks + docs)", status: "PARTIALLY REPLACED" },
        { name: "Google Workspace", status: "PARTIALLY REPLACED" },
        { name: "MS Office", status: "PARTIALLY REPLACED" },
      ],
    },

    {
      icon: AnalyticsIcon,
      category: "Ticketing Systems (SMB)",
      replacements: [
        { name: "Freshdesk", status: "FULLY REPLACED" },
        { name: "Zoho Desk", status: "FULLY REPLACED" },
      ],
    },

    {
      icon: LightbulbIcon,
      category: "Internal Automation Tools",
      replacements: [
        { name: "Zapier", status: "FULLY REPLACED" },
        { name: "Make.com", status: "FULLY REPLACED" },
        { name: "Monday Automations", status: "FULLY REPLACED" },
      ],
    },

    {
      icon: PaletteIcon,
      category: "Whiteboards & Mapping Tools",
      replacements: [
        { name: "Miro", status: "FULLY REPLACED" },
        { name: "Mural", status: "FULLY REPLACED" },
        { name: "FigJam", status: "FULLY REPLACED" },
        { name: "UXPressia", status: "FULLY REPLACED" },
      ],
    },

    {
      icon: ForumIcon,
      category: "Collaboration / Communication",
      replacements: [
        { name: "Slack", status: "FULLY REPLACED" },
        { name: "MS Teams (chat)", status: "PARTIALLY REPLACED" },
        { name: "Gmail + Outlook add-ons", status: "FULLY REPLACED" },
      ],
    },

    {
      icon: DescriptionIcon,
      category: "Forms / Surveys / Workflows",
      replacements: [
        { name: "Google Forms", status: "FULLY REPLACED" },
        { name: "Typeform", status: "FULLY REPLACED" },
        { name: "Tally.so", status: "FULLY REPLACED" },
        { name: "Jotform", status: "FULLY REPLACED" },
        { name: "SurveyMonkey", status: "FULLY REPLACED" },
      ],
    },
  ];

  return (
    <Section>
      <Ambient />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 900,
            letterSpacing: -0.5,
            color: "#1c1f2a",
            mb: 2,
          }}
        >
          Software WorkElate Replaces
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            mb: 8,
            opacity: 0.8,
            fontWeight: 520,
            color: "#3a3f55",
          }}
        >
          One platform. Endless replacements. Massive savings.
        </Typography>

        {/* 3–4 Cards Per Row, Equal Height */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {replacementCategories.map((category, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 48%",
                  md: "1 1 30%",
                  lg: "1 1 calc(25% - 24px)",
                },
                display: "flex",
              }}
            >
              <ReplacementCard {...category} index={index} />
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
