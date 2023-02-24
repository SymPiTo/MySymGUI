        //<!-- ----------------------------------------------------------------------- -->
        //<!--                                  UPNP                                   -->
        //<!-- ----------------------------------------------------------------------- -->
     
            var MainUpnp = new Area();
            MainUpnp.createMain("MainUpnp", "bgPurple");

            var RahmenA = new Kachel();
            RahmenA.create("MainUpnp", "10px", "20px", "200px", "240px", "transparent", "Server")
            var ServerImg = new ShowUrlImage();
            ServerImg.create("MainUpnp", "50px", "60px", "100px", "100px", "");

            var ServerBtn = new ButtonSlider();
            ServerBtn.create("MainUpnp", "180px", "25px", "190px", "40px", "purple",
                'func(UPNP_setServer,19824,0,dec)', 'func(UPNP_setServer,19824,0,inc)');

            var RahmenB = new Kachel();
            RahmenB.create("MainUpnp", "10px", "360px", "200px", "240px", "transparent", "Devices")

            var ClientImg = new ShowUrlImage();
            ClientImg.create("MainUpnp", "50px", "400px", "100px", "100px", "");

            var ClientBtn = new ButtonSlider();
            ClientBtn.create("MainUpnp", "180px", "365px", "190px", "40px", "purple",
                'func(UPNP_setClient,19824,0,dec)', 'func(UPNP_setClient,19824,0,inc)');




            var RahmenC = new Kachel();
            RahmenC.create("MainUpnp", "290px", "10px", "550px", "110px", "transparent", "Libraries")

            var CtrlBtnupnp1 = new CtrlButton();
            CtrlBtnupnp1.create("MainUpnp", "330px", "15px", "ctrlbutton", "smaller", "purple", "CD", "black",
                "SMload", "MainUpnpCD", "");

            var CtrlBtnupnp2 = new CtrlButton();
            CtrlBtnupnp2.create("MainUpnp", "330px", "125px", "ctrlbutton", "smaller", "purple", "Foto", "black",
                "SMload", "MainFoto", "");


            var CtrlBtnupnp4 = new CtrlButton();
            CtrlBtnupnp4.create("MainUpnp", "330px", "235px", "ctrlbutton", "smaller", "purple", "Video", "black",
                "SMload", "MainVideo", "");

            var CtrlBtnupnp3 = new CtrlButton();
            CtrlBtnupnp3.create("MainUpnp", "330px", "340px", "ctrlbutton", "smaller", "purple", "Audio", "black",
                "SM", "MainAudio", "");
            var CtrlBtnupnp3 = new CtrlButton();
            CtrlBtnupnp3.create("MainUpnp", "330px", "450px", "ctrlbutton", "smaller", "purple", "Playlist", "black",
                "ctrlWindow", "MainAudioBookCtrl", "");

            var DisMeldung = new StateDisplay();
            DisMeldung.create("MainUpnp", "purpleLight", "", "410px", "30px", "50px", "500px", "18px",
                "Meldung",
                "string");

            var btnSyncMusik = new FontCtrlButton();
            btnSyncMusik.create("MainUpnp", "purple", "480px", "10px", "fa fa-sync", "Sync Musik",
                "func", 'func(UPNP_syncLib,19824,Musik)', "",
                "130px", "50px", "white", "19px", "yellow");
            var btnSyncAudio = new FontCtrlButton();
            btnSyncAudio.create("MainUpnp", "purple", "480px", "150px", "fa fa-sync", "Sync Audio",
                "func", 'func(UPNP_syncLib,19824,Audio)', "",
                "130px", "50px", "white", "19px", "yellow");
            var btnSyncFoto = new FontCtrlButton();
            btnSyncFoto.create("MainUpnp", "purple", "480px", "290px", "fa fa-sync", "Sync Foto",
                "func", 'func(UPNP_syncLib,19824,Foto)', "",
                "130px", "50px", "white", "19px", "yellow");
            var btnSyncVideo = new FontCtrlButton();
            btnSyncVideo.create("MainUpnp", "purple", "480px", "430px", "fa fa-sync", "Sync Video",
                "func", 'func(UPNP_syncLib,19824,Video)', "",
                "130px", "50px", "white", "19px", "yellow");
       
        //<!-- ----------------------------------------------------------------------- -->
        //<!--                         Discover   CTRL - UPNP                          -->
        //<!-- ----------------------------------------------------------------------- -->

     
            var MainUpnpCtrl = new Area();
            MainUpnpCtrl.createCtrl("MainUpnpCtrl", "bgPurple");

            var UPNPServerBox = new ArrayListBox();
            UPNPServerBox.create("MainUpnpCtrl", "10px", "30px", "150px", "190px", "purple", "white", "Serverliste");

            var btnSearchServer = new CtrlButton();
            btnSearchServer.create("MainUpnpCtrl", "220px", "20px", "ctrlbutton", "normal", "purpleBtn",
                "Get Server", "black", "func", "", 'func(UPNP_searchUPNP,19824,server)');

            var UPNPDeviceBox = new ArrayListBox();
            UPNPDeviceBox.create("MainUpnpCtrl", "110px", "30px", "150px", "190px", "purple", "white",
                "Deviceliste");

            var btnSearchClient = new CtrlButton();
            btnSearchClient.create("MainUpnpCtrl", "500px", "20px", "ctrlbutton", "normal", "purpleBtn",
                "Get Devices", "black", "func", "", 'func(UPNP_searchUPNP,19824,client)');
       

        //<!-- ***********************************************************************************   -->
        //<!--  ************************      Browse   CTRL - UPNP    ******************************      -->
        //<!-- ***********************************************************************************   -->
      
            var CtrlwindowBrowseUpnp = new Area();
            CtrlwindowBrowseUpnp.createCtrl("MainUpnpBrowseCtrl", "bgPurple");
     