---
sidebar_label: Downlink LoRaWAN® multicast packets
sidebar_position: 3
---

# Downlink LoRaWAN® multicast packets

This topic describes reference information about downlink LoRaWAN®
multicast packets.

## Multicast

Multicast allows a group of devices to receive the same downlink packet
at the same time by transmitting it only once by the base station. It
offers significant downlink capacity gain and optimizes the usage of the
radio resources.

A multicast group is composed of LoRaWAN® devices implementing:

- A regular unicast ABP or OTAA device, associated with a first set of
  {DevEUI, DevAddr, NwkSKey, AppSKey} for ABP and {DevEUI, AppKey} for
  OTAA

- A virtual ABP device of Class B or C, associated with another set of
  {DevEUI, DevAddr, NwkSKey, AppSKey} pre-shared by all members of the
  multicast group.

## Multicast downlinks

**Multicast downlink packets** are represented with a special multicast
flag ![](./_images/multicastdownlink.png).

In the expandable panel, the class of the multicast group is indicated:
**Multicast class C**.
![](./_images/multicast-downlink-1.png)

### Reattempts of multicast downlink transmission to base stations failed

The same downlink multicast packet may be transmitted displayed several
times in Wireless Logger. This happens when the initial transmission of
the downlink multicast packet was not successful on all the base
stations involved in the multicast session. In this case, the LRC
reattempts to transmit again the downlink packet to via the base station
that reported transmission failure on the previous attempt. The maximum
number of LRC attempts is configured in the multicast connectivity plan
associated with the subscriber's multicast group. By default, it is set
to 3 transmissions.

**Example** This downlink multicast packet has been transmitted more
than once by the LRC. Notice the downlink frame counters 10774 and
10775:
![](./_images/multicast-downlink-2.png)

## Multicast downlinks metadata

See [Downlink metadata
columns](downlink-lorawan-unicast-packets.md#downlink-metadata-columns)
and [Downlink expandable
panel](downlink-lorawan-unicast-packets.md#downlink-expandable-panel).

## Multicast summary report

For each downlink multicast packet, Wireless Logger displays a multicast
summary report. The purpose of this report is to give the effective
radio frequency transmission status of the downlink multicast packet.

**Note** Effective radio frequency transmission only ensures that the
downlink packet has effectively been transmitted by an LRR base station.
It does not guarantee that the device has received it.

An example of multicast summary report is provided below, it is
represented by the ![](./_images/multicastsummaryreport.png) symbol.

![](./_images/multicast-summary-report-1.png)

In this example, the multicast transmission was successful on the two
base stations participating to the multicast session.

In case of transmission failure on one or several LRR base stations,
either after the first transmission attempt by the LRC or after the
maximum number of transmission attempts, the multicast summary report
provides the distribution of LRR failure delivery causes.

Transmission status shows multicast downlink transmission status:

| Transmission status | Explanation                                                                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **PARTIAL**         | Some LRRs failed to transmit the downlink packet. Another attempt will be made to transmit the packet to theses LRRs.                                       |
| **SUCCESS**         | All LRRs successfully transmitted the downlink packet.                                                                                                      |
| **ABORTED**         | Some LRRs failed to transmit the downlink. No more attempt will be made to transmit the packet to theses LRRs (maximum number of attempts already reached). |

 

The following table lists the various causes and their explanation:

<table>
<thead>
<tr>
<th>Cause value</th>
<th>Category name</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ax</strong></td>
<td><strong>Transmission slot busy</strong>
<ul>
<li><p>(A0) <strong>Radio stopped</strong></p></li>
<li><p>(A1) <strong>Downlink radio stopped</strong></p></li>
<li><p>(A2) <strong>Ping slot not available</strong> (Class B multicast
only)</p></li>
<li><p>(A3) <strong>Radio busy</strong></p></li>
<li><p>(A4) <strong>Listen before talk</strong></p></li>
<li><p>(A5) <strong>Radio board error</strong></p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Bx (Multicast class B only)</strong></p></td>
<td><strong>Received too late for ping slot</strong>
<ul>
<li><p>(B0) <strong>Too late for ping slot</strong></p></li>
</ul></td>
</tr>
<tr>
<td><strong>Dx</strong></td>
<td><strong>Duty cycle or gateway constraint</strong>
<ul>
<li><p>(D0) <strong>Duty cycle constraint detected by
LRR</strong></p></li>
<li><p>(DA) <strong>Duty cycle constraint detected by
LRC</strong></p></li>
<li><p>(DB) <strong>Max dwell time constraint detected by the
LRC</strong></p></li>
<li><p>(DC) <strong>No GPS-synchronized LRR detected by the LRC</strong>
(Class B multicast only)</p></li>
<li><p>(DD) <strong>No LRR connected detected by the
LRC</strong></p></li>
<li><p>(DF) <strong>Wrong NetID</strong></p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>Ex (Multicast class C only)</strong></p></td>
<td><strong>Frame expired before transmitting</strong>
<ul>
<li><p>(E0) <strong>Max delay for Class C</strong> - 60 seconds</p></li>
</ul></td>
</tr>
</tbody>
</table>

 

**Example** In the following multicast summary report, we can see that a
transmission slot has been twice busy (**A3**) while the failure causes
of the gateway constraint have occurred 7 times (**D0**) and 3 times
(**DC**).

![](./_images/multicast-summary-report-2.png)

