class ipsbuffer {
  constructor(ips, sym) {
    this.ips = ips;
    this.sym = sym; //Datenspeicher der Bildvariablen sind am Anfang leer und werden gefüllt mit ips
    this.first = true;
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



  init() {
    this.ips.ID15922 = ""; //Temperatur SZ (HM)
    this.ips.ID37045 = ""; //Temperatur KZ
    this.ips.ID51079 = ""; //Temperatur WZ
    this.ips.ID54070 = ""; //Temperatur K
    this.ips.ID18059 = ""; //Position HZ WZ
    this.ips.ID49335 = ""; //Position HZ KZ
    this.ips.ID37431 = ""; //Position HZ SZ (HM)
    this.ips.ID51619 = ""; //Position HZ K   
    this.ips.ID36168 = ""; // Diele Präsenzmelder
    this.ips.ID22196 = ""; // Diele Haustür   
    this.ips.ID56454 = ""; // humidity KZ
    this.ips.ID50329 = ""; // humidity SZ  

    this.ips.ID54298 = ""; //Rollo KZ Mode
    this.ips.ID59964 = ""; //Rollo KZ Postion 

    this.ips.ID53773 = ""; //Rollo WZ up/down
    this.ips.ID49991 = ""; //Rollo WZ Position
    this.ips.ID13953 = ""; //Rollo WZ Mode
    this.ips.ID21488 = ""; //Rollo WZ Schaltzeit Mo-Fr
    this.ips.ID37176 = ""; //Rollo WZ Schaltzeit Sa-So 
    this.ips.ID15822 = ""; //Rollo WZ SSunSet  

    this.ips.ID57642 = ""; //Rollo B Mode
    this.ips.ID25065 = ""; //Rollo B Postion          
    this.ips.ID57942 = ""; //Sonnenuntergang
    this.ips.ID11938 = ""; //Sonnenaufgang
    this.ips.ID37348 = ""; //Balkontür
    this.ips.ID53071 = ""; //Soll Modus Hz WZ
    this.ips.ID31769 = ""; //Soll Temp Hz WZ 
    this.ips.ID27789 = ""; //Soll Temp Ausstehend Hz WZ
    this.ips.ID23472 = ""; //Bat Hz WZ
    this.ips.ID52085 = ""; //Bat Hz KZ
    this.ips.ID42343 = ""; //Bat Hz Aktor SZ
    this.ips.ID22083 = ""; //Bat Hz K
    this.ips.ID34102 = ""; //Soll Modus Hz KZ
    this.ips.ID36377 = ""; //Soll Temp Hz KZ 
    this.ips.ID38441 = ""; //Soll Temp Ausstehend Hz KZ
    this.ips.ID47734 = ""; //Soll Modus Hz SZ (HM)
    this.ips.ID36544 = ""; //Soll Temp Hz SZ  (HM)
    this.ips.ID55889 = ""; //Soll Temp Ausstehend Hz SZ (HM)
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

    this.ips.ID53769 = ""; //Rollo K Mode
    this.ips.ID11004 = ""; //Rollo K Postion 
    this.ips.ID13003 = ""; //Rollo K up/down
    this.ips.ID34905 = ""; //Rollo K Schaltzeit Mo-Fr
    this.ips.ID52660 = ""; //Rollo K Schaltzeit Sa-So
    this.ips.ID28605 = ""; //Rollo K SSunSet  

    this.ips.ID25457 = ""; //Rollo B Mode
    this.ips.ID26881 = ""; //Rollo B Postion 
    this.ips.ID42649 = ""; //Rollo B up/Down
    this.ips.ID41457 = ""; //Rollo B Schaltzeit Mo-Fr
    this.ips.ID25503 = ""; //Rollo B Schaltzeit Sa-So
    this.ips.ID11634 = ""; // Rollo B SunSet active  

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
    this.ips.ID32160 = ""; //SZ Sonos Artist
    this.ips.ID23875 = ""; //SZ Sonos Title
    this.ips.ID38320 = ""; //SZ Sonos Album
    this.ips.ID36157 = ""; //SZ Sonos Volume
    this.ips.ID24061 = ""; //SZ Sonos Mute
    this.ips.ID44467 = ""; //SZ Sonos Loudnes
    this.ips.ID55859 = ""; //SZ Sonos Bass
    this.ips.ID29767 = ""; //SZ Sonos Treble
    this.ips.ID57771 = ""; //SZ Sonos Playmode
    this.ips.ID35731 = ""; //SZ Sonos Cover image  
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
    this.ips.ID29246 = '{"first":"empty", "second":"empty"}'; //Kochbuch Zutaten

    this.ips.ID59260 = ""; //Kochbuch Rezept
    this.ips.ID16493 = ""; //Kochbuch Liste
    this.ips.ID46852 = ""; //Denon Source
    this.ips.ID19506 = ""; //Lampe - Schalter State Schlafzimmer
    this.ips.ID35590 = ""; //Lampe - Schalter current Schlafzimmer
    this.ips.ID43083 = ""; //Lampe - Schalter Power Schlafzimmer
    this.ips.ID12561 = ""; //Lampe - Schalter EnergyCounter Schlafzimmer
    this.ips.ID17052 = ""; // Security Code
    this.ips.ID44125 = '{"first":"empty", "second":"empty"}'; //Wetter Week Data
    this.ips.ID46593 = '{"first":"empty", "second":"empty"}'; //Wetter NowDay Data

    this.ips.ID22052 = ""; //Rollo SZ Mode
    this.ips.ID18298 = ""; //Rollo SZ Postion 
    this.ips.ID58302 = ""; //Rollo SZ up/down
    this.ips.ID18740 = ""; //Rollo SZ Schaltzeit Mo-Fr
    this.ips.ID53883 = ""; //Rollo SZ Schaltzeit Sa-So
    this.ips.ID12349 = ""; //Rollo SZ SSunSet  

    this.ips.ID25277 = ""; //Rollo KZ Schaltzeit Sa-So
    this.ips.ID53747 = ""; //Rollo KZ SSunSet            
    this.ips.ID54434 = ""; //Rollo KZ up/down
    this.ips.ID28071 = ""; //Rollo KZ Schaltzeit Mo-Fr
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

  }

  update(symvar) {
    //objecte zusammenführen target wird ergänzt durch source sind Elemete gleich mit unterschiedlichen Werten wird der Wert von Source genommen
    // Ergebnis steht in target und returnedTarget
    const target = this.ips;
    const source = symvar;
    this.ips = Object.assign(target, source);
  }

  check() {
    try {
      this.sym[0] = this.ips.ID15922; //Temperatur SZ (HM)
      this.sym[1] = this.ips.ID37045; //Temperatur KZ
      this.sym[2] = this.ips.ID51079; //Temperatur WZ
      this.sym[3] = this.ips.ID54070; //Temperatur K
      this.sym[4] = this.ips.ID18059; //Position HZ WZ
      this.sym[5] = this.ips.ID49335; //Position HZ KZ
      this.sym[6] = this.ips.ID37431 * 100; //Position HZ SZ (HM)
      this.sym[7] = this.ips.ID51619; //Position HZ K   
      this.sym[8] = this.ips.ID36168; // Diele Präsenzmelder
      this.sym[9] = this.ips.ID22196; // Diele Haustür   
      this.sym[10] = this.ips.ID56454; // humidity KZ
      this.sym[11] = this.ips.ID50329; // humidity SZ  

      this.sym[12] = this.ips.ID54298; //Rollo KZ Mode
      this.sym[13] = this.ips.ID59964; //Rollo KZ Postion 

      this.sym[16] = this.ips.ID53773; //Rollo WZ up/down
      this.sym[17] = this.ips.ID49991; //Rollo WZ Position
      this.sym[18] = this.ips.ID13953; //Rollo WZ Mode
      this.sym[19] = this.ips.ID21488; //Rollo WZ Schaltzeit Mo-Fr
      this.sym[20] = this.ips.ID37176; //Rollo WZ Schaltzeit Sa-So 
      this.sym[53] = this.ips.ID15822; //Rollo WZ SSunSet  

      this.sym[21] = this.ips.ID57642; //Rollo B Mode
      this.sym[22] = this.ips.ID25065; //Rollo B Postion          
      this.sym[23] = this.ips.ID57942; //Sonnenuntergang
      this.sym[24] = this.ips.ID11938; //Sonnenaufgang
      this.sym[25] = this.ips.ID37348; //Balkontür
      this.sym[26] = this.ips.ID53071; //Soll Modus Hz WZ
      this.sym[27] = this.ips.ID31769; //Soll Temp Hz WZ 
      this.sym[28] = this.ips.ID27789; //Soll Temp Ausstehend Hz WZ
      this.sym[29] = this.ips.ID23472; //Bat Hz WZ
      this.sym[30] = this.ips.ID52085; //Bat Hz KZ
      this.sym[31] = this.ips.ID42343; //Bat Hz Aktor SZ
      this.sym[32] = this.ips.ID22083; //Bat Hz K
      this.sym[33] = this.ips.ID34102; //Soll Modus Hz KZ
      this.sym[34] = this.ips.ID36377; //Soll Temp Hz KZ 
      this.sym[35] = this.ips.ID38441; //Soll Temp Ausstehend Hz KZ
      this.sym[36] = this.ips.ID47734; //Soll Modus Hz SZ (HM)
      this.sym[37] = this.ips.ID36544; //Soll Temp Hz SZ  (HM)
      this.sym[38] = this.ips.ID55889; //Soll Temp Ausstehend Hz SZ (HM)
      this.sym[39] = this.ips.ID26565; //Temp Vor Hz SZ
      this.sym[40] = this.ips.ID32007; //Temp Rueck Hz SZ  
      this.sym[41] = this.ips.ID39562; //Soll Modus Hz K
      this.sym[42] = this.ips.ID54426; //Soll Temp Hz K 
      this.sym[43] = this.ips.ID21258; //Soll Temp Ausstehend Hz K     
      this.sym[44] = this.ips.ID41310; //Battery Alarm  
      this.sym[45] = this.ips.ID53083; //Security Meldung
      this.sym[46] = this.ips.ID16709; //Temperatur Balkon Aussen
      this.sym[47] = this.ips.ID27502; //Humidity Balkon Aussen
      this.sym[48] = this.ips.ID44154; //Alarm Anlage aktiv

      this.sym[14] = this.ips.ID53769; //Rollo K Mode
      this.sym[15] = this.ips.ID11004; //Rollo K Postion 
      this.sym[49] = this.ips.ID13003; //Rollo K up/down
      this.sym[50] = this.ips.ID34905; //Rollo K Schaltzeit Mo-Fr
      this.sym[51] = this.ips.ID52660; //Rollo K Schaltzeit Sa-So
      this.sym[52] = this.ips.ID28605; //Rollo K SSunSet  


      this.sym[21] = this.ips.ID25457; //Rollo B Mode
      this.sym[22] = this.ips.ID26881; //Rollo B Postion 
      this.sym[54] = this.ips.ID42649; //Rollo B up/Down
      this.sym[55] = this.ips.ID41457; //Rollo B Schaltzeit Mo-Fr
      this.sym[56] = this.ips.ID25503; //Rollo B Schaltzeit Sa-So
      this.sym[57] = this.ips.ID11634; // Rollo B SunSet active  

      this.sym[58] = this.ips.ID36168; //Anwesenheit Stste Diele
      this.sym[59] = this.ips.ID30280; //Bad Fenster Aktor LowBat
      this.sym[60] = this.ips.ID49846; //Bad Taster-Fenster LowBat
      this.sym[61] = this.ips.ID33304; //Balkon Temp Feuchte Sensor LowBat
      this.sym[62] = this.ips.ID26399; //Diele Präsenzmelder LowBat
      this.sym[63] = this.ips.ID25322; //Haustür Kontakt LowBat
      this.sym[64] = this.ips.ID38784; //Kinderzimmer Temp-Feuchte Sensor LowBat
      this.sym[65] = this.ips.ID16681; //Küche Wassermelder LowBat
      this.sym[66] = this.ips.ID18803; //Schlafzimmer Feuchte Sensor LowBat
      this.sym[67] = this.ips.ID50294; //Sabotage Alarm Bewegungsmelder Diele
      this.sym[68] = this.ips.ID54473; //Wasser Sensor Küche Alarm
      this.sym[69] = this.ips.ID23685; //Wasser Sensor Küche Feuchte
      this.sym[70] = this.ips.ID27499; //Wasser Sensor Küche Wasserstand
      this.sym[71] = this.ips.ID20350; //Wasser Sensor Bad Batterie
      this.sym[72] = this.ips.ID58710; //Wasser Sensor Bad Alarm
      this.sym[73] = this.ips.ID17453; //Wasser Sensor Bad Feuchte
      this.sym[74] = this.ips.ID36414; //Wasser Sensor Bad Wasserstand
      this.sym[75] = this.ips.ID23042; //TV Volume
      this.sym[76] = this.ips.ID34392; //TV Power
      this.sym[77] = this.ips.ID43304; //TV Channel - 15810
      this.sym[78] = this.ips.ID53698; //TV Channel Name - 41307
      this.sym[79] = this.ips.ID26003; //TV Source 24408
      this.sym[80] = this.ips.ID35428; //TV SourceList 45960
      this.sym[81] = this.ips.ID16753; //Denon Server Name
      this.sym[82] = this.ips.ID32160; //SZ Sonos Artist
      this.sym[83] = this.ips.ID23875; //SZ Sonos Title
      this.sym[84] = this.ips.ID38320; //SZ Sonos Album
      this.sym[85] = this.ips.ID36157; //SZ Sonos Volume
      this.sym[86] = this.ips.ID24061; //SZ Sonos Mute
      this.sym[87] = this.ips.ID44467; //SZ Sonos Loudnes
      this.sym[88] = this.ips.ID55859; //SZ Sonos Bass
      this.sym[89] = this.ips.ID29767; //SZ Sonos Treble
      this.sym[90] = this.ips.ID57771; //SZ Sonos Playmode
      this.sym[91] = this.ips.ID35731; //SZ Sonos Cover image  
      this.sym[92] = this.ips.ID57135; //ArtisPicLastFM - Denon
      this.sym[93] = this.ips.ID30505; //DIDL Artist - Denon
      this.sym[94] = this.ips.ID17922; //DIDL Title - Denon
      this.sym[95] = this.ips.ID31822; //Line3 - Denon
      this.sym[96] = this.ips.ID22520; //Power - Denon
      this.sym[97] = this.ips.ID19185; //Volume - Denon
      this.sym[98] = this.ips.ID33459; //TVchProgList 31510
      this.sym[99] = this.ips.ID35025; //TVProgList  49099
      this.sym[100] = this.ips.ID54563; //Kochbuch Titel
      this.sym[101] = this.ips.ID18416; //Kochbuch Image
      this.sym[102] = JSON.parse(this.ips.ID29246); //Kochbuch Zutaten

      this.sym[103] = this.ips.ID59260; //Kochbuch Rezept
      this.sym[104] = this.ips.ID16493; //Kochbuch Liste
      this.sym[105] = this.ips.ID46852; //Denon Source
      this.sym[106] = this.ips.ID19506; //Lampe - Schalter State Schlafzimmer
      this.sym[107] = this.ips.ID35590; //Lampe - Schalter current Schlafzimmer
      this.sym[108] = this.ips.ID43083; //Lampe - Schalter Power Schlafzimmer
      this.sym[109] = this.ips.ID12561; //Lampe - Schalter EnergyCounter Schlafzimmer
      this.sym[110] = this.ips.ID17052; // Security Code
      this.sym[111] = JSON.parse(this.ips.ID44125) //Wetter Week Data
      this.sym[112] = JSON.parse(this.ips.ID46593) //Wetter NowDay Data

      this.sym[113] = this.ips.ID22052; //Rollo SZ Mode
      this.sym[114] = this.ips.ID18298; //Rollo SZ Postion 
      this.sym[115] = this.ips.ID58302; //Rollo SZ up/down
      this.sym[116] = this.ips.ID18740; //Rollo SZ Schaltzeit Mo-Fr
      this.sym[117] = this.ips.ID53883; //Rollo SZ Schaltzeit Sa-So
      this.sym[118] = this.ips.ID12349; //Rollo SZ SSunSet  

      this.sym[119] = this.ips.ID25277; //Rollo KZ Schaltzeit Sa-So
      this.sym[120] = this.ips.ID53747; //Rollo KZ SSunSet            
      this.sym[121] = this.ips.ID54434; //Rollo KZ up/down
      this.sym[122] = this.ips.ID28071; //Rollo KZ Schaltzeit Mo-Fr
      this.sym[123] = this.ips.ID34292; //Denon DIDL AlbumArt URL
      this.sym[124] = this.ips.ID42467; //WSS active
      this.sym[125] = this.ips.ID56321; //WSS Client 1
      this.sym[126] = this.ips.ID43949; //WSS Client 2
      this.sym[127] = this.ips.ID15131; //WSS Client 3
      this.sym[128] = this.ips.ID38435; //WSS Client 4
      if (this.ips.ID26335 == "") {
        this.sym[130] = "";
        this.sym[132] = "";
      } else {
        this.sym[129] = JSON.parse(this.ips.ID26335); //UPNP Server Array
        var Server = [];
        var task_names = this.sym[129].map(function (task, index, array) {
          Server[index] = task.FriendlyName;
        });
        this.sym[130] = Server;
        this.sym[131] = JSON.parse(this.ips.ID59157); //UPNP Client Array
        var Client = [];
        var task_names = this.sym[131].map(function (task, index, array) {
          Client[index] = task.FriendlyName;
        });
        this.sym[132] = Client;
      }
      this.sym[133] = this.ips.ID31626; //UPNP Server Icon
      this.sym[134] = this.ips.ID14390; //UPNP Client Icon   
      this.sym[135] = this.ips.ID31981; //UPNP Server key

      this.sym[136] = this.ips.ID16161; //CPU Frequemcy
      this.sym[137] = this.ips.ID12220; //CPU load 15min
      this.sym[138] = this.ips.ID41245; //CPU Temperature
      this.sym[139] = this.ips.ID54826; //CPU Voltage
      this.sym[140] = this.ips.ID19292; //IP
      this.sym[141] = this.ips.ID59797; //IPS Kernel STatus
      this.sym[142] = this.ips.ID41816; //IPS Version
      this.sym[143] = this.ips.ID29733; //Memory Free
      this.sym[144] = this.ips.ID39889; //Port this.symcon
      this.sym[145] = this.ips.ID30080; //Port WSS
      this.sym[146] = this.ips.ID30080; //Mem SD Free

      this.sym[147] = this.ips.ID23367; //Error Code
      this.sym[148] = this.ips.ID56516; //Operating Voltage
      this.sym[149] = this.ips.ID20750; //RSSI Device
      this.sym[150] = this.ips.ID48787; //RSSI Peer
      this.sym[151] = this.ips.ID37634; //unreach

      this.sym[152] = this.ips.ID22446; //RSSI Device
      this.sym[153] = this.ips.ID53621; //RSSI Peer
      this.sym[154] = this.ips.ID51909; //unreach

      this.sym[155] = this.ips.ID20695; //RSSI Device
      this.sym[156] = this.ips.ID17718; //RSSI Peer
      this.sym[157] = this.ips.ID25178; //unreach

      this.sym[158] = this.ips.ID51834; //Duty Cycle
      this.sym[159] = this.ips.ID36971; // Error Code
      this.sym[160] = this.ips.ID29563; // Error Falt Position
      this.sym[161] = this.ips.ID14045; // Op voltage
      this.sym[162] = this.ips.ID23035; //RSSI Device
      this.sym[163] = this.ips.ID48609; //RSSI Peer
      this.sym[164] = this.ips.ID42463; //unreach

      this.sym[165] = this.ips.ID18797; //Duty Cycle
      this.sym[166] = this.ips.ID10775; // Error Code
      this.sym[167] = this.ips.ID36083; // Error Falt Position
      this.sym[168] = this.ips.ID35613; // Op voltage
      this.sym[169] = this.ips.ID48610; //RSSI Device
      this.sym[170] = this.ips.ID49852; //RSSI Peer
      this.sym[171] = this.ips.ID31856; //unreach

      this.sym[172] = this.ips.ID10422; // unreach
      this.sym[173] = this.ips.ID27255; // Error

      this.sym[174] = this.ips.ID53298; // act Temperature
      this.sym[175] = this.ips.ID46213; // Error Code
      this.sym[176] = this.ips.ID53923; // Error Overheat
      this.sym[177] = this.ips.ID29520; // RSSI Device
      this.sym[178] = this.ips.ID31167; // RSSI Peer
      this.sym[179] = this.ips.ID19200; // unreach

      this.sym[180] = this.ips.ID42477; // Op. voltage
      this.sym[181] = this.ips.ID32916; // RSSI Device
      this.sym[182] = this.ips.ID12503; // unreach

      this.sym[183] = this.ips.ID28998; // unreach

      this.sym[184] = this.ips.ID14236; // unreach

      this.sym[185] = this.ips.ID32177; // Fenster Position Bad

      this.sym[186] = this.ips.ID13580; // RSSI Device
      this.sym[187] = this.ips.ID38699; // RSSI Peer
      this.sym[188] = this.ips.ID47058; // unreach

      this.sym[189] = this.ips.ID39262; // RSSI Device
      this.sym[190] = this.ips.ID34051; // RSSI Peer
      this.sym[191] = this.ips.ID18170; // unreach

      this.sym[192] = this.ips.ID42279; //Lampe - Schalter State Wohnzimmer Fenster
      this.sym[193] = this.ips.ID58362; //Lampe - Schalter current Wohnzimmer Fenster
      this.sym[194] = this.ips.ID22672; //Lampe - Schalter Power Wohnzimmer Fenster
      this.sym[195] = this.ips.ID27048; //Lampe - Schalter EnergyCounter Wohnzimmer Fenster

      this.sym[196] = this.ips.ID12113; //Lampe - Schalter State Wohnzimmer Mitte
      this.sym[197] = this.ips.ID45930; //Lampe - Schalter current Wohnzimmer Mitte
      this.sym[198] = this.ips.ID57742; //Lampe - Schalter Power Wohnzimmer Mitte
      this.sym[199] = this.ips.ID21225; //Lampe - Schalter EnergyCounter Wohnzimmer Mitte

      this.sym[200] = this.ips.ID40790; // RSSI Device Diele
      this.sym[201] = this.ips.ID13713; // RSSI Peer Diele
      this.sym[202] = this.ips.ID38705; // unreach Diele

      this.sym[203] = this.ips.ID56831; //Lampe - Schalter State Diele
      this.sym[204] = this.ips.ID19440; //Lampe - Schalter current Diele
      this.sym[205] = this.ips.ID41504; //Lampe - Schalter Power Diele
      this.sym[206] = this.ips.ID16840; //Lampe - Schalter EnergyCounter Diele

      this.sym[207] = this.ips.ID10829; //Lampe - LOW BAT Schalterkontakt Diele
      this.sym[208] = this.ips.ID42787; //Lampe - Voltage Schalterkontakt Diele
      this.sym[209] = this.ips.ID25438; //Lampe - RSSI Device Schalterkontakt Diele
      this.sym[210] = this.ips.ID44332; //Lampe - UNREACH Schalterkontakt Diele

      this.sym[211] = this.ips.ID57825; //D Temp SZ Kanal 3
      this.sym[212] = this.ips.ID29076; //D Temp SZ Kanal 4
      this.sym[213] = this.ips.ID13507; //D Temp WZ Kanal 3
      this.sym[214] = this.ips.ID52998; //D Temp WZ Kanal 4
      this.sym[215] = this.ips.ID29170; //Temp Vor Hz WZ
      this.sym[216] = this.ips.ID47576; //Temp Rueck Hz WZ 

      this.sym[217] = this.ips.ID14488; // RSSI Device Steckdose
      this.sym[218] = this.ips.ID16447; // RSSI Peer Steckdose
      this.sym[219] = this.ips.ID26377; // unreach Steckdose

      this.sym[220] = this.ips.ID16201; // Homematic Server connected HM   
      this.sym[221] = this.ips.ID58903; // Homematic Server default HM  
      this.sym[222] = this.ips.ID44062; // Homematic Server duty cycle  HM
      this.sym[223] = this.ips.ID16055; // Homematic Server connected  HMIP
      this.sym[224] = this.ips.ID39565; // Homematic Server default HMIP  
      this.sym[225] = this.ips.ID29679; // Homematic Server description HMIP  
      this.sym[226] = this.ips.ID36540; // Homematic Server duty cycle HMIP  

      this.sym[227] = this.ips.ID37348; // Balkontür 
      this.sym[228] = this.ips.ID34489; // Präsenzsensor AZ
      this.sym[229] = this.ips.ID48642; // Lampe AZ
      this.sym[230] = this.ips.ID37348; // Tür Balkon
      this.sym[231] = this.ips.ID59969; // Bad Temperatur
      this.sym[232] = this.ips.ID14487; // Bad Humidity
      this.sym[233] = this.ips.ID19285; // Wohnzimmer Humidity
      this.sym[234] = this.ips.ID36753; // Wohnzimmer SollTempChanged
      this.sym[235] = this.ips.ID50046; // Kinderzimmer SollTempChanged
      this.sym[236] = this.ips.ID17734; // Küche SollTempChanged
      this.sym[237] = this.ips.ID57325; // Schlafzimmer SollTempChanged
      this.sym[238] = this.ips.ID54140; // UPNP Meldung
      this.sym[239] = this.ips.ID37871; // Arbeitszimmer Präsenzmelder Batterie
      this.sym[240] = this.ips.ID48751; // Bad Temt Feuchte Sensor - Regler Batterie
      this.sym[241] = this.ips.ID10829; // Diele Lichtschalter Batterie
      this.sym[242] = this.ips.ID41083; // HaustürKontakt Batterie
      this.sym[243] = this.ips.ID47298; // Schlafzimmer FensterKontakt Batterie

      this.sym[244] = this.ips.ID55813; // Schlafzimmer Temp DiffSensor Batterie
      this.sym[245] = this.ips.ID42343; // Schlafzimmer Heizungs Thermostat Batterie
      this.sym[246] = this.ips.ID44533; // Schlafzimmer Heizungs Wand Regler Batterie
      this.sym[247] = this.ips.ID44533; // Wohnzimmer 6fach Licht Taster Batterie
      this.sym[248] = this.ips.ID58490; // Schlafzimmer Fenster state
      this.sym[249] = this.ips.ID50235; // Schlafzimmer Heizkörper state

      this.sym[250] = this.ips.ID22167; // upnp Actor
      this.sym[251] = this.ips.ID26207; // upnp Album
      this.sym[252] = this.ips.ID52798; // upnp Artist
      this.sym[253] = this.ips.ID17831; // upnp imageURL
      this.sym[254] = this.ips.ID28233; // upnp Title
      this.sym[255] = this.ips.ID38745; // upnp Track Number
      this.sym[256] = this.ips.ID46310; // upnp Player
      this.sym[257] = this.ips.ID39621; // upnp Volume
      this.sym[258] = this.ips.ID12964; // upnp Client Key

      this.sym[259] = this.ips.ID27733; // upnp Progress
      this.sym[260] = this.ips.ID57135; // Denon AlbumCover Url
      this.sym[261] = this.ips.ID48125; // Denon Album 
      this.sym[262] = this.ips.ID59871; // Denon Actor 
      this.sym[263] = this.ips.ID54627 // Denon Progress
      this.sym[264] = this.ips.ID25782 // Denon TrackNo

      this.sym[265] = this.ips.ID59093; // AZ Lampe current
      this.sym[266] = this.ips.ID24994; // AZ Lampe Energie counter
      this.sym[267] = this.ips.ID23507; // AZ Lampe Power

      this.sym[268] = this.ips.ID35935; // Water Alarm

      this.sym[269] = this.ips.ID48299; // gefühltes Klima aussen

      this.sym[270] = this.ips.ID35340; // Bad Hinweis Luftfeuchtigkeit
      this.sym[271] = this.ips.ID54987; // Bad Diff % Luftfeuchtigkeit

      this.sym[272] = this.ips.ID17123; // KZ Hinweis Luftfeuchtigkeit
      this.sym[273] = this.ips.ID54511; // KZ Diff % Luftfeuchtigkeit

      this.sym[274] = this.ips.ID39658; // SZ Hinweis Luftfeuchtigkeit
      this.sym[275] = this.ips.ID42262; // SZ Diff % Luftfeuchtigkeit

      this.sym[276] = this.ips.ID41482; // WZ Hinweis Luftfeuchtigkeit
      this.sym[277] = this.ips.ID12337; // WZ Diff % Luftfeuchtigkeit

      this.sym[278] = this.ips.ID14487; // Bad Luftfeuchtigkeit
      this.sym[279] = this.ips.ID59969; // Bad Temperatur

      this.sym[280] = this.ips.ID19285; // WZ Luftfeuchtigkeit Regler
      this.sym[281] = this.ips.ID29022; // WZ Temperatur Regler    

      this.sym[282] = this.ips.ID38476; // DUMMY

      this.sym[283] = this.ips.ID37109; // Taupunkt Aussen Bad
      this.sym[284] = this.ips.ID37922; // Taupunkt Innen Bad
      this.sym[285] = this.ips.ID12347; // Wassergehalt Aussen Bad
      this.sym[286] = this.ips.ID34355; // Wassergehalt Innen Bad
      this.sym[287] = this.ips.ID27233; // Klima Innen Bad
      this.sym[288] = this.ips.ID46977; // Warnung Klima Bad

      this.sym[289] = this.ips.ID39658; //Hinweis SZ
      this.sym[290] = this.ips.ID42262; //Differenz SZ
      this.sym[291] = this.ips.ID47006; //Taupunkt Aussen SZ
      this.sym[292] = this.ips.ID10084; //Taupunkt Innen SZ
      this.sym[293] = this.ips.ID37684; //Wassergehalt Aussen SZ
      this.sym[294] = this.ips.ID43454; //Wassergehalt Innen SZ
      this.sym[295] = this.ips.ID24992; //Klime Innen SZ
      this.sym[296] = this.ips.ID33665; //Auswertung Warnung SZ

      this.sym[297] = this.ips.DATA42262; //Differenz SZ
      this.sym[298] = this.ips.DATA37684; //Wassergehalt Aussen SZ
      this.sym[299] = this.ips.DATA43454; //Wassergehalt Innen SZ 
      this.sym[300] = this.ips.DATA54987; //Differenz Bad
      this.sym[301] = this.ips.DATA12347; //Wassergehalt Aussen Bad
      this.sym[302] = this.ips.DATA34355; //Wassergehalt Innen Bad

      this.sym[303] = this.ips.ID39612; //TempSensor Wand SZ

      this.sym[304] = this.ips.ID41482; //Hinweis WZ
      this.sym[305] = this.ips.ID12337; //Differenz WZ
      this.sym[306] = this.ips.ID49863; //Taupunkt Aussen WZ
      this.sym[307] = this.ips.ID32126; //Taupunkt Innen WZ
      this.sym[308] = this.ips.ID43084; //Wassergehalt Aussen WZ
      this.sym[309] = this.ips.ID23948; //Wassergehalt Innen WZ
      this.sym[310] = this.ips.ID32911; //Klime Innen WZ
      this.sym[311] = this.ips.ID43544; //Auswertung Warnung WZ

      this.sym[312] = this.ips.DATA12337; //Differenz WZ
      this.sym[313] = this.ips.DATA43084; //Wassergehalt Aussen WZ
      this.sym[314] = this.ips.DATA23948; //Wassergehalt Innen WZ

      this.sym[315] = this.ips.ID17123; //Hinweis KZ
      this.sym[316] = this.ips.ID54511; //Differenz KZ
      this.sym[317] = this.ips.ID12637; //Taupunkt Aussen KZ
      this.sym[318] = this.ips.ID22124; //Taupunkt Innen KZ
      this.sym[319] = this.ips.ID37605; //Wassergehalt Aussen KZ
      this.sym[320] = this.ips.ID58606; //Wassergehalt Innen KZ
      this.sym[321] = this.ips.ID51301; //Klime Innen KZ
      this.sym[322] = this.ips.ID40120; //Auswertung Warnung KZ

      this.sym[323] = this.ips.DATA54511; //Differenz KZ
      this.sym[324] = this.ips.DATA37605; //Wassergehalt Aussen KZ
      this.sym[325] = this.ips.DATA58606; //Wassergehalt Innen KZ

      this.sym[326] = this.ips.ID48220; //Temp Wand KZ 

      this.sym[327] = this.ips.ID37365; //upnp Server Name

    } catch (err) {
      document.getElementById("fehler").innerHTML = err.message;
    }
    let pos = this.sym.indexOf(undefined);
    if (pos != -1) {
      // ErsatzID verwenden ID38467
      //sym[pos] = ips[0].ID38467;
      check(pos);
    }

    function check(index) {
      //$('fehler').innerHTML = "Variable  wrong ID:" + index;
      ipsObj.sym[index] = "";
    }

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
  VarDisTempK_E.update(ipsObj.sym[3], 1);
  VarDisTempWZ_E.update(ipsObj.sym[2], 1);
  VarDisTempSZ_E.update(ipsObj.sym[0], 1);
  VarDisTempKZ_E.update(ipsObj.sym[1], 1);



  iHeatSz.update(ipsObj.sym[249]);
  iHeatWz.update(ipsObj.sym[4]);
  iHeatKz.update(ipsObj.sym[5]);
  iHeatK.update(ipsObj.sym[7]);


  //<!-- Temperatur Werte Glide Button  -->
  LeftMenuK.update(ipsObj.sym[3], "°C", "", "", "", "", "", "");
  LeftMenuWZ.update(ipsObj.sym[3], "°C", "", "", "", "", "", "");
  LeftMenuSZ.update(ipsObj.sym[3], "°C", "", "", "", "", "", "");
  LeftMenuKZ.update(ipsObj.sym[3], "°C", "", "", "", "", "", "");

  //<!-- ************************ Heizung Wohnzimmer ************************  -->
  MainTempHzWZ.update(ipsObj.sym[2], 1);
  MainPosHzWZ.update(ipsObj.sym[4], 0);
  MainTempVHzWZ.update(ipsObj.sym[215], 1);
  MainTempRHzWZ.update(ipsObj.sym[216], 1);

  HzCtrlWZ.update(ipsObj.sym[28], ipsObj.sym[27], ipsObj.sym[234]);

  iHzWZ.update(ipsObj.sym[4]);

  DisModeHzWZ.update(ipsObj.sym[26]);
  DisTempHzWZ.update(ipsObj.sym[2], 1);
  DisPosHzWZCtrl.update(ipsObj.sym[4]);
  DisHumidWZCtrl.update(ipsObj.sym[233]);

  //<!-- ************************ Heizung Kinderzimmer ************************  -->


  MainTempHzKZ.update(ipsObj.sym[1], 1);
  MainPosHzKZ.update(ipsObj.sym[5], 0);
  MainTempVHzKZ.update("0.0", 1);
  MainTempRHzKZ.update("0.0", 1);



  iHzKZ.update(ipsObj.sym[5]);
  HzCtrlKZ.update(ipsObj.sym[35], ipsObj.sym[34], ipsObj.sym[235]);

  DisModeHzKZCtrl.update(ipsObj.sym[33]);
  DisTempHzKZCtrl.update(ipsObj.sym[1], 1);
  DisPosHzKZCtrl.update(ipsObj.sym[5]);
  DisHumidKZCtrl.update(ipsObj.sym[10]);

  //<!-- ************************ Heizung Schlafzimmer ************************  -->

  MainTempHzSZ.update(ipsObj.sym[0], 1);
  MainPosHzSZ.update(ipsObj.sym[6], 0);
  MainTempVHzSZ.update(ipsObj.sym[40], 1);
  MainTempRHzSZ.update(ipsObj.sym[39], 1);



  iHzSZ.update(ipsObj.sym[6]);
  HzCtrlSZ.update(ipsObj.sym[38], ipsObj.sym[37], ipsObj.sym[237]);

  DisModeHzSZCtrl.update(ipsObj.sym[36]);
  DisTempHzSZCtrl.update(ipsObj.sym[0], 1);
  DisPosHzSZCtrl.update(ipsObj.sym[6]);
  DisHumidSZCtrl.update(ipsObj.sym[11]);


  //<!-- ************************ Heizung Kueche ************************  -->
  /*
     $('TempHzK1').innerHTML =  ipsObj.sym[3] + '°C'  ;
     $('PosHzK1').innerHTML =   Math.round(ipsObj.sym[7]).toFixed(0) + '%';
   */
  MainTempHzK.update(ipsObj.sym[3], 1);
  MainPosHzK.update(ipsObj.sym[7], 0);
  MainTempVHzK.update("0.0", 1);
  MainTempRHzK.update("0.0", 1);


  iHzK.update(ipsObj.sym[7]);
  HzCtrlK.update(ipsObj.sym[43], ipsObj.sym[42], ipsObj.sym[236]);

  DisModeHzKCtrl.update(ipsObj.sym[41]);
  DisTempHzKCtrl.update(ipsObj.sym[3], 1);
  DisPosHzKCtrl.update(ipsObj.sym[7]);





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
  /* ------------------------------- Netzwerk ----------------------------- */
  if (document.getElementById("MainNW")) {
    var FBhosts = JSON.parse(ipsObj.ips.ID11403);
    var n = FBhosts.length;

    FBhosts.forEach(function (value, i) {
      let disp = eval("IPDiIPS" + i);
      let x = "HJHJKH";
      disp.update(FBhosts[0]['NewIPAddress'], 0, FBhosts[0]['NewHostName']);
      let d = "uiuiouio";
    });

  }



  if (ipsObj.ips.ID13996 != "") {
    Meldung.set(true, "Eingehender Anruf.\n\r" + ipsObj.ips.ID13996 + "\n\r" + ipsObj.ips.ID43770);
  } else {
    Meldung.set(false, "");
  }


  uhrTop.startTime();
  uhr.startTime();
  stoerbat.update(ipsObj.sym[44], true, "red", "lime");
  stoerwater.update(ipsObj.sym[268], true, "red", "lime");

  /* ------------------------------- Floorplan------------------------------- */
  VarDisClimate.update(ipsObj.sym[269]);
  VarDisLüftenBad.update(ipsObj.sym[270]);
  VarDisDiffHumidBad.update(ipsObj.sym[271], 0);
  VarDisLüftenKZ.update(ipsObj.sym[272]);
  VarDisDiffHumidKZ.update(ipsObj.sym[273], 0);
  VarDisLüftenSZ.update(ipsObj.sym[274]);
  VarDisDiffHumidSZ.update(ipsObj.sym[275], 0);
  VarDisLüftenWZ.update(ipsObj.sym[276]);
  VarDisDiffHumidWZ.update(ipsObj.sym[277], 0);
  VarDisHumidWZ.update(ipsObj.sym[280], 0);

  /* ------------------------------- Roborock ----------------------------- */
  if (document.getElementById("MainRRWZ")) {
    var RRstate = 0;
    var Status = "";
    switch (ipsObj.ips.ID48664) {
      case 1:
        Status = "Starting up";
        RRstate = true;
        break;
      case 2:
        Status = "Sleeping";
        RRstate = false;
        break;
      case 3:
        Status = "Waiting";
        RRstate = true;
      case 4:
        Status = "Remote Control";
        break;
      case 5:
        Status = "Cleaning";
        RRstate = true;
        break;
      case 6:
        Status = "Return to Base";
        RRstate = true;
        break;
      case 7:
        Status = "Manual Mode";
        break;
      case 8:
        Status = "Charging";
        RRstate = false;
        break;
      case 9:
        Status = "Charging Problem";
        break;
      case 10:
        Status = "Pause";
        RRstate = false;
        break;
      case 11:
        Status = "Spot Cleaning";
        RRstate = true;
        break;
      case 12:
        Status = "Malfunction";
        break;
      case 13:
        Status = "Shutting Down";
        RRstate = false;
        break;
      case 14:
        Status = "Software update";
        break;
      case 15:
        Status = "Docking";
        RRstate = false;
        break;
      case 100:
        Status = "Full";
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


  /* ------------------------------- Kinderzimmer Fenster------------------------------ */
  if (document.getElementById("MainFKZ")) {
    KZTemp.update(ipsObj.ips.ID48220);
    KZDisHumid.update(ipsObj.ips.ID56454);

    KZWarn.update(ipsObj.ips.ID40120);
    KZDisKlima.update(ipsObj.ips.ID51301)
    KZDisHstate.update(ipsObj.ips.ID17123);
    KZDisHstateDiff.update(ipsObj.ips.ID54511, 1);
    KZFeuchteInnen.update(ipsObj.ips.ID58606, 1);
    KZFeuchteAussen.update(ipsObj.ips.ID37605, 1);
    KZTPInnen.update(ipsObj.ips.ID22124);
    KZTPAussen.update(ipsObj.ips.ID12637);

    graphKZ.dataload(ipsObj.ips.DATAT58606, ipsObj.ips.DATA37605, ipsObj.ips.DATA54511);
  }







  /* ------------------------------- Wohnzimmer Fenster------------------------------ */
  if (document.getElementById("MainFWZ")) {
    iWindowWZ.update(ipsObj.sym[25], "", "");

    WZTemp.update(ipsObj.sym[281]);
    WZDisHumid.update(ipsObj.sym[280]);

    WZWarn.update(ipsObj.sym[311]);
    WZDisKlima.update(ipsObj.sym[310])
    WZDisHstate.update(ipsObj.sym[304]);
    WZDisHstateDiff.update(ipsObj.sym[305], 1);
    WZFeuchteInnen.update(ipsObj.sym[309], 1);
    WZFeuchteAussen.update(ipsObj.sym[308], 1);
    WZTPInnen.update(ipsObj.sym[307]);
    WZTPAussen.update(ipsObj.sym[306]);

    graphWZ.dataload(this.ipsObj.sym[314], this.ipsObj.sym[313], this.ipsObj.sym[312]);
  }

  /* ------------------------------- Schlafzimmer Fenster------------------------------ */
  if (document.getElementById("MainFSZ")) {
    iWindowSZ.update(ipsObj.sym[248], "", "");

    SZTemp.update(ipsObj.sym[303]);
    SZDisHumid.update(ipsObj.sym[11]);

    SZWarn.update(ipsObj.sym[296]);
    SZDisKlima.update(ipsObj.sym[295])
    SZDisHstate.update(ipsObj.sym[289]);
    SZDisHstateDiff.update(ipsObj.sym[290], 1);
    SZFeuchteInnen.update(ipsObj.sym[294], 1);
    SZFeuchteAussen.update(ipsObj.sym[293], 1);
    SZTPInnen.update(ipsObj.sym[292]);
    SZTPAussen.update(ipsObj.sym[291]);

    graphSZ.dataload(this.ipsObj.sym[299], this.ipsObj.sym[298], this.ipsObj.sym[297]);
  }

  /* ------------------------------- Bad- Fenster------------------------------ */
  if (document.getElementById("MainFBad")) {
    WindowBad.update(ipsObj.sym[185], "", "");
    VarDisWindowBad.update(ipsObj.sym[185]);

    BathWarn.update(ipsObj.sym[288]);
    BathDisKlima.update(ipsObj.sym[287])
    BathDisHstate.update(ipsObj.sym[270]);
    BathDisHstateDiff.update(ipsObj.sym[271], 1);
    BathTemp.update(ipsObj.sym[279]);
    BathDisHumid.update(ipsObj.sym[278]);

    BathFeuchteInnen.update(ipsObj.sym[286], 1);
    BathFeuchteAussen.update(ipsObj.sym[285], 1);
    BathTPInnen.update(ipsObj.sym[284]);
    BathTPAussen.update(ipsObj.sym[283]);

    graphB.dataload(this.ipsObj.sym[301], this.ipsObj.sym[302], this.ipsObj.sym[300]);
  }


  /* ------------------------------- Denon Ceol ------------------------------- */
  ProgressCeol.update(ipsObj.sym[263]);
  CeolVol.update(ipsObj.sym[257]);
  CeolTrack.update(ipsObj.sym[264]);
  var s = "";
  switch (ipsObj.sym[105]) {
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
  ServerBox.update(ipsObj.sym[130]);
  DeviceBox.update(ipsObj.sym[132]);
  DisMeldung.update(ipsObj.sym[238]);

  DiplayAudio.update(ipsObj.sym[253], ipsObj.sym[251], ipsObj.sym[252], ipsObj.sym[254], ipsObj.sym[250]);
  Track.update("Track: " + ipsObj.sym[255]);
  CDTrack.update("Track: " + ipsObj.sym[255]);
  upnpVol.update(ipsObj.sym[257]);
  upnpSource.update(ipsObj.sym[256]);
  upnpProgress.update(ipsObj.sym[259]);
  DisplayCD.update(ipsObj.sym[253], ipsObj.sym[251], ipsObj.sym[252], ipsObj.sym[254], ipsObj.sym[250]);
  upnpCDVol.update(ipsObj.sym[257]);
  upnCDSource.update(ipsObj.sym[256]);
  upnpCDProgress.update(ipsObj.sym[259]);
  CDPlayer.update(ipsObj.ips.ID46310);

  /* ---------------------------------- UPNP Video ---------------------------------- */
  if (document.getElementById("MainVideo")) {
    DiplayVideo.update(ipsObj.sym[253], ipsObj.sym[251], ipsObj.sym[252], ipsObj.sym[254], ipsObj.sym[250]);
    VideoTrack.update("Track: " + ipsObj.sym[255]);
    upnpVideoVol.update(ipsObj.sym[257]);
    upnpVideoSource.update(ipsObj.sym[256]);
    upnpVideoProgress.update(ipsObj.sym[259]);
  }





  /* --------------------------- Bad Temp / Humidity -------------------------- */
  VarDisTempBad.update(ipsObj.sym[231]);
  VarDisHumidBad.update(ipsObj.sym[232]);
  /* -------------------------------- Balkontür ------------------------------- */
  VarDisBDoor.update(ipsObj.sym[230]);
  /* --------------------------- Haustür Position --------------------------- */
  DynIconDoorD.update(ipsObj.sym[9]);
  DisDoorDCtrl.update(ipsObj.sym[9]);
  /* --------------------------- Balkontür Position --------------------------- */
  if (document.getElementById("MainDoorB")) {
    DynIconDoorB.update(ipsObj.sym[227]);
    DisDoorBCtrl.update(ipsObj.sym[227]);
  }
  //<!-- ******************** Homematic Server **************************  -->
  DiHM1.update(ipsObj.sym[220]);
  DiHM2.update(ipsObj.sym[221]);
  DiHM3.update(ipsObj.sym[222]);
  DiHM4.update(ipsObj.sym[223]);
  DiHM5.update(ipsObj.sym[224]);
  var wert = ipsObj.sym[225].substr(10, 4);
  DiHM6.update(wert);
  DiHM7.update(ipsObj.sym[226]);

  //<!-- ******************** Funk Schalt Steckdose und Repeater Wohnzimmer **************************  -->
  DiIPSQ1.update(ipsObj.sym[217]);
  DiIPSQ2.update(ipsObj.sym[218]);
  DiIPSQ3.update(ipsObj.sym[219]);

  //<!-- ******************** Temp Difff Heizung Wohnzimmer **************************  -->
  DiIPSP1.update(ipsObj.sym[215]);
  DiIPSP2.update(ipsObj.sym[216]);
  DiIPSP3.update(ipsObj.sym[213]);
  DiIPSP4.update(ipsObj.sym[214]);
  //<!-- ******************** Temp Difff Heizung Schlafzimmer **************************  -->
  DiIPSO1.update(ipsObj.sym[39]);
  DiIPSO2.update(ipsObj.sym[40]);
  DiIPSO3.update(ipsObj.sym[211]);
  DiIPSO4.update(ipsObj.sym[212]);

  //<!-- ******************** Licht Schalter Kontakt Diele **************************  -->
  DiIPSN1.update(ipsObj.sym[209]);
  DiIPSN2.update(ipsObj.sym[210]);

  //<!-- ******************** Licht Aktor Diele **************************  -->
  DiIPSM1.update(ipsObj.sym[200]);
  DiIPSM2.update(ipsObj.sym[201]);
  DiIPSM3.update(ipsObj.sym[202]);
  LightD.update(ipsObj.sym[203], "", "");
  DisLightCurrentDCtrl.update(ipsObj.sym[204], 2);
  DisLightPowerDCtrl.update(ipsObj.sym[205], 2);
  DisLightEnergyDCtrl.update(ipsObj.sym[206], 2);
  iLightD.update(ipsObj.sym[203]);
  //<!-- ******************** Wohnzimmer Licht Fenster**************************  -->
  Light1WZ.update(ipsObj.sym[192], "", "");
  DisLightCurrent1WZCtrl.update(ipsObj.sym[193], 2);
  DisLightPower1WZCtrl.update(ipsObj.sym[194], 2);
  DisLightEnergy1WZCtrl.update(ipsObj.sym[195], 2);
  iLight1Wz.update(ipsObj.sym[192]);

  //<!-- ******************** Wohnzimmer Licht Mitte**************************  -->
  Light2WZ.update(ipsObj.sym[196], "", "");
  DisLightCurrent2WZCtrl.update(ipsObj.sym[197], 2);
  DisLightPower2WZCtrl.update(ipsObj.sym[198], 2);
  DisLightEnergy2WZCtrl.update(ipsObj.sym[199], 2);
  iLight2Wz.update(ipsObj.sym[196]);

  //<!-- ******************** Licht Aktor WZ Mitte **************************  -->
  DiIPSK1.update(ipsObj.sym[186]);
  DiIPSK2.update(ipsObj.sym[187]);
  DiIPSK3.update(ipsObj.sym[188]);
  //<!-- ******************** Licht Aktor WZ Fenster **************************  -->
  DiIPSL1.update(ipsObj.sym[189]);
  DiIPSL2.update(ipsObj.sym[190]);
  DiIPSL3.update(ipsObj.sym[191]);

  /* -------------------------- Fenster Schlafzimmer -------------------------- */
  iWindowSz.update(ipsObj.sym[248]);



  //<!-- ******************** HMIP Taster Bad **************************  -->
  DiIPSJ1.update(ipsObj.sym[184]);
  HM10.update(ipsObj.sym[184]);

  //<!-- ******************** HMIP Aktor 4fach Bad **************************  -->
  DiIPSI1.update(ipsObj.sym[183]);
  HM9.update(ipsObj.sym[183]);


  //<!-- ******************** HMIP Lichtschalter 6fach Wohnzimmer **************************  -->
  DiIPSH1.update(ipsObj.sym[180]);
  DiIPSH2.update(ipsObj.sym[181]);
  DiIPSH3.update(ipsObj.sym[182]);
  HM8.update(ipsObj.sym[182]);

  //<!-- ******************** HMIP Lichtschalter / Mess Aktor Schlafzimmer  **************************  -->
  DiIPSG1.update(ipsObj.sym[174]);
  DiIPSG2.update(ipsObj.sym[175]);
  DiIPSG3.update(ipsObj.sym[176]);
  DiIPSG4.update(ipsObj.sym[177]);
  DiIPSG5.update(ipsObj.sym[178]);
  DiIPSG6.update(ipsObj.sym[179]);
  HM7.update(ipsObj.sym[179]);


  //<!-- ******************** HMIP Tür Kontakt Haustür   **************************  -->
  DiIPSF1.update(ipsObj.sym[172]);
  DiIPSF2.update(ipsObj.sym[173]);
  HM4.update(ipsObj.sym[172]);


  //<!-- ******************** HMIP Wasser Sensor Bad   **************************  -->
  DiIPSE1.update(ipsObj.sym[165]);
  DiIPSE2.update(ipsObj.sym[166]);
  DiIPSE3.update(ipsObj.sym[167]);
  DiIPSE4.update(ipsObj.sym[168]);
  DiIPSE5.update(ipsObj.sym[169]);
  DiIPSE6.update(ipsObj.sym[170]);
  DiIPSE7.update(ipsObj.sym[171]);
  HM6.update(ipsObj.sym[171]);


  //<!-- ******************** HMIP Wasser Sensor Küche   **************************  -->
  DiIPSD1.update(ipsObj.sym[158]);
  DiIPSD2.update(ipsObj.sym[159]);
  DiIPSD3.update(ipsObj.sym[160]);
  DiIPSD4.update(ipsObj.sym[161]);
  DiIPSD5.update(ipsObj.sym[162]);
  DiIPSD6.update(ipsObj.sym[163]);
  DiIPSD7.update(ipsObj.sym[164]);
  HM2.update(ipsObj.sym[164]);


  //<!-- ******************** HMIP Tem/Feuchte Sensor Schlafzimmer   **************************  -->
  DiIPSC1.update(ipsObj.sym[155]);
  DiIPSC2.update(ipsObj.sym[156]);
  DiIPSC3.update(ipsObj.sym[157]);
  HM5.update(ipsObj.sym[157]);


  //<!-- ******************** HMIP Tem/Feuchte Sensor Kinderzimmer   **************************  -->
  DiIPSB1.update(ipsObj.sym[152]);
  DiIPSB2.update(ipsObj.sym[153]);
  DiIPSB3.update(ipsObj.sym[154]);
  HM1.update(ipsObj.sym[154]);

  //<!-- ******************** IPS Präsenz Diele   **************************  -->
  DiIPSA1.update(ipsObj.sym[147]);
  DiIPSA2.update(ipsObj.sym[148]);
  DiIPSA3.update(ipsObj.sym[149]);
  DiIPSA4.update(ipsObj.sym[150]);
  DiIPSA5.update(ipsObj.sym[151]);
  HM3.update(ipsObj.sym[151]);


  //<!-- ******************** IPS Server   **************************  -->

  DiIPS1.update(ipsObj.sym[140]);
  DiIPS2.update(ipsObj.sym[136]);
  DiIPS3.update(ipsObj.sym[137]);
  DiIPS4.update(ipsObj.sym[138]);
  DiIPS5.update(ipsObj.sym[139]);
  DiIPS6.update(ipsObj.sym[143]);
  DiIPS7.update(ipsObj.sym[146]);
  DiIPS8.update(ipsObj.sym[142]);
  DiIPS9.update(ipsObj.sym[141]);
  DiIPS10.update(ipsObj.sym[144]);
  DiIPS11.update(ipsObj.sym[145]);


  //<!-- ******************** Kochbuch   **************************  -->
  RezeptName.update(ipsObj.sym[100]);
  DeviceBox.update(ipsObj.sym[132]);
  ServerImg.update(ipsObj.sym[133]);
  ClientImg.update(ipsObj.sym[134]);
  //<!-- ******************** upnp   **************************  -->
  ClientBtn.update(ipsObj.sym[256]);
  Player.update(ipsObj.ips.ID46310);
  ServerBtn.update(ipsObj.ips['ID37365']);



  //<!-- ******************** Web Socket Server   **************************  -->
  DisWSSCL1.update(ipsObj.sym[125]);
  DisWSSCL2.update(ipsObj.sym[126]);
  DisWSSCL3.update(ipsObj.sym[127]);
  DisWSSCL4.update(ipsObj.sym[128]);

  //<!-- ******************** Wetter   **************************  -->
  if (document.getElementById("MainWetterB")) {
    WetterLabelA.update(ipsObj.sym[111][1]['icon'], ipsObj.sym[111][1]['weekday'], ipsObj.sym[111][1]['temperatureHigh'], ipsObj.sym[111][1]['temperatureLow'], ipsObj.sym[111][1]['windSpeed'], ipsObj.sym[111][1]['windGust'], ipsObj.sym[111][1]['cloudCover'], ipsObj.sym[111][1]['humidity']);
    WetterLabelB.update(ipsObj.sym[111][2]['icon'], ipsObj.sym[111][2]['weekday'], ipsObj.sym[111][2]['temperatureHigh'], ipsObj.sym[111][2]['temperatureLow'], ipsObj.sym[111][2]['windSpeed'], ipsObj.sym[111][2]['windGust'], ipsObj.sym[111][2]['cloudCover'], ipsObj.sym[111][2]['humidity']);
    WetterLabelC.update(ipsObj.sym[111][3]['icon'], ipsObj.sym[111][3]['weekday'], ipsObj.sym[111][3]['temperatureHigh'], ipsObj.sym[111][3]['temperatureLow'], ipsObj.sym[111][3]['windSpeed'], ipsObj.sym[111][3]['windGust'], ipsObj.sym[111][3]['cloudCover'], ipsObj.sym[111][3]['humidity']);
    WetterLabelD.update(ipsObj.sym[111][4]['icon'], ipsObj.sym[111][4]['weekday'], ipsObj.sym[111][4]['temperatureHigh'], ipsObj.sym[111][4]['temperatureLow'], ipsObj.sym[111][4]['windSpeed'], ipsObj.sym[111][4]['windGust'], ipsObj.sym[111][4]['cloudCover'], ipsObj.sym[111][4]['humidity']);
    WetterLabelE.update(ipsObj.sym[111][5]['icon'], ipsObj.sym[111][5]['weekday'], ipsObj.sym[111][5]['temperatureHigh'], ipsObj.sym[111][5]['temperatureLow'], ipsObj.sym[111][5]['windSpeed'], ipsObj.sym[111][5]['windGust'], ipsObj.sym[111][5]['cloudCover'], ipsObj.sym[111][5]['humidity']);
    WetterLabelF.update(ipsObj.sym[111][6]['icon'], ipsObj.sym[111][6]['weekday'], ipsObj.sym[111][6]['temperatureHigh'], ipsObj.sym[111][6]['temperatureLow'], ipsObj.sym[111][6]['windSpeed'], ipsObj.sym[111][6]['windGust'], ipsObj.sym[111][6]['cloudCover'], ipsObj.sym[111][6]['humidity']);
    WetterLabelG.update(ipsObj.sym[111][7]['icon'], ipsObj.sym[111][7]['weekday'], ipsObj.sym[111][7]['temperatureHigh'], ipsObj.sym[111][7]['temperatureLow'], ipsObj.sym[111][7]['windSpeed'], ipsObj.sym[111][7]['windGust'], ipsObj.sym[111][7]['cloudCover'], ipsObj.sym[111][7]['humidity']);
    WetterLabelNow.update(ipsObj.sym[112]['icon'], "Aktuell", ipsObj.sym[112]['apparentTemperature'], ipsObj.sym[112]['temperature'], ipsObj.sym[112]['windSpeed'], ipsObj.sym[112]['windGust'], ipsObj.sym[112]['cloudCover'], ipsObj.sym[112]['humidity'], ipsObj.sym[112]['ozone'], ipsObj.sym[112]['uvIndex'], ipsObj.sym[112]['summary']);
  }


  //<!-- ******************** Kochbuch   **************************  -->
  RezeptName.update(ipsObj.sym[100]);
  RezeptImg.update(ipsObj.sym[101]);
  IncredBox.update(ipsObj.sym[102]);
  txtBox.update(ipsObj.sym[103]);
  RezepteBox.update(ipsObj.sym[104]);

  //<!-- ******************** Samsung TV **************************  -->
  if (document.getElementById("MainTV1")) {
    TVframe.update(ipsObj.sym[98], 10000);
    TVGuideframe.update(ipsObj.sym[99], 10000);
    transVarPower.update(ipsObj.sym[76], "state", "aus", "ein", "", "");
    transVarVol.update(ipsObj.sym[75]);
    transVarCh.update(ipsObj.sym[77]);
    LedDisplayTV.update(ipsObj.sym[78]);
    transVarSource.update(ipsObj.sym[79]);

    iDisArtistSsz.update(ipsObj.sym[91], ipsObj.sym[84], ipsObj.sym[82], ipsObj.sym[83]);
    transVarVolSsz.update(ipsObj.sym[85], "");
    var bassCalc = Math.round(5 * (ipsObj.sym[88] + 10));
    transVarBassSsz.update(bassCalc, "");
    var trebleCalc = Math.round(5 * (ipsObj.sym[89] + 10));
    transVarTrebleSsz.update(trebleCalc, "");
    var PM = "";
    switch (ipsObj.sym[90]) {
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
  }
  //<!-- ******************** Person  **************************  -->
  ihuman.update(ipsObj.sym[58]);
  ihumanAZ.update(ipsObj.sym[228]);





  /* -------------------------- Arbeitsbereich Licht -------------------------- */


  //<!-- ******************** Licht Aktor AZ **************************  -->

  DisLightCurrentAZCtrl.update(ipsObj.sym[265], 2);
  DisLightPowerAZCtrl.update(ipsObj.sym[267], 2);
  DisLightEnergyAZCtrl.update(ipsObj.sym[266], 2);
  iLightAZ.update(ipsObj.sym[229]);


  //<!-- ******************** Schlafzimmer Licht **************************  -->
  LightSZ.update(ipsObj.sym[106], "", "");
  DisLightCurrentSZCtrl.update(ipsObj.sym[107], 2);
  DisLightPowerSZCtrl.update(ipsObj.sym[108], 2);
  DisLightEnergySZCtrl.update(ipsObj.sym[109], 2);
  iLightSz.update(ipsObj.sym[106]);

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




  iBat01.update(ipsObj.sym[59]);
  iBat02.update(ipsObj.sym[60]);
  iBat03.update(ipsObj.sym[61]);
  iBat04.update(ipsObj.sym[62]);
  iBat05.update(ipsObj.sym[63]);
  iBat06.update(ipsObj.sym[30]);
  iBat07.update(ipsObj.sym[64]);
  iBat08.update(ipsObj.sym[239]);
  iBat09.update(ipsObj.sym[240]);

  iBat11.update(ipsObj.sym[32]);
  iBat12.update(ipsObj.sym[65]);
  iBat13.update(ipsObj.sym[31]);
  iBat14.update(ipsObj.sym[66]);
  iBat15.update(ipsObj.sym[29]);
  iBat16.update(ipsObj.sym[71]);
  iBat17.update(ipsObj.sym[241]);
  iBat18.update(ipsObj.sym[242]);
  iBat19.update(ipsObj.sym[243]);

  iBat20.update(ipsObj.sym[244]);
  iBat21.update(ipsObj.sym[245]);
  iBat22.update(ipsObj.sym[246]);
  iBat23.update(ipsObj.sym[247]);

  BatDis.update(ipsObj.sym[44]);

  DisSabAlarm.update(ipsObj.sym[67]);


  WashMDisAlarm.update(ipsObj.sym[68]);
  WashMDisFeuchte.update(ipsObj.sym[69]);
  WashMDisWater.update(ipsObj.sym[70]);

  BathDisAlarm.update(ipsObj.sym[72]);
  BathDisFeuchte.update(ipsObj.sym[73]);
  BathDisWater.update(ipsObj.sym[74]);


  //Dynamisches Bild Rolladen
  iRolloB.update(ipsObj.sym[22]);
  iRolloWZ.update(ipsObj.sym[17]);
  iRolloK.update(ipsObj.sym[15]);
  iRolloSZ.update(ipsObj.sym[114]);
  iRolloKZ.update(ipsObj.sym[13]);

  rolloCtrlWZ.update(ipsObj.sym[17], 0);
  DisModeRolloWZCtrl.update(ipsObj.sym[18]);
  DisST1RolloWZCtrl.update(ipsObj.sym[19]);
  DisST2RolloWZCtrl.update(ipsObj.sym[20]);
  CbSSrolloWZ.update(ipsObj.sym[53]);

  rolloCtrlB.update(ipsObj.sym[22], 0);
  DisModeRolloB.update(ipsObj.sym[21]);
  DisST1RolloB.update(ipsObj.sym[55]);
  DisST2RolloB.update(ipsObj.sym[56]);
  CbSSrolloB.update(ipsObj.sym[57]);

  rolloCtrlK.update(ipsObj.sym[15], 0);
  DisModeRolloK.update(ipsObj.sym[14]);
  DisST1RolloK.update(ipsObj.sym[50]);
  DisST2RolloK.update(ipsObj.sym[51]);
  CbSSrolloK.update(ipsObj.sym[52]);

  rolloCtrlSZ.update(ipsObj.sym[114], 0);
  DisModeRolloSZ.update(ipsObj.sym[113]);
  DisST1RolloSZ.update(ipsObj.sym[116]);
  DisST2RolloSZ.update(ipsObj.sym[117]);
  CbSSrolloSZ.update(ipsObj.sym[118]);

  rolloCtrlKZ.update(ipsObj.sym[13], 0);
  DisModeRolloKZ.update(ipsObj.sym[12]);
  DisST1RolloKZ.update(ipsObj.sym[122]);
  DisST2RolloKZ.update(ipsObj.sym[119]);
  CbSSrolloKZ.update(ipsObj.sym[120]);






  VarDisTempOutside.update(ipsObj.sym[46]);
  VarDisHumOutside.update(ipsObj.sym[47]);

  DisAlarmActiveSec.update(ipsObj.sym[48]);
  ABox.update(ipsObj.sym[58]);


  iDisArtist.update(ipsObj.sym[92], ipsObj.sym[95], ipsObj.sym[93], ipsObj.sym[94]);
  FontBtnIRadioPower.update(ipsObj.sym[96]);
  //IconVarDisVol.update(ipsObj.sym[97], 0);
  //IconVarDisSource.update(ipsObj.sym[105], "state");
  //IconVarDisServerWZ.update(ipsObj.sym[81]);

  if (ipsObj.sym[105] === 'IRADIO') {
    iDisArtistWZ.update(ipsObj.sym[92], ipsObj.sym[95], ipsObj.sym[93], ipsObj.sym[94]);
  } else {
    iDisArtistWZ.update(ipsObj.sym[260], ipsObj.sym[261], ipsObj.sym[93], ipsObj.sym[94], ipsObj.sym[262]);
  }

  FontBtnIRadioPowerWZ.update(ipsObj.sym[96]);
  //IconVarDisVolWZ.update(ipsObj.sym[97], 0);
  //IconVarDisSourceWZ.update(ipsObj.sym[105], "state", 'Radio', 'Media', 'USB', 'IPOD', 'AUX A', 'AUX D');





}



function Klima() {
  //<!-- **************************  Feuchte Floorplan **************************  -->

  VarDisHumidSZ_E.update(ipsObj.sym[11]);
  VarDisHumidKZ_E.update(ipsObj.sym[10]);
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
  VarDisMainDoor.update(ipsObj.sym[9]);


  var alarmCode = ipsObj.sym[58];

  switch (alarmCode) {
    case 1:
      var BatAlarm = "Battery Low";
      break;
    case 2:
      var SecAlarm = "Einbruch";
      break;
    default:

  }


  DisDoorOpen.update(ipsObj.sym[9]);
  DisFloorPD.update(ipsObj.sym[8]);
  DisBalkonDoorOpen.update(ipsObj.sym[25]);
  KeyPadSecKey.update(ipsObj.sym[110]);


}

function isset(v) {

  if (typeof v === "undefined") {
    return "fehlt"
  }
  //return (typeof v === "undefined");
}