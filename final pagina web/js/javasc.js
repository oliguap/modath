  document.getElementById("Boton").addEventListener("click", Registrarse);

        function Registrarse() {
            var nombre = document.getElementById("First_Name").value
            var apellido = document.getElementById("Last_Name").value
            
            alert("Nombre ingresado:"+nombre+ ", Correo ingresado:" + apellido)
        }