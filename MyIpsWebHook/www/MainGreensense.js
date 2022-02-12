//<!-- ----------------------------------------------------------------------- -->
//<!--                                 Greensense Pflanzen Sensor                     -->
//<!-- ----------------------------------------------------------------------- -->
 
    var MainGreensense = new Area();
    MainGreensense.createMain("MainGreensense", "bgCyan");
    //-------------------------------------------------

    var Sensor5Icon = new DynIcon("smily", "ana", false);
    Sensor5Icon.create("MainGreensense", "10px", "20px", "wide");

    var Sensor3Icon = new DynIcon("smily", "ana", false);
    Sensor3Icon.create("MainGreensense", "10px", "140px", "wide");

    var Sensor4Icon = new DynIcon("smily", "ana", false);
    Sensor4Icon.create("MainGreensense", "10px", "260px", "wide");

    var Sensor1Icon = new DynIcon("smily", "ana", false);
    Sensor1Icon.create("MainGreensense", "10px", "380px", "wide");

    var Sensor2Icon = new DynIcon("smily", "ana", false);
    Sensor2Icon.create("MainGreensense", "10px", "500px", "wide");

    var Sensor5Lm = new TransVarDisplay();
    Sensor5Lm.create("MainGreensense", "100px", "0px", "lime", "24px", "Licht", "Lx");

    var Sensor3Lm = new TransVarDisplay();
    Sensor3Lm.create("MainGreensense", "100px", "110px", "lime", "24px", "Licht", "Lx");

    var Sensor4Lm = new TransVarDisplay();
    Sensor4Lm.create("MainGreensense", "100px", "220px", "lime", "24px", "Licht", "Lx");

    var Sensor1Lm = new TransVarDisplay();
    Sensor1Lm.create("MainGreensense", "100px", "330px", "lime", "24px", "Licht", "Lx");

    var Sensor2Lm = new TransVarDisplay();
    Sensor2Lm.create("MainGreensense", "100px", "430px", "lime", "24px", "Licht", "Lx");

    var Plant5Img = new ShowUrlImage();
    Plant5Img.create("MainGreensense", "200px", "30px", "100px", "100px",
        "http://api.greensens.de/plants/ZXVwaG9yYmlhIGFlcnVnaW5vc2EuanBn.jpg");

    var Plant3Img = new ShowUrlImage();
    Plant3Img.create("MainGreensense", "200px", "140px", "100px", "100px",
        "http://api.greensens.de/plants/YXN0cm9waHl0dW0gYXN0ZXJpYXMuanBn.jpg");

    var Plant4Img = new ShowUrlImage();
    Plant4Img.create("MainGreensense", "200px", "250px", "100px", "100px",
        "http://api.greensens.de/plants/ZWNoaW5vcHNpcyB0dWJpZmxvcmEuanBn.jpg");

    var Plant1Img = new ShowUrlImage();
    Plant1Img.create("MainGreensense", "200px", "380px", "100px", "100px",
        "http://api.greensens.de/plants/YWxvZSB2ZXJhLmpwZw==.jpg");

    var Plant2Img = new ShowUrlImage();
    Plant2Img.create("MainGreensense", "200px", "490px", "100px", "100px",
        "http://api.greensens.de/plants/YWxvZSB2ZXJhLmpwZw==.jpg");

    var Sensor5Temp = new TransVarDisplay();
    Sensor5Temp.create("MainGreensense", "350px", "0px", "lime", "24px", "Temp.", "°C");

    var Sensor3Temp = new TransVarDisplay();
    Sensor3Temp.create("MainGreensense", "350px", "110px", "lime", "24px", "Temp", "°C");

    var Sensor4Temp = new TransVarDisplay();
    Sensor4Temp.create("MainGreensense", "350px", "220px", "lime", "24px", "Temp", "°C");

    var Sensor1Temp = new TransVarDisplay();
    Sensor1Temp.create("MainGreensense", "350px", "330px", "lime", "24px", "Temp", "°C");

    var Sensor2Temp = new TransVarDisplay();
    Sensor2Temp.create("MainGreensense", "350px", "440px", "lime", "24px", "Temp", "°C");


    var Sensor5Feuchte = new TransVarDisplay();
    Sensor5Feuchte.create("MainGreensense", "450px", "0px", "lime", "24px", "Feuchte.", "%");

    var Sensor3Feuchte = new TransVarDisplay();
    Sensor3Feuchte.create("MainGreensense", "450px", "110px", "lime", "24px", "Feuchte", "%");

    var Sensor4Feuchte = new TransVarDisplay();
    Sensor4Feuchte.create("MainGreensense", "450px", "220px", "lime", "24px", "Feuchte", "%");

    var Sensor1Feuchte = new TransVarDisplay();
    Sensor1Feuchte.create("MainGreensense", "450px", "330px", "lime", "24px", "Feuchte", "%");

    var Sensor2Feuchte = new TransVarDisplay();
    Sensor2Feuchte.create("MainGreensense", "450px", "440px", "lime", "24px", "Feuchte", "%");



    var Sensor5ID = new TransVarDisplay();
    Sensor5ID.create("MainGreensense", "550px", "0px", "lime", "18px", "ID", "");

    var Sensor3ID = new TransVarDisplay();
    Sensor3ID.create("MainGreensense", "550px", "110px", "lime", "18px", "ID", "");

    var Sensor4ID = new TransVarDisplay();
    Sensor4ID.create("MainGreensense", "550px", "220px", "lime", "18px", "ID", "");

    var Sensor1ID = new TransVarDisplay();
    Sensor1ID.create("MainGreensense", "550px", "330px", "lime", "18px", "ID", "", );

    var Sensor2ID = new TransVarDisplay();
    Sensor2ID.create("MainGreensense", "550px", "440px", "lime", "18px", "ID", "");
 






//<!-- ----------------------------------------------------------------------- -->
//<!--                                  Ctrl                                   -->
//<!-- ----------------------------------------------------------------------- -->

//<!--  <Ctrl id = MainGreensenseCtrl class="MainGreensenseCtrl"></Ctrl>  -->
 
    var CtrlMainGreensense = new Area();
    CtrlMainGreensense.createCtrl("MainGreensenseCtrl", "bgCyanLight");
    //---------------------------------------------------------
    var Sensor1Stat = new StateDisplay();
    Sensor1Stat.create("MainGreensenseCtrl", "cyanLight", "", "20px", "20px", "60px", "202px", "20px",
        "Sensor 1 - Zustand","bool",
        "N OK", "OK", "", "", "");

    var Sensor2Stat = new StateDisplay();
    Sensor2Stat.create("MainGreensenseCtrl", "cyanLight", "", "120px", "20px", "60px", "202px", "20px",
        "Sensor 2 - Zustand","bool",
        "N OK", "OK", "", "", "");

    var Sensor3Stat = new StateDisplay();
    Sensor3Stat.create("MainGreensenseCtrl", "cyanLight", "", "220px", "20px", "60px", "202px", "20px",
        "Sensor 3 - Zustand","bool",
        "N OK", "OK", "", "", "");

    var Sensor4Stat = new StateDisplay();
    Sensor4Stat.create("MainGreensenseCtrl", "cyanLight", "", "320px", "20px", "60px", "202px", "20px",
        "Sensor 4 - Zustand","bool",
        "N OK", "OK", "", "", "");

    var Sensor5Stat = new StateDisplay();
    Sensor5Stat.create("MainGreensenseCtrl", "cyanLight", "", "420px", "20px", "60px", "202px", "20px",
        "Sensor 5 - Zustand","bool",
        "N OK", "OK", "", "", "");
 