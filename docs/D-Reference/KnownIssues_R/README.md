# Known Issues

## Issue #1: Compact/Industrial tracker shut down with Downlink
**Affected Trackers: Compact Tracker, Industrial Tracker V2**<br/>
**Affected Firmware versions: MCU FW 2.3.x - 2.4.1**<br/>
There was a known issue in the firmware config files where bit 15 in [config_flags](/AbeewayRefGuide/Parameters-default-configuration/firmware-parameters.md#miscellaneous-parameters) was set to 0. This resulted in the Compact/Industrial tracker being switched OFF when the downlink was sent to change the [mode](/AbeewayRefGuide/Parameters-default-configuration/firmware-parameters.html#parameters-for-operational-modes) of tracker to OFF. If the tracker is switched off, then the casing must be opened to press the button on the PCB to turn on the tracker.
The updated [config files](/D-Reference/DocLibrary_R/AbeewayTrackers_R.md#firmware-update) have been modified to reflect the updated value of bit15=1 in *config_flags* for Compact/Industrial tracker. However, if you are running the above MCU Firmware versions with older config files, please enable bit 15 in *config_flags* to true or avoid sending downlink to set the mode = OFF. The recommended low power mode for Compact tracker/Industrial tracker is to set mode = STANDBY.
