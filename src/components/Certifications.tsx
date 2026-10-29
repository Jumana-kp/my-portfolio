
"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

const technologies = [
  "Python",
  "Django",
  "Flask",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "Git",
];

export default function Certifications() {
  return (
    <Box
      id="certifications"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            ACHIEVEMENTS
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            My{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Certifications
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 650, lineHeight: 1.8 }}
          >
            Professional training and learning achievements in software
            development.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: "#182235",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2.5}
            sx={{ alignItems: "flex-start" }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                color: "primary.main",
                backgroundColor: "rgba(201, 130, 143, 0.12)",
              }}
            >
              <WorkspacePremiumOutlinedIcon sx={{ fontSize: 32 }} />
            </Box>

            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                }}
              >
                INTERNSHIP CERTIFICATE
              </Typography>

              <Typography
                variant="h5"
                sx={{ mt: 0.5, fontWeight: 700 }}
              >
                Software Developer Internship
              </Typography>

              <Typography sx={{ mt: 1, color: "text.secondary" }}>
                Upcode Software Labs L.L.P.
              </Typography>

              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ mt: 1 }}
              >
                29 December 2025 – 2 September 2026
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mt: 2, lineHeight: 1.9 }}
              >
                Completed an internship involving full-stack application
                development, with exposure to frontend technologies,
                backend development, databases, and software development tools.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mt: 2.5,
                }}
              >
                {technologies.map((technology) => (
                  <Chip
                    key={technology}
                    label={technology}
                    size="small"
                    variant="outlined"
                    sx={{
                      color: "text.secondary",
                      borderColor: "divider",
                    }}
                  />
                ))}
              </Box>

              <Button
                component="a"
                href="/upcode-internship-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                endIcon={<OpenInNewOutlinedIcon />}
                sx={{ mt: 3 }}
              >
                View Certificate
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
