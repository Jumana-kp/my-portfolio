import { Box, Container, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

export default function About() {
    return (
        <Box
            id="about"
            component="section"
            sx={{
                py: { xs: 10, md: 13 },
                backgroundColor: "background.paper",
            }}
        >
            <Container maxWidth="lg">
                {/* Section Heading */}
                <Box sx={{ mb: { xs: 5, md: 6 } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: "primary.main",
                            fontWeight: 800,
                            fontSize: {
                                xs: "2rem",
                                md: "2.4rem",
                            },
                            letterSpacing: "-0.5px",
                            lineHeight: 1.2,
                        }}
                    >
                        ABOUT ME
                    </Typography>

                    {/* Dusty Rose underline */}
                    <Box
                        sx={{
                            mt: 1.2,
                            width: 48,
                            height: 3,
                            borderRadius: 2,
                            backgroundColor: "primary.main",
                        }}
                    />
                </Box>

                <Grid
                    container
                    spacing={{ xs: 5, md: 9 }}
                    sx={{ alignItems: "center" }}
                >
                    {/* Profile Image */}
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                md: "flex-start",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: 180,
                                    sm: 200,
                                    md: 220,
                                },
                                height: {
                                    xs: 180,
                                    sm: 200,
                                    md: 220,
                                },
                                borderRadius: "50%",
                                overflow: "hidden",
                                border: "3px solid",
                                borderColor: "primary.main",
                                boxShadow:
                                    "0 0 0 8px rgba(201, 130, 143, 0.07)",
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/profile.jpg"
                                alt="Jumana KP"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* About Content */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                maxWidth: 720,
                                lineHeight: 1.9,
                                fontSize: {
                                    xs: "1rem",
                                    md: "1.05rem",
                                },
                            }}
                        >
                            I’m a{" "}
                            <Box
                                component="span"
                                sx={{
                                    color: "primary.main",
                                    fontWeight: 600,
                                }}
                            >
                                Python Full Stack Developer
                            </Box>{" "}
                            who enjoys turning ideas into clean, practical and
                            user-friendly web applications. I work across the
                            frontend and backend, with hands-on experience
                            using React, Next.js, Python, Django, Django REST
                            Framework and PostgreSQL.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2,
                                color: "text.secondary",
                                maxWidth: 720,
                                lineHeight: 1.9,
                                fontSize: {
                                    xs: "1rem",
                                    md: "1.05rem",
                                },
                            }}
                        >
                            Through my development journey, I’ve built
                            projects including a complete e-commerce
                            application and a CRM system. These projects have
                            helped me strengthen my understanding of frontend
                            development, REST APIs, authentication, databases
                            and full-stack application architecture.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2,
                                color: "text.secondary",
                                maxWidth: 720,
                                lineHeight: 1.9,
                                fontSize: {
                                    xs: "1rem",
                                    md: "1.05rem",
                                },
                            }}
                        >
                            What I enjoy most about development is learning how
                            different pieces come together to create a complete
                            product. I’m currently looking for opportunities
                            where I can continue learning, contribute to
                            real-world projects and grow as a Full Stack
                            Developer.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}