"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Full-Stack E-commerce Application",
    image: "/images/ecommerce-project.png",
    imageAlt: "E-commerce application project preview",
    description:
      "A full-stack e-commerce application with product browsing, authentication, cart management, checkout, order tracking and product reviews.",
    technologies: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redux Toolkit",
      "Material UI",
      "JWT Authentication",
    ],
    github: "https://github.com/Jumana-kp/ecommerce-project", // Add your E-commerce GitHub repository URL
  },
  {
    title: "CRM Application",
    image: "/images/crm-proj.png",
    imageAlt: "CRM application dashboard project preview",
    description:
      "A CRM application designed to manage companies and customer-related business data through a responsive interface, dashboards and REST APIs.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redux Toolkit",
      "Material UI",
      "Recharts",
    ],
    github: "https://github.com/Jumana-kp/crm-project", // Add your CRM GitHub repository URL
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            MY WORK
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontSize: {
                xs: "2.2rem",
                md: "3.2rem",
              },
              fontWeight: 800,
            }}
          >
            Featured{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Projects.
            </Box>
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              maxWidth: 650,
              lineHeight: 1.8,
            }}
          >
            A selection of applications I have developed using modern frontend
            and backend technologies.
          </Typography>
        </Box>

        {/* Project cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundColor: "#182235",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                transition: "transform 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "primary.main",
                },
              }}
            >
              {/* Project image */}
              <Box
                sx={{
                  height: {
                    xs: 200,
                    sm: 240,
                  },
                  overflow: "hidden",
                  backgroundColor: "#111A2B",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.imageAlt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "top",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                />
              </Box>

              {/* Project details */}
              <CardContent
                sx={{
                  p: { xs: 3, md: 3.5 },
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.4,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Technologies */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 3,
                  }}
                >
                  {project.technologies.map((technology) => (
                    <Chip
                      key={technology}
                      label={technology}
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "text.secondary",
                        borderColor: "divider",
                        borderRadius: 1.5,
                        "&:hover": {
                          color: "primary.main",
                          borderColor: "primary.main",
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* GitHub link */}
                <Box sx={{ mt: "auto", pt: 1 }}>
                  {project.github ? (
                    <Button
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      color="primary"
                      size="medium"
                      startIcon={<GitHubIcon />}
                    >
                      View Source Code
                    </Button>
                  ) : (
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                      <Typography variant="body2">
                        Add your GitHub repository URL
                      </Typography>
                    </Stack>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
