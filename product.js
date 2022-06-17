
    let larg_img = document.querySelector("#larg_img");
     let small_img = document.querySelectorAll(".small-img");

    small_img[0].onclick = function()
    {
        console.log("i am pratap ")
        larg_img.src = small_img[0].src
    }
    small_img[1].onclick = function()
    {
        larg_img.src = small_img[1].src
    }
    small_img[2].onclick = function()
    {
        larg_img.src = small_img[2].src
    }
    small_img[3].onclick = function()
    {
        larg_img.src = small_img[3].src
    }

    let productData =[
        {
            image:"https://img.shop.com/Image/240000/243300/243380/products/1925345765.jpg?plain&size=1600x1600",
            name:"Motives 3-in-1 Cream Tints",
            price:"39.95",
            quntity:"1",
        },
    ]
let cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];
let cartitem = document.querySelector("#add_to_cart");
    cartitem.addEventListener("click",function()
    {
        addToCartFunc(productData);
    })
function addToCartFunc(productData){
    // console.log("i am pratap");
    let pData =[{
        image:document.querySelector("#larg_img").src,
        pName:document.querySelector("#pName").textContent,
        price:document.querySelector("#money").textContent,
        quntity:document.querySelector("#quntity").value,
}];
    // cartLS.push(pData)
    cartLS.push(localStorage.setItem("cart-page",JSON.stringify(productData)));
    alert("product add successfully")
    console.log(pData);
    



}