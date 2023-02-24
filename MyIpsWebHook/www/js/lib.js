/* -------------------------------------------------------------------------- */
/*                               Class ScrollBar                              */
/* ---------------- scrollbare Leiste horizontal und vertikal --------------- */
/* -------------------------------------------------------------------------- */
class ScrollBar {
    constructor() {
        this.contWidth = "";
        this.contHeight = "";
        this.delay = "All 3s linear";
         this.item = [];
         this.container = "";
         this.itemNo = "";
         this.itemHeight = "";
         this.zeiger = 0;
         this.oldValue = 0
         this.newValue = 0
         this.animation = "";
         this.screenW = window.innerWidth;
         this.screenH = window.innerHeight;
        
         //this.screenW = screen.width;
         //this.screenH = screen.height;

    }
 

    create(ParentID, tag, posTop, posLeft, Cbreite, Choehe, CBcolor, items, Eround, Ehb, Emarg, itemStil, direction, type, anim, funktion, z, Cdelay) {
       //Ehb muss ein px Wert sein sonst funktioniert der Scroll nicht.
       //für "fix" kann auch 100% eingegeben werden.
        /* ------------------ Container mit Scrollfunktion erzeugen ----------------- */
        this.contWidth = Cbreite;
        this.contHeight = Choehe;
        this.delay = Cdelay;

        this.animation = anim;
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        this.container = container;
         
        this.itemHeight = Ehb;
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        if(anim == "harmon"){
            Choehe = (parseInt(Choehe) *2) + "px";
        }
  
        container.style.height = Choehe;
        container.style.width = Cbreite;
        container.style.backgroundColor = CBcolor;
        container.style.zIndex = z;
        container.style.transition = Cdelay;
        container.style.overflowX = "hidden";

      /* let aha = document.createElement("div");
       aha.style.backgroundColor = "blue";
        aha.style.position = "absolute";
        aha.style.left = "10px";
        aha.style.top = "10px";
        aha.style.width = "200px";
        aha.style.height = "100px";
        document.getElementById(ParentID).appendChild(aha);
      */  
        /* ---------------------------- x Items erzeugen ---------------------------- */
        let elem = Array();
        for (let i = 0; i < items; i++) {
            
            elem[i] = document.createElement("div");
            elem[i].id = tag+i;
            this.item[i] = elem[i];
            this.item[i]['off'] = false;
            //Testzeile
            elem[i].style.position = "relative";
            if(anim  == "harmon"){
                elem[i].style.height = "50%";
            }
            /*
            else{
                elem[i].style.height =  ((parseInt(Choehe)*0) - parseInt(Emarg)) + "px";
            }
            */
            elem[i].onclick = event => {
                this.itemNo = i;
                for (let index = 0; index < elem.length; index++) {
                    
                    elem[index].style.removeProperty('border');
                }
                   
                if(anim == "ClickBorder"){
                    elem[i].style.border = "thick solid yellow";
                }
                 eval(funktion);
            }
             
            elem[i].className = itemStil;

        
            
            elem[i].style.margin = Emarg;
            elem[i].style.borderRadius = Eround;
            
            /* ------------------------ Horizontale Scroll Leiste ----------------------- */
            if(direction == "h"){
                //elem[i].style.height = "auto";
                elem[i].style.minWidth = Ehb;
                if(anim  == "harmon"){
                    elem[i].style.top = ((parseInt(Choehe)/2) - parseInt(Emarg)) + "px";
                }
                else{
                    elem[i].style.top = ( - parseInt(Emarg)) + "px";
                }
                
                //wenn dyn
                //Position des item ermitteln
                

                //
            }
            /* ------------------------- Vertikale Scroll Leiste ------------------------ */
            else{
                //elem[i].style.width = ((parseInt(Cbreite)) - parseInt(Eround)) + "px";
				elem[i].style.maxwidth = "100%";
                elem[i].style.minHeight = Ehb;
            }
            container.appendChild(elem[i]); 
        }
       

        /* ---------------- Event in horizontaler Richtung aktivieren --------------- */
        if(direction == "h"){
            container.className = "xScrollContainer";
            if(type == "scroll"){
                container.style.overflowX = "scroll"; 
            }
            if(type == "fix"){
                container.style.overflowX = "hidden";
            }

            if(anim == "anim_1"){
                container.classList.add('anim1');
            }
           
     

           
        }   
        if(direction == "v"){
            container.className = "yScrollContainer"; 
            if(type == "scroll"){
            container.style.overflowY = "scroll"; 
 
            }
            if(type == "fix"){
                container.style.overflowY = "hidden";
            }
            
 
  
            
        }
    }

    getItemNo() {
        return this.itemNo;
    }

    setItemText(x) {
        this.item[x].innerHTML = x;
        this.item[x].style.fontSize = "18px";
        this.item[x].style.position = "absolute";
        this.item[x].style.left = "2px";
        this.item[x].style.top = "2px";
        this.item[x].style.color = "white";
    }
 
    setItemSize(x,b) {
        this.item[x].style.minWidth = b;
    }
    
 
  
    setItemStyle(x, icon, styleClass){
        this.item[x].classList.add(styleClass);
        if(this.animation == "anim_1"){
            this.item[x].classList.add(styleClass, "animItem1");
        }
        if(icon!== ""){
            var container = document.createElement("div");
            this.item[x].append(container);
        
            var elem1 = document.createElement("img");
            container.append(elem1);
       
            elem1.src = "icons/" + icon;
            elem1.alt = syserror;
 
            elem1.style.width = '80%';
            elem1.style.height = '80%';
            elem1.style.position = "absolute";
            elem1.style.top = "0";
            elem1.style.bottom = "0";
            elem1.style.left = "0";
            elem1.style.right = "0";
            elem1.style.margin = 'auto';
        }

    }

    setItemImage(x, image){
        var img = document.createElement('img');
        this.item[x].append(img);
        img.src = 'images/' + image;
        img.style.width = "100%";
        img.style.height = "100%";
    }

    jumpToItem(x){
        this.item[x].scrollIntoView({
             block: "end", scrollBehavior: "smooth"
        });
    }

    fadeWidth(w){
        this.container.style.width = w;
        this.container.style.transition = this.delay;
    }

    fadeHeight(y){
        this.container.style.height = y;
        this.container.style.transition = this.delay;
    }

    fadeOut(){
        this.container.style.opacity = 0;
        this.container.style.zIndex = 0;
        this.container.style.transition = this.delay;
    }

    fadeIn(){
        this.container.style.transition = this.delay;
        this.container.style.opacity = 1;
        this.container.style.zIndex = 3;
    }

    fadeOff(direction){
        if(direction == "top"){
            this.container.style.height = 0;
        }
        else if(direction == "left"){
            this.container.style.width = "0px";
        }
        else{} 
    }
    moveTo(posX){
        this.container.style.left = posX;
    }
    moveUp(posY){
        this.container.style.top = posY;
    }


    loadContent(x) {
        /* ---------------------- nur Laden wenn Seite nicht geladen --------------------- */
        var loaded = document.getElementById(x);
        if(!loaded){
            jQuery.get("html/" + x + ".html", function (data) {
                const dataMainCtrl = data.split("//TRENNUNG//") 
                jQuery("#MAIN" + x).html(dataMainCtrl[0]);
                jQuery("#CTRL" + x).html(dataMainCtrl[1]);
            }).done(function () {
                
            })
        }
    }
    
    loadContentFull(x, id) {
        /* ------------------- nur Laden wenn Seite nicht geladen ------------------- */
        var loaded = document.getElementById(x);
        if(!loaded){
            jQuery.get("html/" + x + ".html", function (data) {
                
                jQuery("#COVER" + x).html(data);
                
            }).done(function () {
            
            })
        }
    }

    loadFloorplan(x) {
        /* ------------------- nur Laden wenn Seite nicht geladen ------------------- */
        var loaded = document.getElementById(x);
        if(!loaded){
            jQuery.get("floorplan" + ".html", function (data) {
                
                jQuery("#COVER1" ).html(data);
                
            }).done(function () {
            
            })
        }
    }

    loadWindow(x, id) {
        /* ------------------- nur Laden wenn Seite nicht geladen ------------------- */
        var loaded = document.getElementById("x");
        if(!loaded){
            jQuery.get("html1/" + x + ".html", function (data) {
                
                jQuery("#TAB" + x).html(data);
                
            }).done(function () {
            
            })
        }
    }

}

/* -------------------------------------------------------------------------- */
/*                                 Class Label                                */
/* ---------------------------- Beschriftungstext --------------------------- */
/* -------------------------------------------------------------------------- */
class label {
    constructor() {
        this.breite = "100px";
        this.hoehe = "50px";
    }
    create(ParentID, posTop, posLeft, fontsize, fontcolor, text, ...param) {
        if (param.length > 0) {
            this.breite = param[0];
            this.hoehe = param[1];
        }
        var elem = document.createElement("p");
        document.getElementById(ParentID).appendChild(elem);
        elem.style.color = fontcolor;
        elem.style.fontSize = fontsize;
        elem.innerHTML = text;
        elem.style.wordWrap = "normal";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = this.breite;
        elem.style.height = this.hoehe; 
        
    }
}

/* -------------------------------------------------------------------------- */
/*                             Class Dynamic Icon                             */
/* --------------------------- dynamisiertes Icon --------------------------- */
/* -------------------------------------------------------------------------- */
class DynIcon {
    constructor(IBaseName, type, revers) {
        this.ID = "";
        this.ImageBaseName = IBaseName;
        this.typ = type;
        this.revers = revers;
        //optionale Parameter
        this.bgColor = "transparent";
    }

    create(ParentID, posTop, posLeft, b, h, ...param) {
        if (param.length > 0) {
            this.bgColor = param[0];
        }
        var elem = document.createElement("img");
        document.getElementById(ParentID).appendChild(elem); 
        this.ID = elem;
        //elem.className = "icon";
        elem.src = "images/" + this.ImageBaseName + "0.png";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = b;
        elem.style.height = h;
        elem.style.backgroundColor = this.bgColor;
    }

    update(value) {
        if (this.typ === "ana") {
            if(typeof value != "undefined"){
                let pos = parseInt(value['value']);
                if (pos === 0) {
                    this.ID.src = "images/" + this.ImageBaseName + "0.png";
                } else if (pos === 1) {
                    this.ID.src = "images/" + this.ImageBaseName + "1.png";
                } else if (pos === 2) {
                    this.ID.src = "images/" + this.ImageBaseName + "2.png";
                } else if (pos === 3) {
                    this.ID.src = "images/" + this.ImageBaseName + "3.png";
                } else if (pos > 3 && pos < 11) {
                    this.ID.src = "images/" + this.ImageBaseName + "10.png";
                } else if (pos > 10 && pos < 21) {
                    this.ID.src = "images/" + this.ImageBaseName + "20.png";
                } else if (pos > 20 && pos < 31) {
                    this.ID.src = "images/" + this.ImageBaseName + "30.png";
                } else if (pos > 30 && pos < 41) {
                    this.ID.src = "images/" + this.ImageBaseName + "40.png";
                } else if (pos > 40 && pos < 51) {
                    this.ID.src = "images/" + this.ImageBaseName + "50.png";
                } else if (pos > 50 && pos < 61) {
                    this.ID.src = "images/" + this.ImageBaseName + "60.png";
                } else if (pos > 60 && pos < 71) {
                    this.ID.src = "images/" + this.ImageBaseName + "70.png";
                } else if (pos > 70 && pos < 81) {
                    this.ID.src = "images/" + this.ImageBaseName + "80.png";
                } else if (pos > 80 && pos < 91) {
                    this.ID.src = "images/" + this.ImageBaseName + "90.png";
                } else if (pos > 90 && pos < 101) {
                    this.ID.src = "images/" + this.ImageBaseName + "100.png";
                } else {}
            }else{
                this.ID.src = "images/error.png";
            }
        }
        if (this.typ === "bin") {
            if(typeof value != "undefined"){
                value = value['value'] + 0;
                if (this.revers) {
                    if (value === 0) {
                        this.ID.src = "images/" + this.ImageBaseName + "1.png";
                    } else {
                        this.ID.src = "images/" + this.ImageBaseName + "0.png";
                    }
                } else {
                    if (value === 0) {
                        this.ID.src = "images/" + this.ImageBaseName + "0.png";
                    } else {
                        this.ID.src = "images/" + this.ImageBaseName + "1.png";
                    }
                }

            }else{
                this.ID.src = "images/error.png";
            }
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                              ClassShowUrlImage                             */
/* -------------------------------------------------------------------------- */
class ShowUrlImage {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, SourceUrl) {
        var img = document.createElement("img");
        document.getElementById(ParentID).appendChild(img);
        img.src = SourceUrl;
        img.alt = "images/notFound.png";
        img.style.width = sizeW;
        img.style.height = sizeH;
        img.style.position = "absolute";
        img.style.top = posTop;
        img.style.left = posLeft;
        this.ID = img;  
    }

    update(SourceUrl) {
        if(typeof SourceUrl != "undefined"){
            if(SourceUrl != ""){
                this.ID.src = SourceUrl['value'];
            }
        }else{
            this.ID.src = "images/error.png";
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                               Class AlarmBox                               */
/* -------------------------------------------------------------------------- */
class AlarmBox {
    constructor() {
        this.ID = "";
        this.cmd = [];
    }

    create(ParentID, ObjID, color, posTop, posLeft, cmd0) {
        this.ID = ObjID;
        this.cmd[0] = cmd0;

        var elem = document.createElement("div");
        document.getElementById(ParentID).appendChild(elem);
        elem.className = "AlarmBox";
        elem.classList.add(color);
        elem.id = this.ID;
        elem.style.fontSize = "24px";
        elem.style.padding = "4px";
        var command =JSON.stringify(this.cmd);
        elem.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');
        elem.innerHTML = "Einbrecher!";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = "205px";
        elem.style.height = "45px";
        elem.style.display = "block";
        elem.style.zIndex = "4";
        elem.style.backgroundColor = color;
        elem.style.fontFamily = "Arial";
        elem.href = "#";
        elem.style.paddingTop = "4px";
        elem.style.border = "thick solid #0000FF";
        elem.style.borderRadius = "10px";
    }

    update(value) {
        if (value == 2) {
            document.getElementById(this.ID).style.display = "block";
        } else {
            document.getElementById(this.ID).style.display = "none";
        }
    }
}


/* -------------------------------------------------------------------------- */
/*                             Class StateDisplay                             */
/* ------------------------- Variablen Wert Anzeige ------------------------- */
/* -------------------------------------------------------------------------- */
class StateDisplay {
    constructor() {
        this.ID = "";
        this.ID2 = "";
        this.ID3 = "";
        this.unit = "";
        this.textColor = "black";
        this.type = "bool";
        this.state0 = "";
        this.state1 = "";
        this.state2 = "";
        this.state3 = "";
        
        this.title = "";
        this.bgColorOff = "black";
        this.bgColorOn = "";
        this.bgColorState = false;
     
        //Optionale Parameter
    }

    get textColor() {
        return this._textColor;
    }

    set textColor(textColor) {
        this._textColor = textColor;
    }
   
    create(ParentID, color, einheit, posTop, posLeft, hoehe, breite, SchriftGr, titel, typ, zus0, zus1, zus2, zus3, command, ...param) {
        if (param.length > 0) {
            
            this.bgColorOn = param[0];
            this.bgColorState = true;
        }
        this.unit = einheit,
            this.title = titel;
        
        if (color === "") {
            this.bgColorOff = "black";
        }
        else{
            this.bgColorOff = color;
        }
        this.type = typ;
        this.state0 = zus0;
        this.state1 = zus1;
        this.state2 = zus2;
        this.state3 = zus3;
        var container = document.createElement("div");
        this.ID = container;
        document.getElementById(ParentID).appendChild(container);
        container.className = "anzeige";
        container.classList.add(this.bgColorOff);
        container.style.color = "white";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.width = breite;
        container.style.height = hoehe;
        container.style.wordWrap = "break-word";
        container.setAttribute("onclick", command);
        //Beschriftung
        var elem2 = document.createElement("div");
        container.append(elem2);
        this.ID2 = elem2;
        elem2.style.backgroundColor = "black";
        elem2.style.setProperty('font-size', 'calc(' + hoehe + '*0.2)');
        elem2.style.setProperty('height', 'calc(' + hoehe +  '* 0.25)');
        elem2.innerHTML = titel;
        elem2.style.paddingTop = "2px";
        elem2.style.textAlign = "center";
        //Anzeige Wert
        var elem3 = document.createElement("div");
        container.append(elem3);
        elem3.innerHTML = "----" + this.unit;
         
        //elem3.style.setProperty('font-size', 'calc(' + hoehe + '*0.4)');
        elem3.style.setProperty('font-size', SchriftGr);
        elem3.style.setProperty('padding-top', 'calc(' + hoehe + '*0.15)');
        elem3.style.textAlign = "center";
        elem3.style.color = this.textColor;
        this.ID3 = elem3;  
    }

    update(value, n = 0, title = this.title, scale = 1) {
        try {
            this.ID2.innerHTML = title;
            this.ID3.style.color = this.textColor;
             
            if(typeof value == "object"){
                if (this.type === "number") {
                    var wert = (value['value'].toFixed(n))*scale;
                    this.ID3.innerHTML = (wert.toString() + this.unit);
                } else if (this.type === "string") {
                    this.ID3.innerHTML = (value['value'].toString() + this.unit);
                } else if (this.type === "bool") {
                    switch (value['value']) {
                        case 0:
                            this.ID3.innerHTML = this.state0;
                            if(this.bgColorState){
                                this.ID.classList.remove(this.bgColorOn);
                                this.ID.classList.add(this.bgColorOff);   
                            }
                            
                            break;
                        case 1:
                            this.ID3.innerHTML = this.state1;
                            if(this.bgColorState){
                                this.ID.classList.remove(this.bgColorOff);
                                this.ID.classList.add(this.bgColorOn);  
                            }
                            break;
                        case false:
                            
                            this.ID3.innerHTML = this.state0;
                            if(this.bgColorState){
                                this.ID.classList.remove(this.bgColorOn);
                                this.ID.classList.add(this.bgColorOff);
                            }
                            break;
                        case true:
                            this.ID3.innerHTML = this.state1;
                            if(this.bgColorState){
                                this.ID.classList.remove(this.bgColorOff);
                                this.ID.classList.add(this.bgColorOn);
                            }
                        break;
                    }
                }
                else {
                    switch (value['value']) {
                        case 0:
                            this.ID3.innerHTML = this.state0;
                            break;
                        case 1:
                            this.ID3.innerHTML = this.state1;
                            break;
                        case 2:
                            this.ID3.innerHTML = this.state2;
                            break;
                        case 3:
                            this.ID3.innerHTML = this.state3;
                            break;
                    }
                }
            }
            else{
                this.ID3.innerHTML = value;
            }

        } catch (error) {
            //$('fehler').innerHTML = "Variable  fehlt:";
            //alert("value in Display error" + this.ID);
            var x = error.message;
            this.ID3.innerHTML = "";
        }
    }

    setTextColor(farbe) {
        this.ID3.style.color = farbe;
    }
}



/* -------------------------------------------------------------------------- */
/*                                Class KeyPad                                */
/* ------------------------------- Zahlenfeld ------------------------------- */
/* -------------------------------------------------------------------------- */
class KeyPad {
    constructor() {
        this.value1 = "";
        this.code = "";
        this.display = "";
    }

    create(ParentID, Device, color, size, posTop, posLeft, cmd) {
        var elem = document.createElement("div");
        document.getElementById(ParentID).appendChild(elem);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        var Zdisplay = document.createElement("div");
        elem.append(Zdisplay);
        Zdisplay.style.backgroundColor = "grey";
        Zdisplay.style.padding = "7px" * size;
        let hoehe = 50 * size;
        let breite = 320 * size;
        Zdisplay.style.height = hoehe + "px";
        Zdisplay.style.width = breite + "px";
        let z1 = 38 * size;
        Zdisplay.style.fontSize = z1 + "px";
        Zdisplay.style.border = "thick solid #0000FF";
        Zdisplay.style.marginBottom = "10px";
        Zdisplay.style.paddingTop = "10px";
        this.display = Zdisplay;
        
        var Zcontainer = document.createElement("div");
        elem.append(Zcontainer);
        Zcontainer.className = "ZahlenContainer";
        Zcontainer.style.backgroundColor = "black";
        Zcontainer.style.padding = "7px" * size;
        let h = 320 * size;
        let b = 320 * size;
        Zcontainer.style.height = h + "px";
        Zcontainer.style.width = b + "px";
        Zcontainer.style.paddingTop = "10px";
     
        for (var i = 0; i < 9; i++) {
            var taste = document.createElement("div");
            Zcontainer.append(taste);
            taste.className = "fontbutton";
            taste.classList.add(color);
            let f1 = 38 * size;
            taste.style.fontSize = f1 + "px";
            taste.style.padding = "8px";
            let a1 = 80 * size;
            let b1 = 55 * size;
            taste.style.width = a1 + "px";
            taste.style.height = b1 + "px";
            let tastenzahl = i;
            //taste.setAttribute("onclick", "this.passkey(" + i + ")");
            taste.onclick = function () {
                passkey(tastenzahl);
            }
            taste.innerHTML = i;
        }
        var reply = document.createElement("div");
        Zcontainer.append(reply);
        reply.className = "fontbutton";
        reply.classList.add(color);
        let f2 = 38 * size;
        reply.style.fontSize = f2 + "px";
        reply.style.padding = "8px";
        let a2 = 80 * size;
        let b2 = 55 * size;
        reply.style.width = a2 + "px";
        reply.style.height = b2 + "px";
        //reply.setAttribute("onclick", "passkeyrepeat()");
        reply.onclick = function () {
            passkeyrepeat();
        }

        var replyA = document.createElement("i");
        reply.append(replyA);
        replyA.className = "fa-solid fa-reply";
        let f6 = 30 * size;
        replyA.style.fontSize = f6 + "px";
        replyA.style.padding = "5px";
        replyA.style.marginTop = "10px" * size;  

        var taste9 = document.createElement("div");
        Zcontainer.append(taste9);
        taste9.className = "fontbutton";
        taste9.classList.add(color);
        let f3 = 38 * size;
        taste9.style.fontSize = f3 + "px";
        taste9.style.padding = "8px";
        let a3 = 80 * size;
        let b3 = 55 * size;
        taste9.style.width = a3 + "px";
        taste9.style.height = b3 + "px";
        //taste9.setAttribute("onclick", "passkey(9)");
        taste9.onclick = function () {
            passkey("9");
        }
        taste9.innerHTML = "9";
        
        var enter = document.createElement("div");
        Zcontainer.append(enter);
        enter.className = "fontbutton";
        enter.classList.add(color);
        let f4 = 38 * size;
        enter.style.fontSize = f4 + "px";
        enter.style.padding = "8px";
        let a4 = 80 * size;
        let b4 = 55 * size;
        enter.style.width = a4 + "px";
        enter.style.height = b4 + "px";
        //enter.setAttribute("onclick", "sendpassword('" + cmd0 + "')" );
 
        enter.onclick = function () {
            var command =[];
            
            command[0] = cmd.replace("XXXXXX", Zdisplay.innerHTML); 
        
            var Befehl = JSON.stringify(command);
            send(Befehl);
            passkeyrepeat();
            
        }

        var enterA = document.createElement("i");
        enter.append(enterA);
        enterA.className = "fa-solid fa-check";
        let f5 = 30 * size;
        enterA.style.fontSize = f5 + "px";
        enterA.style.padding = "5px";
        enterA.style.marginTop = "10px" * size;   
        
        function passkey(b) {
            var keys = Zdisplay.innerHTML + b;
            
            Zdisplay.innerHTML = keys;
        }

        function passkeyrepeat(){
            var keys = "";
            Zdisplay.innerHTML = keys;
         }
    }

    update(status){
        if(typeof status == "object"){
            if(status['value'] == false){
                this.display.style.backgroundColor = "green";
            }
            else {
                this.display.style.backgroundColor = "red";
            }
        }
    }
 
}


/* -------------------------------------------------------------------------- */
/*                                 Class clock                                */
/* -------------------------------------------------------------------------- */
class clock {
    constructor() {
        this.uhr = "";
        this.datum = "";
    }

    create(ParentID, posTop, posLeft, breite, hoehe, bgclass, fsTime, fsDate, timeColor) {
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);

        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.color = timeColor;
        if (bgclass) {
            container.className = "clock";
        } else {
            container.style.backgroundColor = "transparent";
        }
        container.style.zIndex = 2;
        container.style.width = breite;
        container.style.height = hoehe;

        var clock = document.createElement("div");
        container.append(clock);
        this.uhr = clock;
        clock.idname = "clock";
        clock.style.fontSize = fsTime;

        var date = document.createElement("div");
        container.append(date);
        this.datum = date;
        date.idname = "date"
        date.style.fontSize = fsDate;        
    }

    startTime() {
        var today = new Date();
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();

        //Add a zero in front of numbers<10
        hr = ("00" + hr).slice(-2);
        min = ("00" + min).slice(-2);
        sec = ("00" + sec).slice(-2);
        this.uhr.innerHTML = hr + ":" + min;
        var months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        var days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        var curWeekDay = days[today.getDay()];
        var curDay = today.getDate();
        var curMonth = months[today.getMonth()];
        var curYear = today.getFullYear();
        var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
        this.datum.innerHTML = date;   
    }
}


/* -------------------------------------------------------------------------- */
/*                                Class VarDis                                */
/* -------------------------------------------------------------------------- */
class VarDis {
    constructor() {
        this.ID = "";
        this.unit = "";
        this.textColor = "white";
        this.state1 = "";
        this.state2 = "";
        this.bgColor = "transparent";
        this.icon = "";
        this.iconColor = "yellow";
        this.width = "250px";
        this.height = "170px";
    }

    create(ParentID, bgColor, posTop, posLeft, b, h, einheit, txtcolor, ...param) {
        this.width = b;
        this.height = h;
        this.bgColor = bgColor;
        this.unit = einheit;
        this.textColor = txtcolor; 

        if (param[0]) {
            this.state1 = param[0];
        }
        if (param[1]) {
            this.state2 = param[1];
        }
        if (param[2]) {
            this.icon = param[2];
        }
        if (param[3]) {
            this.iconColor = param[3];
        }


        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.width = this.width;
        container.style.height = this.height;
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.alignItems = "center";
        container.style.justifyContent = "space-between";
        /*container.style.backgroundColor = bgColor; */
        container.className = "var";
        container.classList.add(bgColor);
        container.style.paddingLeft = "0.5em";
        container.style.paddingRight = "0.5em";
        var s = false;

        var elemicon = document.createElement("div");
        container.append(elemicon);
        if (param[2]) {
            elemicon.className = this.icon;
            elemicon.style.color = this.iconColor;
        }
        var elem = document.createElement("div");
        container.append(elem);
        elem.style.color = this.textColor;

        this.ID = elem;  
    }

    update(value, n, scale = 1) {

        try {
             
            if(typeof value == "object"){
                if (n === 0 || n > 0) {
                    //var wert = Math.round(value).toFixed(n);
                    var wert = (value['value'].toFixed(n)) * scale;
                    this.ID.innerHTML = wert + this.unit;
                } else if ((value['value'] === false) || (value['value'] == 0)) {
                    this.ID.innerHTML = this.state1;
                } else if ((value['value'] === true) || (value['value'] == 1)) {
                    this.ID.innerHTML = this.state2;
                } else {
                    this.ID.innerHTML = value['value'] + this.unit;
                }
            }
            else{
                this.ID.innerHTML = value;
            }

        } catch (error) {
             
            if(typeof value == "undefined"){
                this.ID.innerHTML = '';
            }
        }

    }
}

/* -------------------------------------------------------------------------- */
/*                                Class Kachel                                */
/* -------------------------------------------------------------------------- */
class Kachel {
    constructor() {
        this.ID = "";
        this.labelText;
        this.labelObj = "";

        this.b = "200px";
        this.h = "350px";
        //optionale Parameter
        this.btnTextColor = "black";
        this.labelcolor = "lime";
    }
    create(ParentID, posTop, posLeft, breite, hoehe, color, title, ...param) {
        //create(ParentID, posTop, posLeft, breite, hoehe, color, title, options={}) {
            //this.idname= options.idname || "";
            //this.btnTextColor = options.btnTextColor || "black";
            //this.labelcolor = options.labelcolor || "lime";
            
        this.labelText = title;
        this.color = color;
        this.b = breite;
        this.h = hoehe;
        if(param.length > 0) {
            this.idname= param[0];
        }
        if (param.length > 1) {
            this.btnTextColor = param[1];
            this.labelcolor = param[2];
        }
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        this.ID = container;
        container.style.flexDirection = "column";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color + "Light";
         
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;
        container.style.border = "thin solid black";
        container.id = this.idname;
        this.ID = container;
        // Label 
        var label = document.createElement("div");
        container.append(label);
        this.labelObj = label;
        label.style.height = "30px";
        label.style.backgroundColor = this.btnTextColor;
        label.innerHTML = title;
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.style.justifyContent = "center";        
    }
    hide(){
        this.ID.style.visibility = "hidden";
    }
    unhide(){
        this.ID.style.visibility = "visible";
    }
    update(value) {
        this.labelObj.innerHTML = value['value'];
    }
}


/* -------------------------------------------------------------------------- */
/*                              Class Ctrl Button                             */
/* -------------------------------------------------------------------------- */
//TODO:  prüfen ob nicht FontCtrlButton und CtrlButton zusammengeführt werden kann
class CtrlButton {
    constructor() {
        this.ID = "";

        //optionale Parameter
        this.FontFarbe = "black";
   
        this.cmd = [];
    }

    create(ParentID, posTop, posLeft, btnClass, style, color, text, textColor="black", ctrltype, ctrlWin, cmd1, ...param) {
        this.cmd[0] = cmd1;
        this.FontFarbe = textColor;
        if (param.length == 1) {
            this.cmd[1] = param[0];
        }
        if (param.length == 2) {
            this.cmd[1] = param[0];
            this.cmd[2] = param[1];
        }
  
        var elem = document.createElement("div");

        elem.className = btnClass;
        elem.classList.add(style, color);
        this.ID = elem;
        elem.style.color = this.FontFarbe;
        elem.innerHTML = text;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.zIndex = "3";
        if (ctrltype === "ctrlWindow") {
            elem.onclick = function () {

                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // ctrlWindow umschalten
                document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";
            };
        } else if (ctrltype === "func") {
            var command =JSON.stringify(this.cmd);
            elem.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');
        } else if (ctrltype === "CtrlFunc") {

            elem.onclick = function () {

                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // ctrlWindow umschalten
                document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";

                ShowHidePanel(cmd1);
            }

            document.getElementById(ParentID).appendChild(elem);

        } 
 


        document.getElementById(ParentID).appendChild(elem);
    }



    off() {
        this.ID.style.transition = "all 2s ease-in";
        this.ID.style.height = "0px";
        this.ID.style.opacity = "0";
        this.ID.style.visibility = "hidden";
    }

}

/* -------------------------------------------------------------------------- */
/*                            Class FontCtrlButton                            */
/* -------------------------------------------------------------------------- */
//TODO muss überarbeitet werden
class FontCtrlButton {
    constructor() {
        this.ID = "";
        this.ID1 = "";
        this.cmd = [];

        //optionale Parameter
        this.b = "200px";
        this.h = "60px";
        this.textfarbe = "black";
        this.textgr = "20px";
        this.textfarbeAF = "black";

    }
    create(ParentID, color, posTop, posLeft, symbol, text, ctrltype, cmd, ctrlWin, WinNo, ...param) {
        if (param.length > 1) {
            this.b = param[0];
            this.h = param[1];
            this.textfarbe = param[2];
            this.textgr = param[3];
            this.textfarbeAF = param[4];
        }
        if (param.length > 5) {
            this.cmd[1] = param[5];
            this.cmd[2] = param[6];
        }
        var container = document.createElement("div");
        container.className = "ctrlbutton";
        container.classList.add(color);
        this.ID = container;
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.justifyContent = "space-around";
         

        switch (ctrltype) {
            case "func":
                /* -------------------- sendet bei click einen Befehl ------------------- */
                this.cmd[0] = cmd;
                var command =JSON.stringify(this.cmd);
                container.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');
                break;
            case "ctrlWindow":
                /* ------------------------- Fenster Inhalt umschalten ------------------------- */
                container.onclick = function () {
                    ctrlWin.forEach((element)=> {
                        element.hide();
                    })
                    ctrlWin[WinNo].unhide();
                }
                break;
            case "CtrlFunc":
                /* --------------- Fenster Inhalt umschalten und Befehl senden -------------- */
                container.onclick = function () {
                    ctrlWin.forEach((element)=> {
                        element.hide();
                    })
                    ctrlWin[WinNo].unhide();

                    this.cmd[0] = cmd;
                    var command =JSON.stringify(this.cmd);
                    send(JSON.stringify(command));
                }

        }


        var elem = document.createElement("div");
        elem.style.backgroundColor = "transparent";
        elem.style.width = "20%";
        elem.style.height = "75%";
        elem.style.display = "flex";
        elem.style.alignItems = "center";
        elem.style.justifyContent = "center";
        container.append(elem);

        var elem1 = document.createElement("span");
        this.ID1 = elem1;
        elem1.className = symbol;
        elem1.style.fontSize = this.textgr;
        elem1.style.color = this.textfarbeAF;
        elem.append(elem1);

        var textContainer = document.createElement("div");
        textContainer.style.width = "70%";
        textContainer.style.height = "75%";
        textContainer.style.backgroundColor = "transparent";
        textContainer.style.display = "flex";
        textContainer.style.alignItems = "center";
        textContainer.style.justifyContent = "center";
        container.append(textContainer);

        var textelem = document.createElement("span");
        textelem.style.color = this.textfarbe;
        textelem.style.fontSize = this.textgr;
        textelem.innerHTML = text;
        textContainer.append(textelem);

        document.getElementById(ParentID).appendChild(container);
    }


    update(value) {
        if(typeof value == "object"){
            if(value['value'] == true){
                this.ID1.style.color = "lime";
            }
            else {
                this.ID1.style.color = "white";
            }
        }
        else{
            if (value == true){
                this.ID1.style.color = "lime";
            }
            else{
                this.ID1.style.color = "white";
            }
            
        }
    }

};


 /* -------------------------------------------------------------------------- */
 /*                             Class Heating Ctrl                             */
 /* -------------------------------------------------------------------------- */

class HeatCtrl {
    constructor() {
        this.ID = "";
        this.value1ID = "";
        this.value2ID = "";
        this.color = "";
        this.state0 = "+";
        this.state1 = "-";
        this.state2 = "set";
        this.unit = "°C";
        this.leftStat = "00";
        this.rightStat = "00";
        this.SollTempWert = "20.0";
        this.elemSollTemp = "";

        //optionale Parameter
        this.b = "210px";
        this.h = "220px";
        this.zeichengr = "15px";
        this.btnTextColor = "black";
        this.labelcolor = "lime";
        this.cmd = [];
    }
    create(ParentID, posTop, posLeft, color, label, cmd0, ...param) {
        this.color = color;
        this.cmd[0] = cmd0;
        if (param.length > 1) {
            this.b = param[0];
            this.h = param[1];
            this.zeichengr = param[2];
            this.btnTextColor = param[3];
            this.labelcolor = param[4];
        }
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        this.ID = container;
        container.style.flexDirection = "column";
        container.style.justifyContent = "center";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color + "Light";
        container.classList.add("boxShadow");
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;
        
        // Label 
        var elem1 = document.createElement("div");
        container.append(elem1)
        elem1.style.paddingTop = "5px";
        elem1.style.height = "30px";
        elem1.style.backgroundColor = "black";
        elem1.innerHTML = label;
        elem1.style.textAlign = "center";
        
        //ausstehender Soll - Einstell Wert - Soll WERT
        var elemTC = document.createElement("div");
        container.append(elemTC);
        elemTC.style.width = "100%";
        
        elemTC.style.height = "30%";
        elemTC.style.color = "black";
        elemTC.style.display = "flex";
        elemTC.style.alignItems = "flex-end";
        elemTC.style.flexDirection = "row";
        elemTC.style.justifyContent = "space-around";
        //elemTC.style.backgroundColor = "blue";
        
        //Anzeige ausstehende Soll Temperatur
        var elemTL = document.createElement("span");
        elemTC.style.textAlign = "center";
        elemTC.append(elemTL);
        this.value1ID = elemTL;
        elemTL.innerHTML = this.leftStat + this.unit;
        
        
        //Anzeige vorgewählter Sollwert
        var elemTM = document.createElement("span");
        elemTC.append(elemTM);
        this.elemSollTemp = elemTM;
        elemTM.style.paddingBottom = "10%";
        elemTM.innerHTML = this.SollTempWert + this.unit;
        elemTM.style.fontSize = "30px";
        
        
        //Anzeige Sollwert am Regler
        var elemTR = document.createElement("span");
        elemTC.append(elemTR);
        this.value2ID = elemTR;
        elemTR.innerHTML = this.rightStat + this.unit;
         
        
        // + / - buttons
        var elem1 = document.createElement("div");
        container.append(elem1);
        elem1.style.width = this.b;
        elem1.style.height = "20%";

        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.justifyContent = "space-around";
        elem1.style.position = "absolute";
        elem1.style.top = "50%";
        elem1.style.padding = "2px";
        elem1.style.fontsize = this.fs1;
        
        // Button Vorgabewert - Sollwert um 0,5 °C erhöhen
        var elem2 = document.createElement("div");
        elem1.append(elem2);
        elem2.style.width = "40%";
        elem2.style.marginLeft = "5px";
      
        elem2.style.color = this.btnTextColor;
        elem2.className = "ctrlbutton";
        elem2.classList.add(this.color);
        elem2.innerHTML = this.state0;
        //elem2.style.flexGrow = "1";
        elem2.onclick = function () {
            var solltemp = parseFloat(elemTM.innerHTML) + 0.5;
            elemTM.innerHTML = solltemp + "°C";
        }
        
        // Button Vorgabewert - Sollwert um 0,5 °C verringern
        var elem4 = document.createElement("div");
        elem1.append(elem4);
        elem4.style.marginRight = "5px";
        elem4.style.width = "40%";
        //elem4.style.flexGrow = "1";
        elem4.style.color = this.btnTextColor;
        elem4.className = "ctrlbutton";
        elem4.classList.add(this.color);
        elem4.innerHTML = this.state1;
        elem4.onclick = function () {
            var solltemp = parseFloat(elemTM.innerHTML) - 0.5;
            elemTM.innerHTML = solltemp + "°C";
        }
        
        // Set Button
        var elem5 = document.createElement("div");
        container.append(elem5);
        elem5.style.width = "90%";
        elem5.style.height = "20%";
         
        elem5.style.paddingTop = "2px";
 
        elem5.style.display = "block";
        elem5.style.marginLeft = "5%";
        elem5.style.marginRight = "5%";
       
         
 
        elem5.style.position = "absolute";
        elem5.style.top = "75%";
      
        // angewählten Sollwert an IPS senden
        var elem6 = document.createElement("div");
        elem5.append(elem6);
        elem6.style.flexGrow = "1";
        elem6.className = "ctrlbutton";
        elem6.classList.add(this.color);
        elem6.innerHTML = this.state2;
        elem6.style.color = this.btnTextColor;
        elem6.onclick = function () {
            var command = [];
            var solltemp = parseFloat(elemTM.innerHTML);
            command[0] = cmd0.replace(/xx.x/g, solltemp);
            var Befehl = JSON.stringify(command);
            send(Befehl);
        }  
    }

    update(value1, value2, change = false) {
        if(typeof value1 != "undefined"){
            this.value1ID.innerHTML = value1['value'] + this.unit;
        }else{
            this.value1ID.innerHTML = "????";
        }
        if(typeof value2 != "undefined"){
            this.value2ID.innerHTML = value2['value'] + this.unit;
        }else{
            
            this.value2ID.innerHTML = "????";
        }
        if(typeof change['value'] != "undefined"){
            if (change['value']) {
                this.elemSollTemp.innerHTML = value2['value'] + this.unit;
            }
        }

    }

}


/* -------------------------------------------------------------------------- */
/*                             Class TextScrollBox                            */
/* -------------------------------------------------------------------------- */
class TextScrollBox {
    constructor() {
        this.ID = "";
        this.inhalt = "";
        this.logOn = false;
        this.b = "450px";
        this.h = "450px";
    }

    create(ParentID, posTop, posLeft, b = "450px", h = "450px", fontSize = "12px", color = "white" ) {
        this.b = b;
        this.h = h;
        var elem = document.createElement("textarea");
        document.getElementById(ParentID).appendChild(elem);
        //elem.className = "AList";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.resize = "none";
        elem.style.width = b;
        elem.style.height = h;
        elem.style.fontSize = fontSize;
        elem.style.backgroundColor = color;
        this.ID = elem;
    }

    update(text) {
        try {
            if(typeof text != "undefined"){
                this.ID.value = text;
            } else {
                this.ID.value = text['value'];
            }
        } catch (error) {
            // alert("error");
        }

    }

    add(newtext) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        newtext = dateTime + ': ' + newtext + "\n";
        this.inhalt += newtext;
        
        this.ID.value = this.inhalt;
    }

    log(newLog){
        if(this.Logon == true){
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
    
            newtext = dateTime + ': ' + newLog + "\n";
            this.inhalt += newtext;
            
            this.ID.value = this.inhalt;  
        }

    }

    setLogOn(){
        this.Logon = true;
    }

    setLogOff(){
        this.Logon = false;
    }    

    minimize() {
        this.ID.style.height = "0px";
    }

    maximize() {
        this.ID.style.height = this.h;
    }
}


/* -------------------------------------------------------------------------- */
/*                            Class CheckBoxCtrlBtn                           */
/* -------------------------------------------------------------------------- */
class CheckBoxCtrlBtn {
    constructor() {
        this.ID = "";
        this.color = "";
        this.cmd = [];
        //optionale Parameter
        this.textColor1 = "black";
        this.textColor2 = "black";
    }

    create(ParentID, farbe, posTop, posLeft, breite, hoehe, fontSize, text, cmd0, cmd1,  ...param) {
        var c1 = this.textColor1;
        var c2 = this.textColor2;
        this.color = farbe;
         
        var container = document.createElement("label");
        document.getElementById(ParentID).appendChild(container);
        container.className = "CBcontainer";
        container.classList.add(farbe);
        container.innerHTML = text;
        container.style.top = posTop;
        container.style.left = posLeft;
         
        container.style.height = hoehe;
        container.style.color = c1;
         
        container.style.setProperty('width', 'calc(' + breite + '*0.8)');
        container.style.setProperty('padding-left', 'calc(' + breite + '*0.2)');

        $('.CBcontainer').css("font-size" ,  fontSize);
       

        var elem2 = document.createElement("input");
        container.append(elem2);
        elem2.setAttribute("type", "checkbox");
        this.ID = elem2;
        elem2.checked = false;
        

        var elem3 = document.createElement("span");
        elem3.className = "checkmark";
        container.append(elem3);

        elem2.addEventListener('change', function () {
            var befehl = [];
            
            if (this.checked) {
                // Checkbox is checked..
                elem1.style.color = c1;
                elem2.style.color = c1;
                befehl[0] = cmd1; 
                send(JSON.stringify(befehl));
            } else {
                // Checkbox is not checked..
                elem1.style.color = c2;
                befehl[0] = cmd0;                 
                send(JSON.stringify(befehl));
            }
        });
    }

    update(value) {
        if(typeof value != "undefined"){
            this.ID.checked = value['value'];
        }
    }
}



 
 /* -------------------------------------------------------------------------- */
 /*                              Class Rollo Ctrl                              */
 /* -------------------------------------------------------------------------- */
class RolloCtrl {
    constructor() {
        this.ID = "";
        this.cmdLeft = [];
        this.cmdRight = [];

        //optionale Parameter
        this.b = "202px";
        this.h = "130px";

        this.btnTextColor = "black";
        this.labelcolor = "white";

        this.AnzColor = "black";
        this.AnzSchriftgr = "30px"

        this.unit = "%";

    }
    create(ParentID, posTop, posLeft, breite, hoehe, color, title, cmdL1, cmdR1, ...param) {
        this.color = color;
        this.cmdLeft[0] = cmdL1;
        this.cmdRight[0] = cmdR1;

        if (param.length > 1) {
       

            this.btnTextColor = param[2];
            this.labelcolor = param[3];
            this.anzColor = param[4];
        }
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);

        container.style.flexDirection = "column";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color + "Light";
        container.style.width = breite;
        container.style.height = hoehe;
        container.style.color = this.labelcolor;

        // Label 
        var label = document.createElement("div");
        container.append(label);
        label.style.display = "flex";
        label.style.justifyContent = "center";
        label.style.setProperty('font-size', 'calc(' + hoehe + '*0.1)');
         
        label.style.alignItems = "center"; 
        label.style.height = "15%"
        //
        label.style.backgroundColor = "black";
        label.innerHTML = title;
        

        // Position Variable
        var anz = document.createElement("div");
        container.append(anz);
        this.ID = anz;
        anz.style.display = "flex";
        anz.style.alignItems = "center";
        anz.style.justifyContent = "center";
        anz.style.width = breite;
        anz.style.textAlign = "center"; 
        //anz.style.setProperty('height', 'calc(' + hoehe + '*0.35)');
        anz.style.height = "50%";
        anz.innerHTML = "XXX" + this.unit;
        anz.style.color = this.AnzColor;
        anz.style.fontSize = this.AnzSchriftgr;

        //Button Reihe
        var btnCont2 = document.createElement("div");
        container.append(btnCont2);
        btnCont2.style.width = breite;
        btnCont2.style.height = "35%";
        btnCont2.style.display = "flex";
        btnCont2.style.flexDirection = "row";
        btnCont2.style.justifyContent = "space-around";
        btnCont2.style.alignItems = "center";

        var btnLeft = document.createElement("div");
        btnCont2.append(btnLeft);
        btnLeft.style.width = "30%";
        btnLeft.className = "fontbutton";
        btnLeft.classList.add(color);
        btnLeft.style.display = "flex";
        btnLeft.style.alignItems = "center";
        btnLeft.style.justifyContent = "center";
        btnLeft.style.maxWidth = "50%";
        btnLeft.style.height = "40%";
        btnLeft.style.padding = "5%";

        var commandLeft =JSON.stringify(this.cmdLeft);
        btnLeft.setAttribute("onclick",  'send('+ JSON.stringify(commandLeft) + ')');
        var btn4Sign = document.createElement("span");
        btnLeft.append(btn4Sign);
        btn4Sign.className = "fa fa-plus";
        btn4Sign.style.fontSize = "30px";
        btn4Sign.style.padding = "5px";
        btn4Sign.style.color = this.btnTextColor;
        this.ID1 = btn4Sign;

        var btnRight = document.createElement("div");
        btnCont2.append(btnRight);
        btnRight.style.width = "30%";
        btnRight.className = "fontbutton";
        btnRight.classList.add(color);
        btnRight.style.display = "flex";
        btnRight.style.alignItems = "center";
        btnRight.style.justifyContent = "center";
        btnRight.style.maxWidth = "50%";
        btnRight.style.height = "40%";
        btnRight.style.padding = "5%";

        var commandRight =JSON.stringify(this.cmdRight);
        btnRight.setAttribute("onclick",  'send('+ JSON.stringify(commandRight) + ')');
        var btn5Sign = document.createElement("span");
        btnRight.append(btn5Sign);
        btn5Sign.className = "fa fa-minus";
        btn5Sign.style.fontSize = "30px";
        btn5Sign.style.padding = "5px";
        btn5Sign.style.color = this.btnTextColor;
        this.ID1 = btn5Sign;
    }

    update(value, n) {
        try {
            var wert = value['value'].toFixed(n);
            this.ID.innerHTML = (wert.toString() + this.unit);

        } catch (error) {
            wert = 99.9;
            this.ID.innerHTML = (wert.toString() + this.unit);
        }

    }

}



/* -------------------------------------------------------------------------- */
/*                               Class CtrlTile                               */
/* -------------------------------------------------------------------------- */
class CtrlTile {
    constructor() {
        this.ID = "";
        this.color = "cyan";
        this.tileColor = "transparent";
       
        this.icon = "";
        this.id1 = "";
        this.id2 = "";
        this.id3 = "";
        this.id4 = "";
        this.id5 = "";
        this.cmdLeft = [];
        this.cmdRight = [];
        // optionale Parameter
        this.state0 = "off";
        this.state1 = "on";
        this.leftStat = "links";
        this.rightStat = "rechts";
       
        this.btnTextColor0 = "white";
        this.btnTextColor1 = "lime";
    }

    create(ParentID, posTop, posLeft, breite, hoehe, label, color, tilecolor, BaseIcon, cmdL, cmdR, ...param) {
        this.cmdLeft[0] = cmdL;
        this.cmdRight[0] = cmdR;

        if (param.length > 0) {
            this.state0 = param[0];
            this.state1 = param[1];
            this.leftStat = param[2];
            this.rightStat = param[3];
          
            this.btnTextColor0 = param[4];
            this.btnTextColor1 = param[5];
        }
        this.color = color;
        this.tileColor = tilecolor;
        this.icon = BaseIcon;

        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        this.ID = container;
        //elem.className = "Tile";
        container.style.backgroundColor = this.tileColor;
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.width = breite;
        container.style.height = hoehe;
        container.style.border = "thin solid black";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        //container.style.justifyContent = "space-between";
         
        
        //Beschriftungsfeld
        var elemHead = document.createElement("div");
        container.append(elemHead);
        elemHead.style.display = "flex";
        elemHead.style.alignItems = "center";
        elemHead.style.justifyContent = "center";
        elemHead.style.textAlign = "center";
        elemHead.style.width = "100%";
        elemHead.style.height = "15%";
        elemHead.style.backgroundColor = "black";
        elemHead.style.color = "lime";
        elemHead.innerHTML = label;
        elemHead.style.setProperty('font-size', 'calc(' + hoehe + '*0.08)');
        
        var BildCont = document.createElement("div");
        container.append(BildCont);
         
        BildCont.style.height = "50%";
        BildCont.style.width = "100%";
        BildCont.style.position = "absolute";
        BildCont.style.top = "15%";
        BildCont.style.display = "flex";
        BildCont.style.alignItems = "center";
        BildCont.style.justifyContent = "center";

        var Bild = document.createElement("IMG");
        BildCont.append(Bild);
        Bild.src = "images/" + this.icon + "0" + ".png";
        Bild.style.setProperty('height', 'calc(' + hoehe + '*0.35)');
        Bild.style.setProperty('width', 'calc(' + hoehe + '*0.35)');
        this.id1 = Bild;
        
        /* --------------------- Zusatz Variablen rechts - links -------------------- */
        var elemTC = document.createElement("div");
        container.append(elemTC);
        elemTC.style.position = "absolute";
        elemTC.style.top = "57%";
        elemTC.style.width = "90%";
        elemTC.style.display = "flex";
        elemTC.style.flexDirection = "row";
        elemTC.style.justifyContent = "space-between";
        elemTC.style.alignContent = "center";

        var elemTL = document.createElement("span");
        elemTC.append(elemTL);
        elemTL.innerHTML = this.leftStat;
        this.id2 = elemTL;
        
        var elemTR = document.createElement("span");
        elemTC.append(elemTR);
        elemTR.innerHTML = this.rightStat;
        this.id3 = elemTR;
       

        /* ---------------------------- Button Container ---------------------------- */        
        var elem1 = document.createElement("div");
        container.append(elem1);
        elem1.style.width = "100%";
        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.justifyContent = "space-around";
        elem1.style.alignItems = "center";
        elem1.style.position = "absolute";
        elem1.style.top = "65%";
        elem1.style.height = "35%";
         
        /* ------------------------------ Button links ------------------------------ */
        var elem2 = document.createElement("div");
        elem1.append(elem2);
        elem2.className = "ctrlbutton";
        elem2.classList.add(this.color);
        elem2.style.width = "48%";
        elem2.style.height = "70%";
        elem2.style.fontSize = parseInt(breite)*0.1 + "px";
        elem2.innerHTML = this.state0;
        this.id4 = elem2;
        var commandLeft =JSON.stringify(this.cmdLeft);
        elem2.setAttribute("onclick",  'send('+ JSON.stringify(commandLeft) + ')');

        
        /* ------------------------------ Button rechts ------------------------------ */
        var elem4 = document.createElement("div");
        elem1.append(elem4);
        elem4.className = "ctrlbutton";
        elem4.classList.add(this.color);
        elem4.style.width = "48%";
        elem4.style.height = "70%";
        elem4.style.fontSize = parseInt(breite)*0.1 + "px";
        elem4.innerHTML = this.state1;
        this.id5 = elem4;

        var commandRight =JSON.stringify(this.cmdRight);
        elem4.setAttribute("onclick",  'send('+ JSON.stringify(commandRight) + ')');

        

        
    }

    update(value, valueLeft, valueRight) {
        var colorOff = this.btnTextColor0;
        var colorOn = this.btnTextColor1;
        if(typeof value != "undefined"){
            if (value['value'] === true) {
                this.id1.src = "images/" + this.icon + "1" + ".png";
                this.id4.style.color = colorOff;
                this.id5.style.color = colorOn;
            } else {
                this.id1.src = "images/" + this.icon + "0" + ".png";
                this.id4.style.color = colorOn;
                this.id5.style.color = colorOff;
            }
            if(typeof valueLeft.value != "undefined"){
                this.id2.innerHTML = valueLeft['value'];
            }else{
                this.id2.innerHTML = "";
            }
            if(typeof valueRight.value != "undefined"){
                this.id3.innerHTML = valueRight['value'];
            }else{
                this.id3.innerHTML = "";
            }
        }else{
            this.id1.src = "images/error.png";
        }


    }
}


/* -------------------------------------------------------------------------- */
/*                               Class HeadLine                               */
/* -------------------------------------------------------------------------- */
class HeadLine {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, bgcolor, headline) {
        var elem1 = document.createElement("header");
        document.getElementById(ParentID).appendChild(elem1);
        elem1.style.position = "relative";
        elem1.style.top = posTop;
        elem1.style.backgroundColor = bgcolor;
        var elem2 = document.createElement("h1");
        elem1.append(elem2);
        elem2.innerHTML = headline;
        elem2.style.fontSize = "18px";
        this.ID = elem2; 
    }

    update(headline) {
        if (typeof (headline) != 'undefined' && headline['value'] != null) {
            this.ID.innerHTML = headline['value'];
        } else {
            this.ID.innerHTML = "????";
        }

    }
}



/* -------------------------------------------------------------------------- */
/*                                 Class Chart                                */
/* -------------------------------------------------------------------------- */
class MyChart {
    constructor() {
        this.cmd = []; 
        this.C = "";
    }

    create(ParentID, top, left, breite, hoehe, scriptID, unit1, unit2 = '', ds0, ds1 = '', ds2 = '', ...param) {
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        container.style.width = breite;
        container.style.height = hoehe;
        container.style.position = "absolute";
        container.style.top = top;
        container.style.left = left;

        var elem1 = document.createElement("canvas");
        container.append(elem1);
        elem1.id = "line-chart";
        elem1.className = "s";
        elem1.style.backgroundColor = "black";
        this.cmd[0] = 'func(IPS_RunScript,'+scriptID+')';
        var command =JSON.stringify(this.cmd);
        elem1.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');

        var myChart = new Chart(elem1, {
            type: 'line',

            data: {
                datasets: [{
                        label: ds0['label'],
                        yAxisID: ds0['id'],
                        data: [],
                        borderColor: [
                            ds0['color'],
                        ],
                        fill: false,
                    },
                    {
                        label: ds1['label'],
                        yAxisID: ds1['id'],
                        data: [],
                        borderColor: [
                            ds1['color'],
                        ],
                        fill: false,
                    },
                    {
                        label: ds2['label'],
                        yAxisID: ds2['id'],
                        data: [],
                        borderColor: [
                            ds2['color'],
                        ],
                        fill: false,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                         fontColor: 'yellow'
                        }
                     },
                title: {
                     display: true,
                    fontColor: 'yellow',
                    text: 'Chart'
                },   
                layout: {
                    padding: {
                        left: 0,
                        right: 30,
                        top: 0,
                        bottom: 0
                    }

                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        distribution: 'linear'
                    }],
                    yAxes: [{
                            id: 'A',
                            display: 'auto',
                            type: 'linear',
                            position: 'right',
                            ticks: {
                                // Include a unit sign in the ticks
                                fontColor: 'yellow',
                                callback: function (value, index, values) {
                                    return value + unit1;
                                }
                            }

                        },
                        {
                            id: 'B',
                            display: 'auto',
                            type: 'linear',
                            position: 'left',
                            ticks: {
                                // Include a dollar sign in the ticks
                                fontColor: 'yellow',
                                callback: function (value, index, values) {
                                    return value + unit2;
                                }
                            }
                        }
                    ]
                }
            }
        });
        this.C = myChart;
        return myChart;
    }

    dataload(ds1, ds2, ds3, ds4) {
        if (ds1) {
            this.C.data.datasets[0].data = JSON.parse(ds1['value']);
        }
        if (ds2) {
            this.C.data.datasets[1].data = JSON.parse(ds2['value']);
        }
        if (ds3) {
            this.C.data.datasets[2].data = JSON.parse(ds3['value']);
        }
        if (ds4) {
            this.C.data.datasets[3].data = JSON.parse(ds4)['value'];
        }
        this.C.update();
    }
}

/* -------------------------------------------------------------------------- */
/*                             Class  LED Display                             */
/* -------------------------------------------------------------------------- */
class LEDBanner {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, hoehe, breite, fontSize) {
         
        var elem = document.createElement("div");
        document.getElementById(ParentID).appendChild(elem);
        elem.className = "LEDBanner";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.height = hoehe;
        elem.style.width = breite;
        elem.style.fontSize = fontSize;
         
        elem.style.setProperty('padding-top', 'calc(' + hoehe + '*0.5)');
        elem.style.textAlign = "center";
      
     

    
        elem.innerHTML = "TEST Sender hjfhsajf hj"
        this.ID = elem;
        
    }

    update(value) {

        this.ID.innerHTML = value['value'];


    }
}

/* -------------------------------------------------------------------------- */
/*                                Media Display                               */
/* -------------------------------------------------------------------------- */
class MediaDisplay {
    constructor() {
        this.ID = "";
        this.imgID = "";
        this.AlbumObj = "";
        this.ArtistObj = "";
        this.TtileObj = "";
        this.CreatorObj = "";
        this.b = "";
        this.h = "";
        this.sender = ""; 
        this.SenderObj = "";
        //optionale Parameter
    }


    create(ParentID, posTop, posLeft, b, h, farbe, Titel1="Album", Titel2="Artist", Titel3="Titel") {
        this.b = b;
        this.h = h;
        var elem = document.createElement("div");
         
        elem.classList.add(farbe);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.border = "7px  grey inset";
        elem.style.marginLeft = "5px";
        elem.style.marginRight = "5px";
        elem.style.height = this.h;
        elem.style.width = this.b;
        elem.style.display = "flex";
        elem.style.flexDirection =  "row";
        elem.style.flexWrap = "nowrap"; 
        elem.style.justifyContent = "space-around";

        this.ID = elem;

        var elemi = document.createElement("div");
        
        elemi.style.width = "40%";
        elemi.style.height = "95%";
        elemi.style.display = "flex";
        elemi.style.flexDirection = "column";
        elemi.style.justifyContent = "center";

        var elem1 = document.createElement("img");
        elem1.style.opacity = "1";
        elem1.style.height = "95%";
        elem1.style.width = "auto";
        elem1.src = "";
        this.imgID = elem1;

        elemi.append(elem1);
        elem.append(elemi);

        var elem2 = document.createElement("div");
        elem2.style.display = "flex"; 
        elem2.style.flexDirection = "column";
        elem2.style.justifyContent = "center";
        elem2.style.height = "95%";
        elem2.style.width = "50%";
        elem.append(elem2);

        var Sender = document.createElement("div");
        Sender.innerHTML = "- - -:";
        this.SenderObj = Sender;
        Sender.style.marginBottom = "15px";
        Sender.style.fontSize = "1.4rem";
        Sender.style.color = "lime";

        var Album = document.createElement("div");
        Album.innerHTML = Titel1;
        var AlbumA = document.createElement("div");
        this.AlbumObj = AlbumA;
        AlbumA.innerHTML = "- - -";
        AlbumA.style.marginBottom = "15px";
        AlbumA.style.color = "yellow";

        var Artist = document.createElement("div");
        Artist.innerHTML = Titel2;
        var ArtistA = document.createElement("div");
        this.ArtistObj = ArtistA;
        ArtistA.innerHTML = "- - -";
        ArtistA.style.color = "yellow";

        var Title = document.createElement("div");
        Title.innerHTML = Titel3;
        var TitleA = document.createElement("div");
        this.TitleObj = TitleA;
        TitleA.innerHTML = "- - -";
        TitleA.style.color = "yellow";


        elem2.append(Sender);
        elem2.append(Album);
        elem2.append(AlbumA);
        elem2.append(Artist);
        elem2.append(ArtistA);
        elem2.append(Title);
        elem2.append(TitleA);
        document.getElementById(ParentID).appendChild(elem);
    }

    update(sourceurl, Sender, Album, Artist, Title) {
        if(typeof sourceurl != "undefined"){
            this.imgID.src = sourceurl['value'];
        }else{
            this.imgID.src = "images/error.png";
        }
        if(typeof Sender != "undefined"){
            this.SenderObj.innerHTML = Sender['value'];
        }else{
            this.SenderObj.innerHTML = "";
        }
        if(typeof Album != "undefined"){
            this.AlbumObj.innerHTML = Album['value'];
        }else{
            this.AlbumObj.innerHTML = "";
        }
        if(typeof Artist != "undefined"){
            this.ArtistObj.innerHTML = Artist['value'];
        }else{
            this.ArtistObj.innerHTML = "";
        }
        if(typeof Title != "undefined"){
            this.TitleObj.innerHTML = Title['value'];
        }else{
            this.TitleObj.innerHTML = "";
        }
    }
}


/* -------------------------------------------------------------------------- */
/*                            Class Dynamic Rahmen                            */
/* -------------------------------------------------------------------------- */
class Rahmen {


    constructor() {
        this.idname = "";
        this.ID = "";
        this.h = "";
    }


    create(ParentID, posTop, posLeft, h, w, colorclass, ... param) {
        if (param.length > 0) {
            this.idname= param[0];
        }
        var elem = document.createElement("div");
        this.h = h;
        elem.id = this.idname;
        this.ID = elem;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.className = "rahmen";
        elem.classList.add(colorclass);
        elem.style.height = h;
        elem.style.width = w;
        elem.style.zIndex = "0";
        //elem.style.backgroundColor = color;

        document.getElementById(ParentID).appendChild(elem);
    }
    on() {
        this.ID.style.transition = "all 2s ease-in";
        this.ID.style.height = this.h;
    }
    off() {
        this.ID.style.transition = "all 2s ease-in";
        this.ID.style.height = "0px";
    }
    hide(){
        this.ID.style.visibility = "hidden";
    }
    unhide(){
        this.ID.style.visibility = "visible";
    }
}


/* -------------------------------------------------------------------------- */
/*                            Class TransVarDisplay                           */
/* -------------------------------------------------------------------------- */
class TransVarDisplay {
    constructor() {
        this.ID = "";

        this.textcolor = "white",
            this.textsize = "34px";
        this.unit = "°C",
            this.state = new Array();

    }


    create(ParentID, posTop, posLeft, textcolor, textsize, title, einheit) {
        this.textcolor = textcolor;
        this.textsize = textsize;
        this.unit = einheit;

        var elem = document.createElement("div");
        document.getElementById(ParentID).appendChild(elem);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.display = "flex";
        elem.style.flexDirection = "column";
        elem.style.justifyContent = "center";
        elem.style.alignItems = "center";
         

        var elem1 = document.createElement("div");
        elem.append(elem1);
        elem1.innerHTML = title;
        elem1.style.color = "white";
        elem1.style.fontSize = "18px";
        elem1.style.paddingBottom = "5px"
        
        var elem2 = document.createElement("div");
        elem.append(elem2);
        var elem4 = document.createElement("span");
        elem2.append(elem4);
         elem1.textAlign = "center";
        elem4.style.fontSize = this.textsize;
        elem4.style.color = this.textcolor;
        elem4.style.fontFamily = "dot matrix, arial";
        elem4.style.wordBreak = "break-all";
        elem4.innerHTML = "99" + this.unit;
        this.ID = elem4;   
    }

    update(value, n, ...restArgs) {
        try {
            if (n === "state") {


                this.ID.innerHTML = restArgs[value['value']];

            } else if (n === 0 || n > 0) {
                //var wert = Math.round(value).toFixed(n);
                var wert = value['value'].toFixed(n);
                this.ID.innerHTML = wert + this.unit;
            } else {
                this.ID.innerHTML = value['value'] + this.unit;
            }
        } catch (error) {
            // alert("error");
        }

    }
}

/* -------------------------------------------------------------------------- */
/*                              Class Fontbutton                              */
/* -------------------------------------------------------------------------- */
class FontButton {
    constructor() {
        this.ID = "";
        this.ID1 = "";
        this.b = "";
        this.h = "";
        this.cmd = [];

        // options
        this.textSize = "28px";
        this.textColor = "black";
        this.cmd2 = "";
        this.cmd3="";
         

    }
    create(ParentID, btnClass, color, posTop, posLeft, symbol, b, h, ts="28px", tc="black", cmd1, ...param) {
        this.h = h;
        this.b = b;
        this.textSize = ts;
        this.textColor = tc;
         
         
        this.cmd[0] = cmd1;
        if (param.length == 1) {
            this.cmd[1] = param[0]; 
        }
        if (param.length == 2) {
            this.cmd[1] = param[0];  
            this.cmd[2] = param[1];
        } 


        var elem = document.createElement("div");
        elem.className = btnClass;
        elem.classList.add(color);
        this.ID = elem;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = this.b;
        elem.style.height = this.h;
        elem.style.display = "flex";
        elem.style.alignItems = "center";
        elem.style.justifyContent = "center";

        var command =JSON.stringify(this.cmd);
        elem.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');

        var elem1 = document.createElement("span");
        elem1.className = symbol;
        elem1.style.fontSize = this.textSize;
        elem1.style.color = this.textColor;
        this.ID1 = elem1;

        elem.append(elem1);
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {
        if(typeof value == "object"){
            if(value['value'] == true){
                this.ID1.style.color = "lime";
            }
            else {
                this.ID1.style.color = "white";
            }
        }
        else{
            if (value == true){
                this.ID1.style.color = "lime";
            }
            else{
                this.ID1.style.color = "white";
            }
            
        }



   
    }

    off() {
        this.ID.style.transition = "all 2s ease-in";

        this.ID.style.opacity = "0";
        this.ID.style.visibility = "hidden";
    }
    on() {
        this.ID.style.transition = "all 2s ease-in";

        this.ID.style.opacity = "1";
        this.ID.style.visibility = "visible";
    }
}


/* -------------------------------------------------------------------------- */
/*                            Class IconSelectList                            */
/* -------------------------------------------------------------------------- */
class DynIconList {
    constructor() {
        this.room = "";
        this.container = "";
        this.Cheight = "";
        this.cmd = [];
        this.selItem = "";
    }

    create(ParentID, db, posTop, posLeft, contHeight="100%", contwidth="100%", ctIcon, bgC="transparent", cmd, ...param) {
        if (param[0]) {
            this.room = param[0];
        }
        this.Cheight = contHeight;
        var befehl = [];

        // Liste aus data.js einlesen
        var Liste = new data();

        var SourceListJson = eval("Liste." + db + "()");
        var SourceList = Array();
        var SourceList1 = JSON.parse(SourceListJson);
        SourceList = SourceList1['media'];

        var ScrollContainer = document.createElement("div");
        document.getElementById(ParentID).appendChild(ScrollContainer);
        this.container = ScrollContainer;
        ScrollContainer.className = "ScrollBox";
        ScrollContainer.style.position = "absolute";
        ScrollContainer.style.top = posTop;
        ScrollContainer.style.left = posLeft;
        ScrollContainer.style.backgroundColor = bgC;
        ScrollContainer.style.height = contHeight;
        ScrollContainer.style.width = contwidth;


        SourceList.forEach(function (item) {
            if(ctIcon == 1){
                titel = document.createElement("div");
                titel.style.position = "relative";
                titel.style.paddingLeft = "5px";
                titel.style.paddingRight = "10px";
                titel.style.wordBreak = "break-all";
                ScrollContainer.append(titel);
             
                titel.innerHTML = item["titel"];
                titel.style.color = "yellow";
                titel.style.fontSize = "18px";
                 
            }
            
            var elem = document.createElement("img");
            ScrollContainer.append(elem);
            var icon = item["icon"];
            elem.src = icon;
            elem.className = "SbItem";
            var iconsize = ((parseInt(contwidth)-(ctIcon*5))/ctIcon)+"%";
            elem.style.width = iconsize;
            elem.id = db + item["no"];
            elem.style.padding = "2px";
            elem.style.margin = "2px";
            


            elem.onclick = function () {
                var index = SourceList.findIndex((item) => item.selected === true);
                if (index !== -1) {
                    SourceList[index]['selected'] = false;
                    var ObjID = db + index;
                    var elem0 = document.getElementById(ObjID);
                    elem0.classList.toggle("SbItemToggle");
                }
                elem.classList.toggle("SbItemToggle");
                this.selItem = item; 
                item['selected'] = true;

                for (var i = 0; i < cmd.length; i++) {
                    //suche nach string zwischen 2 Brackets []
                    const matches = cmd[0].match(/(?<=\[).+?(?=\])/g);
                    //wenn nicht null
                    if(!!matches){
                        var ItemValue = item[matches[0]];
                        //ersetze cmd[0] durch richtigen Wert
                        befehl[i] = cmd[i].replace("item["+ matches + "]", ItemValue);
                    }
                    else{
                        befehl[i] = cmd[i];
                    }
                };
                /*
                if (db === "TV") {
                    cmd[0] = "func(STV_T_setChannelbyName, 44308," + item['sender'] + ")";
            
                } 
                else if (db === "CD") {
                    //var cmd1 = "command(upnp,loadCDPlaylist," + item['playlistname'] + ")";
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Musik)';
                    
                } else if (db === "Audio") {
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Audio)';
                } else if (db === "Video") {
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Video)';
                } else if (db === "Foto") {
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Foto)';
                }
                //send(cmd1);
                */

                var command =JSON.stringify(befehl);
                send(command);
            
            };

            
        });

    }

    hide() {
        this.container.style.height = "0px";
    }

    unhide() {
        this.container.style.height = this.Cheight;
    }
}



/* -------------------------------------------------------------------------- */
/*                             Class WeatherLabel                             */
/* -------------------------------------------------------------------------- */
class WeatherGraph {
    constructor() {
        this.headCell = new Array([]);
        this.TempCell = new Array([]);
        this.cel = new Array([]);
 
    }

    create(ParentID, top, left, framewidth, frameheight) {
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        container.style.position = "absolute";
        container.style.top = top;
        container.style.left = left;
        container.style.color = "white";
        container.style.width = framewidth;
        container.style.height = frameheight;
        
        container.className = "weathertablecell";
       

        var secA = document.createElement("section");
        secA.className = "weatherframe";
        secA.style.height = frameheight;
        container.append(secA);
        
         

        let tbl  = document.createElement('table');
        tbl.style.position = "absolute";
        tbl.style.margin = "10px";
        tbl.style.width  = "90%";
       
        let column0 = document.createElement('col');
        
        tbl.appendChild(column0);
        let column1 = document.createElement('col');
        tbl.appendChild(column1);
        let column2 = document.createElement('col');
        tbl.appendChild(column2);
        let column3 = document.createElement('col');
        tbl.appendChild(column3);
        let column4 = document.createElement('col');
        tbl.appendChild(column4);
        let column5 = document.createElement('col');
        tbl.appendChild(column5);
        
        let tr = tbl.insertRow();
         tr.style.height = "50px";
        
        for(let j = 0; j < 6; j++){
                let td = tr.insertCell();
                td.style.border = "1px solid black";
                td.style.textAlign = "center";
                td.style.writingMode = "vertical-rl";
                this.headCell[j] = td;
            }  

        let trT = tbl.insertRow();
        trT.style.height = "20px";  
        for(let j = 0; j < 6; j++){
            let tdT = trT.insertCell();
            tdT.style.textAlign = "center";
            tdT.style.border = "1px solid black";
            tdT.style.fontSize = "10px";
            this.TempCell[j] = tdT;
        }

        let col = 7;
        let row = 40;
        
        for(let i = 0; i < row; i++){
            let tr = tbl.insertRow();
            for(let j = 1; j < col; j++){
                    let td = tr.insertCell();
                    this.cel[j*100 + i]  = td;
                    td.style.border = '1px solid black';
                }     
        }
        secA.appendChild(tbl);
    }
    update(WeatherDayHObjectID){
        let w = JSON.parse(WeatherDayHObjectID.value);
        for(let i = 0; i < 6; i++){
            this.headCell[i].innerText = w[i]['time'];
        }
        let offset = 5; // für negative Temperaturen
        for(let n = 0; n < 6; n++){
            let tempDay = w[n]['temperature'].substr(0,2);
            this.TempCell[n].innerText = tempDay+"°C";
            for(let i = 39-offset; i > 39-offset-tempDay; i--){
                this.cel[(n+1)*100+i].style.backgroundColor = "yellow";
            }
            for(let i = tempDay; 0; i--){
                this.cel[(n+1)*100+i].style.backgroundColor = "black";
            }
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                             Class WeatherLabel                             */
/* -------------------------------------------------------------------------- */
class WeatherLabel {
    constructor() {

        this.source = "";
        this.day = "";
        this.tempMin_ID = "";
        this.tempMax_ID = "";

        this.windspeed_ID = "";
        this.windGust_ID = "";
        this.cloudCover_ID = "";
        this.humidity_ID = "";
        this.ozone_ID = "";
        this.uvIndex_ID = "";
        this.summary_ID = "";
    }

    create(ParentID, top, left, frameheight) {
        var container = document.createElement("div");
        container.style.position = "absolute";
        container.style.top = top;
        container.style.left = left;
        container.className = "weathertablecell";
        container.style.width = "170px";
        container.style.color = "white";

        var secA = document.createElement("section");
        secA.className = "weatherframe";
        secA.style.height = frameheight;
        container.append(secA);
        var titel = document.createElement("div");
        titel.innerHTML = this.day;
        titel.style.fontSize = "22px";
        titel.style.textAlign = "center";
        this.day = titel;
        secA.append(titel);
        var Fig = document.createElement("figure");
        Fig.style.position = "absolute";
        Fig.style.top = "10px";
        Fig.style.left = "-30px";
        secA.append(Fig);
        var img = document.createElement("img");
        img.style.width = "70px";
        img.style.height = "70px";

        var secB = document.createElement("section");
        secB.style.position = "absolute";
        secB.style.top = "90px";
        secB.style.left = "100px";
        secB.style.fontSize = "20px";
        container.append(secB);
        var tempMax = document.createElement("div");
        this.tempMax_ID = tempMax;
        secB.append(tempMax);
        var tempMin = document.createElement("div");
        secB.append(tempMin);
        this.tempMin_ID = tempMin;

        var secC = document.createElement("section");
        secC.style.position = "absolute";
        secC.style.top = "160px";
        secC.style.left = "10px";
        secC.style.fontSize = "12px";

        container.append(secC);
        var windspeed = document.createElement("div");
        this.windspeed_ID = windspeed;
        secC.append(windspeed);
        var windGust = document.createElement("div");
        this.windGust_ID = windGust;
        secC.append(windGust);
        var cloudCover = document.createElement("div");
        this.cloudCover_ID = cloudCover;
        secC.append(cloudCover);
        var humidity = document.createElement("div");
        this.humidity_ID = humidity;
        secC.append(humidity);
        var ozone = document.createElement("div");
        this.ozone_ID = ozone;
        secC.append(ozone);
        var uvIndex = document.createElement("div");
        this.uvIndex_ID = uvIndex;
        secC.append(uvIndex);
        var summary = document.createElement("div");
        this.summary_ID = summary;
        secC.append(summary);
        this.source = img;
        Fig.append(img);

        document.getElementById(ParentID).appendChild(container);
    }

    //update(iconurl, day, tempMax, tempMin, windspeed, windGust, cloudCover, humidity, ozone, uvIndex, summary) {
    update(WeatherObjectID,day){
        let w = JSON.parse(WeatherObjectID.value);
        if(day>=0){
            this.source.src = "icons/weatherIcons/" + w[day]['weatherCode'] + "0.png";
            this.day.innerHTML = w[day]['weekday'];
            this.tempMax_ID.innerHTML = w[day]['temperatureMin'];
            this.tempMin_ID.innerHTML = w[day]['temperatureMax'];
            this.windspeed_ID.innerHTML = w[day]['windSpeed'];
            this.windGust_ID.innerHTML = w[day]['rainIntensity'];
            this.cloudCover_ID.innerHTML = w[day]['cloudCover'];
            this.humidity_ID.innerHTML = w[day]['humidity'];
            this.summary_ID.style.color = "yellow";
            this.summary_ID.innerHTML = w[day]['weatherText'];
        }
        if(day == -1){
            this.source.src ="icons/weatherIcons/" + w[0]['weatherCode'] + "0.png";
            this.day.innerHTML = 'Aktuell';
            this.tempMax_ID.innerHTML = w[0]['temperatureMin'];
            this.tempMin_ID.innerHTML = w[0]['temperatureMax'];
            this.windspeed_ID.innerHTML = w[0]['windSpeed'];
            this.windGust_ID.innerHTML = w[0]['rainIntensity'];
            this.cloudCover_ID.innerHTML = w[0]['cloudCover'];
            this.humidity_ID.innerHTML = w[0]['humidity'];
            this.ozone_ID.innerHTML = w[0]['ozone'];
            this.uvIndex_ID.innerHTML = w[0]['uvIndex'];
            this.summary_ID.innerHTML = w[0]['summary'];
        }
        /*
        if (ozone['value']) {

        }
        */
    }


}

/* -------------------------------------------------------------------------- */
/*                               Class SetIframe                              */
/* -------------------------------------------------------------------------- */
class SetIframe {
    constructor() {
        this.ID = "";
        this.startDate = new Date();
        this.differenz = 0;
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, source) {
        //var source = "<p>Some new content inside the iframe!</p>";
        //var source = "<table width='auto'><tr><td width='auto'height='80px'><div><img src=https://a2.tvspielfilm.de/itv_sofa/2019-03-10/5c6affc281896536498e11b9_149.jpg alt='not Found'></div></td><td width='980px'><div style='text-align:left; margin-left:10px;'><b style=color:#C00000;>19:05 | RTL | Vermisst</b><br><small>Rund um den Globus sucht Sandra Eckardt nach verschollenen Personen. Nicht immer gibt’s ein Happy End.  Sechs neue Folgen, so. </small><br></div></td></tr></table>";
        //var ifrm = document.createElement("object");
        var ifrm = document.createElement("iframe");
        //ifrm.setAttribute("data", source);
        ifrm.setAttribute("src", source);
        ifrm.style.width = sizeW;
        ifrm.style.height = sizeH;
        ifrm.style.position = "absolute";
        ifrm.style.top = posTop;
        ifrm.style.left = posLeft;
        ifrm.style.backgroundColor = "lightgrey";
        //ifrm.srcdoc = source;
        this.ID = ifrm;

        document.getElementById(ParentID).appendChild(ifrm);
    }

    update(urlstring, interval) {

        var endDate = new Date();
        this.differenz = (endDate.getTime() - this.startDate.getTime());
        if (this.differenz > interval) {
            this.ID.src = urlstring;
            this.startDate = endDate;
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                              Class ProgressBar                             */
/* -------------------------------------------------------------------------- */
class ProgressBar {
    constructor() {
        this.bb = "1%";
        this.balken = "";
        //optionale Parameter

    }
    create(ParentID, posTop, posLeft, color, b, ...param) {
        if (param.length > 1) {

        }

        var container = document.createElement("div");
        container.style.width = b;
        container.style.height = "1px";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.backgroundColor = "black";

        var bar = document.createElement("div");
        this.balken = bar;
        bar.style.width = this.bb;
        bar.style.height = "6px";
        bar.style.position = "relative";
        bar.style.top = "-200%";
        bar.style.backgroundColor = color;
        container.append(bar);

        document.getElementById(ParentID).appendChild(container);
    }
    update(value) {
        this.bb = (value['value'] + "%");
        this.balken.style.width = this.bb;
    }

}



/* -------------------------------------------------------------------------- */
/*                                Class Clock -                               */
/* -------------------------------------------------------------------------- */
class EierUhr {
    constructor() {
        this.ID = "";
        this.klasse = "";
        this.wert = "";
    }

    create(ParentID, n) {
        var container = document.createElement("div");
        var elem = document.createElement("div");
        elem.className = "clock" + n;
        elem.style.margin = "2em";
        this.klasse = elem.className;
        container.append(elem);

        var contHMS = document.createElement("div");
        contHMS.style.marginLeft = "10px";
        contHMS.style.marginRight = "10px";
        contHMS.style.display = "flex";
        contHMS.style.flexDirection = "row";
        contHMS.style.justifyContent = "space-between";
        var contH = document.createElement("div");
        var elemIncH = document.createElement("button");
        elemIncH.className = "incH" + n;
        elemIncH.style.width = "50px";
        elemIncH.style.height = "50px";
        elemIncH.style.fontSize = "20px";
        elemIncH.style.marginRight = "5px";
        elemIncH.innerHTML = "+";
        contH.append(elemIncH);
        var elemDecH = document.createElement("button");
        elemDecH.className = "decH" + n;
        elemDecH.style.width = "50px";
        elemDecH.style.height = "50px";
        elemDecH.style.fontSize = "20px";
        elemDecH.style.marginLeft = "5px";
        elemDecH.innerHTML = "-";
        contH.append(elemDecH);

        contHMS.append(contH);

        var contM = document.createElement("div");
        var elemIncMin = document.createElement("button");
        elemIncMin.className = "incMin" + n;
        elemIncMin.style.width = "50px";
        elemIncMin.style.height = "50px";
        elemIncMin.style.fontSize = "20px";
        elemIncMin.style.marginRight = "5px";
        elemIncMin.innerHTML = "+";
        contM.append(elemIncMin);
        var elemDecMin = document.createElement("button");
        elemDecMin.className = "decMin" + n;
        elemDecMin.style.width = "50px";
        elemDecMin.style.height = "50px";
        elemDecMin.style.fontSize = "20px";
        elemDecMin.style.marginLeft = "5px";
        elemDecMin.innerHTML = "-";
        contM.append(elemDecMin);

        contHMS.append(contM);


        var contS = document.createElement("div");
        var elemIncSec = document.createElement("button");
        elemIncSec.className = "incSec" + n;
        elemIncSec.style.width = "50px";
        elemIncSec.style.height = "50px";
        elemIncSec.style.fontSize = "20px";
        elemIncSec.style.marginRight = "5px";
        elemIncSec.innerHTML = "+";
        contS.append(elemIncSec);
        var elemDecSec = document.createElement("button");
        elemDecSec.className = "decSec" + n;
        elemDecSec.style.width = "50px";
        elemDecSec.style.height = "50px";
        elemDecSec.style.fontSize = "20px";
        elemDecSec.style.marginLeft = "5px";
        elemDecSec.innerHTML = "-";
        contS.append(elemDecSec);
        contHMS.append(contS);
        container.append(contHMS);

        var contSS = document.createElement("div");
        contSS.style.marginLeft = "10px";
        contSS.style.marginRight = "10px";
        contSS.style.display = "flex";
        contSS.style.flexDirection = "row";
        contSS.style.justifyContent = "center";
        var elemStart = document.createElement("button");
        elemStart.className = "start" + n;
        elemStart.style.width = "70px";
        elemStart.style.height = "50px";
        elemStart.style.marginRight = "2px";
        elemStart.innerHTML = "Start";
        this.wert = elemStart;
        contSS.append(elemStart);

        var elemStop = document.createElement("button");
        elemStop.className = "stop" + n;
        elemStop.style.width = "70px";
        elemStop.style.height = "50px";
        elemStop.style.marginLeft = "2px";
        elemStop.innerHTML = "Stop";
        contSS.append(elemStop);
        contHMS.append(contSS);

        document.getElementById(ParentID).appendChild(container);
    }

    update() {


    }

    countdown1() {
        var clock1 = jQuery('.clock1').FlipClock(10, {
            clockFace: 'HourlyCounter',
            countdown: true,
            autoStart: false,
            callbacks: {
                start: function () {

                }
            }
        });

        jQuery('.start1').click(function (e) {

            clock1.start();
        });

        jQuery('.stop1').click(function (e) {

            clock1.stop();
        });

        jQuery('.incSec1').click(function (e) {
            var time = clock1.getTime().time;
            if (time > 57) {
                time = -2
            };
            clock1.stop();
            clock1.setTime(time + 2);
        });
        jQuery('.decSec1').click(function (e) {
            var time = clock1.getTime().time;
            if (time < 1) {
                time = 0
            };
            clock1.stop();
            clock1.setTime(time - 0);
        });

        jQuery('.incMin1').click(function (e) {
            var time = clock1.getTime().time;
            if (time > 3538) {
                time = 3539
            };
            clock1.stop();
            clock1.setTime(time + 61);
        });
        jQuery('.decMin1').click(function (e) {
            var time = clock1.getTime().time;
            if (time < 61) {
                time = 60
            };
            clock1.stop();
            clock1.setTime(time - 59);
        });

        jQuery('.incH1').click(function (e) {
            var time = clock1.getTime().time;
            if (time > 82798) {
                time = 82799
            };
            clock1.stop();
            clock1.setTime(time + 3601);
        });
        jQuery('.decH1').click(function (e) {
            var time = clock1.getTime().time;
            if (time < 3588) {
                time = 3599
            };
            clock1.stop();
            clock1.setTime(time - 3599);
        });
    }

    countdown2() {
        var clock2 = jQuery('.clock2').FlipClock(10, {
            clockFace: 'HourlyCounter',
            countdown: true,
            autoStart: false,
            callbacks: {
                start: function () {

                }
            }
        });

        jQuery('.start2').click(function (e) {

            clock2.start();
        });

        jQuery('.stop2').click(function (e) {

            clock2.stop();
        });

        jQuery('.incSec2').click(function (e) {
            var time = clock2.getTime().time;
            if (time > 57) {
                time = -2
            };
            clock2.stop();
            clock2.setTime(time + 2);
        });
        jQuery('.decSec2').click(function (e) {
            var time = clock2.getTime().time;
            if (time < 1) {
                time = 0
            };
            clock2.stop();
            clock2.setTime(time - 0);
        });

        jQuery('.incMin2').click(function (e) {
            var time = clock2.getTime().time;
            if (time > 3538) {
                time = 3539
            };
            clock2.stop();
            clock2.setTime(time + 61);
        });
        jQuery('.decMin2').click(function (e) {
            var time = clock2.getTime().time;
            if (time < 61) {
                time = 60
            };
            clock2.stop();
            clock2.setTime(time - 59);
        });

        jQuery('.incH2').click(function (e) {
            var time = clock2.getTime().time;
            if (time > 82798) {
                time = 82799
            };
            clock2.stop();
            clock2.setTime(time + 3601);
        });
        jQuery('.decH2').click(function (e) {
            var time = clock2.getTime().time;
            if (time < 3588) {
                time = 3599
            };
            clock2.stop();
            clock2.setTime(time - 3599);
        });
    }

    countdown3() {
        var clock3 = jQuery('.clock3').FlipClock(10, {
            clockFace: 'HourlyCounter',
            countdown: true,
            autoStart: false,
            callbacks: {
                start: function () {

                }
            }
        });

        jQuery('.start3').click(function (e) {

            clock3.start();
        });

        jQuery('.stop3').click(function (e) {

            clock3.stop();
        });

        jQuery('.incSec3').click(function (e) {
            var time = clock3.getTime().time;
            if (time > 57) {
                time = -2
            };
            clock3.stop();
            clock3.setTime(time + 2);
        });
        jQuery('.decSec3').click(function (e) {
            var time = clock3.getTime().time;
            if (time < 1) {
                time = 0
            };
            clock3.stop();
            clock3.setTime(time - 0);
        });

        jQuery('.incMin3').click(function (e) {
            var time = clock3.getTime().time;
            if (time > 3538) {
                time = 3539
            };
            clock3.stop();
            clock3.setTime(time + 61);
        });
        jQuery('.decMin3').click(function (e) {
            var time = clock3.getTime().time;
            if (time < 61) {
                time = 60
            };
            clock3.stop();
            clock3.setTime(time - 59);
        });

        jQuery('.incH3').click(function (e) {
            var time = clock3.getTime().time;
            if (time > 82798) {
                time = 82799
            };
            clock3.stop();
            clock3.setTime(time + 3601);
        });
        jQuery('.decH3').click(function (e) {
            var time = clock3.getTime().time;
            if (time < 3588) {
                time = 3599
            };
            clock3.stop();
            clock3.setTime(time - 3599);
        });
    }
}

/* -------------------------------------------------------------------------- */
/*                               Class ProgressCircleBar                              */
/* -------------------------------------------------------------------------- */
class ProgressCircleBar {
    constructor() {
       this.value = 45;  
       this.zahl ="";
       this.betrag ="";

    }
    create(ParentID, posTop, posLeft, breite, hoehe, bcolor, text) {
        var ProgContainer = document.createElement("div");
        document.getElementById(ParentID).appendChild(ProgContainer);
        ProgContainer.className = "ProgContainer";
        ProgContainer.style.position = "absolute";
        ProgContainer.style.left = posLeft;
        ProgContainer.style.top = posTop;
        ProgContainer.style.width = breite;
        ProgContainer.style.height = hoehe; 
        ProgContainer.className =   bcolor + "Light";
        ProgContainer.classList.add("ProgContainer");

        var kiste = document.createElement("div");
        ProgContainer.append(kiste);
        
        var progress = document.createElement("div");
        kiste.append(progress);
         
        //kiste.style.position = "absolute";
        //kiste.style.top = parseInt(hoehe)*0.05 + "px";
        kiste.style.width = parseInt(breite)*0.8 + "px";
        kiste.style.height = parseInt(breite)*0.8 + "px";
        kiste.style.display = "flex";
        kiste.style.justifyContent = "center";
        kiste.style.alignItems = "center";
        kiste.style.fontSize = parseInt(breite)*0.15 + "px";
   
        if(this.value >180){
            progress.className = "progress-circle over50 p";
        }
        else{
            progress.className = "progress-circle p";
        }

        var wert = document.createElement("span");
        progress.append(wert);
        this.zahl = wert;
        wert.innerHTML = this.value;
 
        var lefthalfclipper = document.createElement("div");
        progress.append(lefthalfclipper);
        lefthalfclipper.className = "left-half-clipper";

            var firsthalfbar = document.createElement("div");
            lefthalfclipper.append(firsthalfbar);
            firsthalfbar.className = "first50-bar";
        
            var valuebar = document.createElement("div");
            lefthalfclipper.append(valuebar);
            this.betrag = valuebar;
            valuebar.className = "value-bar";
            valuebar.style.transform = 'rotate('+this.value+'deg)';

            var titel = document.createElement("div");
            ProgContainer.append(titel); 
            titel.style.paddingBottom = "10%";
            titel.innerHTML = text;   
    }

    update(value, unit){
        if(typeof value != "undefined"){
            if (value['value']) {
                this.value = value['value'];
            }
            else{
                this.value = value;
            }
            this.zahl.innerHTML = this.value + unit;
            if(unit == "%"){
                this.value = this.value * 360 / 100;
            }
            this.betrag.style.transform = 'rotate('+this.value+'deg)'; 
        } 
    }
}

/* -------------------------------------------------------------------------- */
/*                               Class analogBar                              */
/* -------------------------------------------------------------------------- */
class analogBar {
    constructor() {
        this.bb = "1%";
        this.balken = "";
        //optionale Parameter

    }
    create(ParentID, posTop, posLeft, color, b, ...param) {
        if (param.length > 1) {

        }

        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        container.style.width = b;
        container.style.height = "1px";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.backgroundColor = "black";

        var bar = document.createElement("div");
        this.balken = bar;
        bar.style.width = this.bb;
        bar.style.height = "6px";
        bar.style.position = "relative";
        bar.style.top = "-200%";
        bar.style.backgroundColor = color;
        container.append(bar);
    }
    
    update(value) {
        this.bb = (value['value'] + "%");
        this.balken.style.width = this.bb;
    }

}

/* -------------------------------------------------------------------------- */
/*                             Class ButtonSlider                             */
/* -------------------------------------------------------------------------- */
class ButtonSlider {
    constructor() {
        this.TagArray = [];
        this.BtnID = "";
        this.containerID = "";
        this.cont = "";
        this.noArray = 0;
        this.cmdL = [];
        this.cmdR = [];
    }

    create(ParentID, posTop, posLeft, breite, hoehe, farbe, cmd1, cmd2) {
        this.cmdL[0] = cmd1;
        this.cmdR[0] = cmd2;
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.width = breite;
        container.style.height = hoehe;
        container.style.borderRadius = "5px";
        container.style.display = "flex";
        container.style.flexDirection = "row";

        var elemLeft = document.createElement("div");
        container.appendChild(elemLeft);
        elemLeft.className = "fontbutton";
        elemLeft.classList.add(farbe);
        elemLeft.style.width = "20%";
        elemLeft.style.height = hoehe;
        elemLeft.style.display = "flex";
        elemLeft.style.alignItems = "center";
        elemLeft.style.justifyContent = "center";
        //'func(UPNP_setClient,19824,0,"dec")'
        var command =JSON.stringify(this.cmdL);
        elemLeft.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');

        var elemLeft1 = document.createElement("span");
        elemLeft1.className = "fa fa-chevron-left";
        elemLeft1.style.fontSize = "20px";
        elemLeft1.style.color = "black";
        elemLeft.append(elemLeft1);
        

        var elem1 = document.createElement("div");
        container.appendChild(elem1);
        elem1.style.width = "60%";
        elem1.style.height = parseInt(hoehe, 10) - parseInt("9px", 10) + "px";
        elem1.style.marginTop = "0px";
        elem1.style.marginLeft = "2px";
        elem1.style.marginRight = "2px";
        elem1.style.display = "flex";
        elem1.style.alignItems = "center";
        elem1.style.justifyContent = "center";
        elem1.style.border = "5px  grey inset";
        elem1.className = "";
        elem1.classList.add(farbe + 'Light');
        this.containerID = elem1;
        

        var elemRight = document.createElement("div");
        elemRight.className = "fontbutton";
        elemRight.classList.add(farbe);
        elemRight.style.width = "20%";
        elemRight.style.height = hoehe;
        elemRight.style.display = "flex";
        elemRight.style.alignItems = "center";
        elemRight.style.justifyContent = "center";
        //'func(UPNP_setClient,19824,0,"inc")'
        var command =JSON.stringify(this.cmdR);
        elemRight.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');
        var elemRight1 = document.createElement("span");
        elemRight1.className = "fa fa-chevron-right";
        elemRight1.style.fontSize = "20px";
        elemRight1.style.color = "black";
        elemRight.append(elemRight1);
        container.appendChild(elemRight);

        
    }

    update(name) {
        this.containerID.innerHTML = name['value'];
    }
}

/* -------------------------------------------------------------------------- */
/*                              Class Icon Button                             */
/* -------------------------------------------------------------------------- */
class BtnIcon {
    constructor() {
        this.ID = "";
        this.labelcolor = "lime";
        //optionale Parameter
        this.b = "200px";
        this.h = "100px";
        this.zeichengr = "24px";
    }

    create(ParentID, posTop, posLeft, color, IName, label, ctrltype, cmd_Win, WinNo, ...param) {

        this.b = param[0];
        this.h = param[1];
        this.zeichengr = param[2];

        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        this.ID = container;
       
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color;
        container.style.fontSize = this.zeichengr;
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;
        container.style.display = "flex";
        container.style.flexDirection = "column";
         
 

        switch (ctrltype) {
            case "func":
                /* -------------------- sendet bei click einen Befehl ------------------- */
                this.cmd[0] = cmd_Win;
                var command =JSON.stringify(this.cmd);
                container.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');
                break;
            case "ctrlWindow":
                /* ------------------------- Fenster Inhalt umschalten ------------------------- */
                container.onclick = function () {
                    cmd_Win.forEach((element)=> {
                        element.hide();
                    })
                    cmd_Win[WinNo].unhide();
                }
                break;
            case "CtrlFunc":
                /* --------------- Fenster Inhalt umschalten und Befehl senden -------------- */
                container.onclick = function () {
                    cmd_Win.forEach((element)=> {
                        element.hide();
                    })
                    cmd_Win[WinNo].unhide();

                    this.cmd[0] = cmd_Win;
                    var command =JSON.stringify(this.cmd);
                    send(JSON.stringify(command));
                }

        }
 

        var elem1 = document.createElement("div");
        container.append(elem1);
        elem1.style.fontSize = "1rem"
        elem1.style.height = "25%";
        elem1.style.width = "100%";
        elem1.style.backgroundColor = "black";
        elem1.innerHTML = label;
        elem1.style.paddingTop = "2%";
        elem1.style.textAlign = "center";
       

        var elem2 = document.createElement("div");
        container.append(elem2);
       elem2.style.display = "flex";
      
        elem2.style.height = "75%";
        elem2.style.justifyContent = "center";
        elem2.style.alignItems = "center";

        var elem3 = document.createElement("img");
        elem2.append(elem3)
        elem3.style.width = "75%";
        elem3.style.height = "75%";

        var itype = IName.match(/\.png\b|\.jpg\b/g);
        if (itype) {
            elem3.src = "images/" + IName;
        } else {
            elem3.src = IName;
        }

        

        
    }

    update(value) {
        if(typeof value != "undefined"){
            if (value['value']) {
                this.labelcolor = "red";
                this.ID.style.color = this.labelcolor;
            } else {
                this.labelcolor = "lime";
                this.ID.style.color = this.labelcolor;
            }
        }

    }
}


/* -------------------------------------------------------------------------- */
/*                          Class AwesomeFont Symbol                         */
/* -------------------------------------------------------------------------- */
class FontSymb {
    constructor() {
        this.symsize = "28px";
        this.symcolor = "white";
        this.ID = "";
    }
    create(ParentID, posTop, posLeft, rotdeg, symbol, scolor, ssize) {
        this.symsize = ssize;
        this.symcolor = scolor;
        var elem = document.createElement("div");
        document.getElementById(ParentID).appendChild(elem);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.backgroundColor = "transparent";
        elem.style.display = "flex";
        elem.style.alignItems = "center";
        elem.style.justifyContent = "center";
        elem.style.transform = "rotate(" + rotdeg + ")";
        var elem1 = document.createElement("span");
        elem1.className = symbol;
        elem1.style.fontSize = this.symsize;
        elem1.style.color = this.symcolor;
        this.ID = elem1;
        elem.append(elem1);
    }
    
    update(value, blink, sfarbeOn, sfarbeOff) {
        if(typeof value != "undefined"){
            if (value['value']) {
                if (blink) {
                    this.ID.id = "blinkOn";
                    this.ID.style.color = sfarbeOn;
    
                } else {
    
                }
    
            } else {
                this.ID.id = "blinkOff";
                this.ID.style.color = sfarbeOff;
            }
        }else{

        }
    }
}



/* -------------------------------------------------------------------------- */
/*                          Class LEDl                                        */
/* -------------------------------------------------------------------------- */
class Led {
    constructor() {
        this.ParID = "";
        this.IDCont = "";
        this.ID = "";
        this.color = "#ABFF00"
    }

    create(ParentID, posTop, posLeft, ObjektFarbe) {
        this.color = ObjektFarbe;
        var container = document.createElement("div");
        document.getElementById(ParentID).appendChild(container);
        this.IDCont = container;
        container.className = "led-box";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;

        var elem1 = document.createElement("div");
        this.ID = elem1;
        elem1.className = "led";
        elem1.style.margin = "0 auto";
        elem1.style.backgroundColor = this.color;
        container.append(elem1);
        this.ID = elem1;
       
    }

    update(state) {
        if(typeof state['value'] != "undefined"){
            if (state['value'] == true) {
                this.ID.style.backgroundColor = this.color;
            } else {
                this.ID.style.backgroundColor = "grey";
            }
        }
        else{
            if (state == true) {
                this.ID.style.backgroundColor = this.color;
            } else {
                this.ID.style.backgroundColor = "grey";
            }   
        }
    }

    delete() {
        var parent = document.getElementById('MainNWCtrl');
        var childs = parent.childNodes;

        this.IDCont.remove();

    }
}


/* -------------------------------------------------------------------------- */
/*                            Class Scrollbox                                 */
/* -------------------------------------------------------------------------- */
class ScrollBox {
    constructor() {
  
    }

    create(ParentID, id, posTop, posLeft, contHeight="100%", contwidth="100%", bgC="transparent") {
        
        var ScrollContainer = document.createElement("div");
        document.getElementById(ParentID).appendChild(ScrollContainer);
        this.container = ScrollContainer;
        ScrollContainer.className = "ScrollArea";
        ScrollContainer.style.position = "absolute";
        ScrollContainer.style.top = posTop;
        ScrollContainer.style.left = posLeft;
        ScrollContainer.style.backgroundColor = bgC;
        ScrollContainer.style.height = contHeight;
        ScrollContainer.style.width = contwidth;
        ScrollContainer.id = id;
    }
}


 /* -------------------------------------------------------------------------- */
 /*                               Class Draw Line                              */
 /* -------------------------------------------------------------------------- */
 
class drawLine {
    constructor() {

    }

    draw(ParentID, startX, startY, endX, endY, color, width) {
        var elem = document.createElement("canvas");
        document.getElementById(ParentID).appendChild(elem);
        if (elem.getContext) {
            var ctx = elem.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = width;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

}

 /* -------------------------------------------------------------------------- */
 /*                               Class Vorhang Intro                          */
 /* -------------------------------------------------------------------------- */
 
 class Intro {
    constructor() {
    

        this.elemL = "";
        this.elemR = "";
    }

    create(ParentID) {
        var intro = document.createElement("div");
       

        var vorhangLeft = document.createElement("div");
        document.getElementById(ParentID).appendChild(vorhangLeft);
        vorhangLeft.style.position = "absolute";
        vorhangLeft.style.left = "0px";
        vorhangLeft.style.top = "0px";
        vorhangLeft.style.height = parseInt(window.innerHeight) + "px";
        vorhangLeft.style.width = parseInt(window.innerWidth)/2 + "px";
        vorhangLeft.style.backgroundColor = "blue";
        vorhangLeft.style.zIndex = "10";
        //vorhangLeft.className = "vorhang";
        this.elemL = vorhangLeft;

        var vorhangRight = document.createElement("div");
        document.getElementById(ParentID).appendChild(vorhangRight);
        vorhangRight.style.position = "absolute";
        vorhangRight.style.left = (parseInt(window.innerWidth)/2) + "px";
        vorhangRight.style.top = "0px";
        vorhangRight.style.height = parseInt(window.innerHeight) + "px";
        vorhangRight.style.width = (parseInt(window.innerWidth)/2) + "px";
        vorhangRight.style.backgroundColor = "red";
        vorhangRight.style.zIndex = "1000000000";
        //vorhangRight.className = "vorhang";
        this.elemR = vorhangRight;
    }

    open(breite, delay){
        
        
        this.elemL.style.transition = delay;
        this.elemR.style.transition = delay;
        this.elemL.style.width = breite;
        this.elemR.style.width = breite;
        this.elemR.style.left = parseInt(window.innerWidth) + "px";
        
    }
}