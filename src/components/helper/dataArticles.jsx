import paint from "./img/paint.jpg";
import albanil from "./img/albanil.jpeg";
import plomeria from "./img/plomeria.jpg";
import electricidad from "./img/electricidad.jpg";
import gasman from "./img/gasman.jpg";

const dataArticles = [
  {
    id: 1,
    title: "Pintura",
    description:
      "Soy oficial pintor y realizo Todo tipo de trabajos de pintura. Interior, exterior, carpintería y rejas. Trabajo unicamente en zona oeste. Consulta sin costo",
    img: paint,
  },
  {
    id: 2,
    title: "Albañilería",
    description:
      "Mantenimiento general Sanitarias, reformas, colocación de Membrana, gas reparación e Instalación.",
    img: albanil,
  },
  {
    id: 3,
    title: "Plomería",
    description:
      "Cambio de caños rotos. Reemplazo de flexibles. Reparaciones en baños y cocinas. Colocación de piletas de cocina, arreglo de desagües, reemplazo de caños. Arreglo de Cañerías. Instalaciones. Bombas y Cisternas. Filtraciones de Agua.",
    img: plomeria,
  },
  {
    id: 4,
    title: "Electricidad",
    description:
      "Instalaciones domiciliarias, comercial, electricidad en general, instalaciones termo tanques eléctricos.",
    img: electricidad,
  },
  {
    id: 5,
    title: "Gasista",
    description:
      "Instalaciones, arreglos, calefones, estufas, Gas en general. Servicios adicionales: Mantenimiento Edificios, Reparación en general, Asesoramiento en general.",
    img: gasman,
  },
];

export default dataArticles;
