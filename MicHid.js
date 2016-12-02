var micarray = require('./ReSpeakerMicArrayHID.js');
var addr=0;
var data=0;
var length=0;

var args = process.argv.splice(2);  
if(!args || args.length ==0){  
    console.log("params error");  
} 
else{
	addr = args[0];
	data = args[1];
  length = args[2];
  console.log('devices:', HID.devices());
  console.log('devices:', micarray.HID.devices());
  device.on("data", function(data) {console.log('in data:', data);});
  micarray.set_reg_value(addr,data,length);
  micarray.set_reg_value(addr,data);
}