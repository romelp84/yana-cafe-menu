/* MENÚ DE YANA CAFÉ: edita precios, descripciones, ingredientes e imágenes aquí. */
const MENU = [
 {id:"calientes",title:"Bebidas calientes",subtitle:"Café preparado con cariño",icon:"☕",products:[
  {name:"Espresso",price:1.50,image:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",description:"Un café corto, intenso y aromático.",ingredients:"Café espresso."},
  {name:"Espresso doble",price:2,image:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",description:"Doble intensidad para quienes aman el café.",ingredients:"Doble extracción de café espresso."},
  {name:"Cappuccino",price:2.25,image:"assets/capuccino.png",description:"Equilibrio de café, leche y espuma.",ingredients:"Espresso, leche vaporizada y espuma de leche."},
  {name:"Americano",price:1.75,image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",description:"Café suave y aromático.",ingredients:"Espresso y agua caliente."},
  {name:"Mocaccino",price:2.50,image:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",description:"Una combinación reconfortante de café y chocolate.",ingredients:"Espresso, leche y chocolate."},
  {name:"Latte",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",description:"Espresso con leche cremosa. Escoge tu sabor favorito.",variants:[
   {name:"Regular",price:2.50,ingredients:"Espresso y leche vaporizada."},{name:"Vainilla",price:2.75,ingredients:"Espresso, leche vaporizada y jarabe de vainilla."},{name:"Caramelo",price:2.75,ingredients:"Espresso, leche vaporizada y jarabe de caramelo."}]},
  {name:"Flat White",price:2.50,image:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",description:"Café con leche de textura sedosa.",ingredients:"Espresso doble y leche microespumada."},
  {name:"Caramel Latte",price:2.75,image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",description:"Latte cremoso con notas dulces de caramelo.",ingredients:"Espresso, leche y jarabe de caramelo."},
  {name:"Chocolate caliente",price:2.50,image:"https://images.unsplash.com/photo-1542990253-0b8be8e4a1e8?auto=format&fit=crop&w=900&q=85",description:"Chocolate caliente, dulce y reconfortante.",ingredients:"Leche y chocolate."},
  {name:"Matcha",price:3,image:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",description:"Té verde japonés de sabor vegetal y delicado.",ingredients:"Matcha y agua caliente."}
 ]},
 {id:"frias",title:"Bebidas frías",subtitle:"Refrescantes en cada sorbo",icon:"❄",products:[
  {name:"Iced Latte",image:"assets/icedlatte.png",description:"Espresso con leche y hielo. Escoge tu sabor favorito.",variants:[
   {name:"Regular",price:2.75,ingredients:"Espresso, leche y hielo."},{name:"Vainilla",price:3,ingredients:"Espresso, leche, hielo y jarabe de vainilla."},{name:"Caramelo",price:3,ingredients:"Espresso, leche, hielo y jarabe de caramelo."}]},
  {name:"Iced Matcha Latte",price:3.25,image:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",description:"Matcha y leche en una versión refrescante.",ingredients:"Matcha, leche y hielo."},
  {name:"Matcha Frappé",price:3.50,image:"https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85",description:"Bebida helada de matcha, cremosa y espumosa.",ingredients:"Matcha, leche, hielo y base para frappé."},
  {name:"Chocolate frío",price:2.50,image:"https://images.unsplash.com/photo-1542990253-0b8be8e4a1e8?auto=format&fit=crop&w=900&q=85",description:"Chocolate servido frío.",ingredients:"Leche, chocolate y hielo."},
  {name:"Limonada de café",price:2.75,image:"https://images.unsplash.com/photo-1513558161293-cfaf765edfd7?auto=format&fit=crop&w=900&q=85",description:"Una mezcla cítrica y original con café.",ingredients:"Café, limón, agua y azúcar."},
  {name:"Café de naranja",price:2.75,image:"https://images.unsplash.com/photo-1513558161293-cfaf765edfd7?auto=format&fit=crop&w=900&q=85",description:"Café con notas frescas de naranja.",ingredients:"Café y naranja."},
  {name:"Morir soñando",price:2.50,image:"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85",description:"Bebida cremosa y cítrica.",ingredients:"Jugo de naranja, leche y azúcar."}
 ]},
 {id:"infusiones",title:"Infusiones",subtitle:"Aromas suaves para hacer una pausa",icon:"❧",products:[
  {name:"Hierba luisa",price:1.50,image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",description:"Infusión herbal de aroma cítrico.",ingredients:"Hierba luisa y agua caliente."},
  {name:"Manzanilla",price:1.50,image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",description:"Infusión floral y delicada.",ingredients:"Flores de manzanilla y agua caliente."},
  {name:"Cedrón",price:1.50,image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",description:"Infusión herbal de aroma fresco.",ingredients:"Hojas de cedrón y agua caliente."},
  {name:"Frutos rojos",price:1.75,image:"assets/infusion-frutos-rojos.png",description:"Infusión frutal con notas dulces y ácidas.",ingredients:"Mezcla de frutos rojos deshidratados y agua caliente."},
  {name:"Frutos cítricos",price:1.75,image:"assets/infusion-frutos-citricos.png",description:"Aroma cítrico y sabor refrescante.",ingredients:"Mezcla de frutas cítricas y agua caliente."},
  {name:"Frutos tropicales",price:1.75,image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",description:"Infusión aromática de perfil tropical.",ingredients:"Mezcla de frutas tropicales y agua caliente."}
 ]},
 {id:"batidos",title:"Batidos naturales",subtitle:"Fruta y frescura en cada vaso",icon:"🥤",products:[
  {name:"Fresa",price:2.50,image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",description:"Batido de fresa preparado al momento.",ingredients:"Fresas, leche o agua y endulzante opcional."},
  {name:"Mora",price:2.50,image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",description:"Batido frutal de mora.",ingredients:"Mora, leche o agua y endulzante opcional."},
  {name:"Naranjilla",price:2.50,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Sabor tropical ecuatoriano.",ingredients:"Pulpa de naranjilla, agua o leche y endulzante opcional."},
  {name:"Tomate de árbol",price:2.50,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Batido de tomate de árbol.",ingredients:"Tomate de árbol, agua o leche y endulzante opcional."},
  {name:"Frutos rojos",price:2.75,image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",description:"Batido frutal de frutos rojos.",ingredients:"Frutos rojos, leche o agua y endulzante opcional."}
 ]},
 {id:"jugos",title:"Jugos naturales",subtitle:"Fruta fresca, sabor natural",icon:"🍊",products:[
  {name:"Fresa",price:2.25,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Jugo natural de fresa.",ingredients:"Fresas, agua y endulzante opcional."},
  {name:"Mora",price:2.25,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Jugo natural de mora.",ingredients:"Mora, agua y endulzante opcional."},
  {name:"Naranjilla",price:2.25,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Jugo de naranjilla, fresco y ligeramente ácido.",ingredients:"Pulpa de naranjilla, agua y endulzante opcional."},
  {name:"Tomate de árbol",price:2.25,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Jugo natural de tomate de árbol.",ingredients:"Tomate de árbol, agua y endulzante opcional."},
  {name:"Mango",price:2.50,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Jugo tropical de mango.",ingredients:"Mango, agua y endulzante opcional."},
  {name:"Guanábana",price:2.75,image:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",description:"Jugo suave de guanábana.",ingredients:"Pulpa de guanábana, agua y endulzante opcional."}
 ]},
 {id:"postres",title:"Postres",subtitle:"Un dulce momento para acompañar tu café",icon:"🍰",products:[
  {name:"Cheesecake de frutos rojos",price:3.50,image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",description:"Cheesecake cremoso con frutos rojos.",ingredients:"Queso crema, azúcar, huevos, galleta, mantequilla y frutos rojos."},
  {name:"Cheesecake de maracuyá",price:3.50,image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",description:"Cheesecake con un toque tropical de maracuyá.",ingredients:"Queso crema, azúcar, huevos, galleta, mantequilla y maracuyá."},
  {name:"Torta de zanahoria",price:3,image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",description:"Torta suave con zanahoria y especias.",ingredients:"Zanahoria, harina, azúcar, huevos, aceite y especias."},
  {name:"Torta de chocolate",price:3,image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",description:"Torta de chocolate para los amantes del cacao.",ingredients:"Harina, cacao o chocolate, azúcar, huevos, grasa y leche según receta."},
  {name:"Pie de manzana",price:3,image:"https://images.unsplash.com/photo-1562007908-17c67e878c8d?auto=format&fit=crop&w=900&q=85",description:"Manzana horneada con una cubierta dorada.",ingredients:"Manzana, harina, mantequilla, azúcar y especias."},
  {name:"Pie de frutos rojos",price:3.25,image:"https://images.unsplash.com/photo-1562007908-17c67e878c8d?auto=format&fit=crop&w=900&q=85",description:"Pie con relleno de frutos rojos.",ingredients:"Harina, mantequilla, azúcar y frutos rojos."}
 ]},
 {id:"sanduches",title:"Sánduches",subtitle:"Preparados para disfrutar a cualquier hora",icon:"🥪",products:[
  {name:"Sánduche de queso",price:2,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",description:"Pan tostado con queso fundido.",ingredients:"Pan y queso."},
  {name:"Sánduche mixto",price:2.50,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",description:"Un clásico de jamón y queso.",ingredients:"Pan, jamón y queso."},
  {name:"Sánduche de pollo",price:3,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",description:"Sánduche relleno de pollo.",ingredients:"Pan, pollo cocido y aderezos según receta."},
  {name:"Sánduche de pavo",price:3,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",description:"Sánduche de pavo.",ingredients:"Pan, pavo y aderezos según receta."}
 ]}
];

const money = value => new Intl.NumberFormat("es-EC",{style:"currency",currency:"USD"}).format(value);
const sectionsRoot = document.getElementById("menuSections");
const dialog = document.getElementById("productDialog");
let activeProduct, activeVariant;

function startingPrice(product){return product.variants ? Math.min(...product.variants.map(v=>v.price)) : product.price;}

function renderMenu(){
 sectionsRoot.innerHTML = MENU.map(section=>`
  <section class="menu-section" id="${section.id}" aria-labelledby="${section.id}-title">
   <div class="section-heading"><div class="section-icon" aria-hidden="true">${section.icon}</div>
    <div><h2 id="${section.id}-title">${section.title}</h2><p>${section.subtitle}</p></div><div class="heading-line" aria-hidden="true"></div>
   </div>
   <div class="product-grid">${section.products.map((product,index)=>`
    <article class="product-card" role="button" tabindex="0" data-section="${section.id}" data-index="${index}" aria-label="Ver detalles de ${product.name}">
     <div class="product-image-wrap"><img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/placeholder.svg';"><span class="photo-label">Foto referencial</span></div>
     <div class="product-info"><div class="product-title-row"><h3 class="product-title">${product.name}</h3><span class="product-price">${product.variants?"Desde ":""}${money(startingPrice(product))}</span></div>
      <p class="product-description">${product.description}</p>${product.variants?`<p class="variant-hint">${product.variants.length} opciones disponibles</p>`:""}
      <span class="view-details">Ver ingredientes <span aria-hidden="true">↗</span></span>
     </div>
    </article>`).join("")}</div>
  </section>`).join("");

 sectionsRoot.querySelectorAll(".product-card").forEach(card=>{
  const open=()=>showProduct(card.dataset.section,Number(card.dataset.index));
  card.addEventListener("click",open);
  card.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();open();}});
 });
}

function showProduct(sectionId,index){
 const section=MENU.find(item=>item.id===sectionId);
 activeProduct=section.products[index];
 activeVariant=activeProduct.variants?activeProduct.variants[0]:null;
 const image=document.getElementById("dialogImage");
 image.src=activeProduct.image;
 image.onerror=function(){this.onerror=null;this.src="assets/placeholder.svg";};
 image.alt=activeProduct.name;
 document.getElementById("dialogCategory").textContent=section.title;
 document.getElementById("dialogName").textContent=activeProduct.name;
 document.getElementById("dialogDescription").textContent=activeProduct.description;
 const block=document.getElementById("variantBlock"), options=document.getElementById("variantOptions");
 options.innerHTML="";
 if(activeProduct.variants){
  block.hidden=false;
  activeProduct.variants.forEach((variant,i)=>{
   const button=document.createElement("button");
   button.type="button";button.className="variant-option"+(i===0?" is-selected":"");
   button.setAttribute("aria-pressed",i===0?"true":"false");
   const name=document.createElement("span");name.textContent=variant.name;
   const price=document.createElement("strong");price.textContent=money(variant.price);
   button.append(name,price);
   button.addEventListener("click",()=>{
    activeVariant=variant;
    options.querySelectorAll(".variant-option").forEach(b=>{b.classList.remove("is-selected");b.setAttribute("aria-pressed","false");});
    button.classList.add("is-selected");button.setAttribute("aria-pressed","true");
    updateDetails();
   });
   options.appendChild(button);
  });
 }else{block.hidden=true;}
 updateDetails();dialog.showModal();
}

function updateDetails(){
 document.getElementById("dialogIngredients").textContent=activeVariant?activeVariant.ingredients:activeProduct.ingredients;
 document.getElementById("dialogPrice").textContent=money(activeVariant?activeVariant.price:activeProduct.price);
}
document.getElementById("dialogClose").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
renderMenu();
