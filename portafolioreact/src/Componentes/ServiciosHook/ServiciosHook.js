import React, { useState, useReducer } from "react";
import { useHookHttp } from "../UseHookHttp/useHookHttp";
import Servicio from "../Servicio/Servicio";
export const ServiciosHook = () => {
  const [servicios] = useHookHttp(
    `https://my-json-server.typicode.com/seth0992/datosReactTestAPI/services`
  );

  return (
    <section className="services paddingHelper section" id="services">
      <h2 className="tagSeccion">Servicios</h2>

      <div className="service--container">
        {servicios.map((elemento) => (
          <Servicio
            key={elemento.index}
            id={elemento.id}
            title={elemento.title}
            desc={elemento.desc}
          />
        ))}
      </div>
    </section>
  );
};
