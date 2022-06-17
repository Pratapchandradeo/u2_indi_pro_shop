let healthBrend = [
    { img: "https://img.shop.com/Image/Images/11module/MABrands/isotonix-us-au-gb-hk-sg-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/prime-usca-hk-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/ultimate-aloe-usca-hk-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/advanced-level-90-us-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/bliss-new-us-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/glucosatrin-usca-au-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/awake-us-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/mochatonix-us-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/mpc-us-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/nutriclean-us-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/vitamind-us-logo.svg"},
    { img: "https://img.shop.com/Image/Images/11module/MABrands/isotonix-custom-cocktail-us-logo.svg"},

]
let beauty = [
    {img:"https://img.shop.com/Image/Images/11module/MABrands/motives-logo-black.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/ldv-usca-au-gb-es-hk-tw-sg-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/fixx-au-tw-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/timeless-prescription-usca-mx-tw-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/clearshield-usca-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/pentaxyl-usca-au-hk-tw-sg-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/Royal_Spa_logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/skintelligence-usca-mx-hk-tw-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/vitashield-usca-hk-tw-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/cell-labs-usca-au-gb-es-mx-sg-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/ldv-hommes%C2%AE-logo-200x75.svg"},
]
let jewelry = [
    {img:"https://img.shop.com/Image/Images/11module/MABrands/layered-logo.svg"}
]
let home = [
    {img:"https://img.shop.com/Image/Images/11module/MABrands/global-care-us-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/pet-health-usca-hk-sg-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/pure-H2O-usca-hk-tw-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/snap-usca-sg-mys-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/shopdotcom-us-digital-gift-card.svg"}
]
let baby =[
    {img:"https://img.shop.com/Image/Images/11module/MABrands/dna-miracles-us-ca-au-hk-sg-tw-mrktng-logo-new.svg"}
]
let weight = [
    {img:"https://img.shop.com/Image/Images/11module/MABrands/tls-us-hk-logo.svg"}
]
let automo =[
    {img:"https://img.shop.com/Image/Images/11module/MABrands/autoworks-usca-tw-logo.svg"},
    {img:"https://img.shop.com/Image/Images/11module/MABrands/friction-free-3000-usca-tw-logo.svg"}
]

healthBrend.forEach(function(el)
{
    let box = document.createElement("div");
    let pic = document.createElement("img");
    pic.setAttribute("src",el.img);
    box.append(pic);
    document.querySelector("#health").append(box);
})
// beauty brands
beauty.forEach(function(el)
{
    let box = document.createElement("div");
    let pic = document.createElement("img");
    pic.setAttribute("src",el.img);
    box.append(pic);
    document.querySelector("#beauty").append(box);
})
jewelry.forEach(function(el)
{
    let box = document.createElement("div");
    let pic = document.createElement("img");
    pic.setAttribute("src",el.img);
    box.append(pic);
    document.querySelector("#jewelry").append(box);
})
home.forEach(function(el)
{
    let box = document.createElement("div");
    let pic = document.createElement("img");
    pic.setAttribute("src",el.img);
    box.append(pic);
    document.querySelector("#home").append(box);
})
baby.forEach(function(el)
{
    let box = document.createElement("div");
    let pic = document.createElement("img");
    pic.setAttribute("src",el.img);
    box.append(pic);
    document.querySelector("#baby").append(box);
})
weight.forEach(function(el)
{
    let box = document.createElement("div");
    let pic = document.createElement("img");
    pic.setAttribute("src",el.img);
    box.append(pic);
    document.querySelector("#weight").append(box);
})
automo.forEach(function(el)
{
    let box = document.createElement("div");
    let pic = document.createElement("img");
    pic.setAttribute("src",el.img);
    box.append(pic);
    document.querySelector("#automo").append(box);
})