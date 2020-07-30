import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, setCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setCargando={setCargando} />
        {cargando ? <Spinner /> : null}
        <Resumen datos={datos} />
        { !cargando ? <Resultado cotizacion={cotizacion} /> : null }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
