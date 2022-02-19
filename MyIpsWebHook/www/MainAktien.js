//<!-- *************************************************************************************   -->
//<!--  ************************         Main - Aktien              ************************   -->
//<!-- *************************************************************************************   -->
//<!-- ************************ Aktien************************ -->
//<!-- <Main id="MainCamWZ"  class="CamWZ"></Main> -->

 
    var winaktien = new Area();
    winaktien.createMain("MainAktien", "bgCyan");
    //--------------------------------------------------------------------------------------
    /*
    var graphUlfR = new MyChart();
    var ds0D = new Array();
    var ds1D = new Array();
    var ds2D = new Array();
    ds0D['label'] = "Umlafrendite";
    ds1D['label'] = "-";
    ds2D['label'] = "-";
    ds0D['id'] = "A";
    ds1D['id'] = "A";
    ds2D['id'] = "A";
    ds0D['color'] = 'red';
    ds1D['color'] = 'blue';
    ds2D['color'] = 'white';

    graphUlfR.create("MainAktien", '12760', '', '', ds0D, "", "", '600px', '200px', '5px', '10px');
 */
    var container = document.createElement("div");
    container.id = "line-TopxScrollContainer";
    container.className = "yScrollContainer";

    var elem1 = document.createElement("p");
    elem1.innerHTML = "1";
    var elem2 = document.createElement("p");

    var elem3 = document.createElement("p");

    var elem4 = document.createElement("p");

    var elem5 = document.createElement("p");

    var elem6 = document.createElement("p");

    var elem7 = document.createElement("p");

    var elem8 = document.createElement("p");

    var elem9 = document.createElement("p");

    var elem10 = document.createElement("p");

   

    container.append(elem1);
    container.append(elem2);
    container.append(elem3);
    container.append(elem4);
    container.append(elem5);
    container.append(elem6);
    container.append(elem7);
    container.append(elem8);
    container.append(elem9);
    container.append(elem10);


    document.getElementById("MainAktien").appendChild(container);


//<!-- *************************************************************************************   -->
//<!--  ************************         Ctrl - Aktien              ************************   -->
//<!-- *************************************************************************************   -->
//<!-- <Ctrl id="MainLightSZCtrl"  class="LightSZCtrl"></Ctrl> -->
 
    var Ctrlwinaktien = new Area();
    Ctrlwinaktien.createCtrl("MainAktienCtrl", "bgCyan");
    //--------------------------------------------------------------------------------------
    var DisUmlfRendite = new StateDisplay();
    DisUmlfRendite.create("MainAktienCtrl", "blueLight", "%", "50px", "20px", "60px", "202px", "20px",
        "Umlaufrendite", "number");
 