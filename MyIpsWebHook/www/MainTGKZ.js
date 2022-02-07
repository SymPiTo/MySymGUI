 //<!-- ----------------------------------------------------------------------- -->
 //<!--                 Area: Kinderzimmer Graph Temperatur                       -->
 //<!-- ----------------------------------------------------------------------- -->

 //<!-- ----------------------- Main Area: Kinderzimmer - Temperatur Graph ----------------------- -->
 
     var windowTGKZ = new Area();
     windowTGKZ.createMain("MainTGKZ", "bgOlive");
 
     var graphTKZ = new MyChart();
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
     graphTKZ.create("MainTGKZ", '27353', '%', '°C', ds0, ds1, ds2, "90%", "90%", "300px", "20px");
 

 //<!-- ----------------------- Ctrl Area: Kinderzimmer - Temperatur Graph ----------------------- -->
 
     var CtrlwindowTGKZ = new Area();
     CtrlwindowTGKZ.createCtrl("MainTGKZCtrl", "bgOlive");
 