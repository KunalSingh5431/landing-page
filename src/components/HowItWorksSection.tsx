"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import RouteIcon from "@mui/icons-material/Route";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";
import GridViewIcon from "@mui/icons-material/GridView";
import BarChartIcon from "@mui/icons-material/BarChart";
import HubIcon from "@mui/icons-material/Hub";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";

type LayerFeature = {
  text: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
};

type Layer = {
  number: string;
  title: string;
  description: string;
  features: LayerFeature[];
  side: "left" | "right";
};

const Section = styled(Box)({
  position: "relative",
  overflow: "hidden",
  paddingTop: "90px",
  paddingBottom: "90px",
  paddingLeft: "12px",
  paddingRight: "12px",
  background: "linear-gradient(145deg, #f5f7ff 0%, #eef1ff 40%, #ffffff 100%)",
});

const Ambient = styled(Box)({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(1000px 460px at 20% 8%, rgba(140, 90, 255, 0.18), transparent 70%)," +
    "radial-gradient(900px 480px at 82% 6%, rgba(0, 255, 214, 0.16), transparent 68%)",
});

const GlassCard = styled(Paper)({
  width: "100%",
  borderRadius: 22,
  overflow: "hidden",
  background: "rgba(255,255,255,0.78)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(20, 24, 48, 0.12)",
  boxShadow:
    "0 22px 54px rgba(15, 20, 40, 0.12), inset 0 0 0 1px rgba(255,255,255,0.55)",
  transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 32px 75px rgba(15,20,40,0.18), 0 0 28px rgba(0,255,214,0.14)",
    borderColor: "rgba(0,255,214,0.28)",
  },
});

const StepBadge = styled(Box)({
  width: 72,
  height: 72,
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 auto",
  background:
    "linear-gradient(135deg, rgba(150,108,255,0.24), rgba(0,255,214,0.10))",
  border: "1px solid rgba(15, 20, 40, 0.16)",
  boxShadow: "0 14px 30px rgba(15, 20, 40, 0.10)",
});

const Tag = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid rgba(15, 20, 40, 0.14)",
  background: "rgba(255,255,255,0.72)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
});

const FeaturePill = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "10px 12px",
  borderRadius: 14,
  border: "1px solid rgba(15, 20, 40, 0.12)",
  background: "rgba(255,255,255,0.68)",
});

const FeatureItem = ({ text }: { text: string }) => (
  <Box sx={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
    <CheckCircleOutlineIcon sx={{ mt: "2px" }} color="success" fontSize="small" />
    <Typography variant="body2" sx={{ opacity: 0.9 }}>
      {text}
    </Typography>
  </Box>
);

// Keyframes
const slideInKeyframes = {
  "@keyframes slideInLeft": {
    from: { opacity: 0, transform: "translateX(-60px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
  "@keyframes slideInRight": {
    from: { opacity: 0, transform: "translateX(60px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
};

// In-view hook
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.15, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

// Animated row with stronger zigzag offset
function AnimatedLayerRow({
  children,
  side, // "left" | "right"
  delay = 0,
}: {
  children: React.ReactNode;
  side: "left" | "right";
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const keyframeName = side === "left" ? "slideInLeft" : "slideInRight";
  const offset = isMdDown ? 0 : "clamp(80px, 8vw, 160px)";

  return (
    <Box
      ref={ref}
      sx={{
        ...slideInKeyframes,
        display: "flex",
        justifyContent: "center",
        px: { xs: 0, md: 2 },
        opacity: inView ? 1 : 0,
        animation: inView ? `${keyframeName} 700ms ease-out forwards` : "none",
        animationDelay: inView ? `${delay}ms` : "0ms",
        willChange: "transform, opacity",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 860,
          mr: side === "left" ? { xs: 0, md: offset } : 0,
          ml: side === "right" ? { xs: 0, md: offset } : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

// Bold connector segment centered between cards
// Caps are positioned outside the segment so they touch the boxes' edges without overlapping.
function ConnectorSegment() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        height: 120, // adjust to match vertical spacing between cards
      }}
    >
      <Box
        sx={{
          width: 6, // bold line
          height: "100%",
          borderRadius: 999,
          background:
            "linear-gradient(to bottom, rgba(28,31,42,0.0) 0%, rgba(28,31,42,0.45) 15%, rgba(28,31,42,0.45) 85%, rgba(28,31,42,0.0) 100%)",
          boxShadow:
            "0 0 28px rgba(0,255,214,0.45), 0 0 14px rgba(140,90,255,0.35)",
          position: "relative",
        }}
      >
       
        
      </Box>
    </Box>
  );
}

export default function HowItWorksSection() {
  const layers: Layer[] = [
  {
    number: "01",
    title: "Apps Layer",
    description: "Everything your business needs—built natively into one platform.",
    features: [
      { icon: TaskAltIcon, text: "TaskMatic" },
      { icon: RouteIcon, text: "xNetic" },
      { icon: GridViewIcon, text: "Forms" },
      { icon: HubIcon, text: "Board" },
      { icon: ChatIcon, text: "Chat" },
      { icon: MailIcon, text: "Mail" },
      { icon: BarChartIcon, text: "WorkAnalytics" },
    ],
    side: "left",
  },
  {
    number: "02",
    title: "AI & WAO Engine",
    description: "Intelligence that runs the workflow—automatically and reliably.",
    features: [
      { text: "NLP-driven task creation from any text" },
      { text: "Automated workflows that adapt to your process" },
      { text: "Document → task conversion in seconds" },
      { text: "Auto-summaries of meetings and threads" },
      { text: "Smart routing based on content + context" },
      { text: "Persona insights and journey intelligence" },
    ],
    side: "right",
  },
  {
    number: "03",
    title: "Unified Workspace",
    description: "One platform. One truth. Zero switching.",
    features: [
      { icon: TaskAltIcon, text: "One login" },
      { icon: TaskAltIcon, text: "One search" },
      { icon: TaskAltIcon, text: "One knowledge plane" },
      { icon: TaskAltIcon, text: "Zero switching" },
    ],
    side: "left",
  },
];

  return (
    <Section>
      <Ambient />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 900,
            letterSpacing: -0.55,
            color: "#1c1f2a",
            mb: 2,
          }}
        >
          How WorkElate Works
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            opacity: 0.82,
            fontWeight: 520,
            color: "#3a3f55",
            mb: 8,
          }}
        >
          Three layers. Infinite possibilities. Zero friction.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {layers.map((layer, idx) => (
            <React.Fragment key={layer.number}>
              <AnimatedLayerRow side={layer.side} delay={idx * 140}>
                <GlassCard data-cursor="hover">
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "row",
                      gap: 3,
                    }}
                  >
                    <StepBadge>
                      <Typography variant="h5" sx={{ fontWeight: 1000 }}>
                        {layer.number}
                      </Typography>
                    </StepBadge>

                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                          mb: 2,
                          alignItems: "center",
                        }}
                      >
                        <Tag>
                          <Typography variant="caption" sx={{ fontWeight: 900 }}>
                            {layer.title}
                          </Typography>
                        </Tag>
                        <Typography variant="caption" sx={{ opacity: 0.7 }}>
                          {layer.description}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
                        {layer.features.map((feature, fIdx) => (
                            <Box key={fIdx}>
                              {feature.icon ? (
                                <FeaturePill>
                                  <feature.icon color="primary" fontSize="small" />
                                  <Typography variant="body2">{feature.text}</Typography>
                                </FeaturePill>
                              ) : (
                                <FeatureItem text={feature.text} />
                              )}
                            </Box>
                          ))}
                      </Box>
                    </Box>
                  </Box>
                </GlassCard>
              </AnimatedLayerRow>

              {/* Bold connector segment between cards */}
              {idx < layers.length - 1 && <ConnectorSegment />}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
