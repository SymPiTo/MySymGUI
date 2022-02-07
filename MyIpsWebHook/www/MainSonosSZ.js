//<!-- ----------------------------------------------------------------------- -->
//<!--                                 Sonos Schlafzimmer                      -->
//<!-- ----------------------------------------------------------------------- -->
 
    var MainSonosSZ = new Area();
    MainSonosSZ.createMain("MainSonosSZ", "bgSandy");
    //-------------------------------------------------

    var iDisSonosSZ = new MediaDisplay();
    iDisSonosSZ.create("MainSonosSZ", "20px", "20px", "590px", "325px", "DisplayBlue", "Album", "Künstler", "Titel");

    var rahm = new Rahmen();
    rahm.create("MainSonosSZ", "350px", "24px", "73px", "590px", "DisplayBlue");

    var SonosSZVol = new TransVarDisplay();
    SonosSZVol.create("MainSonosSZ", "360px", "0%", "lime", "28px", "Volume", "");

    var SonosSZTrack = new TransVarDisplay();
    SonosSZTrack.create("MainSonosSZ", "360px", "25%", "lime", "28px", "Track", "", );

    var SonosSZSource = new TransVarDisplay();
    SonosSZSource.create("MainSonosSZ", "360px", "55%", "lime", "28px", "Source", "", );


    var FontBtnSonosVolDwnSZ = new FontButton();
    FontBtnSonosVolDwnSZ.create("MainSonosSZ", "fontbutton", "sandy", "73vh", "40px",
        "fa fa-volume-down", "60px", "60px", "", "", 'func(SNS_ChangeVolume,53696,-2)');

    var FontBtnSonosMuteSZ = new FontButton();
    FontBtnSonosMuteSZ.create("MainSonosSZ", "fontbutton", "sandy", "73vh", "110px",
        "fa fa-volume-off", "60px", "60px", "", "", 'func(SNS_SetMute,53696,toggle50128)');

    var FontBtnSonosVolUpSZ = new FontButton();
    FontBtnSonosVolUpSZ.create("MainSonosSZ", "fontbutton", "sandy", "73vh", "180px",
        "fa fa-volume-up", "60px", "60px", "", "", 'func(SNS_ChangeVolume,53696,2)');


    var FontBtnSonosPowerSZ = new FontButton();
    FontBtnSonosPowerSZ.create("MainSonosSZ", "fontbutton", "sandy", "74vh", "360px",
        "fa fa-power-off", "100px", "50px", "", "", 'func(SNS_Stop,53696)');
 






//<!-- ----------------------------------------------------------------------- -->
//<!--                                  Ctrl                                   -->
//<!-- ----------------------------------------------------------------------- -->

//<!--  <Ctrl id = MainSonosSZCtrl class="SonosSZCtrl"></Ctrl>  -->
 
    var CtrlMainSonosSZ = new Area();
    CtrlMainSonosSZ.createCtrl("MainSonosSZCtrl", "bgSandyLight");
    //---------------------------------------------------------
    var CtrlSonosSZRadioList = new DynIconList();
    CtrlSonosSZRadioList.create("MainSonosSZCtrl", "SonosRadio", "110px", "SZ");
 