# Menú web de Yana Café

Página web adaptable a celulares para mostrar el menú de Yana Café, Otavalo, Ecuador. Diseñada para publicarse gratis con GitHub Pages.

## Archivos
- `index.html`: estructura de la página.
- `styles.css`: diseño crema y dorado, adaptable a móvil.
- `script.js`: productos, precios, ingredientes e imágenes.
- `assets/placeholder.svg`: imagen alternativa si alguna foto no carga.

## Publicar con GitHub Pages
1. Entra a https://github.com e inicia sesión o crea una cuenta.
2. Crea un repositorio nuevo, por ejemplo `yana-cafe-menu`. Para una página pública sencilla, elige **Public**.
3. Sube `index.html`, `styles.css`, `script.js`, `README.md` y la carpeta `assets`.
4. Dentro del repositorio, abre **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/(root)`, luego pulsa **Save**.
7. Espera unos minutos. GitHub mostrará el enlace público en la misma sección de Pages, normalmente con un formato parecido a `https://TU-USUARIO.github.io/yana-cafe-menu/`.
8. Abre el enlace en el celular para probarlo. Luego crea un código QR con ese enlace para imprimirlo.

## Editar precios e ingredientes
Abre `script.js` y busca el producto dentro del arreglo `MENU`. Cambia los valores `price`, `description`, `ingredients` o `image`.

Ejemplo:
```js
{ 
  name: "Cappuccino",
  price: 2.25,
  image: "assets/cappuccino.jpg",
  description: "Espresso con leche cremosa.",
  ingredients: "Café espresso, leche vaporizada y espuma de leche."
}
```

Los precios y las listas de ingredientes incluidos son **valores de ejemplo**. Revísalos y ajústalos a tu carta y recetas reales antes de compartir el menú con clientes. La información de ingredientes no sustituye la confirmación de alérgenos de tu cocina.

## Reemplazar imágenes provisionales por fotos reales
1. Toma una foto clara del producto y guárdala como JPG o WebP.
2. Sube el archivo a la carpeta `assets`, por ejemplo `assets/cappuccino.jpg`.
3. En el producto correspondiente de `script.js`, cambia el campo `image` a `"assets/cappuccino.jpg"`.
4. Guarda los cambios. GitHub Pages actualizará la web después de unos momentos.

Las fotos actuales cargan desde Unsplash y necesitan conexión a internet. Para un resultado más consistente, reemplázalas por tus propias fotos cuando estén listas.

## Nota sobre privacidad y funcionamiento
Este es un menú informativo: no recopila datos, no necesita base de datos y no recibe pedidos. Los cambios de precios y productos se hacen editando `script.js` y subiendo los cambios a GitHub.
