# Using ThingPark Location API
ThingPark Location provides developers with a comprehensive set of web-services based on the ThingPark DX framework.
The following API are to be considered when interfacing with ThingPark Location.

## Push locations to external application server

This section outlines the basic steps to configure ThingPark Location to send locations to external application server.

1. The first step is to authenticate with ThingPark Location using your credentials. If you are using community platform, see [here](https://dx-api.thingpark.io/getstarted/#/). For other platforms, see [here](/ThingParkLocationURLs/#how-to-create-a-free-account).

<img src="./images/GenerateToken.png" width="800px" border="1" />

2. Once authenticated, you can access the ThingPark Location API documentation and swagger UI to interact with APIs.

<img src="./images/TPXLEDocSwagger.png" width="800px" border="1" />

2. Goto Connector module and configure the URL of the external application server.

<img src="./images/PushConnectorConfiguration.png" width="800px" border="1" />

ThingPark Location will post JSON object [ResolvedPosition](https://dx-api.thingpark.io/location-connector/latest/doc/index.html#resolvedposition) to the external application server for the future positions sent by the tracker.

```
{
  "deviceEUI" : "20635f028100003e",
  "time" : "2022-09-02T08:04:25.731Z",
  "customerId" : "100009247",
  "modelCfg" : "1:TPX_ba3df8fb-bc93-45ee-aa0d-b2f873b9bbc6",
  "dxProfileId" : "community-api",
  "coordinates" : [ 103.924992, 1.3143296, 0.0 ],
  "age" : 0,
  "validityState" : "NEW",
  "horizontalAccuracy" : 129,
  "incomingSubscriberId" : "100009247",

....

}
```

tpxle-alarm-geofence-entering.json
tpxle-alarm-geofence-leaving.json
tpxle-output-configuration.json
tpxle-output-event-geofencing-entry.json
tpxle-output-event-geofencing-exit.json
tpxle-output-event-geofencing-hazard.json
tpxle-output-event-geofencing-safe.json
tpxle-output-event-geoloc-start.json
tpxle-output-event-motion-end.json
tpxle-output-event-motion-start.json
tpxle-output-event-sos-mode-start.json
tpxle-output-event-sos-mode-stop.json
tpxle-output-heartbeat.json
tpxle-output-position-ble.json
tpxle-output-position-gps.json
tpxle-output-position-gps_timeout.json
tpxle-output-position-lpgps.json
tpxle-output-position-lpgps-no_position.json
tpxle-output-position-lpgps-unresolved.json
tpxle-output-position-wifi.json
tpxle-output-scancollection-ble-eddystone-id.json
tpxle-output-scancollection-ble-mac.json
tpxle-output-scancollection-wifi.json
tpxle-output-shock_detection.json
tpxle-output-shutdown.json



| Use Case | Example JSON Object | Object type | 
| ------------ | -------- | -------- | 
| **Example JSON [geofenceAlarm](https://dx-api.thingpark.io/location-connector/latest/doc/index.html#geofencealarm) object sent when entering Geofence** | [here](/tpxle-sample-payloads-main_R/tpxle-alarm-geofence-entering.md) | For more information on setting up Geofence, see [ThingPark Location Introduction (Section: Setting up Geofencing)](/DocLibrary_R/ThingParkLocationEngine_R.md#thingpark-x-location-engine-trainings) |  
| **Example JSON [geofenceAlarm](https://dx-api.thingpark.io/location-connector/latest/doc/index.html#geofencealarm) object sent when leaving Geofence** | [here](/tpxle-sample-payloads-main_R/tpxle-alarm-geofence-leaving.md) | For more information on setting up Geofence, see [ThingPark Location Introduction (Section: Setting up Geofencing)](/DocLibrary_R/ThingParkLocationEngine_R.md#thingpark-x-location-engine-trainings) | 
| **Example JSON [ResolvedTracker](https://dx-api.thingpark.io/location-connector/latest/doc/index.html#resolvedtrackerasassettracker) object sent when the tracker sends its configuration parameters** | [here](/tpxle-sample-payloads-main_R/tpxle-output-configuration.md) | The tracker sends its configuration when either there is change of its [configuration parameter](/AbeewayRefGuide/downlink-messages/parameters-configuration/) by sending LoRaWAN downlink or when the parameter values are requested by sending [device configuration downlink](/AbeewayRefGuide/downlink-messages/request-device-configuration/) |  
| **Example [geofencingNotification](https://dx-api.thingpark.io/location-connector/latest/doc/index.html#geofencingnotification) JSON object sent when entering/exiting the different BLE geozones.** | [BLE Geozoning entry](/tpxle-sample-payloads-main_R/tpxle-alarm-geofence-entering.md)<br/>[BLE Geozoning exit](/tpxle-sample-payloads-main_R/tpxle-alarm-geofence-exit.md)<br/>[BLE Geozoning hazard](/tpxle-sample-payloads-main_R/tpxle-alarm-geofence-hazard.md)<br/>[BLE Geozoning safe](/tpxle-sample-payloads-main_R/tpxle-alarm-geofence-safe.md)| This JSON object is related to BLE Geozoning feature. For more details about BLE Geozoning feature, see [BLE Geozoning](/DocLibrary_R/AbeewayTrackers_R.html#abeeway-firmware-trainings) and [AN-011_BLE_geozoning](/DocLibrary_R/AbeewayTrackers_R.md#application-notes) |  



## DX Admin API
DX Admin API provides a standard-based token management and administration features for the ThingPark DX API platform.
### Useful links

| DX Admin API | Resource | 
| ------------ | -------- | 
| **DX Admin Swagger UI** | [https://dx-api.thingpark.io/admin/latest/swagger-ui/index.html?shortUrl=tpdx-admin-api-contract.json](https://dx-api.thingpark.io/admin/latest/swagger-ui/index.html?shortUrl=tpdx-admin-api-contract.json) | 
| **DX Admin latest documentation** | [https://dx-api.thingpark.io/admin/latest/doc/index.html](https://dx-api.thingpark.io/admin/latest/doc/index.html) | 

## DX Location API
The purpose of this API is to provide the best experience for all developers who intend to interface their application with ThingPark Location features.
### Modules

<html>
<table>
    <tr>
        <th>
            Module
        </th>
        <th>
            Description
        </th>
    </tr>
    <tbody>
    <tr>
        <td>
            <strong>Binder module</strong>
        </td>
        <td>
            <p>API providing binder configuration and query capabilities on top of theThingPark Location solution.The Binder module has:</p>
            <ul>
                <li>
                    Southbound interface ofThingPark Location , usually interfacing with LoRaWAN® network servers.
                </li>
                <li>
                    Feed API interface to integrate with third party LoRaWAN® network servers.
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Tracker command module</strong>
        </td>
        <td>
            <p>Tracker command operations are used to send downlink commands to supported Abeeway trackers.</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Connector module</strong>
        </td>
        <td>
            <p>API providing connector configuration capabilities on top of the ThingPark Location solution.The Binder module has the northbound interface of ThingPark Location, usually interfacing with IoT application servers.</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Driver module</strong>
        </td>
        <td>
            <p>API providing ability to encode or decode Abeeway tracker payloads.</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Alarm configuration module</strong>
        </td>
        <td>
            <p>API providing operations to enable notifications on tracker parameters and configure geofences.</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Firmware Update module</strong>
        </td>
        <td>
            <p>API providing operations to retrieve the firmware binaries</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Key Management module</strong>
        </td>
        <td>
            <p>API providing operations to store the Keys for Operator interface configuration to integrate with LoRaWAN® Network servers</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Notification module</strong>
        </td>
        <td>
            <p>API providing operations to configure push notifications to be sent to the Abeeway Mobile APP</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Profile Management module</strong>
        </td>
        <td>
            <p>API providing operations to manage the profiles of Abeeway trackers</p>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Location Integration module</strong>
        </td>
        <td>
            <p>API providing operations to register/de-register the tracker to the Abeeway Mobile APP</p>
        </td>
    </tr>
    </tbody>
</table>
</html>

### Useful links

| DX Location API | Resource | 
| --------------- | -------- | 
| **DX Location Swagger UI** | [https://dx-api.thingpark.io/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json](https://dx-api.thingpark.io/location/latest/swagger-ui/index.html?shortUrl=tpdx-location-api-contract.json) | 
| **DX Location - Binder module documentation** | [https://dx-api.thingpark.io/location/latest/doc/index.html](https://dx-api.thingpark.io/location/latest/doc/index.html) | 
| **DX Location - Tracker Command module documentation** | [https://dx-api.thingpark.io/location-trackercommand/latest/doc/index.html](https://dx-api.thingpark.io/location-trackercommand/latest/doc/index.html) | 
| **DX Location - Connector module documentation** | [https://dx-api.thingpark.io/location-connector/latest/doc/index.html](https://dx-api.thingpark.io/location-connector/latest/doc/index.html) | 
| **DX Location - Driver Module documentation** | [https://dx-api.thingpark.io/location-driver/latest/doc/index.html](https://dx-api.thingpark.io/location-alarm-config/latest/doc/index.html) | 
| **DX Location - Alarm Config module documentation** | [https://dx-api.thingpark.io/location-alarm-config/latest/doc/index.html](https://dx-api.thingpark.io/location-alarm-config/latest/doc/index.html) | 
| **DX Location - Location Integration Module documentation** | [https://dx-api.thingpark.io/location-integration-module/latest/doc/index.html](https://dx-api.thingpark.io/location-integration-module/latest/doc/index.html) | 
| **DX Location - Key Management Module documentation** | [https://dx-api.thingpark.io/location-key-management/latest/doc/index.html](https://dx-api.thingpark.io/location-key-management/latest/doc/index.html) | 
| **DX Location - Notification Module documentation** | [https://dx-api.thingpark.io/location-notification/latest/doc/index.html](https://dx-api.thingpark.io/location-notification/latest/doc/index.html) | 
| **DX Location - Firmware Update Module documentation** | [https://dx-api.thingpark.io/abeeway-firmware-update/latest/doc/index.html](https://dx-api.thingpark.io/abeeway-firmware-update/latest/doc/index.html) | 
| **DX Location - Profile Management Module documentation** | [https://dx-api.thingpark.io/location-profile-management/latest/doc/index.html](https://dx-api.thingpark.io/location-profile-management/latest/doc/index.html) | 

You can find more information on using ThingPark Location API, [ThingPark Location Training](https://actilitysa.sharepoint.com/:f:/t/aby/EqVIEMaqJfVHoNAi90G068UB8K4HMfB1t2eyttWIGlIwbQ?e=aqnuDd).

If you are using some other ThingPark Location platform, see [ThingPark Location Platform URLs](/ThingParkLocationURLs/)

