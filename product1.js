let productData =[
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839296812.jpg?plain&size=400x400",
        name:"Best Garden 5 In. Steel Level Garden Rake (5-Tine) GT-9030",
        price:"$18.59",
        cut_price:"$27.29",
        pid:1,
    },
    {
            image:"https://img.shop.com/Image/280000/281800/281821/products/1932168598.jpg?plain&size=400x400",
            name:"Gardena Bypass Pruning Shears 34122",
            price:"$19.59",
            cut_price:"$37.29",
            pid:2,
    },
    {
        image:"https://img.shop.com/Image/240000/248300/248358/products/1901851260.jpg?plain&size=400x400",
        name:"FISKARS GARDEN TOOLS 391041 POWER GEAR 2 PRUNER",
        price:"$27.77",
        cut_price:"",
        pid:3,
    },
    {
        image:"https://img.shop.com/Image/260000/269900/269960/products/1916081936.jpg?plain&size=400x400",
        name:"48 Pcs Garden Succulent Tools Set Heavy Duty Aluminum Manual Garden Kit Outdoor Gardening Gifts Plant Bag Tool for Men Women",
        price:"$27.99",
        cut_price:"$43.78",
        pid:4,
    },
    {
        image:"https://img.shop.com/Image/280000/287200/287278/products/1890508977.jpg?plain&size=400x400",
        name:"Foldable Garden Kneeler And Seat Benc",
        price:"$37.99",
        cut_price:"$45.78",
        pid:5,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1903783136.jpg?plain&size=400x400",
        name:"Garden Sharp Garden Tool Sharpener 006C Pack of 12",
        price:"$137.99",
        cut_price:"$145.78",
        pid:6,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839299534.jpg?plain&size=400x400",
        name:"GBest Garden 7 In. Bypass Pruner GP-1501",
        price:"$13.99",
        cut_price:"$14.78",
        pid:7,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839296817.jpg?plain&size=400x400",
        name:"Best Garden 12 In. Hand Garden Trowel GT-927A ",
        price:"$13.99",
        cut_price:"$24.78",
        pid:8,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839296817.jpg?plain&size=400x400",
        name:"Best Garden 12 In. Hand Garden Trowel GT-927A ",
        price:"$13.99",
        cut_price:"$24.78",
        pid:9,
    },
    {
        image:"https://img.shop.com/Image/240000/248300/248358/products/1901851260.jpg?plain&size=400x400",
        name:"FISKARS GARDEN TOOLS 391041 POWER GEAR 2 PRUNER",
        price:"$27.77",
        cut_price:"",
        pid:10,
    },
    {
        image:"https://img.shop.com/Image/260000/269900/269960/products/1916081936.jpg?plain&size=400x400",
        name:"48 Pcs Garden Succulent Tools Set Heavy Duty Aluminum Manual Garden Kit Outdoor Gardening Gifts Plant Bag Tool for Men Women",
        price:"$27.99",
        cut_price:"$43.78",
        pid:11,
    },
    {
        image:"https://img.shop.com/Image/280000/287200/287278/products/1890508977.jpg?plain&size=400x400",
        name:"Foldable Garden Kneeler And Seat Benc",
        price:"$37.99",
        cut_price:"$45.78",
        pid:12,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839296812.jpg?plain&size=400x400",
        name:"Best Garden 5 In. Steel Level Garden Rake (5-Tine) GT-9030",
        price:"$18.59",
        cut_price:"$27.29",
        pid:13,
    },
    {
            image:"https://img.shop.com/Image/280000/281800/281821/products/1932168598.jpg?plain&size=400x400",
            name:"Gardena Bypass Pruning Shears 34122",
            price:"$19.59",
            cut_price:"$37.29",
            pid:14,
    },
    {
        image:"https://img.shop.com/Image/240000/248300/248358/products/1901851260.jpg?plain&size=400x400",
        name:"FISKARS GARDEN TOOLS 391041 POWER GEAR 2 PRUNER",
        price:"$27.77",
        cut_price:"",
        pid:15,
    },
    {
        image:"https://img.shop.com/Image/260000/269900/269960/products/1916081936.jpg?plain&size=400x400",
        name:"48 Pcs Garden Succulent Tools Set Heavy Duty Aluminum Manual Garden Kit Outdoor Gardening Gifts Plant Bag Tool for Men Women",
        price:"$27.99",
        cut_price:"$43.78",
        pid:16,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839299534.jpg?plain&size=400x400",
        name:"GBest Garden 7 In. Bypass Pruner GP-1501",
        price:"$13.99",
        cut_price:"$14.78",
        pid:17,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839296817.jpg?plain&size=400x400",
        name:"Best Garden 12 In. Hand Garden Trowel GT-927A ",
        price:"$13.99",
        cut_price:"$24.78",
        pid:18,
    },
    {
        image:"https://img.shop.com/Image/260000/263300/263383/products/1839296817.jpg?plain&size=400x400",
        name:"Best Garden 12 In. Hand Garden Trowel GT-927A ",
        price:"$13.99",
        cut_price:"$24.78",
        pid:19,
    }
    

];
let product = document.querySelector("#p-area");
let cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];

function Display(data)
{
    data.forEach(function(el) {
        
        let product_item = document.createElement("div")

        let pimage = document.createElement("img")
        pimage.src=el.image;
        let name_s = document.createElement("div")
        let name = document.createElement("h5")
        name.innerText=el.name;
        let price_show = document.createElement("div");
        let cut_price =document.createElement("p")
        cut_price.innerText=el.cut_price;
        let price = document.createElement("p")
        price.innerText=el.price;
        let button_p = document.createElement("div")
        let cart_b = document.createElement("button")
        cart_b.innerText="ADD TO CART";
        cart_b.addEventListener("click",function(){
         add_to_cart(el)
        })
        name_s.append(name)
        button_p.append(cart_b);
        price_show.append(cut_price,price);
        product_item.append(pimage,name_s,price_show,button_p)

        product.append(product_item);
    });
}
Display(productData);

function add_to_cart()
{
   cartLS.push(el);
   localStorage.setItem("cart-page",JSON.stringify(cartLS));
   alert("product add sucessfully")
}