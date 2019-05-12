    function reply(msg){
        switch(msg) {
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
     
     function showAList(text){
         AList.update(text);
     }
    
     function checkUsedVars(ips){
            var sym = []; 
        try{    
            sym[0] = ips[0].ID23116; //Temperatur SZ
            sym[1] = ips[0].ID37045; //Temperatur KZ
            sym[2] = ips[0].ID51079; //Temperatur WZ
            sym[3] = ips[0].ID54070; //Temperatur K
            sym[4] = ips[0].ID18059; //Position HZ WZ
            sym[5] = ips[0].ID49335; //Position HZ KZ
            sym[6] = ips[0].ID36448; //Position HZ SZ 
            sym[7] = ips[0].ID51619; //Position HZ K   
            sym[8] = ips[0].ID36168;  // Diele Präsenzmelder
            sym[9] = ips[0].ID22196;  // Diele Haustür   
            sym[10] = ips[0].ID56454;  // humidity KZ
            sym[11] = ips[0].ID50329;  // humidity SZ  
            
            sym[12] = ips[0].ID54298;  //Rollo KZ Mode
            sym[13] = ips[0].ID59964;  //Rollo KZ Postion 


            sym[16] = ips[0].ID53773;  //Rollo WZ up/down
            sym[17] = ips[0].ID49991;  //Rollo WZ Position
            sym[18] = ips[0].ID13953; //Rollo WZ Mode
            sym[19] = ips[0].ID21488;  //Rollo WZ Schaltzeit Mo-Fr
            sym[20] = ips[0].ID37176; //Rollo WZ Schaltzeit Sa-So 
            sym[53] = ips[0].ID15822; //Rollo WZ SSunSet  
             
            sym[21] = ips[0].ID57642; //Rollo B Mode
            sym[22] = ips[0].ID25065; //Rollo B Postion          
            sym[23] = ips[0].ID57942;  //Sonnenuntergang
            sym[24] = ips[0].ID11938;  //Sonnenaufgang
            sym[25] = ips[0].ID37348;  //Balkontür
            sym[26] = ips[0].ID53071;  //Soll Modus Hz WZ
            sym[27] = ips[0].ID31769;  //Soll Temp Hz WZ 
            sym[28] = ips[0].ID27789;  //Soll Temp Ausstehend Hz WZ
            sym[29] = ips[0].ID23472;  //Bat Hz WZ
            sym[30] = ips[0].ID52085;  //Bat Hz KZ
            sym[31] = ips[0].ID57118;  //Bat Hz SZ
            sym[32] = ips[0].ID22083;  //Bat Hz K
            sym[33] = ips[0].ID34102;  //Soll Modus Hz KZ
            sym[34] = ips[0].ID36377;  //Soll Temp Hz KZ 
            sym[35] = ips[0].ID38441;  //Soll Temp Ausstehend Hz KZ
            sym[36] = ips[0].ID31202;  //Soll Modus Hz SZ
            sym[37] = ips[0].ID17998;  //Soll Temp Hz SZ 
            sym[38] = ips[0].ID51755;  //Soll Temp Ausstehend Hz SZ
            sym[39] = ips[0].ID26565;  //Temp Vor Hz SZ
            sym[40] = ips[0].ID32007;  //Temp Rueck Hz SZ  
            sym[41] = ips[0].ID39562;  //Soll Modus Hz K
            sym[42] = ips[0].ID54426;  //Soll Temp Hz K 
            sym[43] = ips[0].ID21258;  //Soll Temp Ausstehend Hz K     
            sym[44] = ips[0].ID41310;  //Battery Alarm  
            sym[45] = ips[0].ID53083;  //Security Meldung
            sym[46] = ips[0].ID16709;  //Temperatur Balkon Aussen
            sym[47] = ips[0].ID27502;  //Humidity Balkon Aussen
            sym[48] = ips[0].ID44154;  //Alarm Anlage aktiv
            
            sym[14] = ips[0].ID53769;  //Rollo K Mode
            sym[15] = ips[0].ID11004;  //Rollo K Postion 
            sym[49] = ips[0].ID13003;  //Rollo K up/down
            sym[50] = ips[0].ID34905;  //Rollo K Schaltzeit Mo-Fr
            sym[51] = ips[0].ID52660; //Rollo K Schaltzeit Sa-So
            sym[52] = ips[0].ID28605; //Rollo K SSunSet  

            
            sym[21] = ips[0].ID25457; //Rollo B Mode
            sym[22] = ips[0].ID26881; //Rollo B Postion 
            sym[54] = ips[0].ID42649;  //Rollo B up/Down
            sym[55] = ips[0].ID41457;;  //Rollo B Schaltzeit Mo-Fr
            sym[56] = ips[0].ID25503;  //Rollo B Schaltzeit Sa-So
            sym[57] = ips[0].ID11634; // Rollo B SunSet active  
            
            sym[58] = ips[0].ID36168; //Anwesenheit Stste Diele
            sym[59] = ips[0].ID30280;  //Bad Fenster Aktor LowBat
            sym[60] = ips[0].ID49846;  //Bad Taster-Fenster LowBat
            sym[61] = ips[0].ID33304;  //Balkon Temp Feuchte Sensor LowBat
            sym[62] = ips[0].ID26399;  //Diele Präsenzmelder LowBat
            sym[63] = ips[0].ID25322;  //Haustür Kontakt LowBat
            sym[64] = ips[0].ID38784;  //Kinderzimmer Temp-Feuchte Sensor LowBat
            sym[65] = ips[0].ID16681;  //Küche Wassermelder LowBat
            sym[66] = ips[0].ID18803;  //Schlafzimmer Feuchte Sensor LowBat
            sym[67] = ips[0].ID50294;  //Sabotage Alarm Bewegungsmelder Diele
            sym[68] = ips[0].ID54473;  //Wasser Sensor Küche Alarm
            sym[69] = ips[0].ID23685;  //Wasser Sensor Küche Feuchte
            sym[70] = ips[0].ID27499;  //Wasser Sensor Küche Wasserstand
            sym[71] = ips[0].ID20350;  //Wasser Sensor Bad Batterie
            sym[72] = ips[0].ID58710;  //Wasser Sensor Bad Alarm
            sym[73] = ips[0].ID17453;  //Wasser Sensor Bad Feuchte
            sym[74] = ips[0].ID36414;  //Wasser Sensor Bad Wasserstand
            sym[75] = ips[0].ID23042;  //TV Volume
            sym[76] = ips[0].ID34392;  //TV Power
            sym[77] = ips[0].ID43304;  //TV Channel - 15810
            sym[78] = ips[0].ID53698;  //TV Channel Name - 41307
            sym[79] = ips[0].ID26003;  //TV Source 24408
            sym[80] = ips[0].ID35428;  //TV SourceList 45960
            sym[81] = ips[0].ID16753;  //Denon Server Name
            sym[82] = ips[0].ID32160;  //SZ Sonos Artist
            sym[83] = ips[0].ID23875;  //SZ Sonos Title
            sym[84] = ips[0].ID38320;  //SZ Sonos Album
            sym[85] = ips[0].ID36157;  //SZ Sonos Volume
            sym[86] = ips[0].ID24061;  //SZ Sonos Mute
            sym[87] = ips[0].ID44467;  //SZ Sonos Loudnes
            sym[88] = ips[0].ID55859;  //SZ Sonos Bass
            sym[89] = ips[0].ID29767;  //SZ Sonos Treble
            sym[90] = ips[0].ID57771;  //SZ Sonos Playmode
            sym[91] = ips[0].ID35731;  //SZ Sonos Cover image  
            sym[92] = ips[0].ID34292;  //ArtisPicLastFM - Denon
            sym[93] = ips[0].ID30505;  //DIDL Artist - Denon
            sym[94] = ips[0].ID17922;  //DIDL Title - Denon
            sym[95] = ips[0].ID31822;  //Line3 - Denon
            sym[96] = ips[0].ID22520;  //Power - Denon
            sym[97] = ips[0].ID19185;  //Volume - Denon
            sym[98] = ips[0].ID33459;   //TVchProgList 31510
            sym[99] = ips[0].ID35025; //TVProgList  49099
            sym[100] = ips[0].ID54563; //Kochbuch Titel
            sym[101] = ips[0].ID18416; //Kochbuch Image
            sym[102] = JSON.parse(ips[0].ID29246); //Kochbuch Zutaten
            
            sym[103] = ips[0].ID59260; //Kochbuch Rezept
            sym[104] = ips[0].ID16493;  //Kochbuch Liste
            sym[105] = ips[0].ID46852; //Denon Source
            sym[106] = ips[0].ID19506; //Lampe - Schalter State
            sym[107] = ips[0].ID35590; //Lampe - Schalter current
            sym[108] = ips[0].ID43083; //Lampe - Schalter Power
            sym[109] = ips[0].ID12561; //Lampe - Schalter EnergyCounter
            sym[110] = ips[0].ID17052; // Security Code
            sym[111] = JSON.parse(ips[0].ID44125) //Wetter Week Data
            sym[112] = JSON.parse(ips[0].ID46593) //Wetter NowDay Data
            
            sym[113] = ips[0].ID22052;  //Rollo SZ Mode
            sym[114] = ips[0].ID18298;  //Rollo SZ Postion 
            sym[115] = ips[0].ID58302;  //Rollo SZ up/down
            sym[116] = ips[0].ID18740;  //Rollo SZ Schaltzeit Mo-Fr
            sym[117] = ips[0].ID53883; //Rollo SZ Schaltzeit Sa-So
            sym[118] = ips[0].ID12349; //Rollo SZ SSunSet  
            
            sym[119] = ips[0].ID25277; //Rollo KZ Schaltzeit Sa-So
            sym[120] = ips[0].ID53747; //Rollo KZ SSunSet            
            sym[121] = ips[0].ID54434;  //Rollo KZ up/down
            sym[122] = ips[0].ID28071;  //Rollo KZ Schaltzeit Mo-Fr
            sym[123] = ips[0].ID34292;  //Denon DIDL AlbumArt URL
            sym[124] = ips[0].ID42467;  //WSS active
            sym[125] = ips[0].ID56321;  //WSS Client 1
            sym[126] = ips[0].ID43949;  //WSS Client 2
            sym[127] = ips[0].ID15131;  //WSS Client 3
            sym[128] = ips[0].ID38435;  //WSS Client 4
            sym[129] =  JSON.parse(ips[0].ID26335);  //UPNP Server Array
            var Server = []; 
            var task_names = sym[129].map(function (task, index, array) {
                Server[index] = task.FriendlyName; 
            });
            sym[130] = Server;
            sym[131] =  JSON.parse(ips[0].ID59157);  //UPNP Cöient Array
            var Client = []; 
            var task_names = sym[131].map(function (task, index, array) {
                Client[index] = task.FriendlyName; 
            });
            sym[132] = Client;
                    
        }
        catch(err){
            document.getElementById("fehler").innerHTML = err.message;
        }
           let pos = sym.indexOf(undefined);
            if (pos != -1){check(pos);}
            return sym;
            
             
            
     

     }
     
     
    function setup(sym){
        ServerBtn.init(sym[130]);
         
    }

    function check(index) {
          $('fehler').innerHTML =  "Variable  wrong ID:" + index;  
        
    } 
     
    function MediaValues(ips){

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
    function Media(ips){
        $('message').innerHTML =  ips[0].ID55254;
        $('activeServer_A').innerHTML =  ips[0].ID40574;
        //$('activeClient_A').innerHTML =  ips[0].ID16761; 
        $('activeServer_B').innerHTML =  ips[0].ID40574;
        $('activeClient_B').innerHTML =  ips[0].ID16761; 
        $('sz2_A').innerHTML =  ips[0].ID14566;
        $('sz3_A').innerHTML =  sym[95];
        $('FAV_A').innerHTML =  'Fav ' + ips[0].ID58379;
        $('DDILAlbum_B').innerHTML =  ips[0].ID59926;
        $('DIDLArtist_B').innerHTML =  ips[0].ID12457;
        $('DIDLTitle_B').innerHTML =  ips[0].ID10602;
        
        $('vol_A').innerHTML =  sym[97] + ' db';
        $('vol_B').innerHTML =  ips[0].ID54000 + ' %';
        $('Playlist_B').innerHTML =  ips[0].ID22199;
        $('trackNo_A').innerHTML =  ips[0].ID25782.toString();
        $('CD_A').innerHTML =  ips[0].ID49481;
        

        
        var pm_A = ips[0].ID50251;
        if (pm_A == '0'){pm_A = 'NORMAL';}
        else if (pm_A == '1'){pm_A = 'RANDOM';}
        else if (pm_A == '2'){pm_A = 'REPEAT_ONE';}
        else if (pm_A == '3'){pm_A = 'REPEAT_ALL';}
        $('playmode_A').innerHTML =pm_A;  
        
        var elem = document.getElementById("progressbar_A"); 
        var width = ips[0].ID54627;
        elem.style.width = width + '%';
        
        var elem = document.getElementById("progressbar_B"); 
        var width = ips[0].ID54627;
        elem.style.width = width + '%'; 
        
        var pm = ips[0].ID45176; 
        if (pm == '0'){pm = 'NORMAL';}
        else if (pm == '1'){pm = 'RANDOM';}
        else if (pm == '2'){pm = 'REPEAT_ONE';}
        else if (pm == '3'){pm = 'REPEAT_ALL';}
        $('playmode').innerHTML =  pm; 
       

        var CeolPower = sym[96];
        if (CeolPower){
          document.getElementById('power_A').style.color = "lime";
          document.getElementById('pwrceol').innerHTML =  'Ceol '   +  'on'; 
        }
        else if (!CeolPower) {
            document.getElementById('power_A').style.color = "red";
            document.getElementById('pwrceol').innerHTML =  'Ceol ' + 'off';
        }
        
        var cover_A = 'CDs/'+ ips[0].ID49481.substring(3, 7) +'.jpg'; 
        document.getElementById("CDCover_A").src=cover_A;
        
        //<!-- -------------------------- TV Variable  ------------------------------  -->  
        if (ips[0].ID37104 != null) {
            $('statVol_D').innerHTML =  ips[0].ID37104;
        }
        if (ips[0].ID37005 != null) {
            $('statCh_D').innerHTML =  ips[0].ID37005;
        }
        if (ips[0].ID58897 != null) {
        $('TVLine1_D').innerHTML =  ips[0].ID58897;
            var TVChannel = ips[0].ID58897;
            var TVChannelx = TVChannel.substr(1, TVChannel.length-2) + '.png';
            document.getElementById("TVimg_D").src='images/Sender/' + TVChannelx;
        }    
        
        if (ips[0].ID25544 != null) {
            var guide = ips[0].ID25544;
            Woerter = guide.split(';');
            $('TVz1').innerHTML =  Woerter[0];
            $('TVz2').innerHTML =  Woerter[1];
            $('TVz3').innerHTML =  Woerter[2];
            $('TVz4').innerHTML =  Woerter[3];
            $('TVz5').innerHTML =  Woerter[4];
            $('TVz6').innerHTML =  Woerter[5];
            $('TVz7').innerHTML =  Woerter[6];
            $('TVz8').innerHTML =  Woerter[7];
            $('TVz9').innerHTML =  Woerter[8];
            $('TVz10').innerHTML =  Woerter[9];
            $('TVz11').innerHTML =  Woerter[10];
            $('TVz12').innerHTML =  Woerter[11];
            $('TVz13').innerHTML =  Woerter[12];
            $('TVz14').innerHTML =  Woerter[13];
            $('TVz15').innerHTML =  Woerter[14];
            $('TVz16').innerHTML =  Woerter[15];
            $('TVz17').innerHTML =  Woerter[16];
            $('TVz18').innerHTML =  Woerter[17];
            $('TVz19').innerHTML =  Woerter[18];
            $('TVz20').innerHTML =  Woerter[19];
            $('TVz21').innerHTML =  Woerter[20];
            $('TVz22').innerHTML =  Woerter[21];
            $('TVz23').innerHTML =  Woerter[22];
            $('TVz24').innerHTML =  Woerter[23];
            $('TVz25').innerHTML =  Woerter[24];
            $('TVz26').innerHTML =  Woerter[25];
            $('TVz27').innerHTML =  Woerter[26];
            $('TVz28').innerHTML =  Woerter[27];
            $('TVz29').innerHTML =  Woerter[28];
            $('TVz30').innerHTML =  Woerter[29];
            $('TVz31').innerHTML =  Woerter[30];
            $('TVz32').innerHTML =  Woerter[31];
            $('TVz33').innerHTML =  Woerter[32];
            $('TVz34').innerHTML =  Woerter[33];
            $('TVz35').innerHTML =  Woerter[34];
            $('TVz36').innerHTML =  Woerter[35];
        }
    }
			
    function Heizung(sym){
        //<!-- ******************** Temperatur   Werte Floorplan **************************  -->
        VarDisTempK_E.update(sym[3], 1);
        VarDisTempWZ_E.update(sym[2], 1);
        VarDisTempSZ_E.update(sym[0], 1);
        VarDisTempKZ_E.update(sym[1], 1);

        //<!-- Temperatur Glide Floorplan  -->
        LeftMenuFP.update(sym[3], "°C", sym[2], "°C",  sym[0], "°C",  sym[1], "°C");
        
 
        //<!-- Temperatur Werte Glide Button  -->
        LeftMenuK.update(sym[3], "°C","","","","","","" );
        LeftMenuWZ.update(sym[3], "°C","","","","","","" );
        LeftMenuSZ.update(sym[3], "°C","","","","","","" );
        LeftMenuKZ.update(sym[3], "°C","","","","","","");
 
        //<!-- ************************ Heizung Wohnzimmer ************************  -->
        MainTempHzWZ.update(sym[2], 1);
        MainPosHzWZ.update(sym[4], 0);
        MainTempVHzWZ.update("0.0", 1);
        MainTempRHzWZ.update("0.0", 1);
        
/*
        $('TempVorHzWZ1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzWZ1').innerHTML =  "--" + '°C' ;
   */
        $('SollTempHzWZ1').innerHTML =  sym[27] + '°C'  ;
        $('SollTempAusHzWZ1').innerHTML =  sym[28] + '°C' ;

        iHzWZ.update(sym[4]);
       
        DisModeHzWZ.update(sym[26]);
        DisTempHzWZ.update(sym[2]);
        DisPosHzWZCtrl.update(sym[4]);
        
        var BatHzWZ1 = sym[29];
        if (BatHzWZ1){
            document.getElementById("BatHzWZ1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzWZ1").style.color = 'lime';
        }
        //<!-- ************************ Heizung Kinderzimmer ************************  -->
 
      
        MainTempHzKZ.update(sym[1], 1);
        MainPosHzKZ.update(sym[5], 0);     
        MainTempVHzKZ.update("0.0", 1);
        MainTempRHzKZ.update("0.0", 1);
        
        //$('PosHzKZ2').innerHTML =   Math.round(sym[5]).toFixed(0) + '%';
        
        /*
        $('TempVorHzKZ1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzKZ1').innerHTML =  "--" + '°C'  ;
       */
        $('SollTempHzKZ1').innerHTML =  sym[34] + '°C'  ;
        $('SollTempAusHzKZ1').innerHTML =  sym[35] + '°C' ;
 
        iHzKZ.update(sym[5]);
        
       
        DisModeHzKZCtrl.update(sym[33]);
        DisTempHzKZCtrl.update(sym[1]);
        DisPosHzKZCtrl.update(sym[5]);
        
        var BatHzKZ1 = sym[30];
        if (BatHzKZ1){
            document.getElementById("BatHzKWZ1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzKZ1").style.color = 'lime';
        }
         //<!-- ************************ Heizung Schlafzimmer ************************  -->
       
        MainTempHzSZ.update(sym[0], 1);
        MainPosHzSZ.update(sym[6], 0); 
        MainTempVHzSZ.update("0.0", 1);
        MainTempRHzSZ.update("0.0", 1);
        
        
      //  $('PosHzSZ2').innerHTML =   Math.round(sym[6]).toFixed(0) + '%';
     /* 
        $('TempVorHzSZ1').innerHTML =  sym[39] + '°C'  ;
        $('TempRueckHzSZ1').innerHTML = sym[40] + '°C'  ;
        $('SollTempHzSZ1').innerHTML =  sym[37] + '°C'  ;
        $('SollTempAusHzSZ1').innerHTML =  sym[38] + '°C' ;
  */
        iHzSZ.update(sym[6]);
        
       
        DisModeHzSZCtrl.update(sym[36]);
        DisTempHzSZCtrl.update(sym[0]);
        DisPosHzSZCtrl.update(sym[6]);

        
        var BatHzSZ1 = sym[31];
        if (BatHzSZ1){
            document.getElementById("BatHzSZ1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzSZ1").style.color = 'lime';
        }
        //<!-- ************************ Heizung Kueche ************************  -->
        /*
         $('TempHzK1').innerHTML =  sym[3] + '°C'  ;
         $('PosHzK1').innerHTML =   Math.round(sym[7]).toFixed(0) + '%';
       */  
        MainTempHzK.update(sym[3], 1);
        MainPosHzK.update(sym[7], 0);   
        MainTempVHzK.update("0.0", 1);
        MainTempRHzK.update("0.0", 1);
      
     //   $('PosHzK2').innerHTML =   Math.round(sym[7]).toFixed(0) + '%';
     /*
        $('TempVorHzK1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzK1').innerHTML =  "--" + '°C'  ;
  
        $('SollTempHzK1').innerHTML =  sym[42] + '°C'  ;
        $('SollTempAusHzK1').innerHTML =  sym[43] + '°C' ;
     */
        iHzK.update(sym[7]);
        
       
        DisModeHzKCtrl.update(sym[41]);
        DisTempHzKCtrl.update(sym[3]);
        DisPosHzKCtrl.update(sym[7]);
        
         var BatHzK1 = sym[32];
        if (BatHzK1){
            document.getElementById("BatHzK1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzK1").style.color = 'lime';
        }

        
        
        //<!-- ************************ Heizung Uebersicht ************************  -->
        $('tempkueche4').innerHTML =  'Kueche ' + sym[3] + '°C'  ;
        $('tempwohnzimmer4').innerHTML =  'Wohnzimmer ' + sym[2] + '°C'  ;
        $('tempschlafzimmer4').innerHTML =  'Schlafzimmer ' + sym[0] + '°C'  ;
        $('tempkinderzimmer4').innerHTML =  'Kinderzimmer ' + sym[1] + '°C';        
    }
    
   //<!-- ************************ Übergabe nur eine Variable von IPS ************************  -->
   function updateIPSValue(ipsID, IPSValue){
        switch(ipsID) {
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
   
   
    function updateValues(sym){
        
        
        //<!-- ******************** UPNP   **************************  -->
        ServerBox.update(sym[130]);
        DeviceBox.update(sym[132]);
        
        //<!-- ******************** Web Socket Server   **************************  -->
        DisWSSCL1.update(sym[125]);
        DisWSSCL2.update(sym[126]);
        DisWSSCL3.update(sym[127]);
        DisWSSCL4.update(sym[128]);
        
        //<!-- ******************** Wetter   **************************  -->
        WetterLabelA.update(sym[111][1]['icon'], sym[111][1]['weekday'], sym[111][1]['temperatureHigh'], sym[111][1]['temperatureLow'], sym[111][1]['windSpeed'], sym[111][1]['windGust'], sym[111][1]['cloudCover'], sym[111][1]['humidity'] );
        WetterLabelB.update(sym[111][2]['icon'], sym[111][2]['weekday'], sym[111][2]['temperatureHigh'], sym[111][2]['temperatureLow'], sym[111][2]['windSpeed'], sym[111][2]['windGust'], sym[111][2]['cloudCover'], sym[111][2]['humidity'] );
        WetterLabelC.update(sym[111][3]['icon'], sym[111][3]['weekday'], sym[111][3]['temperatureHigh'], sym[111][3]['temperatureLow'], sym[111][3]['windSpeed'], sym[111][3]['windGust'], sym[111][3]['cloudCover'], sym[111][3]['humidity'] );
        WetterLabelD.update(sym[111][4]['icon'], sym[111][4]['weekday'], sym[111][4]['temperatureHigh'], sym[111][4]['temperatureLow'], sym[111][4]['windSpeed'], sym[111][4]['windGust'], sym[111][4]['cloudCover'], sym[111][4]['humidity'] );
        WetterLabelE.update(sym[111][5]['icon'], sym[111][5]['weekday'], sym[111][5]['temperatureHigh'], sym[111][5]['temperatureLow'], sym[111][5]['windSpeed'], sym[111][5]['windGust'], sym[111][5]['cloudCover'], sym[111][5]['humidity'] );
        WetterLabelF.update(sym[111][6]['icon'], sym[111][6]['weekday'], sym[111][6]['temperatureHigh'], sym[111][6]['temperatureLow'], sym[111][6]['windSpeed'], sym[111][6]['windGust'], sym[111][6]['cloudCover'], sym[111][6]['humidity'] );
        WetterLabelG.update(sym[111][7]['icon'], sym[111][7]['weekday'], sym[111][7]['temperatureHigh'], sym[111][7]['temperatureLow'], sym[111][7]['windSpeed'], sym[111][7]['windGust'], sym[111][7]['cloudCover'], sym[111][7]['humidity'] );
        WetterLabelNow.update(sym[112]['icon'], "Aktuell", sym[112]['apparentTemperature'], sym[112]['temperature'], sym[112]['windSpeed'], sym[112]['windGust'], sym[112]['cloudCover'], sym[112]['humidity'], sym[112]['ozone'], sym[112]['uvIndex'], sym[112]['summary'] );
       
        
        
        //<!-- ******************** Kochbuch   **************************  -->
        RezeptName.update(sym[100]);
        RezeptImg.update(sym[101]);
        IncredBox.update(sym[102]);
        txtBox.update(sym[103]);
        RezepteBox.update(sym[104]);
        //<!-- ******************** Samsung TV **************************  -->
        TVframe.update(sym[98], 10000);
        TVGuideframe.update(sym[99], 10000);
        transVarPower.update(sym[76],"state", "aus", "ein", "" , "");
        transVarVol.update(sym[75]);
        transVarCh.update(sym[77]);
        LedDisplayTV.update(sym[78]);
        transVarSource.update(sym[79]);
            
        iDisArtistSsz.update(sym[91], sym[84], sym[82], sym[83]);
        transVarVolSsz.update(sym[85],"");
        var bassCalc = Math.round(5*(sym[88] +10));
        transVarBassSsz.update(bassCalc,"");
        var trebleCalc = Math.round(5*(sym[89] +10));
        transVarTrebleSsz.update(trebleCalc,"");
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
        
        //<!-- ******************** Schlafzimmer Licht **************************  -->
        LightSZ.update(sym[106], "", ""); 
        DisLightCurrentSZCtrl.update(sym[107],2);
        DisLightPowerSZCtrl.update(sym[108],2);
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
            iBat11.update(sym[32]);
            iBat12.update(sym[65]);
            iBat13.update(sym[31]);
            iBat14.update(sym[66]);
            iBat15.update(sym[29]);
            iBat16.update(sym[71]);
            
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
            
            DisPosRolloWZCtrl.update(sym[17]);   
            DisModeRolloWZCtrl.update(sym[18]); 
            DisST1RolloWZCtrl.update(sym[19]); 
            DisST2RolloWZCtrl.update(sym[20]); 
            CbSSrolloWZ.update(sym[53]);
            
            DisPosRolloB.update(sym[22]);   
            DisModeRolloB.update(sym[21]); 
            DisST1RolloB.update(sym[55]); 
            DisST2RolloB.update(sym[56]); 
            CbSSrolloB.update(sym[57]);
            
            DisPosRolloK.update(sym[15]);   
            DisModeRolloK.update(sym[14]); 
            DisST1RolloK.update(sym[50]); 
            DisST2RolloK.update(sym[51]); 
            CbSSrolloK.update(sym[52]);

            DisPosRolloSZ.update(sym[114]);   
            DisModeRolloSZ.update(sym[113]); 
            DisST1RolloSZ.update(sym[116]); 
            DisST2RolloSZ.update(sym[117]); 
            CbSSrolloSZ.update(sym[118]);

            DisPosRolloKZ.update(sym[13]);   
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
            IconVarDisVol.update(sym[97],0);
            IconVarDisSource.update(sym[105],"state");
            IconVarDisServerWZ.update(sym[81]);

            if(sym[105] === 'IRADIO'){
                iDisArtistWZ.update(sym[92], sym[95], sym[93], sym[94]);
            }
            else{
               iDisArtistWZ.update(sym[123], sym[95], sym[93], sym[94]); 
            }
            
            FontBtnIRadioPowerWZ.update(sym[96]);
            IconVarDisVolWZ.update(sym[97],0);
            IconVarDisSourceWZ.update(sym[105],"state", 'Radio', 'Media', 'USB', 'IPOD', 'AUX A', 'AUX D');
            var src = sym[105];
            if (src == '0'){
                src = 'IRadio';
                //CD Leiste ausblenden
                FontBtnCDA.off();
                FontBtnCDB.off();
                FontBtnCDC.off();
                FontBtnCDD.off();
                FontBtnCDE.off();
                rahmCD.off();
            }
            else if (src == '1'){
                src = 'Media';
                //CD Leiste einblenden
                FontBtnCDA.on();
                FontBtnCDB.on();
                FontBtnCDC.on();
                FontBtnCDD.on();
                FontBtnCDE.on();
                rahmCD.on();
            }
            else{}
      

            
            
     
    }
			

    
        function Klima(sym){
        //<!-- **************************  Feuchte Floorplan **************************  -->
  
            VarDisHumidSZ_E.update(sym[11]);
            VarDisHumidKZ_E.update(sym[10]);
        } 
        
        function Security(sym){
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
            
 
           var alarmCode =  sym[58];
            
           switch(alarmCode) {
                case 1:
                    var BatAlarm = "Battery Low";
                    break;
                case 2:
                    var SecAlarm = "Einbruch";  
                    break;
                default:
                     
            }
            
           
           DisDoorOpen.update(sym[9]) ;
           DisFloorPD.update(sym[8]);
           DisBalkonDoorOpen.update(sym[25]);
           KeyPadSecKey.update(sym[110]);
           

        } 
        
            function isset(v) {
                	
                if(typeof v === "undefined"){return "fehlt"}
                //return (typeof v === "undefined");
            }