// TODO: PRIMERO A COMPLETAR

type Row = {
  category: string;
  details: string[];
};

const rows: Row[] = [
  {
    category: "CARACTERÍSTICAS",
    details: [
      "Separación continua de sólidos y líquidos",
      "Diseño robusto y anticorrosivo",
      "Sistema cerrado",
    ],
  },
  {
    category: "OPERACIÓN",
    details: [
      "Alta fuerza centrífuga (hasta 4 000 × g)",
      "Operación confiable y duradera, incluso con fluidos abrasivos o corrosivos",
    ],
  },
  {
    category: "EFICIENCIA",
    details: [
      "Bajo consumo energético",
      "Resultados precisos y consistentes en la separación de fases",
      "Procesos más rápidos y eficientes en diferentes aplicaciones industriales",
      "Optimización de costos sin sacrificar rendimiento",
    ],
  },
  {
    category: "VERSATILIDAD",
    details: [
      "Aplicación en múltiples industrias",
      "Ideal para las industrias pesquera, alimenticia, aceitera, láctea, química y más",
    ],
  },
  {
    category: "SEGURIDAD E HIGIENE",
    details: [
      "Mayor higiene, reducción de olores y control ambiental",
      "Evita derrames y dispersión de residuos",
    ],
  },
];



export default function DecantadoresCentrifugos() {
    return (
        <>
        <h1>Decantadores Centrífugos</h1>
        </>
    )
}