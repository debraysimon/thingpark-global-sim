---
lang: en-us
sidebar_label: Changing the device model
sidebar_position: 2
---

# Changing the device model

You can change the model of a device for a model compatible with the
model used when creating the device. Compatible models are suggested.

You must have read-write access to Device Manager.Read more\... For more
information, see [Opening a panel and checking your read-write
access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

For a LoRaWAN® device:

- A compatible model supports the same MAC layer type and the same
  LoRaWAN® version.

- If using an external Join Server, a LoRaWAN® compatible model supports
  the same MAC layer type.

**Note** If when creating the device, you have selected a wrong model,
you will be suggested models that are compatible with this model. In
that case, delete the device then create it again with the appropriate
model.

For more information, see [More about models and
manufacturers](#more-about-models-and-manufacturers).

1.  Open a device in edit mode.

2.  In the **Manufacturer** list of the Device frame, select the
    manufacturer you want.

    -\> It populates the **Model** list with models of the manufacturer
    that are compatible with the current model of the device.

3.  In the **Model** list, select the compatible model you want. If
    defined by your operator, the model name is followed by the
    supported ISM bands.

4.  If the manufacturer you have selected does not display any model in
    the **Model** list or if the model you want is not in the list,
    select another manufacturer. Repeat if necessary.

5.  Click **Save**.

## More about models and manufacturers

The model of the device defines the generic information of capabilities
and configuration of the device, such as the MAC layer type, the
LoRaWAN® version and the device class for a LoRaWAN® device. If defined
by your operator, the model name is followed by the supported ISM bands.

Your operator creates, manages and groups models by manufacturer. A
manufacturer is a label that is used as a category to filter models like
this:

- When creating a device, all models of the manufacturer are available.

- When a device has been created, only models of the manufacturer that
  are compatible with the model selected when creating the device are
  available.

**Note** For devices being developed, a manufacturer can also be used as
a label (example: Generic) that gathers models having the same
specifications (for example: LoRaWAN® 1.0 – Class A – RX2 SF10).

If your operator modifies the technical details of a device model, all
existing associated devices and their behavior are modified accordingly.
For more information about the manufacturers and models you can use,
contact your operator.
