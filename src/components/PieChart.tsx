import { Card, CardContent, Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import type { TooltipItem, ChartOptions } from "chart.js";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const data = {
        labels: ["Bombas", "Separadoras", "PTARI-FISHVAC", "Preparadora de Químicos"],
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
            },
        },
    };

    return (
        <Card
            sx={{
                width: { xs: "100%", sm: 520, md: 640 },
                mx: "auto",
                mt: 4,
                boxShadow: 3,
            }}
        >
            <h4>Distribucion </h4>
            <CardContent
                sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: 300, sm: 360, md: 420 },
                }}
            >
                <Box sx={{ width: "100%", height: "100%" }}>
                    <Pie data={data} options={options} />
                </Box>
            </CardContent>
        </Card>
    );
}