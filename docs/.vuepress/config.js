const fs = require('fs');
var version = fs.readFileSync('version.txt', 'utf8').trim();

module.exports = {
    theme: getPackage().theme,
    title: getTitle,
    // theme:'display',
    base: getBase(false),

    head: [
        ['link', {rel: 'icon', href: `/public/favicon.png`}],
    ],

    themeConfig: {
        emojicomKey: 'JKN7UJE9vH0X4wBRXGPi',
        repo: 'https://github.com/actility/thingpark-global-sim',
        repoLabel: 'Contribute!',
        docsRepo: 'https://github.com/actility/thingpark-global-sim',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit on GitHub',

        lastUpdated: 'Last Updated',

        logo: getPackage().banner,

        sidebar: {
            'NOW': [
                {
                    title: 'theme version',   // required
                    path: '/NOW/',      // optional, link of the title, which should be an absolute path and must exist
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                },
            ],
            'Home':[
                {
                    path:'/Home/',
                }
            ],
            '/': [
                {
                    title: 'ThingPark Global SIM overview',
                    children: [
                        {
                            title: 'Overview',
                            path: '/B-Feature-Topics/TP-Global-Sim_C/Overview'
                        },
                        {
                            title: 'ThingPark Wireless overview',
                            path: '/B-Feature-Topics/overview-tpw/Overview'
                        },
                        {
                            title: 'ThingPark Cellular overview',
                            path: '/B-Feature-Topics/TP-Global-Sim_C/EPCC_Overview',
                        },
                    ],
                },
                {
                    title: 'Getting started',
                    children: [
                        {
                            title: 'Modes of communication',
                            path: '/B-Feature-Topics/Getting Started/modes_of_communication',
                        },
                        {
                            title: 'Overview',
                            path: '/B-Feature-Topics/Getting Started/Overview',
                        },
                    ],
                },
                {
                    title: 'Device Manager User Guide',
                    collapsable: true,
                    children: [
                        {
                            title: 'Overview',
                            path: '/B-Feature-Topics/DeviceManager_C/Overview',
                        },
                        {
                            title: 'Logging in Device Manager',
                            path: '/B-Feature-Topics/DeviceManager_C/log-in',
                        },
                        {
                            title: 'Using the interface',
                            path: '/B-Feature-Topics/DeviceManager_C/use-interface',
                        },
                        {
                            title: 'Creating devices',
                            path: '/B-Feature-Topics/DeviceManager_C/create-devices/Overview',
                            children: [
                                {
                                    title: 'Creating a LoRaWAN device',
                                    path: '/B-Feature-Topics/DeviceManager_C/create-devices/create-lorawan-device'
                                },
                                {
                                    title: 'Creating a cellular device',
                                    path: '/B-Feature-Topics/DeviceManager_C/create-devices/create-cellular-device',
                                },
                                {
                                    title: 'Importing LoRaWAN or cellular devices',
                                    path: '/B-Feature-Topics/DeviceManager_C/create-devices/import-lorawan-cellular-devices',
                                },
                            ],
                        },
                        {
                            title: 'Managing a fleet of devices',
                            path: '/B-Feature-Topics/DeviceManager_C/manage-device-fleet',
                        },
                        {
                            title: 'Managing a device',
                            path: '/B-Feature-Topics/DeviceManager_C/manage-a-device/Overview',
                            children: [
                                {
                                    title: 'Checking the device settings and activity',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-a-device/check-device-settings-activity'
                                },
                                {
                                    title: 'Editing the device name and administrative information',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-a-device/edit-device-name-and-administrative-info',
                                },
                                {
                                    title: 'Changing the device model',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-a-device/change-device-model',
                                },
                                {
                                    title: 'Viewing the battery history',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-a-device/view-battery-history',
                                },
                                {
                                    title: 'Locating a device',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-a-device/locate-device',
                                },
                                {
                                    title: 'Deleting a device',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-a-device/delete-device',
                                },
                            ],
                        },
                        {
                            title: 'Managing the device network',
                            path: '/B-Feature-Topics/DeviceManager_C/manage-device-network/Overview',
                            children: [
                                {
                                    title: 'Monitoring the device network',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-device-network/monitor-device-network'
                                },
                                {
                                    title: 'Managing the connectivity plan of a device',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-device-network/manage-connectivity-plan-device',
                                },
                                {
                                    title: 'Managing the AS routing profile of a device',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-device-network/manage-as-routing-profile-device',
                                },
                            ],
                        },
                        {
                            title: 'Managing alarms',
                            path: '/B-Feature-Topics/DeviceManager_C/manage-device-alarms/Overview',
                            children: [
                                {
                                    title: 'Monitoring alarms',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-device-alarms/monitor-device-alarms'
                                },
                                {
                                    title: 'Troubleshooting devices',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-device-alarms/troubleshoot-devices',
                                },
                                {
                                    title: 'Acknowledging alarms',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-device-alarms/acknowledge-alarms',
                                },
                                {
                                    title: 'Configuring alarms',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-device-alarms/configure-alarms',
                                },
                            ],
                        },
                        {
                            title: 'Doing multicast',
                            path: '/B-Feature-Topics/DeviceManager_C/do-multicast/Overview',
                            children: [
                                {
                                    title: 'Accessing a multicast group',
                                    path: '/B-Feature-Topics/DeviceManager_C/do-multicast/create-multicast-group-associated-base-stations-group'
                                },
                                {
                                    title: 'Searching multicast groups',
                                    path: '/B-Feature-Topics/DeviceManager_C/do-multicast/search-multicast-groups',
                                },
                                {
                                   title: 'Managing a multicast group',
                                   path: '/B-Feature-Topics/DeviceManager_C/do-multicast/management/Overview',
                                   children: [
                                      {
                                         title: 'Accessing a multicast group',
                                         path: '/B-Feature-Topics/DeviceManager_C/do-multicast/management/access-multicast-group'
                                      },
                                      {
                                         title: 'Managing the general settings of a multicast group',
                                         path: '/B-Feature-Topics/DeviceManager_C/do-multicast/management/manage-general-settings-multicast-group'
                                      },
                                      {
                                        title: 'Managing the network settings of a multicast group',
                                        path: '/B-Feature-Topics/DeviceManager_C/do-multicast/management/manage-network-settings-multicast-group'
                                      },
                                      {
                                        title: 'Managing the alarms of a multicast group',
                                        path: '/B-Feature-Topics/DeviceManager_C/do-multicast/management/manage-alarms-multicast-group',
                                      },
                                      {
                                        title: 'Deleting a multicast group',
                                        path: '/B-Feature-Topics/DeviceManager_C/do-multicast/management/delete-multicast-group',
                                      },
                                   ],
                                },
                            ],
                        },
                        {
                            title: 'Viewing connectivity plans',
                            path: '/B-Feature-Topics/DeviceManager_C/view-connectivity-plans',
                        },
                        {
                            title: 'Managing local application servers',
                            path: '/B-Feature-Topics/DeviceManager_C/manage-local-application-servers/Overview',
                            children: [
                                {
                                    title: 'Accessing application servers',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-local-application-servers/access-application-servers'
                                },
                                {
                                    title: 'Creating a local application server',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-local-application-servers/create-local-application-server',
                                },
                                {
                                   title: 'Changing the content type of a local application server',
                                   path: '/B-Feature-Topics/DeviceManager_C/manage-local-application-servers/change-content-type-local-application-server',
                                },
                                {
                                    title: 'Activating the security of a local application server',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-local-application-servers/activate-security-local-application-server',
                                },
                                {
                                    title: 'Adding a route to a local application server',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-local-application-servers/add-route-to-local-application-server',
                                },
                                {
                                    title: 'Deactivating a local application server',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-local-application-servers/deactivate-local-application-server',
                                },
                            ],
                        },
                        {
                            title: 'Managing AS routing profiles',
                            path: '/B-Feature-Topics/DeviceManager_C/manage-as-routing-profiles/Overview',
                            children: [
                                {
                                    title: 'Accessing AS routing profiles',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-as-routing-profiles/access-as-routing-profiles'
                                },
                                {
                                    title: 'Creating a LoRaWAN® or a cellular AS routing profile',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-as-routing-profiles/create-lorawan-or-cellular-as-routing-profile',
                                },
                                {
                                   title: 'Adding a destination to a LoRaWAN® AS routing profile',
                                   path: '/B-Feature-Topics/DeviceManager_C/manage-as-routing-profiles/add-destination-to-lorawan-as-routing-profile',
                                },
                                {
                                    title: 'Configuring a LoRaWAN® AS routing profile for HSM',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-as-routing-profiles/configure-lorawan-as-routing-profile-for-hsm',
                                },
                                {
                                    title: 'Configuring a cellular AS routing profile',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-as-routing-profiles/configure-cellular-as-routing-profile',
                                },
                                {
                                    title: 'Changing the default AS routing profile',
                                    path: '/B-Feature-Topics/DeviceManager_C/manage-as-routing-profiles/change-default-as-routing-profile',
                                },
                            ],
                        },
                        {
                            title: 'Device manager settings',
                            path: '/B-Feature-Topics/DeviceManager_C/device-manager-settings',
                        },
                        {
                            title: 'Reference information',
                            path: '/B-Feature-Topics/DeviceManager_C/reference-information',
                        },
                        {
                            title: 'Documentation library',
                            path: '/B-Feature-Topics/DeviceManager_C/documentation-library',
                        },
                    ],
                },
                {
                    title: 'Wireless logger user guide',
                    collapsable: true,
                    children: [
                        {
                            title: 'Overview',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/overview',
                        },
                        {
                            title: 'Logging in',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/log-in-wireless-logger',
                        },
                        {
                            title: 'Viewing',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/viewing/Overview',
                            children: [
                               {
                                    title: 'Switching between technologies',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/viewing/switch-technologies-tpw',
                               },
                               {
                                    title: 'Viewing the traffic',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/viewing/view-traffic',
                               },
                               {
                                    title: 'Extending the dashboard',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/viewing/extend-dashboard.md',
                               },
                            ],
                        },
                        {
                            title: 'Filtering',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/filtering/Overview',
                            children: [
                               {
                                    title: 'Searching packets',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/filtering/search-packets',
                               },
                               {
                                    title: 'Quick filtering',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/filtering/quick-filtering',
                               },
                               {
                                    title: 'Sorting packets',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/filtering/sort-packets',
                               },
                               {
                                    title: 'Autoreloading search',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/filtering/autoreload',
                               },
                            ],
                        },
                        {
                            title: 'Analyzing',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/analyzing/Overview',
                            children: [
                               {
                                    title: 'Expanding packets',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/analyzing/expand-packets',
                               },
                               {
                                    title: 'Packet and payload',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/analyzing/packet-and-payload',
                               },
                               {
                                    title: 'Decoding LoRaWAN® payloads',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/analyzing/decode-lorawan-payload',
                               },
                               {
                                    title: 'Decoding cellular payloads',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/analyzing/decode-cellular-payload-tpw',
                               },
                            ],
                        },
                        {
                            title: 'Localizing',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/localizing/Overview',
                            children: [
                               {
                                    title: 'Localizing base stations',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/localizing/localize-base-stations',
                               },
                               {
                                    title: 'Displaying the device trip',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/localizing/display-device-trip',
                               },
                            ],
                        },
                        {
                            title: 'Exporting packets',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/export',
                            collapsable: true,
                        },
                        {
                            title: 'LoRaWAN traffic',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/Overview',
                            children: [
                               {
                                    title: 'LoRaWAN® traffic overview',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/lorawan-traffic-overview',
                               },
                               {
                                    title: 'Uplink LoRaWAN® packets',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/uplink-lorawan-packets',
                               },
                               {
                                    title: 'Downlink LoRaWAN® unicast packets ',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/downlink-lorawan-unicast-packets',
                               },
                               {
                                    title: 'Downlink LoRaWAN® multicast packets',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/downlink-lorawan-multicast-packets',
                               },
                               {
                                    title: 'Passive roaming LoRaWAN® packets',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/passive-roaming-lorawan-packets',
                               },
                               {
                                    title: 'Location reports',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/location-reports',
                               },
                               {
                                    title: 'Device reset reports',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/device-reset-reports',
                               },
                               {
                                    title: 'LoRaWAN® export file',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/lorawan-traffic/lorawan-export-file',
                               },
                            ],
                        },
                        {
                            title: 'Cellular traffic',
                            path: '/B-Feature-Topics/network-tools/wireless-logger/cellular-traffic-tpw/Overview',
                            children: [
                               {
                                    title: 'Cellular traffic overview',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/cellular-traffic-tpw/cellular-traffic-overview',
                               },
                               {
                                    title: 'Cellular traffic',
                                    path: '/B-Feature-Topics/network-tools/wireless-logger/cellular-traffic-tpw/cellular-traffic-details',
                               },
                            ],
                        },
                    ],
                },
                {
                    title: 'Integrating applications with ThingPark Wireless',
                    collapsable: true,
                    children: [
                        {
                            title: 'Overview',
                            path: 'https://docs.thingpark.com/thingpark-wireless/7.2/docs/user-guide-tpw/integrating-applications-with-tpw',
                        },
                    ],
                },
                {
                    title: 'Managing Security',
                    collapsable: true,
                    children: [
                        {
                            title: 'Overview',
                            path: 'https://docs.thingpark.com/thingpark-wireless/7.2/docs/user-guide-tpw/managing-security',
                        },
                    ],
                },
                {
                    title: 'Documentation library',
                    collapsable: true,
                    children: [
                        {
                            title: 'Overview',
                            path: '/D-Reference/DocLibrary_R/',
                        },
                    ],
                },
                {
                    title: 'Troubleshooting & Support',
                    collapsable: true,
                    children: [
                        {
                            title: 'FAQ',
                            path: '/D-Reference/FAQ_R/',
                        },
                    ],
                },
                {
                    title: 'Use Cases',
                    collapsable: true,
                    children: [
                        {
                            title: 'Setup cellular backhaul with LoRaWAN Gateway',
                            path: '/D-Reference/UseCaseLoRaBackhaul/',
                        },
                    ],
                },
            ],
        }
    },
}

function getPackage() {
    var options = {}
    const resultPackages = require('minimist')(process.argv.slice(2))._[2]
    if (resultPackages) {
        switch (resultPackages) {
            case 'abeeway':
                options['theme'] = resultPackages
                options['banner'] = '/img/DesktopBanner-' + resultPackages + '.png'
                return options
            default:
                options['theme'] = resultPackages
                options['banner'] = '/img/DesktopBanner-' + resultPackages + '.png'
                return options
        }
    } else {
        options['theme'] = 'actility'
        options['banner'] = '/img/DesktopBanner-actility.png'
        return options
    }
}

function getTitle() {
    return 'ThingPark Global SIM (' + version + ')';
}

function getBase(printVersion) {
    if (printVersion) {
        if (version.endsWith("-SNAPSHOT")) {
            return "/thingpark-global-sim/";
        }
        var rx = /([0-9]*\.[0-9]*).*/g;
        var result = rx.exec(version);
        return "/thingpark-global-sim/" + result[1] + "/";
    } else {
        return "/thingpark-global-sim/";
    }
}
