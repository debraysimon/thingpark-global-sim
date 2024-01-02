---
lang: en-us
sidebar_label:  Managing local application servers
sidebar_position: 10
---

# Managing local application servers

This task is a prerequisite for [Managing AS routing profiles](../manage-as-routing-profiles/index.md). It helps you define
which type of application servers you need for your devices, and
according to your choice, shows you how to handle the local applications
servers that are managed in the Application Servers panel.

This panel only manages local application servers which are application
servers that read-write end-users of a subscriber can create and edit in
Device Manager. If you have read-only access, this topic gives you
background information about all types of applications servers you can
view and the parameters they use. Read more\... For more information,
see [Opening a panel and checking your read-write access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

## About application servers

In ThingPark, an application server is a destination that is used by an
AS routing profile to route device packets to one or more third-party
application servers that:

- Receive uplink packets to exploit the actual data (temperature,
  humidity, location\...) reported by a device.

- Can send downlink packets to command a device.

According to the connectivity of your devices, you can use the following application servers:
* **For LoRaWAN® connectivity:**
  * Local applications servers: LoRaWAN® HTTP application servers or Kafka clusters,
  * Supplier application servers: LoRaWAN® HTTP application servers or Kafka clusters,
  * ThingPark X destinations.
* **For cellular connectivity (message mode and mixed mode)** (*):
  * Local applications servers: Cellular HTTP application servers or Kafka clusters,
  * ThingPark X destinations.

(*) For cellular connectivity in direct IP mode, see [About AS routing profiles types and cellular modes](../manage-as-routing-profiles/index.md#about-as-routing-profiles-types-and-cellular-modes).

## Application servers, destination types and process to follow

According to the application server you want to add in the LoRaWAN® or
cellular AS routing profile, you will have to create or not one or
another of the following application servers. You must have read-write
access.

|  Application server|Destination type|Process to follow|
|---|---|---|
|Subscriber **HTTP application Server**<br/>It can be used for LoRaWAN® and cellular message mode and mixed mode.|HTTP LRC-AS tunneling interface.|**You must create the LoRaWAN® or cellular HTTP application server** before adding it to a LoRaWAN® or cellular AS routing profile. |
|Subscriber **Kafka client**<br/>It can be used for LoRaWAN® and cellular message mode and mixed mode.|Kafka LRC-AS tunneling interface for UL,<br/>HTTP LRC-AS tunneling interface for DL.|**You must create the Kafka cluster**. before adding it to a LoRaWAN® or cellular AS routing profile.|
|Supplier **HTTP application server** / **Kafka client**<br/>This is a shared application server defined by shared suppliers. If you have to use them, go directly to [Managing AS routing profiles](../manage-as-routing-profiles/index.md).|Same as subscriber, see above|Being created when configuring the operator’s platform, **you do not need to create the supplier application server**. If you want to use it as a destination for a LoRaWAN® AS routing profile, go directly to [Managing AS routing profiles](../manage-as-routing-profiles/index.md).|
|**ThingPark X Destination**<br/>This is an shared Actility proprietary Kafka client. It can be used for LoRaWAN® and cellular message mode and mixed mode to route traffic to **ThingPark X IoT Flow**.|Internal|Being created when configuring the operator’s platform, **you do not need to create the ThingPark X destination**. If you want to use it as a destination for a LoRaWAN® or cellular AS routing profile, go directly to [Managing AS routing profiles](../manage-as-routing-profiles/index.md).|

See more [About AS routing profiles types and cellular modes](../manage-as-routing-profiles/index.md#about-as-routing-profiles-types-and-cellular-modes).

**Important** The routing parameter corresponding to the application
server must be enabled in the connectivity plan associated with the
device:

- **Third Party application servers routing** parameter for HTTP
  application server

- **ThingPark Kafka routing** parameter for Kafka cluster

- **ThingPark X routing** parameter for ThingPark X destination.

For more information, see [LoRaWAN® unicast connectivity plan details](../reference-information.md#lorawan®-unicast-connectivity-plan-details)
or [Cellular IoT connectivity plan details](../reference-information.md#cellular-iot-connectivity-plan-details).
