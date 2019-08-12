
async function registrarSucursal(e) {
  e.preventDefault();
  var nombreLibreria = await datosUsuario();
  console.log(nombreLibreria);
  console.log(lat);
    if(lat != 0){
        registro(nombreLibreria);
    } else {
      document.getElementById("alert").classList.remove("oculto");
      document.getElementById("msg").innerHTML = "Debe indicar su localización en el mapa";
    }
  }
