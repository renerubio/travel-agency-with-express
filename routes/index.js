import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaContacto,
  paginaDetalleViaje
} from "../controllers/paginasController.js";

const router = express();

router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje);
router.get("/testimoniales", paginaTestimoniales);
router.get("/contacto", paginaContacto);

export default router;
