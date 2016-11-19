var HID = require('../');




var ReSpeakerMicArrayHID={
    
    reportID = 0x00,
    REG_NUM = 0X46,
    device = new HID.HID(0x2886,0x0007),

    set_led_mode:function(mode,data1,data2,data3)
    {
        device.write([
        reportID
        ,0x00,0x00,0x04,0x00    //address and length
        ,mode,data1,data2,data3  //data0~3
        ]);
    },

    set_led_all_off:function()
    {
        set_led_mode(0,0,0,0);
    },

    set_led_all_color:function(r,g,b)
    {
        set_led_mode(1,b,g,r);
    },

    set_listening:function()
    {
        set_led_mode(2,0,0,0);
    },

    set_waiting:function()
    {
        set_led_mode(3,0,0,0);
    },

    set_speaking_strength:function(strength)
    {
        set_led_mode(4,(strength),0,0);
    },

    set_volome:function(volume)
    {
        set_led_mode(5,0,0,volume);
    },

    set_led_data:function()
    {
        set_led_mode(6,0,0,0);
    },

    set_voice_location:function()
    {
        set_led_mode(7,0,0,0);
    },

    set_vad_timeout:function()
    {
        set_led_mode(7,0,0,0);
    },


    get_reg_value:function(reg,length)
    {
        
        device.write([
        reportID
        ,reg,0x80,length,0x00    //address and length
        ,0,0
        ]);
        
    },

    set_reg_value:function(reg,length,arr=new Array())
    {
        device.write([
        reportID
        ,reg,0x00,length,0x00    //address and length
        ,arr
        ]);
    },

    get_all_data:function()
    {
        for(var i = 0; i < REG_NUM; i++)
        {
            
        }
    },

}


module.exports=ReSpeakerMicArrayHID;