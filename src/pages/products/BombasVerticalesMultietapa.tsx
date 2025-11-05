// noinspection SpellCheckingInspection

import { Box, Typography, Divider } from "@mui/material";

// LOGOS E IMÁGENES
import saerLogo from "/assets/pages/products/bombas-verticales/saer-logo.png";
import bomba1 from "/assets/pages/products/bombas-verticales/bomba1.png";
import bomba2 from "/assets/pages/products/bombas-verticales/bomba2.png";
import materiales from "/assets/pages/products/bombas-verticales/materiales.png";

export default function BombasVerticalesMultietapa() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        boxShadow: 3,
        p: { xs: 3, md: 6 },
        m: 4,
        maxWidth: "1200px",
        mx: "auto",
        fontFamily: "Zilla Slab",
        lineHeight: 1.6,
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#304797", fontWeight: 700 }}
      >
        BOMBAS VERTICALES MULTIETAPA
      </Typography>

      <Divider sx={{ my: 2, borderColor: "#304797" }} />

      {/* LOGO SAER */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <img src={saerLogo} alt="SAER logo" style={{ width: "150px" }} />
      </Box>

      {/* DESCRIPCIÓN */}
      <Box sx={{ maxWidth: "900px", mx: "auto", color: "#304797", textAlign: "justify" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            mb: 0.5,
          }}
        >
          MK
        </Typography>

        <Typography sx={{ fontStyle: "italic", mb: 1 }}>
          Soluciones compactas para alta presión
        </Typography>

        <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
          Características
        </Typography>
        <ul style={{ margin: "4px 0 10px 22px" }}>
          <li>Bombas eléctricas no autocebantes.</li>
          <li>Diseño vertical multietapa compacto.</li>
          <li>Potencias disponibles hasta 55 kW.</li>
          <li>Amplia gama de configuraciones metálicas y motrices.</li>
          <li>Equipadas con cojinete axial integrado para mayor vida útil.</li>
        </ul>

        <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
          Ventajas
        </Typography>
        <ul style={{ margin: "4px 0 8px 22px" }}>
          <li>Diseño vertical compacto, ahorro de espacio y fácil instalación.</li>
          <li>
            Cojinete axial integrado, mayor durabilidad y compatibilidad motriz.
          </li>
          <li>
            Multietapas modulares, presión ajustable según necesidad.
          </li>
          <li>
            Materiales resistentes, adaptación a distintos tipos de fluidos.
          </li>
        </ul>
      </Box>

      {/* IMÁGENES */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mt: 2,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img
            src={bomba1}
            alt="Bomba Vertical 1"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
            }}
          />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <img
            src={bomba2}
            alt="Bomba Vertical 2"
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
            }}
          />
        </Box>
      </Box>

      {/* MATERIALES */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography
          sx={{
            color: "#304797",
            fontSize: "0.9rem",
            fontWeight: 600,
            mb: 0.5,
          }}
        >
          MATERIALES
        </Typography>
        <img
          src={materiales}
          alt="Materiales"
          style={{
            width: "100%",
            maxWidth: "300px",
            filter: "grayscale(30%)",
          }}
        />
      </Box>
    </Box>
  );
}
