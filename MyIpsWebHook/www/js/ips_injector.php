<?php

// V1.00	10.06.2015 - Erstes Release

// Diese Datei stellt die von IPS in PHP zur Verfügung gestellten Funktionen bereit. 
// Sie werden über Javascript Funktionen per Ajax aufgerufen. Siehe ips_functions.js
// Wer Ahnung hat was er tut, kann hier ganz einfach weitere benötigte Funktionen ergänzen. 
// Gleichzeitig muss aber auch die ips_injector.php Datei angepasst werden. 
// Wer nicht damit klar kommt, kann mich gerne unter der EMail Adresse kontaktieren.
//
//  © by Kevin Heidrich 2015
//	kevinheidrich@me.com
//  Web: www.kh-solutions.de

	if ($_POST["method"] == "SetValue")
		SetValue((int)$_POST["variableID"],$_POST["value"]);
	else if ($_POST["method"] == "SetValueBoolean")
		SetValueBoolean((int)$_POST["variableID"],$_POST["value"]);
	else if ($_POST["method"] == "SetValueFloat")
		SetValueFloat((int)$_POST["variableID"],$_POST["value"]);
	else if ($_POST["method"] == "SetValueInteger")
		SetValueInteger((int)$_POST["variableID"],$_POST["value"]);
	else if ($_POST["method"] == "SetValueString")
		SetValueString((int)$_POST["variableID"],$_POST["value"]);
	else if ($_POST["method"] == "IPS_Execute")
		IPS_Execute($_POST["programmpfad"],$_POST["parameter"],$_POST["dummy"],$_POST["warten"]);
	else if ($_POST["method"] == "IPS_RunScript")
		IPS_RunScript((int)$_POST["scriptID"]);
	else
		IPS_MessageLog("IPS JS Injector","Command unknown!");

?>