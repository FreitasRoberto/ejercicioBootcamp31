let boton = document.querySelector("button")

boton.addEventListener("click", () => alert("click en el botón"))

$("button").click(function() {
    console.log("Estamos utilizando jQuery")
})