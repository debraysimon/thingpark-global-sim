---
lang: en-us
sidebar_label: Prerequisites
sidebar_position: 1
---

# Prerequisites

To be able to visualize device data on a map and compute UL and DL
metrics, the Network Survey tool has some prerequisites:

- To be able to decode the UL frame payloads, the Network Server needs
  to know:

  - The Application Session Key (AppSKey) for devices provisioned in ABP
    mode. The AppSKey has to be provisioned in ThingPark during device
    provisioning.

  - The Application Key (AppKey) for devices provisioned in OTAA mode.
    The AppKey has to be provisioned in ThingPark during device
    provisioning. With this key, the Network Server can decode the
    uplink payloads of the device whatever the AppSkey used for each
    individual session.

- Proper payload decoder corresponding to the device has to be available
  on Network Survey.

- Test device has to be configured to report GPS coordinates in its UL
  payload to display it on a map.

- As it is not recommended to use ADR for moving devices, we recommend
  to set a fixed SF during the whole field test. The best solution is to
  use the SF max as fixed SF, by setting a Connectivity Plan with
  SFmin=SFmax, then Network Survey will calculate the SF that would have
  been used by the device.

- Optionally, Network Survey can analyze DL measurements. Do to so, the
  device should additionally report DL RSSI & DL SNR in its UL payloads.
  (Please check with device manufacturer if this mode is supported).
