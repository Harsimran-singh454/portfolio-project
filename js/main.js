


function hamburger() {
    // var hamburger = document.getElementById("hamburger");
    // hamburger.addEventListener("click", function () {


        var menu = document.getElementById("menu");
        if (menu.style.display === "none") {
            menu.style.display = "flex";
            hamburger.classList.add("active");
            } else {
                menu.style.display = "none";
                hamburger.classList.remove("active");
                }
                }
                // );
            // }


// $(window).on("load", ()=>{
    
//     $("#hamburger").on("click",function(){
//         $("#menu").slideToggle();
//     })
// })

