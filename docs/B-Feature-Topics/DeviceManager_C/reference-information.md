---
lang: en-us
sidebar_label: Reference information
sidebar_position: 14
---

# Reference information


## Building your CSV file to import devices
This section helps you construct your CSV file when you want to add or delete devices
in bulk. For more information, see [Importing LoRaWAN® or cellular
devices](create-devices/import-lorawan-cellular-devices.md).

### Import CSV file for cellular devices

The following table describes the contents of the formatted CSV file you
must create to import or delete cellular devices.

Use [TP-Wireless-7.2-device-import-MTC-rev1.xlsx](https://actilitysa.sharepoint.com/:f:/t/product/EkYYeyb6bPZEqYK-hnBu3uABXSt29dwu2brjRVzGKQKMTA?e=dfHRiL)
as a sample to guide you through the process.

<table>
<thead>
<tr>
<th>Column</th>
<th>Field name</th>
<th>Cardinality - Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td> </td>
<td>Processing directive:
<ul>
<li><p>If #: commented row</p></li>
<li><p>If <code>CREATE_CELLULAR</code>: device creation</p></li>
<li><p>If <code>DELETE</code>: device deletion</p></li>
</ul></td>
</tr>
<tr>
<td>B</td>
<td><strong>IMEI</strong></td>
<td><strong>Mandatory</strong>. IMEI terminal identifier (15 or 14
digits). In case of DELETE type, only IMEI is required</td>
</tr>
<tr>
<td>C</td>
<td><strong>IMSI</strong></td>
<td><strong>Mandatory</strong>. IMSI of the SIM card</td>
</tr>
<tr>
<td>D</td>
<td><strong>Device profile ID</strong></td>
<td><strong>Mandatory</strong>.<br />
Manufacturer ID. Ask your operator to get the manufacturer ID
mapping</td>
</tr>
<tr>
<td>E</td>
<td><strong>Secret key of the SIM card (Ki)</strong></td>
<td><strong>Optional</strong> if HSS provisioning is activated in
operator settings, <strong>Forbidden</strong> otherwise.<br />
Supported encoding modes:
<ul>
<li><p>Clear text (hexadecimal encoding)</p></li>
<li><p>Encrypted with TWA Exchange Key (RSA) version specified in column
X (base64 encoding)</p></li>
</ul></td>
</tr>
<tr>
<td>F</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>G</td>
<td><strong>TPK X config</strong></td>
<td>XML encoded ThingPark X configuration:
<p>&lt;modelCfgs&gt;<br />
  &lt;modelCfg&gt;0&lt;/modelCfg&gt;<br />
&lt;/modelCfgs&gt;</p></td>
</tr>
<tr>
<td>H</td>
<td>Connectivity Plan ID</td>
<td>Name of the connectivity plan</td>
</tr>
<tr>
<td>I</td>
<td>AS Routing Profile ID</td>
<td>See Routing Profile details to get the profile ID</td>
</tr>
<tr>
<td>J</td>
<td>Maker ID</td>
<td>Marker IDs in the icon bank are respectively from 100 to 106, and
from 200 to 207. When not set, the default marker is used.
</td>
</tr>
<tr>
<td>K</td>
<td>Device Name</td>
<td>When not provided at creation, the name is generated.</td>
</tr>
<tr>
<td>L</td>
<td>Admin LAT</td>
<td>Latitude (decimal degrees)<br />
When provided at the creation, the manual location is automatically
activated, otherwise the network location is activated by default.</td>
</tr>
<tr>
<td>M</td>
<td>Admin LON</td>
<td>Longitude (decimal degrees)<br />
When provided at the creation, the manual location is automatically
activated, otherwise the network location is activated by default.</td>
</tr>
<tr>
<td>N</td>
<td>Admin Info</td>
<td>Administrative information</td>
</tr>
<tr>
<td>O</td>
<td>Alarm 004 settings</td>
<td>Settings of alarm 004; For instance,
<p>&lt;alarm004&gt;<br />
  &lt;threshold1 status="ENABLE" level="3" duration="P2D"/&gt;<br />
  &lt;threshold2 status="ENABLE" level="5" duration="P7D"/&gt;<br />
&lt;/alarm004&gt;</p></td>
</tr>
<tr>
<td>P</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>Q</td>
<td>Motion indicator</td>
<td>Motion indicator of the device:
<ul>
<li><p>NEAR_STATIC</p></li>
<li><p>WALKING_SPEED</p></li>
<li><p>BIKE_SPEED</p></li>
<li><p>VEHICLE_SPEED</p></li>
<li><p>RANDOM</p></li>
</ul>
When not specified at creation, the motion indicator of the device
profile/model is used.</td>
</tr>
<tr>
<td>R</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>S</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>T</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>U</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>V</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>W</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>X</td>
<td><strong>TWA Exchange Key (RSA) version</strong></td>
<td><strong>Optional</strong> if HSS provisioning is activated in
operator settings; <strong>Forbidden</strong> otherwise.<br />
Used to encrypt the Ki key.</td>
</tr>
</tbody>
</table>

### Import CSV file for LoRaWAN® OTAA devices

The following table describes the contents of the formatted CSV file you
must create to import or delete LoRaWAN® devices in OTAA mode. 

Use [TP-Wireless-7.2-device-import-OTAA-rev1.xlsx](https://actilitysa.sharepoint.com/:f:/t/product/EkYYeyb6bPZEqYK-hnBu3uABXSt29dwu2brjRVzGKQKMTA?e=dfHRiL)
as a sample to guide you through the process.

<table>
<thead>
<tr>
<th>Column</th>
<th>Field name</th>
<th>Cardinality - Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td><strong>Type</strong></td>
<td>Processing directive:
<ul>
<li>If #: commented row</li>
<li>If <code>CREATE_OTAA</code>: device creation</li>
<li>If <code>DELETE</code>: device deletion</li>
</ul></td>
</tr>
<tr>
<td>B</td>
<td><strong>DevEUI</strong></td>
<td><strong>Mandatory</strong><br />
Globally unique IEEE EUI-64 address (hexadecimal)<br />
In case of DELETE type, only DevEUI is required.</td>
</tr>
<tr>
<td>C</td>
<td>DevAddr</td>
<td>Device address (hexadecimal)</td>
</tr>
<tr>
<td>D</td>
<td><strong>Device Profile ID</strong></td>
<td><strong>Mandatory</strong><br />
Device profile identifier<br />
Ask your operator to get the profile ID mapping.</td>
</tr>
<tr>
<td>E</td>
<td><strong>LoRaWAN® JoinEUI/AppEUI</strong></td>
<td><strong>Mandatory</strong><br />
JoinEUI applies to LoRaWAN® 1.1. AppEUI applies to LoRaWAN® 1.0.<br />
Global application ID in IEEE EUI64 address space that uniquely
identifies the application provider of the device .</td>
</tr>
<tr>
<td>F</td>
<td><strong>LoRaWAN® AppKey</strong></td>
<td><strong>Mandatory</strong> if External Join Server option is
DEACTIVATED, <strong>Forbidden</strong> otherwise.<br />
Assigned by the application owner specifically to the device.<br />

<p>Supported encoding modes:<br />
</p>
<ul>
<li>Clear text (hexadecimal encoding)</li>
<li>Encrypted with HSM Application Key (AES) version specified in column
S (hexadecimal encoding)</li>
<li>Encrypted with Exchange Key (RSA) version specified in column X
(base64 encoding).</li>
</ul></td>
</tr>
<tr>
<td>G</td>
<td>TPK X Config</td>
<td>XML encoded ThingPark X configuration:
<p>&lt;modelCfgs&gt;<br />
  &lt;modelCfg&gt;0&lt;/modelCfg&gt;<br />
&lt;/modelCfgs&gt;</p></td>
</tr>
<tr>
<td>H</td>
<td>Connectivity Plan ID</td>
<td>Name of the connectivity plan</td>
</tr>
<tr>
<td>I</td>
<td>AS Routing Profile ID</td>
<td>See Routing Profile details to get the profile ID</td>
</tr>
<tr>
<td>J</td>
<td>Marker ID</td>
<td>Marker IDs in the icon bank are respectively from 100 to 106, and
from 200 to 207. When not set, the default marker is used.
</td>
</tr>
<tr>
<td>K</td>
<td>Device Name</td>
<td>Name of the device</td>
</tr>
<tr>
<td>L</td>
<td>Admin LAT</td>
<td>Latitude (decimal degrees)</td>
</tr>
<tr>
<td>M</td>
<td>Admin LON</td>
<td>Longitude (decimal degrees)</td>
</tr>
<tr>
<td>N</td>
<td>Admin info</td>
<td>Administrative information</td>
</tr>
<tr>
<td>O</td>
<td>Alarm 004 settings</td>
<td>Settings of alarm 004. For instance:
<p>&lt;alarm004&gt;<br />
  &lt;threshold1 status="ENABLE" level="3" duration="P2D"/&gt;<br />
  &lt;threshold2 status="ENABLE" level="5" duration="P7D"/&gt;<br />
&lt;/alarm004&gt;</p></td>
</tr>
<tr>
<td>P</td>
<td>ADM verification code</td>
<td>Address Manager Verification Code<br />
Verification code associated with the DevEUI when the ADM validation
option has been activated on Device Manager subscription.</td>
</tr>
<tr>
<td>Q</td>
<td>Motion indicator</td>
<td>Motion indicator of the device:
<ul>
<li><p>NEAR_STATIC</p></li>
<li><p>WALKING_SPEED</p></li>
<li><p>BIKE_SPEED</p></li>
<li><p>VEHICLE_SPEED</p></li>
<li><p>RANDOM</p></li>
</ul>
When not set, the motion indicator of the device profile/model is
used.</td>
</tr>
<tr>
<td>R</td>
<td><strong>HSM Group ID</strong></td>
<td><strong>Forbidden</strong> if LRC in mode NS, with an external
JS.<br />
Value of Hardware Security Module (HSM) protection in your connectivity
plan.</td>
</tr>
<tr>
<td>S</td>
<td>HSM Application Key version</td>
<td><strong>Optional</strong> if External Join Server option is
DEACTIVATED, <strong>Forbidden</strong> otherwise.<br />
It is provided by your operator.</td>
</tr>
<tr>
<td>T</td>
<td>Application server IDs</td>
<td><strong>Forbidden</strong> if AS routing profile ID (in column I) is
provided.<br />
Multiple application server IDs may be provided, separated by a
comma.</td>
</tr>
<tr>
<td>U</td>
<td><strong>LoRaWAN® NwkKey</strong></td>
<td><strong>Mandatory</strong> for LoRaWAN® 1.1 device if External Join
Server option is DEACTIVATED, <strong>Forbidden</strong> otherwise.
<p>Supported encoding modes:</p>
<ul>
<li><p>Clear text (hexadecimal encoding)</p></li>
<li><p>Encrypted with <strong>HSM Network Key (AES) version</strong>
specified in column V (hexadecimal encoding)</p></li>
<li><p>Encrypted with <strong>HSM Exchange Key (RSA) version</strong>
specified in column X (base64 encoding)</p></li>
</ul></td>
</tr>
<tr>
<td>V</td>
<td><strong>HSM Network Key version</strong></td>
<td><strong>Optional</strong> for LoRaWAN® 1.1 device if External Join
Server option is DEACTIVATED, <strong>Forbidden</strong> otherwise.</td>
</tr>
<tr>
<td>W</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>X</td>
<td><strong>HSM Exchange Key (RSA) version</strong><br />
or <strong>TWA Exchange Key (RSA) version</strong></td>
<td><strong>Optional</strong> if External Join Server option is
DEACTIVATED, <strong>Forbidden</strong> otherwise.<br />
Used to encrypt AppKey/NwkKey.</td>
</tr>
</tbody>
</table>

### Import CSV file for LoRaWAN® ABP devices

The following table describes the contents of the formatted CSV file you
must create to import or delete LoRaWAN® devices in ABP mode.

Use [TP-Wireless-7.2-device-import-ABP-rev1.xlsx](https://actilitysa.sharepoint.com/:f:/t/product/EkYYeyb6bPZEqYK-hnBu3uABXSt29dwu2brjRVzGKQKMTA?e=dfHRiL)
as a sample to guide you through the process.

<table>
<thead>
<tr>
<th>Column</th>
<th>Field name</th>
<th>Cardinality - Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td><strong>Type</strong></td>
<td>Processing directive:
<ul>
<li><p>If #: commented row</p></li>
<li><p>If <code>CREATE_ABP</code> or <code>CREATE </code>or empty:
device creation</p></li>
<li><p>If <code>DELETE</code>: device deletion</p></li>
</ul></td>
</tr>
<tr>
<td>B</td>
<td><strong>DevEUI</strong></td>
<td><strong>Mandatory</strong><br />
Globally unique IEEE EUI-64 address (hexadecimal)<br />
In case of DELETE type, only DevEUI is required.</td>
</tr>
<tr>
<td>C</td>
<td><strong>DevAddr</strong></td>
<td><strong>Mandatory</strong><br />
Device address (hexadecimal).</td>
</tr>
<tr>
<td>D</td>
<td><strong>Device Profile ID</strong></td>
<td><strong>Mandatory</strong><br />
Device profile ID. Ask your operator to get the profile ID mapping.</td>
</tr>
<tr>
<td>E</td>
<td><strong>LoRaWAN® FNwkSIntKey/NwkSKey</strong></td>
<td><strong>Mandatory</strong> for LoRA™ MAC or Watteco 3.2 MAC devices,
<strong>Forbidden</strong> otherwise.<br />
Forwarding Network Session Integrity Key (FNwkSIntKey) applies to
LoRaWAN® 1.1. Network Session Key (NwkSKey) applies to LoRaWAN® 1.0:
128-bit key (hexadecimal).</td>
</tr>
<tr>
<td>F</td>
<td>AppSKeys</td>
<td><strong>Optional</strong> for LoRA™ MAC or Watteco 3.2 MAC devices,
<strong>Forbidden</strong> otherwise.<br />
XML encoded application session keys, 128-bit key per port:
<pre className="text"><code>&lt;AppSKeys&gt;  &lt;AppSKey Port=&quot;1-2&quot;&gt;2B7E151628AED2A6ABF7158809CF4F3C&lt;/AppSKey&gt;  &lt;AppSKey Port=&quot;2&quot;&gt;2B7E151628AED2A6ABF7158809CF4F3C&lt;/AppSKey&gt;&lt;/AppSKeys&gt;</code></pre></td>
</tr>
<tr>
<td>G</td>
<td>TPK X Config</td>
<td>XML encoded ThingPark X configuration:
<p>&lt;modelCfgs&gt;<br />
  &lt;modelCfg&gt;0&lt;/modelCfg&gt;<br />
&lt;/modelCfgs&gt;</p></td>
</tr>
<tr>
<td>H</td>
<td>Connectivity Plan ID</td>
<td>Name of the connectivity plan</td>
</tr>
<tr>
<td>I</td>
<td>AS Routing Profile ID</td>
<td>See Routing Profile details to get the profile ID</td>
</tr>
<tr>
<td>J</td>
<td>Marker ID</td>
<td>Marker IDs in the icon bank are respectively from 100 to 106, and
from 200 to 207. When not set, the default marker is used.
</td>
</tr>
<tr>
<td>K</td>
<td>Device Name</td>
<td>Name of the device</td>
</tr>
<tr>
<td>L</td>
<td>Admin LAT</td>
<td>Latitude (decimal degrees)</td>
</tr>
<tr>
<td>M</td>
<td>Admin LON</td>
<td>Longitude (decimal degrees)</td>
</tr>
<tr>
<td>N</td>
<td>Admin info</td>
<td>Administrative information</td>
</tr>
<tr>
<td>O</td>
<td>Alarm 004 settings</td>
<td>Settings of alarm 004. For instance:
<p>&lt;alarm004&gt;<br />
  &lt;threshold1 status="ENABLE" level="3" duration="P2D"/&gt;<br />
  &lt;threshold2 status="ENABLE" level="5" duration="P7D"/&gt;<br />
&lt;/alarm004&gt;</p></td>
</tr>
<tr>
<td>P</td>
<td>ADM verification code</td>
<td>Address Manager Verification Code<br />
Verification code associated with the DevAddr/DevEUI pair when the ADM
validation option has been activated on Device Manager
subscription.</td>
</tr>
<tr>
<td>Q</td>
<td>Motion indicator</td>
<td>Motion indicator of the device:
<ul>
<li><p>NEAR_STATIC</p></li>
<li><p>WALKING_SPEED</p></li>
<li><p>BIKE_SPEED</p></li>
<li><p>VEHICLE_SPEED</p></li>
<li><p>RANDOM</p></li>
</ul>
When not set, the motion indicator of the device profile/model is
used.</td>
</tr>
<tr>
<td>R</td>
<td>HSM group ID</td>
<td><strong>Forbidden</strong></td>
</tr>
<tr>
<td>S</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>T</td>
<td>Application server IDs</td>
<td><strong>Forbidden</strong> if AS routing profile ID (in column I) is
provided.<br />
Multiple application server IDs may be provided, separated by a
comma.</td>
</tr>
<tr>
<td>U</td>
<td><strong>LoRaWAN® SNwkSIntKey</strong></td>
<td><strong>Mandatory</strong> for LoRaWAN® 1.1 device,
<strong>Forbidden</strong> otherwise.</td>
</tr>
<tr>
<td>V</td>
<td><strong>LoRaWAN® NwkSEncKey</strong></td>
<td><strong>Mandatory</strong> for LoRaWAN® 1.1 device,
<strong>Forbidden</strong> otherwise.</td>
</tr>
<tr>
<td>W</td>
<td>n/a</td>
<td>n/a</td>
</tr>
<tr>
<td>X</td>
<td>n/a</td>
<td>n/a</td>
</tr>
</tbody>
</table>


## Connectivity plans

This section provides quick access to the details of all connectivity
plans. For more information about connectivity plans, see [Viewing
connectivity plans](view-connectivity-plans.md) and [Managing the
connectivity plan of a
device](manage-device-network/manage-connectivity-plan-device.md).


### Cellular IoT connectivity plan details

The Connectivity plan details frame, which gives information about the
connectivity plan, is displayed in the Connectivity plans panel. This
frame is for information only.

It displays the name, ID and description of the connectivity plan, and
provides a view on its main characteristics. The default values, that
are not displayed in Device Manager, are given here as an indication for
troubleshooting purpose.

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Cardinality - Description</th>
<th>Default setting</th>
</tr>
</thead>
<tbody>
<tr>
<td>Message mode parameters</td>
</tr>
<tr>
<td><strong>Uplink Rate regulator</strong></td>
<td>Number of uplink packets allowed per hour with number of uplink
packets allowed in burst.</td>
<td>10/hour<br />
10/burst</td>
</tr>
<tr>
<td><strong>Uplink Regulator policy</strong></td>
<td>Describes how the network behaves in case of uplink traffic
overload. <strong>Mark</strong>: The system will keep track of the
device packets exceeding the limits’ set. Exceeding packets are sent and
marked. <strong>Drop</strong>: The system will drop the device packets
exceeding the limits set. Exceeding packets are deleted.</td>
<td>Mark</td>
</tr>
<tr>
<td><strong>Downlink transmission</strong></td>
<td>Enables/Disables the activation state of the downlink
transmission.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Downlink Rate regulator</strong></td>
<td>Number of downlink packets allowed per hour, number of downlink
packets allowed in burst. By default, the Downlink rate is set to one
packet/hour with a Downlink bucket size of two packets.</td>
<td>1/hour</td>
</tr>
<tr>
<td><strong>Downlink regulator policy</strong></td>
<td>Describes how the network behaves in case of downlink traffic
overload:
<ul>
<li><strong>Mark</strong>: The system will keep track of devices
exceeding the limits’ set. Exceeding packets are sent and marked.</li>
<li><strong>Drop</strong>: The system will drop the device packets
exceeding the limits’ set. Exceeding packets are deleted.</li>
</ul></td>
<td>Mark</td>
</tr>
<tr>
<td><strong>ThingPark X routing</strong></td>
<td>Allows routing messages to and from the ThingPark X service
(Actility proprietary application server, and more).</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Third Party Application Servers routing</strong></td>
<td>Allows routing messages to and from a third-party application
servers using an HTTP application server.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Maximum allowed Application Servers</strong></td>
<td>Number of allowed third party application servers in an AS routing
profile, summing up local application servers and ThingPark X
destinations. It is checked at the device’s creation or edition, when a
connectivity plan and an AS routing profile have been allocated. This
parameter can be set up to five by your operator.</td>
<td>1</td>
</tr>
<tr>
<td><strong>ThingPark Kafka routing</strong></td>
<td>Allows message routing to third party application servers using a
Kafka topic.</td>
<td>Disabled</td>
</tr>
<tr>
<td>Direct IP mode parameters</td>
</tr>
<tr>
<td><strong>Direct IP mode</strong></td>
<td>Enable/Disable direct IP mode</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Maximum bandwidth up</strong></td>
<td>Maximum allowed uplink bandwidth in kbps</td>
<td>-</td>
</tr>
<tr>
<td><strong>Maximum bandwidth down</strong></td>
<td>Maximum allowed downlink bandwidth in kbps</td>
<td>-</td>
</tr>
<tr>
<td><strong>Microflow minimal duration</strong></td>
<td>Minimum duration of microflow in seconds. Acceptable range is from
10 seconds to 1 minute.</td>
<td>20</td>
</tr>
<tr>
<td><strong>Microflow maximal duration</strong></td>
<td>Maximum duration of microflow in seconds. Acceptable range is from 1
minute to 1 hour.</td>
<td>60</td>
</tr>
<tr>
<td><strong>Microflow maximal volume</strong></td>
<td>Maximum reporting volume of microflow in Kilo Bytes. Acceptable
range is from 50 KB to 10 MB.</td>
<td>100</td>
</tr>
</tbody>
</table>


### LoRaWAN® unicast connectivity plan details

The Connectivity plan details frame, which gives information about the
connectivity plan, is displayed in the Connectivity plans panel. This
frame is for information only.

It gives the name, ID and description of the connectivity plan, and
provides a view on its main characteristics. The default values, that
are not displayed in Device Manager, are given here as a guide for
troubleshooting purpose.

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Cardinality - Description</th>
<th>Default setting</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Communication type</strong></td>
<td><strong>Mandatory</strong><br />
Communication type of the connectivity plan</td>
<td>Unicast</td>
</tr>
<tr>
<td>Uplink frame parameters</td>
</tr>
<tr>
<td><strong>Acknowledged uplink frame</strong></td>
<td>Indicates that the device is authorized to use the uplink confirmed
mode, that is to say, requests an acknowledgment by the network to its
uplink packets. If disabled, the network does not send acknowledgements
to the uplink packets sent by the device even if the device uses the
Confirmed mode.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Rate regulator</strong></td>
<td>Number of uplink packets allowed per unit of time (hour, day or
week) with the number of uplink packets allowed in burst.</td>
<td>10/hour<br />
10/burst</td>
</tr>
<tr>
<td><strong>Uplink Regulator policy</strong></td>
<td>Describes how the network behaves in case of uplink traffic
overload. <strong>Mark</strong>: The system will keep track of the
device packets exceeding the limits set. Exceeding packets are sent and
marked as overflow packets. Additional fees may be applied by the
operator. <strong>Drop</strong>: The system will drop the device packets
exceeding the limits set. Exceeding packets are deleted.</td>
<td>Mark</td>
</tr>
<tr>
<td><strong>Base station buffering policy</strong></td>
<td>Unavailable</td>
<td>Not set</td>
</tr>
<tr>
<td><strong>Force Adaptive Data Rate</strong></td>
<td>The Adaptive Data Rate (ADR) is always used even if not requested by
the device.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Asynchronous UL processing</strong></td>
<td>Enabled if higher than zero millisecond, it makes the LRC wait for
an application sever downlink payload before sending the LoRaWan®
downlink to the device on RX1/RX2 response windows. The value defines
the maximum delay the LRC can wait forward the AS payload in the
downlink answer to the device, and thus the maximum delay the
application server can send the AS downlink payload. If the delay is
expired, the AS downlink payload will wait the next device uplink to be
forwarded in the next downlink answer to the device.<br />
By default, this parameter is set to zero millisecond which means that
the synchronous uplink processing is enabled, and the LRC does not wait
for the application server downlink payload.<br />
</td>
<td>0</td>
</tr>
<tr>
<td>Downlink frame parameters</td>
</tr>
<tr>
<td><strong>Downlink transmission</strong></td>
<td>Enables /Disables downlink packets transmission to the device.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Acknowledged downlink frame</strong></td>
<td>Indicates that the application server is authorized to use the
Downlink Confirmed mode, to request an acknowledgment to its downlink
packets. If disabled, the network rejects the downlink packets received
from the application server in confirmed mode.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Rate regulator</strong></td>
<td>Number of downlink packets (also known as packets) allowed per unit
of time (hour, day or week), number of downlink packets allowed in
burst.</td>
<td>1/hour<br />
2/burst</td>
</tr>
<tr>
<td><strong>Downlink regulator policy</strong></td>
<td>Describes how the network behaves in case of downlink traffic
overload. <strong>Mark</strong>: The system will keep track of the
device packets exceeding the limits set. Exceeding packets are sent and
marked as overflow packets. Additional fees may be applied by the
operator. <strong>Drop</strong>: The system will drop the device packets
exceeding the limits set. Exceeding packets are deleted.</td>
<td>Mark</td>
</tr>
<tr>
<td><strong>Device status request rate (request/day)</strong></td>
<td>Rate to initiate a device status request from the network.</td>
<td>0/day</td>
</tr>
<tr>
<td><strong>Report device battery level</strong></td>
<td>For devices supporting the feature, activates the reporting of
device battery level to application servers.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Report device signal margin</strong></td>
<td>Activates the reporting of device signal margin to application
servers.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Minimal RX1 delay (ms)</strong></td>
<td>Specifies at the device level the delay in milliseconds between the
uplink and the first downlink receive window (RX1). If provided, this
value takes precedence over the RX1 value defined in the RF region.</td>
<td>Not set</td>
</tr>
<tr>
<td>Network parameters</td>
</tr>
<tr>
<td><strong>Mobility</strong></td>
<td>Unavailable</td>
<td><p>Disabled</p></td>
</tr>
<tr>
<td><strong>Network geolocation</strong></td>
<td>Enables the device network geolocation services (GPS-free). The
Adaptive Data Rate policy seeks to keep the device within reach of three
base stations.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Add Base station metadata information</strong></td>
<td>Provides LRR meta information (RSSI, SNR, ESP, LRR coordinates, …)
into routing messages to third party applications servers.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Class B support</strong></td>
<td>If supporting the feature, allows an OTAA or ABP device to switch to
LoRaWAN® class B mode after a bootstrapping procedure.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Managed Customer Network</strong></td>
<td>Enables the use of one group of base stations dedicated to the
application of a flat usage rate billing policy to the traffic of
devices passing through it. Those base stations are typically owned by
the subscriber and installed on their premises. Device traffic served
outside the managed customer network is being applied the regular
conditions of the connectivity plan. Available on subscription and if
activated in the subscriber’s account configuration.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Network Partner access control</strong></td>
<td>Allows the network server to route or drop packets passing through
base stations according to the network partners they belong to:
<ul>
<li><p><strong>No access control</strong>: Routes all the uplink and
downlink packets through all base stations. By default, this parameter
is set.</p></li>
<li><p><strong>Whitelist access control</strong>: Routes the uplink and
downlink packets through base stations belonging to whitelisted network
partners. If enabled, displays the network partners
identifiers.</p></li>
<li><p><strong>Blacklist access control</strong>: Drops the uplink and
downlink packets coming from or to base stations belonging to
blacklisted network partners. If enabled, displays the network partners
identifiers.</p></li>
</ul></td>
<td>Set</td>
</tr>
<tr>
<td>Routing parameters<br />
</td>
</tr>
<tr>
<td><strong>ThingPark X routing</strong></td>
<td>Allows routing messages to and from the ThingPark X service
(Actility proprietary application server, and more).<br />
<strong>Important</strong> The connectivity plan associated with the
device must enable the routing parameter corresponding to the
application server used by the device.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Third Party Application Servers routing</strong></td>
<td>Allows routing messages to and from a third-party application
servers using an HTTP application server.<br />
<strong>Important</strong> The connectivity plan associated with the
device must enable the routing parameter corresponding to the
application server used by the device.</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Maximum allowed Application Servers</strong></td>
<td>Number of allowed third party application servers in an AS routing
profile, summing up local application servers, supplier application
servers and ThingPark X destinations. It is checked at the device’s
creation or edition, when a connectivity plan and an AS routing profile
have been allocated. This parameter can be set up from 0 to 5 by your
operator.<br />
<strong>Important</strong> The connectivity plan associated with the
device must enable the routing parameter corresponding to the
application server used by the device.</td>
<td>1<br />
</td>
</tr>
<tr>
<td><strong>Third-party Application Server PER information</strong></td>
<td>Routes the Packet Error Rate information to application
servers.<br />
<strong>Important</strong> The connectivity plan associated with the
device must enable the routing parameter corresponding to the
application server used by the device.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Third-party Application Server downlink sent
indication</strong></td>
<td>Reports downlink delivery status to Third Party application
servers.<br />
<strong>Important</strong> The connectivity plan associated with the
device must enable the routing parameter corresponding to the
application server used by the device.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>ThingPark Kafka routing</strong></td>
<td>Allows message routing to third party application servers using a
Kafka topic.<br />
<strong>Important</strong> The connectivity plan associated with the
device must enable the routing parameter corresponding to the
application server used by the device.</td>
<td>Disabled</td>
</tr>
<tr>
<td>Roaming parameters</td>
</tr>
<tr>
<td><strong>Roaming activation allowed</strong></td>
<td>Allows OTAA activation (LoRaWAN® JoinReq) of devices away from the
home network server.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Passive roaming allowed</strong></td>
<td>Allows passive roaming.</td>
<td>Disabled</td>
</tr>
<tr>
<td><strong>Handover Roaming allowed</strong></td>
<td>Unavailable</td>
<td><p>Disabled</p></td>
</tr>
<tr>
<td>Security</td>
</tr>
<tr>
<td><strong>Hardware Security Module (HSM) protection</strong></td>
<td>If an HSM is installed on your operator’s platform, the HSM group
set enables the protection of the root keys, AppKey and NwkKey, for OTAA
devices. NwkKey only applies to LoRaWAN® 1.1. By default, no HSM group
is set.</td>
<td>Disabled</td>
</tr>
<tr>
<td>Grade-of-Service based ADR parameters</td>
</tr>
<tr>
<td><strong>Minimum Spreading Factor</strong></td>
<td>Lowest spreading factor allowed for the device. The minimum
spreading factor is defined by the network configuration of the RF
region. By default, this parameter is not set, so the minimum spreading
factor is defined by the network configuration of the RF region.</td>
<td>Not set</td>
</tr>
<tr>
<td><strong>Maximum Spreading Factor</strong></td>
<td>Highest spreading factor allowed for the device. By default, this
parameter is not set, so the maximum spreading factor is defined by the
network configuration of the RF region.</td>
<td>Not set</td>
</tr>
<tr>
<td><strong>Force channel mask</strong></td>
<td>Conceals certain radio channels, thus leaving others for the
subsequent usage for uplink access. It changes the default channel mask
settings defined in the RF region using a hexadecimal string
(16/64/72/96-bit hexadecimal string according to the channels number)
encoding the channels usable for uplink access.</td>
<td><br />
Not set</td>
</tr>
<tr>
<td><strong>Minimum antenna (macro) diversity</strong></td>
<td>Minimum required number of base stations simultaneously receiving
the device packets, typically used for network geolocation.</td>
<td>1</td>
</tr>
<tr>
<td><strong>Force RX2 data rate</strong></td>
<td>Specifies a data rate for the RX2 receive window to override the
default data rate defined in the network configuration of the RF
region.</td>
<td>Not set</td>
</tr>
<tr>
<td><strong>Adaptive Data Rate algorithm</strong></td>
<td>ADR algorithm version: <strong>ADR v3: Packet Error Rate-based
optimization</strong> (New connectivity plans only support ADR v3) and
<strong>ADR v2: Signal to Noise Ratio-based ADR optimization</strong>
(Will be deprecated soon). The ADR algorithm is used to manage the data
rate, number of transmissions and RF output power for each device
individually, in order to maximize both battery life of devices and
overall network capacity.
<p>If <strong>ADR v3: Packet Error Rate-based optimization</strong> is
set, the following parameters are available:</p>
<ul>
<li><strong>Device PER target</strong>: Defines the Packet Error Rate
value targeted by the ADR v3 algorithm.</li>
<li><p><strong>Macro diversity reliability target</strong>: Defined the
minimum probability target of having N base stations receiving device
uplink packets.</p></li>
<li><p><strong>Minimum number of device uplink transmissions</strong>:
Defines the minimum number of device uplink transmissions to ensure
quality of service will not be degraded.</p></li>
<li><p><strong>Maximum number of device uplink transmissions</strong>:
Defines the maximum number of device uplink transmissions to ensure
quality of service will not be degraded.</p></li>
</ul>
<p>If <strong>ADR v2: Signal to Noise Ratio-based ADR
optimization</strong> is set, the following parameters are
available:</p>
<ul>
<li><p><strong>Margin offset</strong>: Defines the margin offset
considered when computing the minimum Signal to Noise Ratio in the ADR
v2 algorithm. By default, this parameter is set to zero.</p></li>
<li><p><strong>Number of transmissions offset</strong>: Defines the
offset added to the number of transmissions configured in the RF region.
By default, this parameter is set to zero.</p></li>
</ul></td>
<td><p>ADR v3</p>
<ul>
<li><p>10%</p></li>
<li><p>80%</p></li>
<li><p>80%</p></li>
<li><p>3</p></li>
</ul>
<p> </p></td>
</tr>
</tbody>
</table>

### LoRaWAN® multicast connectivity plan details

The Connectivity plan details frame, which gives information about the
connectivity plan, is displayed in the Connectivity plans panel. This
frame is for information only.

It displays the name, ID and description of the connectivity plan, and
provides a view on its main characteristics. The default values, that
are not displayed in Device Manager, are given here as an indication for
troubleshooting purpose.

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Cardinality - Description</th>
<th>Default setting</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Communication type</strong></td>
<td><strong>Mandatory</strong><br />
Communication type of the connectivity plan</td>
<td>Multicast</td>
</tr>
<tr>
<td>Downlink frame parameters</td>
</tr>
<tr>
<td><strong>Rate regulator</strong></td>
<td>Number of packets allowed per hour with number of packets allowed in
burst.</td>
<td>1/hour<br />
2/burst</td>
</tr>
<tr>
<td><strong>Downlink regulator policy</strong></td>
<td>Describes how the network behaves in case of downlink traffic
overload. <strong>Mark</strong>: The system will keep track of the
device downlink exceeding the limits set. Exceeding packets are sent and
marked. <strong>Drop</strong>: The system will drop the device downlink
exceeding the limits set. Exceeding packets are deleted.</td>
<td>Mark</td>
</tr>
<tr>
<td><strong>Force RX2 Data Rate</strong></td>
<td>If not specified in <strong>Downlink data rate</strong> of the
multicast group, defines a specific RX2 data rate that will
override the RF region settings for class C multicast downlink
transmission. <strong>Important</strong> When defined, this value must
be the same as the <strong>Force RX2 Data Rate</strong> value set in the
unicast connectivity plans of all target devices using the multicast
group.</td>
<td><p>-</p></td>
</tr>
<tr>
<td>Multicast parameters</td>
</tr>
<tr>
<td><strong>Maximum base station cells</strong></td>
<td>Maximum number of base stations which can be added in the scope of
the multicast group. Acceptable range is from 1 to 1,000 base
stations.</td>
<td>200</td>
</tr>
<tr>
<td><strong>Downlink transmission inter base station delay</strong></td>
<td>Transmission delay in seconds between adjacent base stations which
are not GPS-synchronized.</td>
<td>5</td>
</tr>
<tr>
<td><strong>Downlink maximum transmissions</strong></td>
<td>Maximum number of times the network server will attempt to transmit
a downlink packet through a base station in case it fails to broadcast.
Acceptable range is from 1 to 5 times.</td>
<td>3</td>
</tr>
<tr>
<td><strong>Class C collision avoidance distance</strong></td>
<td>Minimum distance in meters between two base stations to avoid
transmission collision.<br />
Acceptable range is from 100 to 50,000 meters.</td>
<td>7,000</td>
</tr>
<tr>
<td>Routing parameters</td>
</tr>
<tr>
<td><strong>ThingPark X routing</strong></td>
<td>Allows routing messages to and from the ThingPark X service
(Actility proprietary application server, and more)</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>Third Party Application Servers routing</strong></td>
<td>Allows routing messages to and from a third-party application
servers using an HTTP application server</td>
<td>Enabled</td>
</tr>
<tr>
<td><strong>ThingPark Kafka routing</strong></td>
<td>Allows message routing to third party application servers using a
Kafka topic</td>
<td>Disabled</td>
</tr>
</tbody>
</table>

