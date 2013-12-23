#NoTrayIcon
Opt("TrayMenuMode", 11) ; Default tray menu items (Script Paused/Exit) will not be shown.

Local $openSite = TrayCreateItem("Ga naar Syslogic Traffic Light Sequencer™")
TrayCreateItem("")
Local $redOn = TrayCreateItem("Rode lamp aan", -1, -1, 0)
Local $orangeOn = TrayCreateItem("Oranje lamp aan", -1, -1, 0)
Local $greenOn = TrayCreateItem("Groene lamp aan", -1, -1, 0)
TrayCreateItem("")
Local $allOff = TrayCreateItem("Alle lampen uit", -1, -1, 0)
TrayCreateItem("")
Local $exit = TrayCreateItem("Programma Afsluiten", -1, -1, 0)

TraySetState()
TraySetToolTip ("Syslogic Traffic Light Sequencer™")

While 1
    Local $msg = TrayGetMsg()
    Select
        Case $msg = 0
            ContinueLoop
		 Case $msg = $redOn
            inetGet(IniRead("trafficlight.ini", "endpoints", "red", "http://localhost"), 1);
        Case $msg = $orangeOn
            inetGet(IniRead("trafficlight.ini", "endpoints", "orange", "http://localhost"), 1);
        Case $msg = $greenOn
            inetGet(IniRead("trafficlight.ini", "endpoints", "green", "http://localhost"), 1);
        Case $msg = $allOff
            inetGet(IniRead("trafficlight.ini", "endpoints", "allOff", "http://localhost"), 1);			
        Case $msg = $opensite
            ShellExecute(IniRead("trafficlight.ini", "endpoints", "interface", "http://localhost"))
        Case $msg = $exit
            ExitLoop
    EndSelect
WEnd