---
lang: en-us
sidebar_label: Device reset reports
sidebar_position: 6
---

# Device reset reports
![](./_images/resetreport.png) This packet type represents the
notification message sent by ThingPark core network (LRC) to application
servers to report a reset indication of ABP or OTA devices.

Two types of device reset reports are supported by Wireless Logger:

- **ABP device reset detection** (reset type = **ABP automatic reset**)

  If the uplink frame counter is reset and the flag **Allow ABP
  automatic reset** is activated in the device profile associated with
  this device.

- **An administrative reset** (reset type = **Administrative reset**) is
  applied for this device either:

  - When using the **Reset Security Context** button in Device Manager
    user interface,

  - When using the following Device Manager API:  
    `POST /subscriptions/{subscription}/devices/{device}/admins/reset`

The device reset report is displayed using the ↻ icon. It is only
available if you have accessed Wireless Logger using a subscriber
account, not a network partner account.

The following elements are displayed in the expandable panel for each
LoRaWAN® downlink packet. To access the expandable panel, click
![](./../_images/expandmessage.png) on the left side of the packet.

| Field | Description |
|-- | -- |
| **Status** | Transmission status of the report sent by the LRC to the Application Server identified by the AS ID. Two possibles values are: OK or Error. In case of error, a message is displayed in the **Transmission errors** column.<br/><br/>**Note:** This status is only relevant for "Basic HTTP" type of connections. Delivery errors related to TPX connections are currently not visible in Wireless Logger. |
|**Transmission errors** | **Idx**: Index of the destination that caused the error. Starting value at 0.<br/>**Url**: The destination URL that returned the error. An HTTP Application Server can be configured with several destination URLs. <br/><br/>**Status**: <br/>- **Timeout**: The report was not successfully acknowledged by the destination within the expected timeframe. <br/>- **Error**: The report was rejected by the destination. (HTTP error, network error, DNS error). <br/>- **Overload**: The report was not sent to the destination because the network server reached the OVERLOAD state and the destination's average round trip time is too bad.<br/>- **Blacklist**: The report was not sent to the destination because the network server reached the BLACKLIST state and the destination's average round trip time is bad.<br/>- **Unreachable**: The report was not sent to the destination because this destination was deemed unreachable due to irresponsive behavior over the last observation window.<br/><br/>**Note:** This information is only relevant for "Basic HTTP" type of connections. Delivery errors related to TPX connections are currently not visible in Wireless Logger. |

**Note** Wireless Logger does not display an explicit RESET message when
an OTA device completes a successful JOIN procedure. This notification
is implicitly provided by Wireless Logger through the
![](./_images/uplink-lorawan-packets-4.png) and
![](./_images/downlink-lorawan-unicast-packets-6.png)packets.

Device reset reports are not associated with any LoRaWAN® frame counter
since they are triggered by the ThingPark core network. These reset
reports are also sent to application servers over the tunnel interface.
For more details, see [LRC-AS Tunnel Interface Developer
Guide](https://oss-api.thingpark.com/tpw/7.1/Core-Network/lrc-as-tunnel-lorawan/).
