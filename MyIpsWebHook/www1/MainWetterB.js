        //<!-- ***********************************************************************************      -->
        //<!--  ************************          Wetter     ************************      -->
        //<!-- ***********************************************************************************      -->
        //<!-- <Main id="MainWetter" class="Wetter bgGrey"></Main>    -->
       
            var windowWetter = new Area();
            windowWetter.createMain("MainWetterB", "bgGrey");
       
            var WetterLabelB = new WeatherLabel;
            WetterLabelB.create("MainWetterB", "10px", "5px", "225px");
            var WetterLabelC = new WeatherLabel;
            WetterLabelC.create("MainWetterB", "10px", "190px", "225px");
            var WetterLabelD = new WeatherLabel;
            WetterLabelD.create("MainWetterB", "10px", "380px", "225px");
            var WetterLabelE = new WeatherLabel;
            WetterLabelE.create("MainWetterB", "300px", "5px", "225px");
            var WetterLabelF = new WeatherLabel;
            WetterLabelF.create("MainWetterB", "300px", "190px", "225px");
            var WetterLabelG = new WeatherLabel;
            WetterLabelG.create("MainWetterB", "300px", "380px", "225px");
     

        //</script><!-- ***********************************************************************************      -->
        //<!--  ************************          WetterCtrl     ************************      -->
        //<!-- ***********************************************************************************      -->
        //<!-- <Ctrl id="MainWetterCtrl" class="WetterCtrl bgGrey"></Ctrl>    -->
   
            var CtrlwindowWetter = new Area();
            CtrlwindowWetter.createCtrl("MainWetterBCtrl", "bgGrey");
     
            var WetterLabelA = new WeatherLabel;
            WetterLabelA.create("MainWetterBCtrl", "10px", "35px", "225px");
            var WetterLabelNow = new WeatherLabel;
            WetterLabelNow.create("MainWetterBCtrl", "250px", "35px", "270px");
   