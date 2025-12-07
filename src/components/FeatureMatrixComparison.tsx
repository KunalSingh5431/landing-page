"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// -------------------- Section Styling --------------------

const Section = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",

  paddingTop: theme.spacing(20),     // 160px top space
  paddingBottom: theme.spacing(20),  // 160px bottom space
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  background: "linear-gradient(145deg, #eef2ff 0%, #f7faff 40%, #ffffff 100%)",
}));

const Ambient = styled(Box)({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  background:
    "radial-gradient(1100px 520px at 12% 10%, rgba(140, 90, 255, 0.18), transparent 70%)," +
    "radial-gradient(1000px 520px at 88% 8%, rgba(0, 255, 214, 0.16), transparent 70%)",
});

const Glass = styled(Paper)({
  borderRadius: 15,
  overflow: "hidden",
  background: "rgba(255,255,255,0.9)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(18, 24, 48, 0.14)",
  boxShadow:
    "0 24px 64px rgba(15, 20, 40, 0.16), inset 0 0 0 1px rgba(255,255,255,0.65)",
});

// legend
const Legend = styled(Box)({
  display: "flex",
  gap: 10,
  borderRadius: 15,
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 14,
  marginBottom: 10,
});

const LegendPill = styled(Box)({
  display: "inline-flex",
  gap: 8,
  alignItems: "center",
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid rgba(18, 24, 48, 0.14)",
  background: "rgba(255,255,255,0.75)",
});

// status icons
const statusCell = (status: boolean | null | undefined) => {
  if (status === true) return <CheckCircleIcon color="success" fontSize="small" />;
  if (status === false) return <CancelIcon color="error" fontSize="small" />;
  return <RemoveIcon color="action" fontSize="small" />;
};

// -------------------- Component --------------------

export default function FeatureMatrixComparison() {
  const features = [
    { name: "CRM", workelate: true, zoho: true, freshworks: true, notion: false, asana: false, slack: false, miro: false, typeform: false },
    { name: "HRMS", workelate: true, zoho: true, freshworks: true, notion: false, asana: false, slack: false, miro: false, typeform: false },
    { name: "Task Management", workelate: true, zoho: true, freshworks: false, notion: true, asana: true, slack: false, miro: false, typeform: false },
    { name: "Project Planning", workelate: true, zoho: true, freshworks: false, notion: true, asana: true, slack: false, miro: false, typeform: false },
    { name: "Whiteboard", workelate: true, zoho: false, freshworks: false, notion: false, asana: false, slack: false, miro: true, typeform: false },
    { name: "Journey Mapping", workelate: true, zoho: false, freshworks: false, notion: false, asana: false, slack: false, miro: true, typeform: false },
    { name: "Forms & Surveys", workelate: true, zoho: true, freshworks: false, notion: false, asana: false, slack: false, miro: false, typeform: true },
    { name: "Email Client", workelate: true, zoho: true, freshworks: true, notion: false, asana: false, slack: false, miro: false, typeform: false },
    { name: "Chat Messaging", workelate: true, zoho: true, freshworks: false, notion: false, asana: false, slack: true, miro: false, typeform: false },
    { name: "Automation (WAO)", workelate: true, zoho: false, freshworks: false, notion: false, asana: false, slack: false, miro: false, typeform: false },
    { name: "Dashboards & Analytics", workelate: true, zoho: true, freshworks: true, notion: false, asana: false, slack: false, miro: false, typeform: false },
  ];

  const competitors = [
    "WorkElate",
    "Zoho One",
    "Freshworks Suite",
    "Notion",
    "Asana",
    "Slack",
    "Miro",
    "Typeform",
  ];

  return (
    <Section>
      <Ambient />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          mt: 6, // extra space inside container
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: 900, letterSpacing: -0.5, color: "#1c1f2a" }}
        >
          Feature Matrix Comparison
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 3, opacity: 0.85, color: "text.secondary" }}
        >
          See how WorkElate stacks up—one platform vs. many point solutions (and the switching cost that comes with them).
        </Typography>

        {/* legend */}
        <Legend>
          <LegendPill>
            <CheckCircleIcon color="success" fontSize="small" />
            <Typography variant="body2" color="#1c1f2a">Included</Typography>
          </LegendPill>

          <LegendPill>
            <CancelIcon color="error" fontSize="small" />
            <Typography variant="body2" color="#1c1f2a">Not included</Typography>
          </LegendPill>

          <LegendPill>
            <RemoveIcon color="action" fontSize="small" />
            <Typography variant="body2" color="#1c1f2a">Not applicable</Typography>
          </LegendPill>
        </Legend>

        {/* scroll wrapper */}
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <Glass>
            <Table sx={{ minWidth: 860 }} aria-label="feature comparison table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 900, whiteSpace: "nowrap" }}>
                    FEATURE
                  </TableCell>
                  {competitors.map((competitor) => (
                    <TableCell
                      key={competitor}
                      align="center"
                      sx={{
                        fontWeight: 900,
                        color:
                          competitor === "WorkElate"
                            ? "primary.main"
                            : "text.primary",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {competitor}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {features.map((feature) => (
                  <TableRow
                    key={feature.name}
                    hover
                    sx={{
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.03)" },
                    }}
                  >
                    <TableCell sx={{ fontWeight: 700 }}>
                      {feature.name}
                    </TableCell>

                    <TableCell align="center">{statusCell(feature.workelate)}</TableCell>
                    <TableCell align="center">{statusCell(feature.zoho)}</TableCell>
                    <TableCell align="center">{statusCell(feature.freshworks)}</TableCell>
                    <TableCell align="center">{statusCell(feature.notion)}</TableCell>
                    <TableCell align="center">{statusCell(feature.asana)}</TableCell>
                    <TableCell align="center">{statusCell(feature.slack)}</TableCell>
                    <TableCell align="center">{statusCell(feature.miro)}</TableCell>
                    <TableCell align="center">{statusCell(feature.typeform)}</TableCell>
                  </TableRow>
                ))}

                {/* bottom hint */}
              </TableBody>
            </Table>
          </Glass>
        </Box>
      </Container>
    </Section>
  );
}
