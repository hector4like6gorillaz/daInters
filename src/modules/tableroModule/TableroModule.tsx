import React, { useState } from "react";
import style from "./tablero.module.css";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const TableroModule = () => {
  const [nombre, setnombre] = useState("");
  console.log(nombre);
  return (
    <div className={`${style["container-table-module"]}`}>
      <h1 className={`${style["module-title-h1"]}`}>Alumnos</h1>
        <p className ={`${style['p-info']}`}>Ingrese los datos del alumno</p>
      <div className ={`${style['padre-contenedor']}`}>
        <Input
          label="Nombre"
          value={nombre}
          onChange={setnombre}
          placeHolder="Nombre"
        />
        <Input
          label="Matricula"
          value={nombre}
          onChange={setnombre}
          placeHolder="Ingrese su matricula"
        />
        <Input
          label="Genero"
          value={nombre}
          onChange={setnombre}
          placeHolder="Ingrese su genero"
        />
        <Input
          label="Carrera"
          value={nombre}
          onChange={setnombre}
          placeHolder="Nombre"
        />
        <Input
          label="Semestre"
          value={nombre}
          onChange={setnombre}
          placeHolder="Nombre"
        />
      </div>

      <Button
        onClick={() => console.log("presionado")}
        label="Registrar alumno"
      />
    </div>
  );
};

export default TableroModule;
