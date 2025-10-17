import { Card, CardContent, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import type { TooltipItem } from "chart.js";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    const data = {
        labels: ["Bombas", "Separadoras", "PTARI-FISHVAC", "PREPARADORAS DE QUÍMICOS"],
        datasets: [
            {
                data: [40.9, 30.9, 14.5, 13.6],
                backgroundColor: [
                    "#2a9fd6",
                    "#3db6d8",
                    "#72cce5",
                    "#446b9d",
                ],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {

            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<'pie'>) => {
                        const label =context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value}%`;
                    }
                }
            },
        },
    };

    return (
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom color="#304797">
                    Distribución de Clientes por Sector
                </Typography>
                <Pie data={data} options={options} />
            </CardContent>
        </Card>
    );
}
