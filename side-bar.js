function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementsByTagName("body").style.marginLeft = "250px";
  }
  
  function closeNav() {
    window.location.reload()
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByTagName("body").style.marginLeft= "0";
  }