const viewsControl = {
    actualUser: {},
    updateView(wichView){
        this.animate("hide-card");
        this.animateH("hide-h");

        setTimeout(() => {
            this.loginSect.style.display = wichView == 0 ? "flex" : "none";
            this.regSect.style.display = wichView == 1 ? "flex" : "none";
            this.profileSect.style.display = wichView == 2 ? "flex" : "none";
            this.header.style.bottom = wichView == 3 ? "0" : "150px";

            this.animate("show-card");
            this.animateH("show-h")
        }
        ,1000);
    },

    animate(clase){
        this.mainDiv.className = `container ${clase}`;
    },

    animateH(claseH){
        this.header.className = `header ${claseH}`;
    },

    asignarElementos({header, sectionLog, sectionReg, sectionProf, mainDiv}){
        this.header = header;
        this.loginSect = sectionLog;
        this.regSect = sectionReg;
        this.profileSect = sectionProf;
        this.mainDiv = mainDiv;
    }
}

export default viewsControl;