const RegisterForm = document.querySelector(".formRegister");
const user = document.querySelector('.barraInputRegister');
const password = document.querySelector('.barraInputRegister')

window.addEventListener("load", () => {

    let existError = true;
    const errores = document.querySelector("errors");

RegisterForm.addEventListener("submit", function (event) {
  
  event.preventDefault();

  switch (true) {
    
  }

  if (!existError) {
    this.submit();
  }
});
})