    function reply(msg) {
      switch (msg) {
        case "HzWZauto":
          //   DisModeHzWZ.setTextColor("yellow");
          break;
        case "HzWZman":
          //    DisModeHzWZ.setTextColor("yellow");
          break;
        case "HzWZparty":
          //    DisModeHzWZ.setTextColor("yellow");
          break;
        case "HzWZurlaub":
          //     DisModeHzWZ.setTextColor("yellow");
          break;

        case "HzKZauto":
          //    DisModeHzKZ.setTextColor("yellow");
          break;
        case "HzKZman":
          //    DisModeHzKZ.setTextColor("yellow");
          break;
        case "HzKZparty":
          //   DisModeHzKZ.setTextColor("yellow");
          break;
        case "HzKZurlaub":
          //  DisModeHzKZ.setTextColor("yellow");
          break;

        case "HzSZauto":
          //  DisModeHzSZ.setTextColor("yellow");
          break;
        case "HzSZman":
          //  DisModeHzSZ.setTextColor("yellow");
          break;
        case "HzSZparty":
          //   DisModeHzSZ.setTextColor("yellow");
          break;
        case "HzSZurlaub":
          //  DisModeHzSZ.setTextColor("yellow");
          break;

        case "HzKauto":
          //   DisModeHzK.setTextColor("yellow");
          break;
        case "HzKman":
          //  DisModeHzK.setTextColor("yellow");
          break;
        case "HzKparty":
          //   DisModeHzK.setTextColor("yellow");
          break;
        case "HzKurlaub":
          //   DisModeHzK.setTextColor("yellow");
          break;
      }
    }

    function showAList(text) {
      AList.update(text);
    }

    function checkUsedVars(ips) {
      var sym = [];
      try {
        sym[0] = ips[0].ID15922; //Temperatur SZ (HM)
        sym[1] = ips[0].ID37045; //Temperatur KZ
        sym[2] = ips[0].ID51079; //Temperatur WZ
        sym[3] = ips[0].ID54070; //Temperatur K
        sym[4] = ips[0].ID18059; //Position HZ WZ
        sym[5] = ips[0].ID49335; //Position HZ KZ
        sym[6] = ips[0].ID37431 * 100; //Position HZ SZ (HM)
        sym[7] = ips[0].ID51619; //Position HZ K   
        sym[8] = ips[0].ID36168; // Diele Präsenzmelder
        sym[9] = ips[0].ID22196; // Diele Haustür   
        sym[10] = ips[0].ID56454; // humidity KZ
        sym[11] = ips[0].ID50329; // humidity SZ  

        sym[12] = ips[0].ID54298; //Rollo KZ Mode
        sym[13] = ips[0].ID59964; //Rollo KZ Postion 


        sym[16] = ips[0].ID53773; //Rollo WZ up/down
        sym[17] = ips[0].ID49991; //Rollo WZ Position
        sym[18] = ips[0].ID13953; //Rollo WZ Mode
        sym[19] = ips[0].ID21488; //Rollo WZ Schaltzeit Mo-Fr
        sym[20] = ips[0].ID37176; //Rollo WZ Schaltzeit Sa-So 
        sym[53] = ips[0].ID15822; //Rollo WZ SSunSet  

        sym[21] = ips[0].ID57642; //Rollo B Mode
        sym[22] = ips[0].ID25065; //Rollo B Postion          
        sym[23] = ips[0].ID57942; //Sonnenuntergang
        sym[24] = ips[0].ID11938; //Sonnenaufgang
        sym[25] = ips[0].ID37348; //Balkontür
        sym[26] = ips[0].ID53071; //Soll Modus Hz WZ
        sym[27] = ips[0].ID31769; //Soll Temp Hz WZ 
        sym[28] = ips[0].ID27789; //Soll Temp Ausstehend Hz WZ
        sym[29] = ips[0].ID23472; //Bat Hz WZ
        sym[30] = ips[0].ID52085; //Bat Hz KZ
        sym[31] = ips[0].ID42343; //Bat Hz Aktor SZ
        sym[32] = ips[0].ID22083; //Bat Hz K
        sym[33] = ips[0].ID34102; //Soll Modus Hz KZ
        sym[34] = ips[0].ID36377; //Soll Temp Hz KZ 
        sym[35] = ips[0].ID38441; //Soll Temp Ausstehend Hz KZ
        sym[36] = ips[0].ID47734; //Soll Modus Hz SZ (HM)
        sym[37] = ips[0].ID36544; //Soll Temp Hz SZ  (HM)
        sym[38] = ips[0].ID55889; //Soll Temp Ausstehend Hz SZ (HM)
        sym[39] = ips[0].ID26565; //Temp Vor Hz SZ
        sym[40] = ips[0].ID32007; //Temp Rueck Hz SZ  
        sym[41] = ips[0].ID39562; //Soll Modus Hz K
        sym[42] = ips[0].ID54426; //Soll Temp Hz K 
        sym[43] = ips[0].ID21258; //Soll Temp Ausstehend Hz K     
        sym[44] = ips[0].ID41310; //Battery Alarm  
        sym[45] = ips[0].ID53083; //Security Meldung
        sym[46] = ips[0].ID16709; //Temperatur Balkon Aussen
        sym[47] = ips[0].ID27502; //Humidity Balkon Aussen
        sym[48] = ips[0].ID44154; //Alarm Anlage aktiv

        sym[14] = ips[0].ID53769; //Rollo K Mode
        sym[15] = ips[0].ID11004; //Rollo K Postion 
        sym[49] = ips[0].ID13003; //Rollo K up/down
        sym[50] = ips[0].ID34905; //Rollo K Schaltzeit Mo-Fr
        sym[51] = ips[0].ID52660; //Rollo K Schaltzeit Sa-So
        sym[52] = ips[0].ID28605; //Rollo K SSunSet  


        sym[21] = ips[0].ID25457; //Rollo B Mode
        sym[22] = ips[0].ID26881; //Rollo B Postion 
        sym[54] = ips[0].ID42649; //Rollo B up/Down
        sym[55] = ips[0].ID41457;; //Rollo B Schaltzeit Mo-Fr
        sym[56] = ips[0].ID25503; //Rollo B Schaltzeit Sa-So
        sym[57] = ips[0].ID11634; // Rollo B SunSet active  

        sym[58] = ips[0].ID36168; //Anwesenheit Stste Diele
        sym[59] = ips[0].ID30280; //Bad Fenster Aktor LowBat
        sym[60] = ips[0].ID49846; //Bad Taster-Fenster LowBat
        sym[61] = ips[0].ID33304; //Balkon Temp Feuchte Sensor LowBat
        sym[62] = ips[0].ID26399; //Diele Präsenzmelder LowBat
        sym[63] = ips[0].ID25322; //Haustür Kontakt LowBat
        sym[64] = ips[0].ID38784; //Kinderzimmer Temp-Feuchte Sensor LowBat
        sym[65] = ips[0].ID16681; //Küche Wassermelder LowBat
        sym[66] = ips[0].ID18803; //Schlafzimmer Feuchte Sensor LowBat
        sym[67] = ips[0].ID50294; //Sabotage Alarm Bewegungsmelder Diele
        sym[68] = ips[0].ID54473; //Wasser Sensor Küche Alarm
        sym[69] = ips[0].ID23685; //Wasser Sensor Küche Feuchte
        sym[70] = ips[0].ID27499; //Wasser Sensor Küche Wasserstand
        sym[71] = ips[0].ID20350; //Wasser Sensor Bad Batterie
        sym[72] = ips[0].ID58710; //Wasser Sensor Bad Alarm
        sym[73] = ips[0].ID17453; //Wasser Sensor Bad Feuchte
        sym[74] = ips[0].ID36414; //Wasser Sensor Bad Wasserstand
        sym[75] = ips[0].ID23042; //TV Volume
        sym[76] = ips[0].ID34392; //TV Power
        sym[77] = ips[0].ID43304; //TV Channel - 15810
        sym[78] = ips[0].ID53698; //TV Channel Name - 41307
        sym[79] = ips[0].ID26003; //TV Source 24408
        sym[80] = ips[0].ID35428; //TV SourceList 45960
        sym[81] = ips[0].ID16753; //Denon Server Name
        sym[82] = ips[0].ID32160; //SZ Sonos Artist
        sym[83] = ips[0].ID23875; //SZ Sonos Title
        sym[84] = ips[0].ID38320; //SZ Sonos Album
        sym[85] = ips[0].ID36157; //SZ Sonos Volume
        sym[86] = ips[0].ID24061; //SZ Sonos Mute
        sym[87] = ips[0].ID44467; //SZ Sonos Loudnes
        sym[88] = ips[0].ID55859; //SZ Sonos Bass
        sym[89] = ips[0].ID29767; //SZ Sonos Treble
        sym[90] = ips[0].ID57771; //SZ Sonos Playmode
        sym[91] = ips[0].ID35731; //SZ Sonos Cover image  
        sym[92] = ips[0].ID34292; //ArtisPicLastFM - Denon
        sym[93] = ips[0].ID30505; //DIDL Artist - Denon
        sym[94] = ips[0].ID17922; //DIDL Title - Denon
        sym[95] = ips[0].ID31822; //Line3 - Denon
        sym[96] = ips[0].ID22520; //Power - Denon
        sym[97] = ips[0].ID19185; //Volume - Denon
        sym[98] = ips[0].ID33459; //TVchProgList 31510
        sym[99] = ips[0].ID35025; //TVProgList  49099
        sym[100] = ips[0].ID54563; //Kochbuch Titel
        sym[101] = ips[0].ID18416; //Kochbuch Image
        sym[102] = JSON.parse(ips[0].ID29246); //Kochbuch Zutaten

        sym[103] = ips[0].ID59260; //Kochbuch Rezept
        sym[104] = ips[0].ID16493; //Kochbuch Liste
        sym[105] = ips[0].ID46852; //Denon Source
        sym[106] = ips[0].ID19506; //Lampe - Schalter State Schlafzimmer
        sym[107] = ips[0].ID35590; //Lampe - Schalter current Schlafzimmer
        sym[108] = ips[0].ID43083; //Lampe - Schalter Power Schlafzimmer
        sym[109] = ips[0].ID12561; //Lampe - Schalter EnergyCounter Schlafzimmer
        sym[110] = ips[0].ID17052; // Security Code
        sym[111] = JSON.parse(ips[0].ID44125) //Wetter Week Data
        sym[112] = JSON.parse(ips[0].ID46593) //Wetter NowDay Data

        sym[113] = ips[0].ID22052; //Rollo SZ Mode
        sym[114] = ips[0].ID18298; //Rollo SZ Postion 
        sym[115] = ips[0].ID58302; //Rollo SZ up/down
        sym[116] = ips[0].ID18740; //Rollo SZ Schaltzeit Mo-Fr
        sym[117] = ips[0].ID53883; //Rollo SZ Schaltzeit Sa-So
        sym[118] = ips[0].ID12349; //Rollo SZ SSunSet  

        sym[119] = ips[0].ID25277; //Rollo KZ Schaltzeit Sa-So
        sym[120] = ips[0].ID53747; //Rollo KZ SSunSet            
        sym[121] = ips[0].ID54434; //Rollo KZ up/down
        sym[122] = ips[0].ID28071; //Rollo KZ Schaltzeit Mo-Fr
        sym[123] = ips[0].ID34292; //Denon DIDL AlbumArt URL
        sym[124] = ips[0].ID42467; //WSS active
        sym[125] = ips[0].ID56321; //WSS Client 1
        sym[126] = ips[0].ID43949; //WSS Client 2
        sym[127] = ips[0].ID15131; //WSS Client 3
        sym[128] = ips[0].ID38435; //WSS Client 4
        sym[129] = JSON.parse(ips[0].ID26335); //UPNP Server Array
        var Server = [];
        var task_names = sym[129].map(function (task, index, array) {
          Server[index] = task.FriendlyName;
        });
        sym[130] = Server;
        sym[131] = JSON.parse(ips[0].ID59157); //UPNP Client Array
        var Client = [];
        var task_names = sym[131].map(function (task, index, array) {
          Client[index] = task.FriendlyName;
        });
        sym[132] = Client;

        sym[133] = ips[0].ID31626; //UPNP Server Icon
        sym[134] = ips[0].ID14390; //UPNP Client Icon   
        sym[135] = ips[0].ID31981; //UPNP Server key

        sym[136] = ips[0].ID16161; //CPU Frequemcy
        sym[137] = ips[0].ID12220; //CPU load 15min
        sym[138] = ips[0].ID41245; //CPU Temperature
        sym[139] = ips[0].ID54826; //CPU Voltage
        sym[140] = ips[0].ID19292; //IP
        sym[141] = ips[0].ID59797; //IPS Kernel STatus
        sym[142] = ips[0].ID41816; //IPS Version
        sym[143] = ips[0].ID29733; //Memory Free
        sym[144] = ips[0].ID39889; //Port Symcon
        sym[145] = ips[0].ID30080; //Port WSS
        sym[146] = ips[0].ID30080; //Mem SD Free

        sym[147] = ips[0].ID23367; //Error Code
        sym[148] = ips[0].ID56516; //Operating Voltage
        sym[149] = ips[0].ID20750; //RSSI Device
        sym[150] = ips[0].ID48787; //RSSI Peer
        sym[151] = ips[0].ID37634; //unreach

        sym[152] = ips[0].ID22446; //RSSI Device
        sym[153] = ips[0].ID53621; //RSSI Peer
        sym[154] = ips[0].ID51909; //unreach

        sym[155] = ips[0].ID20695; //RSSI Device
        sym[156] = ips[0].ID17718; //RSSI Peer
        sym[157] = ips[0].ID25178; //unreach

        sym[158] = ips[0].ID51834; //Duty Cycle
        sym[159] = ips[0].ID36971; // Error Code
        sym[160] = ips[0].ID29563; // Error Falt Position
        sym[161] = ips[0].ID14045; // Op voltage
        sym[162] = ips[0].ID23035; //RSSI Device
        sym[163] = ips[0].ID48609; //RSSI Peer
        sym[164] = ips[0].ID42463; //unreach

        sym[165] = ips[0].ID18797; //Duty Cycle
        sym[166] = ips[0].ID10775; // Error Code
        sym[167] = ips[0].ID36083; // Error Falt Position
        sym[168] = ips[0].ID35613; // Op voltage
        sym[169] = ips[0].ID48610; //RSSI Device
        sym[170] = ips[0].ID49852; //RSSI Peer
        sym[171] = ips[0].ID31856; //unreach

        sym[172] = ips[0].ID10422; // unreach
        sym[173] = ips[0].ID27255; // Error

        sym[174] = ips[0].ID53298; // act Temperature
        sym[175] = ips[0].ID46213; // Error Code
        sym[176] = ips[0].ID53923; // Error Overheat
        sym[177] = ips[0].ID29520; // RSSI Device
        sym[178] = ips[0].ID31167; // RSSI Peer
        sym[179] = ips[0].ID19200; // unreach

        sym[180] = ips[0].ID42477; // Op. voltage
        sym[181] = ips[0].ID32916; // RSSI Device
        sym[182] = ips[0].ID12503; // unreach

        sym[183] = ips[0].ID28998; // unreach

        sym[184] = ips[0].ID14236; // unreach

        sym[185] = ips[0].ID32177; // Fenster Position Bad

        sym[186] = ips[0].ID13580; // RSSI Device
        sym[187] = ips[0].ID38699; // RSSI Peer
        sym[188] = ips[0].ID47058; // unreach

        sym[189] = ips[0].ID39262; // RSSI Device
        sym[190] = ips[0].ID34051; // RSSI Peer
        sym[191] = ips[0].ID18170; // unreach

        sym[192] = ips[0].ID42279; //Lampe - Schalter State Wohnzimmer Fenster
        sym[193] = ips[0].ID58362; //Lampe - Schalter current Wohnzimmer Fenster
        sym[194] = ips[0].ID22672; //Lampe - Schalter Power Wohnzimmer Fenster
        sym[195] = ips[0].ID27048; //Lampe - Schalter EnergyCounter Wohnzimmer Fenster

        sym[196] = ips[0].ID12113; //Lampe - Schalter State Wohnzimmer Mitte
        sym[197] = ips[0].ID45930; //Lampe - Schalter current Wohnzimmer Mitte
        sym[198] = ips[0].ID57742; //Lampe - Schalter Power Wohnzimmer Mitte
        sym[199] = ips[0].ID21225; //Lampe - Schalter EnergyCounter Wohnzimmer Mitte

        sym[200] = ips[0].ID40790; // RSSI Device Diele
        sym[201] = ips[0].ID13713; // RSSI Peer Diele
        sym[202] = ips[0].ID38705; // unreach Diele

        sym[203] = ips[0].ID56831; //Lampe - Schalter State Diele
        sym[204] = ips[0].ID19440; //Lampe - Schalter current Diele
        sym[205] = ips[0].ID41504; //Lampe - Schalter Power Diele
        sym[206] = ips[0].ID16840; //Lampe - Schalter EnergyCounter Diele

        sym[207] = ips[0].ID10829; //Lampe - LOW BAT Schalterkontakt Diele
        sym[208] = ips[0].ID42787; //Lampe - Voltage Schalterkontakt Diele
        sym[209] = ips[0].ID25438; //Lampe - RSSI Device Schalterkontakt Diele
        sym[210] = ips[0].ID44332; //Lampe - UNREACH Schalterkontakt Diele

        sym[211] = ips[0].ID57825; //D Temp SZ Kanal 3
        sym[212] = ips[0].ID29076; //D Temp SZ Kanal 4
        sym[213] = ips[0].ID13507; //D Temp WZ Kanal 3
        sym[214] = ips[0].ID52998; //D Temp WZ Kanal 4
        sym[215] = ips[0].ID29170; //Temp Vor Hz WZ
        sym[216] = ips[0].ID47576; //Temp Rueck Hz WZ 

        sym[217] = ips[0].ID14488; // RSSI Device Steckdose
        sym[218] = ips[0].ID16447; // RSSI Peer Steckdose
        sym[219] = ips[0].ID26377; // unreach Steckdose

        sym[220] = ips[0].ID16201; // Homematic Server connected HM   
        sym[221] = ips[0].ID58903; // Homematic Server default HM  
        sym[222] = ips[0].ID44062; // Homematic Server duty cycle  HM
        sym[223] = ips[0].ID16055; // Homematic Server connected  HMIP
        sym[224] = ips[0].ID39565; // Homematic Server default HMIP  
        sym[225] = ips[0].ID29679; // Homematic Server description HMIP  
        sym[226] = ips[0].ID36540; // Homematic Server duty cycle HMIP  

        sym[227] = ips[0].ID37348; // Balkontür 
        sym[228] = ips[0].ID34489; // Präsenzsensor AZ
        sym[229] = ips[0].ID48642; // Lampe AZ
        sym[230] = ips[0].ID37348; // Tür Balkon
        sym[231] = ips[0].ID59969; // Bad Temperatur
        sym[232] = ips[0].ID14487; // Bad Humidity
        sym[233] = ips[0].ID19285; // Wohnzimmer Humidity
        sym[234] = ips[0].ID36753; // Wohnzimmer SollTempChanged
        sym[235] = ips[0].ID50046; // Kinderzimmer SollTempChanged
        sym[236] = ips[0].ID17734; // Küche SollTempChanged
        sym[237] = ips[0].ID57325; // Schlafzimmer SollTempChanged
        sym[238] = ips[0].ID54140; // UPNP Meldung
        sym[239] = ips[0].ID37871; // Arbeitszimmer Präsenzmelder Batterie
        sym[240] = ips[0].ID48751; // Bad Temt Feuchte Sensor - Regler Batterie
        sym[241] = ips[0].ID10829; // Diele Lichtschalter Batterie
        sym[242] = ips[0].ID41083; // HaustürKontakt Batterie
        sym[243] = ips[0].ID47298; // Schlafzimmer FensterKontakt Batterie

        sym[244] = ips[0].ID55813; // Schlafzimmer Temp DiffSensor Batterie
        sym[245] = ips[0].ID42343; // Schlafzimmer Heizungs Thermostat Batterie
        sym[246] = ips[0].ID44533; // Schlafzimmer Heizungs Wand Regler Batterie
        sym[247] = ips[0].ID44533; // Wohnzimmer 6fach Licht Taster Batterie
        sym[248] = ips[0].ID58490; // Schlafzimmer Fenster state
        sym[249] = ips[0].ID19999; // Schlafzimmer Heizkörper state

        sym[250] = ips[0].ID22167; // upnp Actor
        sym[251] = ips[0].ID26207; // upnp Album
        sym[252] = ips[0].ID52798; // upnp Artist
        sym[253] = ips[0].ID17831; // upnp imageURL
        sym[254] = ips[0].ID28233; // upnp Title
        sym[255] = ips[0].ID38745; // upnp Track Number
        sym[256] = ips[0].ID46310; // upnp Player
        sym[257] = ips[0].ID39621; // upnp Volume
        sym[258] = ips[0].ID12964; // upnp Client Key

        sym[259] = ips[0].ID27733; // upnp Progress
        sym[260] = ips[0].ID57135; // Denon AlbumCover Url
        sym[261] = ips[0].ID48125; // Denon Album 
        sym[262] = ips[0].ID59871; // Denon Actor 
        sym[263] = ips[0].ID54627 // Denon Progress
        sym[264] = ips[0].ID25782 // Denon TrackNo

        sym[265] = ips[0].ID59093; // AZ Lampe current
        sym[266] = ips[0].ID24994; // AZ Lampe Energie counter
        sym[267] = ips[0].ID23507; // AZ Lampe Power

      } catch (err) {
        document.getElementById("fehler").innerHTML = err.message;
      }
      let pos = sym.indexOf(undefined);
      if (pos != -1) {
        check(pos);

      }
      return sym;





    }


    function setup(sym) {
      ServerBtn.init(sym[130], "setServer");
      ClientBtn.init(sym[132], "setClient");
      Player.init(sym[132], "setClient");
      CDPlayer.init(sym[132], "setClient");
      return (initialisierung = false);
    }

    function check(index) {
      $('fehler').innerHTML = "Variable  wrong ID:" + index;


    }

    function MediaValues(ips) {

      //client = ips[0].ID42831;
      //albumno = ips[0].ID22217;
      //l = albumno.length; 
      //a = l-4;
      //albumnr = albumno.substr(a , 4)


      //albumpic = 'CDs/'+ albumnr +'.jpg';
      //document.getElementById("iconCover").src=albumpic;

      /*



             



                  
                  //document.getElementById('Progress').style.width = ips[0].ID13479*4.8;

       

      */
      //if (ips[0].ID49480 == '1'){
      //	document.getElementById('power').style.color = 'lime';
      //}else{
      //	document.getElementById('power').style.color = 'red';
      //} 

    }

    function Media(ips) {
      $('message').innerHTML = ips[0].ID55254;
      $('activeServer_A').innerHTML = ips[0].ID40574;
      //$('activeClient_A').innerHTML =  ips[0].ID16761; 
      $('activeServer_B').innerHTML = ips[0].ID40574;
      $('activeClient_B').innerHTML = ips[0].ID16761;
      $('sz2_A').innerHTML = ips[0].ID14566;
      $('sz3_A').innerHTML = sym[95];
      $('FAV_A').innerHTML = 'Fav ' + ips[0].ID58379;
      $('DDILAlbum_B').innerHTML = ips[0].ID59926;
      $('DIDLArtist_B').innerHTML = ips[0].ID12457;
      $('DIDLTitle_B').innerHTML = ips[0].ID10602;

      $('vol_A').innerHTML = sym[97] + ' db';
      $('vol_B').innerHTML = ips[0].ID54000 + ' %';
      $('Playlist_B').innerHTML = ips[0].ID22199;
      $('trackNo_A').innerHTML = ips[0].ID25782.toString();
      $('CD_A').innerHTML = ips[0].ID49481;



      var pm_A = ips[0].ID50251;
      if (pm_A == '0') {
        pm_A = 'NORMAL';
      } else if (pm_A == '1') {
        pm_A = 'RANDOM';
      } else if (pm_A == '2') {
        pm_A = 'REPEAT_ONE';
      } else if (pm_A == '3') {
        pm_A = 'REPEAT_ALL';
      }
      $('playmode_A').innerHTML = pm_A;



      var pm = ips[0].ID45176;
      if (pm == '0') {
        pm = 'NORMAL';
      } else if (pm == '1') {
        pm = 'RANDOM';
      } else if (pm == '2') {
        pm = 'REPEAT_ONE';
      } else if (pm == '3') {
        pm = 'REPEAT_ALL';
      }
      $('playmode').innerHTML = pm;


      var CeolPower = sym[96];
      if (CeolPower) {
        document.getElementById('power_A').style.color = "lime";
        document.getElementById('pwrceol').innerHTML = 'Ceol ' + 'on';
      } else if (!CeolPower) {
        document.getElementById('power_A').style.color = "red";
        document.getElementById('pwrceol').innerHTML = 'Ceol ' + 'off';
      }

      var cover_A = 'CDs/' + ips[0].ID49481.substring(3, 7) + '.jpg';
      document.getElementById("CDCover_A").src = cover_A;

      //<!-- -------------------------- TV Variable  ------------------------------  -->  
      if (ips[0].ID37104 != null) {
        $('statVol_D').innerHTML = ips[0].ID37104;
      }
      if (ips[0].ID37005 != null) {
        $('statCh_D').innerHTML = ips[0].ID37005;
      }
      if (ips[0].ID58897 != null) {
        $('TVLine1_D').innerHTML = ips[0].ID58897;
        var TVChannel = ips[0].ID58897;
        var TVChannelx = TVChannel.substr(1, TVChannel.length - 2) + '.png';
        document.getElementById("TVimg_D").src = 'images/Sender/' + TVChannelx;
      }

      if (ips[0].ID25544 != null) {
        var guide = ips[0].ID25544;
        Woerter = guide.split(';');
        $('TVz1').innerHTML = Woerter[0];
        $('TVz2').innerHTML = Woerter[1];
        $('TVz3').innerHTML = Woerter[2];
        $('TVz4').innerHTML = Woerter[3];
        $('TVz5').innerHTML = Woerter[4];
        $('TVz6').innerHTML = Woerter[5];
        $('TVz7').innerHTML = Woerter[6];
        $('TVz8').innerHTML = Woerter[7];
        $('TVz9').innerHTML = Woerter[8];
        $('TVz10').innerHTML = Woerter[9];
        $('TVz11').innerHTML = Woerter[10];
        $('TVz12').innerHTML = Woerter[11];
        $('TVz13').innerHTML = Woerter[12];
        $('TVz14').innerHTML = Woerter[13];
        $('TVz15').innerHTML = Woerter[14];
        $('TVz16').innerHTML = Woerter[15];
        $('TVz17').innerHTML = Woerter[16];
        $('TVz18').innerHTML = Woerter[17];
        $('TVz19').innerHTML = Woerter[18];
        $('TVz20').innerHTML = Woerter[19];
        $('TVz21').innerHTML = Woerter[20];
        $('TVz22').innerHTML = Woerter[21];
        $('TVz23').innerHTML = Woerter[22];
        $('TVz24').innerHTML = Woerter[23];
        $('TVz25').innerHTML = Woerter[24];
        $('TVz26').innerHTML = Woerter[25];
        $('TVz27').innerHTML = Woerter[26];
        $('TVz28').innerHTML = Woerter[27];
        $('TVz29').innerHTML = Woerter[28];
        $('TVz30').innerHTML = Woerter[29];
        $('TVz31').innerHTML = Woerter[30];
        $('TVz32').innerHTML = Woerter[31];
        $('TVz33').innerHTML = Woerter[32];
        $('TVz34').innerHTML = Woerter[33];
        $('TVz35').innerHTML = Woerter[34];
        $('TVz36').innerHTML = Woerter[35];
      }
    }

    function Heizung(sym) {
      //<!-- ******************** Temperatur   Werte Floorplan **************************  -->
      VarDisTempK_E.update(sym[3], 1);
      VarDisTempWZ_E.update(sym[2], 1);
      VarDisTempSZ_E.update(sym[0], 1);
      VarDisTempKZ_E.update(sym[1], 1);



      iHeatSz.update(sym[249]);
      iHeatWz.update(sym[4]);
      iHeatKz.update(sym[5]);
      iHeatK.update(sym[7]);


      //<!-- Temperatur Werte Glide Button  -->
      LeftMenuK.update(sym[3], "°C", "", "", "", "", "", "");
      LeftMenuWZ.update(sym[3], "°C", "", "", "", "", "", "");
      LeftMenuSZ.update(sym[3], "°C", "", "", "", "", "", "");
      LeftMenuKZ.update(sym[3], "°C", "", "", "", "", "", "");

      //<!-- ************************ Heizung Wohnzimmer ************************  -->
      MainTempHzWZ.update(sym[2], 1);
      MainPosHzWZ.update(sym[4], 0);
      MainTempVHzWZ.update(sym[215], 1);
      MainTempRHzWZ.update(sym[216], 1);

      HzCtrlWZ.update(sym[28], sym[27], sym[234]);

      iHzWZ.update(sym[4]);

      DisModeHzWZ.update(sym[26]);
      DisTempHzWZ.update(sym[2], 1);
      DisPosHzWZCtrl.update(sym[4]);
      DisHumidWZCtrl.update(sym[233]);

      //<!-- ************************ Heizung Kinderzimmer ************************  -->


      MainTempHzKZ.update(sym[1], 1);
      MainPosHzKZ.update(sym[5], 0);
      MainTempVHzKZ.update("0.0", 1);
      MainTempRHzKZ.update("0.0", 1);



      iHzKZ.update(sym[5]);
      HzCtrlKZ.update(sym[35], sym[34], sym[235]);

      DisModeHzKZCtrl.update(sym[33]);
      DisTempHzKZCtrl.update(sym[1], 1);
      DisPosHzKZCtrl.update(sym[5]);
      DisHumidKZCtrl.update(sym[10]);

      //<!-- ************************ Heizung Schlafzimmer ************************  -->

      MainTempHzSZ.update(sym[0], 1);
      MainPosHzSZ.update(sym[6], 0);
      MainTempVHzSZ.update(sym[40], 1);
      MainTempRHzSZ.update(sym[39], 1);



      iHzSZ.update(sym[6]);
      HzCtrlSZ.update(sym[38], sym[37], sym[237]);

      DisModeHzSZCtrl.update(sym[36]);
      DisTempHzSZCtrl.update(sym[0], 1);
      DisPosHzSZCtrl.update(sym[6]);
      DisHumidSZCtrl.update(sym[11]);


      //<!-- ************************ Heizung Kueche ************************  -->
      /*
         $('TempHzK1').innerHTML =  sym[3] + '°C'  ;
         $('PosHzK1').innerHTML =   Math.round(sym[7]).toFixed(0) + '%';
       */
      MainTempHzK.update(sym[3], 1);
      MainPosHzK.update(sym[7], 0);
      MainTempVHzK.update("0.0", 1);
      MainTempRHzK.update("0.0", 1);


      iHzK.update(sym[7]);
      HzCtrlK.update(sym[43], sym[42], sym[236]);

      DisModeHzKCtrl.update(sym[41]);
      DisTempHzKCtrl.update(sym[3], 1);
      DisPosHzKCtrl.update(sym[7]);





      //<!-- ************************ Heizung Uebersicht ************************  -->
      $('tempkueche4').innerHTML = 'Kueche ' + sym[3] + '°C';
      $('tempwohnzimmer4').innerHTML = 'Wohnzimmer ' + sym[2] + '°C';
      $('tempschlafzimmer4').innerHTML = 'Schlafzimmer ' + sym[0] + '°C';
      $('tempkinderzimmer4').innerHTML = 'Kinderzimmer ' + sym[1] + '°C';
    }

    //<!-- ************************ Übergabe nur eine Variable von IPS ************************  -->
    function updateIPSValue(ipsID, IPSValue) {
      switch (ipsID) {
        case x:
          // code block
          break;
        case y:
          // code block
          break;
        default:
          // code block
      }
    }


    function updateValues(sym) {

      uhr.startTime();

      /* ------------------------------- Denon Ceol ------------------------------- */
      ProgressCeol.update(sym[263]);
      CeolVol.update(sym[257]);
      CeolTrack.update(sym[264]);
      var s = "";
      switch (sym[105]) {
        case 0:
          s = "IRadio";
          break;
        case 1:
          s = "MediaServer";
          break;
        case 2:
          s = "USB";
          break;
        case 3:
          s = "IPOD";
          break;
        case 4:
          s = "AUX_A";
          break;
        case 5:
          s = "AUX_D";
          break;
      }
      CeolSource.update(s);
      RahmenCeol.update(s);
      /* ---------------------------------- UPNP ---------------------------------- */
      ServerBox.update(sym[130]);
      DeviceBox.update(sym[132]);
      DisMeldung.update(sym[238]);

      DiplayAudio.update(sym[253], sym[251], sym[252], sym[254], sym[250]);
      Track.update("Track: " + sym[255]);
      CDTrack.update("Track: " + sym[255]);
      upnpVol.update(sym[257]);
      upnpSource.update(sym[256]);
      upnpProgress.update(sym[259]);
      DisplayCD.update(sym[253], sym[251], sym[252], sym[254], sym[250]);
      upnpCDVol.update(sym[257]);
      upnCDSource.update(sym[256]);
      upnpCDProgress.update(sym[259]);
      CDPlayer.update(sym[258]);

      /* ---------------------------------- UPNP Video ---------------------------------- */
      if (document.getElementById("MainVideo")) {
        DiplayVideo.update(sym[253], sym[251], sym[252], sym[254], sym[250]);
        VideoTrack.update("Track: " + sym[255]);
        upnpVideoVol.update(sym[257]);
        upnpVideoSource.update(sym[256]);
        upnpVideoProgress.update(sym[259]);
      }



      /* --------------------------- Bad Temp / Humidity -------------------------- */
      VarDisTempBad.update(sym[231]);
      VarDisHumidBad.update(sym[232]);
      /* -------------------------------- Balkontür ------------------------------- */
      VarDisBDoor.update(sym[230]);
      /* --------------------------- Haustür Position --------------------------- */
      DynIconDoorD.update(sym[9]);
      DisDoorDCtrl.update(sym[9]);
      /* --------------------------- Balkontür Position --------------------------- */
      DynIconDoorB.update(sym[227]);
      DisDoorBCtrl.update(sym[227]);
      //<!-- ******************** Homematic Server **************************  -->
      DiHM1.update(sym[220]);
      DiHM2.update(sym[221]);
      DiHM3.update(sym[222]);
      DiHM4.update(sym[223]);
      DiHM5.update(sym[224]);
      var wert = sym[225].substr(10, 4);
      DiHM6.update(wert);
      DiHM7.update(sym[226]);

      //<!-- ******************** Funk Schalt Steckdose und Repeater Wohnzimmer **************************  -->
      DiIPSQ1.update(sym[217]);
      DiIPSQ2.update(sym[218]);
      DiIPSQ3.update(sym[219]);

      //<!-- ******************** Temp Difff Heizung Wohnzimmer **************************  -->
      DiIPSP1.update(sym[215]);
      DiIPSP2.update(sym[216]);
      DiIPSP3.update(sym[213]);
      DiIPSP4.update(sym[214]);
      //<!-- ******************** Temp Difff Heizung Schlafzimmer **************************  -->
      DiIPSO1.update(sym[39]);
      DiIPSO2.update(sym[40]);
      DiIPSO3.update(sym[211]);
      DiIPSO4.update(sym[212]);

      //<!-- ******************** Licht Schalter Kontakt Diele **************************  -->
      DiIPSN1.update(sym[209]);
      DiIPSN2.update(sym[210]);

      //<!-- ******************** Licht Aktor Diele **************************  -->
      DiIPSM1.update(sym[200]);
      DiIPSM2.update(sym[201]);
      DiIPSM3.update(sym[202]);
      LightD.update(sym[203], "", "");
      DisLightCurrentDCtrl.update(sym[204], 2);
      DisLightPowerDCtrl.update(sym[205], 2);
      DisLightEnergyDCtrl.update(sym[206], 2);
      iLightD.update(sym[203]);
      //<!-- ******************** Wohnzimmer Licht Fenster**************************  -->
      Light1WZ.update(sym[192], "", "");
      DisLightCurrent1WZCtrl.update(sym[193], 2);
      DisLightPower1WZCtrl.update(sym[194], 2);
      DisLightEnergy1WZCtrl.update(sym[195], 2);
      iLight1Wz.update(sym[192]);

      //<!-- ******************** Wohnzimmer Licht Mitte**************************  -->
      Light2WZ.update(sym[196], "", "");
      DisLightCurrent2WZCtrl.update(sym[197], 2);
      DisLightPower2WZCtrl.update(sym[198], 2);
      DisLightEnergy2WZCtrl.update(sym[199], 2);
      iLight2Wz.update(sym[196]);

      //<!-- ******************** Licht Aktor WZ Mitte **************************  -->
      DiIPSK1.update(sym[186]);
      DiIPSK2.update(sym[187]);
      DiIPSK3.update(sym[188]);
      //<!-- ******************** Licht Aktor WZ Fenster **************************  -->
      DiIPSL1.update(sym[189]);
      DiIPSL2.update(sym[190]);
      DiIPSL3.update(sym[191]);

      /* -------------------------- Fenster Schlafzimmer -------------------------- */
      iWindowSz.update(sym[248]);

      //<!-- ******************** Fenster Aktor Bad **************************  -->
      WindowBad.update(sym[185], "", "");
      VarDisWindowBad.update(sym[185]);

      //<!-- ******************** HMIP Taster Bad **************************  -->
      DiIPSJ1.update(sym[184]);
      HM10.update(sym[184]);

      //<!-- ******************** HMIP Aktor 4fach Bad **************************  -->
      DiIPSI1.update(sym[183]);
      HM9.update(sym[183]);


      //<!-- ******************** HMIP Lichtschalter 6fach Wohnzimmer **************************  -->
      DiIPSH1.update(sym[180]);
      DiIPSH2.update(sym[181]);
      DiIPSH3.update(sym[182]);
      HM8.update(sym[182]);

      //<!-- ******************** HMIP Lichtschalter / Mess Aktor Schlafzimmer  **************************  -->
      DiIPSG1.update(sym[174]);
      DiIPSG2.update(sym[175]);
      DiIPSG3.update(sym[176]);
      DiIPSG4.update(sym[177]);
      DiIPSG5.update(sym[178]);
      DiIPSG6.update(sym[179]);
      HM7.update(sym[179]);


      //<!-- ******************** HMIP Tür Kontakt Haustür   **************************  -->
      DiIPSF1.update(sym[172]);
      DiIPSF2.update(sym[173]);
      HM4.update(sym[172]);


      //<!-- ******************** HMIP Wasser Sensor Bad   **************************  -->
      DiIPSE1.update(sym[165]);
      DiIPSE2.update(sym[166]);
      DiIPSE3.update(sym[167]);
      DiIPSE4.update(sym[168]);
      DiIPSE5.update(sym[169]);
      DiIPSE6.update(sym[170]);
      DiIPSE7.update(sym[171]);
      HM6.update(sym[171]);


      //<!-- ******************** HMIP Wasser Sensor Küche   **************************  -->
      DiIPSD1.update(sym[158]);
      DiIPSD2.update(sym[159]);
      DiIPSD3.update(sym[160]);
      DiIPSD4.update(sym[161]);
      DiIPSD5.update(sym[162]);
      DiIPSD6.update(sym[163]);
      DiIPSD7.update(sym[164]);
      HM2.update(sym[164]);


      //<!-- ******************** HMIP Tem/Feuchte Sensor Schlafzimmer   **************************  -->
      DiIPSC1.update(sym[155]);
      DiIPSC2.update(sym[156]);
      DiIPSC3.update(sym[157]);
      HM5.update(sym[157]);


      //<!-- ******************** HMIP Tem/Feuchte Sensor Kinderzimmer   **************************  -->
      DiIPSB1.update(sym[152]);
      DiIPSB2.update(sym[153]);
      DiIPSB3.update(sym[154]);
      HM1.update(sym[154]);

      //<!-- ******************** IPS Präsenz Diele   **************************  -->
      DiIPSA1.update(sym[147]);
      DiIPSA2.update(sym[148]);
      DiIPSA3.update(sym[149]);
      DiIPSA4.update(sym[150]);
      DiIPSA5.update(sym[151]);
      HM3.update(sym[151]);


      //<!-- ******************** IPS Server   **************************  -->

      DiIPS1.update(sym[140]);
      DiIPS2.update(sym[136]);
      DiIPS3.update(sym[137]);
      DiIPS4.update(sym[138]);
      DiIPS5.update(sym[139]);
      DiIPS6.update(sym[143]);
      DiIPS7.update(sym[146]);
      DiIPS8.update(sym[142]);
      DiIPS9.update(sym[141]);
      DiIPS10.update(sym[144]);
      DiIPS11.update(sym[145]);


      //<!-- ******************** Kochbuch   **************************  -->
      RezeptName.update(sym[100]);
      DeviceBox.update(sym[132]);
      ServerImg.update(sym[133]);
      ClientImg.update(sym[134]);
      //<!-- ******************** upnp   **************************  -->
      ClientBtn.update(sym[132]);
      Player.update(sym[258]);
      ServerBtn.update(sym[135]);



      //<!-- ******************** Web Socket Server   **************************  -->
      DisWSSCL1.update(sym[125]);
      DisWSSCL2.update(sym[126]);
      DisWSSCL3.update(sym[127]);
      DisWSSCL4.update(sym[128]);

      //<!-- ******************** Wetter   **************************  -->
      WetterLabelA.update(sym[111][1]['icon'], sym[111][1]['weekday'], sym[111][1]['temperatureHigh'], sym[111][1]['temperatureLow'], sym[111][1]['windSpeed'], sym[111][1]['windGust'], sym[111][1]['cloudCover'], sym[111][1]['humidity']);
      WetterLabelB.update(sym[111][2]['icon'], sym[111][2]['weekday'], sym[111][2]['temperatureHigh'], sym[111][2]['temperatureLow'], sym[111][2]['windSpeed'], sym[111][2]['windGust'], sym[111][2]['cloudCover'], sym[111][2]['humidity']);
      WetterLabelC.update(sym[111][3]['icon'], sym[111][3]['weekday'], sym[111][3]['temperatureHigh'], sym[111][3]['temperatureLow'], sym[111][3]['windSpeed'], sym[111][3]['windGust'], sym[111][3]['cloudCover'], sym[111][3]['humidity']);
      WetterLabelD.update(sym[111][4]['icon'], sym[111][4]['weekday'], sym[111][4]['temperatureHigh'], sym[111][4]['temperatureLow'], sym[111][4]['windSpeed'], sym[111][4]['windGust'], sym[111][4]['cloudCover'], sym[111][4]['humidity']);
      WetterLabelE.update(sym[111][5]['icon'], sym[111][5]['weekday'], sym[111][5]['temperatureHigh'], sym[111][5]['temperatureLow'], sym[111][5]['windSpeed'], sym[111][5]['windGust'], sym[111][5]['cloudCover'], sym[111][5]['humidity']);
      WetterLabelF.update(sym[111][6]['icon'], sym[111][6]['weekday'], sym[111][6]['temperatureHigh'], sym[111][6]['temperatureLow'], sym[111][6]['windSpeed'], sym[111][6]['windGust'], sym[111][6]['cloudCover'], sym[111][6]['humidity']);
      WetterLabelG.update(sym[111][7]['icon'], sym[111][7]['weekday'], sym[111][7]['temperatureHigh'], sym[111][7]['temperatureLow'], sym[111][7]['windSpeed'], sym[111][7]['windGust'], sym[111][7]['cloudCover'], sym[111][7]['humidity']);
      WetterLabelNow.update(sym[112]['icon'], "Aktuell", sym[112]['apparentTemperature'], sym[112]['temperature'], sym[112]['windSpeed'], sym[112]['windGust'], sym[112]['cloudCover'], sym[112]['humidity'], sym[112]['ozone'], sym[112]['uvIndex'], sym[112]['summary']);



      //<!-- ******************** Kochbuch   **************************  -->
      RezeptName.update(sym[100]);
      RezeptImg.update(sym[101]);
      IncredBox.update(sym[102]);
      txtBox.update(sym[103]);
      RezepteBox.update(sym[104]);
      //<!-- ******************** Samsung TV **************************  -->
      TVframe.update(sym[98], 10000);
      TVGuideframe.update(sym[99], 10000);
      transVarPower.update(sym[76], "state", "aus", "ein", "", "");
      transVarVol.update(sym[75]);
      transVarCh.update(sym[77]);
      LedDisplayTV.update(sym[78]);
      transVarSource.update(sym[79]);

      iDisArtistSsz.update(sym[91], sym[84], sym[82], sym[83]);
      transVarVolSsz.update(sym[85], "");
      var bassCalc = Math.round(5 * (sym[88] + 10));
      transVarBassSsz.update(bassCalc, "");
      var trebleCalc = Math.round(5 * (sym[89] + 10));
      transVarTrebleSsz.update(trebleCalc, "");
      var PM = "";
      switch (sym[90]) {
        case 0:
          PM = "NORMAL";
          break;
        case 1:
          PM = "REPEAT_ALL";
          break;
        case 2:
          PM = "REPEAT_ONE";
          break;
        case 3:
          PM = "SHUFFLE_NOREPEAT";
          break;
        case 4:
          PM = "SHUFFLE";
          break;
        case 5:
          PM = "SHUFFLE_REPEAT_ONE";
          break;
      }
      transVarPlayModeSsz.update(PM, "");

      //<!-- ******************** Person  **************************  -->
      ihuman.update(sym[58]);
      ihumanAZ.update(sym[228]);





      /* -------------------------- Arbeitsbereich Licht -------------------------- */


      //<!-- ******************** Licht Aktor AZ **************************  -->

      DisLightCurrentAZCtrl.update(sym[265], 2);
      DisLightPowerAZCtrl.update(sym[267], 2);
      DisLightEnergyAZCtrl.update(sym[266], 2);
      iLightAZ.update(sym[229]);


      //<!-- ******************** Schlafzimmer Licht **************************  -->
      LightSZ.update(sym[106], "", "");
      DisLightCurrentSZCtrl.update(sym[107], 2);
      DisLightPowerSZCtrl.update(sym[108], 2);
      DisLightEnergySZCtrl.update(sym[109], 2);
      iLightSz.update(sym[106]);

      //<!-- ********************   **************************  -->
      /*
          var sourceList = new Array(); 
      try{
          sourceList = JSON.parse(sym[80]);
          sourceList.forEach(function(item) { 
              stat1 = item.CONNECTED;
              stat2 = item.active;
              switch (item.SOURCETYPE) {
                  case "TV":
                    CtrlBtnStv.update("TV", stat1, stat2);
                    break;
                  case "HDMI1/DVI":
                    CtrlBtnSHDMI1.update("HDMI1/DVI", stat1, stat2);
                    break;
                  case "HDMI2":
                    CtrlBtnSHDMI2.update("HDMI2", stat1, stat2);
                    break;
                  case "HDMI3":
                    CtrlBtnSHDMI3.update("HDMI3", stat1, stat2);
                    break;
                  case "HDMI4":
                    CtrlBtnSHDMI4.update("HDMI4", stat1, stat2);
                    break;
                  case "SCART1":
                    CtrlBtnSCART1.update("SCART1", stat1, stat2);
                    break;
                  case "SCART2":
                    CtrlBtnSCART2.update("SCART2", stat1, stat2);
                    break;
                  case "USB":
                    CtrlBtnSUSB.update("USB", stat1, stat2);
                    break;
                  case "DLNA":
                    CtrlBtnSDLNA.update("DLNA", stat1, stat2);
                    break;
                  case "AV":
                    CtrlBtnSAV.update("AV", stat1, stat2);
                    break;
                  case "COMPONENT":
                    CtrlBtnSComp.update("COMPONENT", stat1, stat2);
                    break;
                  case "PC":
                    CtrlBtnSPC.update("PC", stat1, stat2);
                    break;
              }
          });            
      } catch(error){
          console.log(error.message);
          console.log("Array Variable ist leer.");
      }
          
      */




      iBat01.update(sym[59]);
      iBat02.update(sym[60]);
      iBat03.update(sym[61]);
      iBat04.update(sym[62]);
      iBat05.update(sym[63]);
      iBat06.update(sym[30]);
      iBat07.update(sym[64]);
      iBat08.update(sym[239]);
      iBat09.update(sym[240]);

      iBat11.update(sym[32]);
      iBat12.update(sym[65]);
      iBat13.update(sym[31]);
      iBat14.update(sym[66]);
      iBat15.update(sym[29]);
      iBat16.update(sym[71]);
      iBat17.update(sym[241]);
      iBat18.update(sym[242]);
      iBat19.update(sym[243]);

      iBat20.update(sym[244]);
      iBat21.update(sym[245]);
      iBat22.update(sym[246]);
      iBat23.update(sym[247]);

      BatDis.update(sym[44]);

      DisSabAlarm.update(sym[67]);


      WashMDisAlarm.update(sym[68]);
      WashMDisFeuchte.update(sym[69]);
      WashMDisWater.update(sym[70]);

      BathDisAlarm.update(sym[72]);
      BathDisFeuchte.update(sym[73]);
      BathDisWater.update(sym[74]);


      //Dynamisches Bild Rolladen
      iRolloB.update(sym[22]);
      iRolloWZ.update(sym[17]);
      iRolloK.update(sym[15]);
      iRolloSZ.update(sym[114]);
      iRolloKZ.update(sym[13]);

      rolloCtrlWZ.update(sym[17], 0);
      DisModeRolloWZCtrl.update(sym[18]);
      DisST1RolloWZCtrl.update(sym[19]);
      DisST2RolloWZCtrl.update(sym[20]);
      CbSSrolloWZ.update(sym[53]);

      rolloCtrlB.update(sym[22], 0);
      DisModeRolloB.update(sym[21]);
      DisST1RolloB.update(sym[55]);
      DisST2RolloB.update(sym[56]);
      CbSSrolloB.update(sym[57]);

      rolloCtrlK.update(sym[15], 0);
      DisModeRolloK.update(sym[14]);
      DisST1RolloK.update(sym[50]);
      DisST2RolloK.update(sym[51]);
      CbSSrolloK.update(sym[52]);

      rolloCtrlSZ.update(sym[114], 0);
      DisModeRolloSZ.update(sym[113]);
      DisST1RolloSZ.update(sym[116]);
      DisST2RolloSZ.update(sym[117]);
      CbSSrolloSZ.update(sym[118]);

      rolloCtrlKZ.update(sym[13], 0);
      DisModeRolloKZ.update(sym[12]);
      DisST1RolloKZ.update(sym[122]);
      DisST2RolloKZ.update(sym[119]);
      CbSSrolloKZ.update(sym[120]);






      VarDisTempOutside.update(sym[46]);
      VarDisHumOutside.update(sym[47]);

      DisAlarmActiveSec.update(sym[48]);
      ABox.update(sym[58]);


      iDisArtist.update(sym[92], sym[95], sym[93], sym[94]);
      FontBtnIRadioPower.update(sym[96]);
      //IconVarDisVol.update(sym[97], 0);
      //IconVarDisSource.update(sym[105], "state");
      //IconVarDisServerWZ.update(sym[81]);

      if (sym[105] === 'IRADIO') {
        iDisArtistWZ.update(sym[92], sym[95], sym[93], sym[94]);
      } else {
        iDisArtistWZ.update(sym[260], sym[261], sym[93], sym[94], sym[262]);
      }

      FontBtnIRadioPowerWZ.update(sym[96]);
      //IconVarDisVolWZ.update(sym[97], 0);
      //IconVarDisSourceWZ.update(sym[105], "state", 'Radio', 'Media', 'USB', 'IPOD', 'AUX A', 'AUX D');





    }



    function Klima(sym) {
      //<!-- **************************  Feuchte Floorplan **************************  -->

      VarDisHumidSZ_E.update(sym[11]);
      VarDisHumidKZ_E.update(sym[10]);
    }

    function Security(sym) {
      //<!-- **************************    Security **************************  -->
      /*
            if (sym[8] == '1'){
                     $('humanD_E').innerHTML =  'Person anwensend'; 
                     let now = new Date();
                     var options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
                     $('humanTimeD_E').innerHTML = now.toLocaleTimeString('de-DE', options); 
            }else{
                     $('humanD_E').innerHTML =  'X'; 
            }
 
           if (ips[0].ID22196 == '1'){
                     $('door_E').innerHTML =  'open'; 
                     let now = new Date();
                     var options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
                     $('humanDoor_E').innerHTML = now.toLocaleTimeString('de-DE', options); 
            }else{
                     $('door_E').innerHTML =  'close'; 
            }
  */
      VarDisMainDoor.update(sym[9]);


      var alarmCode = sym[58];

      switch (alarmCode) {
        case 1:
          var BatAlarm = "Battery Low";
          break;
        case 2:
          var SecAlarm = "Einbruch";
          break;
        default:

      }


      DisDoorOpen.update(sym[9]);
      DisFloorPD.update(sym[8]);
      DisBalkonDoorOpen.update(sym[25]);
      KeyPadSecKey.update(sym[110]);


    }

    function isset(v) {

      if (typeof v === "undefined") {
        return "fehlt"
      }
      //return (typeof v === "undefined");
    }