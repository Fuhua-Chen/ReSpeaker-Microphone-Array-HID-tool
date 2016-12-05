var HID = require('./node-hid');
var args = process.argv.splice(2);
var device = new HID.HID(0x2886,0x0007);
var addr=0;
var data = new Array();
var length=0;
var reportID = 0x00;
var REG_NUM = 0X46;

var ReSpeakerMicArrayHID={
    
    set_led_mode:function(mode,data1,data2,data3)
    {
        device.write([
        reportID
        ,0x00,0x00,0x04,0x00    //address and length
        ,mode,data1,data2,data3  //data0~3
        ]);
    },

    get_reg_value:function(reg,length)
    {
		var tmp = [
        reportID
        ,reg,0x80,length,0 
        ,0,0
        ]
        device.write(tmp);
        tmp = device.readSync();
        console.log(tmp[0].toString(16),",",tmp[1].toString(16),",",tmp[2].toString(16),",",tmp[3].toString(16),",",tmp[4].toString(16),",",tmp[5].toString(16),",",tmp[6].toString(16),",",tmp[7].toString(16));
    },

    set_reg_value:function(reg,length,arr)
    {
		var tmp = [
        reportID
        ,reg,0,length,0
		,arr[0],arr[1],arr[2],arr[3]
        ];
        device.write(tmp);
    },

    get_all_data:function()
    {
        for(var i = 0; i < REG_NUM; i++)
        {
            this.get_reg_value(i,4);
        }
    },

    set_led_all_off:function()
    {
        this.set_led_mode(0,0,0,0);
    },

    set_led_all_color:function(r,g,b)
    {
        this.set_led_mode(1,b,g,r);
    },

    set_listening:function()
    {
        this.set_led_mode(2,0,0,0);
    },

    set_waiting:function()
    {
        this.set_led_mode(3,0,0,0);
    },

    set_speaking_strength:function(strength)
    {
        this.set_led_mode(4,(strength),0,0);
    },

    set_volome:function(volume)
    {
        this.set_led_mode(5,0,0,volume);
    },

    set_led_data:function()
    {
        this.set_led_mode(6,0,0,0);
    },

    set_voice_location:function()
    {
        this.set_led_mode(7,0,0,0);
    },

}

//module.exports.ReSpeakerMicArrayHID=ReSpeakerMicArrayHID

/*
ReSpeakerMicArrayHID.set_led_all_color(2,0xef,0xfd);

*/

/*
if(!args || args.length ==0){  
    console.log("params error");  
} 
else{
	var command = args.toString();
    if(command==="getall")
    {
        console.log(args)
        ReSpeakerMicArrayHID.get_all_data();
    }
    else
    {
        addr = parseInt(args[0]);
        length = parseInt(args[1]);
        var value = parseInt(args[2]);
        data = [(value & 0xff), ((value>>8) & 0xff), ((value>>16) & 0xff), ((value>>24) & 0xff)];
        ReSpeakerMicArrayHID.set_reg_value(addr,length,data);
        ReSpeakerMicArrayHID.get_reg_value(addr,length);
    }
}
*/

if(!args || args.length ==0){  
    console.log("params error");  
} 
else{
	var command = args[0].toString();
    if(command === "getall")
    {
        console.log(args)
        ReSpeakerMicArrayHID.get_all_data();
    }
	else if(command === "get")
	{
        addr = parseInt(args[1]);
        length = parseInt(args[2]);
        ReSpeakerMicArrayHID.get_reg_value(addr,length);
	}
    else if(command === "set")
    {
        addr = parseInt(args[1]);
        length = parseInt(args[2]);
		if(length > 4 || length <= 0 || addr < 0 || addr >= REG_NUM)
		{
          console.log("params error");  
		  return;
		}
        var value = parseInt(args[3]);
        data = [(value & 0xff), ((value>>8) & 0xff), ((value>>16) & 0xff), ((value>>24) & 0xff)];
        ReSpeakerMicArrayHID.set_reg_value(addr,length,data);
        ReSpeakerMicArrayHID.get_reg_value(addr,length);
    }
}