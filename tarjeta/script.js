/*
  CONFIGURACIÓN DE YANA CAFÉ
  Edita los enlaces de abajo con tus perfiles reales.
  Si dejas un campo vacío, ese botón no se mostrará en la tarjeta.
*/
const YANA_LINKS = {
  instagram: "", // Ejemplo: https://www.instagram.com/tuusuario/
  facebook: "",  // Ejemplo: https://www.facebook.com/tuPagina/
  tiktok: "",    // Ejemplo: https://www.tiktok.com/@tuusuario
  whatsapp: "",  // Solo números con código de país. Ejemplo Ecuador: 593XXXXXXXXX
  maps: "https://www.google.com/maps/search/?api=1&query=Yana+Caf%C3%A9+Otavalo+Ecuador"
};

const links = document.querySelectorAll("[data-link]");

links.forEach((link) => {
  const key = link.dataset.link;
  if (key === "menu") return; // Este enlace abre la página principal del menú.

  const value = YANA_LINKS[key];
  if (!value) {
    link.hidden = true;
    return;
  }

  if (key === "whatsapp") {
    const phone = value.replace(/\D/g, "");
    if (!phone) {
      link.hidden = true;
      return;
    }
    link.href = `https://wa.me/${phone}`;
  } else {
    link.href = value;
  }

  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.hidden = false;
});
