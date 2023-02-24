 /* --------------------- Klasse X Scroll Bar -------------------------------------- */
class Glides extends ScrollBar {
    constructor() {
       super();
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
       this.activeContainer = 0;
       
    }

 
 

    styleItem(x, menu, icon, text, Ccolor){
        var elem1 = document.createElement("div");
        this.item[x].append(elem1);
        
        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.height = this.itemHeight;    
        elem1.style.width = this.contWidth;
        //Linker Icon Container
        var left = document.createElement("div");
        elem1.append(left);
        left.style.minWidth = this.itemHeight;
        //icon in icon container einfügen
        var elem2 = document.createElement("img");
        left.append(elem2);
        elem2.src = icon;
        elem2.alt = syserror;
        elem2.className = "MM_icon";
        //rechter Container für Text und Variablen    
        var right = document.createElement("div");
        elem1.append(right);
        right.style.width = (parseInt(this.contWidth) - parseInt(this.itemHeight)) +"px";
        //Anzeigefeld mit Titel mittig
        if(menu == "SM"){
            right.style.paddingTop = (parseInt(this.itemHeight)/2.2) + "px";
            right.style.paddingLeft = "10px";
            right.style.fontSize = (parseInt(this.itemHeight)/4.5) + "px";
            right.innerHTML = text;

        }
        //Anzeigefeld mit Titel oben und 4 Variablen unten
        if(menu == "MM"){
            right.style.display = "flex";
            right.style.flexDirection = "column";
            
            //Beschriftung
            var rightTop = document.createElement("div");
            right.append(rightTop);
            rightTop.style.height = "60%";
            rightTop.style.paddingLeft = "10px";
            rightTop.innerHTML = text;
            rightTop.className = "room";
            //4 x Variablen 
            var rightBot = document.createElement("div");
            right.append(rightBot);
            rightBot.style.display = "flex";
            rightBot.style.flexDirection = "row";
            rightBot.style.justifyContent = "space-around";
            rightBot.style.height = "40%";
            rightBot.className = "text";
            


            var rightBot1 = document.createElement("span");
            this.ObjValue1 = rightBot1;
            var rightBot2 = document.createElement("span");
            this.ObjValue2 = rightBot1;
            var rightBot3 = document.createElement("span");
            this.ObjValue3 = rightBot1;
            var rightBot4 = document.createElement("span");
            this.ObjValue4 = rightBot1;
            rightBot.append(rightBot1);
            rightBot.append(rightBot2);
            rightBot.append(rightBot3);
            rightBot.append(rightBot4);
        }

        
       

        


        this.item[x].className = Ccolor;
    }

    fadeOffAll(menus){
        menus.foreach(function(item){item.fadeOff("left")})
    }

    clickMainMenu(submenu){
         
      
        Coverbar.fadeIn();
        Roombar.fadeWidth("90px");
        Mainbar.fadeOut();
        Ctrlbar.fadeOut();
        var CoverbarW1 = (parseInt(this.screenW) -350 - 2) + "px";

        var CoverbarW3 = (parseInt(this.screenW) -90 -2 -2 -320) + "px";

        Coverbar.fadeWidth(CoverbarW1);
        
        Coverbar.moveTo("352px");
            for(let i = 0; i < submenu.length; i++) {
                submenu[i].fadeWidth("0px") ;
            }
    
        switch (this.itemNo) {
            case 0: 
            //Hauptbild
                Roombar.fadeWidth("350px");
             
                Coverbar.moveTo("352px");
                //Abstand ist Abstand Linker Rand = 0px + Breite Roombar = 350px" + Spalte = 2px
                //= Screenw- 352px = 1098px - 352px = 746px
                
                Coverbar.fadeWidth(CoverbarW1);
                
 
                Coverbar.jumpToItem("0");
                this.loadContentFull("0", "COVER");
                 
                break;
            case 1:  
            //Floorplan
                //unsichtbar machen und in den Hintergrund schieben
                Mainbar.fadeOut();
                Ctrlbar.fadeOut();
                Coverbar.moveTo("90px");
                var CoverbarW2 = (parseInt(this.screenW) -90 - 2) + "px";
                Coverbar.fadeWidth(CoverbarW2);
             
                Coverbar.jumpToItem("1");
                this.loadFloorplan("1");

                break;
            case 2:  
                submenu[1].fadeWidth("320px");
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("2");
                Coverbar.setItemImage("2", "Security.jpg");
                break;
            case 3:  
                submenu[2].fadeWidth(this.contWidth);
                //
                //Mainbar.fadeOut();

                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("3");
                Coverbar.setItemImage("3", "wohnzimmer.jpg");

                break;
            case 4:  
                submenu[3].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("4");
                Coverbar.setItemImage("4", "Arbeitszimmer.jpg");
                break;
            case 5:  
                submenu[4].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("5");
                Coverbar.setItemImage("5", "Schlafzimmer.jpg");
                break;
            case 6:  
                submenu[5].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("6");
                Coverbar.setItemImage("6", "Kueche.jpg");
                break;
            case 7:  
                submenu[6].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("7");
                Coverbar.setItemImage("7", "Balkon.webp");
                break;
            case 8:  
                submenu[7].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("8");
                Coverbar.setItemImage("8", "Badezimmer.jpg");
                break;
            case 9:  
                submenu[8].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("9");
                Coverbar.setItemImage("9", "Diele.jpg");
                break;
            case 10:  
                submenu[9].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("10");
                Coverbar.setItemImage("10", "AZ.jpg");
                break;
            case 11:  
                submenu[10].fadeWidth(this.contWidth);
             
                Coverbar.jumpToItem("11");
                Coverbar.setItemImage("11", "Multimedia.jpg");
                break;
            case 12:  
                submenu[11].fadeWidth(this.contWidth);
                Coverbar.moveTo((90 + 320) + "px");
                Coverbar.fadeWidth(CoverbarW3);
                Coverbar.jumpToItem("12");
                Coverbar.setItemImage("12", "Netzwerk.jpg");
                break;
            case 13:  
                submenu[12].fadeWidth(this.contWidth);
                break;
            case 14:  
                submenu[13].fadeWidth(this.contWidth);
                break;
            case 15:  
                submenu[14].fadeWidth(this.contWidth);
                break;
            default:  
            
         }
    }

    clickSubMenu(mainmenu, Main, Ctrl){
        /* ------------------ aktuelle ClickPosition des MainMenus ------------------ */
        //Schaltfläche der Hauptmenuleiste (Roombar) auf die geklickt wurde
        var MM = mainmenu.itemNo;
        var itemColor = "bg" + mainmenu.item[MM].className;
        //Cover ausblenden
        Coverbar.fadeOut();

        //Hauptmenuleiste (Roombar) verkürzen
        Roombar.fadeWidth("90px");
        //  --------------------------- Position berechnen --------------------------- 
            var SS = 0;
            // Alle Elemente bis zur geklickten Hautmenuleiste zählen
            for (let i = 0; i < MM-1; i++) {
                var SS = SS + submenus[i].item.length
            }
            // dann noch die Elemte der geklickten Submenuleiste dazuzählen
            var posMain = SS + this.itemNo;
            this.activeContainer = posMain;
            //temporärer Seitennummer Anzeige
            VarPageNo.update(posMain);
            //SubMenuleiste verkürzen
            submenus[Roombar.itemNo-1].fadeWidth("90px");
            //auf das zugehörige Element der Mainbar springen
            


            Mainbar.jumpToItem(posMain);
            //einfärben
            Mainbar.setItemStyle(posMain,"",itemColor);
            //Mainbar einblenden
            Mainbar.fadeIn();
            //auf die selbe Element  Position wie Mainbar springen
            Ctrlbar.jumpToItem(posMain);
            //einfärben
            Ctrlbar.setItemStyle(posMain,"",itemColor);

            if(Ctrlbar.item[posMain]['off'] == false){
                // Ctrlbar einblenden
                Ctrlbar.fadeIn();
                var w = parseInt(dimMainBarWidth) + 'px';
                Mainbar.fadeWidth(w);  
            }
            else{
                //Ctrlbar einblenden
                Ctrlbar.fadeOut(); 
                var w = parseInt(dimMainBarWidth) + parseInt(dimCtrlBarWidth) + 'px';
                Mainbar.fadeWidth(w);

            }
            
            //Inhalte in Main und Ctrlbar laden 
            this.loadContent(posMain);   
    }

    clickWindow(TabBar,menu){
        /* ------------------ aktuelle ClickPosition des MainMenus ------------------ */
        var SS = TabBar.item;
        var posMenu = menu.itemNo;
        this.loadWindow(posMenu,"");
        TabBar.jumpToItem(posMenu);
           
    }

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
    }



}

 