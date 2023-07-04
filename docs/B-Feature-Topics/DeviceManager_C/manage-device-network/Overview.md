---
lang: en-us
sidebar_label: Managing the device network
sidebar_position: 6
---

# Managing the device network

The Network panel of a device lets you manage and monitor the network
settings of a device. They set the device to manage the connection:

- Between the device and the network subscription using a connectivity
  plan

- Between the device and the network routing or ThingPark X routing
  using an AS routing profile.

Connectivity plan and AS routing profile must be associated with the
device to make it work on the network. You can do it when creating the
device or in the Network panel of a device for existing devices.

The Network panel also provides additional information to monitor the
daily network subscription overflow of the device and the device network
coverage.

If you have read-only access to Device Manager, the information
displayed is read-only. Read more\... For more information, see [Opening
a panel and checking your read-/write
access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

If no device has been yet created by you or other end-users of your
subscriber account, you cannot display the Network panel of a device.

## About the Network panel

The Network panel of a device displays the network settings of a device
that you can view or edit:

- **In view mode**, the Network panel provides read-only information
  with several frames about:

  - The network subscription including:

    The connectivity plan associated with the device, the date of the
    first network attachment of the device, and charts showing the daily
    network subscription overflow for the **Last 7 days**, **Last 15
    days**, **Last 1 month**, and **Last 2 months**.

  - The AS routing profile associated with the device

  - A map of the network coverage of the device.

- **In edit mode** which is only available for read-write access, you
  can:

  - **Allocate**, **Change**, and **Remove** the connectivity plan and
    the AS routing profile associated with the device.

    **Important** Hardware Security Module (HSM) is not applicable to
    cellular devices. When creating or allocating a cellular AS routing
    profile, do not activate the Hardware Security Module (HSM) if
    available.

|                          | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Connectivity plan**    | Defines the technical conditions under which a device can connect onto the network consisting of selected network partners. It allows subscribers to know what is included in their fees. There are LoRaWAN® and cellular connectivity plans. LoRaWAN® connectivity plans can support device's class A, B, and C models. For more information, see [Viewing connectivity plans](../view-connectivity-plans.md). |
| **AS routing profile**   | This is a configuration entity to set one or more application servers\* that will receive uplink packets from the device and send downlink packets to the device. For more information, see [Managing AS routing profiles](../manage-as-routing-profiles/index.md).                                                                                                                                             |
| **Application Server** | This is a server that collects data from devices (example: temperature, smoke, location) and transmits data to the device (example: device configuration commands) via an AS routing profile, a network server and base stations of the IoT network. For more information, see [Managing local application servers](../manage-local-application-servers/index.md).                                              |
