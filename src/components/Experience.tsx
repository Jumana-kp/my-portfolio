import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
    Chip,
} from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const experiences = [
    {
        type: "Professional Training",
        title: "Gen AI Powered Full Stack Developer Program",
        organization: "Upcode Software Labs",
        period: "Full Stack Development",
        description:
            "Completed practical training in full-stack web development, covering frontend interfaces, backend APIs, databases and application development.",
        icon: <SchoolOutlinedIcon />,
        technologies: ["Python", "Django", "React", "Next.js", "PostgreSQL"],
    },
    {
        type: "Project Experience",
        title: "Full-Stack Application Development",
        organization: "Personal & Team Projects",
        period: "Hands-on Projects",
        description:
            "Built full-stack applications, including an e-commerce platform and a CRM application, working with REST APIs, authentication, database integration and responsive user interfaces.",
        icon: <CodeOutlinedIcon />,
        technologies: ["Django REST Framework", "TypeScript", "Redux Toolkit", "Material UI"],
    },
];

export default function Experience() {
    return (
        <Box
            id="experience"
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: "background.default",
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
                        MY JOURNEY
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            mt: 1,
                            fontSize: { xs: "2.2rem", md: "3rem" },
                        }}
                    >
                        Experience &{" "}
                        <Box component="span" sx={{ color: "primary.main" }}>
                            Training
                        </Box>
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{ mt: 2, maxWidth: 650, lineHeight: 1.8 }}
                    >
                        My learning journey and hands-on experience building
                        full-stack web applications.
                    </Typography>
                </Box>

                <Stack spacing={3}>
                    {experiences.map((item) => (
                        <Paper
                            key={item.title}
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
                                sx={{
                                    alignItems: { xs: "flex-start", sm: "flex-start" },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 52,
                                        height: 52,
                                        flexShrink: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 2,
                                        color: "primary.main",
                                        backgroundColor: "rgba(201, 130, 143, 0.12)",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: "primary.main",
                                            fontWeight: 700,
                                            letterSpacing: 1.5,
                                        }}
                                    >
                                        {item.type}
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        sx={{ mt: 0.5, fontWeight: 700 }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{ mt: 1, color: "text.secondary" }}
                                    >
                                        {item.organization} · {item.period}
                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        sx={{ mt: 2, lineHeight: 1.9 }}
                                    >
                                        {item.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1,
                                            mt: 2.5,
                                        }}
                                    >
                                        {item.technologies.map((technology) => (
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
                                </Box>
                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}