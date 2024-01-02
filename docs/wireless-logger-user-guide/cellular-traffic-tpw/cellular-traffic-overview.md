---
lang: en-us
sidebar_label: Cellular traffic overview
sidebar_position: 0
---

# Cellular traffic overview

This topic describes cellular summary information displayed in the Last packets list. For more information, see
[Viewing the traffic](../viewing/view-traffic) and [Cellular traffic
details](cellular-traffic-details).

## Cellular packets

Cellular packets you can see in Wireless Logger apply to cellular
message mode.

This cellular mode consists in sending a small volume of data in uplink
and downlink packets to one or more application servers. It works
similarly to LoRaWAN®. For more information, see [Device Manager user guide](../../../../user-guide-tpw/device-manager/index).

| Symbol                        | Name         | Description          |
|-------------------------------|--------------|----------------------|
| ![](./../_images/uplink.png)   | **Uplink**   | Transmission success |
| ![](./../_images/downlink.png) | **Downlink** | Transmission success |

## Cellular report

The cellular report you can see in Wireless Logger applies to cellular
direct IP mode.

This cellular mode consists in sending large volumes of data in uplink
and downlink bytes to an ASR address. For more information, see [Device Manager user guide](../../../../user-guide-tpw/device-manager/index).

| Symbol                                              | Name                 | Description                                                                                                                                                                                        |
|-----------------------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](./_images/microflowreport.png) | **Microflow report** | Applies to cellular traffic in direct IP mode. It describes statistics (giving number and duration of uplink and downlink bytes) produced when the uplink or downlink pass through the MTC-LTE-GW. |

## Cellular metadata columns

For more information about all cellular metadata available in Wireless
Logger, see [Cellular traffic details](cellular-traffic-details).

| Metadata        | Description                                                                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Sensor IPV4** | IP address assigned to a cellular device on LTE network                                                                                                 |
| **IMEI**        | International Mobile Equipment Identity                                                                                                                 |
| **IMSI**        | International Mobile Subscriber Identity                                                                                                                |
| **MSISDN**      | Mobile Station International Subscriber Directory Number is a number used to identify a mobile phone number internationally                             |
| **Protocol**    | Protocol type applied to a given data transmission                                                                                                      |
| **MTC**         | Machine Type Communication, that is the identification number of the EPC Connector; the latter's equivalent in LoRaWAN® is a Gateway (LRR base station) |
