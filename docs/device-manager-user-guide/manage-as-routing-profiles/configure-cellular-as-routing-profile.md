---
lang: en-us
sidebar_label: Configuring a cellular AS routing profile
sidebar_position: 4
---

# Configuring a cellular AS routing profile

After you have created the cellular AS routing profile, you must
configure it with:

- IP address pool settings that are common to all cellular modes.

- Specific destination settings according to the cellular mode you want.

Configuring the cellular AS routing profile in a specific mode will make
the associated cellular device work in this mode. For more information,
see [About AS routing profiles types and cellular modes](index.md#about-as-routing-profiles-types-and-cellular-modes).

You must have read-write access to Device Manager. Read more\... For
more information, see [Opening a panel and checking your read-write access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

## Allocating IP address pool

It applies to all cellular modes. The IP address pool will be allocated
to all cellular devices using the cellular AS routing profile. Only IPv4
addresses are supported.

This information is provided by your operator.

<table>
<thead>
<tr>
<th>Required</th>
<th>Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td>Subnet<br/>
DHCP pool<br/>
DNS server 1</td>
<td>DNS server 2</td>
</tr>
</tbody>
</table>

#### Before you begin

- You must have read-write access to Device Manager. Read more\... For
  more information, see [Opening a panel and checking your read-write   access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

- The cellular AS routing profile must be opened in edit mode.

&nbsp;

1.  In the IPV4 settings frame, enter the following information:

    - In the **Subnet** box, enter using CIDR format the address of the
      IPv4 subnet.

    - In the **DHCP pool** box, enter the IPv4 address range.

    - In the **DNS server 1** box, enter the IPv4 address of the DNS
      server.

2.  (Optional) In the **DNS server 2** box, enter the IPv4 address of a
    DNS server used as a backup.

3.  Click **Save**.

    -\&gt; The Status frame is updated with your last modifications.

## Adding a destination to a cellular AS routing profile

It consists in selecting and configuring the cellular mode you want for
the cellular AS routing profile:

- [Adding a message mode   destination](../../orphans/dmug-add-message-mode-destination.md)

- [Adding a direct IP mode   destination](../../orphans/dmug-add-direct-ip-mode-destination)

- [Adding mixed mode   destinations](../../orphans/dmug-add-mixed-mode-destinations)

You must have read-write access to Device Manager. Read more\... For
more information, see [Opening a panel and checking your read-write access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).
