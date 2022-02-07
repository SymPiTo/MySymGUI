//<!-- ----------------------------------------------------------------------- -->
//<!--            Fenster und Luftfeuchtigkeit Schlafzimmer                    -->
//<!-- ----------------------------------------------------------------------- -->
 
    var MainFSZ = new Area();
    MainFSZ.createMain("MainFSZ", "bgSandy");
    //-------------------------------------------------
 
    var iWindowSZ = new DynIcon("Fenster", "bin", false);
    iWindowSZ.create("MainFSZ", "40px", "30px", "170px", "170px");


    var SZDisHumid = new StateDisplay();
    SZDisHumid.create("MainFSZ", "sandyLight", "%rel", "150px", "300px", "60px", "202px", "20px",
        "rel. Feuchte",
        "number");

    var SZTemp = new StateDisplay();
    SZTemp.create("MainFSZ", "sandyLight", "°C", "50px", "300px", "60px", "202px", "20px",
        "Temperatur",
        "string");

    var graphSZ = new MyChart();
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
    graphSZ.create("MainFSZ", '48881', '%', '°C', ds0, ds1, ds2);
 



//<!-- ----------------------------------------------------------------------- -->
//<!--                                  Ctrl                                   -->
//<!-- ----------------------------------------------------------------------- -->

//<!--  <Ctrl id = MainFSZCtrl class="FSZCtrl"></Ctrl>  -->
 
    var CtrlMainFSZ = new Area();
    CtrlMainFSZ.createCtrl("MainFSZCtrl", "bgSandyLight");
    //---------------------------------------------------------
 
    var SZWarn = new StateDisplay();
    SZWarn.create("MainFSZCtrl", "sandyLight", "", "20px", "20px", "60px", "202px", "20px",
        "Warnung",
        "string");
    var SZDisKlima = new StateDisplay();
    SZDisKlima.create("MainFSZCtrl", "sandyLight", "", "90px", "20px", "60px", "202px", "20px",
        "Klima Innen",
        "string");
    var SZDisHstate = new StateDisplay();
    SZDisHstate.create("MainFSZCtrl", "sandyLight", "", "160px", "20px", "60px", "202px", "20px",
        "Hinweis", "bool",
        "nicht lüften", "lüften erlaubt");
    var SZDisHstateDiff = new StateDisplay();
    SZDisHstateDiff.create("MainFSZCtrl", "sandyLight", "%", "230px", "20px", "60px", "202px", "20px",
        "Diff-Feuchte",
        "number");

    var SZFeuchteInnen = new StateDisplay();
    SZFeuchteInnen.create("MainFSZCtrl", "sandyLight", "mg/m³", "300px", "20px", "60px", "202px", "20px",
        "Wassergehalt Innen",
        "number");
    var SZFeuchteAussen = new StateDisplay();
    SZFeuchteAussen.create("MainFSZCtrl", "sandyLight", "mg/m³", "370px", "20px", "60px", "202px", "20px",
        "Wassergehalt Aussen",
        "number");

    var SZTPInnen = new StateDisplay();
    SZTPInnen.create("MainFSZCtrl", "sandyLight", "°C", "440px", "20px", "60px", "202px", "20px",
        "Taupunkt Innen",
        "number");
    var SZTPAussen = new StateDisplay();
    SZTPAussen.create("MainFSZCtrl", "sandyLight", "°C", "510px", "20px", "60px", "202px", "20px",
        "Taupunkt Aussen",
        "number");
 