// document.addEventListener("DOMContentLoaded", function(){
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//           document.getElementById('#navbar').classList.add('fixed-top');
//           // add padding top to show content behind navbar
//           navbar_height = document.querySelector('.navbar').offsetHeight;
//           document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//           document.getElementById('#navbar').classList.remove('fixed-top');
//            // remove padding top from body
//           document.body.style.paddingTop = '0';
//         } 
//     });
//   }); 
document.querySelector("#signin").addEventListener("click",signFun);


function signFun()
{
    // console.log("i am pratap")
    window.location.href="signin.html";
}
document.querySelector("#order").addEventListener("click",orderFun)

function orderFun()
{
    window.location.href="order.html";
}
document.querySelector("#cart").addEventListener("click",cartFun)

function cartFun()
{
    window.location.href="cart.html"
    // console.log("i am pratap")
}
document.querySelector("#Categories").addEventListener("click",slide_menu);
function slide_menu()
{
    document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }