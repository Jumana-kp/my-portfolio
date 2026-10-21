"use client";

import { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(11, 18, 32, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Typography
            component="a"
            href="#home"
            sx={{
              color: "text.primary",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "-0.5px",
            }}
          >
            JUMANA{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main",
              }}
            >
              KP
            </Box>
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {navigation.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                color="inherit"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.9rem",
                  px: 1.5,

                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "close navigation menu" : "open navigation menu"
            }
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              color: "text.primary",
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        {/* Mobile Navigation */}
        {menuOpen && (
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              flexDirection: "column",
              py: 2,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            {navigation.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={handleNavigation}
                sx={{
                  justifyContent: "flex-start",
                  color: "text.secondary",
                  py: 1.5,

                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
