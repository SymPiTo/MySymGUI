class ipsbuffer {
  constructor(ips, sym) {
    this.ips = ips;
    this.sym = sym; //Datenspeicher der Bildvariablen sind am Anfang leer und werden gefüllt mit ips
    this.first = true;
    this.NoHosts = 0;
    this.lala = 10;
    this.serverID = "0";
  }

  get ips() {
    return this._ips;
  }
  set ips(ips) {
    this._ips = ips;
  }

  get sym() {
    return this._sym;
  }
  set sym(sym) {
    this._sym = sym;
  }

  get first() {
    return this._first;
  }
  set first(first) {
    this._first = first;
  }

  get NoHosts() {
    return this._NoHosts;
  }
  set NoHosts(NoHosts) {
    this._NoHosts = NoHosts;
  }

  get serverID() {
    return this._serverID;
  }
  set serverID(serverID) {
    this._serverID = serverID;
  }

  init() {
    //this.ips.ID14879 = ""; //Mute Sonos WZ
    
    //this.ips.ID29022 = ""; //Temperatur SZ (HM)
    //this.ips.ID50730 = ""; //Temperatur KZ
    //this.ips.ID41984 = ""; //Temperatur WZ
    //this.ips.ID54070 = ""; //Temperatur K
    //this.ips.ID20539 = ""; //Position HZ WZ
    //this.ips.ID48718 = ""; //Position HZ KZ
    //this.ips.ID37431 = ""; //Position HZ SZ (HM)
    //this.ips.ID51619 = ""; //Position HZ K   
    //this.ips.ID36168 = ""; // Diele Präsenzmelder
    //this.ips.ID22196 = ""; // Diele Haustür   
    //this.ips.ID56454 = ""; // humidity KZ
    //this.ips.ID50329 = ""; // humidity SZ  

    //this.ips.ID54298 = ""; //Rollo KZ Mode
    //this.ips.ID59964 = ""; //Rollo KZ Postion 

    //this.ips.ID53773 = ""; //Rollo WZ up/down
    //this.ips.ID49991 = ""; //Rollo WZ Position
    //this.ips.ID13953 = ""; //Rollo WZ Mode
    //this.ips.ID21488 = ""; //Rollo WZ Schaltzeit Mo-Fr
    //this.ips.ID37176 = ""; //Rollo WZ Schaltzeit Sa-So 
    //this.ips.ID15822 = ""; //Rollo WZ SSunSet  

    //this.ips.ID57642 = ""; //Rollo B Mode
    //this.ips.ID25065 = ""; //Rollo B Postion          
    
    /*
    this.ips.ID57942 = ""; //Sonnenuntergang
    this.ips.ID11938 = ""; //Sonnenaufgang
    this.ips.ID37348 = ""; //Balkontür
    this.ips.ID40597 = ""; //Soll Modus Hz WZ
    this.ips.ID41314 = ""; //Soll Temp Hz WZ 
    this.ips.ID21198 = ""; //Soll Temp Ausstehend Hz WZ
    this.ips.ID10060 = ""; //Bat Hz WZ Aktor
    this.ips.ID15817 = ""; //Bat Hz KZ
    this.ips.ID42343 = ""; //Bat Hz Aktor SZ
    this.ips.ID22083 = ""; //Bat Hz K
    this.ips.ID34300 = ""; //Soll Modus Hz KZ
    this.ips.ID25152 = ""; //Soll Temp Hz KZ 
    this.ips.ID30444 = ""; //Soll Temp Ausstehend Hz KZ
    this.ips.ID18975 = ""; //Soll Modus Hz SZ (HM)
    this.ips.ID36544 = ""; //Soll Temp Hz SZ  (HM)
    this.ips.ID20217 = ""; //Soll Temp Ausstehend Hz SZ (HM)
    this.ips.ID26565 = ""; //Temp Vor Hz SZ
    this.ips.ID32007 = ""; //Temp Rueck Hz SZ  
    this.ips.ID39562 = ""; //Soll Modus Hz K
    this.ips.ID54426 = ""; //Soll Temp Hz K 
    this.ips.ID21258 = ""; //Soll Temp Ausstehend Hz K     
    this.ips.ID41310 = ""; //Battery Alarm  
    this.ips.ID53083 = ""; //Security Meldung
    this.ips.ID16709 = ""; //Temperatur Balkon Aussen
    this.ips.ID27502 = ""; //Humidity Balkon Aussen
    this.ips.ID44154 = ""; //Alarm Anlage aktiv
*/

    //this.ips.ID53769 = ""; //Rollo K Mode
    //this.ips.ID11004 = ""; //Rollo K Postion 
    //this.ips.ID13003 = ""; //Rollo K up/down
    //this.ips.ID34905 = ""; //Rollo K Schaltzeit Mo-Fr
    //this.ips.ID52660 = ""; //Rollo K Schaltzeit Sa-So
    //this.ips.ID28605 = ""; //Rollo K SSunSet  

    //this.ips.ID25457 = ""; //Rollo B Mode
    //this.ips.ID26881 = ""; //Rollo B Postion 
    //this.ips.ID42649 = ""; //Rollo B up/Down
    //this.ips.ID41457 = ""; //Rollo B Schaltzeit Mo-Fr
    //this.ips.ID25503 = ""; //Rollo B Schaltzeit Sa-So
    //this.ips.ID11634 = ""; // Rollo B SunSet active  

    /*
    this.ips.ID36168 = ""; //Anwesenheit Stste Diele
    this.ips.ID30280 = "" //Bad Fenster Aktor LowBat
    this.ips.ID49846 = ""; //Bad Taster-Fenster LowBat
    this.ips.ID33304 = ""; //Balkon Temp Feuchte Sensor LowBat
    this.ips.ID26399 = ""; //Diele Präsenzmelder LowBat
    this.ips.ID25322 = ""; //Haustür Kontakt LowBat
    this.ips.ID38784 = ""; //Kinderzimmer Temp-Feuchte Sensor LowBat
    this.ips.ID16681 = ""; //Küche Wassermelder LowBat
    this.ips.ID18803 = ""; //Schlafzimmer Feuchte Sensor LowBat
    this.ips.ID50294 = ""; //Sabotage Alarm Bewegungsmelder Diele
    this.ips.ID54473 = ""; //Wasser Sensor Küche Alarm
    this.ips.ID23685 = ""; //Wasser Sensor Küche Feuchte
    this.ips.ID27499 = ""; //Wasser Sensor Küche Wasserstand
    this.ips.ID20350 = ""; //Wasser Sensor Bad Batterie
    this.ips.ID58710 = ""; //Wasser Sensor Bad Alarm
    this.ips.ID17453 = ""; //Wasser Sensor Bad Feuchte
    this.ips.ID36414 = ""; //Wasser Sensor Bad Wasserstand
    this.ips.ID23042 = ""; //TV Volume
    this.ips.ID34392 = ""; //TV Power
    this.ips.ID43304 = ""; //TV Channel - 15810
    this.ips.ID53698 = ""; //TV Channel Name - 41307
    this.ips.ID26003 = ""; //TV Source 24408
    this.ips.ID35428 = ""; //TV SourceList 45960
    this.ips.ID16753 = ""; //Denon Server Name
    this.ips.ID29545 = ""; //SZ Sonos Artist
    this.ips.ID56317 = ""; //SZ Sonos Title
    this.ips.ID37839 = ""; //SZ Sonos Album
    this.ips.ID53465 = ""; //SZ Sonos Volume
    this.ips.ID50128 = ""; //SZ Sonos Mute
    this.ips.ID43872 = ""; //SZ Sonos Loudnes
    this.ips.ID11408 = ""; //SZ Sonos Bass
    this.ips.ID13271 = ""; //SZ Sonos Treble
    this.ips.ID53064 = ""; //SZ Sonos Playmode
    this.ips.ID12748 = ""; //SZ Sonos Cover image  
    this.ips.ID57135 = ""; //ArtisPicLastFM - Denon
    this.ips.ID30505 = ""; //DIDL Artist - Denon
    this.ips.ID17922 = ""; //DIDL Title - Denon
    this.ips.ID31822 = ""; //Line3 - Denon
    this.ips.ID22520 = ""; //Power - Denon
    this.ips.ID19185 = ""; //Volume - Denon
    this.ips.ID33459 = ""; //TVchProgList 31510
    this.ips.ID35025 = ""; //TVProgList  49099
    this.ips.ID54563 = ""; //Kochbuch Titel
    this.ips.ID18416 = ""; //Kochbuch Image
    this.ips.ID29246 = ""; //Kochbuch Zutaten
    */
/*
    this.ips.ID59260 = ""; //Kochbuch Rezept
    this.ips.ID16493 = '{"first":"empty", "second":"empty"}'; //Kochbuch Liste
    this.ips.ID46852 = ""; //Denon Source
    this.ips.ID19506 = ""; //Lampe - Schalter State Schlafzimmer
    this.ips.ID35590 = ""; //Lampe - Schalter current Schlafzimmer
    this.ips.ID43083 = ""; //Lampe - Schalter Power Schlafzimmer
    this.ips.ID12561 = ""; //Lampe - Schalter EnergyCounter Schlafzimmer
    this.ips.ID17052 = ""; // Security Code
    this.ips.ID44125 = '{"first":"empty", "second":"empty"}'; //Wetter Week Data
    this.ips.ID46593 = '{"first":"empty", "second":"empty"}'; //Wetter NowDay Data
*/

    //this.ips.ID22052 = ""; //Rollo SZ Mode
    //this.ips.ID18298 = ""; //Rollo SZ Postion 
    //this.ips.ID58302 = ""; //Rollo SZ up/down
    //this.ips.ID18740 = ""; //Rollo SZ Schaltzeit Mo-Fr
    //this.ips.ID53883 = ""; //Rollo SZ Schaltzeit Sa-So
    //this.ips.ID12349 = ""; //Rollo SZ SSunSet  

    //this.ips.ID25277 = ""; //Rollo KZ Schaltzeit Sa-So
    //this.ips.ID53747 = ""; //Rollo KZ SSunSet            
    //this.ips.ID54434 = ""; //Rollo KZ up/down
    //this.ips.ID28071 = ""; //Rollo KZ Schaltzeit Mo-Fr

    /*
    this.ips.ID34292 = ""; //Denon DIDL AlbumArt URL
    this.ips.ID42467 = ""; //WSS active
    this.ips.ID56321 = ""; //WSS Client 1
    this.ips.ID43949 = ""; //WSS Client 2
    this.ips.ID15131 = ""; //WSS Client 3
    this.ips.ID38435 = ""; //WSS Client 4
    this.ips.ID26335 = ""; //UPNP Server Array
    this.ips.ID59157 = ""; //UPNP Client Array

    this.ips.ID31626 = ""; //UPNP Server Icon
    this.ips.ID14390 = ""; //UPNP Client Icon   
    this.ips.ID31981 = ""; //UPNP Server key

    this.ips.ID16161 = ""; //CPU Frequemcy
    this.ips.ID12220 = ""; //CPU load 15min
    this.ips.ID41245 = ""; //CPU Temperature
    this.ips.ID54826 = ""; //CPU Voltage
    this.ips.ID19292 = ""; //IP
    this.ips.ID59797 = ""; //IPS Kernel STatus
    this.ips.ID41816 = ""; //IPS Version
    this.ips.ID29733 = ""; //Memory Free
    this.ips.ID39889 = ""; //Port this.symcon
    this.ips.ID30080 = ""; //Port WSS
    this.ips.ID30080 = ""; //Mem SD Free

    this.ips.ID23367 = ""; //Error Code
    this.ips.ID56516 = ""; //Operating Voltage
    this.ips.ID20750 = ""; //RSSI Device
    this.ips.ID48787 = ""; //RSSI Peer
    this.ips.ID37634 = ""; //unreach

    this.ips.ID22446 = ""; //RSSI Device
    this.ips.ID53621 = ""; //RSSI Peer
    this.ips.ID51909 = ""; //unreach

    this.ips.ID20695 = ""; //RSSI Device
    this.ips.ID17718 = ""; //RSSI Peer
    this.ips.ID25178 = ""; //unreach

    this.ips.ID51834 = ""; //Duty Cycle
    this.ips.ID36971 = ""; // Error Code
    this.ips.ID29563 = ""; // Error Falt Position
    this.ips.ID14045 = ""; // Op voltage
    this.ips.ID23035 = ""; //RSSI Device
    this.ips.ID48609 = ""; //RSSI Peer
    this.ips.ID42463 = ""; //unreach

    this.ips.ID18797 = ""; //Duty Cycle
    this.ips.ID10775 = ""; // Error Code
    this.ips.ID36083 = ""; // Error Falt Position
    this.ips.ID35613 = ""; // Op voltage
    this.ips.ID48610 = ""; //RSSI Device
    this.ips.ID49852 = ""; //RSSI Peer
    this.ips.ID31856 = ""; //unreach

    this.ips.ID10422 = ""; // unreach
    this.ips.ID27255 = ""; // Error

    this.ips.ID53298 = ""; // act Temperature
    this.ips.ID46213 = ""; // Error Code
    this.ips.ID53923 = ""; // Error Overheat
    this.ips.ID29520 = ""; // RSSI Device
    this.ips.ID31167 = ""; // RSSI Peer
    this.ips.ID19200 = ""; // unreach

    this.ips.ID42477 = ""; // Op. voltage
    this.ips.ID32916 = ""; // RSSI Device
    this.ips.ID12503 = ""; // unreach

    this.ips.ID28998 = ""; // unreach

    this.ips.ID14236 = ""; // unreach

    this.ips.ID32177 = ""; // Fenster Position Bad

    this.ips.ID13580 = ""; // RSSI Device
    this.ips.ID38699 = ""; // RSSI Peer
    this.ips.ID47058 = ""; // unreach

    this.ips.ID39262 = ""; // RSSI Device
    this.ips.ID34051 = ""; // RSSI Peer
    this.ips.ID18170 = ""; // unreach

    this.ips.ID42279 = ""; //Lampe - Schalter State Wohnzimmer Fenster
    this.ips.ID58362 = ""; //Lampe - Schalter current Wohnzimmer Fenster
    this.ips.ID22672 = ""; //Lampe - Schalter Power Wohnzimmer Fenster
    this.ips.ID27048 = ""; //Lampe - Schalter EnergyCounter Wohnzimmer Fenster

    this.ips.ID12113 = ""; //Lampe - Schalter State Wohnzimmer Mitte
    this.ips.ID45930 = ""; //Lampe - Schalter current Wohnzimmer Mitte
    this.ips.ID57742 = ""; //Lampe - Schalter Power Wohnzimmer Mitte
    this.ips.ID21225 = ""; //Lampe - Schalter EnergyCounter Wohnzimmer Mitte

    this.ips.ID40790 = ""; // RSSI Device Diele
    this.ips.ID13713 = ""; // RSSI Peer Diele
    this.ips.ID38705 = ""; // unreach Diele

    this.ips.ID56831 = ""; //Lampe - Schalter State Diele
    this.ips.ID19440 = ""; //Lampe - Schalter current Diele
    this.ips.ID41504 = ""; //Lampe - Schalter Power Diele
    this.ips.ID16840 = ""; //Lampe - Schalter EnergyCounter Diele

    this.ips.ID10829 = ""; //Lampe - LOW BAT Schalterkontakt Diele
    this.ips.ID42787 = ""; //Lampe - Voltage Schalterkontakt Diele
    this.ips.ID25438 = ""; //Lampe - RSSI Device Schalterkontakt Diele
    this.ips.ID44332 = ""; //Lampe - UNREACH Schalterkontakt Diele

    this.ips.ID57825 = ""; //D Temp SZ Kanal 3
    this.ips.ID29076 = ""; //D Temp SZ Kanal 4
    this.ips.ID13507 = ""; //D Temp WZ Kanal 3
    this.ips.ID52998 = ""; //D Temp WZ Kanal 4
    this.ips.ID29170 = ""; //Temp Vor Hz WZ
    this.ips.ID47576 = ""; //Temp Rueck Hz WZ 

    this.ips.ID14488 = ""; // RSSI Device Steckdose
    this.ips.ID16447 = ""; // RSSI Peer Steckdose
    this.ips.ID26377 = ""; // unreach Steckdose

    this.ips.ID16201 = ""; // Homematic Server connected HM   
    this.ips.ID58903 = ""; // Homematic Server default HM  
    this.ips.ID44062 = ""; // Homematic Server duty cycle  HM
    this.ips.ID16055 = ""; // Homematic Server connected  HMIP
    this.ips.ID39565 = ""; // Homematic Server default HMIP  
    this.ips.ID29679 = ""; // Homematic Server description HMIP  
    this.ips.ID36540 = ""; // Homematic Server duty cycle HMIP  

    this.ips.ID37348 = ""; // Balkontür 
    this.ips.ID34489 = ""; // Präsenzsensor AZ
    this.ips.ID48642 = ""; // Lampe AZ
    this.ips.ID37348 = ""; // Tür Balkon
    this.ips.ID59969 = ""; // Bad Temperatur
    this.ips.ID14487 = ""; // Bad Humidity
    this.ips.ID19285 = ""; // Wohnzimmer Humidity
    this.ips.ID36753 = ""; // Wohnzimmer SollTempChanged
    this.ips.ID50046 = ""; // Kinderzimmer SollTempChanged
    this.ips.ID17734 = ""; // Küche SollTempChanged
    this.ips.ID57325 = ""; // Schlafzimmer SollTempChanged
    this.ips.ID54140 = ""; // UPNP Meldung
    this.ips.ID37871 = ""; // Arbeitszimmer Präsenzmelder Batterie
    this.ips.ID48751 = ""; // Bad Temt Feuchte Sensor - Regler Batterie
    this.ips.ID10829 = ""; // Diele Lichtschalter Batterie
    this.ips.ID41083 = ""; // HaustürKontakt Batterie
    this.ips.ID47298 = ""; // Schlafzimmer FensterKontakt Batterie

    this.ips.ID55813 = ""; // Schlafzimmer Temp DiffSensor Batterie
    this.ips.ID42343 = ""; // Schlafzimmer Heizungs Thermostat Batterie
    this.ips.ID44533 = ""; // Schlafzimmer Heizungs Wand Regler Batterie
    this.ips.ID44533 = ""; // Wohnzimmer 6fach Licht Taster Batterie
    this.ips.ID58490 = ""; // Schlafzimmer Fenster state
    this.ips.ID50235 = ""; // Schlafzimmer Heizkörper state

    this.ips.ID22167 = ""; // upnp Actor
    this.ips.ID26207 = ""; // upnp Album
    this.ips.ID52798 = ""; // upnp Artist
    this.ips.ID17831 = ""; // upnp imageURL
    this.ips.ID28233 = ""; // upnp Title
    this.ips.ID38745 = ""; // upnp Track Number
    this.ips.ID46310 = ""; // upnp Player
    this.ips.ID39621 = ""; // upnp Volume
    this.ips.ID12964 = ""; // upnp Client Key

    this.ips.ID27733 = ""; // upnp Progress
    this.ips.ID57135 = ""; // Denon AlbumCover Url
    this.ips.ID48125 = ""; // Denon Album 
    this.ips.ID59871 = ""; // Denon Actor 
    this.ips.ID54627 = ""; // Denon Progress
    this.ips.ID25782 = ""; // Denon TrackNo

    this.ips.ID59093 = ""; // AZ Lampe current
    this.ips.ID24994 = ""; // AZ Lampe Energie counter
    this.ips.ID23507 = ""; // AZ Lampe Power

    this.ips.ID35935 = ""; // Water Alarm

    this.ips.ID48299 = ""; // gefühltes Klima aussen

    this.ips.ID35340 = ""; // Bad Hinweis Luftfeuchtigkeit
    this.ips.ID54987 = ""; // Bad Diff % Luftfeuchtigkeit

    this.ips.ID17123 = ""; // KZ Hinweis Luftfeuchtigkeit
    this.ips.ID54511 = ""; // KZ Diff % Luftfeuchtigkeit

    this.ips.ID39658 = ""; // SZ Hinweis Luftfeuchtigkeit
    this.ips.ID42262 = ""; // SZ Diff % Luftfeuchtigkeit

    this.ips.ID41482 = ""; // WZ Hinweis Luftfeuchtigkeit
    this.ips.ID12337 = ""; // WZ Diff % Luftfeuchtigkeit

    this.ips.ID14487 = ""; // Bad Luftfeuchtigkeit
    this.ips.ID59969 = ""; // Bad Temperatur

    this.ips.ID19285 = ""; // WZ Luftfeuchtigkeit Regler
    this.ips.ID29022 = ""; // WZ Temperatur Regler    

    this.ips.ID38476 = ""; // DUMMY

    this.ips.ID37109 = ""; // Taupunkt Aussen Bad
    this.ips.ID37922 = ""; // Taupunkt Innen Bad
    this.ips.ID12347 = ""; // Wassergehalt Aussen Bad
    this.ips.ID34355 = ""; // Wassergehalt Innen Bad
    this.ips.ID27233 = ""; // Klima Innen Bad
    this.ips.ID46977 = ""; // Warnung Klima Bad

    this.ips.ID39658 = ""; //Hinweis SZ
    this.ips.ID42262 = ""; //Differenz SZ
    this.ips.ID47006 = ""; //Taupunkt Aussen SZ
    this.ips.ID10084 = ""; //Taupunkt Innen SZ
    this.ips.ID37684 = ""; //Wassergehalt Aussen SZ
    this.ips.ID43454 = ""; //Wassergehalt Innen SZ
    this.ips.ID24992 = ""; //Klime Innen SZ
    this.ips.ID33665 = ""; //Auswertung Warnung SZ

    this.ips.DATA42262 = ""; //Differenz SZ
    this.ips.DATA37684 = ""; //Wassergehalt Aussen SZ
    this.ips.DATA43454 = ""; //Wassergehalt Innen SZ 
    this.ips.DATA54987 = ""; //Differenz Bad
    this.ips.DATA12347 = ""; //Wassergehalt Aussen Bad
    this.ips.DATA34355 = ""; //Wassergehalt Innen Bad

    this.ips.ID39612 = ""; //TempSensor Wand SZ

    this.ips.ID41482 = ""; //Hinweis WZ
    this.ips.ID12337 = ""; //Differenz WZ
    this.ips.ID49863 = ""; //Taupunkt Aussen WZ
    this.ips.ID32126 = ""; //Taupunkt Innen WZ
    this.ips.ID43084 = ""; //Wassergehalt Aussen WZ
    this.ips.ID23948 = ""; //Wassergehalt Innen WZ
    this.ips.ID32911 = ""; //Klime Innen WZ
    this.ips.ID43544 = ""; //Auswertung Warnung WZ

    this.ips.DATA12337 = ""; //Differenz WZ
    this.ips.DATA43084 = ""; //Wassergehalt Aussen WZ
    this.ips.DATA23948 = ""; //Wassergehalt Innen WZ

    this.ips.ID17123 = ""; //Hinweis KZ
    this.ips.ID54511 = ""; //Differenz KZ
    this.ips.ID12637 = ""; //Taupunkt Aussen KZ
    this.ips.ID22124 = ""; //Taupunkt Innen KZ
    this.ips.ID37605 = ""; //Wassergehalt Aussen KZ
    this.ips.ID58606 = ""; //Wassergehalt Innen KZ
    this.ips.ID51301 = ""; //Klime Innen KZ
    this.ips.ID40120 = ""; //Auswertung Warnung KZ

    this.ips.DATA54511 = ""; //Differenz KZ
    this.ips.DATA37605 = ""; //Wassergehalt Aussen KZ
    this.ips.DATA58606 = ""; //Wassergehalt Innen KZ

    this.ips.ID48220 = ""; //Temp Wand KZ 

    this.ips.ID37365 = ""; //upnp Server Name
    this.ips.ID13996 = ""; //incomming call
    this.ips.ID11403 = ""; //Liste of hosts
    this.ips.ID36784 = ""; //DSLOut
    this.ips.ID29751 = ""; //DSLIn
    this.ips.ID54212 = ""; //ext Adress000
    this.ips.ID34420 = ""; //Fritz Box Adress Dyn Adress
    this.ips.ID29703 = ""; //DSL Status
    this.ips.ID13418 = ""; //Internet Status
    this.ips.ID12596 = ""; //TV source List
    this.ips.ID17876 = ""; //Denon Source Name
    this.ips.ID20095 = ""; //TV channellist
    this.ips.ID27978 = ""; //Sonos Position
    this.ips.ID54931 = ""; //TV source
    this.ips.ID53226 = ""; //Heatstat Meldung KZ
    this.ips.ID53473 = ""; //Sonos SZ now playing

    this.ips.ID29770 = ""; //Filter Wartungsmeldung
    this.ips.ID29377 = ""; //Filter eingesetzt
    this.ips.ID46559 = ""; //Datum Filter wechseln
    this.ips.ID13215 = ""; //Liter befüllt
    this.ips.ID24603 = ""; //Füllstandsanzeige
    this.ips.ID38470 = ""; //Präsenzmelder WZ
    this.ips.ID55199 = "";
    this.ips.ID47124 = "";
  */
/*
    this.ips.DATA41984 = ""; //Temp Ist WZ
    this.ips.DATA21198 = ""; //Temp Soll WZ
    this.ips.DATA20539 = ""; //Hz Stellung WZ

    this.ips.DATA29022 = ""; //Temp Ist SZ
    this.ips.DATA20217 = ""; //Temp Soll SZ
    this.ips.DATA37431 = ""; //Hz Stellung SZ

    this.ips.DATA50730 = ""; //Temp Ist KZ
    this.ips.DATA25152 = ""; //Temp Soll KZ
    this.ips.DATA48718 = ""; //Umlaufrendite
    this.ips.DATA50816 = ""; //Umlaufrendite
  */
  }

  update(symvar) {
    //objecte zusammenführen target wird ergänzt durch source sind Elemete gleich mit unterschiedlichen Werten wird der Wert von Source genommen
    // Ergebnis steht in target und returnedTarget
    const target = this.ips;
    const source = symvar;
    this.ips = Object.assign(target, source);
  }

  check() {


  }
}

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



function iniData() {

  return (initialisierung = false);
}






function Heizung() {
  //<!-- ******************** Temperatur   Werte Floorplan **************************  -->
  VarDisTempK_E.update(ipsObj.ips.ID54070, 1);
  VarDisTempWZ_E.update(ipsObj.ips.ID41984, 1);
  VarDisTempSZ_E.update(ipsObj.ips.ID29022, 1);
  VarDisTempKZ_E.update(ipsObj.ips.ID50730, 1);



  iHeatSz.update(ipsObj.ips.ID50235);
  iHeatWz.update(ipsObj.ips.ID20539 * 100);
  iHeatKz.update(ipsObj.ips.ID48718 * 100);
  iHeatK.update(ipsObj.ips.ID51619);

 

  //<!-- Temperatur Werte Glide Button  -->
  LeftMenuK.update(ipsObj.ips.ID54070, "°C", "", "", "", "", "", "");
  LeftMenuWZ.update(ipsObj.ips.ID41984, "°C", "", "", "", "", "", "");
  LeftMenuSZ.update(ipsObj.ips.ID29022, "°C", "", "", "", "", "", "");
  LeftMenuKZ.update(ipsObj.ips.ID50730, "°C", "", "", "", "", "", "");
  LeftMenuB.update(ipsObj.ips.ID16709, "°C", "", "", "", "", "", "");
  LeftMenuBad.update(ipsObj.ips.ID59969, "°C", "", "", "", "", "", "");

  //<!-- ************************ Heizung Wohnzimmer ************************  -->
  MainTempHzWZ.update(ipsObj.ips.ID41984, 1);
  MainPosHzWZ.update(ipsObj.ips.ID20539, 0);
  MainTempVHzWZ.update(ipsObj.ips.ID29170, 1);
  MainTempRHzWZ.update(ipsObj.ips.ID47576, 1);

  HzCtrlWZ.update(ipsObj.ips.ID21198, ipsObj.ips.ID41314,false);

  iHzWZ.update(ipsObj.ips.ID20539);

  DisModeHzWZ.update(ipsObj.ips.ID40597);
  DisTempHzWZ.update(ipsObj.ips.ID41984, 1);
  DisPosHzWZCtrl.update(ipsObj.ips.ID20539);
  DisHumidWZCtrl.update(ipsObj.ips.ID19285);

  //<!-- ************************ Heizung Kinderzimmer ************************  -->
  MainTempHzKZ.update(ipsObj.ips.ID50730, 1);
  MainPosHzKZ.update(ipsObj.ips.ID48718, 0);
  MainTempVHzKZ.update("0.0", 1);
  MainTempRHzKZ.update("0.0", 1);

  iHzKZ.update(ipsObj.ips.ID48718);
  HzCtrlKZ.update(ipsObj.ips.ID25152, ipsObj.ips.ID25152, ipsObj.ips.ID50046);

  DisModeHzKZCtrl.update(ipsObj.ips.ID34300);
  DisTempHzKZCtrl.update(ipsObj.ips.ID50730, 1);
  DisPosHzKZCtrl.update(ipsObj.ips.ID48718);
  DisHumidKZCtrl.update(ipsObj.ips.ID56454);

  //<!-- ************************ Heizung Schlafzimmer ************************  -->

  MainTempHzSZ.update(ipsObj.ips.ID29022, 1);
  MainPosHzSZ.update(ipsObj.ips.ID37431, 0);
  MainTempVHzSZ.update(ipsObj.ips.ID32007, 1);
  MainTempRHzSZ.update(ipsObj.ips.ID26565, 1);



  iHzSZ.update(ipsObj.ips.ID37431);
  HzCtrlSZ.update(ipsObj.ips.ID20217, ipsObj.ips.ID36544, ipsObj.ips.ID57325);

  DisModeHzSZCtrl.update(ipsObj.ips.ID47124);
  DisTempHzSZCtrl.update(ipsObj.ips.ID29022, 1);
  DisPosHzSZCtrl.update(ipsObj.ips.ID37431);
  DisHumidSZCtrl.update(ipsObj.ips.ID50329);


  //<!-- ************************ Heizung Kueche ************************  -->
  /*
     $('TempHzK1').innerHTML =  ipsObj.sym[3] + '°C'  ;
     $('PosHzK1').innerHTML =   Math.round(ipsObj.sym[7]).toFixed(0) + '%';
   */
  MainTempHzK.update(ipsObj.ips.ID54070, 1);
  MainPosHzK.update(ipsObj.ips.ID51619, 0);
  MainTempVHzK.update("0.0", 1);
  MainTempRHzK.update("0.0", 1);


  iHzK.update(ipsObj.ips.ID51619);
  HzCtrlK.update(ipsObj.ips.ID21258, ipsObj.ips.ID54426, ipsObj.ips.ID17734);

  DisModeHzKCtrl.update(ipsObj.ips.ID39562);
  DisTempHzKCtrl.update(ipsObj.ips.ID54070, 1);
  DisPosHzKCtrl.update(ipsObj.ips.ID51619);





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





/* ---------------------------------------------------------------------------------------------- */
/* -------------------------------  Aktualisierung der Variablen  ------------------------------- */
/* ---------------------------------------------------------------------------------------------- */
function updateValues() {
  /* ------------------------------- SonosWZ ----------------------------- */
  if (document.getElementById("MainAktien")) {
    DisUmlfRendite.update(ipsObj.ips.ID50816, 3);

                        //sollte nur bei click geladen werden
                        if(ipsObj.serverID == 12760){
                          graphUlfR.dataload(this.ipsObj.ips.DATA50816 );
                          //Befehl nur einmal ausführen, deshalb serverID = 0
                          ipsObj.serverID = 0;
                        }
    
    var x = 0;
  }
 

  /* ------------------------------- SonosWZ ----------------------------- */
  if (document.getElementById("MainGreensense")) {
    Sensor1Icon.update(ipsObj.ips.ID10654);
    Sensor2Icon.update(ipsObj.ips.ID13062);
    Sensor3Icon.update(ipsObj.ips.ID47459);
    Sensor4Icon.update(ipsObj.ips.ID11533);
    Sensor5Icon.update(ipsObj.ips.ID42405);
    Sensor1Lm.update(ipsObj.ips.ID56086);
    Sensor2Lm.update(ipsObj.ips.ID22953);
    Sensor3Lm.update(ipsObj.ips.ID30832);
    Sensor4Lm.update(ipsObj.ips.ID47736);
    Sensor5Lm.update(ipsObj.ips.ID48566);
    
    Sensor1Temp.update(ipsObj.ips.ID47753);
    Sensor2Temp.update(ipsObj.ips.ID14009);
    Sensor3Temp.update(ipsObj.ips.ID26601);
    Sensor4Temp.update(ipsObj.ips.ID23576);
    Sensor5Temp.update(ipsObj.ips.ID32221);

    Sensor1Feuchte.update(ipsObj.ips.ID11431);
    Sensor2Feuchte.update(ipsObj.ips.ID37043);
    Sensor3Feuchte.update(ipsObj.ips.ID31918);
    Sensor4Feuchte.update(ipsObj.ips.ID24329);
    Sensor5Feuchte.update(ipsObj.ips.ID26548);

    Sensor1Stat.update(ipsObj.ips.ID28141);
    Sensor2Stat.update(ipsObj.ips.ID27865);
    Sensor3Stat.update(ipsObj.ips.ID13328);
    Sensor4Stat.update(ipsObj.ips.ID11902);
    Sensor5Stat.update(ipsObj.ips.ID34627);

    Sensor1ID.update(ipsObj.ips.ID29653);
    Sensor2ID.update(ipsObj.ips.ID25601);
    Sensor3ID.update(ipsObj.ips.ID47833);
    Sensor4ID.update(ipsObj.ips.ID50154);
    Sensor5ID.update(ipsObj.ips.ID26102);

  }

  /* ------------------------------- SonosWZ ----------------------------- */
  if (document.getElementById("MainSonosWZ")) {
    //var coverUrl = ipsObj.ips.ID30112;
    //coverUrl = coverUrl.replace("__", "");

    iDisSonosWZ.update(ipsObj.ips.ID30112, ipsObj.ips.ID52806, ipsObj.ips.ID21140, ipsObj.ips.ID39085,ipsObj.ips.ID13777);
    var Power = false;  
    if (ipsObj.ips.ID36394 == ""){
      Power = false;
    }
    else{
      Power = true;
    }

    FontBtnSonosPowerWZ.update(Power);
    SonosWZVol.update(ipsObj.ips.ID31136);
    SonosWZTrack.update(ipsObj.ips.ID42119);
    if(ipsObj.ips.ID52213 > 0){
      var media = "Radio";
    }
    SonosWZSource.update(media);
  }
    /* ------------------------------- SonosWZ ----------------------------- */
  if (document.getElementById("MainSonosSZ")) {
    var coverSZUrl = ipsObj.ips.ID26811;
    
    iDisSonosSZ.update(coverSZUrl, ipsObj.ips.ID44326, ipsObj.ips.ID56244, ipsObj.ips.ID26119,ipsObj.ips.ID30069);
    var Power = false;  
    if (ipsObj.ips.ID16949 == ""){
      Power = false;
    }
    else{
      Power = true;
    }
    FontBtnSonosPowerSZ.update(Power);
    SonosSZVol.update(ipsObj.ips.ID53465);
    SonosSZTrack.update(ipsObj.ips.ID29800);
    if(ipsObj.ips.ID53670 > 0){
      var media = "Radio";
    }
    SonosSZSource.update(media);
  }

  /* ------------------------------- Cam ----------------------------- */
  if (document.getElementById("MainCamWZ")) {
    camImage.update(ipsObj.ips.ID26104);
  }

  /* ------------------------------- Netzwerk ----------------------------- */
  if (document.getElementById("MainNW")) {
    var FBhosts = JSON.parse(ipsObj.ips.ID11403);
    var n = FBhosts.length;
    /* Falls zu viele displays angelegt wurden dann den Rest löschen */
    if (ipsObj.NoHosts > n) {
      for (let index = (ipsObj.NoHosts - n); index < ipsObj.NoHosts; index++) {
        eval("ledno" + index + ".delete()");

      }

    }
    /* Falls zu wenige displays angelegt wurden dann den Rest löschen */
    if (ipsObj.NoHosts < n) {
      for (let i = (ipsObj.NoHosts - n); i < ipsObj.NoHosts; i++) {

        eval("ledno" + i + "= new Led();");
        let y = parseInt("70px", 10) + parseInt("60px", 10) * i + "px";
        eval("ledno" + i + '.create("MainNWCtrl", "' + y + '", "5px", "#ABFF00")');

        eval("IPdis" + i + "= new StateDisplay()");
        let z = parseInt("70px", 10) + parseInt("60px", 10) * i + "px";
        eval("IPdis" + i + '.create("MainNWCtrl","midgreenLight", "", "' + z +
          '", "70px", "60px", "150px", "18px", "IP Adress", "String", "", "", "", "")');

      }
    }
    FBhosts.forEach(function (value, i) {
      //ein Object aus einem String erzeugen
      let led = eval("ledno" + i);
      led.update(FBhosts[i]['NewActive']);
      //ein Object aus einem String erzeugen
      let disp = eval("IPdis" + i);
      disp.update(FBhosts[i]['NewIPAddress'], 0, FBhosts[i]['NewHostName']);

    });
    DSLIn.update(ipsObj.ips.ID29751);
    DSLOut.update(ipsObj.ips.ID36784);
    FBextAdr.update(ipsObj.ips.ID54212);
    FBDNS.update(ipsObj.ips.ID34420);
    VarDSL.update(ipsObj.ips.ID29703);
    INet.update(ipsObj.ips.ID13418);
  }


  if(typeof ipsObj.ips.ID13996 != "undefined"){
    if (ipsObj.ips.ID13996.value != "-") { 
      Meldung.set(true, "Eingehender Anruf.\n\r" + ipsObj.ips.ID13996['value'] + "\n\r" + ipsObj.ips.ID43770['value']);
    } else {
      Meldung.set(false, "");
    }
  }



  /* ------------------------------- Covid ------------------------------- */
  if (document.getElementById("MainCovidB")) {
      D_Covidweek.update(ipsObj.ips.ID31063,0);
      D_Inz.update(ipsObj.ips.ID44672,1);
      D_R.update(ipsObj.ips.ID59037,1);
      BW_Covidweek.update(ipsObj.ips.ID23996,0);
      BW_Inz.update(ipsObj.ips.ID34200,1);
      BW_Dead.update(ipsObj.ips.ID10702,0);
      HD_Covidweek.update(ipsObj.ips.ID38045,0);
      HD_Inz.update(ipsObj.ips.ID30937,1);
      HD_Dead.update(ipsObj.ips.ID55798,0);
      MA_Covidweek.update(ipsObj.ips.ID19543,0);
      MA_Inz.update(ipsObj.ips.ID59569,1);
      MA_Dead.update(ipsObj.ips.ID54162,0);
    /* ------------------------------- Covid Graph------------------------------ */
    //sollte nur bei click geladen werden
    if(ipsObj.serverID == 33023){
      graphCovid.dataload(this.ipsObj.ips.DATA44672, this.ipsObj.ips.DATA30937, this.ipsObj.ips.DATA59569);
      //Befehl nur einmal ausführen, deshalb serverID = 0
      ipsObj.serverID = 0;
    }
     // 
    //sollte nur bei click geladen werden
    if(ipsObj.serverID == 10026){
      graphCovid1.dataload(this.ipsObj.ips.DATA38216, this.ipsObj.ips.DATA31063, this.ipsObj.ips.DATA51616);
      //Befehl nur einmal ausführen, deshalb serverID = 0
      ipsObj.serverID = 0;
    }
  }

  /* ------------------------------- Wasser Filter------------------------------- */
  DiIPSFil1.update(ipsObj.ips.ID29770);
  DiIPSFil2.update(ipsObj.ips.ID29377);
  DiIPSFil3.update(ipsObj.ips.ID46559);
  DiIPSFil4.update(ipsObj.ips.ID13215, 1);
  DiIPSFil5.update(ipsObj.ips.ID24603, 0);
  iFilterK.update(ipsObj.ips.ID24603);


  uhrTop.startTime();
  uhr.startTime();
  stoerbat.update(ipsObj.ips.ID41310, true, "red", "lime");
  stoerwater.update(ipsObj.ips.ID35935, true, "red", "lime");

  /* ------------------------------- Floorplan------------------------------- */
  VarDisClimate.update(ipsObj.ips.ID48299);
  VarDisLüftenBad.update(ipsObj.ips.ID35340);
  VarDisDiffHumidBad.update(ipsObj.ips.ID54987, 0);
  VarDisLüftenKZ.update(ipsObj.ips.ID17123);
  VarDisDiffHumidKZ.update(ipsObj.ips.ID54511, 0);
  VarDisLüftenSZ.update(ipsObj.ips.ID39658);
  VarDisDiffHumidSZ.update(ipsObj.ips.ID42262, 0);
  VarDisLüftenWZ.update(ipsObj.ips.ID41482);
  VarDisDiffHumidWZ.update(ipsObj.ips.ID12337, 0);
  VarDisHumidWZ.update(ipsObj.ips.ID19285, 0);

  /* ------------------------------- Roborock ----------------------------- */
  if (document.getElementById("MainRRWZ")) {
    var RRstate = 0;
    var Status = [];
    switch (ipsObj.ips.ID48664['value']) {
      case 1:
        Status['value'] = "Starting up";
        RRstate = true;
        break;
      case 2:
        Status['value'] = "Sleeping";
        RRstate = false;
        break;
      case 3:
        Status['value'] = "Waiting";
        RRstate = true;
      case 4:
        Status['value'] = "Remote Control";
        break;
      case 5:
        Status['value'] = "Cleaning";
        RRstate = true;
        break;
      case 6:
        Status['value'] = "Return to Base";
        RRstate = true;
        break;
      case 7:
        Status['value'] = "Manual Mode";
        break;
      case 8:
        Status['value'] = "Charging";
        RRstate = false;
        break;
      case 9:
        Status['value'] = "Charging Problem";
        break;
      case 10:
        Status['value'] = "Pause";
        RRstate = false;
        break;
      case 11:
        Status['value'] = "Spot Cleaning";
        RRstate = true;
        break;
      case 12:
        Status['value'] = "Malfunction";
        break;
      case 13:
        Status['value'] = "Shutting Down";
        RRstate = false;
        break;
      case 14:
        Status['value'] = "Software update";
        break;
      case 15:
        Status['value'] = "Docking";
        RRstate = false;
        break;
      case 100:
        Status['value'] = "Full";
        RRstate = false;
        break;
      default:
        // code block
    }
    
    roborock.update(RRstate, "", "");
    RRBat.update(ipsObj.ips.ID28007);
    RRError.update(ipsObj.ips.ID43768);
    RRHB.update(ipsObj.ips.ID54799);
    RRSB.update(ipsObj.ips.ID10507);
    RRFilter.update(ipsObj.ips.ID15483);
    RRSensor.update(ipsObj.ips.ID52016);
    RRStat.update(Status);
    RRLstg.update(ipsObj.ips.ID14129);
  }




  /* ------------------------------- Wohnzimmer Temperatur Graph------------------------------ */
  if (document.getElementById("MainTGWZ")) {
        //sollte nur bei click geladen werden
        if(ipsObj.serverID == 34129){
          graphTWZ.dataload(this.ipsObj.ips.DATA41984, this.ipsObj.ips.DATA21198, this.ipsObj.ips.DATA20539);
          //Befehl nur einmal ausführen, deshalb serverID = 0
          ipsObj.serverID = 0;
        }
    
  }

  /* ------------------------------- Schlafzimmer Temperatur Graph------------------------------ */
  if (document.getElementById("MainTGSZ")) {
    
        //sollte nur bei click geladen werden
        if(ipsObj.serverID == 12276){
          graphTSZ.dataload(this.ipsObj.ips.DATA15922, this.ipsObj.ips.DATA55889, this.ipsObj.ips.DATA37431);
          //Befehl nur einmal ausführen, deshalb serverID = 0
          ipsObj.serverID = 0;
        }
  }

  /* ------------------------------- Kinderzimmer Temperatur Graph------------------------------ */
  if (document.getElementById("MainTGKZ")) {
        //sollte nur bei click geladen werden
        if(ipsObj.serverID == 27353){
          graphTKZ.dataload(this.ipsObj.ips.DATA50730, this.ipsObj.ips.DATA25152, this.ipsObj.ips.DATA48718);
          //Befehl nur einmal ausführen, deshalb serverID = 0
          ipsObj.serverID = 0;
        }
   
   var x = 0;
  }



  /* ------------------------------- Kinderzimmer Fenster------------------------------ */
  if (document.getElementById("MainFKZ")) {
    KZTemp.update(ipsObj.ips.ID48220);
    KZDisHumid.update(ipsObj.ips.ID56454);
    //iWindowKZ.update(ipsObj.ips.ID51433, "", "");

    KZWarn.update(ipsObj.ips.ID40120);
    KZDisKlima.update(ipsObj.ips.ID51301)
    KZDisHstate.update(ipsObj.ips.ID17123);
    KZDisHstateDiff.update(ipsObj.ips.ID54511, 1);
    KZFeuchteInnen.update(ipsObj.ips.ID58606, 1);
    KZFeuchteAussen.update(ipsObj.ips.ID37605, 1);
    KZTPInnen.update(ipsObj.ips.ID22124);
    KZTPAussen.update(ipsObj.ips.ID12637);

            //sollte nur bei click geladen werden
            if(ipsObj.serverID == 21504){
              graphKZ.dataload(ipsObj.ips.DATA58606, ipsObj.ips.DATA37605, ipsObj.ips.DATA54511);
              //Befehl nur einmal ausführen, deshalb serverID = 0
              ipsObj.serverID = 0;
            }
    
  }







  /* ------------------------------- Wohnzimmer Fenster------------------------------ */
  if (document.getElementById("MainFWZ")) {
    iWindowWZ.update(ipsObj.ips.ID11008, "", "");

    WZTemp.update(ipsObj.ips.ID41984);
    WZDisHumid.update(ipsObj.ips.ID39390);

    WZWarn.update(ipsObj.ips.ID43544);
    WZDisKlima.update(ipsObj.ips.ID32911)
    WZDisHstate.update(ipsObj.ips.ID41482);
    WZDisHstateDiff.update(ipsObj.ips.ID12337, 1);
    WZFeuchteInnen.update(ipsObj.ips.ID23948, 1);
    WZFeuchteAussen.update(ipsObj.ips.ID43084, 1);
    WZTPInnen.update(ipsObj.ips.ID32126);
    WZTPAussen.update(ipsObj.ips.ID49863);

    //wird nur bei click einmal geladen werden
    if(ipsObj.serverID == 20131){
      graphWZ.dataload(this.ipsObj.ips.DATA23948, this.ipsObj.ips.DATA43084, this.ipsObj.ips.DATA12337);
      //Befehl nur einmal ausführen, deshalb serverID = 0
      ipsObj.serverID = 0;
    }
    
  }

  /* ------------------------------- Schlafzimmer Fenster------------------------------ */
  if (document.getElementById("MainFSZ")) {
    iWindowSZ.update(ipsObj.ips.ID58490, "", "");

    SZTemp.update(ipsObj.ips.ID39612);
    SZDisHumid.update(ipsObj.ips.ID50329);

    SZWarn.update(ipsObj.ips.ID33665);
    SZDisKlima.update(ipsObj.ips.ID24992)
    SZDisHstate.update(ipsObj.ips.ID39658);
    SZDisHstateDiff.update(ipsObj.ips.ID42262, 1);
    SZFeuchteInnen.update(ipsObj.ips.ID43454, 1);
    SZFeuchteAussen.update(ipsObj.ips.ID37684, 1);
    SZTPInnen.update(ipsObj.ips.ID10084);
    SZTPAussen.update(ipsObj.ips.ID47006);

                    //sollte nur bei click geladen werden
                    if(ipsObj.serverID == 48881){
                      graphSZ.dataload(this.ipsObj.ips.DATA43454, this.ipsObj.ips.DATA37684, this.ipsObj.ips.DATA42262);
                      //Befehl nur einmal ausführen, deshalb serverID = 0
                      ipsObj.serverID = 0;
                    }
    
  }

  /* ------------------------------- Bad- Fenster------------------------------ */
  if (document.getElementById("MainFBad")) {
    WindowBad.update(ipsObj.ips.ID32177, "", "");
    VarDisWindowBad.update(ipsObj.ips.ID32177);

    BathWarn.update(ipsObj.ips.ID46977);
    BathDisKlima.update(ipsObj.ips.ID27233)
    BathDisHstate.update(ipsObj.ips.ID35340);
    BathDisHstateDiff.update(ipsObj.ips.ID54987, 1);
    BathTemp.update(ipsObj.ips.ID59969);
    BathDisHumid.update(ipsObj.ips.ID14487);

    BathFeuchteInnen.update(ipsObj.ips.ID34355, 1);
    BathFeuchteAussen.update(ipsObj.ips.ID12347, 1);
    BathTPInnen.update(ipsObj.ips.ID37922);
    BathTPAussen.update(ipsObj.ips.ID37109);

                        //sollte nur bei click geladen werden
                        if(ipsObj.serverID == 26561){
                          graphB.dataload(this.ipsObj.ips.DATA12347, this.ipsObj.ips.DATA34355, this.ipsObj.ips.DATA54987);
                          //Befehl nur einmal ausführen, deshalb serverID = 0
                          ipsObj.serverID = 0;
                        }
    
  }


  /* ------------------------------- Denon Ceol ------------------------------- */
  if (document.getElementById("MainCeolWZ")) {
    ProgressCeol.update(ipsObj.ips.ID54627);
    CeolVol.update(ipsObj.ips.ID39621);
    CeolTrack.update(ipsObj.ips.ID25782);
    var s = "";
    switch (ipsObj.ips.ID46852) {
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
  }

    /* ---------------------------------- UPNP ---------------------------------- */
    if (document.getElementById("MainUpnp")) {
      UPNPServerBox.update(ipsObj.sym[130]);
      UPNPDeviceBox.update(ipsObj.sym[132]);
      ServerImg.update(ipsObj.ips.ID31626);
      ClientImg.update(ipsObj.ips.ID14390);
      ClientBtn.update(ipsObj.ips.ID46310);
       
      ServerBtn.update(ipsObj.ips.ID37365);
       
    }

  /* ---------------------------------- UPNP Audio---------------------------------- */
  if (document.getElementById("MainUpnpAudio")) {
    DiplayAudio.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID52798, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
    
    AudioTrack.update("Track: " + ipsObj.ips.ID38745);
    AudioPlayer.update(ipsObj.ips.ID46310);
    upnpAudioVol.update(ipsObj.ips.ID39621);
    upnpAudioSource.update(ipsObj.ips.ID46310);
    upnpAudioProgress.update(ipsObj.ips.ID27733);
  }

  /* ---------------------------------- UPNP CD---------------------------------- */
  if (document.getElementById("MainUpnpCD")) {
    DisplayCD.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID52798, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
    upnpCDVol.update(ipsObj.ips.ID39621);
    upnCDSource.update(ipsObj.ips.ID46310);
    upnpCDProgress.update(ipsObj.ips.ID27733);
    CDPlayer.update(ipsObj.ips.ID46310);
    CDTrack.update("Track: " + ipsObj.ips.ID38745);
  }
  /* ---------------------------------- UPNP Video ---------------------------------- */
  if (document.getElementById("MainVideo")) {
    DiplayVideo.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID26207, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
    VideoTrack.update("Track: " + ipsObj.ips.ID38745);
    upnpVideoVol.update(ipsObj.ips.ID39621);
    upnpVideoSource.update(ipsObj.ips.ID46310);
    upnpVideoProgress.update(ipsObj.ips.ID27733);
    VideoPlayer.update(ipsObj.ips.ID46310);
  }

    /* ---------------------------------- UPNP Video ---------------------------------- */
    if (document.getElementById("MainFoto")) {
      DiplayFoto.update(ipsObj.ips.ID17831, ipsObj.ips.ID26207, ipsObj.ips.ID52798, ipsObj.ips.ID28233, ipsObj.ips.ID22167);
      FotoTrack.update("Track: " + ipsObj.ips.ID38745);
      upnpFotoVol.update(ipsObj.ips.ID39621);
      upnpFotoSource.update(ipsObj.ips.ID46310);
      upnpFotoProgress.update(ipsObj.ips.ID27733);
      FotoPlayer.update(ipsObj.ips.ID46310);
    }


  /* --------------------------- Bad Temp / Humidity -------------------------- */
  VarDisTempBad.update(ipsObj.ips.ID59969);
  VarDisHumidBad.update(ipsObj.ips.ID14487);
  /* -------------------------------- Balkontür ------------------------------- */
  VarDisBDoor.update(ipsObj.ips.ID11008);
  /* --------------------------- Haustür Position --------------------------- */
  DynIconDoorD.update(ipsObj.ips.ID22196);
  DisDoorDCtrl.update(ipsObj.ips.ID22196);
  /* --------------------------- Balkontür Position --------------------------- */
  if (document.getElementById("MainDoorB")) {
    DynIconDoorB.update(ipsObj.ips.ID11008);
    DisDoorBCtrl.update(ipsObj.ips.ID11008);
  }
  
  //<!-- ******************** Homematic Server **************************  -->
  DiHM1.update(ipsObj.ips.ID16201);
  DiHM2.update(ipsObj.ips.ID58903);
  DiHM3.update(ipsObj.ips.ID44062);
  DiHM4.update(ipsObj.ips.ID16055);
  DiHM5.update(ipsObj.ips.ID39565);
  var wert = ipsObj.ips.ID29679;
  DiHM6.update(wert);
  DiHM7.update(ipsObj.ips.ID36540);

  //<!-- ******************** Funk Schalt Steckdose und Repeater Wohnzimmer **************************  -->
  DiIPSQ1.update(ipsObj.ips.ID14488);
  DiIPSQ2.update(ipsObj.ips.ID16447);
  DiIPSQ3.update(ipsObj.ips.ID26377);

  //<!-- ******************** Temp Difff Heizung Wohnzimmer **************************  -->
  DiIPSP1.update(ipsObj.ips.ID29170);
  DiIPSP2.update(ipsObj.ips.ID47576);
  DiIPSP3.update(ipsObj.ips.ID13507);
  DiIPSP4.update(ipsObj.ips.ID52998);
  //<!-- ******************** Temp Difff Heizung Schlafzimmer **************************  -->
  DiIPSO1.update(ipsObj.ips.ID26565);
  DiIPSO2.update(ipsObj.ips.ID32007);
  DiIPSO3.update(ipsObj.ips.ID57825);
  DiIPSO4.update(ipsObj.ips.ID29076);

  //<!-- ******************** Licht Schalter Kontakt Diele **************************  -->
  DiIPSN1.update(ipsObj.ips.ID25438);
  DiIPSN2.update(ipsObj.ips.ID44332);

  //<!-- ******************** Licht Aktor Diele **************************  -->
  DiIPSM1.update(ipsObj.ips.ID40790);
  DiIPSM2.update(ipsObj.ips.ID13713);
  DiIPSM3.update(ipsObj.ips.ID38705);
  LightD.update(ipsObj.ips.ID56831, "", "");
  DisLightCurrentDCtrl.update(ipsObj.ips.ID19440, 2);
  DisLightPowerDCtrl.update(ipsObj.ips.ID41504, 2);
  DisLightEnergyDCtrl.update(ipsObj.ips.ID16840, 2);
  iLightD.update(ipsObj.ips.ID56831);
  //<!-- ******************** Wohnzimmer Licht Fenster**************************  -->
  Light1WZ.update(ipsObj.ips.ID42279, "", "");
  DisLightCurrent1WZCtrl.update(ipsObj.ips.ID58362, 2);
  DisLightPower1WZCtrl.update(ipsObj.ips.ID22672, 2);
  DisLightEnergy1WZCtrl.update(ipsObj.ips.ID27048, 2);
  iLight1Wz.update(ipsObj.ips.ID42279);

  //<!-- ******************** Wohnzimmer Licht Mitte**************************  -->
  Light2WZ.update(ipsObj.ips.ID12113, "", "");
  DisLightCurrent2WZCtrl.update(ipsObj.ips.ID45930, 2);
  DisLightPower2WZCtrl.update(ipsObj.ips.ID57742, 2);
  DisLightEnergy2WZCtrl.update(ipsObj.ips.ID21225, 2);
  iLight2Wz.update(ipsObj.ips.ID12113);

  //<!-- ******************** Licht Aktor WZ Mitte **************************  -->
  DiIPSK1.update(ipsObj.ips.ID13580);
  DiIPSK2.update(ipsObj.ips.ID38699);
  DiIPSK3.update(ipsObj.ips.ID47058);
  //<!-- ******************** Licht Aktor WZ Fenster **************************  -->
  DiIPSL1.update(ipsObj.ips.ID39262);
  DiIPSL2.update(ipsObj.ips.ID34051);
  DiIPSL3.update(ipsObj.ips.ID18170);

  /* -------------------------- Fenster Schlafzimmer -------------------------- */
  iWindowSz.update(ipsObj.ips.ID58490);



  //<!-- ******************** HMIP Taster Bad **************************  -->
  DiIPSJ1.update(ipsObj.ips.ID14236);
  HM10.update(ipsObj.ips.ID14236);

  //<!-- ******************** HMIP Aktor 4fach Bad **************************  -->
  DiIPSI1.update(ipsObj.ips.ID28998);
  HM9.update(ipsObj.ips.ID28998);


  //<!-- ******************** HMIP Lichtschalter 6fach Wohnzimmer **************************  -->
  DiIPSH1.update(ipsObj.ips.ID42477);
  DiIPSH2.update(ipsObj.ips.ID32916);
  DiIPSH3.update(ipsObj.ips.ID12503);
  HM8.update(ipsObj.ips.ID12503);

  //<!-- ******************** HMIP Lichtschalter / Mess Aktor Schlafzimmer  **************************  -->
  DiIPSG1.update(ipsObj.ips.ID53298);
  DiIPSG2.update(ipsObj.ips.ID46213);
  DiIPSG3.update(ipsObj.ips.ID53923);
  DiIPSG4.update(ipsObj.ips.ID29520);
  DiIPSG5.update(ipsObj.ips.ID31167);
  DiIPSG6.update(ipsObj.ips.ID19200);
  HM7.update(ipsObj.ips.ID19200);


  //<!-- ******************** HMIP Tür Kontakt Haustür   **************************  -->
  DiIPSF1.update(ipsObj.ips.ID10422);
  DiIPSF2.update(ipsObj.ips.ID27255);
  HM4.update(ipsObj.ips.ID10422);


  //<!-- ******************** HMIP Wasser Sensor Bad   **************************  -->
  DiIPSE1.update(ipsObj.ips.ID18797);
  DiIPSE2.update(ipsObj.ips.ID10775);
  DiIPSE3.update(ipsObj.ips.ID36083);
  DiIPSE4.update(ipsObj.ips.ID35613);
  DiIPSE5.update(ipsObj.ips.ID48610);
  DiIPSE6.update(ipsObj.ips.ID49852);
  DiIPSE7.update(ipsObj.ips.ID31856);
  HM6.update(ipsObj.ips.ID31856);


  //<!-- ******************** HMIP Wasser Sensor Küche   **************************  -->
  DiIPSD1.update(ipsObj.ips.ID51834);
  DiIPSD2.update(ipsObj.ips.ID36971);
  DiIPSD3.update(ipsObj.ips.ID29563);
  DiIPSD4.update(ipsObj.ips.ID14045);
  DiIPSD5.update(ipsObj.ips.ID23035);
  DiIPSD6.update(ipsObj.ips.ID48609);
  DiIPSD7.update(ipsObj.ips.ID42463);
  HM2.update(ipsObj.ips.ID42463);


  //<!-- ******************** HMIP Tem/Feuchte Sensor Schlafzimmer   **************************  -->
  DiIPSC1.update(ipsObj.ips.ID20695);
  DiIPSC2.update(ipsObj.ips.ID17718);
  DiIPSC3.update(ipsObj.ips.ID25178);
  HM5.update(ipsObj.ips.ID25178);


  //<!-- ******************** HMIP Tem/Feuchte Sensor Kinderzimmer   **************************  -->
  DiIPSB1.update(ipsObj.ips.ID22446);
  DiIPSB2.update(ipsObj.ips.ID53621);
  DiIPSB3.update(ipsObj.ips.ID51909);
  HM1.update(ipsObj.ips.ID51909);

  //<!-- ******************** IPS Präsenz Diele   **************************  -->
  DiIPSA1.update(ipsObj.ips.ID23367);
  DiIPSA2.update(ipsObj.ips.ID56516);
  DiIPSA3.update(ipsObj.ips.ID20750);
  DiIPSA4.update(ipsObj.ips.ID48787);
  DiIPSA5.update(ipsObj.ips.ID37634);
  HM3.update(ipsObj.ips.ID37634);


  //<!-- ******************** IPS Server   **************************  -->

  DiIPS1.update(ipsObj.ips.ID19292);
  DiIPS2.update(ipsObj.ips.ID12369);
  DiIPS3.update(ipsObj.ips.ID17974);
  DiIPS4.update(ipsObj.ips.ID37859);
  DiIPS5.update(ipsObj.ips.ID35144);
  DiIPS6.update(ipsObj.ips.ID29733);
  DiIPS7.update(ipsObj.ips.ID30080);
  DiIPS8.update(ipsObj.ips.ID41816);
  DiIPS9.update(ipsObj.ips.ID59797);
  DiIPS10.update(ipsObj.ips.ID39889);
  DiIPS11.update(ipsObj.ips.ID30080);


  //<!-- ******************** Kochbuch   **************************  -->
  /*

  RezeptName.update(ipsObj.sym[100]);
  DeviceBox.update(ipsObj.sym[132]);

  */




  //<!-- ******************** Web Socket Server   **************************  -->

    DisWSSCL1.update(ipsObj.ips.ID56321);
    DisWSSCL2.update(ipsObj.ips.ID43949);
    DisWSSCL3.update(ipsObj.ips.ID15131);
    DisWSSCL4.update(ipsObj.ips.ID38435);
    switch (socket.readyState) {
      case 0:
        Status = "not connecting";
        break;
      case 1:
        Status = "connected";
        break;
      case 2:
        Status = "connecting";
        break;
      case 3:
        Status = "Connection closed";
        break;
    }
    DisWSSStat.update(Status);


  //<!-- ******************** Wetter   **************************  -->
  if (document.getElementById("MainWetterB")) {
    WetterLabelA.update(ipsObj.ips.ID44125,1);
    WetterLabelB.update(ipsObj.ips.ID44125,2);
    WetterLabelC.update(ipsObj.ips.ID44125,3);
    WetterLabelD.update(ipsObj.ips.ID44125,4);
    WetterLabelE.update(ipsObj.ips.ID44125,5);
    WetterLabelF.update(ipsObj.ips.ID44125,6);
    WetterLabelG.update(ipsObj.ips.ID44125,7);
    WetterLabelNow.update(ipsObj.ips.ID46593,0);
  }


  //<!-- ******************** Kochbuch   **************************  -->
  RezeptName.update(ipsObj.ips.ID54563);
  RezeptImg.update(ipsObj.ips.ID18416);
  IncredBox.update(ipsObj.ips.ID29246);
  var x = ipsObj.ips.ID29246;
  txtBox.update(ipsObj.ips.ID59260);
  RezepteBox.update(ipsObj.ips.ID16493);

  //<!-- ******************** Samsung TV **************************  -->
  if (document.getElementById("MainTV1")) {
    /*
    TVframe.update('https://www.chefkoch.de/rezepte/2853311437410196/Weisswurst.html', 10000);
    TVGuideframe.update(ipsObj.ips.ID35025, 10000);
    transVarPower.update(ipsObj.ips.ID34392, "state", "aus", "ein", "", "");
    transVarVol.update(ipsObj.ips.ID23042);
    transVarCh.update(ipsObj.ips.ID43304);
    LedDisplayTV.update(ipsObj.ips.ID53698);
    transVarSource.update(ipsObj.ips.ID26003);

    iDisArtistSsz.update(ipsObj.ips.ID35731, ipsObj.ips.ID38320, ipsObj.ips.ID32160, ipsObj.ips.ID23875);
    transVarVolSsz.update(ipsObj.ips.ID36157, "");
    var bassCalc = Math.round(5 * (ipsObj.ips.ID55859 + 10));
    transVarBassSsz.update(bassCalc, "");
    var trebleCalc = Math.round(5 * (ipsObj.ips.ID29767 + 10));
    transVarTrebleSsz.update(trebleCalc, "");
    var PM = "";
    switch (ipsObj.ips.ID57771) {
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
    */
  }
  //<!-- ******************** Person  **************************  -->
  ihuman.update(ipsObj.ips.ID36168);
  ihumanAZ.update(ipsObj.ips.ID34489);
  ihumanWZ.update(ipsObj.ips.ID38470);




  /* -------------------------- Arbeitsbereich Licht -------------------------- */


  //<!-- ******************** Licht Aktor AZ **************************  -->

  DisLightCurrentAZCtrl.update(ipsObj.ips.ID59093, 2);
  DisLightPowerAZCtrl.update(ipsObj.ips.ID23507, 2);
  DisLightEnergyAZCtrl.update(ipsObj.ips.ID24994, 2);
  iLightAZ.update(ipsObj.ips.ID48642);


  //<!-- ******************** Schlafzimmer Licht **************************  -->
  LightSZ.update(ipsObj.ips.ID19506, "", "");
  DisLightCurrentSZCtrl.update(ipsObj.ips.ID35590, 2);
  DisLightPowerSZCtrl.update(ipsObj.ips.ID43083, 2);
  DisLightEnergySZCtrl.update(ipsObj.ips.ID12561, 2);
  iLightSz.update(ipsObj.ips.ID19506);

  //<!-- ********************   **************************  -->
  /*
      var sourceList = new Array(); 
  try{
      sourceList = JSON.parse(ipsObj.sym[80]);
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



  if (document.getElementById("MainBatAlarm")) {
    iBat01.update(ipsObj.ips.ID30280);
    iBat02.update(ipsObj.ips.ID49846);
    iBat03.update(ipsObj.ips.ID33304);
    iBat04.update(ipsObj.ips.ID26399);
    iBat05.update(ipsObj.ips.ID25322);
    iBat06.update(ipsObj.ips.ID15817);
    iBat07.update(ipsObj.ips.ID38784);
    iBat08.update(ipsObj.ips.ID37871);
    iBat09.update(ipsObj.ips.ID48751);

    iBat11.update(ipsObj.ips.ID22083);
    iBat12.update(ipsObj.ips.ID16681);
    iBat13.update(ipsObj.ips.ID42343);
    iBat14.update(ipsObj.ips.ID18803);
    iBat15.update(ipsObj.ips.ID55199);
    iBat16.update(ipsObj.ips.ID20350);
    iBat17.update(ipsObj.ips.ID10829);
    iBat18.update(ipsObj.ips.ID41083);
    iBat19.update(ipsObj.ips.ID47298);

    iBat20.update(ipsObj.ips.ID55813);
    iBat21.update(ipsObj.ips.ID42343);
    iBat22.update(ipsObj.ips.ID39063);
    iBat23.update(ipsObj.ips.ID35552);

    BatDis.update(ipsObj.ips.ID41310);
  }

  DisSabAlarm.update(ipsObj.ips.ID50294);


  WashMDisAlarm.update(ipsObj.ips.ID54473);
  WashMDisFeuchte.update(ipsObj.ips.ID23685);
  WashMDisWater.update(ipsObj.ips.ID27499);

  BathDisAlarm.update(ipsObj.ips.ID58710);
  BathDisFeuchte.update(ipsObj.ips.ID17453);
  BathDisWater.update(ipsObj.ips.ID36414);


  //Dynamisches Bild Rolladen
  iRolloB.update(ipsObj.ips.ID25065);
  iRolloWZ.update(ipsObj.ips.ID49991);
  iRolloK.update(ipsObj.ips.ID11004);
  iRolloSZ.update(ipsObj.ips.ID18298);
  iRolloKZ.update(ipsObj.ips.ID59964);

  rolloCtrlWZ.update(ipsObj.ips.ID49991, 0);
  DisModeRolloWZCtrl.update(ipsObj.ips.ID13953);
  DisST1RolloWZCtrl.update(ipsObj.ips.ID21488);
  DisST2RolloWZCtrl.update(ipsObj.ips.ID37176);
  CbSSrolloWZ.update(ipsObj.ips.ID15822);

  rolloCtrlB.update(ipsObj.ips.ID25065, 0);
  DisModeRolloB.update(ipsObj.ips.ID57642);
  DisST1RolloB.update(ipsObj.ips.ID41457);
  DisST2RolloB.update(ipsObj.ips.ID25503);
  CbSSrolloB.update(ipsObj.ips.ID11634);

  rolloCtrlK.update(ipsObj.ips.ID11004, 0);
  DisModeRolloK.update(ipsObj.ips.ID53769);
  DisST1RolloK.update(ipsObj.ips.ID34905);
  DisST2RolloK.update(ipsObj.ips.ID52660);
  CbSSrolloK.update(ipsObj.ips.ID28605);

  rolloCtrlSZ.update(ipsObj.ips.ID18298, 0);
  DisModeRolloSZ.update(ipsObj.ips.ID22052);
  DisST1RolloSZ.update(ipsObj.ips.ID18740);
  DisST2RolloSZ.update(ipsObj.ips.ID53883);
  CbSSrolloSZ.update(ipsObj.ips.ID12349);

  rolloCtrlKZ.update(ipsObj.ips.ID59964, 0);
  DisModeRolloKZ.update(ipsObj.ips.ID54298);
  DisST1RolloKZ.update(ipsObj.ips.ID28071);
  DisST2RolloKZ.update(ipsObj.ips.ID25277);
  CbSSrolloKZ.update(ipsObj.ips.ID53747);






  VarDisTempOutside.update(ipsObj.ips.ID16709);
  VarDisHumOutside.update(ipsObj.ips.ID27502);

  DisAlarmActiveSec.update(ipsObj.ips.ID44154);
  ABox.update(ipsObj.ips.ID15289);

  if (document.getElementById("MainCeolWZ")) {
    iDisArtist.update(ipsObj.ips.ID57135, ipsObj.ips.ID31822, ipsObj.ips.ID30505, ipsObj.ips.ID17922);
    FontBtnIRadioPower.update(ipsObj.ips.ID22520);
    //IconVarDisVol.update(ipsObj.sym[97], 0);
    //IconVarDisSource.update(ipsObj.sym[105], "state");
    //IconVarDisServerWZ.update(ipsObj.sym[81]);

    if (ipsObj.ips.ID46852 === 'IRADIO') {
      iDisArtistWZ.update(ipsObj.ips.ID57135, ipsObj.ips.ID31822, ipsObj.ips.ID30505, ipsObj.ips.ID17922);
    } else {
      iDisArtistWZ.update(ipsObj.ips.ID57135, ipsObj.ips.ID48125, ipsObj.ips.ID30505, ipsObj.ips.ID17922, ipsObj.ips.ID59871);
    }

    FontBtnIRadioPowerWZ.update(ipsObj.ips.ID22520);
    //IconVarDisVolWZ.update(ipsObj.sym[97], 0);
    //IconVarDisSourceWZ.update(ipsObj.sym[105], "state", 'Radio', 'Media', 'USB', 'IPOD', 'AUX A', 'AUX D');
  }




}



function Klima() {
  //<!-- **************************  Feuchte Floorplan **************************  -->

  VarDisHumidSZ_E.update(ipsObj.ips.ID50329);
  VarDisHumidKZ_E.update(ipsObj.ips.ID56454);
}

function Security() {
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
  VarDisMainDoor.update(ipsObj.ips.ID22196);

/*
  var alarmCode = ipsObj.ips.ID36168;

  switch (alarmCode['value']) {
    case 1:
      var BatAlarm = "Battery Low";
      break;
    case 2:
      var SecAlarm = "Einbruch";
      break;
    default:

  }
*/

  DisDoorOpen.update(ipsObj.ips.ID22196);
  DisFloorPD.update(ipsObj.ips.ID36168);
  DisBalkonDoorOpen.update(ipsObj.ips.ID37348);
  KeyPadSecKey.update(ipsObj.ips.ID17052);


}

function isset(v) {

  if (typeof v === "undefined") {
    return "fehlt"
  }
  //return (typeof v === "undefined");
}