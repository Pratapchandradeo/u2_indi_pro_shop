let cart_Data =JSON.parse(localStorage.getItem("cart-page")) || [];

function Display(Data){
   
    Data.forEach(function(element,index)   
   {
        let all_s = document.createElement("div")
        let img = document.createElement("img")
        img.src = element.image;
         let name = document.createElement("h4")
        name.innerText=element.name;
        let price = document.createElement("h2")
        price.innerText=element.cut_price;
        //  let quntity=document.createElement("p")
        // quntity.innerText=element.quntity;
        let save_for_la = document.createElement("button")
            save_for_la.innerText="Save for Later";
        let remove = document.createElement("button")
        remove.innerText="remove";
        remove.addEventListener("click",function()
        {
            deletitem(index)
        });
        let box1=document.createElement("div")
        let box2=document.createElement("div")
         let box3=document.createElement("div")
        box1.append(img);
        box2.append(name,price);
        box3.append(save_for_la,remove);
        all_s.append(box1,box2,box3);
        document.querySelector("#c-item").append(all_s);
        // console.log(element.pName,element.Image,element.price)
    })
}
Display(cart_Data);
function deletitem(index)
{   
    console.log(cart_Data)
        cart_Data.splice(index, 1)   
        console.log(cart_Data) 
        localStorage.setItem("cart_Data",JSON.stringify(cart_Data))
        window.location.reload();
}

