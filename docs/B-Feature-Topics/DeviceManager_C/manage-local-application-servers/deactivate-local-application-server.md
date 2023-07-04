---
lang: en-us
sidebar_label: Deactivating a local application server
sidebar_position: 5
---

# Deactivating a local application server

When created, a local application server is active. If you have a local
application server without any uplink or downlink traffic or if you want
to stop the activity of the application server, you can deactivate it
without dissociating it from the devices and AS routing profiles it is
related:

- Uplink packets will not be forwarded to the application server

- The application server will not be able to send downlink payloads.

It applies to all local application servers: LoRaWAN® HTTP application
server, cellular HTTP application server, and Kafka cluster. ThingPark X
destinations and supplier applications servers are always active.

You can also reactivate a local application server if needed. The
activation and deactivation dates of the application servers are
reported to your operator. This task shows you how to deactivate the
local application server. Reactivating it is similar.

You must have read-write access to Device Manager. Read more\... For
more information, see [Opening a panel and checking your read-/write
access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

 

1.  Click **Application Servers** on the navigation panel to open the
    Application Servers panel.

2.  In the Application Servers frame, at the end of the row of the
    application server you want to deactivate, click **Edit**.

    -\> The Application server panel opens.

3.  In the Application Server frame, select **Deactivated** from the
    **Status** list.

    ![](./_images/changing-the-content-type.png)

4.  Click **Save**.

5.  In the confirmation message that appears, click **Yes**.

6.  Click **Close**.

7.  In the Application servers frame that appears, click **Refresh** ![](./../_images/deleting-an-object.gif)

    -\> The application server appears as **Deactivated** in the list.
