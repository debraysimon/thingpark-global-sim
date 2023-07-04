---
lang: en-us
sidebar_label: LoRaWAN® export file
sidebar_position: 7
---

# LoRaWAN® export file

The following table gives the packets information available in the
LoRaWAN® export file. Most of the fields described are also accessible
via ThingPark Tunnel Interface. For more information, see [LRC-AS Tunnel
Interface Developer
Guide](https://oss-api.thingpark.com/tpw/7.1/Core-Network/lrc-as-tunnel-lorawan/).

From the export file, you can do several analysis such as:

- Percentage of lost packets

- Percentage LC traffic

- Percentage SF per LRR base station

For more information, see [Exporting](../export.md).

<table>
<thead>
<tr>
<th>Metadata</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Direction</strong></td>
<td><ul>
<li><p>0: uplink packet</p></li>
<li><p>1: downlink packet</p></li>
<li><p>2: location report</p></li>
<li><p>3: multicast summary report</p></li>
<li><p>4: microflow report (only for cellular technology)</p></li>
<li><p>5: device reset notification (ABP devices)</p></li>
</ul></td>
</tr>
<tr>
<td><strong>Timestamp</strong></td>
<td>UTC timestamp in friendly format (YYYY-MM-DD hh:mm:ss.s). Example:
2021-01-30 05:06:07.0</td>
</tr>
<tr>
<td><strong>Timestamp(ISO)</strong></td>
<td>UTC timestamp in ISO 8601 format (YYYY-MM-DDThh:mm:ss.sZ). Example:
2021-01-30T05:06:07.0Z</td>
</tr>
<tr>
<td><strong>DevEUI</strong></td>
<td>Device EUI (8 bytes) is a global end-device ID in IEEE EUI64 address
space that uniquely identifies the end-device.
<p>If the network server acts as a forwarding network server (fNS)
and the message type is data, the DevEUI is only available if
LoRaWAN® Backend Interfaces version &gt;
1.0.</p></td>
</tr>
<tr>
<td><strong>DevAddr</strong></td>
<td>Device address (4 bytes) on the network .</td>
</tr>
<tr>
<td><strong>FPort</strong></td>
<td>Application port of the packet.</td>
</tr>
<tr>
<td><strong>FCnt</strong></td>
<td>Frame counter of the packet. Can be Counter Up or Counter Down
depending on the packet direction.</td>
</tr>
<tr>
<td><strong>LRR RSSI</strong></td>
<td>Received Signal Strength Indicator of the received packet on the
best LRR side. Relevant only for uplink packets.</td>
</tr>
<tr>
<td><strong>LRR SNR</strong></td>
<td>Signal-to-Noise ratio of the received packet on the best LRR side.
Relevant only for uplink packets.</td>
</tr>
<tr>
<td><strong>LRR ESP</strong></td>
<td>Estimated Signal Power of the received packet on the best LRR side.
Relevant only for uplink packets.</td>
</tr>
<tr>
<td><strong>SpFact</strong></td>
<td>Spreading Factor of the uplink/downlink packet.</td>
</tr>
<tr>
<td><strong>Sub Band</strong></td>
<td>Radio frequency sub band corresponding to the logical channel used
to transmit the uplink packet by the device.</td>
</tr>
<tr>
<td><strong>Channel</strong></td>
<td>Logical Channel used to transmit the uplink packet by the
device.</td>
</tr>
<tr>
<td><strong>LRC Id</strong></td>
<td>Identifier of the LRC network server.</td>
</tr>
<tr>
<td><strong>LRR Id</strong></td>
<td>Best LRR (LoRa base station) identifier.</td>
</tr>
<tr>
<td><strong>LRR Lat</strong></td>
<td>Latitude of the best-LRR.</td>
</tr>
<tr>
<td><strong>LRR Long</strong></td>
<td>Longitude of the best-LRR.</td>
</tr>
<tr>
<td><strong>LRR Count</strong></td>
<td>Number of LRRs receiving the uplink packet. The system performs a
250ms buffering upon receiving an uplink packet to check if the same
packet arrives through other LRRs, in which case the LRR Count is
incremented.</td>
</tr>
<tr>
<td><strong>Device Lat</strong></td>
<td>Device latitude.</td>
</tr>
<tr>
<td><strong>Device Long</strong></td>
<td>Device longitude.</td>
</tr>
<tr>
<td><strong>LoS Distance (m)</strong></td>
<td>Distance between the device and the best-LRR.</td>
</tr>
<tr>
<td><strong>Device Loc radius</strong></td>
<td>Defines a horizontal circle inside which the position of the device
is estimated.</td>
</tr>
<tr>
<td><strong>Device Loc Time</strong></td>
<td>Device location time, indicating the time when the device location
was estimated by the LocSolver engine.</td>
</tr>
<tr>
<td><strong>Device Alt</strong></td>
<td>Device estimated altitude based on LoRa® location.</td>
</tr>
<tr>
<td><strong>Device Alt radius</strong></td>
<td>Device altitude location defines a vertical circle inside of which
the altitude of the device is estimated.</td>
</tr>
<tr>
<td><strong>Device Acc</strong></td>
<td>Device location accuracy.</td>
</tr>
<tr>
<td><strong>LRR[1] Id</strong></td>
<td>ID of the uplink best-LRR (that is, LRR Id).</td>
</tr>
<tr>
<td><strong>LRR[1] RSSI</strong></td>
<td>RSSI at the uplink best-LRR (that is, LRR RSSI).</td>
</tr>
<tr>
<td><strong>LRR[1] SNR</strong></td>
<td>SNR at the uplink best-LRR (that is, LRR SNR).</td>
</tr>
<tr>
<td><strong>LRR[1] ESP</strong></td>
<td>Estimated Signal Power at the uplink best-LRR.</td>
</tr>
<tr>
<td><strong>LRR[1] CHAINS</strong></td>
<td>Antenna chain used to receive the uplink packet on the uplink
best-LRR.</td>
</tr>
<tr data-madcap-condition="MyNewSet.7-0">
<td><strong>LRR[1] ISM Band</strong></td>
<td>ISM band of the base station.</td>
</tr>
<tr data-madcap-condition="MyNewSet.7-0">
<td><strong>LRR[1] RF Region</strong></td>
<td>RF region of the base station.</td>
</tr>
<tr>
<td><strong>LRR[1] GWID</strong></td>
<td>Gateway ID reported by the fNS. Only applicable when the base
station does not belong to the serving network (roaming scenario).</td>
</tr>
<tr>
<td><strong>LRR[1] GWToken</strong></td>
<td>Gateway token reported by the fNS. Only applicable when the base
station does not belong to the serving network (roaming scenario).</td>
</tr>
<tr>
<td><strong>LRR[1] DLAllowed</strong></td>
<td>Downlink Allowed flag reported by the fNS. Only applicable when the
base station does not belong to the serving network (roaming scenario).
Reported for the first best base station ranked by SNR.</td>
</tr>
<tr>
<td><strong>LRR[1] ForeignOperatorNetID</strong></td>
<td>The NetID of the forwarding operator.<br />
If the network server acts as a serving network server (sNS), the
Foreign Operator NetID is only available if the base station does not
belong to the serving network.<br />
</td>
</tr>
<tr>
<td><strong>LRR[1] ForeignOperatorNSID</strong></td>
<td>Forwarding operator's Network Server ID reported by the base
station.
<ul>
<li><p>If the network server acts as a serving network server (sNS):
ForeignOperatorNSID is only available if the base station does not
belong to the serving network and the LoRaWAN® Backend Interfaces version
&gt; 1.0.</p></li>
<li><p>If the network server acts as a forwarding network server (fNS):
ForeignOperatorNSID is only available if the LoRaWAN® Backend Interfaces
version &gt; 1.0.</p></li>
</ul></td>
</tr>
<tr>
<td><strong>LRR[x] Id</strong></td>
<td>ID of the x<sup>th</sup> best-LRR that has received the same packet
(data present only if LRR Count ≥ 2). 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] RSSI</strong></td>
<td>Uplink RSSI at the x<sup>th</sup> best-LRR (data present only if LRR
Count ≥ 2). 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] SNR</strong></td>
<td>Uplink SNR at the x<sup>th</sup> best-LRR (data present only if LRR
Count ≥ 2). 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] ESP</strong></td>
<td>Uplink ESP at the x<sup>th</sup> best-LRR (data present only if LRR
Count ≥ 2). 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] CHAINS</strong></td>
<td>Antenna chain used to receive the uplink packet on the
x<sup>th</sup> best-LRR. 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] ISM Band</strong></td>
<td>ISM band of the base station.</td>
</tr>
<tr>
<td><strong>LRR[x] RF Region</strong></td>
<td>RF region of the base station.</td>
</tr>
<tr>
<td><strong>LRR[x] GWID</strong></td>
<td>Gateway ID reported by the fNS for the x<sup>th</sup> best-LRR. Only
applicable when the base station does not belong to the serving network
(roaming scenario). 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] GWToken</strong></td>
<td>Gateway token reported by the fNS for the x<sup>th</sup> best-LRR.
Only applicable when the base station does not belong to the serving
network (roaming scenario). 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] DLAllowed</strong></td>
<td>Downlink Allowed flag reported by the fNS for the x<sup>th</sup>
best-LRR. Only applicable when the base station does not belong to the
serving network (roaming scenario). 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] ForeignOperatorNetID</strong></td>
<td>The NetID of the forwarding operator.<br />
If the network server acts as a serving network server (sNS), the
Foreign Operator NetID is only available if the base station does not
belong to the serving network. 2 ≤ x ≤ 10.</td>
</tr>
<tr>
<td><strong>LRR[x] ForeignOperatorNSID</strong></td>
<td>Forwarding operator's network server identifier reported by the base
station.
<ul>
<li>If the network server acts as a serving network server (sNS):
ForeignOperatorNSID is only available if the base station does not
belong to the serving network and the LoRaWAN® Backend Interfaces version
&gt; 1.0.</li>
<li>If the network server acts as a forwarding network server (fNS):
ForeignOperatorNSID is only available if the LoRaWAN® Backend Interfaces
version &gt; 1.0.</li>
</ul></td>
</tr>
<tr>
<td><strong>MAC(hex)</strong></td>
<td>Hexadecimal ASCII dump of the LoRaWAN® MAC option or LoRaWAN® MAC
payload (port=0).</td>
</tr>
<tr>
<td><strong>MType</strong></td>
<td>LoRaWAN® MType of the packet.</td>
</tr>
<tr>
<td><strong>ADR</strong></td>
<td>Adaptive Data Rate, 1 if enabled, otherwise 0.</td>
</tr>
<tr>
<td><strong>ADRACkReq</strong></td>
<td>ADR Acknowledgement Request.</td>
</tr>
<tr>
<td><strong>Ack</strong></td>
<td>Acknowledgement.</td>
</tr>
<tr>
<td><strong>FPending(downlink)</strong></td>
<td>Frame pending in downlink, indicates if downlink packet is
fragmented.</td>
</tr>
<tr>
<td><strong>AirTime</strong></td>
<td>Duration of the packet in seconds.</td>
</tr>
<tr>
<td><strong>MIC</strong></td>
<td>Message integrity checksum calculated using Network Session
Key.</td>
</tr>
<tr>
<td><strong>Payload(hex)</strong></td>
<td>Application payload in hexadecimal format.</td>
</tr>
<tr>
<td><strong>FCntUp</strong></td>
<td>Frame counter up.</td>
</tr>
<tr>
<td><strong>FCntDn</strong></td>
<td>Frame counter down.</td>
</tr>
<tr>
<td><strong>DownlinkStatus</strong></td>
<td>Specifies if the downlink packet has been successfully transmitted
over the air.</td>
</tr>
<tr>
<td><strong>DownlinkFailedCauseOnRX1</strong></td>
<td>Downlink failure cause on RX1.</td>
</tr>
<tr>
<td><strong>DownlinkFailedCauseOnRX2</strong></td>
<td>Downlink failure cause on RX2.</td>
</tr>
<tr>
<td><strong>DownlinkFailedCauseOnPingSlot</strong></td>
<td>Downlink failure cause on ping slot.</td>
</tr>
<tr>
<td><strong>Late</strong></td>
<td>Indicates that this is a late reporting of an uplink packet from the
LRR. When it is set to 1, the uplink packet was queued on the LRR due to
temporary loss of the backhaul link with the LRC.</td>
</tr>
<tr>
<td><strong>SolvLAT</strong></td>
<td>Device location latitude using LoRa® TDoA/RSSI network
geolocation.</td>
</tr>
<tr>
<td><strong>SolvLON</strong></td>
<td>Device location longitude using LoRa® TDoA/RSSI network
geolocation.</td>
</tr>
<tr>
<td><strong>PayloadSize</strong></td>
<td>Payload size in bytes.</td>
</tr>
<tr>
<td><strong>BestGWID</strong></td>
<td>Gateway ID of the best base station when the best base station
belongs to a forwarding network (roaming scenario).</td>
</tr>
<tr>
<td><strong>BestGWToken</strong></td>
<td>Gateway token of the best base station when the best base station
belongs to a forwarding network (roaming scenario).</td>
</tr>
<tr>
<td><strong>ForeignOperatorNetID</strong></td>
<td>The NetID of the forwarding operator.<br />
If the network server acts as a serving network server (sNS), the
Foreign Operator NetID is only available if the best or selected base
station does not belong to the serving network.</td>
</tr>
<tr>
<td><strong>RoamingType</strong></td>
<td>0: Forwarding Passive Roaming (fNS). 1: Serving Passive Roaming
(sNS).</td>
</tr>
<tr>
<td><strong>RoamingResult</strong></td>
<td>The PRStartAns result code, as defined in the LoRaWAN® backend
interfaces specification, generated by the sNS.</td>
</tr>
<tr>
<td><strong>ISMBand</strong></td>
<td>ISM band in use by the best or selected base station (BestLRR or BestGWID).</td>
</tr>
<tr>
<td><strong>Modulation</strong></td>
<td>Type of modulation: 0 for "LoRa", 1 for “LoRa-E”.</td>
</tr>
<tr>
<td><strong>DataRate</strong></td>
<td>Data Rate when LoRa-E modulation is used.</td>
</tr>
<tr>
<td><strong>SubID</strong></td>
<td>Subscriber ID.</td>
</tr>
<tr>
<td><strong>Device North velocity</strong></td>
<td>Velocity (NORTH axis) expressed in m/s.</td>
</tr>
<tr>
<td><strong>Device East velocity</strong></td>
<td>Velocity (EAST axis) expressed in m/s.</td>
</tr>
<tr>
<td><strong>ASID</strong></td>
<td>List of application server routing profiles that received the uplink
packet.</td>
</tr>
<tr>
<td><strong>Multicast class</strong></td>
<td>Class of the multicast group: B or C. Only set when the downlink is
sent to a multicast group.</td>
</tr>
<tr>
<td><strong>Transmission status</strong></td>
<td>Multicast downlink transmission status: PARTIAL, SUCCESS or ABORTED.
Only applicable to multicast summary report.</td>
</tr>
<tr>
<td><strong>LRRs count</strong></td>
<td>Number of LRRs associated with the multicast group. Only applicable
to multicast summary report.</td>
</tr>
<tr>
<td><strong>LRRs successfully transmitted</strong></td>
<td>Number of LRRs having successfully transmitted the downlink packet
over the air. Only applicable to multicast summary report.</td>
</tr>
<tr>
<td><strong>LRRs failed transmitted</strong></td>
<td>Number of LRRs that failed in transmitting the downlink packet over
the air. Only applicable to multicast summary report.</td>
</tr>
<tr>
<td><strong>Delivery Failed Cause/Number of occurrences</strong></td>
<td>Distribution of LRR delivery failed causes. Only applicable to
multicast summary report.</td>
</tr>
<tr>
<td><strong>AF count down</strong></td>
<td>LoRaWAN® 1.1 AFCntDown.</td>
</tr>
<tr>
<td><strong>NF count down</strong></td>
<td>LoRaWAN® 1.1 NFCntDown.</td>
</tr>
<tr>
<td><strong>Conf AF count down</strong></td>
<td>LoRaWAN® 1.1 AFCntDown confirmed by the device (retrieved by the LRC
after MIC check procedure).</td>
</tr>
<tr>
<td><strong>Conf NF count down</strong></td>
<td>LoRaWAN® 1.1 NFCntDown confirmed by the device (retrieved by the LRC
after MIC check procedure).</td>
</tr>
<tr>
<td><strong>Conf F count up</strong></td>
<td>LoRaWAN® 1.1 FCntUp confirmed by the LRC (ACK sent by the LRC).</td>
</tr>
<tr>
<td><strong>Transmission slot</strong></td>
<td>Downlink transmission slot used to send the downlink packet:
<ul>
<li>Transmission slot = 1 means RX1</li>
<li>Transmission slot = 2 means RX2</li>
<li>Transmission slot = 3 means Pingslot (class B only).</li>
</ul>
<p><strong>Note</strong> TransmissionSlot = 0 means unknown.</p></td>
</tr>
<tr>
<td><strong>Repeated UL</strong></td>
<td>This flag determines if the downlink unicast packet is sent in
response to a repeated uplink packet.</td>
</tr>
<tr>
<td><strong>Frequency</strong></td>
<td>Physical frequency (in MHz) used to send the uplink/downlink
packet.</td>
</tr>
<tr>
<td><strong>Class</strong></td>
<td>Current LoRaWAN® class of the device: A/B/C.</td>
</tr>
<tr>
<td><strong>Ping-slot period</strong></td>
<td>Current pingslot periodicity reported by the class B device.</td>
</tr>
<tr>
<td><strong>Type of notification</strong></td>
<td>Reset notification, valid for the following cases:
<ul>
<li>ABP device reset</li>
<li>Administrative reset of ABP/OTA devices</li>
</ul></td>
</tr>
<tr>
<td><strong>Type of device reset</strong></td>
<td><ul>
<li>ABP automatic reset: triggered by the device by reverting to Frame
counter 0.</li>
<li>Administrative reset: triggered by the subscriber in Device
Manager application.</li>
</ul></td>
</tr>
<tr>
<td><strong>Device location method used</strong></td>
<td>Type of algorithm (TDoA or RSSI) used by the Location Solver engine
(LocSolver) to compute the position reported in each Location Report.
<ul>
<li>TIME: refers to TDoA method</li>
<li>RSSI: refers to RSSI/signal strength method.</li>
</ul></td>
</tr>
<tr>
<td><strong>ForeignOperatorNSID</strong></td>
<td>Forwarding operator's network server identifier reported by the best
or selected base station.
<ul>
<li>If the network server acts as a serving network server (sNS): the
Foreign Operator NSID is only available if the base station does not
belong to the serving network and the LoRaWAN® Backend Interfaces version
&gt; 1.0.</li>
<li>If the network server acts as a forwarding network server
(fNS): the Foreign Operator NSID is only available if the LoRaWAN
Backend Interfaces version &gt; 1.0.</li>
</ul></td>
</tr>
<tr>
<td><strong>RF Region</strong></td>
<td>RF region of the best or selected base station (BestLRR or
BestGWID).</td>
</tr>
<tr>
<td><strong>asDeliveryStatus</strong></td>
<td>Aggregated Application Server delivery status. Values are Ok or
Error. This information is only relevant for "Basic HTTP" type of
connections towards Application Servers.</td>
</tr>
<tr>
<td><strong>asRecipients[x] ID</strong></td>
<td>ID of the xth Application Server. The number of AS recipients is
limited to 5 per export file.</td>
</tr>
<tr>
<td><strong>asRecipients[x] status</strong></td>
<td>Transmission status of the report to the xth Application Server.
Values are Ok or Error. This information is only relevant for "Basic
HTTP" type of connections towards Application Servers.</td>
</tr>
<tr>
<td><strong>asRecipients[x] destinations</strong></td>
<td>Index, URLs and errorMessage of the xth Application Server when
status is Error. This information is only relevant for "Basic HTTP" type
of connections towards Application Servers.</td>
</tr>
<tr>
<td><strong>Decoded payload</strong></td>
<td>Decoded payload, by IoT Flow engine. <strong>This field is only
relevant when the decoder type is set to Automatic in Wireless Logger
application</strong>.</td>
</tr>
<tr>
<td><strong>Driver ID</strong></td>
<td>ThingPark ID of the payload driver used to decode the application
payload, using IoT Flow engine.<strong>This field is only relevant when
the decoder type is set to Automatic in Wireless Logger
application</strong>.</td>
</tr>
<tr>
<td><strong>Driver model</strong></td>
<td>Metadata associated with the device profile corresponding to the
device in question. This metadata consists of two parts: Model-ID and
Application-ID; allows Wireless Logger application to automatically map
the device to the right payload decoder from the list of IoT Flow
drivers. This field represents the model ID, it is <strong>only relevant
when the decoder type is set to Automatic in Wireless Logger
application</strong>.</td>
</tr>
<tr>
<td><strong>Driver application</strong></td>
<td>Metadata associated with the device profile corresponding to the
device in question. This metadata consists of two parts: Model-ID and
Application-ID; allows Wireless Logger application to automatically map
the device to the right payload decoder from the list of IoT Flow
drivers. This field represents the application ID, it is <strong>only
relevant when the decoder type is set to Automatic in Wireless Logger
application</strong>.</td>
</tr>
<tr>
<td><strong>Decoding error</strong></td>
<td>Indicates whether there is a decoding error generated by IoT Flow
drivers, it is <strong>only relevant when the decoder type is set to
Automatic in Wireless Logger application</strong>.</td>
</tr>
</tbody>
</table>
