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
	$.post( "ips_injector.php", {"method" : "SetValue", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function SetValueBoolean(variableID,value)
{
	$.post( "ips_injector.php", {"method" : "SetValueBoolean", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function SetValueFloat(variableID,value)
{
	$.post( "ips_injector.php", {"method" : "SetValueFloat", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}


function SetValueString(variableID,value)
{
	$.post( "/ips_injector.php", {"method" : "SetValueString", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function SetValueInteger(variableID,value)
{
	$.post( "ips_injector.php", {"method" : "SetValueInteger", "variableID" : variableID, "value" : value},function( data ) { console.log(data); });
}

function IPS_Execute(programmpfad,parameter,dummy,warten)
{
	$.post( "ips_injector.php", {"method" : "IPS_Execute", "programmpfad" : programmpfad, "parameter" : parameter, "dummy" : dummy, "warten" : warten},function( data ) { console.log(data); });
}

function IPS_RunScript(scriptID)
{
	$.post( "ips_injector.php", {"method" : "IPS_RunScript", "scriptID" : scriptID},function( data ) { console.log(data); });
}
