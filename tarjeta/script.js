/*
  CONFIGURACIÓN DE YANA CAFÉ
  Instagram, Facebook y Google Maps ya están configurados.
  Si dejas un campo vacío, ese botón no se mostrará en la tarjeta.
*/
const YANA_LINKS = {
  instagram: "https://www.instagram.com/yanacafe.ec/",
  facebook: "https://www.facebook.com/yanacafe.ec/",
  tiktok: "",    // Ejemplo: https://www.tiktok.com/@tuusuario
  whatsapp: "",  // Solo números con código de país. Ejemplo Ecuador: 593XXXXXXXXX
  maps: "https://maps.app.goo.gl/qVNasMtMYssHwv9LA"
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
