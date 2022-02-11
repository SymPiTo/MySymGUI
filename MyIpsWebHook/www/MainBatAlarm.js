    //<!-- ***********************************************************************************      -->
    //<!-- ************************           Battery Alarm           ************************      -->
    //<!-- ***********************************************************************************      -->

 
        var windowBatAlarm = new Area();
        windowBatAlarm.createMain("MainBatAlarm", "bgRed");
 
        var iBat01 = new DynIcon("BatStat", "bin", true);
        iBat01.create("MainBatAlarm", "0px", "10px", "20px", "50px");
        var iBat02 = new DynIcon("BatStat", "bin", true);
        iBat02.create("MainBatAlarm", "60px", "10px", "20px", "50px");
        var iBat03 = new DynIcon("BatStat", "bin", true);
        iBat03.create("MainBatAlarm", "120px", "10px", "20px", "50px");
        var iBat04 = new DynIcon("BatStat", "bin", true);
        iBat04.create("MainBatAlarm", "180px", "10px", "20px", "50px");
        var iBat05 = new DynIcon("BatStat", "bin", true);
        iBat05.create("MainBatAlarm", "240px", "10px", "20px", "50px");
        var iBat06 = new DynIcon("BatStat", "bin", true);
        iBat06.create("MainBatAlarm", "300px", "10px", "20px", "50px");
        var iBat07 = new DynIcon("BatStat", "bin", true);
        iBat07.create("MainBatAlarm", "360px", "10px", "20px", "50px");
        var iBat08 = new DynIcon("BatStat", "bin", true);
        iBat08.create("MainBatAlarm", "420px", "10px", "20px", "50px");
        var iBat09 = new DynIcon("BatStat", "bin", true);
        iBat09.create("MainBatAlarm", "480px", "10px", "20px", "50px");


        var label01 = new label();
        label01.create("MainBatAlarm", "5px", "50px", "12px", "white", "Bad Fenster Aktor");
        var label02 = new label();
        label02.create("MainBatAlarm", "65px", "50px", "12px", "white", "Bad Fenster Taster");
        var label03 = new label();
        label03.create("MainBatAlarm", "125px", "50px", "12px", "white", "Balkon Temp-Feuchte Sensor");
        var label04 = new label();
        label04.create("MainBatAlarm", "185px", "50px", "12px", "white", "Diele Präsenzmelder");
        var label05 = new label();
        label05.create("MainBatAlarm", "245px", "50px", "12px", "white", "Haustür Kontakt");
        var label06 = new label();
        label06.create("MainBatAlarm", "305px", "50px", "12px", "white", "Kinderzimmer Heizregler ");
        var label07 = new label();
        label07.create("MainBatAlarm", "365px", "50px", "12px", "white",
            "Kinderzimmer Temp-Feuchte Sensor");
        var label08 = new label();
        label08.create("MainBatAlarm", "425px", "50px", "12px", "white", "Arbeitsecke Detector");
        var label09 = new label();
        label09.create("MainBatAlarm", "485px", "50px", "12px", "white", "Bad Temp-Feuchte Sensor Reg");


        var iBat11 = new DynIcon("BatStat", "bin", true);
        iBat11.create("MainBatAlarm", "0px", "200px", "20px", "50px");
        var iBat12 = new DynIcon("BatStat", "bin", true);
        iBat12.create("MainBatAlarm", "60px", "200px", "20px", "50px");
        var iBat13 = new DynIcon("BatStat", "bin", true);
        iBat13.create("MainBatAlarm", "120px", "200px", "20px", "50px");
        var iBat14 = new DynIcon("BatStat", "bin", true);
        iBat14.create("MainBatAlarm", "180px", "200px", "20px", "50px");
        var iBat15 = new DynIcon("BatStat", "bin", true);
        iBat15.create("MainBatAlarm", "240px", "200px", "20px", "50px");
        var iBat16 = new DynIcon("BatStat", "bin", true);
        iBat16.create("MainBatAlarm", "300px", "200px", "20px", "50px");
        var iBat17 = new DynIcon("BatStat", "bin", true);
        iBat17.create("MainBatAlarm", "360px", "200px", "20px", "50px");
        var iBat18 = new DynIcon("BatStat", "bin", true);
        iBat18.create("MainBatAlarm", "420px", "200px", "20px", "50px");
        var iBat19 = new DynIcon("BatStat", "bin", true);
        iBat19.create("MainBatAlarm", "480px", "200px", "20px", "50px");

        var label11 = new label();
        label11.create("MainBatAlarm", "5px", "230px", "12px", "white", "Küche Heizregler");
        var label12 = new label();
        label12.create("MainBatAlarm", "65px", "230px", "12px", "white", "Küche Wassermelder");
        var label13 = new label();
        label13.create("MainBatAlarm", "125px", "230px", "12px", "white", "Schlafzimmer Heizregler");
        var label14 = new label();
        label14.create("MainBatAlarm", "185px", "230px", "12px", "white", "Schlafzimmer Feuchte Sensor");
        var label15 = new label();
        label15.create("MainBatAlarm", "245px", "230px", "12px", "white", "Wohnzimmer Heizregler");
        var label16 = new label();
        label16.create("MainBatAlarm", "305px", "230px", "12px", "white", "Bad Wassermelder");
        var label17 = new label();
        label17.create("MainBatAlarm", "365px", "230px", "12px", "white", "Diele Lichtschalter");
        var label18 = new label();
        label18.create("MainBatAlarm", "425px", "230px", "12px", "white", "HaustürKontakt");
        var label19 = new label();
        label19.create("MainBatAlarm", "485px", "230px", "12px", "white", "Schlafzimmer FensterKontakt");

        var iBat20 = new DynIcon("BatStat", "bin", true);
        iBat20.create("MainBatAlarm", "0px", "350px", "20px", "50px");
        var iBat21 = new DynIcon("BatStat", "bin", true);
        iBat21.create("MainBatAlarm", "60px", "350px", "20px", "50px");
        var iBat22 = new DynIcon("BatStat", "bin", true);
        iBat22.create("MainBatAlarm", "120px", "350px", "20px", "50px");
        var iBat23 = new DynIcon("BatStat", "bin", true);
        iBat23.create("MainBatAlarm", "180px", "350px", "20px", "50px");
        var iBat24 = new DynIcon("BatStat", "bin", true);
        iBat24.create("MainBatAlarm", "240px", "350px", "20px", "50px");
        var iBat25 = new DynIcon("BatStat", "bin", true);
        iBat25.create("MainBatAlarm", "300px", "350px", "20px", "50px");
        var iBat26 = new DynIcon("BatStat", "bin", true);
        iBat26.create("MainBatAlarm", "360px", "350px", "20px", "50px");
        var iBat27 = new DynIcon("BatStat", "bin", true);
        iBat27.create("MainBatAlarm", "420px", "350px", "20px", "50px");
        var iBat28 = new DynIcon("BatStat", "bin", true);
        iBat28.create("MainBatAlarm", "480px", "350px", "20px", "50px");

        var label20 = new label();
        label20.create("MainBatAlarm", "5px", "380px", "12px", "white", "Schlafzimmer DiffTemp Sensor");
        var label21 = new label();
        label21.create("MainBatAlarm", "65px", "380px", "12px", "white", "Schlafzimmer Thermostat");
        var label22 = new label();
        label22.create("MainBatAlarm", "125px", "380px", "12px", "white", "Schlafzimmer WandHzRegler");
        var label23 = new label();
        label23.create("MainBatAlarm", "185px", "380px", "12px", "white", "Wohnzimmer Licht Taster");
  

    //<!-- ***********************************************************************************      -->
    //<!-- ************************     Battery Alarm Ctrl            ************************      -->
    //<!-- ***********************************************************************************      -->
 
 
        var CtrlwindowBatAlarm = new Area();
        CtrlwindowBatAlarm.createCtrl("MainBatAlarmCtrl", "bgRed");
   
        var BatDis = new StateDisplay();
        BatDis.create("MainBatAlarmCtrl", "redLight", "", "50px", "20px", "225px", "202px", "20px",
            "Battery Alarm",
            "string");
 