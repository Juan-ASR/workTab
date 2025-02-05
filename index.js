const formLog = document.getElementById("logForm");
const emailLog = document.getElementById("inputE");
const passLog = document.getElementById("inputP");
const errorPlog = document.querySelector("#logIn-sect .errorP")

const formReg = document.getElementById("regForm");
const emailReg = document.getElementById("inputEReg");
const nameReg = document.getElementById("inputNReg");
const lnameReg = document.getElementById("inputLnReg");
const passReg = document.getElementById("inputPReg");
const cpassReg = document.getElementById("inputCpReg");
const errorPreg = document.querySelector("#regSect .errorP")

formLog.addEventListener("submit",
    (event) => {
        event.preventDefault();
    }
)

formReg.addEventListener("submit",
    (event) => {
        event.preventDefault();
    }
)