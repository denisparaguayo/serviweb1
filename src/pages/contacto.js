import React, { useState } from "react"

import { Form, Button, Alert } from "react-bootstrap"
import swal from "sweetalert"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacto = () => {
  const [datos, guardarDatos] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  })
  const [error, guardarError] = useState(false)

  const { nombre, telefono, email, mensaje } = datos

  const obtenerInfo = e => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  console.log(nombre)

  const enviarCorreo = e => {
    e.preventDefault()
    if (
      nombre.trim() === "" ||
      telefono.trim() === "" ||
      email.trim() === "" ||
      mensaje.trim() === ""
    ) {
      guardarError(true)
      return
      guardarError(false)
    }
    swal({
      title: nombre,
      text: "Su mensaje fue enviado!",
      type: "success",
      icon: "success",
    }).then(function () {
      window.location = "/"
    })
  }

  return (
    <Layout>
      <Seo title="Contacto" />
      <div class="text text-center mt-4 container">
        <h3 class="title">Contáctenos</h3>
        <div class="summary">
          <div class="icontenteditable">
            <p>
              ¿Tienes alguna duda?, ¿Quiéres iniciar un proyecto?, ¿Necesitas
              asesoría sobre alguno de nuestros productos o servicios?, o...
              ¿Solo quieres saludarnos?{" "}
            </p>
            <h5>
              Con la mejor disposición estaremos listos a responderte 24/7.
            </h5>
          </div>
        </div>
      </div>

      <Form
        onSubmit={enviarCorreo}
        className="container mt-3"
        name="contactoServiweb"
        method="POST"
        data-netlify="true"
      >
        <Form.Group>
          <Form.Label className="font-weight-bold">Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Su Nombre"
            value={nombre}
            onChange={obtenerInfo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">Teléfono</Form.Label>
          <Form.Control
            name="telefono"
            type="phone"
            placeholder="Su Teléfono"
            value={telefono}
            onChange={obtenerInfo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="font-weight-bold">
            Dirección de Email
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder=" ej: juan-perez@gmail.com"
            value={email}
            onChange={obtenerInfo}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-weight-bold">Mensaje</Form.Label>
          <Form.Control
            name="mensaje"
            as="textarea"
            rows={3}
            value={mensaje}
            onChange={obtenerInfo}
          />
        </Form.Group>
        {error ? (
          <Alert className="container text-center" variant="danger">
            Todos los Campos son Obligatorios
          </Alert>
        ) : null}
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Layout>
  )
}

export default Contacto
