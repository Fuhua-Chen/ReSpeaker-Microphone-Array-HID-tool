var HID = require('./node-hid');
var args = process.argv.splice(2);
//var device = new HID.HID(0x2886,0x0007);
//var device = new HID.HID(0x2419,0x0100);
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
        device.write([
        reportID
        ,reg,0x80,length,0x00    //address and length
        ,0,0
        ]);
        var tmp = device.readSync();
        console.log(tmp[0].toString(16),",",tmp[1].toString(16),",",tmp[2].toString(16),",",tmp[3].toString(16),",",tmp[4].toString(16),",",tmp[5].toString(16),",",tmp[6].toString(16),",",tmp[7].toString(16));
    },

    set_reg_value:function(reg,length,arr)
    {
        device.write([
        reportID
        ,reg,0x00,length,0x00    //address and length
        ]+arr);
    },

    get_all_data:function()
    {
        for(var i = 0; i < REG_NUM; i++)
        {
            this.get_reg_value(i,4);
            var tmp = device.readSync();
            console.log(tmp[0].toString(16),",",tmp[1].toString(16),",",tmp[2].toString(16),",",tmp[3].toString(16),",",tmp[4].toString(16),",",tmp[5].toString(16),",",tmp[6].toString(16),",",tmp[7].toString(16));
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


//module.exports.ReSpeakerMicArrayHID=ReSpeakerMicArrayHID;
if(!args || args.length ==0){  
    console.log("params error");  
} 
else{
    if(args.toString()==="getall")
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
        //console.log("addr:");console.log(addr);
        //console.log("length:");console.log(length);
        //console.log("value:");console.log(value);
        //console.log('devices:',HID.device());
        //device.on("data", function(data) {console.log('in data:', data);});
        //console.log("data");console.log(data[0]);console.log(data[1]);console.log(data[2]);console.log(data[3]);
        ReSpeakerMicArrayHID.set_reg_value(addr,length,data);
        ReSpeakerMicArrayHID.get_reg_value(addr,length);
    }
}