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


//Criando categorias
for(let i = 0;i<=2;i++){
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
if(i == 0){
  frutas.innerText = "Bebidas"
  ul.classList.add("c")
}
if(i == 1){
  frutas.innerText = "Bebidas"
  ul.classList.add("a")
}
if(i == 2){
  frutas.innerText = "Higiene"
  ul.classList.add("b")
}

}


// Selecionando classes
let c = document.querySelector(".c")
let a = document.querySelector(".a")
let b = document.querySelector(".b")


//Criando os cards
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
  c.appendChild(li1)
}
if(products[i].category == "Bebidas"){
  a.appendChild(li1)
}
if(products[i].category == "Higiene"){
 b.appendChild(li1)
}
  } 