//<!-- ----------------------------------------------------------------------- -->
//<!--                        Saug Roboter Roborock 6                          -->
//<!-- ----------------------------------------------------------------------- -->
 
    var MainRR = new Area();
    MainRR.createMain("MainRRWZ", "bgCyan");
    //-------------------------------------------------
 
    var roborock = new CtrlTile();
    roborock.create("MainRRWZ", "30px", "30px", "RoboRock", "cyan", "transparent", "roborock",
        "send('IPS_RunScript(48453)')", "send('IPS_RunScript(21227)')", "aus", "ein", "", "",
        "200px", "210px", "black", "lime");

    var RRStat = new StateDisplay();
    RRStat.create("MainRRWZ", "cyanLight", "", "150px", "300px", "60px", "202px", "20px",
        "Status",
        "string");

    var RRLstg = new StateDisplay();
    RRLstg.create("MainRRWZ", "cyanLight", "%", "50px", "300px", "60px", "202px", "20px",
        "Saugeistung",
        "number");

    var Rahmen3WZ = new Kachel();
    Rahmen3WZ.create("MainRRWZ", "270px", "20px", "230px", "170px", "transparent", "Mode");

    var btnRRPause = new CtrlButton();
    btnRRPause.create("MainRRWZ", "310px", "30px", "ctrlbutton", "smaller", "cyan", "Pause", "black",
        "func", "", 'func(IPS_RunScript,19621)');

    var bbtnRRLocate = new CtrlButton();
    bbtnRRLocate.create("MainRRWZ", "310px", "135px", "ctrlbutton", "smaller", "cyan", "Locate", "black", "func", "",
        'func(IPS_RunScript,25879)');

    var bbtnRRLoad = new CtrlButton();
    bbtnRRLoad.create("MainRRWZ", "380px", "45px", "ctrlbutton", "normal", "cyan", "go to base", "black", "func", "",
        'func(IPS_RunScript,16629)');

    var Rahmen3WZ = new Kachel();
    Rahmen3WZ.create("MainRRWZ", "270px", "280px", "230px", "300px", "transparent", "Reset");

    var btnRRFilterReset = new CtrlButton();
    btnRRFilterReset.create("MainRRWZ", "310px", "310px", "ctrlbutton", "normal", "cyan", "Reset Filter", "black",
        "func", "", 'func(IPS_RunScript,23889)');

    var btnMainbrushReset = new CtrlButton();
    btnMainbrushReset.create("MainRRWZ", "375px", "310px", "ctrlbutton", "normal", "cyan", "Reset Mainbrush", "black",
        "func", "", 'func(IPS_RunScript,52712)');

    var btnSensorReset = new CtrlButton();
    btnSensorReset.create("MainRRWZ", "440px", "310px", "ctrlbutton", "normal", "cyan", "Reset Sensor", "black", "func",
        "", 'func(IPS_RunScript,17714)');

    var btnSideBrushReset = new CtrlButton();
    btnSideBrushReset.create("MainRRWZ", "505px", "310px", "ctrlbutton", "normal", "cyan", "Reset Sidebrush", "black",
        "func", "", 'func(IPS_RunScript,31673)');
 



//<!-- ----------------------------------------------------------------------- -->
//<!--                                  Ctrl                                   -->
//<!-- ----------------------------------------------------------------------- -->

//<!--  <Ctrl id = MainRRCtrl class="RRCtrl"></Ctrl>  -->
 
    var CtrlMainRR = new Area();
    CtrlMainRR.createCtrl("MainRRWZCtrl", "bgCyanLight");
    //---------------------------------------------------------
 
    var RRBat = new StateDisplay();
    RRBat.create("MainRRWZCtrl", "cyanLight", "%", "20px", "20px", "60px", "202px", "20px",
        "Battery",
        "number");
    var RRError = new StateDisplay();
    RRError.create("MainRRWZCtrl", "cyanLight", "", "90px", "20px", "60px", "202px", "20px",
        "Fehler", "",
        "keine", "f0", "pp", "kk");
    var RRHB = new StateDisplay();
    RRHB.create("MainRRWZCtrl", "cyanLight", "%", "160px", "20px", "60px", "202px", "20px",
        "Hauptbürste",
        "number");
    var RRSB = new StateDisplay();
    RRSB.create("MainRRWZCtrl", "cyanLight", "%", "230px", "20px", "60px", "202px", "20px",
        "Seitenbürste",
        "number");
    var RRFilter = new StateDisplay();
    RRFilter.create("MainRRWZCtrl", "cyanLight", "%", "300px", "20px", "60px", "202px", "20px",
        "Filter",
        "number");
    var RRSensor = new StateDisplay();
    RRSensor.create("MainRRWZCtrl", "cyanLight", "%", "370px", "20px", "60px", "202px", "20px",
        "Sensor",
        "number");
 