"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
  Tooltip,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [showTop, setShowTop] = React.useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  React.useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 320);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#0b0f18",
        color: "common.white",
        py: { xs: 8, md: 12 },
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* subtle ambient glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: "-10%", md: "-6%" },
          top: { xs: "-20%", md: "-10%" },
          width: { xs: 220, md: 420 },
          height: { xs: 220, md: 420 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,255,214,0.08), rgba(140,90,255,0.06) 30%, transparent 60%)",
          filter: "blur(48px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 8 }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-start" }}
        >
          {/* Brand / Description */}
          <Box sx={{ maxWidth: 360 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                letterSpacing: -0.4,
                mb: 1,
                color: "common.white",
              }}
            >
              WorkElate
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}
            >
              The AI-native Work OS that replaces your entire SaaS stack — unify
              tools, reduce cost, and move faster.
            </Typography>

            <Stack direction="row" spacing={1}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  color="inherit"
                  href="#"
                  aria-label={
                    i === 0 ? "Facebook" : i === 1 ? "Twitter" : "LinkedIn"
                  }
                  sx={{
                    bgcolor: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.9)",
                    width: 44,
                    height: 44,
                    "&:hover": {
                      bgcolor: "rgba(0,255,214,0.12)",
                      color: "#00FFD6",
                      transform: "translateY(-3px)",
                    },
                    transition: "all 220ms ease",
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Links columns (centered) */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 6, sm: 8 }}
            sx={{ width: "100%", justifyContent: "center" }}
          >
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Security", "Roadmap"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Support", "FAQs", "Contact"],
              },
            ].map((section, idx) => (
              <Box key={idx} sx={{ minWidth: 120 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 800,
                    mb: 1.5,
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  {section.title}
                </Typography>

                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    href="#"
                    color="inherit"
                    display="block"
                    underline="none"
                    sx={{
                      mb: 1,
                      color: "rgba(255,255,255,0.72)",
                      transition: "color 180ms ease, transform 180ms ease",
                      "&:hover": { color: "#00FFD6", transform: "translateX(6px)" },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            ))}
          </Stack>
        </Stack>

        {/* Single-line privacy & terms centered below links */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            mt: 6,
            pt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" color="rgba(255,255,255,0.6)">
            © {new Date().getFullYear()} WorkElate. All rights reserved.
          </Typography>

          <Box
            component="span"
            sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.12)" }}
          />

          <Link
            href="#"
            color="inherit"
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.68)",
              "&:hover": { color: "#00FFD6" },
            }}
          >
            Privacy Policy
          </Link>

          <Box component="span" sx={{ color: "rgba(255,255,255,0.36)" }}>
            •
          </Box>

          <Link
            href="#"
            color="inherit"
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.68)",
              "&:hover": { color: "#00FFD6" },
            }}
          >
            Terms of Service
          </Link>
        </Box>
      </Container>

      {/* Go to top button (fixed) */}
      <Fade in={showTop} timeout={prefersReducedMotion ? 0 : 300}>
        <Box
          sx={{
            position: "fixed",
            right: { xs: 16, md: 32 },
            bottom: { xs: 16, md: 32 },
            zIndex: 1400,
          }}
        >
          <Tooltip title="Back to top" arrow>
            <IconButton
              onClick={scrollToTop}
              aria-label="Back to top"
              size="large"
              sx={{
                bgcolor: "rgba(0,0,0,0.6)",
                color: "#00FFD6",
                width: 56,
                height: 56,
                boxShadow: "0 8px 28px rgba(0,255,214,0.12)",
                "&:hover": {
                  bgcolor: "rgba(0,255,214,0.08)",
                  transform: "translateY(-4px) scale(1.02)",
                },
                transition: "all 220ms ease",
              }}
            >
              <ArrowUpwardIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Fade>
    </Box>
  );
}
