 
    //<!-- *************************************************************************************   -->
    //<!--  ************************         Main - IP Symcon Server    ************************   -->
    //<!-- *************************************************************************************   -->

        var mainwindoIPS = new Area();
        mainwindoIPS.createMain("MainIPS", "bgMidgreen");
 
        var server1 = new BtnIcon();
        server1.create("MainIPS", "20px", "20px", "midgreen", ips, "1.0", "IPS Server",
            "switchCtrlArea('MainIPSCtrl')", "150px", "100px");
        var server2 = new BtnIcon();
        server2.create("MainIPS", "20px", "220px", "midgreen", "Homematic.png", "1.0", "HM Server",
            "switchCtrlArea('MainHMCtrl')", "150px",
            "100px");
        var server3 = new BtnIcon();
        server3.create("MainIPS", "20px", "420px", "midgreen", "Plex.png", "1.0", "Media Server", "",
            "150px",
            "100px");
        var HM1 = new BtnIcon();
        HM1.create("MainIPS", "140px", "50px", "grey", "HM-WDS40.png", "0.5, 0.8", "Temp/Humid",
            "switchCtrlArea('HMIP2Ctrl')", "100px", "100px", "14px");
        var HM2 = new BtnIcon();
        HM2.create("MainIPS", "140px", "180px", "grey", "_HMIP_SWD.png", "0.8, 0.8", "Water",
            "switchCtrlArea('HMIP4Ctrl')", "100px", "100px", "14px");
        var HM3 = new BtnIcon();
        HM3.create("MainIPS", "140px", "310px", "grey", "_HMIP_Präsenzmelder.png", "0.9, 0.9", "Präsenz",
            "switchCtrlArea('HMIP1Ctrl')", "100px", "100px", "14px");
        var HM4 = new BtnIcon();
        HM4.create("MainIPS", "140px", "440px", "grey", "_HMIP_Türkontakt Optisch.png", "0.5, 1.0",
            "TürKontakt",
            "switchCtrlArea('HMIP6Ctrl')", "100px", "100px", "14px");
        var HM5 = new BtnIcon();
        HM5.create("MainIPS", "260px", "50px", "grey", "HM-WDS40.png", "0.5, 0.8", "Temp/Humid",
            "switchCtrlArea('HMIP3Ctrl')", "100px", "100px", "14px");
        var HM6 = new BtnIcon();
        HM6.create("MainIPS", "260px", "180px", "grey", "_HMIP_SWD.png", "0.8, 0.8", "Water",
            "switchCtrlArea('HMIP5Ctrl')", "100px", "100px", "14px");
        var HM7 = new BtnIcon();
        HM7.create("MainIPS", "260px", "310px", "grey", "_HMIP_BSM.png", "0.9, 0.9", "Schalter/Mess",
            "switchCtrlArea('HMIP7Ctrl')", "100px", "100px", "14px");
        var HM8 = new BtnIcon();
        HM8.create("MainIPS", "260px", "440px", "grey", "_HMIP_WRC6.png", "0.8, 0.8", "Schalter 6fach",
            "switchCtrlArea('HMIP8Ctrl')", "100px", "100px", "14px");
        var HM9 = new BtnIcon();
        HM9.create("MainIPS", "380px", "50px", "grey", "_HM-LC-Sw4.png", "0.8, 0-8", "Aktor 4fach",
            "switchCtrlArea('HMIP9Ctrl')", "100px", "100px", "14px");
        var HM10 = new BtnIcon();
        HM10.create("MainIPS", "380px", "180px", "grey", "_HMIP-PB2.jpg", "0.8, 0.8", "Wandtaster",
            "switchCtrlArea('HMIP10Ctrl')", "100px", "100px", "14px");
        var HM11 = new BtnIcon();
        HM11.create("MainIPS", "380px", "310px", "grey", "HMIP-FSM.png", "0.8, 0.8", "Licht-Aktor",
            "switchCtrlArea('HMIP11Ctrl')", "100px", "100px", "14px");
        var HM12 = new BtnIcon();
        HM12.create("MainIPS", "380px", "440px", "grey", "HMIP-FSM.png", "0.8, 0.8", "Licht-Aktor",
            "switchCtrlArea('HMIP12Ctrl')", "100px", "100px", "14px");
        var HM13 = new BtnIcon();
        HM13.create("MainIPS", "500px", "50px", "grey", "HMIP-FSM.png", "0.8, 0.8", "Licht-Aktor",
            "switchCtrlArea('HMIP13Ctrl')", "100px", "100px", "14px");
        var HM14 = new BtnIcon();
        HM14.create("MainIPS", "500px", "180px", "grey", "HMIP-FCI1.png", "0.8, 0.8", "Licht-Schalter",
            "switchCtrlArea('HMIP14Ctrl')", "100px", "100px", "14px");
        var HM15 = new BtnIcon();
        HM15.create("MainIPS", "500px", "310px", "grey", "HM-WDS30.png", "0.8, 0.8", "Diff-Temp Sensor",
            "switchCtrlArea('HMIP15Ctrl')", "100px", "100px", "14px");
        var HM16 = new BtnIcon();
        HM16.create("MainIPS", "500px", "440px", "grey", "HM-WDS30.png", "0.8, 0.8", "Diff-Temp Sensor",
            "switchCtrlArea('HMIP16Ctrl')", "100px", "100px", "14px");
        var HM17 = new BtnIcon();
        HM17.create("MainIPS", "620px", "50px", "grey", "HMIP-PS.jpg", "1, 1", "SchaltSteckdose",
            "switchCtrlArea('HMIP17Ctrl')", "100px", "100px", "14px");

 


//<!-- *************************************************************************************   -->
//<!--  ************************       CTRL - IP Symcon Server      ************************   -->
//<!-- *************************************************************************************   -->
 

        var CtrlwindowIPS = new Area();
        CtrlwindowIPS.createCtrl("MainIPSCtrl", "bgMidgreen");
 
        var Head1 = new HeadLine();
        Head1.create("MainIPSCtrl", "0px", "transparent", "IPS-RASPI");
        var DiIPS1 = new StateDisplay();
        DiIPS1.create("MainIPSCtrl", "midgreenLight", "", "50px", "30px", "60px", "202px", "18px",
            "IP Adress",
            "string");
        var DiIPS2 = new StateDisplay();
        DiIPS2.create("MainIPSCtrl", "midgreenLight", "", "110px", "30px", "60px", "202px", "18px",
            "Frequency",
            "string");
        var DiIPS3 = new StateDisplay();
        DiIPS3.create("MainIPSCtrl", "midgreenLight", "", "170px", "30px", "60px", "202px", "18px",
            "CPU load 15min",
            "string");
        var DiIPS4 = new StateDisplay();
        DiIPS4.create("MainIPSCtrl", "midgreenLight", "", "230px", "30px", "60px", "202px", "18px",
            "CPU Temperature",
            "string");
        var DiIPS5 = new StateDisplay();
        DiIPS5.create("MainIPSCtrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
            "CPU Voltage",
            "string");
        var DiIPS6 = new StateDisplay();
        DiIPS6.create("MainIPSCtrl", "midgreenLight", "", "350px", "30px", "60px", "202px", "18px",
            "Memory Free",
            "string");
        var DiIPS7 = new StateDisplay();
        DiIPS7.create("MainIPSCtrl", "midgreenLight", "", "410px", "30px", "60px", "202px", "18px",
            "Memory SD Free",
            "string");
        var Head2 = new HeadLine();
        Head2.create("MainIPSCtrl", "420px", "transparent", "IPS-Server");
        var DiIPS8 = new StateDisplay();
        DiIPS8.create("MainIPSCtrl", "midgreenLight", "", "530px", "30px", "60px", "202px", "18px",
            "IPS Version",
            "string");
        var DiIPS9 = new StateDisplay();
        DiIPS9.create("MainIPSCtrl", "midgreenLight", "", "590px", "30px", "60px", "202px", "18px",
            "Kernel Status",
            "string",
            "", "", "",
            "", "", "202px", "80px");
        var DiIPS10 = new StateDisplay();
        DiIPS10.create("MainIPSCtrl", "midgreenLight", "", "670px", "30px", "60px", "202px", "18px",
            "Port 3777",
            "string");
        var Head3 = new HeadLine();
        Head3.create("MainIPSCtrl", "630px", "transparent", "WSS-Server");
        var DiIPS11 = new StateDisplay();
        DiIPS11.create("MainIPSCtrl", "midgreenLight", "", "790px", "30px", "60px", "202px", "18px",
            "Port 9000",
            "string");


            
        //<!-- *************************************************************************************   -->
        //<!--  ************************         CTRL - Homematic Server    ************************   -->
        //<!-- *************************************************************************************   -->
     
            var CtrlwindowHM = new Area();
            CtrlwindowHM.createCtrl("MainHMCtrl", "bgMidgreen");
      
            var HeadHM1 = new HeadLine();
            HeadHM1.create("MainHMCtrl", "0px", "transparent", "HM - Server");
            var labelHM1 = new label();
            labelHM1.create("MainHMCtrl", "50px", "30px", "18px", "white", "Adr.: 192.168.178.42");

            var DiHM1 = new StateDisplay();
            DiHM1.create("MainHMCtrl", "midgreenLight", "", "110px", "30px", "60px", "202px", "18px",
                "Connected",
                "string");
            var DiHM2 = new StateDisplay();
            DiHM2.create("MainHMCtrl", "midgreenLight", "", "170px", "30px", "60px", "202px", "18px", "Default",
                "string");
            var DiHM3 = new StateDisplay();
            DiHM3.create("MainHMCtrl", "midgreenLight", "", "230px", "30px", "60px", "202px", "18px",
                "Duty Cycle",
                "string");

            var HeadHM2 = new HeadLine();
            HeadHM2.create("MainHMCtrl", "260px", "transparent", "HM IP - Server");
            var DiHM4 = new StateDisplay();
            DiHM4.create("MainHMCtrl", "midgreenLight", "", "360px", "30px", "60px", "202px", "18px",
                "Connected",
                "string");
            var DiHM5 = new StateDisplay();
            DiHM5.create("MainHMCtrl", "midgreenLight", "", "420px", "30px", "60px", "202px", "18px", "Default",
                "string", "",
                "", "",
                "", "", "202px", "80px");
            var DiHM6 = new StateDisplay();
            DiHM6.create("MainHMCtrl", "midgreenLight", "", "480px", "30px", "60px", "202px", "18px", "Version",
                "string");

            var DiHM7 = new StateDisplay();
            DiHM7.create("MainHMCtrl", "midgreenLight", "", "540px", "30px", "60px", "202px", "18px",
                "Duty Cycle",
                "string");
 


        //<!-- *************************************************************************************   -->
        //<!--  ************************       CTRL - HMIP1 Präsenzmelder   ************************   -->
        //<!-- *************************************************************************************   -->
       
            var CtrlwindowHMIP1 = new Area();
            CtrlwindowHMIP1.createCtrl("HMIP1Ctrl", "bgMidgreen");
        
            var HeadA1 = new HeadLine();
            HeadA1.create("HMIP1Ctrl", "0px", "transparent", "Präsenzmelder");
            var labelA1 = new label();
            labelA1.create("HMIP1Ctrl", "50px", "30px", "18px", "white", "Adr.: 000C18A98B9990");
            var labelA2 = new label();
            labelA2.create("HMIP1Ctrl", "80px", "30px", "18px", "white", "Location: Diele");
            var DiIPSA1 = new StateDisplay();
            DiIPSA1.create("HMIP1Ctrl", "midgreenLight", "", "140px", "30px", "60px", "202px", "18px",
                "Error Code",
                "string");
            var DiIPSA2 = new StateDisplay();
            DiIPSA2.create("HMIP1Ctrl", "midgreenLight", "", "210px", "30px", "60px", "202px", "18px",
                "Operating Voltage",
                "string");
            var DiIPSA3 = new StateDisplay();
            DiIPSA3.create("HMIP1Ctrl", "midgreenLight", "", "280px", "30px", "60px", "202px", "18px",
                "RSSI Device",
                "string");
            var DiIPSA4 = new StateDisplay();
            DiIPSA4.create("HMIP1Ctrl", "midgreenLight", "", "350px", "30px", "60px", "202px", "18px",
                "RSSI Peer",
                "string");
            var DiIPSA5 = new StateDisplay();
            DiIPSA5.create("HMIP1Ctrl", "midgreenLight", "", "420px", "30px", "60px", "202px", "18px",
                "Unreach",
                "string");
    
        //<!-- ***********************************************************************************************   -->
        //<!--  ************************       CTRL - HM-WDS40 TH-I-2 Temp/Humidity    ***********************   -->
        //<!--  ************************       Kinderzimmer                           ************************   -->
        //<!-- ***********************************************************************************************   -->
      
            var CtrlwindowHMIP2 = new Area();
            CtrlwindowHMIP2.createCtrl("HMIP2Ctrl", "bgMidgreen");
       
            var HeadB1 = new HeadLine();
            HeadB1.create("HMIP2Ctrl", "0px", "transparent", "Temp/Feuchte");
            var labelB1 = new label();
            labelB1.create("HMIP2Ctrl", "50px", "30px", "18px", "white", "Adr.: OEQ0671702");
            var labelB2 = new label();
            labelB2.create("HMIP2Ctrl", "80px", "30px", "18px", "white", "Location: Kinderzimmer");

            var DiIPSB1 = new StateDisplay();
            DiIPSB1.create("HMIP2Ctrl", "midgreenLight", "", "280px", "30px", "60px", "202px", "18px",
                "RSSI Device",
                "string");
            var DiIPSB2 = new StateDisplay();
            DiIPSB2.create("HMIP2Ctrl", "midgreenLight", "", "350px", "30px", "60px", "202px", "18px",
                "RSSI Peer",
                "string");
            var DiIPSB3 = new StateDisplay();
            DiIPSB3.create("HMIP2Ctrl", "midgreenLight", "", "420px", "30px", "60px", "202px", "18px",
                "Unreach",
                "string");
   
        //<!-- ***********************************************************************************************   -->
        //<!--  ************************       CTRL - HM-WDS40 TH-I-2 Temp/Humidity    ***********************   -->
        //<!--  ************************       Schlafzimmer                           ************************   -->
        //<!-- ***********************************************************************************************   -->
     
            var CtrlwindowHMIP3 = new Area();
            CtrlwindowHMIP3.createCtrl("HMIP3Ctrl", "bgMidgreen");
   
            var HeadC1 = new HeadLine();
            HeadC1.create("HMIP3Ctrl", "0px", "transparent", "Temp/Feuchte");
            var labelC1 = new label();
            labelC1.create("HMIP3Ctrl", "50px", "30px", "18px", "white", "Adr.: OEQ0670758");
            var labelC2 = new label();
            labelC2.create("HMIP3Ctrl", "80px", "30px", "18px", "white", "Location: Schlafzimmer");

            var DiIPSC1 = new StateDisplay();
            DiIPSC1.create("HMIP3Ctrl", "midgreenLight", "", "280px", "30px", "60px", "202px", "18px",
                "RSSI Device",
                "string");
            var DiIPSC2 = new StateDisplay();
            DiIPSC2.create("HMIP3Ctrl", "midgreenLight", "", "350px", "30px", "60px", "202px", "18px",
                "RSSI Peer",
                "string");
            var DiIPSC3 = new StateDisplay();
            DiIPSC3.create("HMIP3Ctrl", "midgreenLight", "", "420px", "30px", "60px", "202px", "18px",
                "Unreach",
                "string");
        
        //<!-- ***********************************************************************************************   -->
        //<!--  ************************       CTRL - HMIP-SWD  Wasser Sensor          ***********************   -->
        //<!--  ************************       Küche                                  ************************   -->
        //<!-- ***********************************************************************************************   -->
      
            var CtrlwindowHMIP4 = new Area();
            CtrlwindowHMIP4.createCtrl("HMIP4Ctrl", "bgMidgreen");
      
            var HeadD1 = new HeadLine();
            HeadD1.create("HMIP4Ctrl", "0px", "transparent", "Wasser Sensor");
            var labelD1 = new label();
            labelD1.create("HMIP4Ctrl", "50px", "30px", "18px", "white", "Adr.: 001898A99273C0");
            var labelD2 = new label();
            labelD2.create("HMIP4Ctrl", "80px", "30px", "18px", "white", "Location: Küche");

            var DiIPSD1 = new StateDisplay();
            DiIPSD1.create("HMIP4Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "Duty Cycle",
                "string");
            var DiIPSD2 = new StateDisplay();
            DiIPSD2.create("HMIP4Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "Error Code",
                "string");
            var DiIPSD3 = new StateDisplay();
            DiIPSD3.create("HMIP4Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "Non Flat Position",
                "string");
            var DiIPSD4 = new StateDisplay();
            DiIPSD4.create("HMIP4Ctrl", "midgreenLight", "", "360px", "30px", "60px", "202px", "18px",
                "Voltage",
                "string");
            var DiIPSD5 = new StateDisplay();
            DiIPSD5.create("HMIP4Ctrl", "midgreenLight", "", "430px", "30px", "60px", "202px", "18px",
                "RSSI Device",
                "string");
            var DiIPSD6 = new StateDisplay();
            DiIPSD6.create("HMIP4Ctrl", "midgreenLight", "", "500px", "30px", "60px", "202px", "18px",
                "RSSI Peer",
                "string");
            var DiIPSD7 = new StateDisplay();
            DiIPSD7.create("HMIP4Ctrl", "", "", "570px", "30px", "60px", "202px", "18px", "Unreach", "string");
       
        //<!-- ***********************************************************************************************   -->
        //<!--  ************************       CTRL - HMIP-SWD  Wasser Sensor          ***********************   -->
        //<!--  ************************       Bad                                  ************************   -->
        //<!-- ***********************************************************************************************   -->
        
            var CtrlwindowHMIP5 = new Area();
            CtrlwindowHMIP5.createCtrl("HMIP5Ctrl", "bgMidgreen");
       
            var HeadE1 = new HeadLine();
            HeadE1.create("HMIP5Ctrl", "0px", "transparent", "Wasser Sensor");
            var labelE1 = new label();
            labelE1.create("HMIP5Ctrl", "50px", "30px", "18px", "white", "Adr.: 001898A992728B");
            var labelE2 = new label();
            labelE2.create("HMIP5Ctrl", "80px", "30px", "18px", "white", "Location: Bad");

            var DiIPSE1 = new StateDisplay();
            DiIPSE1.create("HMIP5Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "Duty Cycle",
                "string");
            var DiIPSE2 = new StateDisplay();
            DiIPSE2.create("HMIP5Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "Error Code",
                "string");
            var DiIPSE3 = new StateDisplay();
            DiIPSE3.create("HMIP5Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "Non Flat Position",
                "string");
            var DiIPSE4 = new StateDisplay();
            DiIPSE4.create("HMIP5Ctrl", "midgreenLight", "", "360px", "30px", "60px", "202px", "18px",
                "Voltage",
                "string");
            var DiIPSE5 = new StateDisplay();
            DiIPSE5.create("HMIP5Ctrl", "midgreenLight", "", "430px", "30px", "60px", "202px", "18px",
                "RSSI Device",
                "string");
            var DiIPSE6 = new StateDisplay();
            DiIPSE6.create("HMIP5Ctrl", "midgreenLight", "", "500px", "30px", "60px", "202px", "18px",
                "RSSI Peer",
                "string");
            var DiIPSE7 = new StateDisplay();
            DiIPSE7.create("HMIP5Ctrl", "midgreenLight", "", "570px", "30px", "60px", "202px", "18px",
                "Unreach",
                "string");
        
        //<!-- ***********************************************************************************************   -->
        //<!--  ************************       CTRL - HMIP-Sec-SCo  Tür Kontakt        ***********************   -->
        //<!--  ************************       Haustür                                ************************   -->
        //<!-- ***********************************************************************************************   -->
    
            var CtrlwindowHMIP6 = new Area();
            CtrlwindowHMIP6.createCtrl("HMIP6Ctrl", "bgMidgreen");
    
            var HeadF1 = new HeadLine();
            HeadF1.create("HMIP6Ctrl", "0px", "transparent", "Tür Kontakt");
            var labelF1 = new label();
            labelF1.create("HMIP6Ctrl", "50px", "30px", "18px", "white", "Adr.: OEQ1193907");
            var labelF2 = new label();
            labelF2.create("HMIP6Ctrl", "80px", "30px", "18px", "white", "Location: Haustür");

            var DiIPSF1 = new StateDisplay();
            DiIPSF1.create("HMIP6Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
            var DiIPSF2 = new StateDisplay();
            DiIPSF2.create("HMIP6Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px", "Error",
                "string");
      

        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HMIP-BSM  Schalter / Mess Aktor       ***********************   -->
        //<!--  ************************       Schlafzimmer                                ************************   -->
        //<!-- ****************************************************************************************************   -->
        
            var CtrlwindowHMIP7 = new Area();
            CtrlwindowHMIP7.createCtrl("HMIP7Ctrl", "bgMidgreen");
       
            var HeadG1 = new HeadLine();
            HeadG1.create("HMIP7Ctrl", "0px", "transparent", "Schalter/Mess");
            var labelG1 = new label();
            labelG1.create("HMIP7Ctrl", "50px", "30px", "18px", "white", "Adr.: 000858A9ABE28A")
            var labelG2 = new label();
            labelG2.create("HMIP7Ctrl", "80px", "30px", "18px", "white", "Location: Schlafzimmer")

            var DiIPSG1 = new StateDisplay();
            DiIPSG1.create("HMIP7Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "act. Temp",
                "string");
            var DiIPSG2 = new StateDisplay();
            DiIPSG2.create("HMIP7Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "Error Code",
                "string");
            var DiIPSG3 = new StateDisplay();
            DiIPSG3.create("HMIP7Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "Overheat",
                "string");
            var DiIPSG4 = new StateDisplay();
            DiIPSG4.create("HMIP7Ctrl", "midgreenLight", "", "360px", "30px", "60px", "202px", "18px",
                "RSSI Device",
                "string");
            var DiIPSG5 = new StateDisplay();
            DiIPSG5.create("HMIP7Ctrl", "midgreenLight", "", "430px", "30px", "60px", "202px", "18px",
                "Rssi Peer",
                "string");
            var DiIPSG6 = new StateDisplay();
            DiIPSG6.create("HMIP7Ctrl", "midgreenLight", "", "500px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
      

        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL -   Wandtaster 6fach  HMIP_WRC6         ***********************   -->
        //<!--  ************************       Wohnzimmer                                  ************************   -->
        //<!-- ****************************************************************************************************   -->
       
            var CtrlwindowHMIP8 = new Area();
            CtrlwindowHMIP8.createCtrl("HMIP8Ctrl", "bgMidgreen");
        
            var HeadH1 = new HeadLine();
            HeadH1.create("HMIP8Ctrl", "0px", "transparent", "Taster 6fach");
            var labelH1 = new label();
            labelH1.create("HMIP8Ctrl", "50px", "30px", "18px", "white", "Adr.: 000B58A9AB6315");
            var labelH2 = new label();
            labelH2.create("HMIP8Ctrl", "80px", "30px", "18px", "white", "Location: Wohnzimmer");

            var DiIPSH1 = new StateDisplay();
            DiIPSH1.create("HMIP8Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "Voltage",
                "string");
            var DiIPSH2 = new StateDisplay();
            DiIPSH2.create("HMIP8Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "RSSI Device",
                "string");
            var DiIPSH3 = new StateDisplay();
            DiIPSH3.create("HMIP8Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
       

        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HM-LC-Sw4 Aktor 4fach                 ***********************   -->
        //<!--  ************************       Bad                                         ************************   -->
        //<!-- ****************************************************************************************************   -->
      
            var CtrlwindowHMIP9 = new Area();
            CtrlwindowHMIP9.createCtrl("HMIP9Ctrl", "bgMidgreen");
         
            var HeadI1 = new HeadLine();
            HeadI1.create("HMIP9Ctrl", "0px", "transparent", "Schalter 6fach");
            var labelI1 = new label();
            labelI1.create("HMIP9Ctrl", "50px", "30px", "18px", "white", "Adr.: OEQ1048227");
            var labelI2 = new label();
            labelI2.create("HMIP9Ctrl", "80px", "30px", "18px", "white", "Location: Bad");

            var DiIPSI1 = new StateDisplay();
            DiIPSI1.create("HMIP9Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
       


        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HM-PB-2 Wandtaster                     ***********************   -->
        //<!--  ************************       Bad                                         ************************   -->
        //<!-- ****************************************************************************************************   -->
      
            var CtrlwindowHMIP10 = new Area();
            CtrlwindowHMIP10.createCtrl("HMIP10Ctrl", "bgMidgreen");
      
            var HeadJ1 = new HeadLine();
            HeadJ1.create("HMIP10Ctrl", "0px", "transparent", "Wand Taster");
            var labelJ1 = new label();
            labelJ1.create("HMIP10Ctrl", "50px", "30px", "18px", "white", "Adr.: PEQ0192538");
            var labelJ2 = new label();
            labelJ2.create("HMIP10Ctrl", "80px", "30px", "18px", "white", "Location: Bad");

            var DiIPSJ1 = new StateDisplay();
            DiIPSJ1.create("HMIP10Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
       

        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HM-FSM Lichtaktor Mitte               ***********************   -->
        //<!--  ************************       Wohnzimmer                                  ************************   -->
        //<!-- ****************************************************************************************************   -->
       
            var CtrlwindowHMIP11 = new Area();
            CtrlwindowHMIP11.createCtrl("HMIP11Ctrl", "bgMidgreen");
        
            var HeadK1 = new HeadLine();
            HeadK1.create("HMIP11Ctrl", "0px", "transparent", "Lampe Mitte");
            var labelK1 = new label();
            labelK1.create("HMIP11Ctrl", "50px", "30px", "18px", "white", "Adr.: 00089A498BE12D");
            var labelK2 = new label();
            labelK2.create("HMIP11Ctrl", "80px", "30px", "18px", "white", "Location: Wohnzimmer");;
            var DiIPSK1 = new StateDisplay();
            DiIPSK1.create("HMIP11Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "RSSI-Device",
                "string");
            var DiIPSK2 = new StateDisplay();
            DiIPSK2.create("HMIP11Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "RSSI-Peer",
                "string");
            var DiIPSK3 = new StateDisplay();
            DiIPSK3.create("HMIP11Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
     


        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HM-FSM Lichtaktor Hinten              ***********************   -->
        //<!--  ************************       Wohnzimmer                                  ************************   -->
        //<!-- ****************************************************************************************************   -->
       
            var CtrlwindowHMIP12 = new Area();
            CtrlwindowHMIP12.createCtrl("HMIP12Ctrl", "bgMidgreen");
     
            var HeadL1 = new HeadLine();
            HeadL1.create("HMIP12Ctrl", "0px", "transparent", "Lampe Fenster");
            var labelL1 = new label();
            labelL1.create("HMIP12Ctrl", "50px", "30px", "18px", "white", "Adr.: 00089A498BDFE3");
            var labelL2 = new label();
            labelL2.create("HMIP12Ctrl", "80px", "30px", "18px", "white", "Location: Wohnzimmer");

            var DiIPSL1 = new StateDisplay();
            DiIPSL1.create("HMIP12Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "RSSI-Device",
                "string");
            var DiIPSL2 = new StateDisplay();
            DiIPSL2.create("HMIP12Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "RSSI-Peer",
                "string");
            var DiIPSL3 = new StateDisplay();
            DiIPSL3.create("HMIP12Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
      


        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HM-FSM Lichtaktor Diele               ***********************   -->
        //<!--  ************************       Diele                                        ***********************   -->
        //<!-- ****************************************************************************************************   -->
      
            var CtrlwindowHMIP13 = new Area();
            CtrlwindowHMIP13.createCtrl("HMIP13Ctrl", "bgMidgreen");
         
            var HeadM1 = new HeadLine();
            HeadM1.create("HMIP13Ctrl", "0px", "transparent", "Lampe Diele");
            var labelM1 = new label();
            labelM1.create("HMIP13Ctrl", "50px", "30px", "18px", "white", "Adr.: 00089A498BE124");
            var labelM2 = new label();
            labelM2.create("HMIP13Ctrl", "80px", "30px", "18px", "white", "Location: Diele");

            var DiIPSM1 = new StateDisplay();
            DiIPSM1.create("HMIP13Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "RSSI-Device",
                "string");
            var DiIPSM2 = new StateDisplay();
            DiIPSM2.create("HMIP13Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "RSSI-Peer",
                "string");
            var DiIPSM3 = new StateDisplay();
            DiIPSM3.create("HMIP13Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "unreach",
                "string");
      


        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HMIP-FCI 1 Schater Kontakt            ***********************   -->
        //<!--  ************************       Diele                                        ***********************   -->
        //<!-- ****************************************************************************************************   -->
      
            var CtrlwindowHMIP14 = new Area();
            CtrlwindowHMIP14.createCtrl("HMIP14Ctrl", "bgMidgreen");
       
            var HeadN1 = new HeadLine();
            HeadN1.create("HMIP14Ctrl", "0px", "transparent", "Schalter Diele");
            var labelN1 = new label();
            labelN1.create("HMIP14Ctrl", "50px", "30px", "18px", "white", "Adr.: 001FD8A9A9ACDD");
            var labelN2 = new label();
            labelN2.create("HMIP14Ctrl", "80px", "30px", "18px", "white", "Location: Diele");

            var DiIPSN1 = new StateDisplay();
            DiIPSN1.create("HMIP14Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "RSSI-Device",
                "string");
            var DiIPSN2 = new StateDisplay();
            DiIPSN2.create("HMIP14Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "Unreach",
                "string");
     


        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HM-WDS30 Tem Diff Sensor              ***********************   -->
        //<!--  ************************       Schlafzimmer                                 ***********************   -->
        //<!-- ****************************************************************************************************   -->
       
            var CtrlwindowHMIP15 = new Area();
            CtrlwindowHMIP15.createCtrl("HMIP15Ctrl", "bgMidgreen");
        
            var HeadO1 = new HeadLine();
            HeadO1.create("HMIP15Ctrl", "0px", "transparent", "D-Temp Sensor");
            var labelO1 = new label();
            labelO1.create("HMIP15Ctrl", "50px", "30px", "18px", "white", "Adr.: OEQ0674318");
            var labelO2 = new label();
            labelO2.create("HMIP15Ctrl", "80px", "30px", "18px", "white", "Location: Schlafzimmer");

            var DiIPSO1 = new StateDisplay();
            DiIPSO1.create("HMIP15Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "Kanal1",
                "string");
            var DiIPSO2 = new StateDisplay();
            DiIPSO2.create("HMIP15Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "Kanal2",
                "string");
            var DiIPSO3 = new StateDisplay();
            DiIPSO3.create("HMIP15Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "Kanal3",
                "string");
            var DiIPSO4 = new StateDisplay();
            DiIPSO4.create("HMIP15Ctrl", "midgreenLight", "", "360px", "30px", "60px", "202px", "18px",
                "Kanal4",
                "string");
      


        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HM-WDS30 Tem Diff Sensor              ***********************   -->
        //<!--  ************************       Wohnzimmer                                   ***********************   -->
         //<!-- ****************************************************************************************************   -->
            var CtrlwindowHMIP16 = new Area();
            CtrlwindowHMIP16.createCtrl("HMIP16Ctrl", "bgMidgreen");
       
            var HeadP1 = new HeadLine();
            HeadP1.create("HMIP16Ctrl", "0px", "transparent", "D-Temp Sensor");
            var labelP1 = new label();
            labelP1.create("HMIP16Ctrl", "50px", "30px", "18px", "white", "Adr.: OEQ0674345");
            var labelP2 = new label();
            labelP2.create("HMIP16Ctrl", "80px", "30px", "18px", "white", "Location: Wohnzimmer");

            var DiIPSP1 = new StateDisplay();
            DiIPSP1.create("HMIP16Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "Kanal1",
                "string");
            var DiIPSP2 = new StateDisplay();
            DiIPSP2.create("HMIP16Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "Kanal2",
                "string");
            var DiIPSP3 = new StateDisplay();
            DiIPSP3.create("HMIP16Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "Kanal3",
                "string");
            var DiIPSP4 = new StateDisplay();
            DiIPSP4.create("HMIP16Ctrl", "midgreenLight", "", "360px", "30px", "60px", "202px", "18px",
                "Kanal4",
                "string");
       


        //<!-- ****************************************************************************************************   -->
        //<!--  ************************       CTRL - HMIP.PS Funk Schalt Steckdose         ***********************   -->
        //<!--  ************************       Wohnzimmer      Repeater                     ***********************   -->
        //<!-- ****************************************************************************************************   -->
      
            var CtrlwindowHMIP17 = new Area();
            CtrlwindowHMIP17.createCtrl("HMIP17Ctrl", "bgMidgreen");
      
            var HeadQ1 = new HeadLine();
            HeadQ1.create("HMIP17Ctrl", "0px", "transparent", "Steckdose - Repeater");
            var labelQ1 = new label();
            labelQ1.create("HMIP17Ctrl", "50px", "30px", "18px", "white", "Adr.: 00021A498F8F6A");
            var labelQ2 = new label();
            labelQ2.create("HMIP17Ctrl", "80px", "30px", "18px", "white", "Location: Wohnzimmer");

            var DiIPSQ1 = new StateDisplay();
            DiIPSQ1.create("HMIP17Ctrl", "midgreenLight", "", "150px", "30px", "60px", "202px", "18px",
                "RSSI_Device",
                "string");
            var DiIPSQ2 = new StateDisplay();
            DiIPSQ2.create("HMIP17Ctrl", "midgreenLight", "", "220px", "30px", "60px", "202px", "18px",
                "RSSI Peer",
                "string");
            var DiIPSQ3 = new StateDisplay();
            DiIPSQ3.create("HMIP17Ctrl", "midgreenLight", "", "290px", "30px", "60px", "202px", "18px",
                "Unreach",
                "string");
     






