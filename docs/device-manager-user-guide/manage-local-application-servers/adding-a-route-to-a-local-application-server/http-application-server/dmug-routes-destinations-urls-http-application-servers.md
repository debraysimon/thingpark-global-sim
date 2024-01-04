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

|                                      | Number of routes                                           | Number of destination URLs per route                                                                                                                                                                                                                                                         |
| ------------------------------------ | --------------------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **LoRaWAN® HTTP application server** | **One or more routes***<br/>*Only define several routes if you want to direct and distribute uplink reports according to the FPort. | It is defined by your operator when installing your platform. The default values are:<ul><li><p>**Sequential strategy**: RECOMMENDED<br/>Maximum 5 destination URLs per route.</p></li><li><p>**Blast strategy**: WILL BE DEPRECATED<br/>Maximum 3 destination URLs per route.</p></li></ul> |
| **Cellular HTTP application server** | **Only one route**                                        | //                                                                                                                                                                                                                                                                                           |
