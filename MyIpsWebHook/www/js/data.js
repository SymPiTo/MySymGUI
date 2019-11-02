     /* --------------------- Klasse daten ---------------------------------------- */
    class data { 
        constructor() {
                  
        }
        
        getTVchannels(){
            var TVchannels = new Array (
                {  No: 0,  selected: false,   Sender: "ARD HD",            icon: "Das Erste HD.png" },
                {  No: 1,  selected: false,   Sender: "ZDF HD",         icon: "zdf hd.png" }, 
                {  No: 2,  selected: false,   Sender: "RTL",            icon: "RTL Television.png" },
                {  No: 3,  selected: false,   Sender: "PRO7",           icon: "ProSieben.png" },  
                {  No: 4,  selected: false,   Sender: "KABEL1",         icon: "kabel eins.png" },
                {  No: 5,  selected: false,   Sender: "RTL2",           icon: "rtl2.png" }, 
                {  No: 6,  selected: false,   Sender: "SAT1",           icon: "SAT.1.png" },
                {  No: 7,  selected: false,   Sender: "3sat",           icon: "3sat.png" },
                {  No: 8,  selected: false,   Sender: "VOX",            icon: "vox.png" },
                {  No: 9,  selected: false,   Sender: "TELE5",          icon: "Tele 5.png" }, 
                {  No: 10, selected: false,   Sender: "ONE HD",         icon: "One%20HD.png" },
                {  No: 11, selected: false,   Sender: "RTLPlus",        icon: "RTLplus.png" },  
                {  No: 12, selected: false,   Sender: "PHOENIX HD",     icon: "phoenix hd.png" },
                {  No: 13, selected: false,   Sender: "ARTE HD",        icon: "arte hd.png" }, 
                {  No: 14, selected: false,   Sender: "SAT1GOLD",       icon: "Sat.1 Gold.png" },
                {  No: 15, selected: false,   Sender: "SIXX",           icon: "sixx.png" },
                {  No: 16, selected: false,   Sender: "PRO7MAXX",       icon: "ProSieben MAXX.png" },  
                {  No: 17, selected: false,   Sender: "ZDF neo HD",     icon: "ZDF_neo HD.png" },  
                {  No: 18, selected: false,   Sender: "Disney Junior",  icon: "Disney Junior.png" },  
                {  No: 19, selected: false,   Sender: "Servus TV",      icon: "ServusTV HD.png" }, 
                {  No: 20, selected: false,   Sender: "WDR Köln HD",    icon: "WDR Köln.png" },  
                {  No: 21, selected: false,   Sender: "HR HD",          icon: "hr-fernsehen HD.png" },  
                {  No: 22, selected: false,   Sender: "BR HD",          icon: "BR Fernsehen Süd HD.png" },  
                {  No: 23, selected: false,   Sender: "NDR HD",         icon: "NDR Niedersachsen HD.png" }, 
                {  No: 24, selected: false,   Sender: "SWR BW HD",      icon: "SWR BW HD.png" },  
                {  No: 25, selected: false,   Sender: "RNF HD",         icon: "rhein%20neckar%20fernsehen.png" },  
                {  No: 26, selected: false,   Sender: "PHOENIX HD",     icon: "phoenix.png" },  
                {  No: 27, selected: false,   Sender: "ZEEOne",         icon: "ZEE.ONE.png" }, 
                {  No: 28, selected: false,   Sender: "SPORT1",         icon: "sport1.png" },  
                {  No: 29, selected: false,   Sender: "BBC HD",         icon: "BBC HD.png" },
                {  No: 30, selected: false,   Sender: "ZDF Info",       icon: "zdf info.png" },     
                {  No: 32, selected: false,   Sender: "Kabel 1 Doku",   icon: "kabel eins.png" },  
                {  No: 33, selected: false,   Sender: "N24 Doku",       icon: "n24.png" },  
                {  No: 34, selected: false,   Sender: "Super RTL",      icon: "super rtl.png" },  
                {  No: 35, selected: false,   Sender: "Nitro",          icon: "rtl nitro.png" } 
                
                
                
            ) 
            return TVchannels;
        } 
        getIRadiochannels(){
            var IRadiocahnnels = new Array (
                {  No: 0, FV: "01", selected: false,  Sender: "Kuschel FM",   icon: "0000.png" },
                {  No: 1, FV: "02", selected: false,  Sender: "SWR 1",   icon: "0001.png" }, 
                {  No: 2, FV: "03", selected: false,   Sender: "Antenne Bayern",   icon: "0002.png" },
                {  No: 3, FV: "04", selected: false,   Sender: "RP",   icon: "0003.png" },  
                {  No: 4, FV: "05", selected: false,   Sender: "Bayern 3",   icon: "0004.png" },
                {  No: 5, FV: "06", selected: false,   Sender: "WDR 5",   icon: "0005.png" }, 
                {  No: 6, FV: "07", selected: false,   Sender: "HR 3",   icon: "0006.png" },
                {  No: 7, FV: "08", selected: false,   Sender: "SWR 3",   icon: "0007.png" },
                {  No: 8, FV: "09", selected: false,   Sender: "NDR2",   icon: "0008.png" } 

            ) 
            return IRadiocahnnels;
        } 
        getCDLib(){
            var CD = new Array (
                {  No: 0, FV: "0001", selected: false,   Album: "1",            icon: "0001.jpg" },
                {  No: 1, FV: "0002", selected: false,   Album: "2",            icon: "0002.jpg" }, 
                {  No: 2, FV: "0003", selected: false,   Album: "3",            icon: "0003.jpg" },
                {  No: 3, FV: "0004", selected: false,   Album: "4",            icon: "0004.jpg" },  
                {  No: 4, FV: "0005", selected: false,   Album: "5",            icon: "0005.jpg" },
                {  No: 5, FV: "0006", selected: false,   Album: "6",            icon: "0006.jpg" }, 
                {  No: 6, FV: "0007", selected: false,   Album: "7",            icon: "0007.jpg" },
                {  No: 7, FV: "0008", selected: false,   Album: "1",            icon: "0008.jpg"},
                {  No: 8, FV: "0009", selected: false,   Album: "2",            icon: "0009.jpg" }, 
                {  No: 9, FV: "0010", selected: false,   Album: "3",            icon: "0010.jpg" },
                {  No: 10, FV: "0011", selected: false,   Album: "4",            icon: "0011.jpg" },  
                {  No: 11, FV: "0012", selected: false,   Album: "5",            icon: "0012.jpg" },
                {  No: 12, FV: "0013", selected: false,   Album: "6",            icon: "0013.jpg" }, 
                {  No: 13, FV: "0014", selected: false,   Album: "7",            icon: "0014.jpg" },
                {  No: 14, FV: "0015", selected: false,   Album: "1",            icon: "0015.jpg" },
                {  No: 15, FV: "0016", selected: false,   Album: "2",            icon: "0016.jpg" }, 
                {  No: 16, FV: "0017", selected: false,   Album: "3",            icon: "0017.jpg" },
                {  No: 17, FV: "0018", selected: false,   Album: "4",            icon: "0018.jpg" },  
                {  No: 18, FV: "0019", selected: false,   Album: "5",            icon: "0019.jpg" },
                {  No: 19, FV: "0020", selected: false,   Album: "6",            icon: "0020.jpg" }, 
                {  No: 20, FV: "0021", selected: false,   Album: "7",            icon: "0021.jpg" },
                {  No: 21, FV: "0022", selected: false,   Album: "1",            icon: "0022.jpg" },
                {  No: 22, FV: "0023", selected: false,   Album: "2",            icon: "0023.jpg" }, 
                {  No: 23, FV: "0024", selected: false,   Album: "3",            icon: "0024.jpg" },
                {  No: 24, FV: "0025", selected: false,   Album: "4",            icon: "0025.jpg" },  
                {  No: 25, FV: "0026", selected: false,   Album: "5",            icon: "0026.jpg" },
                {  No: 26, FV: "0027", selected: false,   Album: "6",            icon: "0027.jpg" }, 
                {  No: 27, FV: "0028", selected: false,   Album: "7",            icon: "0028.jpg" }, 
                {  No: 28, FV: "0029", selected: false,   Album: "6",            icon: "0029.jpg" }, 
                {  No: 29, FV: "0030", selected: false,   Album: "7",            icon: "0030.jpg" }, 
                {  No: 30, FV: "0031", selected: false,   Album: "7",            icon: "0031.jpg" },
                {  No: 31, FV: "0032", selected: false,   Album: "1",            icon: "0032.jpg" },
                {  No: 32, FV: "0033", selected: false,   Album: "2",            icon: "0033.jpg" }, 
                {  No: 33, FV: "0034", selected: false,   Album: "3",            icon: "0034.jpg" },
                {  No: 34, FV: "0035", selected: false,   Album: "4",            icon: "0035.jpg" },  
                {  No: 35, FV: "0036", selected: false,   Album: "5",            icon: "0036.jpg" },
                {  No: 36, FV: "0037", selected: false,   Album: "6",            icon: "0037.jpg" }, 
                {  No: 37, FV: "0038", selected: false,   Album: "7",            icon: "0038.jpg" }, 
                {  No: 38, FV: "0039", selected: false,   Album: "6",            icon: "0039.jpg" }, 
                {  No: 39, FV: "0040", selected: false,   Album: "7",            icon: "0040.jpg" }, 
                {  No: 40, FV: "0041", selected: false,   Album: "7",            icon: "0041.jpg" },
                {  No: 41, FV: "0042", selected: false,   Album: "1",            icon: "0042.jpg" },
                {  No: 42, FV: "0043", selected: false,   Album: "2",            icon: "0043.jpg" }, 
                {  No: 43, FV: "0044", selected: false,   Album: "3",            icon: "0044.jpg" },
                {  No: 44, FV: "0045", selected: false,   Album: "4",            icon: "0045.jpg" },  
                {  No: 45, FV: "0046", selected: false,   Album: "5",            icon: "0046.jpg" },
                {  No: 46, FV: "0047", selected: false,   Album: "6",            icon: "0047.jpg" }, 
                {  No: 47, FV: "0048", selected: false,   Album: "7",            icon: "0048.jpg" }, 
                {  No: 48, FV: "0049", selected: false,   Album: "6",            icon: "0049.jpg" }, 
                {  No: 49, FV: "0050", selected: false,   Album: "7",            icon: "0050.jpg" }, 
                {  No: 50, FV: "0051", selected: false,   Album: "7",            icon: "0051.jpg" },
                {  No: 51, FV: "0052", selected: false,   Album: "1",            icon: "0052.jpg" },
                {  No: 52, FV: "0053", selected: false,   Album: "2",            icon: "0053.jpg" }, 
                {  No: 53, FV: "0054", selected: false,   Album: "3",            icon: "0054.jpg" },
                {  No: 54, FV: "0055", selected: false,   Album: "4",            icon: "0055.jpg" },  
                {  No: 55, FV: "0056", selected: false,   Album: "5",            icon: "0056.jpg" },
                {  No: 56, FV: "0057", selected: false,   Album: "6",            icon: "0057.jpg" }, 
                {  No: 57, FV: "0058", selected: false,   Album: "7",            icon: "0058.jpg" }, 
                {  No: 58, FV: "0059", selected: false,   Album: "6",            icon: "0059.jpg" }, 
                {  No: 59, FV: "0060", selected: false,   Album: "7",            icon: "0060.jpg" }, 
                {  No: 60, FV: "0061", selected: false,   Album: "7",            icon: "0061.jpg" },
                {  No: 61, FV: "0062", selected: false,   Album: "1",            icon: "0062.jpg" },
                {  No: 62, FV: "0063", selected: false,   Album: "2",            icon: "0063.jpg" }, 
                {  No: 63, FV: "0064", selected: false,   Album: "3",            icon: "0064.jpg" },
                {  No: 64, FV: "0065", selected: false,   Album: "4",            icon: "0065.jpg" },  
                {  No: 65, FV: "0066", selected: false,   Album: "5",            icon: "0066.jpg" },
                {  No: 66, FV: "0067", selected: false,   Album: "6",            icon: "0067.jpg" }, 
                {  No: 67, FV: "0068", selected: false,   Album: "7",            icon: "0068.jpg" }, 
                {  No: 68, FV: "0069", selected: false,   Album: "6",            icon: "0069.jpg" }, 
                {  No: 69, FV: "0070", selected: false,   Album: "7",            icon: "0070.jpg" }, 
                {  No: 70, FV: "0071", selected: false,   Album: "7",            icon: "0071.jpg" },
                {  No: 71, FV: "0072", selected: false,   Album: "1",            icon: "0032.jpg" },
                {  No: 72, FV: "0073", selected: false,   Album: "2",            icon: "0073.jpg" }, 
                {  No: 73, FV: "0074", selected: false,   Album: "3",            icon: "0074.jpg" },
                {  No: 74, FV: "0075", selected: false,   Album: "4",            icon: "0035.jpg" },  
                {  No: 75, FV: "0076", selected: false,   Album: "5",            icon: "0076.jpg" },
                {  No: 76, FV: "0077", selected: false,   Album: "6",            icon: "0077.jpg" }, 
                {  No: 77, FV: "0078", selected: false,   Album: "7",            icon: "0078.jpg" }, 
                {  No: 78, FV: "0079", selected: false,   Album: "6",            icon: "0079.jpg" }, 
                {  No: 79, FV: "0080", selected: false,   Album: "7",            icon: "0080.jpg" }, 
                {  No: 80, FV: "0081", selected: false,   Album: "7",            icon: "0081.jpg" },
                {  No: 81, FV: "0082", selected: false,   Album: "1",            icon: "0082.jpg" },
                {  No: 82, FV: "0083", selected: false,   Album: "2",            icon: "0083.jpg" }, 
                {  No: 83, FV: "0084", selected: false,   Album: "3",            icon: "0084.jpg" },
                {  No: 84, FV: "0085", selected: false,   Album: "4",            icon: "0085.jpg" },  
                {  No: 85, FV: "0086", selected: false,   Album: "5",            icon: "0086.jpg" },
                {  No: 86, FV: "0087", selected: false,   Album: "6",            icon: "0087.jpg" }, 
                {  No: 87, FV: "0088", selected: false,   Album: "7",            icon: "0088.jpg" }, 
                {  No: 88, FV: "0089", selected: false,   Album: "6",            icon: "0089.jpg" }, 
                {  No: 89, FV: "0090", selected: false,   Album: "7",            icon: "0090.jpg" }, 
                {  No: 90, FV: "0091", selected: false,   Album: "7",            icon: "0051.jpg" },
                {  No: 91, FV: "0092", selected: false,   Album: "1",            icon: "0092.jpg" },
                {  No: 92, FV: "0093", selected: false,   Album: "2",            icon: "0053.jpg" }, 
                {  No: 93, FV: "0094", selected: false,   Album: "3",            icon: "0094.jpg" },
                {  No: 94, FV: "0095", selected: false,   Album: "4",            icon: "0095.jpg" },  
                {  No: 95, FV: "0096", selected: false,   Album: "5",            icon: "0096.jpg" },
                {  No: 96, FV: "0097", selected: false,   Album: "6",            icon: "0097.jpg" }, 
                {  No: 97, FV: "0098", selected: false,   Album: "7",            icon: "0098.jpg" }, 
                {  No: 98, FV: "0099", selected: false,   Album: "6",            icon: "0099.jpg" }, 
                {  No: 99, FV: "0100", selected: false,   Album: "7",            icon: "0100.jpg" }, 
                {  No: 100, FV: "0101", selected: false,   Album: "7",            icon: "0101.jpg" }, 
                {  No: 101, FV: "0102", selected: false,   Album: "7",            icon: "0102.jpg" },  
            ) 
            return CD;
        }
  
        getAudioLib(){
            var AudioBook = new Array (
                {  No: 0, FV: "0001", selected: false,   Album: "30 dunkle Maerchen",                           icon: "0001.jpg" },
                {  No: 1, FV: "0002", selected: false,   Album: "Ein Fall für Abel",                            icon: "0002.jpg" }, 
                {  No: 2, FV: "0003", selected: false,   Album: "Farang",                                       icon: "0003.jpg" },
                {  No: 3, FV: "0004", selected: false,   Album: "Gute Nacht Geschichten",                       icon: "0004.jpg" },  
                {  No: 4, FV: "0005", selected: false,   Album: "Seide u Schwert",                              icon: "0005.jpg" },
                {  No: 5, FV: "0006", selected: false,   Album: "Seide",                                        icon: "0006.jpg" }, 
                {  No: 6, FV: "0007", selected: false,   Album: "Falsche Faehrte",                              icon: "0007.jpg" },
                {  No: 7, FV: "0008", selected: false,   Album: "Das Herz aus Eis",                             icon: "0008.jpg"},
                {  No: 8, FV: "0009", selected: false,   Album: "Dreifach",                                     icon: "0009.jpg" }, 
                {  No: 9, FV: "0010", selected: false,   Album: "Nijura - Das Erbe der Elfenkrone",             icon: "0010.jpg" },
                {  No: 10, FV: "0011", selected: false,   Album: "Nocturna - Die Nacht der gestohlenen Schatten",            icon: "0011.jpg" },  
                {  No: 11, FV: "0012", selected: false,   Album: "Das glückliche Dorf",                         icon: "0012.jpg" },
                {  No: 12, FV: "0013", selected: false,   Album: "Der Alchimist",                               icon: "0013.jpg" }, 
                {  No: 13, FV: "0014", selected: false,   Album: "Die Kleptomanin",                             icon: "0014.jpg" },
                {  No: 14, FV: "0015", selected: false,   Album: "Reise um die Welt",                           icon: "0015.jpg" },
                {  No: 15, FV: "0016", selected: false,   Album: "Pater_Brown__Die_Fliegenden_Sterne",          icon: "0016.jpg" }, 
                {  No: 16, FV: "0017", selected: false,   Album: "3",            icon: "0017.jpg" },
                {  No: 17, FV: "0018", selected: false,   Album: "4",            icon: "0018.jpg" },  
                {  No: 18, FV: "0019", selected: false,   Album: "5",            icon: "0019.jpg" },
                {  No: 19, FV: "0020", selected: false,   Album: "6",            icon: "0020.jpg" }, 
                {  No: 20, FV: "0021", selected: false,   Album: "7",            icon: "0021.jpg" },
                {  No: 21, FV: "0022", selected: false,   Album: "1",            icon: "0022.jpg" },
                {  No: 22, FV: "0023", selected: false,   Album: "2",            icon: "0023.jpg" }, 
                {  No: 23, FV: "0024", selected: false,   Album: "3",            icon: "0024.jpg" },
                {  No: 24, FV: "0025", selected: false,   Album: "4",            icon: "0025.jpg" },  

            ) 
            return AudioBook;
        }

        getAudiobookLib(){
            var audioJSON = '{"media":[{"no":"0","id":"leer","mediatype":"Audio","playlistname":"leer","album":"leer","icon":"leer","totaltrack":"0","lasttrack":"0","lastpos":"0:00:00"},{"no":"1","id":"4b24ad27d363748d512b","mediatype":"Audio","playlistname":"0001","album":"0001_GG - 30 dunkle M\u00e4rchen","icon":"http:\/\/192.168.178.9:32469\/proxy\/ab66cc9143e60df55755\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"2","id":"6f6fcb1020151f389fa9","mediatype":"Audio","playlistname":"0002","album":"0002_Abel - Ein Fall f\u00fcr Abel","icon":"http:\/\/192.168.178.9:32469\/proxy\/78555ef7c4410d9d1279\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"3","id":"9f2a98d0240d6e8114c8","mediatype":"Audio","playlistname":"0003","album":"0003_Blettenberg - Farang","icon":"http:\/\/192.168.178.9:32469\/proxy\/19b772546208eb04317e\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"4","id":"da4a558cab46bf9d1eab","mediatype":"Audio","playlistname":"0004","album":"0004_Ephraim Kishon - Gute Nacht Geschichten","icon":"http:\/\/192.168.178.9:32469\/proxy\/c79c24c7a3983487a890\/albumart.jpg","totaltrack":"23","lasttrack":"0","lastpos":"0:00:00"},{"no":"5","id":"0fd56e69f753595fce18","mediatype":"Audio","playlistname":"0005","album":"0005_Kai Meyer - Seide u Schwert","icon":"http:\/\/192.168.178.9:32469\/proxy\/6a4dc3ea3220e8e47dc0\/albumart.jpg","totaltrack":"14","lasttrack":"0","lastpos":"0:00:00"},{"no":"6","id":"10c7815cba85d77de538","mediatype":"Audio","playlistname":"0006","album":"0006_Alessandro_Baricco - Seide","icon":"http:\/\/192.168.178.9:32469\/proxy\/35ddb6e2970642b9e870\/albumart.jpg","totaltrack":"7","lasttrack":"0","lastpos":"0:00:00"},{"no":"7","id":"a0f2a129cea910674470","mediatype":"Audio","playlistname":"0007","album":"0007_Henning Mankell - Falsche Faehrte","icon":"http:\/\/192.168.178.9:32469\/proxy\/54c78a3da2e78be42227\/albumart.jpg","totaltrack":"48","lasttrack":"0","lastpos":"0:00:00"},{"no":"8","id":"63452acd5317d86e444e","mediatype":"Audio","playlistname":"0008","album":"0008_Konsalik - Das Herz aus Eis","icon":"http:\/\/192.168.178.9:32469\/proxy\/57229dc8851680abafd9\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"9","id":"1f8a3422c717c0c3d8e1","mediatype":"Audio","playlistname":"0009","album":"0009_Ken_Follett - Dreifach","icon":"http:\/\/192.168.178.9:32469\/proxy\/b45d425c0979b21ea798\/albumart.jpg","totaltrack":"69","lasttrack":"0","lastpos":"0:00:00"},{"no":"10","id":"7abcf891603906f48146","mediatype":"Audio","playlistname":"0010","album":"0010_Jenny-Mai Nuyen - Nijura - Das Erbe der Elfenkrone","icon":"http:\/\/192.168.178.9:32469\/proxy\/0b62e3c684f651bb2e28\/albumart.jpg","totaltrack":"51","lasttrack":"0","lastpos":"0:00:00"},{"no":"11","id":"2df455a63b658625dd9c","mediatype":"Audio","playlistname":"0011","album":"0011_Jenny-Mai Nuyen - Nocturna - Die Nacht der gestohlenen Schatten","icon":"http:\/\/192.168.178.9:32469\/proxy\/b286bbea5a8420ba0b76\/albumart.jpg","totaltrack":"55","lasttrack":"0","lastpos":"0:00:00"},{"no":"12","id":"449fbc3bef8e9ad3dd99","mediatype":"Audio","playlistname":"0012","album":"0012_B\u00fcchner - Das gl\u00fcckliche Dorf","icon":"http:\/\/192.168.178.9:32469\/proxy\/6084882ccfb9bee7897b\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"13","id":"14e67914b3c540c15626","mediatype":"Audio","playlistname":"0013","album":"0013_Paulo Coelho - Der Alchimist","icon":"http:\/\/192.168.178.9:32469\/proxy\/147027e029bdc1b27d8f\/albumart.jpg","totaltrack":"2","lasttrack":"0","lastpos":"0:00:00"},{"no":"14","id":"5f620849537616fb29b6","mediatype":"Audio","playlistname":"0014","album":"0014_Agatha Christie - Die Kleptomanin","icon":{},"totaltrack":"0","lasttrack":"0","lastpos":"0:00:00"},{"no":"15","id":"50711df8d6e5ee95b72b","mediatype":"Audio","playlistname":"0015","album":"0015_Charles Darwin - Reise um die Welt","icon":"http:\/\/192.168.178.9:32469\/proxy\/f654d4067378cc43758b\/albumart.jpg","totaltrack":"5","lasttrack":"0","lastpos":"0:00:00"},{"no":"16","id":"6db61501b2b831666264","mediatype":"Audio","playlistname":"0016","album":"0016_Chesterton_Gilbert_Keith__Pater_Brown__Die_Fliegenden_Sterne","icon":"http:\/\/192.168.178.9:32469\/proxy\/96b683309027f2150329\/albumart.jpg","totaltrack":"12","lasttrack":"0","lastpos":"0:00:00"},{"no":"17","id":"aae9cfc295e5040505fe","mediatype":"Audio","playlistname":"0017","album":"0017_Andreas Franz- Das Syndikat der Spinne","icon":"http:\/\/192.168.178.9:32469\/proxy\/a6f4aa5ebcffe6d9a9d8\/albumart.jpg","totaltrack":"217","lasttrack":"0","lastpos":"0:00:00"},{"no":"18","id":"a3349cd60c0b41a81356","mediatype":"Audio","playlistname":"0018","album":"0018_Das Auge des Leoparden","icon":"http:\/\/192.168.178.9:32469\/proxy\/0bc186eafaefd397c25c\/albumart.jpg","totaltrack":"8","lasttrack":"0","lastpos":"0:00:00"},{"no":"19","id":"8947d544457c5b52e3c2","mediatype":"Audio","playlistname":"0019","album":"0019_Rodrian - Zwei Rosen f\u00fcr ein Grab","icon":"http:\/\/192.168.178.9:32469\/proxy\/9383f055f0ce72bdae8a\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"20","id":"fa693c769b6cc3ffb60d","mediatype":"Audio","playlistname":"0020","album":"0020_Pater Brown - Die fliegende Sterne","icon":"http:\/\/192.168.178.9:32469\/proxy\/d1f9217b68187b600593\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"21","id":"69c4557ae6d901a75ad5","mediatype":"Audio","playlistname":"0021","album":"0021_Martin - Ein Rabe auf der Schulter","icon":"http:\/\/192.168.178.9:32469\/proxy\/bc9b394f81190320744b\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"22","id":"c09760acc55691b39844","mediatype":"Audio","playlistname":"0022","album":"0022_Das Geheimnis der wei\u00dfen M\u00f6nche - R.M.Schr\u00f6der","icon":"http:\/\/192.168.178.9:32469\/proxy\/7d679eb5eec40f77f37c\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"23","id":"488d36f62402b5ebfedf","mediatype":"Audio","playlistname":"0023","album":"0023_Das System - Karl Olsberg","icon":"http:\/\/192.168.178.9:32469\/proxy\/4c7facd5dc0dd670c71a\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"24","id":"d03f5d9ff7b24613bbce","mediatype":"Audio","playlistname":"0024","album":"0024_Der Vampir","icon":"http:\/\/192.168.178.9:32469\/proxy\/2d153af6ae274227ef3d\/albumart.jpg","totaltrack":"19","lasttrack":"0","lastpos":"0:00:00"},{"no":"25","id":"6766eb1aca8c0a7f923b","mediatype":"Audio","playlistname":"0025","album":"0025_Diana Gabaldon - Echo der Hoffnung","icon":"http:\/\/192.168.178.9:32469\/proxy\/c1bdd5a6b7dacd0b2687\/albumart.jpg","totaltrack":"55","lasttrack":"0","lastpos":"0:00:00"},{"no":"26","id":"bb5435093efc861a3858","mediatype":"Audio","playlistname":"0026","album":"0026_Die Tore der Welt bearbeitet","icon":"http:\/\/192.168.178.9:32469\/proxy\/d0620a88f073b0c0091c\/albumart.jpg","totaltrack":"10","lasttrack":"0","lastpos":"0:00:00"},{"no":"27","id":"4017faf37545aa41965b","mediatype":"Audio","playlistname":"0027","album":"0027_Edgar Allan Poe - 14 - Die l\u00e4ngliche Kiste","icon":"http:\/\/192.168.178.9:32469\/proxy\/9615a0bbcdb4c28f0f84\/albumart.jpg","totaltrack":"15","lasttrack":"0","lastpos":"0:00:00"},{"no":"28","id":"b383a9bf89dd955822fb","mediatype":"Audio","playlistname":"0028","album":"0028_Graf - Der Mann im Hotel","icon":"http:\/\/192.168.178.9:32469\/proxy\/5cac072249a70dbd1e93\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"29","id":"55acd7513467627d9069","mediatype":"Audio","playlistname":"0029","album":"0029_Seide","icon":"http:\/\/192.168.178.9:32469\/proxy\/4572cd39176f64f3087d\/albumart.jpg","totaltrack":"7","lasttrack":"0","lastpos":"0:00:00"},{"no":"30","id":"04e383deedc54bc19993","mediatype":"Audio","playlistname":"0030","album":"0030_Sherlock Holmes - Das Tal der Furcht","icon":"http:\/\/192.168.178.9:32469\/proxy\/bda1c6112af519100b1a\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"31","id":"f5f99d3fe13981783422","mediatype":"Audio","playlistname":"0031","album":"0031_Wilsberg - Und die Toten l\u00e4sst man ruhen","icon":"http:\/\/192.168.178.9:32469\/proxy\/f8b618247167416fa00d\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"32","id":"0d919c9ccabd76f2498e","mediatype":"Audio","playlistname":"0032","album":"0032_Spaete Rache","icon":"http:\/\/192.168.178.9:32469\/proxy\/a3afcdd83e42bd0fa7af\/albumart.jpg","totaltrack":"14","lasttrack":"0","lastpos":"0:00:00"},{"no":"33","id":"f4550031cf4181b78f08","mediatype":"Audio","playlistname":"0033","album":"0033_Mit jedem Schlag der Stunde - David Baldacci","icon":"http:\/\/192.168.178.9:32469\/proxy\/f4581e9f1457c91ff6bf\/albumart.jpg","totaltrack":"1","lasttrack":"0","lastpos":"0:00:00"},{"no":"34","id":"b35d0f16bd233257a0bc","mediatype":"Audio","playlistname":"0034","album":"0034_Patricia_Shaw - Heisse Erde","icon":"http:\/\/192.168.178.9:32469\/proxy\/cc8d52d4fa49b1188c2d\/albumart.jpg","totaltrack":"76","lasttrack":"0","lastpos":"0:00:00"},{"no":"35","id":"b80c2392fd0b49a15c68","mediatype":"Audio","playlistname":"0035","album":"0035 - Ken Follett - Die Kinder von Eden","icon":"http:\/\/192.168.178.9:32469\/proxy\/bfd7c2912ee66d7aeef5\/albumart.jpg","totaltrack":"6","lasttrack":"0","lastpos":"0:00:00"},{"no":"36","id":"722424c69c1675d36478","mediatype":"Audio","playlistname":"0036","album":"0036 - Stephen King - Das_Maedchen","icon":"http:\/\/192.168.178.9:32469\/proxy\/6ddcea7b3dbba4e581b8\/albumart.jpg","totaltrack":"78","lasttrack":"0","lastpos":"0:00:00"},{"no":"37","id":"qq","mediatype":"audiobook","playlistname":"0037","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"38","id":"qq","mediatype":"audiobook","playlistname":"0038","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"39","id":"qq","mediatype":"audiobook","playlistname":"0039","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"40","id":"qq","mediatype":"audiobook","playlistname":"0040","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"41","id":"qq","mediatype":"audiobook","playlistname":"0041","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"42","id":"qq","mediatype":"audiobook","playlistname":"0042","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"43","id":"qq","mediatype":"audiobook","playlistname":"0043","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"44","id":"qq","mediatype":"audiobook","playlistname":"0044","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"45","id":"qq","mediatype":"audiobook","playlistname":"0045","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"46","id":"qq","mediatype":"audiobook","playlistname":"0046","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"47","id":"qq","mediatype":"audiobook","playlistname":"0047","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"48","id":"qq","mediatype":"audiobook","playlistname":"0048","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"49","id":"qq","mediatype":"audiobook","playlistname":"0049","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"50","id":"qq","mediatype":"audiobook","playlistname":"0050","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"51","id":"qq","mediatype":"audiobook","playlistname":"0051","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"52","id":"qq","mediatype":"audiobook","playlistname":"0052","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"53","id":"qq","mediatype":"audiobook","playlistname":"0053","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"54","id":"qq","mediatype":"audiobook","playlistname":"0054","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"55","id":"qq","mediatype":"audiobook","playlistname":"0055","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"56","id":"qq","mediatype":"audiobook","playlistname":"0056","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"57","id":"qq","mediatype":"audiobook","playlistname":"0057","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"58","id":"qq","mediatype":"audiobook","playlistname":"0058","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"59","id":"qq","mediatype":"audiobook","playlistname":"0059","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"60","id":"qq","mediatype":"audiobook","playlistname":"0060","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"61","id":"qq","mediatype":"audiobook","playlistname":"0061","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"62","id":"qq","mediatype":"audiobook","playlistname":"0062","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"63","id":"qq","mediatype":"audiobook","playlistname":"0063","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"64","id":"qq","mediatype":"audiobook","playlistname":"0064","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"65","id":"qq","mediatype":"audiobook","playlistname":"0065","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"66","id":"qq","mediatype":"audiobook","playlistname":"0066","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"67","id":"qq","mediatype":"audiobook","playlistname":"0067","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"68","id":"qq","mediatype":"audiobook","playlistname":"0068","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"69","id":"qq","mediatype":"audiobook","playlistname":"0069","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"70","id":"qq","mediatype":"audiobook","playlistname":"0070","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"71","id":"qq","mediatype":"audiobook","playlistname":"0071","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"72","id":"qq","mediatype":"audiobook","playlistname":"0072","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"73","id":"qq","mediatype":"audiobook","playlistname":"0073","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"74","id":"qq","mediatype":"audiobook","playlistname":"0074","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"75","id":"qq","mediatype":"audiobook","playlistname":"0075","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"76","id":"qq","mediatype":"audiobook","playlistname":"0076","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"77","id":"qq","mediatype":"audiobook","playlistname":"0077","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"78","id":"qq","mediatype":"audiobook","playlistname":"0078","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"79","id":"qq","mediatype":"audiobook","playlistname":"0079","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"80","id":"qq","mediatype":"audiobook","playlistname":"0080","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"81","id":"qq","mediatype":"audiobook","playlistname":"0081","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"82","id":"qq","mediatype":"audiobook","playlistname":"0082","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"83","id":"qq","mediatype":"audiobook","playlistname":"0083","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"84","id":"qq","mediatype":"audiobook","playlistname":"0084","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"85","id":"qq","mediatype":"audiobook","playlistname":"0085","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"86","id":"qq","mediatype":"audiobook","playlistname":"0086","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"87","id":"qq","mediatype":"audiobook","playlistname":"0087","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"88","id":"qq","mediatype":"audiobook","playlistname":"0088","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"89","id":"qq","mediatype":"audiobook","playlistname":"0089","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"90","id":"qq","mediatype":"audiobook","playlistname":"0090","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"91","id":"qq","mediatype":"audiobook","playlistname":"0091","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"92","id":"qq","mediatype":"audiobook","playlistname":"0092","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"93","id":"qq","mediatype":"audiobook","playlistname":"0093","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"94","id":"qq","mediatype":"audiobook","playlistname":"0094","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"95","id":"qq","mediatype":"audiobook","playlistname":"0095","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"96","id":"qq","mediatype":"audiobook","playlistname":"0096","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"97","id":"qq","mediatype":"audiobook","playlistname":"0097","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"98","id":"qq","mediatype":"audiobook","playlistname":"0098","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"99","id":"qq","mediatype":"audiobook","playlistname":"0099","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"},{"no":"100","id":"qq","mediatype":"audiobook","playlistname":"0100","album":"leer","icon":"leer","totaltrack":"leer","lasttrack":"0","lastpos":"0:00:00"}]}';

            return audioJSON;
        }
        
    }    


