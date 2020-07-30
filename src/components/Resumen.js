import React from 'react';
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import { aMayuscula } from "../helper";

const ContenedorResumen = styled.div `
padding: 1rem;
text-align:center;
background-color:#00838f;
color:#ffff;
margin-top: 1rem;
`;

const Resumen = ({datos}) =>{
  const { marca, year, plan } =  datos
  if (marca === '' || year === '' || plan === '') return null
  return(
    <ContenedorResumen>
    <h2>Resumen</h2>
    <ul>
      <li> Marca:{aMayuscula (marca)} </li>
      <li>Plan: {aMayuscula (plan)} </li>
      <li>Año:{year} </li>
    </ul>
    </ContenedorResumen>
  )
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}
export default Resumen;