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
    
       
    }

    styleItem(x, menu, icon, text, Ccolor){
        var elem1 = document.createElement("div");
        elem1.style.display = "flex";
        elem1.style.flexDirection = "row";
        elem1.style.height = this.itemHeight;
  
        

        var left = document.createElement("div");
        left.style.minWidth = "90px";
        
        var elem2 = document.createElement("img");
        left.append(elem2);
        elem2.src = icon;
        elem2.alt = syserror;
        
        elem2.className = "MM_icon";
            
        var right = document.createElement("div");
        
        
        right.style.width = "320px";
        right.style.display = "flex";
        right.style.flexDirection = "column";

        var rightTop = document.createElement("div");
        this.des = rightTop;
        if(menu == "MM"){
            rightTop.style.height = "60%";
        }
        else{
            rightTop.style.height = "100%";
        }
        rightTop.innerHTML = text;
        rightTop.className = "room";
        right.append(rightTop);



        if(menu == "MM"){
            var rightBot = document.createElement("div");
            rightBot.style.display = "flex";
            rightBot.style.flexDirection = "row";
            rightBot.style.justifyContent = "space-around";
            rightBot.style.height = "40%";
            rightBot.className = "text";
            right.append(rightBot);


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

        elem1.append(left);
        elem1.append(right);

        left.append(elem2);

        this.item[x].append(elem1);
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
              
                Mainbar.fadeOut();
              
                 
                Ctrlbar.fadeOut();
           
             
                Coverbar.jumpToItem("1");
                this.loadFloorplan("1");

                break;
            case 2:  
                 
                submenu[1].fadeWidth("320px");

                Coverbar.jumpToItem("2");
                Coverbar.setItemImage("2", "Security.jpg");
                break;
            case 3:  
                submenu[2].fadeWidth("320px");
                //
                //Mainbar.fadeOut();

               // Coverbar.moveTo("415px");
                Coverbar.jumpToItem("3");
                Coverbar.setItemImage("3", "wohnzimmer.jpg");

                break;
            case 4:  
                submenu[3].fadeWidth("320px");
                //Coverbar.moveTo("415px");
             
                Coverbar.jumpToItem("4");
                Coverbar.setItemImage("4", "Arbeitszimmer.jpg");
                break;
            case 5:  
                submenu[4].fadeWidth("320px");
               
                Coverbar.jumpToItem("5");
                Coverbar.setItemImage("5", "Schlafzimmer.jpg");
                break;
            case 6:  
                submenu[5].fadeWidth("320px");
             
                Coverbar.jumpToItem("6");
                Coverbar.setItemImage("6", "Kueche.jpg");
                break;
            case 7:  
                submenu[6].fadeWidth("320px");
          
                Coverbar.jumpToItem("7");
                Coverbar.setItemImage("7", "Balkon.webp");
                break;
            case 8:  
                submenu[7].fadeWidth("320px");
         
                Coverbar.jumpToItem("8");
                Coverbar.setItemImage("8", "Badezimmer.jpg");
                break;
            case 9:  
                submenu[8].fadeWidth("320px");
     
                Coverbar.jumpToItem("9");
                Coverbar.setItemImage("9", "Diele.jpg");
                break;
            case 10:  
                submenu[9].fadeWidth("320px");
          
                Coverbar.jumpToItem("10");
                Coverbar.setItemImage("10", "AZ.jpg");
                break;
            case 11:  
                submenu[10].fadeWidth("320px");
             
                Coverbar.jumpToItem("11");
                Coverbar.setItemImage("11", "Multimedia.jpg");
                break;
            case 12:  
                submenu[11].fadeWidth("320px");
             
                Coverbar.jumpToItem("12");
                Coverbar.setItemImage("12", "Netzwerk.jpg");
                break;
            case 13:  
                submenu[12].fadeWidth("320px");
                break;
            case 14:  
                submenu[13].fadeWidth("320px");
                break;
            case 15:  
                submenu[16].fadeWidth("320px");
                break;
            default:  
            
         }
    }

    clickSubMenu(mainmenu, Main, Ctrl){
        /* ------------------ aktuelle ClickPosition des MainMenus ------------------ */
        var MM = mainmenu.itemNo;
        var itemColor = "bg" + mainmenu.item[MM].className;
        Coverbar.fadeOut();

      
            Roombar.fadeWidth("90px");
           //  --------------------------- Position berechnen --------------------------- 
            var SS = 0;
            for (let i = 0; i < MM-1; i++) {
                var SS = SS + submenus[i].item.length
            }
            var posMain = SS + this.itemNo;
            submenus[Roombar.itemNo-1].fadeWidth("90px");

            Mainbar.jumpToItem(posMain);

            Mainbar.setItemStyle(posMain,"",itemColor);
            
            Mainbar.fadeIn();
            Ctrlbar.jumpToItem(posMain);
            
            Ctrlbar.setItemStyle(posMain,"",itemColor);
            
            Ctrlbar.fadeIn();
            Mainbar.moveTo("184px");
            Ctrlbar.moveTo("59%");
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

 