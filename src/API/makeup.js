const express = require("express");
//CORS Mecanismo de seguridad que permite al servidor indicar el origen del request. Que sólo mi compu y sólo yo decido a quien compartir
var cors = require("cors");
var app = express();
app.use(cors());
const port = 6000;

//Agregas el enlace del archivo JSON. Puedes visualizar la infon con GET o CONSOLE.LOG
const makeupJson = require("./Api.json");
app.get("/makeupS", (req, resp) => {
  resp.json(makeupJson.makeup[0].product_name);
});

var maquillaje = {
  isActive: true,
  _id: "elf-velvet",
  product_name: "Base Elf",
  modelo: "Color medio",
  description:
    "Maquillaje con media cobertura. Esta es la indicada para esos eventos especiales, duración hasta por 10hrs y sin bloqueador para que no reflejes en las fotos.",
  price: 360,
  category: "Maquillaje",
  brand: "Elf",
  sku: "elf-velvet",
  createdAt: "2020-11-23T20:20:54.245Z",
  updatedAt: "2020-11-23T20:20:54.245Z",
  __v: 0,
  image:
    "https://www.delsol.com.mx/wp-content/uploads/2020/05/7502261714090.jpg",
};

var pestanas = {
  isActive: true,
  _id: "Pestañas-lilly",
  product_name: "lilly Lashes",
  modelo: "mink lilly",
  description:
    "Tu makeup necesita ponerse más perrita y lo sabes, estas pestañas tienen el tamaño perfecto entre postisa y natural.",
  price: 65,
  category: "Pestañas",
  brand: "Lilly",
  sku: "Pestañas-lilly",
  createdAt: "2020-11-23T20:20:54.246Z",
  updatedAt: "2020-11-23T20:20:54.246Z",
  __v: 0,
  image:
    "https://www.sephora.com.mx/on/demandware.static/-/Sites-masterCatalog_Sephora/es_MX/dwa02a7c1f/images/hi-res/pestanas-postizas-sephora-collection-sephora-collection-lilly-lashes-for-sephora-collection-pestanas-postizas400021659674A.png",
};

var brochas = {
  isActive: true,
  _id: "Brocha-kill",
  product_name: "Brocha-kill",
  description:
    "Este kit de 10 brochas son ideales para difuminar desde esa carita piciosa hasta tus ojitos pispiretos. Altamente recomendado, hermane.",
  price: 214,
  category: "Brochas",
  brand: "kill",
  sku: "kit-kill",
  createdAt: "2020-11-23T20:20:54.246Z",
  updatedAt: "2020-11-23T20:20:54.246Z",
  __v: 0,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71dkjUoss6L._AC_SY355_.jpg",
};

var maquillaje2 = {
  isActive: true,
  _id: "elf-velvet",
  product_name: "Base Elf",
  modelo: "Color medio",
  description:
    "Maquillaje con media cobertura. Esta es la indicada para esos eventos especiales, duración hasta por 10hrs y sin bloqueador para que no reflejes en las fotos.",
  price: 360,
  category: "Maquillaje",
  brand: "Elf",
  sku: "elf-velvet",
  createdAt: "2020-11-23T20:20:54.245Z",
  updatedAt: "2020-11-23T20:20:54.245Z",
  __v: 0,
  image:
    "https://www.delsol.com.mx/wp-content/uploads/2020/05/7502261714090.jpg",
};

var brochas2 = {
  isActive: true,
  _id: "Brocha-kill",
  product_name: "Brocha-kill",
  description:
    "Este kit de 10 brochas son ideales para difuminar desde esa carita piciosa hasta tus ojitos pispiretos. Altamente recomendado, hermane.",
  price: 214,
  category: "Brochas",
  brand: "kill",
  sku: "kit-kill",
  createdAt: "2020-11-23T20:20:54.246Z",
  updatedAt: "2020-11-23T20:20:54.246Z",
  __v: 0,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71dkjUoss6L._AC_SY355_.jpg",
};

var pestanas2 = {
  isActive: true,
  _id: "Pestañas-lilly",
  product_name: "lilly Lashes",
  modelo: "mink lilly",
  description:
    "Tu makeup necesita ponerse más perrita y lo sabes, estas pestañas tienen el tamaño perfecto entre postisa y natural.",
  price: 65,
  category: "Pestañas",
  brand: "Lilly",
  sku: "Pestañas-lilly",
  createdAt: "2020-11-23T20:20:54.246Z",
  updatedAt: "2020-11-23T20:20:54.246Z",
  __v: 0,
  image:
    "https://www.sephora.com.mx/on/demandware.static/-/Sites-masterCatalog_Sephora/es_MX/dwa02a7c1f/images/hi-res/pestanas-postizas-sephora-collection-sephora-collection-lilly-lashes-for-sephora-collection-pestanas-postizas400021659674A.png",
};

var makeup = [maquillaje, maquillaje2, brochas, brochas2, pestanas, pestanas2];

//ruta del servicio
app.get("/home", (req, response) => {
  response.send(makeup);
});

app.get("/maquillaje", (req, response) => {
    response.send(maquillaje, maquillaje2);
  });

app.get("/brochas", (req, response) => {
  response.send(brochas, brochas2);
});

app.get("/pestañas", (req, response) => {
  response.send(pestanas, pestanas2);
});

//El servidor se quedará escuchando
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
