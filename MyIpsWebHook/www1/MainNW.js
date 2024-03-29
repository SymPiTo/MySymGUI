 //<!-- ----------------------------------------------------------------------- -->
 //<!--                            Area: Network                          -->
 //<!-- ----------------------------------------------------------------------- -->

 //<!-- ----------------------- Main Area: Network ----------------------- -->
 
     var windowNW = new Area();
     windowNW.createMain("MainNW", "bgBlue");
 
     var rahmFB = new Rahmen();
     rahmFB.create("MainNW", "20px", "210px", "400px", "200px", "glas");

     let linie = new drawLine();
     linie.draw("MainNW", "300", "50", "300", "20", "red", "4");

     var DSLIn = new VarDis();
     DSLIn.create("MainNW", "black", "150px", "100px", "100px", "20px", "kB", null, null, "fa fa-arrow-right");
     var DSLOut = new VarDis();
     DSLOut.create("MainNW", "black", "180px", "100px", "100px", "20px", "kB", null, null, "fa fa-arrow-left");




     var VarDSL = new VarDis();
     VarDSL.create("MainNW", "black", "60px", "220px", "80px", "20px", "",
         "aus", "an");
     var INet = new VarDis();
     INet.create("MainNW", "black", "60px", "320px", "80px", "20px", "",
         "aus", "an");

     var FBextAdr = new StateDisplay();
     FBextAdr.create("MainNW", "cyanLight", "", "130px", "219px", "50px", "170px", "20px",
         "External Address", "string", "", "", "", "");
     var FBDNS = new StateDisplay();
     FBDNS.create("MainNW", "cyanLight", "", "190px", "219px", "50px", "170px", "14px",
         "Static Adress", "string", "", "", "", "");

     var labelMyPC = new label();
     labelMyPC.create("MainNW", "10%", "65%", "18px", "white", "My WorkStation");

     var FontBtnMyPC = new FontButton();
     FontBtnMyPC.create("MainNW", "fontbutton", "cyanLight", "10vh", "80%", "fa fa-power-off", "60px", "60px",
         "32px", "", 'func(IPS_RunScript,42590)');


     var lablabelABBPCelABBPC = new label();
     labelMyPC.create("MainNW", "20%", "65%", "18px", "white", "ABB Computer");

     var FontBtnABBPC = new FontButton();
     FontBtnABBPC.create("MainNW", "fontbutton", "cyanLight", "20vh", "80%", "fa fa-power-off", "60px", "60px", "32px",
         "", 'func(IPS_RunScript,42590)');
 

 //<!-- ----------------------- Ctrl Area: Network Devices ----------------------- -->

 
     var CtrlwindowNW = new Area();
     CtrlwindowNW.createCtrl("MainNWCtrl", "bgMidgreen");
 
     var Head1 = new HeadLine();
     Head1.create("MainNWCtrl", "0px", "transparent", "Ethernet");

     var CFBhosts = JSON.parse(ipsObj.ips.ID11403);
     var iHost = CFBhosts.length;
     ipsObj.NoHosts = iHost;
     for (i = 0; i < iHost; i++) {
         eval("ledno" + i + "= new Led()");
         let y = parseInt("70px", 10) + parseInt("50px", 10) * i + "px";
         eval("ledno" + i + '.create("MainNWCtrl", "' + y + '", "5px", "#ABFF00")');

         eval("IPdis" + i + "= new StateDisplay()");
         let z = parseInt("70px", 10) + parseInt("50px", 10) * i + "px";
         eval("IPdis" + i + '.create("MainNWCtrl","midgreenLight", "", "' + z +
             '", "70px", "50px", "150px", "18px", "IP Adress", "string", "", "", "", "")');

     }
 