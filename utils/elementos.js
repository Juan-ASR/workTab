const elementos = {
    //header elements
    header : document.querySelector("header"),
    profilP : document.getElementById("profImg"),
    liSettings : document.getElementById("settingsLI"),
    liLeave : document.getElementById("leaveLI"),
    
    //main elements
    mainDiv : document.querySelector("div.container"),
    
    //login elements
    sectionLog : document.getElementById("logIn-sect"),
    formLog : document.getElementById("logForm"),
    emailLog : document.getElementById("inputE"),
    passLog : document.getElementById("inputP"),
    errorPlog : document.querySelector("#logIn-sect .errorP"),
    linkReg : document.getElementById("linkRegis"),
    
    //register elements
    sectionReg : document.getElementById("regSect"),
    formReg : document.getElementById("regForm"),
    emailReg : document.getElementById("inputEReg"),
    nameReg : document.getElementById("inputNReg"),
    lnameReg : document.getElementById("inputLnReg"),
    ageReg : document.getElementById("inputAgeReg"),
    passReg : document.getElementById("inputPReg"),
    cpassReg : document.getElementById("inputCpReg"),
    errorPreg : document.querySelector("#regSect .errorP"),
    linkLog : document.getElementById("goToLog"),
    
    //profile elements
    sectionProf : document.getElementById("profileSect"),
    formProf : document.getElementById("profileForm"),
    imgProf : document.querySelector("#profileSect img"),
    btnChange : document.getElementById("btnCh"),
    btnSave : document.getElementById("saveBTN"),
    btnCancel : document.getElementById("cancelBTN"),
}

export default elementos;
