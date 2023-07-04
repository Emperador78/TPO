//console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista
// [“id=3” , “nombre=’tv50’” , ”precio=1200”,”stock=20”]
//console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    
}
//console.log(parts[1])


// //id connection
// const queryStr = location.search;
// const paramtrs = new URLSearchParams(queryStr);
// const productId = paramtrs.get("id");

// //variables
// let arrayProducts = allProducts.products;

const productContainer = document.getElementById("products-details-container");

// let prod = arrayProducts[productId - 1];

//creating card of product
let precio= parts[2][1];
let desc= parts[3][1]
desc=desc.replaceAll("%20"," ")
let descE= parts[4][1]
descE=descE.replaceAll("%20"," ")
descE=descE.replaceAll("%A1","¡")
descE=descE.replaceAll("%C2"," ")
descE=descE.replaceAll("%C3","ñ")
descE=descE.replaceAll("%B1o","ó")
let nombre= parts[1][1]
nombre=nombre.replaceAll("%20"," ")
nombre=nombre.replaceAll("%C3%B3","ó")
let imagen= parts[5][1]
imagen=imagen.replaceAll("%22","")
let id= parts[0][1]
//console.log(imagen);

productContainer.innerHTML = `
        <div class="shop-card shop-card-details" id="shop-element${id}">
          <div class="shopE-img-details">
            <img src="${imagen}" alt="${nombre}" />
          </div>

          <div class="shopE-body-details-cont">
            <div class="shopE-body-details">
              <p class="shopE-title title-details">${nombre}</p>

              <p class="shopE-text text-details">${descE}</p>
            </div>

            <div class="shopE-footer-details">
              <p>$${precio}</p>

              <a href="" class="shopE-button">Comprar</a>
            </div>
          </div>
        </div>
    `;
