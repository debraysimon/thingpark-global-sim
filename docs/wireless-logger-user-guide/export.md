---
lang: en-us
sidebar_label: Exporting packets
sidebar_position: 6
---

# Exporting packets

You can export the LoRAWAN® or
cellular packets included in your search result, which is
displayed in one or several pages, to one CSV file.

You can use your export file:

- For deeper analysis and post-processing of your network data over a
  spreadsheet tool for instance using pivot tables, column filtering,
  draw graphs.

- To archive your data beyond the ThingPark's system retention period
  that is 35 days for ThingPark wireless.

If you have decoded payloads using the automatic decoder as described in
[Decoding LoRaWAN® payloads](analyzing/decode-lorawan-payload.md), the
export file contains the decoded payloads and information about the
driver. For more information about the packet information contained in
the export file, see [LoRaWAN® export
file](lorawan-traffic/lorawan-export-file.md).

1.  (Optional) Restrict your search according to the packets you want to
    export. For more information, see [Searching
    packets](filtering/search-packets.md) and [Quick
    filtering](filtering/quick-filtering.md).

2.  From the **Export size** list, do one of the following:
    
    ![](./_images/export.png)

    - If **Decoder** is set to **Automatic**, enter or select a maximum
      number of 500 packets to export. **Note** Exporting more than 500
      packets with **Decoder** set to **Automatic** gives the same
      export file as setting **Decoder** to **No decoding**.

    - Otherwise, enter or select the number of packets you want.
      **Note** Exporting 10 000 packets takes about 25 seconds.

3.  Click **Export**.

    -\> The export file downloads.

    -\> For more information, see [LoRaWAN® export
    file](lorawan-traffic/lorawan-export-file.md):specificContent[ and [Cellular traffic
    details](cellular-traffic-tpw/cellular-traffic-details.md)]{flavor=tpw}.
