import { Card, CardContent, Typography, Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import type { TooltipItem, ChartOptions } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const data = {
        labels: [
            "Bombas",
            "Separadoras",
            "PTARI-FISHVAC",
            "Preparadora de Químicos",
        ],
        datasets: [
            {
                data: [40.9, 30.9, 14.5, 13.6],
                backgroundColor: ["#2a9fd6", "#3db6d8", "#72cce5", "#446b9d"],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };

    const options: ChartOptions<"pie"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<"pie">) => {
                        const label = context.label || "";
                        const value = context.parsed || 0;
                        return `${label}: ${value}%`;
                    },
                },
            },
            legend: {
                position: "bottom",
                labels: {
                    boxWidth: 14,
                    font: { size: 12 },
                },
            },
        },
    };

    return (
        <Card
            sx={{
                width: "100%",
                maxWidth: 480,
                mx: "auto",
                mt: { xs: 3, md: 0 },
                boxShadow: 3,
                borderRadius: 2,
                p: 1,
            }}
        >
            <Typography
                variant="h6"
                align="center"
                sx={{ color: "#304797", fontWeight: 600, mb: 1 }}
            >
                Productos más vendidos
            </Typography>
            <CardContent
                sx={{
                    p: { xs: 1, md: 2 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: 260, sm: 300, md: 360 },
                }}
            >
                <Box sx={{ width: "100%", height: "100%" }}>
                    <Pie data={data} options={options} />
                </Box>
            </CardContent>
        </Card>
    );
}
