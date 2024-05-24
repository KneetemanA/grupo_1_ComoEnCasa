

window.addEventListener("load", function(){
    let carritoBoton= document.querySelector("#modal-carrito");
    let modalc =document.querySelector(".modalc");
    let botonclose=document.querySelector(".closeModal");
   

    carritoBoton.addEventListener("click", function(){
        modalc.style.display = "flex";})

    botonclose.addEventListener("click", function(){
        modalc.style.display = "none";})
        
    this.window.addEventListener("click", function(e){
        if(e.target == modalc){
            modalc.style.display = "none";
        }
    })
      })



