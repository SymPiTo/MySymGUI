//<!-- *************************************************************************************   -->
//<!--  ************************         Main - Cam Wohnzimmer      ************************   -->
//<!-- *************************************************************************************   -->
//<!-- ************************ Cam Wohnzimmer ************************ -->
//<!-- <Main id="MainCamWZ"  class="CamWZ"></Main> -->

 
    var windowCamWZ = new Area();
    windowCamWZ.createMain("MainCamWZ", "bgRed");
 
    let camImage = new ShowCamImage();
    camImage.create("MainCamWZ", "20px", "20px", "1000px", "800px");
 


//<!-- *************************************************************************************   -->
//<!--  ************************         Ctrl - Fenster Bad         ************************   -->
//<!-- *************************************************************************************   -->
//<!-- <Ctrl id="MainLightSZCtrl"  class="LightSZCtrl"></Ctrl> -->
 
    var CtrlwindowCamWZ = new Area();
    CtrlwindowCamWZ.createCtrl("MainCamWZCtrl", "bgRed");
 