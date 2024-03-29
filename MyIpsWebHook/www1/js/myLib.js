
class TimePicker {
    constructor(room, group, direction) {
        this.room = room;
        this.group = group;
        this.direction = direction;
    }
    get room() {
        return this._room;
    }
    set room(room) {
        this._room = room;
    }

    get group() {
        return this._group;
    }
    set group(group) {
        this._group = group;
    }

    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
    }

    create(ParentID, ObId, posTop, posLeft, titel) {
        var box = document.createElement("div");
        box.id = "TimePicker" + ObId;
        box.style.position = "absolute";
        box.style.left = posLeft;
        box.style.top = posTop;

        var h = 0;
        var m = 0;
        document.getElementById(ParentID).appendChild(box);

        var elem1 = document.createElement("div");
        elem1.className = "timeContainer";
        //elem1.id = ObId; 

        var elem2 = document.createElement("div");
        elem2.className = "timeLeft";
        elem2.id = ObId + "left";
        elem2.onscroll = function () {
            var elmnt = document.getElementById(elem2.id);
            var y = elmnt.scrollTop;
            h = Math.floor((y + 10) / 37.9);
            document.getElementById(ObId + "hour").innerHTML = h;
        };
        elem1.append(elem2);
        var a = 0;
        for (var i = 0; i < 29; i++) {
            var elem = document.createElement("div");
            if (i === 0) {
                a = 22;
            } else if (i === 1) {
                a = 23;
            } else if (i === 26) {
                a = 0;
            } else if (i === 27) {
                a = 1;
            } else if (i === 28) {
                a = 2;
            } else {
                a = i - 2;
            };
            if (a < 10) {
                var zahl = "0" + a;
            } else {
                zahl = a;
            }
            elem.innerHTML = zahl;
            elem2.append(elem);
        }
        var elem3 = document.createElement("div");
        elem3.style.width = "40px";
        elem3.style.fontSize = "44px";
        elem3.style.paddingTop = "50px";
        elem3.innerHTML = ":";
        elem1.append(elem3);

        var elem4 = document.createElement("div");
        elem4.className = "timeRight";
        elem4.id = ObId + "right";
        elem4.onscroll = function () {
            var elmnt = document.getElementById(elem4.id);
            var x = elmnt.scrollTop;
            m = (Math.floor((x + 10) / 37.8)) * 5;
            document.getElementById(ObId + "minute").innerHTML = m;
            $('Variable_1').innerHTML = h + ':' + m;
        };
        elem1.append(elem4);
        for (var i = 0; i < 17; i++) {
            var elem5 = document.createElement("div");

            if (i === 0) {
                a = 50;
            } else if (i === 1) {
                a = 55;
            } else if (i === 14) {
                a = 0;
            } else if (i === 15) {
                a = 5;
            } else if (i === 16) {
                a = 0;
            } else {
                a = (i - 2) * 5;
            };
            if (a < 10) {
                zahl = "0" + a;
            } else {
                zahl = a;
            }
            elem5.innerHTML = zahl;
            elem4.append(elem5);
        }
        var elem6 = document.createElement("div");
        elem6.id = "Timer1";
        elem6.innerHTML = titel;

        document.getElementById("TimePicker" + ObId).appendChild(elem6);

        document.getElementById("TimePicker" + ObId).appendChild(elem1);

        var Aelem = document.createElement("div");
        Aelem.className = "ctrlbutton";
        Aelem.style.color = "black";
        Aelem.style.position = "relative";
        Aelem.style.left = "20px";
        Aelem.id = "btn" + ObId;
        Aelem.classList.add("smallwide", "grey");
        Aelem.addEventListener("click", function () {
            setScrollTime();
        });

        var Aelem1 = document.createElement("span");
        Aelem1.id = ObId + "hour";
        var text1 = "00";
        Aelem1.append(text1);
        var Aelem2 = document.createElement("span");
        Aelem2.id = ObId + "minute";
        var text2 = "00";
        Aelem2.append(text2);

        var text3 = "Set Down at ";
        var text4 = " : ";
        Aelem.append(text3);
        Aelem.append(Aelem1);
        Aelem.append(text4);
        Aelem.append(Aelem2);

        document.getElementById("TimePicker" + ObId).appendChild(Aelem);

        function setScrollTime() {

            var cmdTimer = 'command(Rollo,' + eval(ObId).room + ',setTime-' + eval(ObId).direction + ':' + ':' + eval(ObId).group + h + ":" + m + ')';
            send(cmdTimer);
        };
    }



}


/* --------------------- Klasse Ctrl Button ---------------------------------------- */
//TODO: überabeiten siehe Mob
class CtrlButton {
    constructor() {
        this.ID = "";

        //optionale Parameter
        this.FontFarbe = "black";
   
        this.cmd = [];
    }

    create(ParentID, posTop, posLeft, btnClass, size, color, text, textColor="black", ctrltype, ctrlWin, cmd1, ...param) {
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
        elem.classList.add(size, color);
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
        } else if (ctrltype === "command") {
            elem.setAttribute("onclick", cmd1);
        } else if (ctrltype === "func") {
            var command =JSON.stringify(this.cmd);
            elem.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');
        } else if (ctrltype === "CtrlCmd") {
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

                send(cmd1);
            }
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
        } else if (ctrltype === "SM") {
            elem.onclick = function () {

                // alle Main auf 0px verkleinern 
                var Main = document.getElementsByTagName("Main");
                var MainWindow = Array.from(Main);
                MainWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                //Haupt Fenster einblenden
                document.getElementById(ctrlWin).style.width = "58vw";
                //Control Fenster einblenden
                document.getElementById(ctrlWin + "Ctrl").style.width = "26vw";
            }

        } else if (ctrltype === "SMload") {
            elem.onclick = function () {
                //part HTML nachladen
                var x = document.getElementById(ctrlWin);
                if (x == null) {
                    function loadContent() {
                        jQuery.get(ctrlWin + ".html", function (data) {
                            jQuery("#Main").html(data);

                        }).done(function () {
                            if (ctrlWin !== "") {
                                // alle Main auf 0px verkleinern 
                                var Main = document.getElementsByTagName("Main");
                                var MainWindow = Array.from(Main);
                                MainWindow.forEach(function (element) {
                                    var a = element.className;
                                    document.getElementsByClassName(a)[0].style.width = "0px";
                                });
                                // alle Ctrl auf 0px verkleinern 
                                var Ctrl = document.getElementsByTagName("Ctrl");
                                var MCtrlWindow = Array.from(Ctrl);
                                MCtrlWindow.forEach(function (element) {
                                    var a = element.className;
                                    document.getElementsByClassName(a)[0].style.width = "0px";
                                });
                                //Haupt Fenster einblenden
                                document.getElementById(ctrlWin).style.width = "58vw";
                                //Control Fenster einblenden
                                document.getElementById(ctrlWin + "Ctrl").style.width = "26vw";
                            } else {


                            }
                        })
                        // Request ValueUpdate an Server senden
                        send('Request("updateValues")');
                    }
                    loadContent();
                } else {
                    // ist schon geladen
                
                        // alle Main auf 0px verkleinern 
                        var Main = document.getElementsByTagName("Main");
                        var MainWindow = Array.from(Main);
                        MainWindow.forEach(function (element) {
                            var a = element.className;
                            document.getElementsByClassName(a)[0].style.width = "0px";
                        });
                        // alle Ctrl auf 0px verkleinern 
                        var Ctrl = document.getElementsByTagName("Ctrl");
                        var MCtrlWindow = Array.from(Ctrl);
                        MCtrlWindow.forEach(function (element) {
                            var a = element.className;
                            document.getElementsByClassName(a)[0].style.width = "0px";
                        });
                        //Haupt Fenster einblenden
                        document.getElementById(ctrlWin).style.width = "58vw";
                        //Control Fenster einblenden
                        document.getElementById(ctrlWin + "Ctrl").style.width = "26vw";

                   
                }
            }


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

/* --------------------- ProtoType Klasse ToggelCtrlButton ---------------------------------------- */
var ToggleCtrlBtn = {
    create: function (ParentID, Ident, posTop, posLeft, size, color, text1, text2, class1, class2, cmd1, cmd2) {
        var elem = document.createElement("div");
        elem.className = "ctrlbutton";
        elem.classList.add(size, color);
        elem.id = Ident;
        elem.innerHTML = text1;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        elem.addEventListener("click", myFunction);
        document.getElementById(ParentID).appendChild(elem);

        function myFunction() {
            if (elem.innerHTML === text1) {
                elem.innerHTML = text2;
                elem.classList.add("blue");
                elem.classList.remove("blueToggle");
                func = Ident + "Sub1";
                if (class1 !== "") {
                    document.getElementsByClassName(class1)[0].style.width = "0px";
                    document.getElementsByClassName(class2)[0].style.width = "26vw";

                }
            } else {
                elem.innerHTML = text1;
                elem.classList.add("blueToggle");
                elem.classList.remove("blue");
                if (class1 !== "") {
                    document.getElementsByClassName(class2)[0].style.width = "0px";
                    document.getElementsByClassName(class1)[0].style.width = "26vw";

                }
            }

        }
    }
};


/* --------------------- class ToggelButton ---------------------------------------- */
class ToggleBtn {


    constructor() {

    }

    create(ParentID, Ident, posTop, posLeft, size, color, text1, text2, class1, class2, cmd1, cmd2) {

        var elem = document.createElement("div");
        elem.className = "ctrlbutton";
        elem.classList.add(size, color);
        elem.id = Ident;
        elem.innerHTML = text1;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        elem.addEventListener("click", myFunction());
        document.getElementById(ParentID).appendChild(elem);

        function myFunction() {
            if (elem.innerHTML === text1) {
                elem.innerHTML = text2;
                elem.classList.add("blue");
                elem.classList.remove("blueToggle");
                func = Ident + "Sub1";
                if (class1 !== "") {
                    document.getElementsByClassName(class1)[0].style.width = "0px";
                    document.getElementsByClassName(class2)[0].style.width = "26vw";

                }
            } else {
                elem.innerHTML = text1;
                elem.classList.add("blueToggle");
                elem.classList.remove("blue");
                if (class1 !== "") {
                    document.getElementsByClassName(class2)[0].style.width = "0px";
                    document.getElementsByClassName(class1)[0].style.width = "26vw";

                }
            }

        }
    }
}






/* --------------------- class Label ---------------------------------------- */
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
        elem.style.color = fontcolor;
        elem.style.fontSize = fontsize;
        elem.innerHTML = text;
        elem.style.wordWrap = "normal";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = this.breite;
        elem.style.height = this.hoehe;

        document.getElementById(ParentID).appendChild(elem);
    }
}


/* --------------------- class Dynamic Rahmen ---------------------------------------- */
class Rahmen {


    constructor() {
        this.idname = "";
        this.ID = "";
        this.h = "";
    }


    create(ParentID, posTop, posLeft, h, w, colorclass) {
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
}

/* --------------------- class Dynamic ImageDisplay ---------------------------------------- */
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

/* --------------------- class draw line ---------------------------------------- */
/* -------------------------- Version: 04.01.2022 ------------------------- */
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

/* --------------------- class Dynamic Icon ---------------------------------------- */
/* -------------------------- Version: 1.04.10.2019 ------------------------- */
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
        this.ID = elem;
        elem.className = "icon";

        elem.src = "images/" + this.ImageBaseName + "0.png";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = b;
        elem.style.height = h;
        elem.style.backgroundColor = this.bgColor;



        document.getElementById(ParentID).appendChild(elem);
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



/* --------------------- class Display status of Variable ---------------------------------------- */
/* -------------------------- Version: 1.04.10.2019 ------------------------- */
class StateDisplay {
    constructor() {
        this.ID = "";
        this.ID2 = "";
        this.unit = "";
        this.textColor = "black";
        this.type = "bool";
        this.state0 = "";
        this.state1 = "";
        this.state2 = "";
        this.state3 = "";
        this.bgColor = "black";
        this.title = "";

        this.h = "60px";
        this.b = "202px";
        //Optionale Parameter
    }

    get textColor() {
        return this._textColor;
    }

    set textColor(textColor) {
        this._textColor = textColor;
    }

    create(ParentID, color, einheit, posTop, posLeft, hoehe, breite, SchriftGr, titel, typ, zus0, zus1, zus2, zus3, command, ...param) {
        this.unit = einheit,
            this.title = titel;
        this.bgColor = color;
        if (color === "") {
            this.bgColor = "black";
        }
        this.type = typ;
        this.state0 = zus0;
        this.state1 = zus1;
        this.state2 = zus2;
        this.state3 = zus3;
        var elem1 = document.createElement("div");
        elem1.className = "anzeige";
        elem1.classList.add(this.bgColor);
        if (param.length > 0) {
            // this.b = param[0];
            //this.h = param[1];
            //elem1.style.width = this.b;
            //elem1.style.height = this.h;
        } else {

        }

        elem1.style.color = "white";
        elem1.style.position = "absolute";
        elem1.style.left = posLeft;
        elem1.style.top = posTop;
        elem1.style.width = breite;
        elem1.style.height = hoehe;
        elem1.style.wordWrap = "break-word";
        elem1.setAttribute("onclick", command);

        var elem2 = document.createElement("div");
        this.ID2 = elem2;
        elem2.style.backgroundColor = "black";
        elem2.style.height = "20px";
        elem2.innerHTML = titel;
        elem2.style.paddingTop = "2px"

        elem1.append(elem2);

        var elem3 = document.createElement("div");


        elem3.innerHTML = "----" + this.unit;
        elem3.style.fontSize = SchriftGr;
        elem3.style.paddingTop = "5px";

        this.ID = elem3;
        elem1.append(elem3);
        document.getElementById(ParentID).appendChild(elem1);
    }

    update(value, n = 0, title = this.title) {
        try {
            this.ID2.innerHTML = title;
            this.ID.style.color = this.textColor;
            if (this.type === "number") {
                var wert = value['value'].toFixed(n);
                this.ID.innerHTML = (wert.toString() + this.unit);
            } else if (this.type === "string") {
                this.ID.innerHTML = (value['value'].toString() + this.unit);
            } else if (this.type === "bool") {
                switch (value['value']) {
                    case 0:
                        this.ID.innerHTML = this.state0;
                        break;
                    case 1:
                        this.ID.innerHTML = this.state1;
                        break;
                    case false:
                        this.ID.innerHTML = this.state0;
                        break;
                    case true:
                        this.ID.innerHTML = this.state1;
                    break;
                }
            }
            else {
                switch (value['value']) {
                    case 0:
                        this.ID.innerHTML = this.state0;
                        break;
                    case 1:
                        this.ID.innerHTML = this.state1;
                        break;
                    case 2:
                        this.ID.innerHTML = this.state2;
                        break;
                    case 3:
                        this.ID.innerHTML = this.state3;
                        break;
                }
            }
        } catch (error) {
            //$('fehler').innerHTML = "Variable  fehlt:";
            //alert("value in Display error" + this.ID);
            this.ID.innerHTML = "XXXX";
        }


    }

    setTextColor(farbe) {
        this.ID.style.color = farbe;
    }

}




/* --------------------- Class VarDis ---------------------------------------- */
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

    create(ParentID, bgColor, posTop, posLeft, b, h, einheit, ...param) {
        this.width = b;
        this.height = h;
        this.bgColor = bgColor;
        this.unit = einheit;
         

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
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.width = this.width;
        container.style.height = this.height;
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.alignItems = "baseline";
        container.style.justifyContent = "space-between";
        /*container.style.backgroundColor = bgColor; */
        container.className = "var";
        container.classList.add(bgColor);
        container.style.paddingLeft = "0.5em";
        container.style.paddingRight = "0.5em";
        var s = false;

        var elemicon = document.createElement("div");
        if (param[2]) {
            elemicon.className = this.icon;
            elemicon.style.color = this.iconColor;
        }
        container.append(elemicon);



        var elem = document.createElement("div");

        elem.style.color = this.textColor;

        this.ID = elem;
        container.append(elem);

        document.getElementById(ParentID).appendChild(container);
    }

    update(value, n) {
        try {
            if ((value['value'] === false) || (value['value'] == 0)) {
                this.ID.innerHTML = this.state1;
            } else if ((value['value'] === true) || (value['value'] == 1)) {
                this.ID.innerHTML = this.state2;
            } else if (n === 0 || n > 0) {
                //var wert = Math.round(value).toFixed(n);
                var wert = value['value'].toFixed(n);
                this.ID.innerHTML = wert + this.unit;
            } else {
                this.ID.innerHTML = value['value'] + this.unit;
            }
        } catch (error) {
            if(typeof value == "undefined"){
                this.ID.innerHTML = '????';
            }
        }

    }
}








/* --------------------- ProtoType Klasse VarDisplay ---------------------------------------- 
 var VarDisplay = {
    Ident : "ID",
    color : "white",
    textcolor : "white",
    unit : "°C",
    state1 : "",
    state2 : "",
    
    create :  function(ParentID, ID, ObjektFarbe, posTop, posLeft, size, einheit, status1, status2){  
        this.Ident = ID;
        this.color = ObjektFarbe;
        this.unit = einheit;
        this.state1 = status1;
        this.state2 = status2;
        
        var elem = document.createElement("div");
        elem.className = "var";  
        elem.classList.add(this.color, size);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.color = this.textcolor;
        
        elem.id = ID; 
       
        document.getElementById(ParentID).appendChild(elem);   
    },
    update :  function (value, n){
        try { 
            if (value === false){
               document.getElementById(this.Ident).innerHTML = this.state1; 
            }
            else if (value === true) {
                document.getElementById(this.Ident).innerHTML = this.state2; 
            }
            else if (n === 0 || n > 0){
                //var wert = Math.round(value).toFixed(n);
                var wert = value.toFixed(n);
                document.getElementById(this.Ident).innerHTML = wert + this.unit;
            }
            else {
                document.getElementById(this.Ident).innerHTML = value + this.unit;
            }
        } catch (error) {
           // alert("error");
        }
        
     }
  }  
  
*/

/* --------------------- Class Heating Ctrl -------------------------------------- */
/* -------------------------- Version: 1.18.10.2019 ------------------------- */
//TODO: Änderungen von MobGui übernehmen - CSS  ctrlbutton Schriftgröße buttons
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
        this.SollTempWert = "22.0";
        this.elemSollTemp = "";

        //optionale Parameter
        this.b = "200px";
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
        this.ID = container;
        container.style.flexDirection = "column";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color + "Light";
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;
        // Label 
        var elem1 = document.createElement("div");
        elem1.style.paddingTop = "5px";
        elem1.style.height = "30px";
        elem1.style.backgroundColor = "black";
        elem1.innerHTML = label;
        container.append(elem1)
        //ausstehender Soll - Einstell Wert - Soll WERT
        var elemTC = document.createElement("div");
        elemTC.style.width = this.b;
        elemTC.style.padding = "5px";
        elemTC.style.height = "35%";
        elemTC.style.color = "black";
        elemTC.style.display = "flex";
        elemTC.style.alignItems = "flex-end";
        elemTC.style.flexDirection = "row";
        elemTC.style.justifyContent = "space-between";
        container.append(elemTC);
        //Anzeige ausstehende Soll Temperatur
        var elemTL = document.createElement("span");
        this.value1ID = elemTL;
        elemTL.innerHTML = this.leftStat + this.unit;
        elemTC.append(elemTL);
        //Anzeige vorgewählter Sollwert
        var elemTM = document.createElement("span");
        this.elemSollTemp = elemTM;
        elemTM.style.paddingBottom = "10%";
        elemTM.innerHTML = this.SollTempWert + this.unit;
        elemTM.style.fontSize = "30px";
        elemTC.append(elemTM);
        //Anzeige Sollwert am Regler
        var elemTR = document.createElement("span");
        this.value2ID = elemTR;
        elemTR.innerHTML = this.rightStat + this.unit;
        elemTC.append(elemTR);
        // + / - buttons
        var elem1 = document.createElement("div");
        elem1.style.width = this.b;
        elem1.style.height = "25%";
        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.justifyContent = "space-around";
        elem1.style.position = "absolute";
        elem1.style.top = "51%";
        elem1.style.padding = "2px";
        elem1.style.fontsize = this.fs1;
        container.append(elem1);
        // Button Vorgabewert - Sollwert um 0,5 °C erhöhen
        var elem2 = document.createElement("div");
        elem2.style.width = "50%";
        elem2.style.color = this.btnTextColor;
        elem2.className = "ctrlbutton";
        elem2.classList.add(this.color);
        elem2.innerHTML = this.state0;
        elem2.style.flexGrow = "1";
        elem2.onclick = function () {
            var solltemp = parseFloat(elemTM.innerHTML) + 0.5;
            elemTM.innerHTML = solltemp + "°C";
        }
        elem1.append(elem2);
        // Button Vorgabewert - Sollwert um 0,5 °C verringern
        var elem4 = document.createElement("div");
        elem4.style.width = "50%";
        elem4.style.flexGrow = "1";
        elem4.style.color = this.btnTextColor;
        elem4.className = "ctrlbutton";
        elem4.classList.add(this.color);
        elem4.innerHTML = this.state1;
        elem4.onclick = function () {
            var solltemp = parseFloat(elemTM.innerHTML) - 0.5;
            elemTM.innerHTML = solltemp + "°C";
        }
        elem1.append(elem4);
        // Set Button
        var elem5 = document.createElement("div");
        elem5.style.width = this.b;
        elem5.style.height = "25%";
        elem5.style.padding = "2px";
        elem5.style.display = "flex";
        elem5.style.flexDirection = "row";
        elem5.style.justifyContent = "space-around";
        elem5.style.position = "absolute";
        elem5.style.top = "75%";
        container.append(elem5);
        // angewählten Sollwert an IPS senden
        var elem6 = document.createElement("div");
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
        elem5.append(elem6);

        document.getElementById(ParentID).appendChild(container);
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



function addStatus(ParentID, Ident, color, posTop, posLeft, text) {
    var elem = document.createElement("div");
    elem.className = "status";
    elem.classList.add("Bat", color);
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;


    var elem1 = document.createElement("div");
    elem1.className = "fa fa-battery-full";
    elem1.style.fontSize = "24px";
    elem1.style.color = "#00FF00";
    elem1.innerHTML = "        " + text;
    elem1.id = Ident;

    elem.append(elem1);
    document.getElementById(ParentID).appendChild(elem);
}




























/* --------------------- ProtoType Klasse FontButton ---------------------------------------- 
 var FontButton = {
    create :  function(ParentID, color, size, posTop, posLeft, symbol, cmd){  
                var elem = document.createElement("div");
                elem.className = "fontbutton";   
                elem.classList.add(size, color);
                elem.style.position = "absolute";
                elem.style.left = posLeft;
                elem.style.top = posTop;
                elem.setAttribute("onclick", cmd);

                var elem1 = document.createElement("span");
                elem1.className = symbol; 
                elem1.style.fontSize = "30px";
                elem1.style.padding = "5px";
                elem1.style.marginTop = "10px";

                elem.append(elem1);
                document.getElementById(ParentID).appendChild(elem);
    }    

 };


function addFontButton(ParentID, color, size, posTop, posLeft, symbol, cmd){
    var elem = document.createElement("div");
    elem.className = "fontbutton";   
    elem.classList.add(size, color);
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
    elem.setAttribute("onclick", cmd);
    
    var elem1 = document.createElement("span");
    elem1.className = symbol; 
    elem1.style.fontSize = "30px";
    elem1.style.padding = "5px";
    elem1.style.marginTop = "10px";
    
    elem.append(elem1);
    document.getElementById(ParentID).appendChild(elem);	
}

 */




/* --------------------- Klasse CheckBoxCtrlBtn ---------------------------------------- */
class CheckBoxCtrlBtn {
    constructor() {
        this.ID = "";
        this.color = "";
        this.cmd = [];
        //optionale Parameter
        this.textColor1 = "black";
        this.textColor2 = "black";
    }

    create(ParentID, farbe, posTop, posLeft, text, cmd0, cmd1,  ...param) {
        var c1 = this.textColor1;
        var c2 = this.textColor2;
        this.color = farbe;
         
        var elem1 = document.createElement("label");
        elem1.className = "CBcontainer";
        elem1.classList.add(farbe);
        elem1.innerHTML = text;
        elem1.style.top = posTop;
        elem1.style.left = posLeft;
        elem1.style.width = "200px";
        elem1.style.height = "40px";
        elem1.style.color = c1;

        var elem2 = document.createElement("input");
        elem2.setAttribute("type", "checkbox");
        this.ID = elem2;
        elem2.checked = false;
        elem1.append(elem2);

        var elem3 = document.createElement("span");
        elem3.className = "checkmark";
        elem1.append(elem3);

        document.getElementById(ParentID).appendChild(elem1);

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
/*                         Klasse: Menu Button (Glide)                         */
/* image wird aus iconset.js geladen                                          */
/* -------------------------------------------------------------------------- */

class GlideButton {
    constructor() {
        this.unit1 = " ";
        this.unit2 = " ";
        this.unit3 = " ";
        this.unit4 = " ";
        this.value1 = " ";
        this.value2 = " ";
        this.value3 = " ";
        this.value4 = " ";
        this.ObjValue1 = "";
        this.ObjValue2 = "";
        this.ObjValue3 = "";
        this.ObjValue4 = "";

    }

    create(ParentID, farbe, titel, image, IDMain, IDFull, MenuType) {

        var elem1 = document.createElement("div");
        elem1.className = "GlideButton";
        elem1.classList.add(farbe, "area");

        elem1.onclick = function () {
            if (MenuType === "R") {
                // Main-Menus aufklappen  
                var MainMenu = document.getElementsByTagName("mainMenu");
                MainMenu[0].style.width = "28vw";
                //Startbild vergößern
                document.getElementsByClassName("StartScreen")[0].style.left = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "74%";
            }

            // alle subMenus auf 0px verkleinern 
            var subs = document.getElementsByTagName("SubMenu");
            var SubMenus = Array.from(subs);
            SubMenus.forEach(function (element) {
                var a = element.className;
                document.getElementsByClassName(a)[0].style.width = "0px";
            });

            // alle Main auf 0px verkleinern 
            var Main = document.getElementsByTagName("Main");
            var MainWindow = Array.from(Main);
            MainWindow.forEach(function (element) {
                var a = element.className;
                document.getElementsByClassName(a)[0].style.width = "0px";
            });
            // alle Ctrl auf 0px verkleinern 
            var Ctrl = document.getElementsByTagName("Ctrl");
            var MCtrlWindow = Array.from(Ctrl);
            MCtrlWindow.forEach(function (element) {
                var a = element.className;
                document.getElementsByClassName(a)[0].style.width = "0px";
            });
            // Click auf Main Menu Item
            if (MenuType === "MM") {
                //benötigte Fenster einblenden für Main Menu öffnet Wohnraun Picture
                document.getElementById(ParentID).style.width = "85px";
                if (IDMain !== "") {
                    //document.getElementsByClassName("StartScreen")[0].style.left = "36vw";
                    //Overview Bild einblenden
                    let sMM = 28 + (100 * 86 / window.innerWidth);
                    document.getElementsByClassName(IDMain + "OV")[0].style.left = sMM + "vw";
                    document.getElementsByClassName(IDMain)[0].style.width = "28%";
                    //document.getElementsByClassName("StartScreen")[0].style.width = "64vw";

                    document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                    let sMS = 100 - 28 - (100 * 85 / window.outerWidth);
                    document.getElementsByClassName(IDMain + "OV")[0].style.width = sMS + "%";
                } else {
                    document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                    document.getElementsByClassName("StartScreen")[0].style.left = "85px";
                    document.getElementsByClassName(IDFull)[0].style.width = "92%";
                }
            }
            if (MenuType === "SM") {
                if (IDMain !== "") {
                    //script für Ctrl Window nachaden
                    document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                    //SubMenue Leiste verkuerzt einblenden
                    document.getElementById(ParentID).style.width = "85px";
                    //Haupt Fenster einblenden
                    let sSM = 100 - 26 - (100 * 172 / window.innerWidth);
                    document.getElementById(IDMain).style.width = sSM + "%";
                    //Control Fenster einblenden
                    document.getElementById(IDMain + "Ctrl").style.width = "26%";
                } else {
                    document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                    //SubMenue Leiste verkuerzt einblenden
                    document.getElementById(ParentID).style.width = "85px";
                    //Haupt Fenster komplett einblenden
                    document.getElementById(IDFull).style.width = "92%";
                }
            }
            if (MenuType === "SMload") {
                //part HTML nachladen
                var x = document.getElementById(IDMain);
                if (x == null) {
                    /*
                    function loadContent() {
                        if (IDMain !== "") {
                            var IDMainFull = IDMain;
                        }
                        else{
                            IDMainFull = IDFull;
                        }
                        jQuery.get(IDMainFull + ".html", function (data) {
                            jQuery("#Main").html(data);

                        }).done(function () {
                            if (IDMain !== "") {
                                //script für Ctrl Window nachaden
                                document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                                //SubMenue Leiste verkuerzt einblenden
                                document.getElementById(ParentID).style.width = "85px";
                                //Haupt Fenster einblenden
                                let sL = 100 - 26 - (100 * 172 / window.innerWidth);
                                
                                document.getElementById(IDMain).style.width = sL + "%";
                                //Control Fenster einblenden
                                document.getElementById(IDMain + "Ctrl").style.width = "26%";
                            } else {
                                document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                                //SubMenue Leiste verkuerzt einblenden
                                document.getElementById(ParentID).style.width = "85px";
                                //Haupt Fenster komplett einblenden
                                document.getElementById(IDFull).style.width = "92%";
                            }
                        })
                        // Request ValueUpdate an Server senden
                        send('Request("updateValues")');
                    }
                    loadContent();
                    */
                    if (IDMain !== "") {
                        var IDMainFull = IDMain;
                    }
                    else{
                        IDMainFull = IDFull;
                    }
                    jQuery.getScript(IDMainFull + ".js", function()
                    {
                        // script is now loaded and executed.

                        if (IDMain !== "") {
                            //script für Ctrl Window nachaden
                            document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                            //SubMenue Leiste verkuerzt einblenden
                            document.getElementById(ParentID).style.width = "85px";
                            //Haupt Fenster einblenden
                            let sL = 100 - 26 - (100 * 172 / window.innerWidth);
                            
                            document.getElementById(IDMain).style.width = sL + "%";
                            //Control Fenster einblenden
                            document.getElementById(IDMain + "Ctrl").style.width = "26%";
                        } else {
                            document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                            //SubMenue Leiste verkuerzt einblenden
                            document.getElementById(ParentID).style.width = "85px";
                            //Haupt Fenster komplett einblenden
                            document.getElementById(IDFull).style.width = "92%";
                        }
                    });
                } else {
                    //Fenster ist schon geladen
                    if (IDMain !== "") {
                        //script für Ctrl Window nachaden
                        document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                        //SubMenue Leiste verkuerzt einblenden
                        document.getElementById(ParentID).style.width = "8%";
                        //Haupt Fenster einblenden
                        let sL = 100 - 26 - (100 * 172 / window.innerWidth);
                        document.getElementById(IDMain).style.width = sL + "%";
                        //Control Fenster einblenden
                        document.getElementById(IDMain + "Ctrl").style.width = "26%";
                    } else {
                        document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                        //SubMenue Leiste verkuerzt einblenden
                        document.getElementById(ParentID).style.width = "8%";
                        //Haupt Fenster komplett einblenden
                        document.getElementById(IDFull).style.width = "92%";
                    }
                }







            }

            var kopfleiste = document.getElementsByClassName("Top")[0];

            kopfleiste.className = "Top";
            kopfleiste.classList.add(farbe);
            kopfleiste.style.color = "black";
            document.getElementById("TopTitle").innerHTML = titel;
        };

        var elem2 = document.createElement("img");
        elem2.className = "icon";

        //elem2.src = "images/" + image;
        elem2.src = image;
        elem2.style.position = "relative";
        elem2.style.left = "5px";
        
        elem1.append(elem2);

        var elem2a = document.createElement("div");
        elem1.append(elem2a);

        var elem3 = document.createElement("div");
        elem3.className = "room";
        elem3.innerHTML = titel;
        elem3.style.textAlign = "left";
        elem2a.append(elem3);

        var elem4 = document.createElement("div");
        elem4.style.fontSize = "0.8rem";
        elem4.style.display = "flex";
        elem4.style.justifyContent = "space-between";
        elem4.style.width = "200px";
        elem4.style.paddingLeft = "20px";
        elem2a.append(elem4);

        var elem5 = document.createElement("div");
        this.ObjValue1 = elem5;
        elem4.append(elem5);

        var elem6 = document.createElement("div");
        this.ObjValue2 = elem6;
        elem4.append(elem6);

        var elem7 = document.createElement("div");
        this.ObjValue3 = elem7;
        elem4.append(elem7);

        var elem8 = document.createElement("div");
        this.ObjValue4 = elem8;
        elem4.append(elem8);



        document.getElementById(ParentID).appendChild(elem1);



    };

    update(value1, unit1, value2, unit2, value3, unit3, value4, unit4) {
        this.unit1 = unit1;
        this.unit2 = unit2;
        this.unit3 = unit3;
        this.unit4 = unit4;
        
        if(typeof value1 == "undefined"){
            this.value1 = "????";
        }
        else{
            if(typeof value1['value'] == "undefined"){
                this.value1 = value1;
            }else{
                this.value1 =  value1['value'];
            }
        }
        if(typeof value2 == "undefined"){
            this.value2 = "????"; 
        }else{
            if(typeof value2['value'] == "undefined"){
                this.value2 = value2;
            }else{
                this.value2 =  value2['value'];
            }
        }
        if(typeof value3 == "undefined"){
            this.value3 = "????";
        }else{
            if(typeof value3['value'] == "undefined"){
                this.value3 = value3;
            }else{
                this.value3 =  value3['value'];
            }
        }
        if(typeof value4 == "undefined"){
            this.value4 = "????";
        }else{
            if(typeof value4['value'] == "undefined"){
                this.value4 = value4;
            }else{
                this.value4 =  value4['value'];
            }
        }
        
        
        this.ObjValue1.innerHTML = this.value1 + this.unit1;
        this.ObjValue2.innerHTML = this.value2 + this.unit2;
        this.ObjValue3.innerHTML = this.value3 + this.unit3;
        this.ObjValue4.innerHTML = this.value4 + this.unit4;
    };





}


/* --------------------- Klasse Zahlenfeld ---------------------------------------- */
class KeyPad {
    constructor() {
        this.value1 = "";
        this.ID = " ";
         
    }

    create(ParentID, Device, color, size, posTop, posLeft, cmd0) {
       
        var elem = document.createElement("div");
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        var Zdisplay = document.createElement("div");

        Zdisplay.style.backgroundColor = "grey";
        Zdisplay.style.padding = "7px" * size;
        let hoehe = 50 * size;
        let breite = 320 * size;
        Zdisplay.style.height = hoehe + "px";
        Zdisplay.style.width = breite + "px";
        Zdisplay.style.border = "thick solid #0000FF";
        Zdisplay.style.marginBottom = "10px";
        Zdisplay.style.paddingTop = "10px";
        this.ID = Zdisplay;
        elem.append(Zdisplay);



        var Zcontainer = document.createElement("div");
        Zcontainer.className = "ZahlenContainer";
        Zcontainer.style.backgroundColor = "black";
        Zcontainer.style.padding = "7px" * size;
        let h = 320 * size;
        let b = 320 * size;
        Zcontainer.style.height = h + "px";
        Zcontainer.style.width = b + "px";
        Zcontainer.style.paddingTop = "10px";

        elem.append(Zcontainer);

        var i;
        for (i = 0; i < 9; i++) {
            var taste = document.createElement("div");
            taste.className = "fontbutton";
            taste.classList.add(color);
            let f1 = 38 * size;
            taste.style.fontSize = f1 + "px";
            taste.style.padding = "8px";
            let a1 = 100 * size;
            let b1 = 70 * size;
            taste.style.width = a1 + "px";
            taste.style.height = b1 + "px";
            taste.setAttribute("onclick", "passkey(" + i + ")");
            taste.innerHTML = i;
            Zcontainer.append(taste);
 
        }


        var reply = document.createElement("div");
        reply.className = "fontbutton";
        reply.classList.add(color);
        let f2 = 38 * size;
        reply.style.fontSize = f2 + "px";
        reply.style.padding = "8px";
        let a2 = 100 * size;
        let b2 = 70 * size;
        reply.style.width = a2 + "px";
        reply.style.height = b2 + "px";
        reply.setAttribute("onclick", "passkeyrepeat()");
        Zcontainer.append(reply);

        var replyA = document.createElement("span");
        replyA.className = "fa fa-reply";
        let f6 = 30 * size;
        replyA.style.fontSize = f6 + "px";
        replyA.style.padding = "5px";
        replyA.style.marginTop = "10px" * size;
        reply.append(replyA);

        var taste9 = document.createElement("div");
        taste9.className = "fontbutton";
        taste9.classList.add(color);
        let f3 = 38 * size;
        taste9.style.fontSize = f3 + "px";
        taste9.style.padding = "8px";
        let a3 = 100 * size;
        let b3 = 70 * size;
        taste9.style.width = a3 + "px";
        taste9.style.height = b3 + "px";
        taste9.setAttribute("onclick", "passkey(9)");
        taste9.innerHTML = "9";
        Zcontainer.append(taste9);

        var enter = document.createElement("div");
        enter.className = "fontbutton";
        enter.classList.add(color);
        let f4 = 38 * size;
        enter.style.fontSize = f4 + "px";
        enter.style.padding = "8px";
        let a4 = 100 * size;
        let b4 = 70 * size;
        enter.style.width = a4 + "px";
        enter.style.height = b4 + "px";
        enter.setAttribute("onclick", "sendpassword('" + cmd0 + "')" );
 
        Zcontainer.append(enter);

        var enterA = document.createElement("span");
        enterA.className = "fa fa-check";
        let f5 = 30 * size;
        enterA.style.fontSize = f5 + "px";
        enterA.style.padding = "5px";
        enterA.style.marginTop = "10px" * size;
        enter.append(enterA);

        document.getElementById(ParentID).appendChild(elem);



    }

    update(value) {
        if(typeof value != "undefined"){
            if (value != "") {
                this.value1 = value['value'];
                var n = this.value1.length;
                var code = "**************************";
                this.ID.innerHTML = code.substring(0, n);
            }
        }
    };
    


}

/* --------------------- Klasse AlarmBox ---------------------------------------- */
class AlarmBox {
    constructor() {
        this.ID = "";
        this.cmd = [];
    }

    create(ParentID, ObjID, color, posTop, posLeft, cmd0) {
        this.ID = ObjID;
        this.cmd[0] = cmd0;

        var elem = document.createElement("div");
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
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {
        if (value == 2) {
            document.getElementById(this.ID).style.display = "block";
        } else {
            document.getElementById(this.ID).style.display = "none";
        }
    }
}


/* --------------------- Klasse IconSelectList ---------------------------------------- */

/* ------------------------ ALt nicht mehr verwenden ------------------------ */

class IconList {
    constructor() {

    }

    create(ParentID, source) {

        if (source == "xxxxCD") {
            var SourceList = [];
            for (var i = 1; i < 99; i++) {
                SourceList[i] = {
                    No: i - 1,
                    selected: false,
                    icon: i
                };
            }

        } else {
            // Liste einlesen
            var Liste = new data();
            switch (source) {
                case "CD":
                    var SourceList = Liste.getCDLib();
                    break;
                case "TV":
                    var SourceList = Liste.getTVchannels();
                    break;
                case "IRadio":
                    var SourceList = Liste.getIRadiochannels();
                    break;
                case "AudioBook":
                    var SourceList = Liste.getAudioLib();
                    break;
                default:
            }
        }
        SourceList.forEach(function (item) {
            var elem = document.createElement("img");

            switch (source) {
                case "TV":
                    var icon = item["icon"];
                    break;
                case "IRadio":
                    var icon = item["icon"];
                    break;
                case "CD":
                    var icon = item["icon"];
                    break;
                case "AudioBook":
                    var icon = item["icon"];
                    break
                default:
            }

            elem.className = "iconTV";
            elem.id = source + item["No"];
            elem.style.padding = "2px";
            if (source === "TV") {
                elem.src = "images/Sender/" + icon;
            } else if (source === "IRadio") {
                elem.src = "images/RadioStation/" + icon;
            } else if (source === "CD") {
                elem.src = "CDs/" + icon;
            } else if (source === "AudioBook") {
                elem.src = "AudioBooks/" + icon;
            }
            elem.onclick = function () {
                var index = SourceList.findIndex((item) => item.selected === true);
                if (index !== -1) {
                    SourceList[index]['selected'] = false;
                    var ObjID = source + index;
                    var elem0 = document.getElementById(ObjID);
                    elem0.classList.add("iconTV");
                    elem0.classList.remove("iconTVToggle");
                }
                elem.classList.add("iconTVToggle");
                elem.classList.remove("iconTV");
                item['selected'] = true;
                if (source === "TV") {
                    var cmd = "command(TV,Channel," + item['Sender'] + ")";
                } else if (source === "IRadio") {
                    var cmd = "command(DenonCeol,Channel," + item['FV'] + ")";
                } else if (source === "CD") {
                    var cmd = "command(DenonCeol,loadCDPlaylist," + item['FV'] + ")";
                } else if (source === "AudioBook") {
                    var cmd = "command(DenonCeol,loadAudioPlaylist," + item['FV'] + ")";
                }
                send(cmd);
            };

            document.getElementById(ParentID).appendChild(elem);
        });

    }



}



/* --------------------- Class Kachel -------------------------------------- */
/* -------------------------- Version:1.05.10.2019 -------------------------- */

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
        this.labelText = title;
        this.color = color;
        this.b = breite;
        this.h = hoehe;
        if (param.length > 1) {
            this.btnTextColor = param[0];
            this.labelcolor = param[1];
        }
        var container = document.createElement("div");
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

        // Label 
        var label = document.createElement("div");
        this.labelObj = label;
        label.style.height = "30px";
        label.style.backgroundColor = this.btnTextColor;
        label.innerHTML = title;
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.style.justifyContent = "center";
        container.append(label);

        document.getElementById(ParentID).appendChild(container);
    }

    update(value) {
        this.labelObj.innerHTML = value['value'];
    }
}




//TODO: Noch auszutauschen für alle Rollande Steuerungen
/* --------------------- Class Rollo Ctrl -------------------------------------- */
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
    create(ParentID, posTop, posLeft, color, title, cmdL1, cmdR1, ...param) {
        this.color = color;
        this.cmdLeft[0] = cmdL1;
        this.cmdRight[0] = cmdR1;

        if (param.length > 1) {
            this.b = param[0];
            this.h = param[1];

            this.btnTextColor = param[2];
            this.labelcolor = param[3];
            this.anzColor = param[4];
        }
        var container = document.createElement("div");

        container.style.flexDirection = "column";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color + "Light";
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;

        // Label 
        var label = document.createElement("div");
        label.style.paddingTop = "5px";
        label.style.height = "25px";
        label.style.backgroundColor = "black";
        label.innerHTML = title;
        container.append(label);

        // Position Variable
        var anz = document.createElement("div");
        this.ID = anz;
        anz.style.width = this.b;
        anz.style.height = "35%";
        anz.style.marginTop = "2px";
        anz.style.padding = "2px";
        anz.innerHTML = "XXX" + this.unit;
        anz.style.color = this.AnzColor;
        anz.style.fontSize = this.AnzSchriftgr;
        anz.style.paddingTop = "5px";


        container.append(anz);

        //Button Reihe
        var btnCont2 = document.createElement("div");
        btnCont2.style.marginTop = "5px";
        btnCont2.style.width = this.b;
        btnCont2.style.height = "30%";
        btnCont2.style.display = "flex";
        btnCont2.style.flexDirection = "row";
        btnCont2.style.justifyContent = "space-around";

        container.append(btnCont2);

        var btnLeft = document.createElement("div");
        btnLeft.style.width = "30%";
        btnLeft.className = "fontbutton";
        btnLeft.classList.add(color);
        btnLeft.style.display = "flex";
        btnLeft.style.alignItems = "center";
        btnLeft.style.justifyContent = "center";

        var commandLeft =JSON.stringify(this.cmdLeft);
        btnLeft.setAttribute("onclick",  'send('+ JSON.stringify(commandLeft) + ')');

        var btn4Sign = document.createElement("span");
        btn4Sign.className = "fa fa-plus";
        btn4Sign.style.fontSize = "30px";
        btn4Sign.style.padding = "5px";
        btn4Sign.style.color = this.btnTextColor;
        this.ID1 = btn4Sign;
        btnLeft.append(btn4Sign);
        btnCont2.append(btnLeft);

        var btnRight = document.createElement("div");
        btnRight.style.width = "30%";
        btnRight.className = "fontbutton";
        btnRight.classList.add(color);
        btnRight.style.display = "flex";
        btnRight.style.alignItems = "center";
        btnRight.style.justifyContent = "center";

        var commandRight =JSON.stringify(this.cmdRight);
        btnRight.setAttribute("onclick",  'send('+ JSON.stringify(commandRight) + ')');

        var btn5Sign = document.createElement("span");
        btn5Sign.className = "fa fa-minus";
        btn5Sign.style.fontSize = "30px";
        btn5Sign.style.padding = "5px";
        btn5Sign.style.color = this.btnTextColor;
        this.ID1 = btn5Sign;
        btnRight.append(btn5Sign);
        btnCont2.append(btnRight);

        /*
        var btnCont3 = document.createElement("div");
        btnCont3.style.width = this.b;
        btnCont3.style.height = "30%";
        btnCont3.style.marginTop = "15px";
        btnCont3.style.padding = "2px";
        btnCont3.style.display = "flex";
        btnCont3.style.flexDirection = "row";
        btnCont3.style.justifyContent = "space-around";
        container.append(btnCont3);

        var elem1 = document.createElement("label");
        elem1.className = "CBcontainer";
        elem1.classList.add(color);
        elem1.innerHTML = "SunRise-SunSet";

        btnCont3.append(elem1);


                var elem2 = document.createElement("input");
                elem2.setAttribute("type", "checkbox");
                elem2.checked = false;
                elem2.id = this.Ident;
                elem1.append(elem2);

                var elem3 = document.createElement("span");
                elem3.className = "checkmark";
                elem1.append(elem3);


                elem2.addEventListener('change', function () {
                    var sendCmd = "command(Rollo," + room + ",SSX)";
                    if (this.checked) {
                        // Checkbox is checked..
                        elem1.style.color = "white";
                        //var n = sendCmd.search("X"); 
                        var res = sendCmd.replace("X", "on");
                        send(res);
                    } else {
                        // Checkbox is not checked..
                        elem1.style.color = "blue";
                        var res = sendCmd.replace("X", "off");
                        send(res);
                    }
                });
        */
        document.getElementById(ParentID).appendChild(container);
    }

    update(value, n) {
        try {
            var wert = value['value'].toFixed(n);
            this.ID.innerHTML = (wert.toString() + this.unit);

        } catch (error) {
            //$('fehler').innerHTML = "Variable  fehlt:";
            //alert("value in Display error" + this.ID);
            wert = 99.9;
            this.ID.innerHTML = (wert.toString() + this.unit);
        }

    }

}

/* ---------------------  Klasse analogBar   ---------------------------------------- */
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

};


/* ---------------------  Klasse FontCtrlButton   ---------------------------------------- */
/* -------------------------- Version: 1.05.10.2019 ------------------------- */
class FontCtrlButton {
    constructor() {
        this.ID = "";
        this.cmd = [];

        //optionale Parameter
        this.b = "200px";
        this.h = "60px";
        this.textfarbe = "black";
        this.textgr = "20px";
        this.textfarbeAF = "black";

    }
    create(ParentID, color, posTop, posLeft, symbol, text, ctrltype, cmd, ctrlWin, ...param) {
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
            case "command":
                container.setAttribute("onclick", cmd);
                break;
            case "func":
                this.cmd[0] = cmd;
                var command =JSON.stringify(this.cmd);
                container.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');
                break;
            case "ctrlWindow":
                container.onclick = function () {
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
                break;
            case "CtrlFunc":
                container.onclick = function () {
                    // alle Ctrl auf 0px verkleinern 
                    var Ctrl = document.getElementsByTagName("Ctrl");
                    var MCtrlWindow = Array.from(Ctrl);
                    MCtrlWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // ctrlWindow umschalten
                    document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";
                    ShowHidePanel(cmd);
                }
                break;
            case "CtrlCmd":
                container.onclick = function () {
                    // alle Ctrl auf 0px verkleinern 
                    var Ctrl = document.getElementsByTagName("Ctrl");
                    var MCtrlWindow = Array.from(Ctrl);
                    MCtrlWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // ctrlWindow umschalten
                    document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";

                    send(cmd);
                }
                break;
            case "CtrlFunc":
                container.onclick = function () {
                    // alle Ctrl auf 0px verkleinern 
                    var Ctrl = document.getElementsByTagName("Ctrl");
                    var MCtrlWindow = Array.from(Ctrl);
                    MCtrlWindow.forEach(function (element) {
                        var a = element.className;
                        document.getElementsByClassName(a)[0].style.width = "0px";
                    });
                    // ctrlWindow umschalten
                    document.getElementsByClassName(ctrlWin)[0].style.width = "26vw";
                    his.cmd[0] = cmd;
                    var command =JSON.stringify(this.cmd);
                    send(JSON.stringify(command));
                }
            default:
                container.setAttribute("onclick", cmd);
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




};







/* ---------------------  Klasse FontButton (kann entfallen wenn nicht mehr verwndet wird ersetzt durch FontButton */
class FontButtonNew {
    constructor() {
        this.ID = "";
        this.ID1 = "";
        this.b = "";
        this.h = "";

        // options
        this.textSize = "28px";
        this.textColor = "black";

    }
    create(ParentID, btnClass, color, posTop, posLeft, symbol, b, h, cmd, ...param) {
        this.h = h;
        this.b = b;
        if (param.length > 0) {
            this.textSize = param[0];
            this.textColor = param[1];
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
        elem.setAttribute("onclick", cmd);

        var elem1 = document.createElement("span");
        elem1.className = symbol;
        elem1.style.fontSize = this.textSize;
        elem1.style.color = this.textColor;
        this.ID1 = elem1;

        elem.append(elem1);
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {
        if (value['value'] === true) {
            this.ID1.style.color = "lime";
        } else {
            this.ID1.style.color = "white";
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
};

/* --------------------- Klasse Navigation Pad ---------------------------------------- */
class NavPad {
    constructor() {

    }

    create(ParentID, ObjID, color, posTop, posLeft, sym) {

        var elem = document.createElement("div");
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;


        var Navcontainer = document.createElement("div");
        Navcontainer.className = "NavContainer";

        Navcontainer.style.width = "220px";


        elem.append(Navcontainer);

        var i;
        for (i = 0; i < 9; i++) {
            var taste = document.createElement("div");
            taste.className = "fontbutton";
            taste.classList.add(color);


            taste.style.padding = "8px";
            taste.style.margin = "0px";

            taste.style.width = "60px";
            taste.style.height = "60px";
            var cmd = "";
            switch (i) {
                case 0:
                    taste.style.marginTop = "30px";
                    taste.style.marginLeft = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "yellow";
                    cmd = "command(TV,key,c)";
                    break;
                case 1:
                    taste.style.borderRadius = "20px 20px 0px 0px";
                    taste.style.fontSize = "45px";
                    taste.style.height = "80px";
                    taste.style.marginTop = "0px";
                    cmd = "command(TV,key,KEY_UP)";
                    break;
                case 2:
                    taste.style.marginTop = "30px";
                    taste.style.marginRight = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "green";
                    cmd = "command(TV,key,c)";
                    break;
                case 3:
                    taste.style.borderRadius = "20px  0px  0px 20px";
                    taste.style.width = "80px";
                    cmd = "command(TV,key,KEY_LEFT)";
                    break;
                case 4:
                    cmd = "command(TV,key,KEY_ENTER)";
                    break;
                case 5:
                    taste.style.borderRadius = "0px 20px 20px 0px";
                    taste.style.width = "80px";
                    cmd = "command(TV,key,KEY_RIGHT)";
                    break;
                case 6:
                    taste.style.marginBottom = "0px";
                    taste.style.marginLeft = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "blue";
                    cmd = "command(TV,key,c)";
                    break;
                case 7:
                    taste.style.borderRadius = "0px  0px 20px 20px";
                    taste.style.height = "80px";
                    cmd = "command(TV,key,KEY_DOWN)";
                    break;
                case 8:
                    taste.style.marginBottom = "0px";
                    taste.style.marginRight = "0px";
                    taste.style.width = "50px";
                    taste.style.height = "50px";
                    taste.style.color = "red";
                    cmd = "command(TV,key,c)";
                    break;
            }


            taste.onclick = send(cmd);

            Navcontainer.append(taste);

            var symbol = document.createElement("span");

            symbol.className = sym[i];
            symbol.style.position = "relative";

            symbol.style.fontSize = "38px";
            if (i == 7) {
                symbol.style.top = "25px";
            } else if (i == 1) {
                symbol.style.top = "-10px";
            } else if (i == 3) {
                symbol.style.left = "-15px";
            } else if (i == 5) {
                symbol.style.left = "15px";
            }
            taste.append(symbol);
        }
        document.getElementById(ParentID).appendChild(elem);
    }
}

/* --------------------- Klasse LED Display---------------------------------------- */
class LEDdisplay {
    constructor() {
        this.ID = "";
    }

    create(ParentID, ObjID, posTop, posLeft, hoehe, breite) {

        var elem = document.createElement("div");
        elem.className = "DenonAnzeige";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.height = hoehe;
        elem.style.width = breite;
        elem.innerHTML = "TEST Sender"
        this.ID = elem;
        document.getElementById(ParentID).appendChild(elem);
    }

    update(value) {

        this.ID.innerHTML = value['value'];


    }
}

/* --------------------- Klasse     ---------------------------------------- */
class MainWindow {
    constructor() {

    }

    create(ParentID, ObjID, windowsClass) {

        var elem = document.createElement("Main");
        elem.className = windowsClass;


        document.getElementById(ParentID).appendChild(elem);


    }
}

/* --------------------- Klasse TextScrollBox    ---------------------------------------- */
class TextScrollBox {
    constructor() {
        this.ID = "";
        this.inhalt = "";
        this.logOn = false;
        this.b = "450px";
        this.h = "450px";
    }

    create(ParentID, posTop, posLeft, b = "450px", h = "450px") {
        this.b = b;
        this.h = h;
        var elem = document.createElement("textarea");
        elem.className = "AList";
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.resize = "none";
        elem.style.width = b;
        elem.style.height = h;

        this.ID = elem;

        document.getElementById(ParentID).appendChild(elem);
    }

    update(text) {
        try {
            if (text !== "") {
                this.ID.value = text['value'];
            } else {
                this.ID.value = "no Alarm List";
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

/* --------------------- Klasse IconVarDisplay ---------------------------------------- */
class IconVarDisplay {
    constructor() {
        this.ID = "";
        this.color = "white",
            this.textcolor = "white",
            this.textsize = "14px";
        this.unit = "°C",
            this.state = ""

    }


    create(ParentID, ObjektFarbe, posTop, posLeft, symbol, einheit, ...status) {
        this.color = ObjektFarbe;
        this.unit = einheit;
        this.state = status;


        var elem = document.createElement("div");
        elem.className = "status";
        elem.classList.add(this.color);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = "100px";

        var elem1 = document.createElement("span");
        elem1.className = symbol;
        elem1.style.fontSize = this.textsize;
        elem1.style.color = this.textcolor;

        elem.append(elem1);

        var elem2 = document.createElement("span");
        elem2.style.marginLeft = "15px";
        elem2.innerHTML = "- - -";
        this.ID = elem2;
        elem1.append(elem2);

        document.getElementById(ParentID).appendChild(elem);
    };
    update(value, n) {
        try {
            if (n === "state") {
                this.ID.innerHTML = this.state[value['value']];
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

/* --------------------- Klasse TransVarDisplay ---------------------------------------- */
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
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = "175px";
        elem.style.hight = "150px";
        elem.style.flexDirection = "column";
        elem.style.justifyContent = "center";


        var elem1 = document.createElement("div");
        elem1.innerHTML = title;
        elem1.style.color = "white";
        elem1.style.fontSize = "18px";
        elem1.style.justifyContent = "center";
        elem1.style.paddingBottom = "5px"
        elem.append(elem1);;
        var elem2 = document.createElement("div");
        elem.append(elem2);

        var elem4 = document.createElement("span");
        elem4.style.fontSize = this.textsize;
        elem4.style.color = this.textcolor;
        elem4.style.fontFamily = "dot matrix, arial";
        elem4.style.wordWrap = "break-word";
        elem4.innerHTML = "99" + this.unit;
        this.ID = elem4;
        elem2.append(elem4);

        document.getElementById(ParentID).appendChild(elem);
    };
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

/* --------------------- Klasse Led ---------------------------------------- */
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
        document.getElementById(ParentID).appendChild(container);
    }

    update(state) {
        if (state['value'] == true) {
            this.ID.style.backgroundColor = this.color;
        } else {
            this.ID.style.backgroundColor = "grey";
        }
    }

    delete() {
        var parent = document.getElementById('MainNWCtrl');
        var childs = parent.childNodes;

        this.IDCont.remove();

    }
}





/* --------------------- Klasse flashing Led ---------------------------------------- */
/* --------------------- Version: 04.01.2022 ---------------------------------------- */
class flashLed {
    constructor() {
        this.ID = "";
        this.color = "blue"

    }

    create(ParentID, posTop, posLeft, ObjektFarbe) {

        this.color = ObjektFarbe;
        var elem = document.createElement("div");
        elem.className = "led-box";

        var elem1 = document.createElement("div");
        elem1.className = "led-yellow";
        elem1.style.margin = "0 auto";
        elem1.style.width = "24px";
        elem1.style.height = "24px";
        elem1.style.backgroundColor = this.color;
        elem1.style.WebkitAnimationIterationCount = "infinite";
        elem1.style.WebkitAnimationDuration = "0s";
        elem1.style.WebkitAnimationName = "blinkYellow";
        elem.append(elem1);
        this.ID = elem1;

        document.getElementById(ParentID).appendChild(elem);


    }

    flashBlue() {
        this.ID.style.backgroundColor = "blue";
        this.ID.style.WebkitAnimationName = "blinkBlue";
    }

    flashRed() {
        this.ID.style.backgroundColor = "red";
        this.ID.style.WebkitAnimationName = "blinkRed";
    }

    update(state) {
        if (state['value'] == true) {
            this.ID.style.WebkitAnimationDuration = "1s";
        } else {
            this.ID.style.WebkitAnimationDuration = "0s";
        }
    }
}


/* --------------------- Klasse TVGuide ---------------------------------------- */
class TVguide {
    constructor() {
        this.ID = "";
        this.TVchannel = Array(12);
        this.TVtime = Array(12);
        this.TVprog = Array(12);

    }


    create(ParentID) {

        var elem = document.createElement("div");
        elem.innerHTML = "Program Guide"
        elem.style.paddingTop = "3px";


        for (var i = 0; i < 13; i++) {
            var elem1 = document.createElement("hr");
            elem.append(elem1);
            this.TVchannel[i] = document.createElement("div");
            elem.append(this.TVchannel[i]);
            this.TVtime[i] = document.createElement("div");
            elem.append(this.TVtime[i]);
            this.TVprog[i] = document.createElement("div");
            elem.append(this.TVprog[i]);
        }

        document.getElementById(ParentID).appendChild(elem);
    };

    update(text) {
        try {
            var TVarray = Array(12);
            TVarray = JSON.parse(text['value']);
            for (var i = 0; i < 13; i++) {
                this.TVchannel[i].innerHTML = TVarray[i].DispChName;
                this.TVtime[i].innerHTML = TVarray[i].Time;
                this.TVprog[i].innerHTML = TVarray[i].ProgTitle;
            }
        } catch (error) {
            // alert("error");
        }

    }
}

/* --------------------- Klasse Ctrl Status Button ---------------------------------------- */
class CtrlStatButton {
    constructor() {
        this.id1 = "";
        this.id2 = "";
        this.id3 = "";
        this.label = "";
        this.stat1 = false;
        this.stat2 = false;
        this.statcolor = "transparent";
    }

    create(ParentID, posTop, posLeft, size, label, color, cmdType, command) {
        var elem = document.createElement("div");
        elem.className = "ctrlbutton";
        elem.classList.add(size, color);
        this.label = label;
        this.ID = elem;

        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        if (cmdType == "ctrlWindow") {
            elem.onclick = function () {

                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function (element) {
                    var a = element.className;
                    document.getElementsByClassName(a)[0].style.width = "0px";
                });
                // ctrlWindow umschalten
                document.getElementsByClassName(command)[0].style.width = "26vw";
            }
        } else if (cmdType == "command") {
            elem.setAttribute("onclick", command);
        }

        var elem1 = document.createElement("span");
        elem1.className = "fa fa-circle";
        elem1.style.color = this.statcolor;
        elem1.style.fontSize = "20px";
        elem1.style.padding = "5px";
        elem1.style.cssFloat = "left";
        this.id1 = elem1;

        elem.append(elem1);

        var elem2 = document.createElement("span");
        elem2.innerHTML = this.label;
        elem2.style.fontSize = "20px";
        elem2.style.padding = "5px";
        elem2.style.textAlign = "center";
        this.id2 = elem2;
        elem.append(elem2);

        var elem3 = document.createElement("span");
        elem3.className = "fa fa-circle";
        elem3.style.fontSize = "20px";
        elem3.style.color = this.statcolor;
        elem3.style.cssFloat = "right";
        elem3.style.padding = "5px";
        this.id3 = elem3;
        elem.append(elem3);

        document.getElementById(ParentID).appendChild(elem);
    }

    update(label, stat1, stat2) {

        this.label = label['value'];
        this.id2.innerHTML = this.label;
        if (stat1['value'] === true || stat1['value'] === "Yes") {
            this.statcolor = "lime";
            this.id1.style.color = this.statcolor;
        } else if (stat1['value'] === false || stat1['value'] === "No") {
            this.statcolor = "red";
            this.id1.style.color = this.statcolor;
        }
        if (stat2['value'] === true || stat1['value'] === "Yes") {
            this.statcolor = "lime";
            this.id3.style.color = this.statcolor;
        } else if (stat2['value'] === false || stat2['value'] === "No") {
            this.statcolor = "red";
            this.id3.style.color = this.statcolor;
        }
    }
}

/* --------------------- Klasse CtrlTile ---------------------------------------- */
class CtrlTile {
    constructor() {
        this.ID = "";
        this.color = "cyan";
        this.tileColor = "transparent";
        this.size = "size5";
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
        this.b = "200px";
        this.h = "210px";
        this.btnTextColor0 = "white";
        this.btnTextColor1 = "lime";
    }

    create(ParentID, posTop, posLeft, label, color, tilecolor, BaseIcon, cmdL, cmdR, ...param) {
        this.cmdLeft[0] = cmdL;
        this.cmdRight[0] = cmdR;

        if (param.length > 0) {
            this.state0 = param[0];
            this.state1 = param[1];
            this.leftStat = param[2];
            this.rightStat = param[3];
            this.b = param[4];
            this.h = param[5];
            this.btnTextColor0 = param[6];
            this.btnTextColor1 = param[7];
        }
        this.color = color;
        this.tileColor = tilecolor;
        this.icon = BaseIcon;
        var elem = document.createElement("div");
        //elem.className = "Tile";
        elem.style.backgroundColor = this.tileColor;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.width = this.b;
        elem.style.height = this.h;
        elem.style.border = "thin solid black";
        elem.style.flexDirection = "column";
        this.ID = elem;

        var elemL = document.createElement("div");
        elemL.style.paddingTop = "5px";
        elemL.style.height = "30px";
        elemL.style.backgroundColor = "black";
        elemL.style.color = "lime";
        elemL.innerHTML = label;
        elem.append(elemL);

        var Bild = document.createElement("IMG");
        Bild.src = "images/" + this.icon + "0" + ".png";
        Bild.style.width = "100px";
        Bild.style.height = "100px";
        Bild.style.position = "relative";
        Bild.style.paddingTop = "10px";
        this.id1 = Bild;
        elem.append(Bild);

        var elemTC = document.createElement("div");
        elemTC.style.display = "flex";
        elemTC.style.flexDirection = "row";
        elemTC.style.justifyContent = "space-between";
        elem.append(elemTC);

        var elemTL = document.createElement("span");
        elemTL.innerHTML = this.leftStat;
        elemTL.style.paddingLeft = "5px";
        this.id2 = elemTL;
        elemTC.append(elemTL);

        var elemTR = document.createElement("span");
        elemTR.innerHTML = this.rightStat;
        elemTR.style.paddingRight = "5px";
        this.id3 = elemTR;
        elemTC.append(elemTR);


        var elem1 = document.createElement("div");
        elem1.style.width = this.b;
        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.justifyContent = "space-around";
        elem1.style.padding = "2px";
        elem1.style.position = "absolute";
        elem1.style.top = "70%";
        elem.append(elem1);

        var elem2 = document.createElement("div");
        elem2.className = "ctrlbutton";
        elem2.classList.add(this.size, this.color);
        elem2.innerHTML = this.state0;
        this.id4 = elem2;

        var commandLeft =JSON.stringify(this.cmdLeft);
        elem2.setAttribute("onclick",  'send('+ JSON.stringify(commandLeft) + ')');

        elem1.append(elem2);

        var elem4 = document.createElement("div");
        elem4.className = "ctrlbutton";
        elem4.classList.add(this.size, this.color);
        elem4.innerHTML = this.state1;
        this.id5 = elem4;

        var commandRight =JSON.stringify(this.cmdRight);
        elem4.setAttribute("onclick",  'send('+ JSON.stringify(commandRight) + ')');

        elem1.append(elem4);

        document.getElementById(ParentID).appendChild(elem);
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

/* --------------------- Klasse SetIframe ---------------------------------------- */
class SetIframe {
    constructor() {
        this.ID = "";
        this.startDate = new Date();
        this.differenz = 0;
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, source) {
        //var source = "<p>Some new content inside the iframe!</p>";
        //var source = "<table width='auto'><tr><td width='auto'height='80px'><div><img src=https://a2.tvspielfilm.de/itv_sofa/2019-03-10/5c6affc281896536498e11b9_149.jpg alt='not Found'></div></td><td width='980px'><div style='text-align:left; margin-left:10px;'><b style=color:#C00000;>19:05 | RTL | Vermisst</b><br><small>Rund um den Globus sucht Sandra Eckardt nach verschollenen Personen. Nicht immer gibt’s ein Happy End.  Sechs neue Folgen, so. </small><br></div></td></tr></table>";
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://web.skype.com/");
        ifrm.style.width = sizeW;
        ifrm.style.height = sizeH;
        ifrm.style.position = "relative";
        ifrm.style.top = posTop;
        ifrm.style.left = posLeft;
        //ifrm.srcdoc = "http://google.com/";
        this.ID = ifrm;

        document.getElementById(ParentID).appendChild(ifrm);
    }

    update(urlstring, interval) {

        var endDate = new Date();
        this.differenz = (endDate.getTime() - this.startDate.getTime());
        if (this.differenz > interval['value']) {
            this.ID.srcdoc = urlstring['value'];
            this.startDate = endDate;
        }
    }
}

/* --------------------- Klasse ShowUrlImage ---------------------------------------- */
class ShowUrlImage {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, SourceUrl) {
        var img = document.createElement("img");
        img.src = SourceUrl;
        img.alt = "images/notFound.png";
        img.style.width = sizeW;
        img.style.height = sizeH;
        img.style.position = "absolute";
        img.style.top = posTop;
        img.style.left = posLeft;
        this.ID = img;
         
        document.getElementById(ParentID).appendChild(img);
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


/* --------------------- Klasse ShowCamImage ---------------------------------------- */
class ShowCamImage {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW) {
        var img = document.createElement("img");
        img.src = "";
        img.style.width = sizeW;
        img.style.height = sizeH;
        img.style.position = "absolute";
        img.style.top = posTop;
        img.style.left = posLeft;
        this.ID = img;
        document.getElementById(ParentID).appendChild(img);
  

         
         
    }

    update(image) {
         // create a new timestamp 
       // var timestamp = new Date().getTime();  
        //var queryString = "?t=" + timestamp;    
       //this.ID.src =  SourceUrl + queryString;  
       if(typeof image != "undefined"){
            this.ID.src = image;
       }
    }
}



/* --------------------- Klasse ArrayListBox ---------------------------------------- */
class ArrayListBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, breite, hoehe, farbe, txtColor, title) {

        var container = document.createElement("div");
        this.ID = container;
        container.style.flexDirection = "column";
        container.style.position = "relative";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = farbe + "Light";
        container.style.width = breite;
        container.style.height = hoehe;
        container.style.color = "black";
        container.style.border = "thin solid black";

        var label = document.createElement("div");
        label.style.paddingTop = "3px";
        label.style.height = "30px";
        label.style.backgroundColor = "black";
        label.style.color = txtColor;
        label.innerHTML = title;
        container.append(label);

        var arrBox = document.createElement("table");
        arrBox.style.paddingTop = "10px";
        arrBox.width = "100%";

        this.ID = arrBox;
        container.append(arrBox);

        var elem1 = document.createElement("tr");
        arrBox.append(elem1);

        var elem2 = document.createElement("td");

        elem1.append(elem2);

        var elem3 = document.createElement("div");
        elem3.style.textAlign = "left";
        elem3.innerHTML = "";
        elem2.append(elem3);


        document.getElementById(ParentID).appendChild(container);



    }

    update(ArrDaten) {
        let ADarray =[]; 
        if (typeof (ArrDaten) !='undefined') {
            var AD = ArrDaten.value;
            ADarray = JSON.parse(AD);

            // As long as <ul> has a child node, remove it
            while (this.ID.hasChildNodes()) {
                this.ID.removeChild(this.ID.firstChild);
            }
            var a = this.ID;
        
            ADarray.forEach(function (value) {
                var elem1 = document.createElement("tr");
                a.append(elem1);

                var elem2 = document.createElement("td");
                elem1.append(elem2);

                var elem3 = document.createElement("div");
                elem3.style.textAlign = "left";
                elem3.innerHTML = value;

                elem2.append(elem3);

                a.append(elem1);
            });
        }

    }
}
/* --------------------- Klasse ArraySelectListBox ---------------------------------------- */
class ArraySelectListBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, txtColor) {
        var arrBox = document.createElement("table");
        arrBox.cellPadding = "10px";
        arrBox.cellSpacing = "10px";
        arrBox.width = "100%";
        arrBox.style.position = "relative";
        arrBox.style.top = posTop;
        arrBox.style.left = posLeft;
        arrBox.style.color = txtColor;
        this.ID = arrBox;

        var elem1 = document.createElement("tr");
        arrBox.append(elem1);

        var elem2 = document.createElement("td");

        elem1.append(elem2);

        var elem3 = document.createElement("div");
        elem3.style.textAlign = "left";

        elem3.innerHTML = "";
        elem2.append(elem3);


        document.getElementById(ParentID).appendChild(arrBox);
    }

    update(jsonarray) {
        try {
            var array = JSON.parse(jsonarray['value']);
            // As long as <ul> has a child node, remove it
            while (this.ID.hasChildNodes()) {
                this.ID.removeChild(this.ID.firstChild);
            }
            var a = this.ID;
            array.forEach(function (value, i) {
                var elem1 = document.createElement("tr");
                a.append(elem1);

                var elem2 = document.createElement("td");
                elem1.append(elem2);

                var elem3 = document.createElement("div");
                elem3.style.textAlign = "left";
                elem3.innerHTML = value;
                elem3.onclick = function () {
                    var index = i;
                    send('command(Cook,selected,' + i + ')');
                }
                elem2.append(elem3);

                a.append(elem1);
            });

        } catch (error) {

        }

    }
}

/* --------------------- Klasse TextBox ---------------------------------------- */
class TextBox {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, posLeft, sizeH, sizeW, txtColor, txtSize, bgColor) {

        var elem1 = document.createElement("div");
        var txt = document.createElement("textarea");
        txt.style.color = txtColor;
        txt.style.fontSize = txtSize;
        txt.style.backgroundColor = bgColor;
        txt.style.width = sizeW;
        txt.style.height = sizeH;
        txt.style.position = "relative";
        txt.style.top = posTop;
        txt.style.left = posLeft;
        txt.innerHTML = "";
        this.ID = txt;
        elem1.append(txt);


        document.getElementById(ParentID).appendChild(elem1);
    }

    update(text) {
        if (typeof text != 'undefined'){

      
            let x = text['value'];
            let y = x.substring(0,8);
            if( y != "Zwiebeln"){
               let A = text['value'];
            }
            this.ID.innerHTML = text['value'];
        }
    }
}

/* --------------------- Klasse HeadLine ---------------------------------------- */
class HeadLine {
    constructor() {
        this.ID = "";
    }

    create(ParentID, posTop, bgcolor, headline) {
        var elem1 = document.createElement("header");
        elem1.style.position = "relative";
        elem1.style.top = posTop;
        elem1.style.backgroundColor = bgcolor;
        var elem2 = document.createElement("h1");
        elem2.innerHTML = headline;
        elem2.style.fontSize = "18px";
        elem1.append(elem2);
        this.ID = elem2;
        document.getElementById(ParentID).appendChild(elem1);
    }

    update(headline) {
        if (typeof (headline) != 'undefined' && headline['value'] != null) {
            this.ID.innerHTML = headline['value'];
        } else {
            this.ID.innerHTML = "????";
        }

    }
}


/* --------------------- Klasse Clock ---------------------------------------- */
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

/* --------------------- Klasse WeatherLabel ---------------------------------------- */
/* --------------------- Version: 04.02.2022 ---------------------------------------- */
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
        container.style.color = "white";

        var secA = document.createElement("section");
        secA.className = "weatherframe";
        secA.style.height = frameheight;
        container.append(secA);
        var titel = document.createElement("div");
        titel.innerHTML = this.day;
        titel.style.fontSize = "22px";
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
        if(day>0){
            this.source.src = w[day]['icon'];
            this.day.innerHTML = w[day]['weekday'];
            this.tempMax_ID.innerHTML = w[day]['temperatureHigh'];
            this.tempMin_ID.innerHTML = w[day]['temperatureLow'];
            this.windspeed_ID.innerHTML = w[day]['windSpeed'];
            this.windGust_ID.innerHTML = w[day]['windGust'];
            this.cloudCover_ID.innerHTML = w[day]['cloudCover'];
            this.humidity_ID.innerHTML = w[day]['humidity'];
        }
        if(day == 0){
            this.source.src = w['icon'];
            this.day.innerHTML = 'Aktuell';
            this.tempMax_ID.innerHTML = w['apparentTemperature'];
            this.tempMin_ID.innerHTML = w['temperature'];
            this.windspeed_ID.innerHTML = w['windSpeed'];
            this.windGust_ID.innerHTML = w['windGust'];
            this.cloudCover_ID.innerHTML = w['cloudCover'];
            this.humidity_ID.innerHTML = w['humidity'];
            this.ozone_ID.innerHTML = w['ozone'];
            this.uvIndex_ID.innerHTML = w['uvIndex'];
            this.summary_ID.innerHTML = w['summary'];
        }
        /*
        if (ozone['value']) {

        }
        */
    }


}



/* --------------------- Klasse Area ---------------------------------------- */
class Area {
    constructor() {

    }

    createMain(MainID, bgcolor) {
        var elem1 = document.createElement("Main");
        elem1.id = MainID;
        elem1.className = MainID;
        elem1.classList.add(bgcolor, "area", "areaMain");

        document.getElementById("Container").appendChild(elem1);
    }

    createCtrl(CtrlID, bgcolor) {
        var elem2 = document.createElement("Ctrl");
        elem2.id = CtrlID;
        elem2.className = CtrlID;
        elem2.classList.add(bgcolor, "area", "areaCtrl");

        document.getElementById("Container").appendChild(elem2);
    }

    createOverview(OVID, bgcolor) {
        var elem1 = document.createElement("Main");
        elem1.id = OVID;
        elem1.className = OVID;
        elem1.classList.add(bgcolor, "area", "areaMain");

        document.getElementById("Container").appendChild(elem1);
    }
}




/* --------------------- Klasse MoveSwitch - Schiebeschalter -------------------------------------- */
class MoveSwitch {
    constructor() {

    }
    create(ParentID, posTop, posLeft) {
        var container = document.createElement("div");
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;

        var elem = document.createElement("label");
        elem.className = "MoveSwitch";
        container.append(elem);
        var elem1 = document.createElement("Input");
        elem1.type = "checkbox";
        elem.append(elem1);
        var elem2 = document.createElement("div");
        elem2.className = "MoveSlider";
        elem.append(elem2);
        document.getElementById(ParentID).appendChild(container);
    }
}

/* --------------------- Klasse ButtonSlider -------------------------------------- */
class ButtonDropDown {
    constructor() {
        this.TagArray = [];
        this.contID = "";
        this.noArray = 0;
    }

    create(ParentID, posTop, posLeft, breite, hoehe, farbe) {
        var container = document.createElement("div");

        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.height = hoehe;
        container.style.width = breite;
        container.style.backgroundColor = "grey";
        container.className = "select-wrapper fa fa-angle-down";

        var cont = document.createElement("select");
        container.appendChild(cont);
        this.contID = cont;




        document.getElementById(ParentID).appendChild(container);
    }

    init(NameArray, cmd) {
        var x = this.contID;
        this.TagArray = NameArray;
        this.noArray = this.TagArray.length;
        this.TagArray.forEach(function (item, i) {
            var elem = document.createElement("option");

            elem.innerHTML = item;

            x.appendChild(elem);
        })
    }

    update(value) {

    }
}

/* --------------------- TEMP Klasse ButtonSlider -------------------------------------- */
/*
class ButtonSlider {
    constructor() {
        this.TagArray = [];
        this.BtnID = "";
        this.containerID = "";
        this.cont = "";
        this.noArray = 0;
    }

    create(ParentID, posTop, posLeft, breite, hoehe, farbe) {
        var container = document.createElement("div");
        container.id = "btnSlideCont";
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.width = breite;
        container.style.height = hoehe;
        container.className = "Btnslider";
        container.classList.add(farbe);
        this.containerID = container;

        document.getElementById(ParentID).appendChild(container);
    }

    init(NameArray, cmd) {
        var x = this.containerID;
        this.TagArray = NameArray;
        this.noArray = this.TagArray.length;
        this.TagArray.forEach(function (item, i) {
            var elem = document.createElement("span");
            elem.className = "Btnslide";
            elem.innerHTML = item;
            elem.onclick = function () {
                send('command(upnp,' + cmd + ',' + i + ')');
            }
            x.appendChild(elem);
        })

    }
    */
/* --------------------- Klasse ButtonSlider -------------------------------------- */
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
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.style.width = breite;
        container.style.height = hoehe;
        container.style.borderRadius = "5px";
        container.style.display = "flex";
        container.style.flexDirection = "row";

        var elemLeft = document.createElement("div");
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
        container.appendChild(elemLeft);

        var elem1 = document.createElement("div");
        elem1.style.width = "60%";
        elem1.style.height = parseInt(hoehe, 10) - parseInt("2px", 10) + "px";
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
        container.appendChild(elem1);

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

        document.getElementById(ParentID).appendChild(container);
    }

    update(name) {
        this.containerID.innerHTML = name['value'];
    }
}

/* --------------------- class Icon Button ---------------------------------------- */
class BtnIcon {
    constructor() {
        this.ID = "";
        this.labelcolor = "lime";
        //optionale Parameter
        this.b = "200px";
        this.h = "100px";
        this.zeichengr = "24px";
    }

    create(ParentID, posTop, posLeft, color, IName, Iscale, label, fkt, ...param) {

        this.b = param[0];
        this.h = param[1];
        this.zeichengr = param[2];

        var container = document.createElement("div");
        this.ID = container;
        container.style.position = "absolute";
        container.style.left = posLeft;
        container.style.top = posTop;
        container.className = color;
        container.style.fontSize = this.zeichengr;
        container.style.width = this.b;
        container.style.height = this.h;
        container.style.color = this.labelcolor;

        container.setAttribute("onclick", fkt);

        var elem1 = document.createElement("div");
        elem1.style.paddingTop = "5px";
        elem1.style.height = "25px";
        elem1.style.backgroundColor = "black";
        elem1.innerHTML = label;
        container.append(elem1)

        var elem2 = document.createElement("div");
        container.append(elem2)

        var elem3 = document.createElement("img");
        elem3.style.transform = "scale(" + Iscale + ")";
        elem3.style.paddingBottom = "10px";
        elem3.className = "icon";
        var itype = IName.match(/\.png\b|\.jpg\b/g);
        if (itype) {
            elem3.src = "images/" + IName;
        } else {
            elem3.src = IName;
        }

        container.append(elem3)

        document.getElementById(ParentID).appendChild(container);
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

/* --------------------- class clock ---------------------------------------- */
class clock {
    constructor() {
        this.uhr = "";
        this.datum = "";

    }

    create(ParentID, posTop, posLeft, breite, hoehe, bgclass, fsTime, fsDate, timeColor) {
        var container = document.createElement("div");
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

        /*container.style.backgroundColor = bgcolor; */
        /*
                container.style.padding = "25px";
                container.style.maxWidth = "350px";
                container.style.width = "100%";
                container.style.textAlign = "center";
                container.style.borderRadius = "5px";
                container.style.margin = "0 auto";
                container.style.marginTop = "15%";
        */

        var clock = document.createElement("div");
        this.uhr = clock;
        clock.idname = "clock";
        clock.style.fontSize = fsTime;

        container.append(clock);

        var date = document.createElement("div");
        this.datum = date;
        date.idname = "date"
        date.style.fontSize = fsDate;
        container.append(date);

        document.getElementById(ParentID).appendChild(container);
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
        /*
        var time = setTimeout(
            this.startTime(), 1500)

            */
    }

}

/* --------------------- Klasse IconSelectList ---------------------------------------- */
class DynIconList {
    constructor() {
        this.room = "";
     
    }

    create(ParentID, source, iconsize = "110px", ...param) {
        if (param[0]) {
            this.room = param[0];
        }
       
        // Liste einlesen
        var Liste = new data();
        switch (source) {
            case "CD":
                var SourceListJson = Liste.getMusicLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "CeolCD":
                var SourceListJson = Liste.getMusicLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "TV":
                var SourceListJson = Liste.getTVchannels();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "IRadio":
                var SourceList = Liste.getIRadiochannels();
                break;
            case "Audio":
                var SourceListJson = Liste.getAudiobookLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "Video":
                var SourceListJson = Liste.getVideoLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "Foto":
                var SourceListJson = Liste.getFotoLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "CeolAudio":
                var SourceListJson = Liste.getAudiobookLib();
                var SourceList = Array();
                var SourceList1 = JSON.parse(SourceListJson);
                SourceList = SourceList1['media'];
                break;
            case "SonosRadio":
                //Daten sind als Array abgelegt
                var SourceList = Liste.getSonosRadioLib();
                break;  
            default:
        }

        SourceList.forEach(function (item) {
            var elem = document.createElement("img");
/*
            switch (source) {
                case "TV":
                    var icon = item["icon"];
                    break;
                case "IRadio":
                    var icon = item["icon"];
                    break;
                case "CD":
                    var icon = item["icon"];
                    break;
                case "Audio":
                    var icon = item["icon"];
                    break
                case "Video":
                    var icon = item["icon"];
                    break
                case "Foto":
                    var icon = item["icon"];
                    break
                case "CeolCD":
                    var icon = item["icon"];
                    break;
                case "CeolAudio":
                    var icon = item["icon"];
                    break
                default:
            }
*/
            var icon = item["icon"];
            
            elem.className = "iconTV";
            elem.style.width = iconsize;
            elem.style.height = iconsize;
            elem.id = source + item["No"];

            elem.style.padding = "2px";
            if (source === "TV") {
                elem.src = "images/Sender/" + icon;
            } else if (source === "IRadio") {
                elem.src = "images/RadioStation/" + icon;
            } else if (source === "CD") {
                elem.src = icon;
            } else if (source === "Video") {
                elem.src = icon;
            } else if (source === "Foto") {
                elem.src = icon;
            } else if (source === "CeolCD") {
                elem.src = icon;
            } else if (source === "CeolAudio") {
                elem.src = icon;
            } else {
                elem.src = icon;
            }
            
            elem.onclick = function () {
                var t = param[0];
                cmd = [];
                var test = SourceList;
                var index = SourceList.findIndex((item) => item.selected === true);
                if (index !== -1) {
                    SourceList[index]['selected'] = false;
                    var ObjID = source + index;
                    var elem0 = document.getElementById(ObjID);
                    elem0.classList.add("iconTV");
                    elem0.classList.remove("iconTVToggle");
                }
                elem.classList.add("iconTVToggle");
                elem.classList.remove("iconTV");
                item['selected'] = true;
                if (source === "TV") {
                    cmd[0] = "func(STV_T_setChannelbyName, 44308," + item['sender'] + ")";
                } else if (source === "IRadio") {
                    cmd[0] = 'func(CEOL_SetRadioChannel,49535,' + item['FV']+ ')';
                } else if (source === "SonosRadio") {
                    
                    //var cmd1 = "command(Sonos" +  t + ",Channel," + item['Sender'] +")";
                    cmd[0] = 'func(SNS_SetRadio,33732,' + item['Sender'] + ')';
                    cmd[1] = 'func(SNS_Play,33732)';
                    
                    
                } else if (source === "CD") {
                    //var cmd1 = "command(upnp,loadCDPlaylist," + item['playlistname'] + ")";
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Musik)';
                    
                } else if (source === "Audio") {
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Audio)';
                } else if (source === "Video") {
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Video)';
                } else if (source === "Foto") {
                    cmd[0] = 'func(UPNP_loadPlaylist,19824,' + item['playlistname'] + ',Foto)';
                } else if (source === "CeolCD") {
                    cmd[0] = 'func(CEOL_loadPlaylist,49535,' + item['playlistname'] + ',CD)';
                } else if (source === "CeolAudio") {
                    cmd[0] = 'func(CEOL_loadPlaylist,49535,' + item['playlistname'] + ',Audio)';
                }
                //send(cmd1);
                
                var command =JSON.stringify(cmd);
                send(command);
                //send(cmd1 + '§' + cmd2 + '§' + cmd3);
            };

            document.getElementById(ParentID).appendChild(elem);
        });

    }
}


/* --------------------- Klasse IconSelectList ---------------------------------------- */
class switchCtrl {
    constructor() {

    }
    init(_CtrlWindow) {
        // alle Ctrl auf 0px verkleinern 
        var Ctrl = document.getElementsByTagName("Ctrl");
        var MCtrlWindow = Array.from(Ctrl);
        MCtrlWindow.forEach(function (element) {
            var a = element.className;
            document.getElementsByClassName(a)[0].style.width = "0px";
        });
        // ctrlWindow umschalten
        document.getElementsByClassName(_CtrlWindow)[0].style.width = "26vw";
    }
}

/* --------------------- Klasse AwesomeFont Symbol ---------------------------------------- */
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

        document.getElementById(ParentID).appendChild(elem);
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


/* --------------------- Klasse Chart ---------------------------------------- */
class MyChart {
    constructor() {
        this.cmd = [];
        
        this.C = "";
    }



    create(ParentID, scriptID, unit1, unit2 = '', ds0, ds1 = '', ds2 = '', ...param) {
        var b = "600px";
        var h = "300px";
        var top = "250px";
        var left = "10px";

        if (param[0]) {
            b = param[0];
        }
        if (param[1]) {
            h = param[1];
        }
        if (param[2]) {
            top = param[2];
        }
        if (param[3]) {
            left = param[3];
        }
        this.cmd[0] = 'func(IPS_RunScript,'+scriptID+')';
        var container = document.createElement("div");
        container.style.width = b;
        container.style.height = h;
        container.style.position = "absolute";
        container.style.top = top;
        container.style.left = left;

        var elem1 = document.createElement("canvas");
        elem1.id = "line-chart";
        elem1.className = "s";


        elem1.style.backgroundColor = "black";

         
         var command =JSON.stringify(this.cmd);

     
        elem1.setAttribute("onclick",  'send('+ JSON.stringify(command) + ')');

       
        
       // elem1.setAttribute("onclick", "send('command(IPS_RunScript,33023)')");
        container.append(elem1);

        document.getElementById(ParentID).appendChild(container);


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


/* --------------------- Class Message -------------------------------------- */
/* -------------------------- Version:1.20.08.2020 -------------------------- */

class Message {
    constructor() {
        this.ID = "";
        this.IDText = "";
        this.b = "400px";
        this.h = "350px";
        //optionale Parameter

    }
    create(ParentID, posTop, posLeft, breite, hoehe, messageType, cmd0, value, ...param) {

        this.b = breite;
        this.h = hoehe;

        if (param.length > 1) {

        }
        var container = document.createElement("div");
        this.ID = container;
        container.className = "glass";
        container.style.position = "absolute";
        container.style.top = posTop;
        container.style.left = posLeft;
        container.style.width = this.b;

        container.onclick = function () {
            var cmd =[];
            cmd[0] = 'func(SetValue,' + cmd0 + ',' + value + ')';
            send(JSON.stringify(cmd));
            container.style.height = "0px";
        }

        var elemicon = document.createElement("div");
        if (messageType == "info") {
            elemicon.className = "fa fa-info-circle";
            elemicon.style.color = "lime";
        }
        if (messageType == "warn") {
            elemicon.className = "fa fa-exclamation-circle";
            elemicon.style.color = "yellow";
        }
        if (messageType == "notify") {
            elemicon.className = "fa fa-exclamation";
            elemicon.style.color = "blue";
        }
        elemicon.style.fontSize = "56px";

        elemicon.style.cssFloat = "left";
        elemicon.style.padding = "5px";
        container.appendChild(elemicon);

        var elemText = document.createElement("div");
        this.IDText = elemText;
        elemText.style.padding = "10px";
        elemText.style.lineHeight = "20px";
        elemText.innerHTML = ""
        //
        container.appendChild(elemText);


        if (ParentID == "body") {
            document.body.appendChild(container);
        } else {
            document.getElementById(ParentID).appendChild(container);
        }
    }

    set(state, text) {
        if (state == true) {
            this.ID.style.height = this.h;
            this.IDText.innerHTML = text;
        } else {
            this.ID.style.height = "0px";
            this.IDText.innerHTML = "";
        }
    }
}

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
        if (value['value'] === true) {
            this.ID1.style.color = "lime";
        } else {
            this.ID1.style.color = "white";
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
};


/* --------------------- Klasse Video ---------------------------------------- */
class MyVideo {
    constructor() {

        this.C = "";
    }


    /*
    <html> 
<body> 

<div style="text-align:center"> 
  <button onclick="playPause()">Play/Pause</button> 
  <button onclick="makeBig()">Big</button>
  <button onclick="makeSmall()">Small</button>
  <button onclick="makeNormal()">Normal</button>
  <br><br>
  <video id="video1" width="420">
    <source src="http://192.168.178.9:32469/object/7a457d8a88a4ef079cad/file.mp4" type="video/mp4">
    <source src="mov_bbb.ogg" type="video/ogg">
    Your browser does not support HTML5 video.
  </video>
</div> 

<script> 
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 
</script> 

</body> 
</html
</br>
*/
}