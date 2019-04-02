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
            //Heizung
            sym[0] = ips[0].ID23116; //Temperatur SZ
            sym[1] = ips[0].ID37045; //Temperatur KZ
            sym[2] = ips[0].ID51079; //Temperatur WZ
            sym[3] = ips[0].ID54070; //Temperatur K
            sym[4] = ips[0].ID18059; //Position WZ
            sym[5] = ips[0].ID49335; //Position KZ
            sym[6] = ips[0].ID36448; //Position SZ 
            sym[7] = ips[0].ID51619; //Position K
            sym[8] = ips[0].ID36168;  // Diele Präsenzmelder
            sym[9] = ips[0].ID22196;  // Diele Haustür   
            sym[10] = ips[0].ID56454;  // humidity KZ
            sym[11] = ips[0].ID50329;  // humidity SZ           
            sym[12] = ips[0].ID58797;  //Rollo KZ Mode
            sym[13] = ips[0].ID33678;  //Rollo KZ Postion            
            sym[14] = ips[0].ID46774;  //Rollo K Mode
            sym[15] = ips[0].ID13174;  //Rollo K Postion     
            sym[16] = ips[0].ID13013;  //Rollo WZ up/down
            sym[17] = ips[0].ID39896;  //Rollo WZ Position
            sym[18] = ips[0].ID50459; //Rollo WZ Mode
            sym[19] = ips[0].ID29948;  //Rollo WZ Schaltzeit Mo-Fr
            sym[20] = ips[0].ID56266; //Rollo WZ Schaltzeit Sa-So        
            sym[21] = ips[0].ID29574; //Rollo B Mode
            sym[22] = ips[0].ID46035; //Rollo B Postion          
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
            sym[44] = ips[0].ID48221;  //Battery Alarm  
            sym[45] = ips[0].ID26213;  //Security Meldung
            sym[46] = ips[0].ID16709;  //Temperatur Balkon Aussen
            sym[47] = ips[0].ID27502;  //Humidity Balkon Aussen
            sym[48] = ips[0].ID20483;  //Alarm Anlage aktiv
            
            return sym;
            
             
            
            
            
            
            //Security

            // Klima

            
             // Rollo           
        
            
    
            check(ips[0].ID20341, 47);  //Rollo K up/down
            check(ips[0].ID42555, 48);  //Rollo K Schaltzeit Mo-Fr
            check(ips[0].ID54826, 49); //Rollo K Schaltzeit Sa-So
            check(ips[0].ID45141, 50); //Rollo K SSunSet
           


            check(ips[0].ID49927, 46); //Rollo WZ SSunSet
            

            check(ips[0].ID53721, 42);  //Rollo B up/down
            check(ips[0].ID48410, 43);  //Rollo B Schaltzeit Mo-Fr
            check(ips[0].ID12438, 44); //Rollo B Schaltzeit Sa-So
            check(ips[0].ID56785, 45); //Rollo B SSunSet
            
            

            check(ips[0].ID54653, 60);  //Alarm Anlage Code
            
            check(ips[0].ID34292, 56);  //ArtisPicLastFM
            check(ips[0].ID30505, 57);  //DIDL Artist - Denon
            check(ips[0].ID17922, 58);  //DIDL Title - Denon
            check(ips[0].ID31822, 61);  //Line3 - Denon
            check(ips[0].ID22520, 62);  //Power - Denon
            check(ips[0].ID19185, 59);  //Volume - Denon
            
            check(ips[0].ID30280, 63);  //Bad Fenster Aktor
            check(ips[0].ID49846, 64);  //Bad Taster-Fenster
            check(ips[0].ID33304, 65);  //Balkon Temp Feuchte Sensor
            
            check(ips[0].ID26399, 66);  //Diele Präsenzmelder
            check(ips[0].ID25322, 67);  //Haustür Kontakt
             
            check(ips[0].ID38784, 69);  //Kinderzimmer Temp-Feuchte Sensor
            
            check(ips[0].ID16681, 71);  //Küche Wassermelder
            
            check(ips[0].ID18803, 73);  //Schlafzimmer Feuchte Sensor
            
            
           
            
            check(ips[0].ID50294,76);  //Sabotage Alarm Bewegungsmelder Diele
            
            check(ips[0].ID54473,77);  //Wasser Sensor Küche Alarm
            check(ips[0].ID23685,78);  //Wasser Sensor Küche Feuchte
            check(ips[0].ID27499,79);  //Wasser Sensor Küche Wasserstand
            
            check(ips[0].ID20350,80);  //Wasser Sensor Bad Batterie
            check(ips[0].ID58710,81);  //Wasser Sensor Bad Alarm
            check(ips[0].ID17453,82);  //Wasser Sensor Bad Feuchte
            check(ips[0].ID36414,83);  //Wasser Sensor Bad Wasserstand
            check(ips[0].ID44956,84);  //TV Volume
            check(ips[0].ID23548,85);  //TV Power
            check(ips[0].ID43304,86);  //TV Channel - 15810
            check(ips[0].ID53698,87);  //TV Channel Name - 41307
            check(ips[0].ID26003,88);  //TV Source 24408
            //check(ips[0].ID25544,90);  //TV Guide
            check(ips[0].ID35428,91);  //TV SourceList 45960
            
            check(ips[0].ID10567,92);  //SZ Lampe
            
            check(ips[0].ID32160,93);  //SZ Sonos Artist
            check(ips[0].ID23875,94);  //SZ Sonos Title
            check(ips[0].ID38320,95);  //SZ Sonos Album
            check(ips[0].ID36157,96);  //SZ Sonos Volume
            check(ips[0].ID24061,97);  //SZ Sonos Mute
            check(ips[0].ID44467,98);  //SZ Sonos Loudnes
            check(ips[0].ID55859,99);  //SZ Sonos Bass
            check(ips[0].ID29767,100);  //SZ Sonos Treble
            check(ips[0].ID57771,101);  //SZ Sonos Playmode
            check(ips[0].ID35731,102);  //SZ Sonos Cover image
            
            check(ips[0].ID33459,103);   //TVchProgList 31510
            check(ips[0].ID35025,104); //TVProgList  49099
     }
    function check(value, n){
        if (typeof value === "undefined") {$('fehler').innerHTML =  "Variable  wrong ID:" + n;} else {return value;}
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


            var element = ips[0].ID46852;
            switch(element) {
                case 0:
                    document.getElementById('source_A').innerHTML =  'Radio';
                    break;
                case 1:
                    document.getElementById('source_A').innerHTML = 'Media';
                    break;
                case 2:
                    document.getElementById('source_A').innerHTML = 'USB';
                    break;
                case3:
                    document.getElementById('source_A').innerHTML = 'IPOD';
                    break;
                case 4:
                    document.getElementById('source_A').innerHTML =  'AUX A';
                    break;
                case 5:
                    document.getElementById('source_A').innerHTML =  'AUX D';
                    break;
                default:
            }
       



            
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
        $('sz3_A').innerHTML =  ips[0].ID31822;
        $('FAV_A').innerHTML =  'Fav ' + ips[0].ID58379;
        $('DDILAlbum_B').innerHTML =  ips[0].ID59926;
        $('DIDLArtist_B').innerHTML =  ips[0].ID12457;
        $('DIDLTitle_B').innerHTML =  ips[0].ID10602;
        
        $('vol_A').innerHTML =  ips[0].ID19185 + ' db';
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
       
        var src = ips[0].ID46852; 
        if (src == '0'){
            src = 'IRadio';
            var radioStation = '000' + ips[0].ID58379 + '.png';
            document.getElementById("CDimg_A").src='images/RadioStation/' + radioStation;
        }
        else if (src == '1'){
            src = 'Media';
            document.getElementById("CDimg_A").src = ips[0].ID57135;
        }
        else if (src == '2'){src = 'USB';}
        else if (src == '3'){src = 'IPOD';}
        else if (src == '4'){src = 'AUX A';}
        else if (src == '5'){src = 'AUX D';}
        $('source_A').innerHTML =  src;  
         
        var CeolPower = ips[0].ID22520;
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
        $('tempK_E').innerHTML =  sym[3] + '°C'  ;
        $('tempWZ_E').innerHTML =  sym[2] + '°C'  ;
        $('tempSZ_E').innerHTML =  sym[0] + '°C'  ;
        $('tempKZ_E').innerHTML =  sym[1] + '°C';
        //<!-- Temperatur Glide Floorplan  -->
        LeftMenuFP.update(sym[3], "°C", sym[2], "°C",  sym[0], "°C",  ips[0].ID37045, "°C");
        
 
        //<!-- Temperatur Werte Glide Button  -->
        LeftMenuK.update(sym[3], "°C","","","","","","" );
        LeftMenuWZ.update(sym[3], "°C","","","","","","" );
        LeftMenuSZ.update(sym[3], "°C","","","","","","" );
        LeftMenuKZ.update(sym[3], "°C","","","","","","");
 
        //<!-- ************************ Heizung Wohnzimmer ************************  -->

        MainTempHzWZ.update(sym[2], 1);
        MainPosHzWZ.update(sym[4], 0);

        $('TempVorHzWZ1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzWZ1').innerHTML =  "--" + '°C' ;
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
 
     //   $('PosHzKZ1').innerHTML =   Math.round(sym[5]).toFixed(0) + '%';
        MainTempHzKZ.update(sym[1], 1);
        MainPosHzKZ.update(sym[5], 0);        
      
        //$('PosHzKZ2').innerHTML =   Math.round(sym[5]).toFixed(0) + '%';
        $('TempVorHzKZ1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzKZ1').innerHTML =  "--" + '°C'  ;
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
      // $('TempHzSZ1').innerHTML =  sym[0] + '°C'  ;
       
        MainTempHzSZ.update(sym[0], 1);
        MainPosHzSZ.update(sym[6], 0); 
      
      //  $('PosHzSZ2').innerHTML =   Math.round(sym[6]).toFixed(0) + '%';
        $('TempVorHzSZ1').innerHTML =  sym[39] + '°C'  ;
        $('TempRueckHzSZ1').innerHTML = sym[40] + '°C'  ;
        $('SollTempHzSZ1').innerHTML =  sym[37] + '°C'  ;
        $('SollTempAusHzSZ1').innerHTML =  sym[38] + '°C' ;
  
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
         $('TempHzK1').innerHTML =  sym[3] + '°C'  ;
         $('PosHzK1').innerHTML =   Math.round(sym[7]).toFixed(0) + '%';
        MainTempHzK.update(sym[3], 1);
        MainPosHzK.update(sym[7], 0);   
      
     //   $('PosHzK2').innerHTML =   Math.round(sym[7]).toFixed(0) + '%';
        $('TempVorHzK1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzK1').innerHTML =  "--" + '°C'  ;
        $('SollTempHzK1').innerHTML =  sym[42] + '°C'  ;
        $('SollTempAusHzK1').innerHTML =  sym[43] + '°C' ;
  
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
        
        //<!-- ******************** Kochbuch   **************************  -->
        RezeptName.update(ips[0].ID54563);
        RezeptImg.update(ips[0].ID18416);
        IncredBox.update(ips[0].ID29246);
        txtBox.update(ips[0].ID59260);
        RezepteBox.update(ips[0].ID16493);
        //<!-- ******************** Samsung TV **************************  -->
        TVframe.update(ips[0].ID33459, 10000);
        TVGuideframe.update(ips[0].IDID35025, 10000);
        transVarPower.update(ips[0].ID23548,"state");
        transVarVol.update(ips[0].ID44956);
        transVarCh.update(ips[0].ID43304);
        LedDisplayTV.update(ips[0].ID53698);
        transVarSource.update(ips[0].ID26003);
            
        iDisArtistSsz.update(ips[0].ID35731, ips[0].ID38320, ips[0].ID32160, ips[0].ID23875);
        transVarVolSsz.update(ips[0].ID36157,"");
        var bassCalc = Math.round(5*(ips[0].ID55859 +10));
        transVarBassSsz.update(bassCalc,"");
        var trebleCalc = Math.round(5*(ips[0].ID29767 +10));
        transVarTrebleSsz.update(trebleCalc,"");
        var PM = "";
                switch (ips[0].ID57771) {
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
        
        //<!-- ******************** Schlafzimmer Licht **************************  -->
         LightSZ.update(ips[0].ID19506, "", ""); 
        DisLightCurrentSZCtrl.update(ips[0].ID35590,2);
        DisLightPowerSZCtrl.update(ips[0].ID43083,2);
        DisLightEnergySZCtrl.update(ips[0].ID12561, 2);
        iLightSz.update(ips[0].ID19506);
        
        //<!-- ********************   **************************  -->
            var sourceList = new Array(); 
        try{
            sourceList = JSON.parse(ips[0].ID35428);
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
            
            
            

            
            
            iBat01.update(ips[0].ID30280);
            iBat02.update(ips[0].ID49846);
            iBat03.update(ips[0].ID33304);
            iBat04.update(ips[0].ID26399);
            iBat05.update(ips[0].ID25322);
            iBat06.update(sym[30]);
            iBat07.update(ips[0].ID38784);
            iBat11.update(sym[32]);
            iBat12.update(ips[0].ID16681);
            iBat13.update(sym[31]);
            iBat14.update(ips[0].ID18803);
            iBat15.update(sym[29]);
            iBat16.update(ips[0].ID20350);
            
            BatDis.update(sym[44]);
            
            DisSabAlarm.update(ips[0].ID50294);
        
            
            WashMDisAlarm.update(ips[0].ID54473); 
            WashMDisFeuchte.update(ips[0].ID23685); 
            WashMDisWater.update(ips[0].ID27499); 
            
            BathDisAlarm.update(ips[0].ID58710); 
            BathDisFeuchte.update(ips[0].ID17453); 
            BathDisWater.update(ips[0].ID36414);
            
            
            //Dynamisches Bild Rolladen
            iRolloB.update(sym[22]);
            iRolloWZ.update(sym[17]);
            iRolloK.update(sym[15]);
            
            DisPosRolloWZCtrl.update(sym[17]);   
            DisModeRolloWZCtrl.update(sym[18]); 
            DisST1RolloWZCtrl.update(sym[19]); 
            DisST2RolloWZCtrl.update(sym[20]); 

            DisPosRolloB.update(sym[22]);   
            DisModeRolloB.update(sym[21]); 
            DisST1RolloB.update(ips[0].ID48410); 
            DisST2RolloB.update(ips[0].ID12438); 

            DisPosRolloK.update(sym[15]);   
            DisModeRolloK.update(ips[0].ID54826); 
            DisST1RolloK.update(ips[0].ID42555); 
            DisST2RolloK.update(ips[0].ID46774); 
            CbSSrolloK.update(ips[0].ID45141);


            CbSSrolloB.update(ips[0].ID56785);
            CbSSrolloWZ.update(ips[0].ID49927);
            
            VarDisTempOutside.update(sym[46]);
            VarDisHumOutside.update(sym[47]);
            
            DisAlarmActiveSec.update(sym[48]); 
            ABox.update(ips[0].ID54653);
          
            iDisArtist.update(ips[0].ID34292, ips[0].ID31822, ips[0].ID30505, ips[0].ID17922);
            FontBtnIRadioPower.update(ips[0].ID22520);
            IconVarDisVol.update(ips[0].ID19185,0);
            IconVarDisSource.update(ips[0].ID46852,"state");

            iDisArtistWZ.update(ips[0].ID34292, ips[0].ID31822, ips[0].ID30505, ips[0].ID17922);
            FontBtnIRadioPowerWZ.update(ips[0].ID22520);
            IconVarDisVolWZ.update(ips[0].ID19185,0);
            IconVarDisSourceWZ.update(ips[0].ID46852,"state");
            
      

            
            
     
    }
			
     function Rollo(sym){
 

        //<!-- **************************  Rolladen Ctrl Kinderzimmer **************************  -->
        if (sym[13] == '0'){
            $('RolloKZPos1').innerHTML =  'offen'; 
        }else if (sym[13] == '100'){
            $('RolloKZPos1').innerHTML =  'zu'; 
        }else {
            $('RolloKZPos1').innerHTML =  sym[13];    
        }
        if (ips[0].ID57797 == '1'){
                 $('RolloKZMode1').innerHTML =  'Auto'; 
        }else{
                 $('RolloKZMode1').innerHTML =  'Man'; 
        }
  

        //<!-- ************************** Rolladen Ctrl Kueche ************************** -->
 
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
            
 
           var alarmCode =  ips[0].ID54653;
            
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
           KeyPadSecKey.update(ips[0].ID17052);
           

        } 
        
            function isset(v) {
                	
                if(typeof v === "undefined"){return "fehlt"}
                //return (typeof v === "undefined");
            }