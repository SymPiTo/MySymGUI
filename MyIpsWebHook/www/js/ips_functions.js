// V1.00	10.06.2015 - Erstes Release

// Diese Javascript Funktionen bilden die in PHP zur Verfügung stehenden Funktionen ab.
// Somit sind diese auch in einer HTMLBox verfügbar. Wer Ahnung hat was er tut, kann hier
// ganz einfach weitere benötigte Funktionen ergänzen. Gleichzeitig muss aber auch die
// ips_injector.php Datei angepasst werden. 
// Wer nicht damit klar kommt, kann mich gerne unter der EMail Adresse kontaktieren.
//
//  © by Kevin Heidrich 2015
//	kevinheidrich@me.com
//  Web: www.kh-solutions.de


function SetValue(variableID,value)
{
        var url = "http://192.168.178.28:3777/hook/myGUIhook/";
	jQuery.post( url, {"method" : "SetValue", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function SetValueBoolean(variableID,value)
{
	jQuery.post( url {"method" : "SetValueBoolean", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function SetValueFloat(variableID,value)
{
	jQuery.post( url {"method" : "SetValueFloat", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}


function SetValueString(variableID,value)
{
	jQuery.post(url  {"method" : "SetValueString", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function SetValueInteger(variableID,value)
{
	jQuery.post(url {"method" : "SetValueInteger", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function IPS_Execute(programmpfad,parameter,dummy,warten)
{
	jQuery.post( url {"method" : "IPS_Execute", "programmpfad" : programmpfad, "parameter" : parameter, "dummy" : dummy, "warten" : warten},function( data ) { console.log(data); });
}

function IPS_RunScript(scriptID)
{
	jQuery.post(url {"method" : "IPS_RunScript", "scriptID" : scriptID},function( data ) { console.log(data); });
}
