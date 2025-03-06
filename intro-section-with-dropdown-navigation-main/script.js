document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".menu-close");
    const nav = document.getElementById("menu");
    const dropdownIcon1 =document.getElementById("dropDown-icon1")
    const dropdownIcon2 =document.getElementById("dropDown-icon2")
    const dropdown1 = document.querySelector(".drop-content1")
    const dropdown2 = document.querySelector(".drop-content2")
    
    //dropdown list 1
    dropdownIcon1.addEventListener("click",function(){
       dropdown1.classList.toggle("active")
       if(dropdown1.classList.contains("active")){
        dropdownIcon1.style="transform:rotate(180deg)";
       }
       else{
      dropdownIcon1.style="transform:rotate(0deg)";
       }
    })
    //dropdown list 2
    dropdownIcon2.addEventListener("click",function(){
        dropdown2.classList.toggle("active")
        if(dropdown2.classList.contains("active")){
            dropdownIcon2.style="transform:rotate(180deg)";
           }
           else{
          dropdownIcon2.style="transform:rotate(0deg)";
           }
    })

    // Mobile menu toggle
    menu.addEventListener("click", function () {
        nav.classList.add("show-menu");
    });

    closeIcon.addEventListener("click", function () {
        nav.classList.remove("show-menu");
    });
});
