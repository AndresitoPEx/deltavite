import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import LoadingPage from "../../Components/Loading";

const Contacto = () => {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  // Estado para controlar la carga
  const [dataLoading, setDataLoading] = useState(true);


  const validarNombre = () => {
    if (nombre.trim() === "" || nombre.length < 3 || nombre.length > 30 || !/^[a-zA-Z\s]*$/.test(nombre)) {
      return "El nombre es obligatorio";
    }
    return null;
  };

  const validarCorreo = () => {
    if (correo.trim() === "") {
      return "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      return "El correo electrónico no es válido";
    }
    return null;
  };

  const validarMensaje = () => {
    if (mensaje.trim() === "" || mensaje.length < 10 || mensaje.length > 500) {
      return "El mensaje es obligatorio";
    }
    return null;
  };

  const enviarMensaje = async () => {
    const errores = {
      nombre: validarNombre(),
      correo: validarCorreo(),
      mensaje: validarMensaje(),
    };
    setErrores(errores);
    const mensajeError = Object.values(errores).find((error) => error);
    if (mensajeError) {

      return;
    }


    // Aqui enviamos el mensaje al servidor de formspree
    try {
      const response = await fetch("https://formspree.io/f/moqovnnq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          correo,
          mensaje,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado correctamente",
          showConfirmButton: false,
          timer: 2500,
        });
        setNombre("");
        setCorreo("");
        setMensaje("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
      });
    }
  };

  useEffect(() => {
    // Simulación de una carga de datos con un temporizador
    const timer = setTimeout(() => {
      setDataLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (dataLoading) {
    // Muestra la página de carga mientras dataLoading es true
    return <LoadingPage />;
  }

  return (
    <Layout>
      <div className="">
        <section className="py-10">
          <Container maxWidth="xl">
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              <span className="text-3xl font-bold text-gray-800 block mb-14">
                Hable con nosotros para cualquier consulta o cotización
              </span>
            </Typography>

            <Grid container spacing={0} justifyContent="center">
              <Grid item xs={12} md={6}>
                <div className="mb-4">
                  <Typography variant="h5" component="h2" gutterBottom>
                    Información de Contacto
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    <span className="font-bold">Dirección:</span> Psje. Sta. Elvira 234, Ate Vitarte
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    <span className="font-bold">Teléfono:</span> +51 930172021
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    <span className="font-bold">Correo Electrónico:</span> ventas@deltatacticalgear.com.pe
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Escribe un mensaje y te responderemos a la brevedad
                  </Typography>
                  <form className="flex flex-col">
                    <TextField
                      color="warning"
                      label="Nombre"
                      variant="outlined"
                      margin="normal"
                      className="mb-4"
                      fullWidth
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      error={errores.nombre ? true : false}
                      helperText={errores.nombre}
                    />
                    <TextField
                      color="warning"
                      label="Correo Electrónico"
                      variant="outlined"
                      margin="normal"
                      className="mb-4"
                      fullWidth
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      error={errores.correo ? true : false}
                      helperText={errores.correo}
                    />
                    <TextField
                      color="warning"
                      label="Mensaje"
                      multiline
                      rows={4}
                      variant="outlined"
                      margin="normal"
                      className="mb-4"
                      fullWidth
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      error={errores.mensaje ? true : false}
                      helperText={errores.mensaje}
                    />
                    <Button endIcon={<SendIcon />} variant="contained" color="warning" onClick={enviarMensaje}>
                      <p className="
                      text-white font-normal text-xl">Enviar Mensaje</p>

                    </Button>
                  </form>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="mt-10">
                  <iframe
                    title="Ubicación"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.77739192154075!2d-76.95178499298194!3d-12.028429400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c42574522b6b%3A0x14456ae175e9d245!2sParque%20Urbanizaci%C3%B3n%20Santa%20Elvira!5e0!3m2!1ses-419!2spe!4v1689958989198!5m2!1ses-419!2spe"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </Layout>
  );
};

export default Contacto;
