//<!-- ----------------------------------------------------------------------- -->
//<!--            Fenster und Luftfeuchtigkeit Wohnimmer                       -->
//<!-- ----------------------------------------------------------------------- -->
 
    var MainFWZ = new Area();
    MainFWZ.createMain("MainFWZ", "bgCyan");
    //-------------------------------------------------
 
    var iWindowWZ = new DynIcon("door", "bin", false);
    iWindowWZ.create("MainFWZ", "40px", "30px", "170px", "170px");


    var WZDisHumid = new StateDisplay();
    WZDisHumid.create("MainFWZ", "cyanLight", "%rel", "150px", "300px", "60px", "202px", "20px",
        "rel. Feuchte",
        "number");

    var WZTemp = new StateDisplay();
    WZTemp.create("MainFWZ", "cyanLight", "°C", "50px", "300px", "60px", "202px", "20px",
        "Temperatur",
        "string");

    var graphWZ = new MyChart();
    var ds0 = new Array();
    var ds1 = new Array();
    var ds2 = new Array();
    ds0['label'] = "Wasser-Innen";
    ds1['label'] = "Wasser-Aussen";
    ds2['label'] = "Differenz";
    ds0['id'] = "B";
    ds1['id'] = "B";
    ds2['id'] = "A";
    ds0['color'] = 'red';
    ds1['color'] = 'blue';
    ds2['color'] = 'white';
    graphWZ.create("MainFWZ", '20131', '%', '°C', ds0, ds1, ds2);
 
//<!-- ----------------------------------------------------------------------- -->
//<!--                                  Ctrl                                   -->
//<!-- ----------------------------------------------------------------------- -->

//<!--  <Ctrl id = MainFSZCtrl class="FSZCtrl"></Ctrl>  -->
 
    var CtrlMainFWZ = new Area();
    CtrlMainFWZ.createCtrl("MainFWZCtrl", "bgCyanLight");
    //---------------------------------------------------------
 
    var WZWarn = new StateDisplay();
    WZWarn.create("MainFWZCtrl", "cyanLight", "", "20px", "20px", "60px", "202px", "20px",
        "Warnung",
        "string");

    var WZDisKlima = new StateDisplay();
    WZDisKlima.create("MainFWZCtrl", "cyanLight", "", "90px", "20px", "60px", "202px", "20px",
        "Klima Innen",
        "string");

    var WZDisHstate = new StateDisplay();
    WZDisHstate.create("MainFWZCtrl", "cyanLight", "", "160px", "20px", "60px", "202px", "20px",
        "Hinweis", "bool",
        "nicht lüften", "lüften erlaubt");

    var WZDisHstateDiff = new StateDisplay();
    WZDisHstateDiff.create("MainFWZCtrl", "cyanLight", "%", "230px", "20px", "60px", "202px", "20px",
        "Diff-Feuchte",
        "number");

    var WZFeuchteInnen = new StateDisplay();
    WZFeuchteInnen.create("MainFWZCtrl", "cyanLight", "mg/m³", "300px", "20px", "60px", "202px", "20px",
        "Wassergehalt Innen",
        "number");

    var WZFeuchteAussen = new StateDisplay();
    WZFeuchteAussen.create("MainFWZCtrl", "cyanLight", "mg/m³", "370px", "20px", "60px", "202px", "20px",
        "Wassergehalt Aussen",
        "number");

    var WZTPInnen = new StateDisplay();
    WZTPInnen.create("MainFWZCtrl", "cyanLight", "°C", "440px", "20px", "60px", "202px", "20px",
        "Taupunkt Innen",
        "number");

    var WZTPAussen = new StateDisplay();
    WZTPAussen.create("MainFWZCtrl", "cyanLight", "°C", "510px", "20px", "60px", "202px", "20px",
        "Taupunkt Aussen",
        "number");
 