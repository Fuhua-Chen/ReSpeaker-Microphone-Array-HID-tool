ReSpeaker Microphone Array HID tool
===================================

### Require: 
+ Git or Github
+ node.js >= 4.2.x
+ Terminal, as powershell, git shell, github shell
+ Open a shell window, go to a folder you want to save the code.

### Run commands: 
+ `git clone https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool`
+ `cd ReSpeaker-Microphone-Array-HID-tool`
+ `.\install_win.bat` or `sh ./install_linux.sh`

### Try
+ Run `node michid.js set 0 4 0xffffff01`

	You will find that the ReSpeaker Microphone Array's LEDs light up as white.

### Commands
+ Commands should have same formation as below:(data should be sent with little endian mode)
	
		node michid.js [command][arg1][arg2][arg3]
		
+ **get** 
		
		node michid.js getall
		
	You can get all reg data from ReSpeaker Microphone Array.
	
		node michid.js get [reg address][leght of data:less than 4 bytes]
		
	You can get data from the reg address.
		
+ **set** 
		
		node michid.js get [reg address][leght of data:less than 4 bytes][data]
		
	You can set the reg.
			
### Communication protocol

This xlsx file show you how do the communication arrange: [HID PROTOCOL](respeaker micarray hid protocol-20161028.xlsx)
