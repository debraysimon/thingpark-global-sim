---
lang: en-us
sidebar_label:  Managing AS routing profiles
sidebar_position: 11
---

# Managing AS routing profiles

You must have read-write access to Device Manager to create and
configure AS routing profiles. Read more\... For more information, see
[Opening a panel and checking your read-/write access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

If you have read-only access, this topic gives you background
information about the types and modes of AS routing profiles you can
view, the parameters they use, and their mapping with all types of
applications servers.

You can create and associate an AS routing profile either when creating
or editing a device. For more information, see respectively [Creating devices](../create-devices/index.md) and [Managing the device network](../manage-device-network/index.md).

**Prerequisite** The prerequisite of this topic is [Managing local application servers](../manage-local-application-servers/index.md),
except if you want to use a ThingPark X destination, a supplier
application server or cellular connectivity in direct IP mode. For those
cases, you do not have to create any local application server.

## About AS routing profiles types and cellular modes

The AS routing profile defines how the device data will be routed to a destination.

There are two types of AS routing profiles, and cellular AS routing
profiles have three modes:

| AS routing profiles types | Description |
| -- | -- |
| **LoRaWAN® AS routing profiles** | Uplink and downlink packets (small volume of data) go through an AS routing profile to one or more application servers that can have one or more routes.|
| **Cellular AS routing profiles**<br/>Message mode|Uplink and downlink packets (small volume of data) go through a cellular AS routing profile to one or more application servers that can have only one route. Works similarly to LoRaWAN®.<br/>**The mode must match the mode enabled in the connectivity plan**.<br/>For more information, see [Cellular IoT connectivity plan details](../reference-information.md#cellular-iot-connectivity-plan-details) |
| **Cellular AS routing profiles**<br/>Direct IP mode|Uplink and downlink bytes (large volume of data) go through a cellular AS routing profile to an ASR address.<br/>**The mode must match the mode enabled in the connectivity plan**.<br/>For more information, see [Cellular IoT connectivity plan details](../reference-information.md#cellular-iot-connectivity-plan-details) |
| **Cellular AS routing profiles**<br/>Mixed mode|Enables both Message and Direct IP modes.|

For more information about the three modes of the cellular AS routing
profile, see [Configuring a cellular AS routing profile](configure-cellular-as-routing-profile).

**Important** Hardware Security Module (HSM) is not applicable to
cellular devices. When creating or allocating a cellular AS routing
profile, do not activate the Hardware Security Module (HSM) if
available.

## AS routing profiles and application servers mapping

**Cellular in direct IP** mode: There is not mapping to do with application servers. For cellular direct IP mode, the ASR address is directly configured in the context of the AS routing profile.
LoRaWAN®, Cellular message mode AS routing profiles.

**LoRaWAN®** mode, **Cellular message** and **Cellular mixed**: An AS routing profile is required to define how the device's packets are routed to one or more destinations that are application servers. If there are several application servers, device packets are sent to all application servers at the same time. Application servers can be:
* **Local application server**,
* **Supplier application server**
* **ThingPark X destination**.
  
**Important** The connectivity plan associated with the device must
enable the routing parameter corresponding to the application server
destination used by the device. For more information, see [LoRaWAN® unicast connectivity plan details](../reference-information.md#lorawan-unicast-connectivity-plan-details)
or [Cellular IoT connectivity plan details](../reference-information.md#cellular-iot-connectivity-plan-details).
