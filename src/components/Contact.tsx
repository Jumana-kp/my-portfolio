import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const email = "13jumanakp@gmail.com";
const githubUrl = "https://github.com/Jumana-kp";
const linkedInUrl = "https://www.linkedin.com/in/jumana-k-p/";

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5, md: 7 },
            backgroundColor: "#182235",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1.5,
              fontSize: { xs: "2.2rem", md: "3.4rem" },
              lineHeight: 1.2,
            }}
          >
            Let's work{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              together.
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 580,
              mx: "auto",
              mt: 3,
              lineHeight: 1.9,
            }}
          >
            I'm interested in opportunities where I can apply my full-stack
            development skills, contribute to meaningful projects and continue
            learning. Feel free to get in touch.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              mt: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              component="a"
              href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EmailOutlinedIcon />}
              endIcon={<ArrowOutwardIcon />}
            >
              Email Me
            </Button>

            <Button
              component="a"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>

            <Button
              component="a"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </Stack>
        </Paper>
      </Container>

      {/* Footer */}
      
{/* Footer */}
<Container maxWidth="lg">
    <Divider sx={{ mt: 8, mb: 3 }} />

    <Box
        sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            pb: 2,
        }}
    >
        <Typography
            variant="body2"
            color="text.secondary"
        >
            © 2026 Jumana KP. All rights reserved.
        </Typography>
    </Box>
</Container>
</Box>

    
  );
}
