 //<!-- ----------------------------------------------------------------------- -->
 //<!--                 Area: Wohnzimmer Graph Temperatur                       -->
 //<!-- ----------------------------------------------------------------------- -->

 //<!-- ----------------------- Main Area: Wohnzimmer - Temperatur Graph ----------------------- -->
  
     var windowTGWZ = new Area();
     windowTGWZ.createMain("MainTGWZ", "bgCyan");
 
     var graphTWZ = new MyChart();
     var ds0 = new Array();
     var ds1 = new Array();
     var ds2 = new Array();
     ds0['label'] = "Temp-Ist";
     ds1['label'] = "Temp-Soll";
     ds2['label'] = "Position";
     ds0['id'] = "B";
     ds1['id'] = "B";
     ds2['id'] = "A";
     ds0['color'] = 'red';
     ds1['color'] = 'blue';
     ds2['color'] = 'white';
     graphTWZ.create("MainTGWZ", '34129', '%', '°C', ds0, ds1, ds2, "90%", "90%", "300px", "20px");
 

 //<!-- ----------------------- Ctrl Area: Wohnzimmer - Temperatur Graph ----------------------- -->
 
     var CtrlwindowTGWZ = new Area();
     CtrlwindowTGWZ.createCtrl("MainTGWZCtrl", "bgCyan");
 