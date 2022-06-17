
let form = document.querySelector("form");
let LSUserData = JSON.parse(localStorage.getItem("userData"))||[];
form.addEventListener("submit", function(event)
{
    event.preventDefault();
    let signData={
        email:form.email.value,
        password:form.password.value,
    }
    console.log(signData)
    if(checkUser(signData.email,signData.password)===true)
    {
        localStorage.setItem("signin_Data",JSON.stringify(signData));
        alert("sign in Successfully");
        window.location.href="index.html";
    }
    else
    {
        alert("Email or password is Wrong ")
    }

})

function checkUser(email,password)
{
    let check = LSUserData.filter(function(el)
    {
        return el.email === email && el.password === password;
    })
    if(check.length>0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
