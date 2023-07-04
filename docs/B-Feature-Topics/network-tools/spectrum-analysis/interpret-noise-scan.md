---
lang: en-us
sidebar_label: How to interpret a Noise Scan Result
sidebar_position: 5
---

# How to interpret a Noise Scan Result

This section gives some guidelines on how to interpret a noise scan
result with general indications and troubleshooting advices.

## General Indications

For a clear and accurate view of the result, plot a logarithmic average
graph.

About the values themselves:

The thermal noise floor is -174 dBm/Hz, which gives a theoretical and
expected noise level of noise level of -120 dBm because -174 dBm/Hz
gives -123 dBm/125 kHz + 3 dBm of Noise Factor = -120 dBm

The lower the RSSI measured by the Base Station, the better.

Following are some reference values for channels using **125 kHz
bandwidth**:

- \< -130dBm: impossible result. The RSSI measured by the Base Station
  should not be even lower than the thermal noise floor (around
  -120dBm).

- -130 to -120 dBm: wrong result. The RSSI measured by the Base Station
  should not be even lower than the thermal noise floor (around
  -120dBm). Probably a measurement issue on the Base Station.

- -120 to -110 dBm: excellent result. No signal or interferences around
  the Base Station.

- -110 to -100 dBm: very good result. Very few interferences around the
  Base Station.

- -100 to -95 dBm: good result. Little interferences around the Base
  Station, but not disturbing the Base Station.

- \> -95 dBm: bad result. Signal coming from an end-device or strong
  interferences around the Base Station. Do not use the corresponding
  channel.

- ≥ 0 dBm: impossible result. RSSI cannot be null or positive.

 

Following are some reference values for channels using **500 kHz
bandwidth**:

- \< -125dBm: impossible result. The RSSI measured by the Base Station
  should not be even lower than the thermal noise floor (around
  -114dBm).

- -125 to -114 dBm: wrong result. The RSSI measured by the Base Station
  should not be even lower than the thermal noise floor (around
  -114dBm). Probably a measurement issue on the Base Station.

- -114 to -105 dBm: excellent result. No signal or interferences around
  the Base Station.

- -105 to -95 dBm: very good result. Very few interferences around the
  Base Station.

- -95 to -90 dBm: good result. Little interferences around the Base
  Station, but not disturbing the Base Station.

- \> -90 dBm: bad result. Signal coming from an end-device or strong
  interferences around the Base Station. Do not use the corresponding
  channel.

- ≥ 0 dBm: impossible result. RSSI cannot be null or positive.

**Important** The noise can be high for some frequencies as soon as it
is not inside channels in use.

To display the data without the extreme RSSI values, plot a RSSI
percentile graph with the percentile set to 50%, which corresponds to
the median RSSI value for all frequencies.

 

## Troubleshooting

Plot the linear average graph to better detect if there are sporadic
interferes with high power level. If there is a peak on a frequency
used: plot a RSSI distribution graph for this frequency. It permits to
see the repartition of the measured values, and the impact of extreme
values for this frequency.

It is better to execute more than one noise scan on a given Base Station
to average any transient problems: there could be an interferer during a
specific time in the day or your own LoRaWAN® traffic can be interpreted
as interference.

**Important** If there is always a peak on a specific frequency for
different noise scan results of the same Base Station, it may be
necessary to change the frequency of the corresponding channel to use a
less noisy frequency. In that case, contact Actility.
