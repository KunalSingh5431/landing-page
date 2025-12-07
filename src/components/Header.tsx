"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  useScrollTrigger,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  styled,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Feature Matrix", id: "feature-matrix" },
  { label: "Lower Cost", id: "lower-cost" },
  { label: "Real Results", id: "real-results" },
  { label: "What Leaders Say", id: "leaders" },
];

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  background: "rgba(245, 248, 252, 0.95)",
  borderBottom: `1px solid rgba(200,200,200,0.5)`,
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  position: "sticky",
  top: 0,
  zIndex: 1200,
  transition: "background 0.3s",
}));

const NavButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  textTransform: "none",
  letterSpacing: 0.5,
  fontWeight: 500,
  fontSize: "1rem",
  paddingInline: theme.spacing(2),
  color: "#1e1e1e",
  "&:hover": {
    backgroundColor: "rgba(220,220,220,0.5)",
    transform: "translateY(-1px)",
  },
}));

const PrimaryCta = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  textTransform: "none",
  fontWeight: 600,
  letterSpacing: 0.25,
  fontSize: "1rem",
  paddingInline: theme.spacing(3),
  background: "linear-gradient(135deg, #8c5aff, #00ffd6)",
  color: "#fff",
  "&:hover": {
    filter: "brightness(1.05)",
  },
}));

export default function Header() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 18 });

  const [open, setOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 90; // matches your sticky header height (tweak if needed)
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <GlassAppBar
      elevation={0}
      color="transparent"
      sx={{ ...(trigger ? { background: "rgba(240,245,250,0.98)" } : {}) }}
    >
      <Toolbar sx={{ minHeight: 80, display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 120 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "black" }}>
            LOGO
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }} />

        {isMdUp ? (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center", flex: 11 }}>
            {navItems.map((item) => (
              <NavButton key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </NavButton>
            ))}
          </Box>
        ) : (
          <IconButton onClick={() => setOpen(true)} aria-label="Open menu" sx={{ color: "#1e1e1e" }}>
            <MenuIcon />
          </IconButton>
        )}

        {isMdUp && (
          <Box sx={{ ml: 3 }}>
            <PrimaryCta variant="contained">Get Demo</PrimaryCta>
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 280, background: "rgba(245,248,252,0.98)" } }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Navigate
          </Typography>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => {
                  setOpen(false);
                  scrollToSection(item.id);
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ p: 2 }}>
            <PrimaryCta fullWidth variant="contained" onClick={() => setOpen(false)}>
              Get Demo
            </PrimaryCta>
          </Box>
        </List>
      </Drawer>
    </GlassAppBar>
  );
}
