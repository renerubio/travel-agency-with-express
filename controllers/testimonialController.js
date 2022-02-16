import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre está vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo está vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje está vacio" });
  }

  if (errores.length > 0) {
    //Muestra la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
    });
  } else {
    // Almacenarlo en la Base de Datos

    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect('/testimoniales')
    } catch (error) {
      console.log(error);
    }

  }
};

export { guardarTestimonial };