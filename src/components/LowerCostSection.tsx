"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Stack,
  styled,
} from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: theme.spacing(18),
  paddingBottom: theme.spacing(18),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  background: "linear-gradient(135deg, #070A18 0%, #101633 46%, #070A18 100%)",
}));

const Ambient = styled(Box)({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(1280px 560px at 18% 12%, rgba(140, 90, 255, 0.30), transparent 76%)," +
    "radial-gradient(1020px 560px at 86% 14%, rgba(0, 255, 214, 0.22), transparent 74%)",
});

const Price = styled((props: TypographyProps) => <Typography {...props} />)({
  fontWeight: 1000,
  letterSpacing: -0.5,
});

const MiniLabel = styled((props: TypographyProps) => <Typography {...props} />)({
  fontWeight: 900,
  letterSpacing: 0.12,
  opacity: 0.92,
});

const GlassCard = styled(Card)({
  height: "100%",
  borderRadius: 22,
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "0 24px 64px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.08)",
  transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow:
      "0 34px 80px rgba(0,0,0,0.64), 0 0 24px rgba(0,255,214,0.18), inset 0 0 0 1px rgba(0,255,214,0.30)",
    borderColor: "rgba(0,255,214,0.38)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(130deg, rgba(255,255,255,0.10), rgba(255,255,255,0) 42%, rgba(255,255,255,0.06) 100%)",
    opacity: 0.9,
    pointerEvents: "none",
  },
});

const CostComparisonCard = ({
  title,
  description,
  items,
  price,
  savings,
}: {
  title: string;
  description: string;
  items: string[];
  price: string;
  savings?: string | null;
}) => (
  <GlassCard data-cursor="hover">
    {savings ? (
      <Chip
        label={savings}
        color="success"
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          fontWeight: 900,
          letterSpacing: 0.2,
          borderRadius: 999,
          background: "rgba(0,255,214,0.18)",
          border: "1px solid rgba(0,255,214,0.32)",
        }}
      />
    ) : null}

    <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", gap: 1.4 }}>
      <MiniLabel variant="caption">{description}</MiniLabel>

      <Typography
        variant="h5"
        component="h3"
        sx={{ fontWeight: 1000, letterSpacing: -0.3, color: "rgba(255,255,255,0.98)" }}
      >
        {title}
      </Typography>

      <Box sx={{ flex: 1 }}>
        {items.map((item, idx) => (
          <Box key={idx} sx={{ display: "flex", gap: 0.9, alignItems: "flex-start", mb: 0.85 }}>
            <CheckCircleOutlineIcon color="primary" sx={{ mt: 0.1, fontSize: 18 }} />
            <Typography variant="body2" sx={{ opacity: 0.92, lineHeight: 1.55, color: "rgba(255,255,255,0.92)" }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ pt: 0.2 }}>
        <Price variant="h4" component="p" sx={{ color: "rgba(255,255,255,0.98)" }}>
          {price}
        </Price>
      </Box>
    </CardContent>
  </GlassCard>
);

export default function LowerCostSection() {
  return (
    <Section>
      <Ambient />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 980, letterSpacing: -0.7, color: "rgba(255,255,255,0.98)" }}
        >
          85–90% Lower Cost
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 7, opacity: 0.86, fontWeight: 520, color: "rgba(255,255,255,0.86)" }}
        >
          “Craftsmanship all the way down” — fewer tools, fewer invoices, sharper execution.
        </Typography>

        {/* ✅ Replaced Grid with Stack + Boxes (no item/container props required) */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ width: { xs: "100%", md: "41.666%" } }}>
            <CostComparisonCard
              title="Traditional SaaS Stack"
              description="Per user, per year"
              items={[
                "Asana / Monday",
                "Slack",
                "Zendesk",
                "Miro",
                "Google Forms",
                "Zapier",
                "Zoho CRM",
              ]}
              price="$144 + $96 + … ≈ $1000"
              savings={null}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: 120 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: { xs: 2, md: 0 },
            }}
          >
            <ArrowForwardIcon
              sx={{
                fontSize: 54,
                color: "primary.main",
                filter: "drop-shadow(0 16px 24px rgba(0,0,0,0.55))",
              }}
            />
          </Box>

          <Box sx={{ width: { xs: "100%", md: "41.666%" } }}>
            <CostComparisonCard
              title="WorkElate Full Suite"
              description="Per user, per year"
              items={[
                "All CRM features",
                "Complete HRMS & ATS",
                "TaskMatic (Projects + Tasks)",
                "xNetic (Journey Mapping)",
                "Chat + Mail",
                "Forms + Whiteboards",
                "Automation (WAO) + Analytics",
              ]}
              price="$150"
              savings="Save 85%"
            />
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}
