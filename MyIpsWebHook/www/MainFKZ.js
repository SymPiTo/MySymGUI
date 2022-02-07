//<!-- ----------------------------------------------------------------------- -->
//<!--            Fenster und Luftfeuchtigkeit Kinderzimmer                    -->
//<!-- ----------------------------------------------------------------------- -->
 
    var MainFKZ = new Area();
    MainFKZ.createMain("MainFKZ", "bgOlive");
    //-------------------------------------------------
 
    var KZDisHumid = new StateDisplay();
    KZDisHumid.create("MainFKZ", "oliveLight", "%rel", "150px", "300px", "60px", "202px", "20px",
        "rel. Feuchte",
        "number");

    var KZTemp = new StateDisplay();
    KZTemp.create("MainFKZ", "oliveLight", "°C", "50px", "300px", "60px", "202px", "20px",
        "Temperatur",
        "string");



    var graphKZ = new MyChart();
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
    graphKZ.create("MainFKZ", '21504', '%', '°C', ds0, ds1, ds2);
 

//<!-- ----------------------------------------------------------------------- -->
//<!--                                  Ctrl                                   -->
//<!-- ----------------------------------------------------------------------- -->

//<!--  <Ctrl id = MainFSZCtrl class="FSZCtrl"></Ctrl>  -->
 
    var CtrlMainFKZ = new Area();
    CtrlMainFKZ.createCtrl("MainFKZCtrl", "bgOliveLight");
    //---------------------------------------------------------
 
    var KZWarn = new StateDisplay();
    KZWarn.create("MainFKZCtrl", "oliveLight", "", "20px", "20px", "60px", "202px", "20px",
        "Warnung",
        "string");
    var KZDisKlima = new StateDisplay();
    KZDisKlima.create("MainFKZCtrl", "oliveLight", "", "90px", "20px", "60px", "202px", "20px",
        "Klima Innen",
        "string");
    var KZDisHstate = new StateDisplay();
    KZDisHstate.create("MainFKZCtrl", "oliveLight", "", "160px", "20px", "60px", "202px", "20px",
        "Hinweis", "bool",
        "nicht lüften", "lüften erlaubt");
    var KZDisHstateDiff = new StateDisplay();
    KZDisHstateDiff.create("MainFKZCtrl", "oliveLight", "%", "230px", "20px", "60px", "202px", "20px",
        "Diff-Feuchte",
        "number");

    var KZFeuchteInnen = new StateDisplay();
    KZFeuchteInnen.create("MainFKZCtrl", "oliveLight", "mg/m³", "300px", "20px", "60px", "202px", "20px",
        "Wassergehalt Innen",
        "number");
    var KZFeuchteAussen = new StateDisplay();
    KZFeuchteAussen.create("MainFKZCtrl", "oliveLight", "mg/m³", "370px", "20px", "60px", "202px", "20px",
        "Wassergehalt Aussen",
        "number");

    var KZTPInnen = new StateDisplay();
    KZTPInnen.create("MainFKZCtrl", "oliveLight", "°C", "440px", "20px", "60px", "202px", "20px",
        "Taupunkt Innen",
        "number");
    var KZTPAussen = new StateDisplay();
    KZTPAussen.create("MainFKZCtrl", "oliveLight", "°C", "510px", "20px", "60px", "202px", "20px",
        "Taupunkt Aussen",
        "number");
 