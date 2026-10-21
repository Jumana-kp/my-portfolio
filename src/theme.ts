import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: "#C9828F",
        },

        secondary: {
            main: "#D99AA5",
        },

        background: {
            default: "#0B1220",
            paper: "#111A2B",
        },

        text: {
            primary: "#F8F7F5",
            secondary: "#B8C0CC",
        },

        divider: "#263247",
    },

    typography: {
        fontFamily: "Arial, Helvetica, sans-serif",

        h1: {
            fontWeight: 800,
            letterSpacing: "-2px",
        },

        h2: {
            fontWeight: 800,
            letterSpacing: "-1.5px",
        },

        h3: {
            fontWeight: 700,
        },

        h4: {
            fontWeight: 700,
        },

        button: {
            fontWeight: 600,
            textTransform: "none",
        },
    },

    shape: {
        borderRadius: 12,
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },

            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "10px 20px",
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "none",
                    border: "1px solid #263247",
                    backgroundColor: "#182235",
                },
            },
        },
    },
});

export default theme;