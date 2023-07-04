---
lang: en-us
sidebar_label: Searching multicast groups
sidebar_position: 1
---

# Searching multicast groups

There is two ways to search for multicast groups: searching them all or
using filters.

This task is mandatory to open a multicast group in edit or view mode to
perform a closer monitoring on its activity. The edit mode is only
available for end-users with read-write access. Read more\... For more
information, see [Opening a panel and checking your read-write
access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

## Searching and viewing all the multicast groups of your network

You can have a global view of all the multicast groups created on your
network by searching them all. It gives you a first level of monitoring
on their overall activity.

They are displayed in a list that you can manage by showing/hiding
columns and by sorting or filtering contents. If you have read-write
access, you can also delete the multicast group from the list if
necessary. Read more\... For more information, see [Opening a panel and
checking your read-write
access](../use-interface.md#opening-a-panel-and-checking-your-read-write-access).

Alternatively, if you want to filter multicast groups, see [Searching
multicast groups using
filters](#searching-multicast-groups-using-filters).

 

1.  In the navigation panel, click **Multicast groups**.

    -\> The Multicast Groups panels appears.

    -\> It displays in the result area of the Search frame all the
    multicast groups created on your network.

2.  Check the following information about the multicast groups:

| Column              | Description                                                                                                                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Group Name**      | Name of the multicast group.                                                                                                                                                                     |
| **DevEUI/DevAddr**  | DevEUI of the multicast group/DevAddr of the multicast group.                                                                                                                                    |
| **Tag names**       | Tag names corresponding to base stations groups associated with the multicast group.                                                                                                             |
| **Connectivity**    | Name of the multicast connectivity plan /Name of the AS routing profile associated with the multicast group.                                                                                     |
| **Average packets** | Average number of multicast downlink packets/day managed by the multicast group.                                                                                                                 |
| **Alarm**           | Number of alarms of the multicast group that are not acknowledged with color indicating state and severity level. For more information, see [Managing alarms](../manage-device-alarms/index.md). |

1.  If you want to manage contents in the list, hover your mouse over a
    column header and click the arrow that appears, then select the
    command you want from the menu:

    - **Sort Ascending**: Sorts the contents of the column in ascending
      order.

    - **Sort Descending**: Sorts the contents of the column in
      descending order.

    - **Columns**: Shows/hides columns in the list.

    - **Filters**: Lets you enter a term to search in the whole column.

## Searching multicast groups using filters

You can search multicast groups of your network using filters.

 

1.  In the navigation panel, click **Multicast groups**.

    -\> The Multicast Groups panels appears.

2.  In the Search frame, enter or select the following information in
    the filter you want to restrict your search:

| Filter                | Description                                                                                                                                           |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Identifier**        | Name, DevEUI or DevAddr of the multicast group. This box is case sensitive.                                                                           |
| **Tag**               | When you start typing a string, suggests existing base station tags associated with the multicast groups of your network. This box is case sensitive. |
| **Connectivity plan** | Multicast connectivity plans associated with the multicast group of your network**. Not activated** means no connectivity plan associated.            |
| **Alarm**             | Alarm state corresponding to a severity level. For more information, see [Alarm states](../manage-device-alarms/index.md#alarm-states).               |

1.  Click **Search**.

    -\> The result of your search appears in the list area of the Search
    frame. For more information on this result, see [Searching and
    viewing all the multicast groups of your
    network](#searching-and-viewing-all-the-multicast-groups-of-your-network)
    from step 2.
