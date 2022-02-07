//<!-- *************************************************************************************   -->
//<!--  ************************         Main - Aktien              ************************   -->
//<!-- *************************************************************************************   -->
//<!-- ************************ Aktien************************ -->
//<!-- <Main id="MainCamWZ"  class="CamWZ"></Main> -->

 
    var winaktien = new Area();
    winaktien.createMain("MainAktien", "bgCyan");
    //--------------------------------------------------------------------------------------
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
 