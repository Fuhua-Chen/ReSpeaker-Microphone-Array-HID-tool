using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Runtime.InteropServices;

namespace ReSpeaker_Microphone_Array_HID_Tool
{
    public partial class Form1 : Form
    {
        [DllImport("hid.dll")]
        private static extern void HidD_GetHidGuid(ref Guid HidGuid);
        [DllImport("setupapi.dll", SetLastError = true)]
        private static extern IntPtr SetupDiGetClassDevs(ref Guid ClassGuid, uint Enumerator, IntPtr HwndParent, USBHIDEnum.DIGCF Flags);
        [DllImport("setupapi.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern Boolean SetupDiEnumDeviceInterfaces(IntPtr deviceInfoSet, IntPtr deviceInfoData, ref Guid interfaceClassGuid, UInt32 memberIndex, ref SP_DEVICE_INTERFACE_DATA deviceInterfaceData);
        public Form1()
        {
            InitializeComponent();
        }

        private void SendButton_Click(object sender, EventArgs e)
        {

        }
    }
}
