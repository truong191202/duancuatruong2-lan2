// Nhan cac bien duoc truyen tu main.js
let titleSource = localStorage.getItem("viewInfoTitle")
let priceSource = localStorage.getItem("viewInfoPrice")
let imageSource = localStorage.getItem("viewInfoImage")
// Tao cac bien moi cua product.js
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const image = $$(".product-image img:not(.share-image img)")
const title = $(".title")
const price = $(".price")
image.forEach(function(value){
    value.src = imageSource
})
title.innerHTML = `<p>${titleSource}</p>`
price.innerHTML = `<p>${priceSource}</p>`