/* MENÚ DE YANA CAFÉ: edita precios, descripciones, ingredientes e imágenes aquí. */
const MENU = [
  {
    "id": "calientes",
    "title": "Bebidas calientes",
    "subtitle": "Café preparado con cariño",
    "icon": "☕",
    "products": [
      {
        "name": "Espresso",
        "price": 1.5,
        "description": "Un café corto, intenso y aromático.",
        "ingredients": "Café espresso.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Espresso doble",
        "price": 1.75,
        "description": "Doble intensidad para quienes aman el café.",
        "ingredients": "Doble extracción de café espresso.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Cappuccino 6oz",
        "price": 2.5,
        "description": "Espresso con leche vaporizada y espuma.",
        "ingredients": "Espresso, leche vaporizada y espuma de leche.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Cappuccino 9oz",
        "price": 3.25,
        "description": "Un cappuccino más grande y cremoso.",
        "ingredients": "Espresso, leche vaporizada y espuma de leche.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Americano",
        "price": 1.75,
        "description": "Café suave y aromático.",
        "ingredients": "Espresso y agua caliente.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Mocaccino",
        "price": 2.75,
        "description": "Una combinación de café y chocolate.",
        "ingredients": "Espresso, leche y chocolate.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Latte",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
        "description": "Espresso con leche cremosa. Escoge tu sabor favorito.",
        "variants": [
          {
            "name": "Regular",
            "price": 2.5,
            "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso y leche vaporizada."
          },
          {
            "name": "Vainilla",
            "price": 2.75,
            "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche vaporizada y jarabe de vainilla."
          },
          {
            "name": "Caramelo",
            "price": 2.75,
            "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche vaporizada y jarabe de caramelo."
          },
          {
            "name": "Caramelo salado",
            "price": 2.75,
            "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche vaporizada y jarabe de caramelo salado."
          },
          {
            "name": "Avellana",
            "price": 2.75,
            "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche vaporizada y jarabe de avellana."
          }
        ]
      },
      {
        "name": "Flat White",
        "price": 2.5,
        "description": "Café con leche de textura sedosa.",
        "ingredients": "Espresso doble y leche microespumada.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Chocolate caliente",
        "price": 2.5,
        "description": "Chocolate caliente, dulce y reconfortante.",
        "ingredients": "Leche y chocolate.",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Matcha",
        "price": 2.75,
        "description": "Té verde de sabor vegetal y delicado.",
        "ingredients": "Matcha y agua caliente.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "frias",
    "title": "Bebidas frías",
    "subtitle": "Refrescantes en cada sorbo",
    "icon": "🧊",
    "products": [
      {
        "name": "Iced Latte",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
        "description": "Espresso con leche y hielo. Escoge tu sabor favorito.",
        "variants": [
          {
            "name": "Regular",
            "price": 3.0,
            "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche y hielo."
          },
          {
            "name": "Vainilla",
            "price": 3.25,
            "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche, hielo y jarabe de vainilla."
          },
          {
            "name": "Caramelo",
            "price": 3.25,
            "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche, hielo y jarabe de caramelo."
          },
          {
            "name": "Caramelo salado",
            "price": 3.25,
            "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche, hielo y jarabe de caramelo salado."
          },
          {
            "name": "Avellana",
            "price": 3.25,
            "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",
            "ingredients": "Espresso, leche, hielo y jarabe de avellana."
          }
        ]
      },
      {
        "name": "Iced Matcha Latte",
        "price": 3.25,
        "description": "Matcha y leche en una versión refrescante.",
        "ingredients": "Matcha, leche y hielo.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Matcha Frappé",
        "price": 3.25,
        "description": "Bebida helada de matcha, cremosa y espumosa.",
        "ingredients": "Matcha, leche, hielo y base para frappé.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Chocolate frío",
        "price": 2.75,
        "description": "Chocolate servido frío.",
        "ingredients": "Leche, chocolate y hielo.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Limonada de café",
        "price": 3.0,
        "description": "Una mezcla cítrica y original con café.",
        "ingredients": "Café, limón, agua y azúcar.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Café de naranja",
        "price": 3.25,
        "description": "Café con notas frescas de naranja.",
        "ingredients": "Café y naranja.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Morir soñando",
        "price": 3.25,
        "description": "Bebida cremosa y cítrica.",
        "ingredients": "Jugo de naranja, leche y azúcar.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "infusiones",
    "title": "Infusiones",
    "subtitle": "Aromas suaves para hacer una pausa",
    "icon": "🍃",
    "products": [
      {
        "name": "Hierba luisa",
        "price": 1.75,
        "description": "Infusión herbal de aroma cítrico.",
        "ingredients": "Hierba luisa y agua caliente.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Manzanilla",
        "price": 1.75,
        "description": "Infusión floral y delicada.",
        "ingredients": "Flores de manzanilla y agua caliente.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Cedrón",
        "price": 1.75,
        "description": "Infusión herbal de aroma fresco.",
        "ingredients": "Hojas de cedrón y agua caliente.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Frutos rojos",
        "price": 2.25,
        "description": "Infusión frutal con notas dulces y ácidas.",
        "ingredients": "Mezcla de frutos rojos y agua caliente.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Frutos cítricos",
        "price": 2.25,
        "description": "Aroma cítrico y sabor refrescante.",
        "ingredients": "Mezcla de frutas cítricas y agua caliente.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Frutos tropicales",
        "price": 2.25,
        "description": "Infusión aromática de perfil tropical.",
        "ingredients": "Mezcla de frutas tropicales y agua caliente.",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "sanduches",
    "title": "Sanduches",
    "subtitle": "Preparados para disfrutar a cualquier hora",
    "icon": "🥪",
    "products": [
      {
        "name": "Tostada de queso",
        "price": 2.25,
        "description": "Pan tostado con queso fundido.",
        "ingredients": "Pan y queso.",
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Tostada mixta",
        "price": 2.5,
        "description": "Un clásico de jamón y queso.",
        "ingredients": "Pan, jamón y queso.",
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Sanduche de pollo",
        "price": 3.0,
        "description": "Sanduche relleno de pollo.",
        "ingredients": "Pan, pollo cocido y aderezos según receta.",
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Sanduche de jamón de pavo",
        "price": 3.25,
        "description": "Sanduche de pavo.",
        "ingredients": "Pan, jamón de pavo y aderezos según receta.",
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "postres",
    "title": "Postres",
    "subtitle": "Un dulce momento para acompañar tu café",
    "icon": "🍰",
    "products": [
      {
        "name": "Cheesecake de frutos rojos",
        "price": 3.0,
        "description": "Cheesecake cremoso con frutos rojos.",
        "ingredients": "Queso crema, azúcar, huevos, galleta, mantequilla y frutos rojos.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Cheesecake de maracuyá",
        "price": 3.0,
        "description": "Cheesecake con un toque tropical de maracuyá.",
        "ingredients": "Queso crema, azúcar, huevos, galleta, mantequilla y maracuyá.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Torta del día",
        "price": 2.75,
        "description": "Pregunta por la torta disponible del día.",
        "ingredients": "Ingredientes según la preparación del día.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Pie",
        "price": 3.0,
        "description": "Pie horneado con cubierta dorada.",
        "ingredients": "Ingredientes según el sabor disponible.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Empanadas (manjar, mora)",
        "price": 2.0,
        "description": "Empanadas dulces con relleno a elección.",
        "ingredients": "Masa y relleno de manjar o mora.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Quimbolitos",
        "price": 1.25,
        "description": "Bizcocho tradicional ecuatoriano cocido al vapor.",
        "ingredients": "Ingredientes según receta.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Rollos de canela",
        "price": 3.5,
        "description": "Rollo suave con canela y glaseado.",
        "ingredients": "Harina, canela, azúcar, mantequilla y glaseado.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Torta de choclo",
        "price": 2.75,
        "description": "Preparación tradicional a base de choclo.",
        "ingredients": "Choclo e ingredientes según receta.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "batidos",
    "title": "Batidos naturales",
    "subtitle": "Fruta y frescura en cada vaso",
    "icon": "🥤",
    "products": [
      {
        "name": "Fresa",
        "price": 2.5,
        "description": "Batido de fresa preparado al momento.",
        "ingredients": "Fresas, leche o agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Mora",
        "price": 2.5,
        "description": "Batido frutal de mora.",
        "ingredients": "Mora, leche o agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Naranjilla",
        "price": 2.5,
        "description": "Sabor tropical ecuatoriano.",
        "ingredients": "Pulpa de naranjilla, agua o leche y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Tomate de árbol",
        "price": 2.5,
        "description": "Batido de tomate de árbol.",
        "ingredients": "Tomate de árbol, agua o leche y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Frutos rojos",
        "price": 2.5,
        "description": "Batido frutal de frutos rojos.",
        "ingredients": "Frutos rojos, leche o agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "jugos",
    "title": "Jugos naturales",
    "subtitle": "Fruta fresca, sabor natural",
    "icon": "🍹",
    "products": [
      {
        "name": "Fresa",
        "price": 2.0,
        "description": "Jugo natural de fresa.",
        "ingredients": "Fresas, agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Mora",
        "price": 2.0,
        "description": "Jugo natural de mora.",
        "ingredients": "Mora, agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Naranjilla",
        "price": 2.0,
        "description": "Jugo de naranjilla, fresco y ligeramente ácido.",
        "ingredients": "Pulpa de naranjilla, agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Tomate de árbol",
        "price": 2.0,
        "description": "Jugo natural de tomate de árbol.",
        "ingredients": "Tomate de árbol, agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Mango",
        "price": 2.0,
        "description": "Jugo tropical de mango.",
        "ingredients": "Mango, agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Guanábana",
        "price": 2.0,
        "description": "Jugo suave de guanábana.",
        "ingredients": "Pulpa de guanábana, agua y endulzante opcional.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "bocaditos",
    "title": "Bocaditos salados",
    "subtitle": "Pequeños antojos para acompañar tu café",
    "icon": "🥧",
    "products": [
      {
        "name": "Quiche de jamón y queso",
        "price": 3.0,
        "description": "Quiche horneado con jamón y queso.",
        "ingredients": "Huevo, leche, queso, jamón y masa.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Muffin de queso",
        "price": 1.75,
        "description": "Muffin salado de queso.",
        "ingredients": "Harina, queso, huevo, leche y mantequilla.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Empanada de pollo",
        "price": 2.25,
        "description": "Empanada rellena de pollo.",
        "ingredients": "Masa y pollo sazonado.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Humitas",
        "price": 1.25,
        "description": "Preparación tradicional a base de choclo.",
        "ingredients": "Choclo y otros ingredientes según receta.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Torta de choclo",
        "price": 2.75,
        "description": "Preparación tradicional a base de choclo.",
        "ingredients": "Choclo e ingredientes según receta.",
        "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
      }
    ]
  },
  {
    "id": "soft",
    "title": "Bebidas soft",
    "subtitle": "Opciones refrescantes",
    "icon": "🥤",
    "products": [
      {
        "name": "Agua mineral",
        "price": 1.25,
        "description": "Agua mineral para refrescarte.",
        "ingredients": "Agua mineral.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Gaseosas",
        "price": 1.0,
        "description": "Pregunta por las opciones disponibles.",
        "ingredients": "Gaseosa según disponibilidad.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Té helado",
        "price": 1.5,
        "description": "Té frío y refrescante.",
        "ingredients": "Té, agua, hielo y endulzante.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Limonada (limón)",
        "price": 1.25,
        "description": "Limonada fresca preparada al momento.",
        "ingredients": "Limón, agua y azúcar.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      },
      {
        "name": "Benefit",
        "price": 2.75,
        "description": "Elige limón con jengibre o limonada con café.",
        "ingredients": "Limón, jengibre y/o café según la opción.",
        "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85"
      }
    ]
  }
];

const TRANSLATIONS = {
"  Caramelo salado": "Salted caramel",
  "Avellana": "Hazelnut",
  "Cappuccino 6oz": "6 oz Cappuccino",
  "Cappuccino 9oz": "9 oz Cappuccino",
  "Tostada de queso": "Cheese toastie",
  "Tostada mixta": "Ham and cheese toastie",
  "Sanduche de pollo": "Chicken sandwich",
  "Sanduche de jamón de pavo": "Turkey ham sandwich",
  "Torta del día": "Cake of the day",
  "Pie": "Pie",
  "Empanadas (manjar, mora)": "Empanadas (dulce de leche, blackberry)",
  "Quimbolitos": "Quimbolitos (Ecuadorian steamed cake)",
  "Rollos de canela": "Cinnamon rolls",
  "Quiche de jamón y queso": "Ham and cheese quiche",
  "Muffin de queso": "Cheese muffin",
  "Empanada de pollo": "Chicken empanada",
  "Humitas": "Humitas (Ecuadorian corn cakes)",
  "Agua mineral": "Mineral water",
  "Gaseosas": "Soft drinks",
  "Té helado": "Iced tea",
  "Limonada (limón)": "Lemonade",
  "Bocaditos salados": "Savory bites",
  "Bebidas soft": "Soft drinks",
  "Pequeños antojos para acompañar tu café": "Small bites to enjoy with your coffee",
  "Opciones refrescantes": "Refreshing options",

  "Café que se disfruta,": "Coffee to savor,",
  "momentos que se quedan.": "moments to remember.",
  "DESCUBRE EL MENÚ": "EXPLORE THE MENU",
  "NUESTRA CARTA": "OUR MENU",
  "Algo rico te espera": "Something delicious awaits",
  "Toca cualquier producto para descubrir sus ingredientes y detalles.": "Tap any item to discover its ingredients and details.",
  "Calientes": "Hot drinks",
  "Frías": "Cold drinks",
  "Infusiones": "Infusions",
  "Batidos": "Smoothies",
  "Jugos": "Juices",
  "Postres": "Desserts",
  "Sánduches": "Sandwiches",
  "Gracias por compartir este momento con nosotros.": "Thank you for sharing this moment with us.",
  "Volver al inicio": "Back to top",
  "Elige tu opción": "Choose your option",
  "Ingredientes": "Ingredients",
  "Consulta con nuestro equipo si necesitas información sobre alérgenos.": "Please ask our team if you need allergen information.",
  "Categorías del menú": "Menu categories",
  "Cerrar detalles": "Close details",
  "Menú de Yana Café en Otavalo, Ecuador.": "Yana Café menu in Otavalo, Ecuador.",
  "Menú | Yana Café — Otavalo, Ecuador": "Menu | Yana Café — Otavalo, Ecuador",
  "Foto referencial": "Serving suggestion",
  "Ver ingredientes": "View ingredients",
  "Desde ": "From ",
  "opciones disponibles": "options available",
  "Ver detalles de ": "View details for ",
  "Bebidas calientes": "Hot drinks",
  "Café preparado con cariño": "Coffee made with care",
  "Un café corto, intenso y aromático.": "A short, intense, aromatic coffee.",
  "Café espresso.": "Espresso coffee.",
  "Espresso doble": "Double espresso",
  "Doble intensidad para quienes aman el café.": "Double the intensity for coffee lovers.",
  "Doble extracción de café espresso.": "Double espresso extraction.",
  "Equilibrio de café, leche y espuma.": "A balance of coffee, milk, and foam.",
  "Espresso, leche vaporizada y espuma de leche.": "Espresso, steamed milk, and milk foam.",
  "Americano": "Americano",
  "Café suave y aromático.": "Smooth, aromatic coffee.",
  "Espresso y agua caliente.": "Espresso and hot water.",
  "Mocaccino": "Mocha",
  "Una combinación reconfortante de café y chocolate.": "A comforting combination of coffee and chocolate.",
  "Espresso, leche y chocolate.": "Espresso, milk, and chocolate.",
  "Latte": "Latte",
  "Espresso con leche cremosa. Escoge tu sabor favorito.": "Espresso with creamy milk. Choose your favorite flavor.",
  "Regular": "Regular",
  "Vainilla": "Vanilla",
  "Caramelo": "Caramel",
  "Espresso y leche vaporizada.": "Espresso and steamed milk.",
  "Espresso, leche vaporizada y jarabe de vainilla.": "Espresso, steamed milk, and vanilla syrup.",
  "Espresso, leche vaporizada y jarabe de caramelo.": "Espresso, steamed milk, and caramel syrup.",
  "Flat White": "Flat White",
  "Café con leche de textura sedosa.": "Coffee with silky-textured milk.",
  "Espresso doble y leche microespumada.": "Double espresso and microfoamed milk.",
  "Caramel Latte": "Caramel Latte",
  "Latte cremoso con notas dulces de caramelo.": "Creamy latte with sweet caramel notes.",
  "Espresso, leche y jarabe de caramelo.": "Espresso, milk, and caramel syrup.",
  "Chocolate caliente": "Hot chocolate",
  "Chocolate caliente, dulce y reconfortante.": "Sweet, comforting hot chocolate.",
  "Leche y chocolate.": "Milk and chocolate.",
  "Matcha": "Matcha",
  "Té verde japonés de sabor vegetal y delicado.": "Japanese green tea with delicate, vegetal notes.",
  "Matcha y agua caliente.": "Matcha and hot water.",
  "Bebidas frías": "Cold drinks",
  "Refrescantes en cada sorbo": "Refreshing with every sip",
  "Iced Latte": "Iced Latte",
  "Espresso con leche y hielo. Escoge tu sabor favorito.": "Espresso with milk and ice. Choose your favorite flavor.",
  "Espresso, leche y hielo.": "Espresso, milk, and ice.",
  "Espresso, leche, hielo y jarabe de vainilla.": "Espresso, milk, ice, and vanilla syrup.",
  "Espresso, leche, hielo y jarabe de caramelo.": "Espresso, milk, ice, and caramel syrup.",
  "Iced Matcha Latte": "Iced Matcha Latte",
  "Matcha y leche en una versión refrescante.": "Matcha and milk in a refreshing version.",
  "Matcha, leche y hielo.": "Matcha, milk, and ice.",
  "Matcha Frappé": "Matcha Frappé",
  "Bebida helada de matcha, cremosa y espumosa.": "A creamy, frothy iced matcha drink.",
  "Matcha, leche, hielo y base para frappé.": "Matcha, milk, ice, and frappé base.",
  "Chocolate frío": "Iced chocolate",
  "Chocolate servido frío.": "Chocolate served cold.",
  "Leche, chocolate y hielo.": "Milk, chocolate, and ice.",
  "Limonada de café": "Coffee lemonade",
  "Una mezcla cítrica y original con café.": "An original citrus drink with coffee.",
  "Café, limón, agua y azúcar.": "Coffee, lemon, water, and sugar.",
  "Café de naranja": "Orange coffee",
  "Café con notas frescas de naranja.": "Coffee with fresh orange notes.",
  "Café y naranja.": "Coffee and orange.",
  "Morir soñando": "Morir soñando",
  "Bebida cremosa y cítrica.": "A creamy citrus drink.",
  "Jugo de naranja, leche y azúcar.": "Orange juice, milk, and sugar.",
  "Aromas suaves para hacer una pausa": "Gentle aromas for a little pause",
  "Hierba luisa": "Lemon verbena",
  "Infusión herbal de aroma cítrico.": "An herbal infusion with a citrus aroma.",
  "Hierba luisa y agua caliente.": "Lemon verbena and hot water.",
  "Manzanilla": "Chamomile",
  "Infusión floral y delicada.": "A delicate floral infusion.",
  "Flores de manzanilla y agua caliente.": "Chamomile flowers and hot water.",
  "Cedrón": "Lemon verbena",
  "Infusión herbal de aroma fresco.": "A fresh-scented herbal infusion.",
  "Hojas de cedrón y agua caliente.": "Lemon verbena leaves and hot water.",
  "Frutos rojos": "Red berries",
  "Infusión frutal con notas dulces y ácidas.": "A fruity infusion with sweet and tart notes.",
  "Mezcla de frutos rojos deshidratados y agua caliente.": "Dried red berries and hot water.",
  "Frutos cítricos": "Citrus fruits",
  "Aroma cítrico y sabor refrescante.": "Citrus aroma and refreshing flavor.",
  "Mezcla de frutas cítricas y agua caliente.": "Citrus fruits and hot water.",
  "Frutos tropicales": "Tropical fruits",
  "Infusión aromática de perfil tropical.": "An aromatic tropical infusion.",
  "Mezcla de frutas tropicales y agua caliente.": "Tropical fruits and hot water.",
  "Batidos naturales": "Fresh fruit smoothies",
  "Fruta y frescura en cada vaso": "Fruit and freshness in every glass",
  "Fresa": "Strawberry",
  "Batido de fresa preparado al momento.": "A strawberry smoothie made to order.",
  "Fresas, leche o agua y endulzante opcional.": "Strawberries, milk or water, and optional sweetener.",
  "Mora": "Blackberry",
  "Batido frutal de mora.": "A fruity blackberry smoothie.",
  "Mora, leche o agua y endulzante opcional.": "Blackberries, milk or water, and optional sweetener.",
  "Naranjilla": "Naranjilla",
  "Sabor tropical ecuatoriano.": "A taste of the Ecuadorian tropics.",
  "Pulpa de naranjilla, agua o leche y endulzante opcional.": "Naranjilla pulp, water or milk, and optional sweetener.",
  "Tomate de árbol": "Tree tomato",
  "Batido de tomate de árbol.": "A tree tomato smoothie.",
  "Tomate de árbol, agua o leche y endulzante opcional.": "Tree tomato, water or milk, and optional sweetener.",
  "Batido frutal de frutos rojos.": "A red berry smoothie.",
  "Frutos rojos, leche o agua y endulzante opcional.": "Red berries, milk or water, and optional sweetener.",
  "Jugos naturales": "Fresh juices",
  "Fruta fresca, sabor natural": "Fresh fruit, natural flavor",
  "Jugo natural de fresa.": "Fresh strawberry juice.",
  "Fresas, agua y endulzante opcional.": "Strawberries, water, and optional sweetener.",
  "Jugo natural de mora.": "Fresh blackberry juice.",
  "Mora, agua y endulzante opcional.": "Blackberries, water, and optional sweetener.",
  "Jugo de naranjilla, fresco y ligeramente ácido.": "Fresh naranjilla juice with a slight tartness.",
  "Pulpa de naranjilla, agua y endulzante opcional.": "Naranjilla pulp, water, and optional sweetener.",
  "Jugo natural de tomate de árbol.": "Fresh tree tomato juice.",
  "Tomate de árbol, agua y endulzante opcional.": "Tree tomato, water, and optional sweetener.",
  "Mango": "Mango",
  "Jugo tropical de mango.": "Tropical mango juice.",
  "Mango, agua y endulzante opcional.": "Mango, water, and optional sweetener.",
  "Guanábana": "Soursop",
  "Jugo suave de guanábana.": "Smooth soursop juice.",
  "Pulpa de guanábana, agua y endulzante opcional.": "Soursop pulp, water, and optional sweetener.",
  "Un dulce momento para acompañar tu café": "A sweet moment to pair with your coffee",
  "Cheesecake de frutos rojos": "Red berry cheesecake",
  "Cheesecake cremoso con frutos rojos.": "Creamy cheesecake with red berries.",
  "Queso crema, azúcar, huevos, galleta, mantequilla y frutos rojos.": "Cream cheese, sugar, eggs, biscuit crust, butter, and red berries.",
  "Cheesecake de maracuyá": "Passion fruit cheesecake",
  "Cheesecake con un toque tropical de maracuyá.": "Cheesecake with a tropical touch of passion fruit.",
  "Queso crema, azúcar, huevos, galleta, mantequilla y maracuyá.": "Cream cheese, sugar, eggs, biscuit crust, butter, and passion fruit.",
  "Torta de zanahoria": "Carrot cake",
  "Torta suave con zanahoria y especias.": "Soft cake with carrot and spices.",
  "Zanahoria, harina, azúcar, huevos, aceite y especias.": "Carrot, flour, sugar, eggs, oil, and spices.",
  "Torta de chocolate": "Chocolate cake",
  "Torta de chocolate para los amantes del cacao.": "Chocolate cake for cocoa lovers.",
  "Harina, cacao o chocolate, azúcar, huevos, grasa y leche según receta.": "Flour, cocoa or chocolate, sugar, eggs, fat, and milk depending on the recipe.",
  "Pie de manzana": "Apple pie",
  "Manzana horneada con una cubierta dorada.": "Baked apple with a golden crust.",
  "Manzana, harina, mantequilla, azúcar y especias.": "Apple, flour, butter, sugar, and spices.",
  "Pie de frutos rojos": "Red berry pie",
  "Pie con relleno de frutos rojos.": "Pie filled with red berries.",
  "Harina, mantequilla, azúcar y frutos rojos.": "Flour, butter, sugar, and red berries.",
  "Preparados para disfrutar a cualquier hora": "Made to enjoy any time",
  "Sánduche de queso": "Grilled cheese sandwich",
  "Pan tostado con queso fundido.": "Toasted bread with melted cheese.",
  "Pan y queso.": "Bread and cheese.",
  "Sánduche mixto": "Ham and cheese sandwich",
  "Un clásico de jamón y queso.": "A classic ham and cheese sandwich.",
  "Pan, jamón y queso.": "Bread, ham, and cheese.",
  "Sánduche de pollo": "Chicken sandwich",
  "Sánduche relleno de pollo.": "Sandwich filled with chicken.",
  "Pan, pollo cocido y aderezos según receta.": "Bread, cooked chicken, and condiments depending on recipe.",
  "Sánduche de pavo": "Turkey sandwich",
  "Sánduche de pavo.": "Turkey sandwich.",
  "Pan, pavo y aderezos según receta.": "Bread, turkey, and condiments depending on recipe."
};

const UI_TEXT = {
  "tagline1": [
    "Café que se disfruta,",
    "Coffee to savor,"
  ],
  "tagline2": [
    "momentos que se quedan.",
    "moments to remember."
  ],
  "discover": [
    "DESCUBRE EL MENÚ",
    "EXPLORE THE MENU"
  ],
  "menuEyebrow": [
    "NUESTRA CARTA",
    "OUR MENU"
  ],
  "introTitle": [
    "Algo rico te espera",
    "Something delicious awaits"
  ],
  "introDescription": [
    "Toca cualquier producto para descubrir sus ingredientes y detalles.",
    "Tap any item to discover its ingredients and details."
  ],
  "catHot": [
    "Calientes",
    "Hot drinks"
  ],
  "catCold": [
    "Frías",
    "Cold drinks"
  ],
  "catInfusions": [
    "Infusiones",
    "Infusions"
  ],
  "catSmoothies": [
    "Batidos",
    "Smoothies"
  ],
  "catJuices": [
    "Jugos",
    "Juices"
  ],
  "catDesserts": [
    "Postres",
    "Desserts"
  ],
  "catSandwiches": [
    "Sánduches",
    "Sandwiches"
  ],
  "footerNote": [
    "Gracias por compartir este momento con nosotros.",
    "Thank you for sharing this moment with us."
  ],
  "backTop": [
    "Volver al inicio",
    "Back to top"
  ],
  "chooseOption": [
    "Elige tu opción",
    "Choose your option"
  ],
  "ingredients": [
    "Ingredientes",
    "Ingredients"
  ],
  "allergenNote": [
    "Consulta con nuestro equipo si necesitas información sobre alérgenos.",
    "Please ask our team if you need allergen information."
  ],
  "closeDetails": [
    "Cerrar detalles",
    "Close details"
  ],
  "categoryNav": [
    "Categorías del menú",
    "Menu categories"
  ],
  "metaDescription": [
    "Menú de Yana Café en Otavalo, Ecuador.",
    "Yana Café menu in Otavalo, Ecuador."
  ],
  "pageTitle": [
    "Menú | Yana Café — Otavalo, Ecuador",
    "Menu | Yana Café — Otavalo, Ecuador"
  ]
};


let currentLanguage = "es";
const money = value => new Intl.NumberFormat(currentLanguage === "es" ? "es-EC" : "en-US", {
  style: "currency", currency: "USD"
}).format(value);
const sectionsRoot = document.getElementById("menuSections");
const dialog = document.getElementById("productDialog");
let activeProduct, activeVariant, activeSection;

function tr(text) {
  if (text == null) return "";
  return currentLanguage === "es" ? text : (TRANSLATIONS[text] || text);
}
function ui(key) {
  return UI_TEXT[key][currentLanguage === "es" ? 0 : 1];
}
function startingPrice(product) {
  return product.variants ? Math.min(...product.variants.map(v => v.price)) : product.price;
}
function renderStaticText() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = ui(key);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", ui(key));
  });
  document.querySelectorAll("[data-i18n-content]").forEach(el => {
    el.setAttribute("content", ui(el.getAttribute("data-i18n-content")));
  });
  const title = document.querySelector("[data-i18n-title]");
  if (title) title.textContent = ui(title.getAttribute("data-i18n-title"));
  document.querySelectorAll(".language-button").forEach(button => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}
function renderMenu() {
  sectionsRoot.innerHTML = MENU.map(section => `
    <section class="menu-section" id="${section.id}" aria-labelledby="${section.id}-title">
      <div class="section-heading">
        <div class="section-icon" aria-hidden="true">${section.icon}</div>
        <div><h2 id="${section.id}-title">${tr(section.title)}</h2><p>${tr(section.subtitle)}</p></div>
        <div class="heading-line" aria-hidden="true"></div>
      </div>
      <div class="product-grid">${section.products.map((product,index) => `
        <article class="product-card" role="button" tabindex="0" data-section="${section.id}" data-index="${index}" aria-label="${currentLanguage === "es" ? "Ver detalles de " : "View details for "}${tr(product.name)}">
          <div class="product-image-wrap"><img class="product-image" src="${product.image}" alt="${tr(product.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/placeholder.svg';"><span class="photo-label">${tr("Foto referencial")}</span></div>
          <div class="product-info">
            <div class="product-title-row"><h3 class="product-title">${tr(product.name)}</h3><span class="product-price">${product.variants ? tr("Desde ") : ""}${money(startingPrice(product))}</span></div>
            <p class="product-description">${tr(product.description)}</p>
            ${product.variants ? `<p class="variant-hint">${product.variants.length} ${tr("opciones disponibles")}</p>` : ""}
            <span class="view-details">${tr("Ver ingredientes")} <span aria-hidden="true">↗</span></span>
          </div>
        </article>`).join("")}</div>
    </section>`).join("");

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
  activeSection = section;
  activeProduct = section.products[index];
  activeVariant = activeProduct.variants ? activeProduct.variants[0] : null;
  const image = document.getElementById("dialogImage");
  image.src = activeVariant?.image || activeProduct.image;
  image.onerror = function(){ this.onerror = null; this.src = "assets/placeholder.svg"; };
  image.alt = tr(activeProduct.name);
  document.getElementById("dialogCategory").textContent = tr(section.title);
  document.getElementById("dialogName").textContent = tr(activeProduct.name);
  document.getElementById("dialogDescription").textContent = tr(activeProduct.description);
  const block = document.getElementById("variantBlock");
  const options = document.getElementById("variantOptions");
  options.innerHTML = "";
  if (activeProduct.variants) {
    block.hidden = false;
    activeProduct.variants.forEach((variant, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "variant-option" + (i === 0 ? " is-selected" : "");
      button.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      const name = document.createElement("span");
      name.textContent = tr(variant.name);
      const price = document.createElement("strong");
      price.textContent = money(variant.price);
      button.append(name, price);
      button.addEventListener("click", () => {
        activeVariant = variant;
        options.querySelectorAll(".variant-option").forEach(b => {
          b.classList.remove("is-selected");
          b.setAttribute("aria-pressed", "false");
        });
        button.classList.add("is-selected");
        button.setAttribute("aria-pressed", "true");
        updateDetails();
      });
      options.appendChild(button);
    });
  } else {
    block.hidden = true;
  }
  updateDetails();
  if (!dialog.open) dialog.showModal();
}
function updateDetails() {
  const image = document.getElementById("dialogImage");
  if (activeVariant && activeVariant.image) {
    image.src = activeVariant.image;
    image.alt = `${tr(activeProduct.name)} ${tr(activeVariant.name)}`;
  } else {
    image.src = activeProduct.image;
    image.alt = tr(activeProduct.name);
  }
  image.onerror = function(){ this.onerror = null; this.src = "assets/placeholder.svg"; };
  document.getElementById("dialogIngredients").textContent = tr(activeVariant ? activeVariant.ingredients : activeProduct.ingredients);
  document.getElementById("dialogPrice").textContent = money(activeVariant ? activeVariant.price : activeProduct.price);
}
function setLanguage(language) {
  currentLanguage = language;
  renderStaticText();
  renderMenu();
  if (dialog.open && activeSection && activeProduct) {
    const sectionId = activeSection.id;
    const productIndex = activeSection.products.indexOf(activeProduct);
    showProduct(sectionId, productIndex);
  }
}
document.querySelectorAll(".language-button").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
renderStaticText();
renderMenu();
