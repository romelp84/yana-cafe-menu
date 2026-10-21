/*
  MENÚ DE YANA CAFÉ
  Edita productos, precios, ingredientes y fotografías en el arreglo MENU de este archivo.
  Las imágenes actuales son provisionales (Unsplash). Sustituye image por una ruta local
  como "assets/iced-latte.jpg" cuando tengas tus propias fotografías.
*/
const MENU = [
  {
    id: "calientes", title: "Bebidas calientes", subtitle: "Café preparado con cariño", icon: "☕",
    products: [
      { name: "Espresso", price: 1.50, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85", description: "Un café corto, intenso y aromático.", ingredients: "Café espresso." },
      { name: "Espresso doble", price: 2.00, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85", description: "Doble intensidad para quienes aman el café.", ingredients: "Doble extracción de café espresso." },
      { name: "Macchiato", price: 1.75, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85", description: "Espresso con un toque de espuma de leche.", ingredients: "Café espresso, leche espumada." },
      { name: "Cappuccino", price: 2.25, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85", description: "Equilibrio de café, leche y espuma.", ingredients: "Espresso, leche vaporizada y espuma de leche." },
      { name: "Americano", price: 1.75, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85", description: "Café suave y aromático en una taza amplia.", ingredients: "Espresso y agua caliente." },
      { name: "Mocaccino", price: 2.50, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85", description: "Una combinación reconfortante de café y chocolate.", ingredients: "Espresso, leche y chocolate." },
      { name: "Latte", price: 2.50, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85", description: "Espresso con abundante leche cremosa.", ingredients: "Espresso y leche vaporizada." },
      { name: "Flat White", price: 2.50, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85", description: "Café con leche de textura sedosa.", ingredients: "Espresso doble y leche microespumada." },
      { name: "Caramel Latte", price: 2.75, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85", description: "Latte cremoso con notas dulces de caramelo.", ingredients: "Espresso, leche y jarabe de caramelo." },
      { name: "Chocolate caliente", price: 2.50, image: "https://images.unsplash.com/photo-1542990253-0b8be8e4a1e8?auto=format&fit=crop&w=900&q=85", description: "Chocolate caliente, dulce y reconfortante.", ingredients: "Leche y chocolate." },
      { name: "Matcha", price: 3.00, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85", description: "Té verde japonés de sabor vegetal y delicado.", ingredients: "Matcha y agua caliente; la preparación puede variar." },
      { name: "Matcha Latte", price: 3.25, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85", description: "Matcha combinado con leche cremosa.", ingredients: "Matcha y leche." }
    ]
  },
  {
    id: "frias", title: "Bebidas frías", subtitle: "Refrescantes en cada sorbo", icon: "❄",
    products: [
      { name: "Iced Latte", price: 2.75, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85", description: "Café con leche servido con hielo.", ingredients: "Espresso, leche y hielo." },
      { name: "Iced Caramel Latte", price: 3.00, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85", description: "Latte frío con un toque de caramelo.", ingredients: "Espresso, leche, hielo y jarabe de caramelo." },
      { name: "Iced Matcha Latte", price: 3.25, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85", description: "Matcha y leche en una versión refrescante.", ingredients: "Matcha, leche y hielo." },
      { name: "Matcha Frappé", price: 3.50, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85", description: "Bebida helada de matcha, cremosa y espumosa.", ingredients: "Matcha, leche, hielo y base para frappé según receta." },
      { name: "Limonada de café", price: 2.75, image: "https://images.unsplash.com/photo-1513558161293-cfaf765edfd7?auto=format&fit=crop&w=900&q=85", description: "Una mezcla cítrica y original con café.", ingredients: "Café, limón, agua y azúcar; ajustar según receta." },
      { name: "Café de naranja", price: 2.75, image: "https://images.unsplash.com/photo-1513558161293-cfaf765edfd7?auto=format&fit=crop&w=900&q=85", description: "Café con notas frescas de naranja.", ingredients: "Café y naranja; ajustar según receta." },
      { name: "Morir soñando", price: 2.50, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85", description: "Bebida cremosa y cítrica, ideal para refrescarse.", ingredients: "Jugo de naranja, leche y azúcar según receta." },
      { name: "Chocolate frío", price: 2.50, image: "https://images.unsplash.com/photo-1542990253-0b8be8e4a1e8?auto=format&fit=crop&w=900&q=85", description: "Chocolate servido frío.", ingredients: "Leche, chocolate y hielo." }
    ]
  },
  {
    id: "infusiones", title: "Infusiones", subtitle: "Aromas suaves para hacer una pausa", icon: "❧",
    products: [
      { name: "Hierba luisa", price: 1.50, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85", description: "Infusión herbal de aroma cítrico.", ingredients: "Hierba luisa y agua caliente." },
      { name: "Manzanilla", price: 1.50, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85", description: "Una infusión floral y delicada.", ingredients: "Flores de manzanilla y agua caliente." },
      { name: "Menta", price: 1.50, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85", description: "Infusión fresca y aromática.", ingredients: "Hojas de menta y agua caliente." },
      { name: "Frutos rojos", price: 1.75, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85", description: "Infusión frutal con notas dulces y ácidas.", ingredients: "Mezcla de frutos rojos deshidratados y agua caliente." },
      { name: "Frutos cítricos", price: 1.75, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85", description: "Aroma cítrico y sabor refrescante.", ingredients: "Mezcla de frutas cítricas y agua caliente." }
    ]
  },
  {
    id: "batidos", title: "Batidos naturales", subtitle: "Fruta y frescura en cada vaso", icon: "♧",
    products: [
      { name: "Fresa", price: 2.50, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85", description: "Batido de fresa preparado al momento.", ingredients: "Fresas, leche o agua y endulzante opcional." },
      { name: "Mora", price: 2.50, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85", description: "Batido frutal de mora.", ingredients: "Mora, leche o agua y endulzante opcional." },
      { name: "Naranjilla", price: 2.50, image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85", description: "Sabor tropical ecuatoriano, fresco y ligeramente ácido.", ingredients: "Pulpa de naranjilla, agua o leche y endulzante opcional." },
      { name: "Tomate de árbol", price: 2.50, image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85", description: "Batido con el sabor característico del tomate de árbol.", ingredients: "Tomate de árbol, agua o leche y endulzante opcional." },
      { name: "Mango", price: 2.50, image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85", description: "Batido tropical de mango.", ingredients: "Mango, leche o agua y endulzante opcional." },
      { name: "Guanábana", price: 2.75, image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85", description: "Batido cremoso de guanábana.", ingredients: "Pulpa de guanábana, leche o agua y endulzante opcional." }
    ]
  },
  {
    id: "postres", title: "Postres", subtitle: "Un dulce momento para acompañar tu café", icon: "♧",
    products: [
      { name: "Cheesecake de frutos rojos", price: 3.50, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85", description: "Cheesecake cremoso con frutos rojos.", ingredients: "Queso crema, azúcar, huevos, galleta, mantequilla y frutos rojos. Confirmar receta final." },
      { name: "Cheesecake de maracuyá", price: 3.50, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85", description: "Cheesecake con un toque tropical de maracuyá.", ingredients: "Queso crema, azúcar, huevos, galleta, mantequilla y maracuyá. Confirmar receta final." },
      { name: "Torta de zanahoria", price: 3.00, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85", description: "Torta suave con zanahoria y especias.", ingredients: "Zanahoria, harina, azúcar, huevos, aceite y especias; confirmar receta final." },
      { name: "Torta de chocolate", price: 3.00, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85", description: "Torta de chocolate para los amantes del cacao.", ingredients: "Harina, cacao o chocolate, azúcar, huevos, grasa y leche según receta." },
      { name: "Pie de manzana", price: 3.00, image: "https://images.unsplash.com/photo-1562007908-17c67e878c8d?auto=format&fit=crop&w=900&q=85", description: "Manzana horneada con una cubierta dorada.", ingredients: "Manzana, harina, mantequilla, azúcar y especias." },
      { name: "Pie de frutos rojos", price: 3.25, image: "https://images.unsplash.com/photo-1562007908-17c67e878c8d?auto=format&fit=crop&w=900&q=85", description: "Pie con relleno de frutos rojos.", ingredients: "Harina, mantequilla, azúcar y frutos rojos." }
    ]
  },
  {
    id: "bocaditos", title: "Bocaditos", subtitle: "Pequeños antojos para cualquier momento", icon: "❧",
    products: [
      { name: "Empanada de pollo", price: 1.75, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85", description: "Empanada dorada con relleno de pollo.", ingredients: "Masa de harina, pollo y condimentos; confirmar receta final." },
      { name: "Empanada de manjar", price: 1.50, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85", description: "Empanada dulce rellena de manjar.", ingredients: "Masa de harina, manjar y otros ingredientes según receta." },
      { name: "Sánduche de queso", price: 2.00, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85", description: "Pan tostado con queso fundido.", ingredients: "Pan y queso." },
      { name: "Sánduche mixto", price: 2.50, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85", description: "Un clásico de jamón y queso.", ingredients: "Pan, jamón y queso." }
    ]
  }
];

const money = value => new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value);
const sectionsRoot = document.getElementById("menuSections");
const dialog = document.getElementById("productDialog");

function renderMenu() {
  sectionsRoot.innerHTML = MENU.map(section => `
    <section class="menu-section" id="${section.id}" aria-labelledby="${section.id}-title">
      <div class="section-heading">
        <div class="section-icon" aria-hidden="true">${section.icon}</div>
        <div>
          <h2 id="${section.id}-title">${section.title}</h2>
          <p>${section.subtitle}</p>
        </div>
        <div class="heading-line" aria-hidden="true"></div>
      </div>
      <div class="product-grid">
        ${section.products.map((product, index) => `
          <article class="product-card" role="button" tabindex="0" data-section="${section.id}" data-index="${index}" aria-label="Ver detalles de ${product.name}">
            <div class="product-image-wrap">
              <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/placeholder.svg';">
              <span class="photo-label">Foto referencial</span>
            </div>
            <div class="product-info">
              <div class="product-title-row">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-price">${money(product.price)}</span>
              </div>
              <p class="product-description">${product.description}</p>
              <span class="view-details">Ver ingredientes <span aria-hidden="true">↗</span></span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");

  sectionsRoot.querySelectorAll(".product-card").forEach(card => {
    const open = () => showProduct(card.dataset.section, Number(card.dataset.index));
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function showProduct(sectionId, index) {
  const section = MENU.find(item => item.id === sectionId);
  const product = section.products[index];
  document.getElementById("dialogImage").src = product.image;
  document.getElementById("dialogImage").onerror = function() { this.onerror = null; this.src = "assets/placeholder.svg"; };
  document.getElementById("dialogImage").alt = product.name;
  document.getElementById("dialogCategory").textContent = section.title;
  document.getElementById("dialogName").textContent = product.name;
  document.getElementById("dialogDescription").textContent = product.description;
  document.getElementById("dialogIngredients").textContent = product.ingredients;
  document.getElementById("dialogPrice").textContent = money(product.price);
  dialog.showModal();
}

document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
renderMenu();
