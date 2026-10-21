import {
    Box,
    Chip,
    Container,
    Grid,
    Paper,
    Typography,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import LanguageIcon from "@mui/icons-material/Language";

const skillGroups = [
    {
        title: "Frontend Development",
        description: "Building responsive and user-friendly interfaces.",
        icon: <LanguageIcon />,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Material UI", "Redux Toolkit"],
    },
    {
        title: "Backend Development",
        description: "Developing APIs and server-side applications.",
        icon: <CodeIcon />,
        skills: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Authentication"],
    },
    {
        title: "Database",
        description: "Working with structured data and database systems.",
        icon: <StorageIcon />,
        skills: ["PostgreSQL", "SQL"],
    },
    {
        title: "Tools & Workflow",
        description: "Tools for development, testing and collaboration.",
        icon: <BuildIcon />,
        skills: ["Git", "GitHub", "Postman", "VS Code", "Axios"],
    },
];

export default function Skills() {
    return (
        <Box
            id="skills"
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                backgroundColor: "background.paper",
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
                        WHAT I WORK WITH
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            mt: 1,
                            fontSize: { xs: "2.2rem", md: "3rem" },
                        }}
                    >
                        My <Box component="span" sx={{ color: "primary.main" }}>Skills</Box>
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            maxWidth: 650,
                            lineHeight: 1.8,
                        }}
                    >
                        Technologies and tools I use to build modern web
                        applications, from interactive interfaces to
                        reliable backend APIs.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {skillGroups.map((group) => (
                        <Grid key={group.title} size={{ xs: 12, sm: 6 }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    height: "100%",
                                    p: { xs: 3, md: 3.5 },
                                    backgroundColor: "#182235",
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 3,
                                    transition: "border-color 0.2s ease",
                                    "&:hover": {
                                        borderColor: "primary.main",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 2,
                                        color: "primary.main",
                                        backgroundColor: "rgba(201, 130, 143, 0.12)",
                                        mb: 2.5,
                                    }}
                                >
                                    {group.icon}
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    {group.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 1, mb: 2.5, lineHeight: 1.7 }}
                                >
                                    {group.description}
                                </Typography>

                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                    {group.skills.map((skill) => (
                                        <Chip
                                            key={skill}
                                            label={skill}
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
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}