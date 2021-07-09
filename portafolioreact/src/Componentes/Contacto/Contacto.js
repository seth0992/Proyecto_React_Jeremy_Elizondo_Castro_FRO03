import React from "react";
import { Formik } from "formik";
import "./Contacto.css";
const Contacto = () => (
  <Formik
    initialValues={{ correo: "", nombreC: "", telefono: "", motivo: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.correo) {
        errors.correo = "Requerido";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
      ) {
        errors.correo = "Dirección de correo electrónico incorrecta";
      }
      if (!values.nombreC) {
        errors.nombreC = "Requerida";
      }
      if (!values.telefono) {
        errors.telefono = "Requerida";
      }
      if (!values.motivo) {
        errors.motivo = "Requerida";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 4000);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* otros */
    }) => (
      <section className="contact paddingHelper section" id="contact">
        <h3 className="tagSeccion">Contácteme</h3>
        <form className="contact--form" onSubmit={handleSubmit}>
          <div className="content-input">
            <label for="name" className="label">
              Nombre Completo
            </label>
            <input
              className="input--form"
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nombreC}
              placeholder="Nombre Completo"
            />
            {errors.nombreC && touched.nombreC && errors.nombreC}
          </div>
          <div className="content-input">
            <label for="mail" className="label">
              Correo Electrónico
            </label>
            <input
              className="input--form"
              type="email"
              name="mail"
              id="mail"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.correo}
            />
            {errors.correo && touched.correo && errors.correo}
          </div>
          <div className="content-input">
            <label for="phone" className="label">
              Numero Teléfono
            </label>
            <input
              className="input--form"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Telefono"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.telefono}
            />
            {errors.telefono && touched.telefono && errors.telefono}
          </div>
          <div className="content-input">
            <label for="type" className="label">
              Motivo
            </label>
            <select name="type" id="type" className="input--form">
              <option value="">Seleccione una opción</option>
              <option value="1">Contratar</option>
              <option value="2">Freelance</option>
            </select>
          </div>

          <div className="content-textarea">
            <label for="message" className="label">
              Tu Mensaje
            </label>
            <textarea
              className="input--form"
              name="message"
              id="message"
              placeholder="Mensaje"
              rows="8"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.motivo}
            ></textarea>
            {errors.motivo && touched.motivo && errors.motivo}
          </div>

          <div className="content-button">
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </div>
        </form>
      </section>
    )}
  </Formik>
);

export default Contacto;
