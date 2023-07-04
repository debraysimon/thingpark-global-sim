---
lang: en-us
sidebar_position: 0
---

# Routes and destination URLs for HTTP application servers

If you have created either:

- A **LoRaWAN® HTTP application server**

- Or a **cellular HTTP application server** for message or mixed modes,

you must add it a route with one or more destination URLs to send and
receive the device packets.

You can create for a:

<table data-cellspacing="21">
<thead>
<tr class="header">
<th> </th>
<th>Number of routes</th>
<th>Number of destination URLs per route</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>LoRaWAN® HTTP application server</strong></td>
<td><strong>One or more routes*</strong> 
<p>*Only define several routes if you want to direct and distribute
uplink reports according to the FPort.</p></td>
<td rowspan="2">It is defined by your operator when installing your
platform. The default values are:
<ul>
<li><p><strong>Sequential strategy</strong>: RECOMMENDED<br />
Maximum 5 destination URLs per route.</p></li>
<li><p><strong>Blast strategy</strong>: WILL BE DEPRECATED<br />
Maximum 3 destination URLs per route.</p></li>
</ul></td>
</tr>
<tr class="even">
<td><strong>Cellular HTTP application server</strong></td>
<td><strong>Only one route</strong></td>
</tr>
</tbody>
</table>
