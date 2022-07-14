// Tratando os produtos que não tem imagem.
for(let i = 0; i < products.length; i++){
    if(
      products[i].image == undefined){
        products[i].image = "./img/products/no-img.svg"
      }
  }

// Criando cabeçalho
let body = document.querySelector("body")

let nav = document.createElement("nav")
let img = document.createElement("img")
img.src = "./img/brand/logo.svg"
img.alt = "Imagem da logotipo do Virtual Market de cor preta"
img.title = "Imagem da logotipo do Virtual Market de cor preta"
nav.appendChild(img)
body.appendChild(nav)

let main = document.createElement("main")
main.classList.add("container")

//categoria fruta
let section = document.createElement("section")
section.classList.add("products-section")
let frutas = document.createElement("h1")
frutas.innerText = "frutas"
let main1 = document.createElement("main")
main1.classList.add(`products-content`)
let ul = document.createElement("ul")

section.appendChild(frutas)
main1.appendChild(ul)
section.appendChild(main1)
main.appendChild(section)
body.appendChild(main)

//categoria Bebidas
let section0 = document.createElement("section")
section0.classList.add("products-section")
let bebidas = document.createElement("h1")
bebidas.innerText = "Bebidas"
let mai = document.createElement("main")
mai.classList.add("products-content")
let ul0 = document.createElement("ul")

section0.appendChild(bebidas)
mai.appendChild(ul0)
section0.appendChild(mai)
main.appendChild(section0)

//categoria Higiene
let section1 = document.createElement("section")
section1.classList.add("products-section")
let higiene = document.createElement("h1")
higiene.innerText = "Higiene"
let main12 = document.createElement("main")
main12.classList.add("products-content")
let u = document.createElement("ul")

section1.appendChild(higiene)
main12.appendChild(u)
section1.appendChild(main12)
main.appendChild(section1)


//Criando os card
  for(let i = 0 ; i < products.length;i++){

let li1 = document.createElement("li")
li1.classList.add("product")

let img1 = document.createElement("img")
img1.src = products[i].image
img1.alt = products[i].title
img1.title = ""
img1.classList.add("product-img")

li1.appendChild(img1)

let main2 = document.createElement("main")
main2.classList.add("product-main")

let h10 = document.createElement("h1")
h10.classList.add("product-title")
h10.innerText = products[i].title

let h50 = document.createElement("h5")
h50.classList.add("product-category")
h50.innerText = products[i].category

let strong = document.createElement("strong")
strong.classList.add("product-price")
strong.innerText = products[i].price
 
main2.appendChild(h10)
main2.appendChild(h50)
main2.appendChild(strong)
li1.appendChild(main2)

if(products[i].category == "Frutas"){
  ul.appendChild(li1)
}
if(products[i].category == "Bebidas"){
  ul0.appendChild(li1)
}
if(products[i].category == "Higiene"){
  u.appendChild(li1)
}
  } 