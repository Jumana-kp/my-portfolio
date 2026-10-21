"use client";

import { Box, Stack } from "@mui/material";

export default function DeveloperVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 540,
        mx: "auto",
        py: { xs: 2, md: 4 },
      }}
    >
      {/* Subtle dusty-rose glow */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: "65%",
          aspectRatio: "1",
          borderRadius: "50%",
          backgroundColor: "#C9828F",
          opacity: 0.1,
          filter: "blur(75px)",
          top: "15%",
          left: "18%",
          pointerEvents: "none",
        }}
      />

      {/* Decorative orbital rings */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: "95%",
          height: "72%",
          top: "13%",
          left: "2.5%",
          border: "1px solid rgba(201, 130, 143, 0.2)",
          borderRadius: "50%",
          transform: "rotate(-18deg)",
          pointerEvents: "none",
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: "80%",
          height: "90%",
          top: "4%",
          left: "10%",
          border: "1px solid rgba(201, 130, 143, 0.1)",
          borderRadius: "50%",
          transform: "rotate(35deg)",
          pointerEvents: "none",
        }}
      />

      {/* Animated laptop illustration */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          animation: "workspaceFloat 5s ease-in-out infinite",
          "@keyframes workspaceFloat": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        <Box
          component="img"
          src="/images/developer-workspace.png"
          alt="Laptop displaying code with developer technology symbols"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 24px 35px rgba(0, 0, 0, 0.3))",
          }}
        />
      </Box>

      {/* Minimal status card */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          bottom: "5%",
          right: { xs: "0%", sm: "2%" },
          px: 1.5,
          py: 1.2,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          backgroundColor: "rgba(17, 26, 43, 0.96)",
          animation: "statusFloat 5s ease-in-out infinite",
          animationDelay: "0.5s",
          "@keyframes statusFloat": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-4px)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "primary.main",
              flexShrink: 0,
            }}
          />

          <Box
            component="span"
            sx={{
              color: "text.secondary",
              fontSize: "0.75rem",
              letterSpacing: "0.3px",
              whiteSpace: "nowrap",
            }}
          >
            Build · Code · Create
          </Box>
        </Box>
      </Box>
    </Box>
  );
}