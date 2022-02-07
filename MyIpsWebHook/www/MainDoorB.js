 //<!-- ----------------------------------------------------------------------- -->
 //<!--                            Area: Balkon - Tür                           -->
 //<!-- ----------------------------------------------------------------------- -->

 //<!-- ----------------------- Main Area: Balkon - Tür ----------------------- -->
 
     var windowDoorB = new Area();
     windowDoorB.createMain("MainDoorB", "bgBlue");
  
     var DynIconDoorB = new DynIcon("door", "bin", false);

     DynIconDoorB.create("MainDoorB", "40px", "70px", "250px", "250px");
 

 //<!-- ----------------------- Ctrl Area: Balkon - Tür ----------------------- -->
 
     var CtrlwindowDoorB = new Area();
     CtrlwindowDoorB.createCtrl("MainDoorBCtrl", "bgBlue");
  
     var DisDoorBCtrl = new StateDisplay();
     DisDoorBCtrl.create("MainDoorBCtrl", "blueLight", "", "50px", "20px", "60px", "202px", "20px",
         "Tür Position", "bool",
         "offen", "geschlossen", "", "", "");
  