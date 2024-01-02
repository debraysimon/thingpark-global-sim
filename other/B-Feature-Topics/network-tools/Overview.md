---
lang: en-us
sidebar_label: Using network tools
sidebar_position: 6
title: Using network tools
---

# Network tools

The three network tools available on ThingPark Enterprise are:

- [Wireless Logger
  tool](../../user-guide/network-tools/wireless-logger/overview).

- [Network Survey tool](../../user-guide/network-tools/network-survey/overview).

- [Spectrum Analysis
  tool](../../user-guide/network-tools/spectrum-analysis/overview).

Prior to using the network tools you need to be aware of the parameters
that you need to perform this action.

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>DevAddr</strong></p></td>
<td><ul>
<li><p>Device Address on the LoRaWAN® network, allocated by the LRC and
unique on the network.</p></li>
<li><p>Composed of 8 digits (0 to 9, and A to F), it identifies the
device on the current network. The most significant 7 bits of the
DevAddr are the LoRaWAN® network operator ID.</p></li>
<li><p>Example: 05-AB-C4-89 or 14-77-5E-A1</p></li>
<li><p>It is provided by the device manufacturer.</p></li>
</ul></td>
</tr>
<tr>
<td><strong>DevEUI</strong></td>
<td><ul>
<li><p>Globally unique address of the device provided by the device
manufacturer.</p></li>
<li><p>Composed of 16 digits (0 to 9, and A to F), the first 6, 7 or 9
digits identify the device manufacturer.</p></li>
<li><p>Example: F0-3D-29-00-0B-B1-7A-AA.</p></li>
<li><p>It is provided by the device manufacturer.</p></li>
</ul></td>
</tr>
<tr>
<td><strong>LRR Id</strong></td>
<td><ul>
<li><p>Designates the Long-Range Relay (Actility’s name for a LoRaWAN®
Base station) Unique Identifier on the network.</p></li>
</ul></td>
</tr>
<tr>
<td><strong>LRC Id</strong></td>
<td><ul>
<li><p>Designates the Long-Range Controller (Actility’s name for a
LoRaWAN® Network Server (NS8) Unique ID.</p></li>
</ul></td>
</tr>
</tbody>
</table>
