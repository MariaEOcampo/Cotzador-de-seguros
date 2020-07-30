import React, {useState} from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import {getDifferenceYear, calculateBrand, getPlan} from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Boton = styled.button `
background-color:#00838F;
font-size:16px;
width:100%;
padding: 1rem;
color: #ffff;
text-transform:uppercase;
font-weight:bold;
border:none;
transition: background-color .3s ease;
margin-top:2rem;

&:hover {
  background-color:#26C6DA;
  cursor:pointer;
}
`;
const Error = styled.div `
  background-color:red;
  color:white;
  padding:1rem;
  width:100%;
  text-align:center;
  margin-bottom:2rem;
`;

const Formulario = ({setResumen, setCargando}) => {

  const [datos, setDatos] = useState({
    marca:'',
    year:'',
    plan:''
  })
  const [error,setError] = useState(false)

  //Extrayendo valores:

  const { marca, year, plan } = datos;

  //leer datos

  const getInformation = e => {
    setDatos ({
      ...datos, 
      [e.target.name]:e.target.value
    }

    )

  }
  //handlesubmit
  const cotizarSeguro = e => {
    e.preventDefault();
    if(marca.trim() === ''||year.trim() === '' || plan.trim() === '')
    {
      setError(true)
      return
    }
    setError(false)
    //base 2000
    let result = 2000;

    //obtener la diferencia de años
    const difference = getDifferenceYear(year)

    // por cada año restar el 3%
    result -=((difference * 3) * result)/100;
 
    //Americano 16
    //Asiatico 5
    //Europeo 30
    result = calculateBrand(marca)*result
   
    //Basico aumenta 20%
    //Completo 50%
    const incrementoPlan = getPlan(plan);
    result = parseFloat ( incrementoPlan * result).toFixed(2)

    setCargando(true)

    setTimeout(() => {
      setCargando(false)
      setResumen({
        cotizacion :Number(result) ,
        datos
      })
    }, 3000);

    console.log(result)
    //Total
   
  }

  return (
    <form
      onSubmit={cotizarSeguro}
    >
      { error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select
         name="marca"
         value= {marca}
         onChange= {getInformation}>
          <option value="">--Seleccione--</option>
          <option value="americano">--Americano--</option>
          <option value="europeo">--Europeo--</option>
          <option value="asiatico">--Asiático--</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select
        name="year"
        value= {year}
        onChange= {getInformation}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <label>Plan</label>
        <InputRadio 
        type="radio" 
        name="plan" 
        value="basico"
        checked={plan==="basico"}
        onChange= {getInformation}
        />
        Básico
        <InputRadio 
        type="radio" 
        name="plan" 
        value="completo"
        checked={plan==="completo"}
        onChange= {getInformation}
         />
        Completo
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

Formulario.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired
}

export default Formulario;
