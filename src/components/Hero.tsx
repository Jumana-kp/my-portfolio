import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import DeveloperVisual from "./DeveloperVisual";

const githubUrl = "https://github.com/Jumana-kp";
const linkedInUrl = "https://www.linkedin.com/in/jumana-k-p/";

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 12, md: 10 },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ alignItems: "center" }}
        >
          {/* Left: Introduction */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              HELLO, I'M
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mt: 2,
                fontSize: {
                  xs: "3.2rem",
                  sm: "4.5rem",
                  md: "5rem",
                },
                lineHeight: 1,
              }}
            >
              Jumana{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                KP
              </Box>
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 3,
                fontSize: {
                  xs: "1.35rem",
                  md: "1.8rem",
                },
                fontWeight: 600,
                color: "text.secondary",
              }}
            >
              Python Full Stack Developer
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 3,
                maxWidth: 600,
                lineHeight: 1.9,
                fontSize: {
                  xs: "1rem",
                  md: "1.05rem",
                },
              }}
            >
              I build modern, responsive web applications using Python, Django,
              React, Next.js and PostgreSQL, with a focus on clean code and
              practical user experiences.
            </Typography>

            {/* Main Action Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                mt: 4,
                alignItems: {
                  xs: "stretch",
                  sm: "center",
                },
              }}
            >
              <Button
                component="a"
                href="#contact"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Contact Me
              </Button>
              <Button
                component="a"
                href="/JUMANA_KP_RESUME.pdf"
                download="JUMANA_KP_RESUME.pdf"
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<DownloadIcon />}
              >
                Download Resume
              </Button>
            </Stack>

            {/* Social Links */}
            <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
              <Button
                component="a"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                startIcon={<GitHubIcon />}
                sx={{
                  color: "text.secondary",
                  px: 0,
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                GitHub
              </Button>

              <Button
                component="a"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                startIcon={<LinkedInIcon />}
                sx={{
                  color: "text.secondary",
                  px: 0,
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Grid>

          {/* Right: Developer Visual */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DeveloperVisual />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
