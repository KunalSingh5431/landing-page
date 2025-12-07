"use client";

import React from "react";
import { Box, Typography, Container, Button, styled } from "@mui/material";

// Button base
const GlowButton = styled(Button)(({ theme }) => ({
  borderRadius: 14,
  fontWeight: 700,
  padding: "12px 28px",
  textTransform: "none",
  letterSpacing: 0.3,
  transition: "transform 220ms ease, box-shadow 220ms ease, opacity 220ms ease",
  position: "relative",
  overflow: "hidden",

  // subtle inner glow layer (static)
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(400px 120px at 10% 10%, rgba(255,255,255,0.06), transparent 30%), linear-gradient(90deg, rgba(0,255,214,0.06), rgba(140,90,255,0.06))",
    zIndex: 0,
    opacity: 0.9,
    pointerEvents: "none",
  },

  // keep text above pseudo element
  "& > span": {
    position: "relative",
    zIndex: 1,
  },

  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 10px 28px rgba(0, 255, 214, 0.22)",
  },

  // reduced motion respect
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    "&:hover": { transform: "none", boxShadow: "none" },
    "&::before": { transition: "none" },
  },
}));

// Keyframes (injected via sx usage)
const fadeUpKeyframes = {
  "@keyframes ctaFadeUp": {
    from: { opacity: 0, transform: "translateY(18px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

const pulseGlowKeyframes = {
  "@keyframes pulseGlow": {
    "0%": { boxShadow: "0 0 40px rgba(0,255,214,0.12)" },
    "50%": { boxShadow: "0 0 60px rgba(0,255,214,0.18)" },
    "100%": { boxShadow: "0 0 40px rgba(0,255,214,0.12)" },
  },
};

export default function CtaSection() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Box
      sx={{
        py: 12,
        px: 2,
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f1220 0%, #2b2540 45%, #6b5f86 100%)",
        ...fadeUpKeyframes,
        ...pulseGlowKeyframes,
      }}
    >
      {/* animated top glow */}
      <Box
        sx={{
          position: "absolute",
          top: -160,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 360, md: 720 },
          height: { xs: 360, md: 720 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,214,0.28) 0%, rgba(0,255,214,0.06) 30%, rgba(0,255,214,0) 60%)",
          filter: "blur(80px)",
          zIndex: 0,
          opacity: 0.95,
          animation: prefersReducedMotion ? "none" : "ctaFadeUp 900ms ease-out both",
        }}
      />

      {/* subtle moving accent behind buttons */}
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          right: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(140,90,255,0.12) 0%, rgba(140,90,255,0.02) 40%, rgba(140,90,255,0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          animation: prefersReducedMotion ? "none" : "pulseGlow 3.6s ease-in-out infinite",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 900,
            letterSpacing: -0.7,
            mb: 2,
            color: "common.white",
            opacity: 0,
            animation: prefersReducedMotion ? "none" : "ctaFadeUp 700ms ease-out forwards",
            animationDelay: "80ms",
          }}
        >
          Stop paying for 15 tools.
          <br />
          Start growing with one.
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: 5,
            fontWeight: 400,
            color: "rgba(255,255,255,0.92)",
            opacity: 0,
            animation: prefersReducedMotion ? "none" : "ctaFadeUp 700ms ease-out forwards",
            animationDelay: "180ms",
          }}
        >
          Join the companies replacing their entire SaaS stack with WorkElate.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2.5,
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            opacity: 0,
            animation: prefersReducedMotion ? "none" : "ctaFadeUp 700ms ease-out forwards",
            animationDelay: "260ms",
          }}
        >
          {/* Primary CTA: combined animations declared together (entrance + subtle pulse) */}
          <GlowButton
            variant="contained"
            size="large"
            data-cursor="hover"
            sx={{
              bgcolor: "rgba(0,255,214,0.98)",
              color: "#000",
              px: { xs: 6, sm: 6 },
              // combine entrance and looped pulse in one property (no conflicting overrides)
              animation: prefersReducedMotion
                ? "none"
                : `ctaFadeUp 640ms cubic-bezier(.2,.9,.2,1) forwards, pulseGlow 3.6s ease-in-out 800ms infinite`,
              // initial boxShadow for visual depth (pulse will animate it)
              boxShadow: prefersReducedMotion ? "none" : "0 12px 40px rgba(0,255,214,0.18)",
            }}
          >
            Start Free Trial
          </GlowButton>

          {/* Secondary CTAs: only entrance animation (no continuous pulse) */}
          <GlowButton
            variant="outlined"
            size="large"
            data-cursor="hover"
            sx={{
              borderColor: "rgba(255,255,255,0.65)",
              color: "rgba(255,255,255,0.95)",
              background: "transparent",
              animation: prefersReducedMotion
                ? "none"
                : `ctaFadeUp 640ms cubic-bezier(.2,.9,.2,1) forwards`,
              animationDelay: "420ms",
              "&:hover": {
                borderColor: "white",
                background: "rgba(255,255,255,0.06)",
              },
            }}
          >
            Book a Demo
          </GlowButton>

          <GlowButton
            variant="outlined"
            size="large"
            data-cursor="hover"
            sx={{
              borderColor: "rgba(255,255,255,0.65)",
              color: "rgba(255,255,255,0.95)",
              background: "transparent",
              animation: prefersReducedMotion
                ? "none"
                : `ctaFadeUp 640ms cubic-bezier(.2,.9,.2,1) forwards`,
              animationDelay: "520ms",
              "&:hover": {
                borderColor: "white",
                background: "rgba(255,255,255,0.06)",
              },
            }}
          >
            Talk to Sales
          </GlowButton>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            letterSpacing: 0.2,
            color: "rgba(255,255,255,0.9)",
            opacity: 0,
            animation: prefersReducedMotion ? "none" : "ctaFadeUp 700ms ease-out forwards",
            animationDelay: "640ms",
          }}
        >
          No credit card required • 14-day free trial • Setup in 5 minutes
        </Typography>
      </Container>
    </Box>
  );
}
