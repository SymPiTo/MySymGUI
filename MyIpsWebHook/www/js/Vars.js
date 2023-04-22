class ipsbuffer {
    constructor(ips, sym) {
        this.ips = ips;
        this.sym = sym; //Datenspeicher der Bildvariablen sind am Anfang leer und werden gefüllt mit ips
        this.first = true;
        this.NoHosts = 0;
        this.Wss = [];
        this.Wss['error'] = "none";
        this.serverID = "0";
    }
  
    get ips() {
      return this._ips;
    }
    set ips(ips) {
      this._ips = ips;
    }
  
    get sym() {
      return this._sym;
    }
    set sym(sym) {
      this._sym = sym;
    }
  
    get first() {
      return this._first;
    }
    set first(first) {
      this._first = first;
    }
  
    get NoHosts() {
      return this._NoHosts;
    }
    set NoHosts(NoHosts) {
      this._NoHosts = NoHosts;
    }
  
    get serverID() {
      return this._serverID;
    }
    set serverID(serverID) {
      this._serverID = serverID;
    }
  
    get Wss() {
      return this._Wss;
    }
    set Wss(Wss) {
      this._Wss = Wss;
    }

    update(symvar) {
      //objecte zusammenführen target wird ergänzt durch source sind Elemete gleich mit unterschiedlichen Werten wird der Wert von Source genommen
      // Ergebnis steht in target und returnedTarget
      const target = this.ips;
      const source = symvar;
      this.ips = Object.assign(target, source);
    }
  }



/* ---------------------------------------------------------------------------------------------- */
/* -------------------------------  Aktualisierung der Variablen  ------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
function updateValues() {
  /* ----------------------------- KopfZeile updaten ---------------------------- */
  uhrTop.startTime();
  uhr.startTime();
  stoerbat.update(ipsObj.ips.ID25062, true, "red", "lime");
  stoerwater.update(ipsObj.ips.ID26618, true, "red", "lime");

   

  /* --------------------------- Floorplan --------------------------- */
  var loaded = document.getElementById("floor");
  if(loaded){
    VarDisTempK_E.update(ipsObj.ips.ID54070, 1);
    VarDisTempWZ_E.update(ipsObj.ips.ID41984, 1);
    VarDisTempSZ_E.update(ipsObj.ips.ID29022, 1);
    VarDisTempKZ_E.update(ipsObj.ips.ID50730, 1);

    iHeatSz.update(ipsObj.ips.ID50235);
    iHeatWz.update(ipsObj.ips.ID20539);
    iHeatKz.update(ipsObj.ips.ID48718);
    iHeatK.update(ipsObj.ips.ID51619);

    VarDisClimate.update(ipsObj.ips.ID48299);
    VarDisLüftenBad.update(ipsObj.ips.ID35340);
    VarDisDiffHumidBad.update(ipsObj.ips.ID54987, 0);
    VarDisLüftenKZ.update(ipsObj.ips.ID17123);
    VarDisDiffHumidKZ.update(ipsObj.ips.ID54511, 0);
    VarDisLüftenSZ.update(ipsObj.ips.ID39658);
    VarDisDiffHumidSZ.update(ipsObj.ips.ID42262, 0);
    VarDisLüftenWZ.update(ipsObj.ips.ID41482);
    VarDisDiffHumidWZ.update(ipsObj.ips.ID12337, 0);
    VarDisHumidWZ.update(ipsObj.ips.ID19285, 0);
    VarDisHumidSZ_E.update(ipsObj.ips.ID50329);
    VarDisHumidKZ_E.update(ipsObj.ips.ID56454);
    VarDisBDoor.update(ipsObj.ips.ID11008);
    VarDisDoorD.update(ipsObj.ips.ID22196);

    VarDisTempOutside.update(ipsObj.ips.ID16709);
    VarDisHumOutside.update(ipsObj.ips.ID27502);

    VarDisTempBad.update(ipsObj.ips.ID59969);
    VarDisHumidBad.update(ipsObj.ips.ID14487);

    ihumanKZ.update(ipsObj.ips.ID25672);
    ihumanSZ.update(ipsObj.ips.ID21568);
    ihumanAZ.update(ipsObj.ips.ID34489);
    ihumanWZ.update(ipsObj.ips.ID38470);
    ihumanD.update(ipsObj.ips.ID36168);


  }

  /* --------------------------- Security --------------------------- */
  var loaded = document.getElementById(1);
  if(loaded){
    DisAlarmActiveSec.update(ipsObj.ips.ID53221);
    DisSabAlarm.update(ipsObj.ips.ID50294);
    DisDoorOpen.update(ipsObj.ips.ID22196);
    DisFloorPD.update(ipsObj.ips.ID15197);
    DisBalkonDoorOpen.update(ipsObj.ips.ID11008);
    var Alarm = ipsObj.ips.ID28038['value'];
    var AlarmText = "";
    if(Alarm == 2){AlarmText = "Einbrecher" };
    if(Alarm == 0){AlarmmText = ""};
    DisAlarm.update(AlarmText);
    KeyPadSecKey.update(ipsObj.ips.ID44154);
  }

  /* --------------------------- Battery Alarm --------------------------- */
  var loaded = document.getElementById(2);
  if(loaded){
    iBat01.update(ipsObj.ips.ID30280);
    iBat02.update(ipsObj.ips.ID49846);
    iBat03.update(ipsObj.ips.ID33304);
    iBat04.update(ipsObj.ips.ID26399);
    iBat05.update(ipsObj.ips.ID25322);
    iBat06.update(ipsObj.ips.ID15817);
    iBat07.update(ipsObj.ips.ID38784);
    iBat08.update(ipsObj.ips.ID37871);
    iBat09.update(ipsObj.ips.ID48751);

    iBat11.update(ipsObj.ips.ID22083);
    iBat12.update(ipsObj.ips.ID16681);
    iBat13.update(ipsObj.ips.ID42343);
    iBat14.update(ipsObj.ips.ID18803);
    iBat15.update(ipsObj.ips.ID55199);
    iBat16.update(ipsObj.ips.ID20350);
    iBat17.update(ipsObj.ips.ID10829);
    iBat18.update(ipsObj.ips.ID41083);
    iBat19.update(ipsObj.ips.ID47298);

    iBat20.update(ipsObj.ips.ID55813);
    iBat21.update(ipsObj.ips.ID42343);
    iBat22.update(ipsObj.ips.ID39063);
    iBat23.update(ipsObj.ips.ID35552);

    iBat24.update(ipsObj.ips.ID11039);
    iBat25.update(ipsObj.ips.ID10060);
    iBat26.update(ipsObj.ips.ID43481);
    iBat27.update(ipsObj.ips.ID39825);
    iBat28.update(ipsObj.ips.ID12988);

    iBat29.update(ipsObj.ips.ID25672);
    iBat30.update(ipsObj.ips.ID21568);

    BatAlarm.update(ipsObj.ips.ID25062);
  }

  /* --------------------------- Wasser Alarm --------------------------- */
  var loaded = document.getElementById(3);
  if(loaded){
    WashMDisAlarm.update(ipsObj.ips.ID54473);
    WashMDisFeuchte.update(ipsObj.ips.ID23685);
    WashMDisWater.update(ipsObj.ips.ID27499);
  
    BathDisAlarm.update(ipsObj.ips.ID58710);
    BathDisFeuchte.update(ipsObj.ips.ID17453);
    BathDisWater.update(ipsObj.ips.ID36414);
  }

  /* --------------------------- Energy Control --------------------------- */
  var loaded = document.getElementById(4);
  if(loaded){
    CountPerson.update(ipsObj.ips.ID13087,0);

    PersonDetect.update(ipsObj.ips.ID15197);
    PersonDetectWZ.update(ipsObj.ips.ID11118);
    PersonDetectSZ.update(ipsObj.ips.ID51143);
    PersonDetectKZ.update(ipsObj.ips.ID16352);
    PersonDetectAZ.update(ipsObj.ips.ID11099);
    PersonDetectD.update(ipsObj.ips.ID39987);
    PersonDetectK.update(ipsObj.ips.ID17158);
  }

  /* --------------------------- Heizung Wohnzimmer --------------------------- */
  var loaded = document.getElementById(7);
  if(loaded){
    MainTempHzWZ.update(ipsObj.ips.ID41984, 1);
    MainPosHzWZ.update(ipsObj.ips.ID20539, 2, 100);
    MainTempVHzWZ.update(ipsObj.ips.ID29170, 1);
    MainTempRHzWZ.update(ipsObj.ips.ID47576, 1);
    iHzWZ.update(ipsObj.ips.ID20539);
  
    DisModeHzWZ.update(ipsObj.ips.ID40597);
    DisTempHzWZ.update(ipsObj.ips.ID41984, 1);
    DisPosHzWZCtrl.update(ipsObj.ips.ID20539,2,"Position",100);
    DisHumidWZCtrl.update(ipsObj.ips.ID19285);
    HzCtrlWZ.update(ipsObj.ips.ID21198, ipsObj.ips.ID41314,false);
  }
  /* --------------------------- Rolladen Wohnzimmer -------------------------- */
  var loaded = document.getElementById(8);
  if(loaded){
    iRolloWZ.update(ipsObj.ips.ID49991);
    rolloCtrlWZ.update(ipsObj.ips.ID49991, 0);

    DisModeRolloWZCtrl.update(ipsObj.ips.ID13953);
    DisST1RolloWZCtrl.update(ipsObj.ips.ID21488);
    DisST2RolloWZCtrl.update(ipsObj.ips.ID37176);
    CbSSrolloWZ.update(ipsObj.ips.ID15822);
  
  }
  /* ---------------------------- Licht Wohnzimmer ---------------------------- */
  var loaded = document.getElementById(9);
  if(loaded){
    Light1WZ.update(ipsObj.ips.ID42279, "", "");
    Light2WZ.update(ipsObj.ips.ID12113, "", "");
    Light3WZ.update(ipsObj.ips.ID20128, "", "");


    DisLightCurrent1WZCtrl.update(ipsObj.ips.ID58362, 2);
    DisLightPower1WZCtrl.update(ipsObj.ips.ID22672, 2);
    DisLightEnergy1WZCtrl.update(ipsObj.ips.ID27048, 2);

    DisLightCurrent2WZCtrl.update(ipsObj.ips.ID45930, 2);
    DisLightPower2WZCtrl.update(ipsObj.ips.ID57742, 2);
    DisLightEnergy2WZCtrl.update(ipsObj.ips.ID21225, 2);

    DisLightCurrent3WZCtrl.update(ipsObj.ips.ID39517, 2);
    DisLightPower3WZCtrl.update(ipsObj.ips.ID23351, 2);
    DisLightEnergy3WZCtrl.update(ipsObj.ips.ID50795, 2);
  
  }
  /* --------------------------- Fenster/Feuchte Wohnzimmer --------------------------- */
  var loaded = document.getElementById(10);
  if(loaded){
    iWindowWZ.update(ipsObj.ips.ID11008, "", "");
    WZTemp.update(ipsObj.ips.ID41984);
    WZDisHumid.update(ipsObj.ips.ID39390);

    WZWarn.update(ipsObj.ips.ID43544);
    WZDisKlima.update(ipsObj.ips.ID32911)
    WZDisHstate.update(ipsObj.ips.ID41482);
    WZDisHstateDiff.update(ipsObj.ips.ID12337, 1);
    WZFeuchteInnen.update(ipsObj.ips.ID23948, 1);
    WZFeuchteAussen.update(ipsObj.ips.ID43084, 1);
    WZTPInnen.update(ipsObj.ips.ID32126);
    WZTPAussen.update(ipsObj.ips.ID49863);

      //sollte nur bei click geladen werden
      if(ipsObj.serverID == 20131){
        graphWZ.dataload(this.ipsObj.ips.DATA23948, this.ipsObj.ips.DATA43084, this.ipsObj.ips.DATA12337);
        //Befehl nur einmal ausführen, deshalb serverID = 0
        ipsObj.serverID = 0;
      }
  }

  /* -------------------------- Temperatur Wohnzimmer ------------------------- */
  var loaded = document.getElementById(11);
  if(loaded){
        //sollte nur bei click geladen werden
        if(ipsObj.serverID == 34129){
          graphTWZ.dataload(this.ipsObj.ips.DATA41984, this.ipsObj.ips.DATA21198, this.ipsObj.ips.DATA20539);
          //Befehl nur einmal ausführen, deshalb serverID = 0
          ipsObj.serverID = 0;
        }
  }


  /* ------------------------------- Roborock ----------------------------- */
  var loaded = document.getElementById(12);
  if(loaded){
 
    var RRstate = 0;
    var Status = [];
    switch (ipsObj.ips.ID48664['value']) {
      case 1:
        Status['value'] = "Starting up";
        RRstate = true;
        break;
      case 2:
        Status['value'] = "Sleeping";
        RRstate = false;
        break;
      case 3:
        Status['value'] = "Waiting";
        RRstate = true;
      case 4:
        Status['value'] = "Remote Control";
        break;
      case 5:
        Status['value'] = "Cleaning";
        RRstate = true;
        break;
      case 6:
        Status['value'] = "Return to Base";
        RRstate = true;
        break;
      case 7:
        Status['value'] = "Manual Mode";
        break;
      case 8:
        Status['value'] = "Charging";
        RRstate = false;
        break;
      case 9:
        Status['value'] = "Charging Problem";
        break;
      case 10:
        Status['value'] = "Pause";
        RRstate = false;
        break;
      case 11:
        Status['value'] = "Spot Cleaning";
        RRstate = true;
        break;
      case 12:
        Status['value'] = "Malfunction";
        break;
      case 13:
        Status['value'] = "Shutting Down";
        RRstate = false;
        break;
      case 14:
        Status['value'] = "Software update";
        break;
      case 15:
        Status['value'] = "Docking";
        RRstate = false;
        break;
      case 100:
        Status['value'] = "Full";
        RRstate = false;
        break;
      default:
        // code block
    }
    
    roborock.update(RRstate, "", "");
    RRBat.update(ipsObj.ips.ID28007);
    RRError.update(ipsObj.ips.ID43768);
    RRHB.update(ipsObj.ips.ID54799);
    RRSB.update(ipsObj.ips.ID10507);
    RRFilter.update(ipsObj.ips.ID15483);
    RRSensor.update(ipsObj.ips.ID52016);
    RRStat.update(Status);
    RRLstg.update(ipsObj.ips.ID14129);

  }

  /* ---------------------------- Sonos Wohnzimmer ---------------------------- */
  var loaded = document.getElementById(13);
  if(loaded){
    iDisSonosWZ.update(ipsObj.ips.ID34617, ipsObj.ips.ID22436, ipsObj.ips.ID22736, ipsObj.ips.ID22436,ipsObj.ips.ID28487);
    var Power = false;  
    if (ipsObj.ips.ID36394.value == ""){
      Power = false;
    }
    else{
      Power = true;
    }
    FontBtnSonosPowerWZ.update(Power);
    SonosWZVol.update(ipsObj.ips.ID31136);
    SonosWZTrack.update(ipsObj.ips.ID42119);
    SonosWZSource.update(ipsObj.ips.ID35856);
  }
  /* ---------------------------- Denon Wohnzimmer ---------------------------- */
  var loaded = document.getElementById(14);
  if(loaded){
    iDisArtistWZ.update(ipsObj.ips.ID57135, ipsObj.ips.ID16753, ipsObj.ips.ID48125, ipsObj.ips.ID59871,ipsObj.ips.ID17922);
   
    CeolVol.update(ipsObj.ips.ID26642);
    CeolSource.update(ipsObj.ips.ID16753);
    ProgressCeol.update(ipsObj.ips.ID54627);
    RahmenCeol.update(ipsObj.ips.ID17876);
    CeolTrack.update(ipsObj.ips.ID25782);
  }

  /* ---------------------------- TV Wohnzimmer ---------------------------- */
  var loaded = document.getElementById(15);
  if(loaded){
    TVframe.update(ipsObj.ips.ID24649, ipsObj.ips.ID52806, ipsObj.ips.ID21140, ipsObj.ips.ID39085,ipsObj.ips.ID13777);
  }

    /* ------------------------------- Greensens ----------------------------- */
  var loaded = document.getElementById(17);
  if(loaded){
      Sensor1Icon.update(ipsObj.ips.ID10654);
      Sensor2Icon.update(ipsObj.ips.ID13062);
      Sensor3Icon.update(ipsObj.ips.ID47459);
      Sensor4Icon.update(ipsObj.ips.ID11533);
      Sensor5Icon.update(ipsObj.ips.ID42405);
      Sensor1Lm.update(ipsObj.ips.ID56086,0);
      Sensor2Lm.update(ipsObj.ips.ID22953,0);
      Sensor3Lm.update(ipsObj.ips.ID30832,0);
      Sensor4Lm.update(ipsObj.ips.ID47736,0);
      Sensor5Lm.update(ipsObj.ips.ID48566,0);
      
      Sensor1Temp.update(ipsObj.ips.ID47753);
      Sensor2Temp.update(ipsObj.ips.ID14009);
      Sensor3Temp.update(ipsObj.ips.ID26601);
      Sensor4Temp.update(ipsObj.ips.ID23576);
      Sensor5Temp.update(ipsObj.ips.ID32221);
  
      Sensor1Feuchte.update(ipsObj.ips.ID11431);
      Sensor2Feuchte.update(ipsObj.ips.ID37043);
      Sensor3Feuchte.update(ipsObj.ips.ID31918);
      Sensor4Feuchte.update(ipsObj.ips.ID24329);
      Sensor5Feuchte.update(ipsObj.ips.ID26548);
  
      Sensor1Stat.update(ipsObj.ips.ID28141);
      Sensor2Stat.update(ipsObj.ips.ID27865);
      Sensor3Stat.update(ipsObj.ips.ID13328);
      Sensor4Stat.update(ipsObj.ips.ID11902);
      Sensor5Stat.update(ipsObj.ips.ID34627);
  
      Sensor1ID.update(ipsObj.ips.ID29653);
      Sensor2ID.update(ipsObj.ips.ID25601);
      Sensor3ID.update(ipsObj.ips.ID47833);
      Sensor4ID.update(ipsObj.ips.ID50154);
      Sensor5ID.update(ipsObj.ips.ID26102);
  
    }

/* -------------------------- Heizung Kinderzimmer -------------------------- */
  var loaded = document.getElementById(19);
  if(loaded){
    MainTempHzKZ.update(ipsObj.ips.ID50730, 1);
    MainPosHzKZ.update(ipsObj.ips.ID48718, 2, 100);
    MainTempVHzKZ.update("0.0", 1);
    MainTempRHzKZ.update("0.0", 1);
    iHzKZ.update(ipsObj.ips.ID48718);

    DisModeHzKZCtrl.update(ipsObj.ips.ID34300);
    DisTempHzKZCtrl.update(ipsObj.ips.ID50730, 1);
   
    DisPosHzKZCtrl.update(ipsObj.ips.ID48718,2,"Position",100);
    DisHumidKZCtrl.update(ipsObj.ips.ID34512);
    HzCtrlKZ.update(ipsObj.ips.ID25152, ipsObj.ips.ID47036, false);

    
  }
  /* -------------------------- Rolladen Kinderzimmer ------------------------- */
  var loaded = document.getElementById(20);
  if(loaded){
    iRolloKZ.update(ipsObj.ips.ID59964);
    rolloCtrlKZ.update(ipsObj.ips.ID59964, 0);

    DisModeRolloKZ.update(ipsObj.ips.ID54298);
    DisST1RolloKZ.update(ipsObj.ips.ID28071);
    DisST2RolloKZ.update(ipsObj.ips.ID25277);
    CbSSrolloKZ.update(ipsObj.ips.ID53747);
  }
  /* -------------------------- Feuchte Kinderzimmer -------------------------- */
  var loaded = document.getElementById(22);
  if(loaded){
    KZTemp.update(ipsObj.ips.ID48220);
    KZDisHumid.update(ipsObj.ips.ID56454);
    KZTempRoom.update(ipsObj.ips.ID50730);
    KZDisHumidRoom.update(ipsObj.ips.ID34512);
    iWindowKZ.update(ipsObj.ips.ID51433);

    KZWarn.update(ipsObj.ips.ID40120);
    KZDisKlima.update(ipsObj.ips.ID51301)
    KZDisHstate.update(ipsObj.ips.ID17123);
    KZDisHstateDiff.update(ipsObj.ips.ID54511, 1);
    KZFeuchteInnen.update(ipsObj.ips.ID58606, 1);
    KZFeuchteAussen.update(ipsObj.ips.ID37605, 1);
    KZTPInnen.update(ipsObj.ips.ID22124);
    KZTPAussen.update(ipsObj.ips.ID12637);

    //sollte nur bei click geladen werden
    if(ipsObj.serverID == 21504){
      graphKZ.dataload(ipsObj.ips.DATA58606, ipsObj.ips.DATA37605, ipsObj.ips.DATA54511);
      //Befehl nur einmal ausführen, deshalb serverID = 0
      ipsObj.serverID = 0;
    }
  }
/* ------------------------- Temperatur Kinderzimmer ------------------------ */
  var loaded = document.getElementById(23);
  if(loaded){
    //sollte nur bei click geladen werden
    if(ipsObj.serverID == 27353){
      graphTKZ.dataload(this.ipsObj.ips.DATA50730, this.ipsObj.ips.DATA25152, this.ipsObj.ips.DATA48718);
      //Befehl nur einmal ausführen, deshalb serverID = 0
      ipsObj.serverID = 0;
    }
    var x = 0;
  }
/* -------------------------- Heizung Schlafzimmer ------------------------- */
  var loaded = document.getElementById(25);
  if(loaded){
    MainTempHzSZ.update(ipsObj.ips.ID29022, 1);
    MainPosHzSZ.update(ipsObj.ips.ID37431, 2, 100);
    MainTempVHzSZ.update(ipsObj.ips.ID32007, 1);
    MainTempRHzSZ.update(ipsObj.ips.ID26565, 1);
    iHzSZ.update(ipsObj.ips.ID37431);

    DisModeHzSZCtrl.update(ipsObj.ips.ID47124);
    DisTempHzSZCtrl.update(ipsObj.ips.ID29022, 1);
    DisPosHzSZCtrl.update(ipsObj.ips.ID37431,2,"Position",100);
    DisHumidSZCtrl.update(ipsObj.ips.ID50329);
    HzCtrlSZ.update(ipsObj.ips.ID20217, ipsObj.ips.ID36544, false);
  }
/* -------------------------- Rolladen Schlafzimmer ------------------------- */
  var loaded = document.getElementById(26);
  if(loaded){
    iRolloSZ.update(ipsObj.ips.ID18298);
    rolloCtrlSZ.update(ipsObj.ips.ID18298, 0);

    DisModeRolloSZ.update(ipsObj.ips.ID22052);
    DisST1RolloSZ.update(ipsObj.ips.ID18740);
    DisST2RolloSZ.update(ipsObj.ips.ID53883);
    CbSSrolloSZ.update(ipsObj.ips.ID12349);
  }
/* --------------------------- Licht Schlafzimmer --------------------------- */
  var loaded = document.getElementById(27);
  if(loaded){
    LightSZ.update(ipsObj.ips.ID19506, "", "");

    DisLightCurrentSZCtrl.update(ipsObj.ips.ID35590, 2);
    DisLightPowerSZCtrl.update(ipsObj.ips.ID43083, 2);
    DisLightEnergySZCtrl.update(ipsObj.ips.ID12561, 2);
    
  }
/* -------------------------- Feuchte Schlafzimmer -------------------------- */
  var loaded = document.getElementById(28);
  if(loaded){
    iWindowSZ.update(ipsObj.ips.ID58490, "", "");

    SZTemp.update(ipsObj.ips.ID39612);
    SZDisHumid.update(ipsObj.ips.ID50329);

    SZTempRoom.update(ipsObj.ips.ID29022);
    SZDisHumidRoom.update(ipsObj.ips.ID19285);

    SZWarn.update(ipsObj.ips.ID33665);
    SZDisKlima.update(ipsObj.ips.ID24992)
    SZDisHstate.update(ipsObj.ips.ID39658);
    SZDisHstateDiff.update(ipsObj.ips.ID42262, 1);
    SZFeuchteInnen.update(ipsObj.ips.ID43454, 1);
    SZFeuchteAussen.update(ipsObj.ips.ID37684, 1);
    SZTPInnen.update(ipsObj.ips.ID10084);
    SZTPAussen.update(ipsObj.ips.ID47006);

    //sollte nur bei click geladen werden
    if(ipsObj.serverID == 48881){
      graphSZ.dataload(this.ipsObj.ips.DATA43454, this.ipsObj.ips.DATA37684, this.ipsObj.ips.DATA42262);
      //Befehl nur einmal ausführen, deshalb serverID = 0
      ipsObj.serverID = 0;
    }
  }
/* ------------------------- Temperatur Schlafzimmer ------------------------ */
  var loaded = document.getElementById(29);
  if(loaded){
        //sollte nur bei click geladen werden
        if(ipsObj.serverID == 12276){
          graphTSZ.dataload(this.ipsObj.ips.DATA15922, this.ipsObj.ips.DATA55889, this.ipsObj.ips.DATA37431);
          //Befehl nur einmal ausführen, deshalb serverID = 0
          ipsObj.serverID = 0;
        }
  }
  /* ---------------------------- Sonos Schlafzimmer ---------------------------- */
  var loaded = document.getElementById(30);
  if(loaded){
    iDisSonosSZ.update(ipsObj.ips.ID26811, ipsObj.ips.ID44326, ipsObj.ips.ID56244, ipsObj.ips.ID26119,ipsObj.ips.ID30069);
    var Power = false;  
    if (ipsObj.ips.ID16949.value == ""){
      Power = false;
    }
    else{
      Power = true;
    }

    FontBtnSonosPowerSZ.update(Power);
    SonosSZVol.update(ipsObj.ips.ID53465);
    SonosSZTrack.update(ipsObj.ips.ID29800);
 
    SonosSZSource.update(ipsObj.ips.ID55798);
  }
/* ------------------------------ Heizung Küche ----------------------------- */
  var loaded = document.getElementById(31);
  if(loaded){
    MainTempHzK.update(ipsObj.ips.ID54070, 1);
    MainPosHzK.update(ipsObj.ips.ID51619, 0);
    MainTempVHzK.update("0.0", 1);
    MainTempRHzK.update("0.0", 1);
    iHzK.update(ipsObj.ips.ID51619);

    DisModeHzKCtrl.update(ipsObj.ips.ID39562);
    DisTempHzKCtrl.update(ipsObj.ips.ID54070, 1);
    DisPosHzKCtrl.update(ipsObj.ips.ID51619);
    HzCtrlK.update(ipsObj.ips.ID21258, ipsObj.ips.ID54426, ipsObj.ips.ID17734);
  }
  /* ----------------------------- Rolladen Küche ----------------------------- */
  var loaded = document.getElementById(32);
  if(loaded){
    iRolloK.update(ipsObj.ips.ID11004);

    rolloCtrlK.update(ipsObj.ips.ID11004, 0);
    DisModeRolloK.update(ipsObj.ips.ID53769);
    DisST1RolloK.update(ipsObj.ips.ID34905);
    DisST2RolloK.update(ipsObj.ips.ID52660);
    CbSSrolloK.update(ipsObj.ips.ID28605);
  }

  var loaded = document.getElementById(33);
  if(loaded){
  }

  /* --------------------------------- Fenster -------------------------------- */
  var loaded = document.getElementById(34);
  if(loaded){

  }
  /* --------------------------------- Rezepte -------------------------------- */
  var loaded = document.getElementById(35);
  if(loaded){
    RezeptName.update(ipsObj.ips.ID54563);
    
    let z = JSON.parse(ipsObj.ips.ID29246['value']);
    var text = z.join('\n');
    Zutaten.update(text);

    var rez = ipsObj.ips.ID59260['value'];
    rez = rez.replace(".", ".\n");
    Rezept.update(rez);
   
    //RezepteBox.update(ipsObj.ips.ID16493);
  }
  /* --------------------------------- Timer -------------------------------- */
  var loaded = document.getElementById(36);
  if(loaded){

  }
  /* --------------------------------- Filter -------------------------------- */
  var loaded = document.getElementById(37);
  if(loaded){
    
    DiIPSFil1.update(ipsObj.ips.ID29770);
    DiIPSFil2.update(ipsObj.ips.ID29377);
    DiIPSFil3.update(ipsObj.ips.ID46559);
    DiIPSFil4.update(ipsObj.ips.ID13215, 1);
    DiIPSFil5.update(ipsObj.ips.ID24603, 0);
    iFilterK.update(ipsObj.ips.ID24603);
  }

  
  /* -------------------------------- Wasserzähler Küche ------------------------------- */
  var loaded = document.getElementById(38);
  if(loaded){
    iWZKKueche.update(0);
    iWZWKueche.update(1);
    VarDisWZKKueche.update(ipsObj.ips.ID41253);
    VarDisWZWKueche.update(ipsObj.ips.ID56553);

    DisVJKWK.update(ipsObj.ips.ID33072, 3);
    DisAktKWK.update(ipsObj.ips.ID30375, 3);
    DisVJWWK.update(ipsObj.ips.ID26108, 3);
    DisAktWWK.update(ipsObj.ips.ID49390, 3);
  }

    /* --------------------------- Rolladen Balkontür --------------------------- */
  var loaded = document.getElementById(41);
  if(loaded){
    iRolloB.update(ipsObj.ips.ID26881);

    rolloCtrlB.update(ipsObj.ips.ID26881, 0);
    DisModeRolloB.update(ipsObj.ips.ID25457);
    DisST1RolloB.update(ipsObj.ips.ID41457);
    DisST2RolloB.update(ipsObj.ips.ID25503);
    CbSSrolloB.update(ipsObj.ips.ID11634);
  }
  /* --------------------------------- Tür Balkon ------------------------------ */
  var loaded = document.getElementById(42);
  if(loaded){ 
    DynIconDoorB.update(ipsObj.ips.ID11008);
    DisDoorBCtrl.update(ipsObj.ips.ID11008);
  }
  /* --------------------------------- Wetter -------------------------------- */
  var loaded = document.getElementById(43);
  if(loaded){
    WetterLabelB.update(ipsObj.ips.ID18382,1);
    WetterLabelC.update(ipsObj.ips.ID18382,2);
    WetterLabelD.update(ipsObj.ips.ID18382,3);
    WetterLabelE.update(ipsObj.ips.ID18382,4);
    WetterLabelF.update(ipsObj.ips.ID18382,5);
    WetterLabelG.update(ipsObj.ips.ID18382,6);
    WetterLabelA.update(ipsObj.ips.ID18382,0);
    WetterLabelNow.update(ipsObj.ips.ID15437);
    
  }
  /* -------------------------------- Covid ------------------------------- */
  var loaded = document.getElementById(44);
  if(loaded){

  }
  /* ---------------------------------   -------------------------------- */
  var loaded = document.getElementById(45);
  if(loaded){

  }

  /* -------------------------------- Bad Fenster ------------------------------- */
  var loaded = document.getElementById(47);
  if(loaded){
    WindowBad.update(ipsObj.ips.ID32177, "", "");

    BathWarn.update(ipsObj.ips.ID46977);
    BathDisKlima.update(ipsObj.ips.ID27233)
    BathDisHstate.update(ipsObj.ips.ID35340);
    BathDisHstateDiff.update(ipsObj.ips.ID54987, 1);
    BathTemp.update(ipsObj.ips.ID59969);
    BathDisHumid.update(ipsObj.ips.ID14487);

    BathFeuchteInnen.update(ipsObj.ips.ID34355, 1);
    BathFeuchteAussen.update(ipsObj.ips.ID12347, 1);
    BathTPInnen.update(ipsObj.ips.ID37922);
    BathTPAussen.update(ipsObj.ips.ID37109);

    //sollte nur bei click geladen werden
    if(ipsObj.serverID == 26561){
      graphB.dataload(this.ipsObj.ips.DATA12347, this.ipsObj.ips.DATA34355, this.ipsObj.ips.DATA54987);
      //Befehl nur einmal ausführen, deshalb serverID = 0
      ipsObj.serverID = 0;
    }
  }

  /* -------------------------------- Wasserzähler Bad ------------------------------- */
  var loaded = document.getElementById(48);
  if(loaded){
    iWZKBad.update(0);
    iWZWBad.update(1);
    VarDisWZKBad.update(ipsObj.ips.ID58241);
    VarDisWZWBad.update(ipsObj.ips.ID53023);

    DisVJKWBad.update(ipsObj.ips.ID56868, 3);
    DisAktKWBad.update(ipsObj.ips.ID26523, 3);
    DisVJWWBad.update(ipsObj.ips.ID52322, 3);
    DisAktWWBad.update(ipsObj.ips.ID29321, 3);
  }



  /* -------------------------------- Licht Diele ------------------------------- */
  var loaded = document.getElementById(53);
  if(loaded){
    LightD.update(ipsObj.ips.ID56831, "", "");
    DisLightCurrentDCtrl.update(ipsObj.ips.ID19440, 2);
    DisLightPowerDCtrl.update(ipsObj.ips.ID41504, 2);
    DisLightEnergyDCtrl.update(ipsObj.ips.ID16840, 2);
     
  }

  /* -------------------------------- Eingangstür Diele ------------------------------- */
  var loaded = document.getElementById(54);
  if(loaded){
    DynIconDoorD.update(ipsObj.ips.ID22196);
    DisDoorDCtrl.update(ipsObj.ips.ID22196);
  }

  /* -------------------------------- Licht Arbeitsecke ------------------------------- */
  var loaded = document.getElementById(59);
  if(loaded){
    LightAZ.update(ipsObj.ips.ID48642, "", "");
    DisLightCurrentAZCtrl.update(ipsObj.ips.ID59093, 2);
    DisLightPowerAZCtrl.update(ipsObj.ips.ID23507, 2);
    DisLightEnergyAZCtrl.update(ipsObj.ips.ID24994, 2);
    iLightAZ.update(ipsObj.ips.ID48642);
  }

  /* -------------------------------- UPNP ------------------------------- */
  var loaded = document.getElementById(65);
  if(loaded){
    ServerImg.update(ipsObj.ips.ID31626);
    ClientImg.update(ipsObj.ips.ID14390);
    ClientBtn.update(ipsObj.ips.ID46310);
    ServerBtn.update(ipsObj.ips.ID37365);

    SyncMeldung.update(ipsObj.ips.ID54140 ) 
  }

  /* -------------------------------- UPNP TV ------------------------------- */
  var loaded = document.getElementById(66);
  if(loaded){

  }

  /* -------------------------------- UPNP CD ------------------------------- */
  var loaded = document.getElementById(67);
  if(loaded){
    DisplayCD.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID52798, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
    upnpCDVol.update(ipsObj.ips.ID39621);
    upnCDSource.update(ipsObj.ips.ID46310);
    upnpCDProgress.update(ipsObj.ips.ID27733);
    CDPlayer.update(ipsObj.ips.ID46310);
    CDTrack.update("Track: " + ipsObj.ips.ID38745);
  }

  /* -------------------------------- UPNP Audiobook ------------------------------- */
  var loaded = document.getElementById(68);
  if(loaded){
    DiplayAudio.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID52798, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
    
    AudioTrack.update("Track: " + ipsObj.ips.ID38745);
    AudioPlayer.update(ipsObj.ips.ID46310);
    upnpAudioVol.update(ipsObj.ips.ID39621);
    upnpAudioSource.update(ipsObj.ips.ID46310);
    upnpAudioProgress.update(ipsObj.ips.ID27733);
  }

  /* -------------------------------- UPNP Video ------------------------------- */
  var loaded = document.getElementById(69);
  if(loaded){
    DiplayVideo.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID26207, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
    VideoTrack.update("Track: " + ipsObj.ips.ID38745);
    upnpVideoVol.update(ipsObj.ips.ID39621);
    upnpVideoSource.update(ipsObj.ips.ID46310);
    upnpVideoProgress.update(ipsObj.ips.ID27733);
    VideoPlayer.update(ipsObj.ips.ID46310);
  }

  /* -------------------------------- UPNP Foto ------------------------------- */
  var loaded = document.getElementById(70);
  if(loaded){
    DiplayFoto.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID52798, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
    FotoTrack.update("Track: " + ipsObj.ips.ID38745);
    upnpFotoVol.update(ipsObj.ips.ID39621);
    upnpFotoSource.update(ipsObj.ips.ID46310);
    upnpFotoProgress.update(ipsObj.ips.ID27733);
    FotoPlayer.update(ipsObj.ips.ID46310);
  }


    /* -------------------------------- IPS Server ------------------------------- */
    var loaded = document.getElementById(77);
    if(loaded){
      //Aktualisierung alle 60sec
      ipsFrame.update("http://192.168.178.28:8888/status.html", 60000) ;

      DiIPS1.update(ipsObj.ips.ID19292);
      DiIPS2.update(ipsObj.ips.ID12369);
      DiIPS3.update(ipsObj.ips.ID17974);
      DiIPS4.update(ipsObj.ips.ID37859);
      DiIPS5.update(ipsObj.ips.ID35144);
      DiIPS6.update(ipsObj.ips.ID29733);
      DiIPS7.update(ipsObj.ips.ID30080);
      DiIPS8.update(ipsObj.ips.ID41816);
      DiIPS9.update(ipsObj.ips.ID59797);
      DiIPS10.update(ipsObj.ips.ID39889);
      DiIPS11.update(ipsObj.ips.ID30080);
    }

    /* -------------------------------- RaspMatic Server ------------------------------- */
    var loaded = document.getElementById(78);
    if(loaded){
      csl.update(ipsObj.ips.ID36540, "%");
      cs2.update(ipsObj.ips.ID44062, "%");
      cs3.update(ipsObj.ips.ID15317, "%");

      CCUconnect.update(ipsObj.ips.ID16201);
      CCUVersion.update(ipsObj.ips.ID11189);
      CCUAdress.update("192.168.178.42");
    }

    /* -------------------------------- Plex Server ------------------------------- */
    var loaded = document.getElementById(79);
    if(loaded){
      //Aktualisierung alle 60sec
      HMFrame.update("http://192.168.178.9:8888/status.html", 60000) ;
    }

    /* ------------------------------ Websocket Server ----------------------------- */
    var loaded = document.getElementById(80);
    if(loaded){
       
      WSSsend.update(ipsObj.Wss['messageSend'], "");
      WSSreceive.update(ipsObj.Wss['messageType'] + 'Interval: ' + ipsObj.Wss['messageTimeInterval'], "");

      DisWSSStat.update(ipsObj.Wss['connection']);

      DisWSSError.update(ipsObj.Wss['error']);

      DisWSSCL1.update(ipsObj.ips.ID56321);
      DisWSSCL2.update(ipsObj.ips.ID43949);
      DisWSSCL3.update(ipsObj.ips.ID15131);
      DisWSSCL4.update(ipsObj.ips.ID38435);

     
    }

    /* -------------------------------- Homeatic Server ------------------------------- */
    var loaded = document.getElementById(81);
    if(loaded){
      let FBhosts = JSON.parse(ipsObj.ips.ID11403['value']);
      var n = FBhosts.length;
      /* Falls zu viele displays angelegt wurden dann den Rest löschen */
      if (ipsObj.NoHosts > n) {
        for (let index = (ipsObj.NoHosts - n); index < ipsObj.NoHosts; index++) {
          eval("ledno" + index + ".delete()");
  
        }
      }

      // Falls zu wenige displays angelegt wurden dann den Rest löschen
      if (ipsObj.NoHosts < n) {
        for (let i = (ipsObj.NoHosts - n); i < ipsObj.NoHosts; i++) {
  
          eval("ledno" + i + "= new Led();");
          let y = parseInt("70px", 10) + parseInt("60px", 10) * i + "px";
          eval("ledno" + i + '.create("MainNWCtrl", "' + y + '", "5px", "#ABFF00")');
  
          eval("IPdis" + i + "= new StateDisplay()");
          let z = parseInt("70px", 10) + parseInt("60px", 10) * i + "px";
          eval("IPdis" + i + '.create("MainNWCtrl","midgreenLight", "", "' + z +
            '", "70px", "60px", "150px", "18px", "IP Adress", "String", "", "", "", "")');
  
        }
      }

      FBhosts.forEach(function (value, i) {
        //ein Object aus einem String erzeugen
        let led = eval("ledno" + i);
        led.update(FBhosts[i]['NewActive']);
        //ein Object aus einem String erzeugen
        let disp = eval("IPdis" + i);
        disp.update(FBhosts[i]['NewIPAddress'], 0, FBhosts[i]['NewHostName']);
  
      })

      DSLIn.update(ipsObj.ips.ID29751);
      DSLOut.update(ipsObj.ips.ID36784);
      VarDSL.update(ipsObj.ips.ID29703);
      INet.update(ipsObj.ips.ID13418);
 
      FBextAdr.update(ipsObj.ips.ID54212);
      FBDNS.update(ipsObj.ips.ID34420);

    }
  
  /*
    if(typeof ipsObj.ips.ID13996 != "undefined"){
      if (ipsObj.ips.ID13996.value != "-") { 
        Meldung.set(true, "Eingehender Anruf.\n\r" + ipsObj.ips.ID13996['value'] + "\n\r" + ipsObj.ips.ID43770['value']);
      } else {
        Meldung.set(false, "");
      }
    }
    */
    

    /* -------------------------------- Homeatic Server ------------------------------- */
    var loaded = document.getElementById(82);
    if(loaded){










      //<!-- ******************** HMIP Tem/Feuchte Sensor Kinderzimmer   **************************  -->
      HM1.update(ipsObj.ips.ID51909);
      s0_1.update(ipsObj.ips.ID48706);
      //<!-- ******************** HMIP Wasser Sensor Küche   **************************  -->
      HM2.update(ipsObj.ips.ID42463);
      s1_1.update(ipsObj.ips.ID14045);
      //<!-- ******************** IPS Präsenz Diele   **************************  -->
      HM3.update(ipsObj.ips.ID37634);
      s2_1.update(ipsObj.ips.ID56516);
      //<!-- ******************** HMIP Tür Kontakt Haustür   **************************  -->
      HM4.update(ipsObj.ips.ID10422);
      s3_1.update(ipsObj.ips.ID27255);
      //<!-- ******************** HMIP Temp/Feuchte Sensor Schlafzimmer   **************************  -->
      HM5.update(ipsObj.ips.ID25178);
      
      //<!-- ******************** HMIP Wasser Sensor Bad   **************************  -->
      HM6.update(ipsObj.ips.ID31856);
      s5_1.update(ipsObj.ips.ID35613);
      //<!-- ******************** HMIP Lichtschalter / Mess Aktor Schlafzimmer  **************************  -->
      HM7.update(ipsObj.ips.ID19200);
      s6_1.update(ipsObj.ips.ID22863);
      s6_2.update(ipsObj.ips.ID53298);
      //<!-- ******************** HMIP Lichtschalter 6fach Wohnzimmer **************************  -->
      HM8.update(ipsObj.ips.ID12503);
      s7_1.update(ipsObj.ips.ID42477);
      //<!-- ******************** HMIP Aktor 4fach Bad **************************  -->
      HM9.update(ipsObj.ips.ID28998);
    
      //<!-- ******************** HMIP Taster Bad **************************  -->
      HM10.update(ipsObj.ips.ID14236);

      //<!-- ******************** HMIP Lichtaktor AZ **************************  -->
      HM11.update(ipsObj.ips.ID11562);
      s9_1.update(ipsObj.ips.ID24339);
      s9_2.update(ipsObj.ips.ID22430);
      s9_3.update(ipsObj.ips.ID43022);
      //<!-- ******************** HMIP Präsenzmelder AZ **************************  -->
      HM12.update(ipsObj.ips.ID21489);
      s10_1.update(ipsObj.ips.ID39342);
      //<!-- ******************** HMIP Temp Feuchte Sensor Bad **************************  -->
      HM13.update(ipsObj.ips.ID57066);
      s11_1.update(ipsObj.ips.ID25926);
      //<!-- ******************** HMIP Balkontür Kontakt **************************  -->
      HM14.update(ipsObj.ips.ID17847);
      s12_1.update(ipsObj.ips.ID24615);
      //<!-- ******************** HMIP Balkon Wetter Sensor **************************  -->
      HM15.update(ipsObj.ips.ID50088);
      s13_1.update(ipsObj.ips.ID19248);
      //<!-- ******************** HMIP Diele Lampe Aktor **************************  -->
      HM16.update(ipsObj.ips.ID38705);
      s14_1.update(ipsObj.ips.ID37104);
      s14_2.update(ipsObj.ips.ID57824);
      s14_3.update(ipsObj.ips.ID31176); 
      //<!-- ******************** HMIP Diele Lichtschalter **************************  -->     
      HM17.update(ipsObj.ips.ID44332);  
      s15_1.update(ipsObj.ips.ID42787);
      //<!-- ******************** HMIP Kinderzimmer Heizung Aktor **************************  -->     
      HM18.update(ipsObj.ips.ID14610);  
      s16_1.update(ipsObj.ips.ID14961);
      //<!-- ******************** HMIP Kinderzimmer Heizung Regler **************************  -->  
      HM19.update(ipsObj.ips.ID43746);  
      s17_1.update(ipsObj.ips.ID32746);
      //<!-- ******************** HMIP Kinderzimmer Fenster **************************  -->     
      HM20.update(ipsObj.ips.ID38992);  
      s18_1.update(ipsObj.ips.ID48706);
      //<!-- ******************** HMIP Schlafzimmer Fenster **************************  -->     
      HM21.update(ipsObj.ips.ID17456);  
      s19_1.update(ipsObj.ips.ID15013);
      //<!-- ******************** HMIP Schlafzimmer Heizung Aktor **************************  -->     
      HM22.update(ipsObj.ips.ID49387);  
      s20_1.update(ipsObj.ips.ID57300);
      //<!-- ******************** HMIP Schlafzimmer Heizung Regler **************************  -->   
      HM23.update(ipsObj.ips.ID43381);  
      s21_1.update(ipsObj.ips.ID48993);
      //<!-- ******************** HMIP Schlafzimmer Lichtschalter **************************  -->     
      HM24.update(ipsObj.ips.ID19200);  
      s22_1.update(ipsObj.ips.ID22863);
      s22_2.update(ipsObj.ips.ID46213);
      s22_3.update(ipsObj.ips.ID53298);
      //<!-- ******************** HMIP Wohnzimmer Aktor Heizung **************************  -->     
      HM25.update(ipsObj.ips.ID39837);  
      s23_1.update(ipsObj.ips.ID39741);
      //<!-- ******************** HMIP Wohnzimmer Regler Heizung **************************  -->   
      HM26.update(ipsObj.ips.ID43700);  
      s24_1.update(ipsObj.ips.ID56954);
      //<!-- ******************** HMIP Wohnzimmer Licht Aktor **************************  -->     
      HM27.update(ipsObj.ips.ID18170);  
      s25_1.update(ipsObj.ips.ID57045);
      s25_2.update(ipsObj.ips.ID15227);
      s25_3.update(ipsObj.ips.ID48109);
      HM28.update(ipsObj.ips.ID47058); 
      s26_1.update(ipsObj.ips.ID40749);
      s26_2.update(ipsObj.ips.ID20419);
      s26_3.update(ipsObj.ips.ID10336);
      //HM29.update(ipsObj.ips.ID); 
      //<!-- ******************** HMIP Wohnzimmer Steckdose **************************  -->     
      HM30.update(ipsObj.ips.ID26377);
      s28_1.update(ipsObj.ips.ID14488);
      s28_2.update(ipsObj.ips.ID16447);


/*
      DiHM1.update(ipsObj.ips.ID16201);
      DiHM2.update(ipsObj.ips.ID58903);
      DiHM3.update(ipsObj.ips.ID44062);
      DiHM4.update(ipsObj.ips.ID16055);
      DiHM5.update(ipsObj.ips.ID39565);
      var wert = ipsObj.ips.ID29679;
      DiHM6.update(wert);
      DiHM7.update(ipsObj.ips.ID36540);
*/


/*
      DiIPSJ1.update(ipsObj.ips.ID14236);
      DiIPSI1.update(ipsObj.ips.ID28998);
      DiIPSH1.update(ipsObj.ips.ID42477);
      DiIPSH2.update(ipsObj.ips.ID32916);
      DiIPSH3.update(ipsObj.ips.ID12503);
      DiIPSG1.update(ipsObj.ips.ID53298);
      DiIPSG2.update(ipsObj.ips.ID46213);
      DiIPSG3.update(ipsObj.ips.ID53923);
      DiIPSG4.update(ipsObj.ips.ID29520);
      DiIPSG5.update(ipsObj.ips.ID31167);
      DiIPSG6.update(ipsObj.ips.ID19200);
      DiIPSF1.update(ipsObj.ips.ID10422);
      DiIPSF2.update(ipsObj.ips.ID27255);
      DiIPSE1.update(ipsObj.ips.ID18797);
      DiIPSE2.update(ipsObj.ips.ID10775);
      DiIPSE3.update(ipsObj.ips.ID36083);
      DiIPSE4.update(ipsObj.ips.ID35613);
      DiIPSE5.update(ipsObj.ips.ID48610);
      DiIPSE6.update(ipsObj.ips.ID49852);
      DiIPSE7.update(ipsObj.ips.ID31856);
      DiIPSD1.update(ipsObj.ips.ID51834);
      DiIPSD2.update(ipsObj.ips.ID36971);
      DiIPSD3.update(ipsObj.ips.ID29563);
      DiIPSD4.update(ipsObj.ips.ID14045);
      DiIPSD5.update(ipsObj.ips.ID23035);
      DiIPSD6.update(ipsObj.ips.ID48609);
      DiIPSD7.update(ipsObj.ips.ID42463);
      DiIPSC1.update(ipsObj.ips.ID20695);
      DiIPSC2.update(ipsObj.ips.ID17718);
      DiIPSC3.update(ipsObj.ips.ID25178);
      DiIPSB1.update(ipsObj.ips.ID22446);
      DiIPSB2.update(ipsObj.ips.ID53621);
      DiIPSB3.update(ipsObj.ips.ID51909);
      DiIPSA1.update(ipsObj.ips.ID23367);
      DiIPSA2.update(ipsObj.ips.ID56516);
      DiIPSA3.update(ipsObj.ips.ID20750);
      DiIPSA4.update(ipsObj.ips.ID48787);
      DiIPSA5.update(ipsObj.ips.ID37634);
*/
    }
    /* -------------------------------- Computer Control  ------------------------------- */
    var loaded = document.getElementById(83);
    if(loaded){
      FontBtnPC1.update(ipsObj.ips.ID28999);
      screen1.update(ipsObj.ips.ID28999);
      DisPC1a.update(ipsObj.ips.ID12062);
      DisPC1b.update(ipsObj.ips.ID16727);
      DisPC1c.update(ipsObj.ips.ID23046,3); //Verbrauch
      btnPowerPC1.update(ipsObj.ips.ID22565);
      DisPC1d.update(ipsObj.ips.ID57420);       
      var cost = ipsObj.ips.ID23046.value * 0.27;
      var wert = Array();
      wert['value'] = cost;
      DisKostenPC1.update(wert,2);

      var s = ipsObj.ips.ID39058;
      var ss = "";
      switch (s['value']) {
        case 0:
          ss = "Off & Powerless"
          break;
        case 1:
          ss = "Off";
          break;
        case 2:
          ss = "starting";
          break;
        case 3:
          ss = "on";    
          break;
        case 4:
          ss = "shuting down";
          break;
        case 5:
          ss = "no connection";      
            break;
        case 6:
          ss = "network connected";      
          break;
        default:
          break;
      }
      stat1.update(ss);

      var s = ipsObj.ips.ID42212;
      var ss = "";
      switch (s['value']) {
        case 0:
          ss = "Off & Powerless"
          break;
        case 1:
          ss = "Off";
          break;
        case 2:
          ss = "starting";
          break;
        case 3:
          ss = "on";    
          break;
        case 4:
          ss = "shuting down";
          break;
        case 5:
          ss = "no connection";      
            break;
        case 6:
          ss = "network connected";      
          break;
        default:
          break;
      }
      stat2.update(ss);

      FontBtnPC2.update(ipsObj.ips.ID30858);
      screen2.update(ipsObj.ips.ID30858);
      DisPC2a.update(ipsObj.ips.ID37643);
      DisPC2b.update(ipsObj.ips.ID47810);
      DisPC2c.update(ipsObj.ips.ID22542,3);
      btnPowerPC2.update(ipsObj.ips.ID12836);
      DisPC2d.update(ipsObj.ips.ID46749);
      var cost = ipsObj.ips.ID22542.value * 0.27;
      var wert = Array();
      wert['value'] = cost;
      DisKostenPC2.update(wert,2);
    }


    /* -------------------------------- Stromverbrauch ------------------------------- */
    var loaded = document.getElementById(94);
    if(loaded){
      DisVJVerbrauch.update(ipsObj.ips.ID38554);
      DisAktVerbrauch.update(ipsObj.ips.ID33394);
      DisVJKosten.update(ipsObj.ips.ID53123);
      DisAktKosten.update(ipsObj.ips.ID47897);
    }



} 