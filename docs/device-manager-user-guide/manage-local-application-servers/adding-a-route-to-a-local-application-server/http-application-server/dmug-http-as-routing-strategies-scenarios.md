# HTTP application servers routing strategies and scenarios

You can use the following scenarios to send packets to HTTP application
servers:

<table data-cellspacing="21">
<thead>
<tr class="header">
<th>Strategy</th>
<th colspan="2">Scenario</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td rowspan="2"><strong>Sequential strategy</strong>
<p><strong>RECOMMENDED</strong></p></td>
<td><p><strong>Scenario 1</strong></p></td>
<td><strong>Sending the same packet with reliability to one out of
distinct destination URLs in a same application server</strong>. The
packet is sent to the first destination URL, and only sent to the next
if the previous one is not available.
<p>-&gt; The packet is only sent to the first destination URL that has
answered successfully.</p></td>
</tr>
<tr class="even">
<td><strong>Scenario 2</strong></td>
<td><strong>Sending simultaneously with reliability the same packet to
one distinct destination URL in separate application servers</strong>.
All application servers must be in the same AS routing profile.
Optionally, each application server can have several destination URLs
also using the sequential strategy.
<p>-&gt; All the destination URLs have received the same packet with no
delay, optionally with redundancy.</p></td>
</tr>
<tr class="odd">
<td><strong>Blast strategy</strong>
<p><strong>WILL BE DEPRECATED</strong></p></td>
<td><strong>Scenario 3</strong></td>
<td><strong>Sending the same packet to all destination URLs in a same
application server, one after another</strong>. There is a short delay
between transmissions. Only used for existing application servers, it
must not be used for new application servers.</td>
</tr>
</tbody>
</table>
