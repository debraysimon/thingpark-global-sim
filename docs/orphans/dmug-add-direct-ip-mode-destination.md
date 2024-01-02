
# Adding a direct IP mode destination

It consists in adding an ASR address that will route the packets to a
server.

The information is provided by the supplier of the application server
router.

| Required    |
|-------------|
| ASR address |

**Before you begin**

- You must have read-write access to Device Manager. Read more\... For
  more information, see [Opening a panel and checking your read-write access](../device-manager-user-guide/use-interface.md#opening-a-panel-and-checking-your-read-write-access).

- The cellular AS routing profile must be opened in edit mode.

1.  In the AS routing profile frame, select **Direct IP only** from the
    **Mode** list.

    -\> The AS routing profile panel appears with direct IP mode
    configuration.

2.  In the Direct IP mode destinations frame, enter in the **ASR
    address** box the IPv4 address of the application server router.

3.  Click **Save**.

    -\>The Status frame is updated with your last modifications.

    -\>The cellular AS routing profile in direct IP mode is ready to be
    allocated to a cellular device:

    - Either when creating the device.  
      For more information, see [Creating devices](../device-manager-user-guide/create-devices/index).

    - Or after you have created the device.  
      For more information, see [Managing the AS routing profile of a device](../device-manager-user-guide/manage-device-network/manage-as-routing-profile-device)
      or [Changing the AS routing profile](../device-manager-user-guide/manage-device-network/manage-as-routing-profile-device.md#changing-the-as-routing-profile).
