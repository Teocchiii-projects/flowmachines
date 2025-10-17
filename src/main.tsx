import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import { App } from "./App.tsx";

const theme = createTheme({
    palette: {
        primary: {
            main: "#304797",
        },
        secondary: {
            main: "#2b4894",
        },
    },
    typography: {
        fontFamily: "'Zilla Slab', sans-serif",
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>
);
