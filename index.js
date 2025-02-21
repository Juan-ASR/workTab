import viewsControl from "./utils/controlador.js";
import elementos from "./utils/elementos.js";
import Usuario from "./classes/usuario.js";
import Nota from "./classes/Nota.js";

viewsControl.asignarElementos(elementos);


viewsControl.updateView(3);

elementos.linkReg.addEventListener("click",
    () => {
        viewsControl.updateView(1);
        elementos.formReg.reset();
    }
)

elementos.linkLog.addEventListener("click",
    () => {
        viewsControl.updateView(0);
        elementos.formLog.reset();
    }
)

elementos.formReg.addEventListener("submit",
    (event) => {
        event.preventDefault();

        const arregloUsuariosExiste = localStorage.getItem("usuarios");
        let arregloUsuario = [];

        if (arregloUsuariosExiste) {
            const arregloUsuarioExtraido = JSON.parse(arregloUsuariosExiste);

            arregloUsuario = arregloUsuario.concat(arregloUsuarioExtraido);

            const usarioExiste = arregloUsuario.find(usuario => usuario.email == elementos.emailReg.value);

            if (usarioExiste) {
                elementos.errorPreg.textContent = "User already exists";
                return;
            }
        }

        if (elementos.passReg.value != elementos.cpassReg.value) {
            elementos.errorPreg.textContent = "Passwords do not match";
            return;
        }
        elementos.errorPreg.textContent = "";

        const newUser = new Usuario(
            elementos.nameReg.value,
            elementos.lnameReg.value,
            elementos.ageReg.value,
            elementos.emailReg.value,
            elementos.passReg.value,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDS"
        );

        arregloUsuario.push(newUser);
        localStorage.setItem("usuarios", JSON.stringify(arregloUsuario));
        alert("User registered successfully");
        elementos.formReg.reset();
        viewsControl.updateView(0);

    }
)

elementos.formLog.addEventListener("submit",
    (event) => {
        event.preventDefault();

        const arregloUsuarioExiste = localStorage.getItem("usuarios");

        let baseUsuarios = [];

        if (!arregloUsuarioExiste) {
            elementos.errorPlog.textContent = "User not found";
            return;
        }
        elementos.errorPlog.textContent = "";

        baseUsuarios = baseUsuarios.concat(JSON.parse(arregloUsuarioExiste));

        const usuarioExiste = baseUsuarios.find(usuario => usuario.email == elementos.emailLog.value);

        if (!usuarioExiste) {
            elementos.errorPlog.textContent = "User not found";
            return;
        }
        elementos.errorPlog.textContent = "";

        if (usuarioExiste.password != elementos.passLog.value) {
            elementos.errorPlog.textContent = "Incorrect password";
            return;
        }
        elementos.errorPlog.textContent = "";

        if (usuarioExiste.password == elementos.passLog.value && usuarioExiste.email == elementos.emailLog.value) {
            alert("User logged in successfully");
            elementos.formLog.reset();
            console.log("Welcome " + usuarioExiste);
            viewsControl.actualUser = usuarioExiste;
            elementos.profilP.src = viewsControl.actualUser.profilePic;
            viewsControl.updateView(2);
        }
    }
)

// elementos.btnCancel.addEventListener("click",
//     () => {
//         elementos.profilP.src = viewsControl.actualUser.profilePic;
//         viewsControl.updateView(3);
//     }
// )

elementos.liSettings.addEventListener("click",
    () => {
        elementos.imgProf.src = viewsControl.actualUser.profilePic;
        viewsControl.updateView(2);
    }
)

elementos.liLeave.addEventListener("click",
    () => {
        viewsControl.actualUser = {};
        viewsControl.updateView(0);
    }
)

elementos.btnChange.addEventListener("click",
    () => {
        let newPic = prompt("Enter the new profile picture");
        
        if (newPic == null) {
            return;
        }
        if (!newPic.replaceAll(" ", "")) {
            alert("Invalid URL");
            return;
        }
        elementos.imgProf.src = newPic
    }
)

elementos.btnCancel.addEventListener("click",
    () => {
        elementos.imgProf.src = viewsControl.actualUser.profilePic;
        viewsControl.updateView(3);
    }
)

elementos.btnSave.addEventListener("click",
    () => {
        let urlGuardar = elementos.imgProf.src;
        const arregloUsuariosExiste = localStorage.getItem("usuarios");
        let arregloUsuario = [];

        if (!arregloUsuariosExiste) {
            alert("User not found");
            return;
        }

        arregloUsuario = arregloUsuario.concat(JSON.parse(arregloUsuariosExiste));

        const usuarioExiste = arregloUsuario.findIndex(usuario => usuario.email == viewsControl.actualUser.email);

        if (usuarioExiste == -1) {
            alert("User not found");
            return;
        }

        arregloUsuario[usuarioExiste].profilePic = urlGuardar;
        localStorage.setItem("usuarios", JSON.stringify(arregloUsuario));
        alert("Profile picture updated successfully");
        viewsControl.actualUser.profilePic = urlGuardar;

        elementos.profilP.src = urlGuardar;

        viewsControl.updateView(3);
    }
)

