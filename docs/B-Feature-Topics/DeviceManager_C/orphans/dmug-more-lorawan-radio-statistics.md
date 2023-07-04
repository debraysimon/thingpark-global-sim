---
lang: en-us
sidebar_position: 0
---

# More about LoRaWAN® radio statistics

This topic provides quick access to the definitions and computations of
the radio statistics that build the charts used to monitor LoRaWAN®
devices in Device Manager. For more information, see [Monitoring radio
statistics of a LoRaWAN®
device](./dmug-monitor-radio-statistics-lorawan-device.md).

## Packet Error Rate (PER)

A percentage ratio of missing uplink packets to total uplink
packets that defines the quality of uplink communication between the
device and the network. It provides a view on the packet loss.

Its computation depends on the ADR algorithm version set in the
connectivity plan associated with the device. For more information, see
[Monitoring radio
statistics of a LoRaWAN®
device](./dmug-monitor-radio-statistics-lorawan-device.md).

### Instant PER

Instant PER represents the short-term view of
the packet error rate. It is computed based on a short sliding window.
Hence it gives the most recent view of the uplink instantaneous PER, but
it might be subject to high volatility.

If the device is associated with a connectivity plan using
**ADRv3**, then Instant PER is evaluated over the last two
received uplink frames by the network. Example: If the last uplink frame
received has a frame counter equal to 26 and the previous one has a
frame counter equal to 24, then Instant PER is 1/3 or 33% (one packet
lost over 3).

Otherwise, if the device is associated with a connectivity plan
using **ADRv2** (legacy ADR algorithm), then Instant PER is
evaluated over a sliding window of the last N received uplink frames. N,
being 50 by default, depends on the network configuration.

::note
When Instant PER equals to zero, it means that there is no error
in the reception of the uplink packets by the device.

Instant PER with All LRRS in range is computed without any
consideration for any LRR, whereas Instant PER per LRR is computed
considering only the uplink frames received by a specific LRR.
:::

### Mean PER

Mean PER represents the longer-term estimation
of the uplink packet error rate. Hence it is less volatile and better
represents the overall quality of the uplink communication between the
device and the network.

If the device is associated with a connectivity plan using
**ADRv3**, then Mean PER is evaluated using a forgetting
factor K (0.15 by default) applying the following formula:
`Mean PER (new) = Mean PER (current) * (1-K) + Instant PER (K)`.

Otherwise, if the device is associated with a connectivity plan
using **ADRv2** (legacy ADR algorithm), then Mean PER is
computed the same way as ADRv3 formula but with K=0.05.

## Estimated Signal Power (ESP)

Estimates the real received signal strength of a desired signal
considering the impact of background noise.

Being the received signal strength of the useful signal, it
represents the S component in the Signal-to-Noise Ratio (SNR) formula.
Therefore, ESP can be computed as follows:

- `ESP = Tx EIRP – Path Loss + Rx antenna gain`
- `ESP = RSSI – 10*LOG( 1 + 10(-SNR/10) )`

Allows assessing how good the received signal is compared to the
minimum sensitivity level of the receiver. It is expressed in dBm and
always has negative values.


## Received Signal Strength Indicator (RSSI)

Determines the total received signal strength within a channel
bandwidth summing up the useful signal (S), the interference (I), and
the background noise (N).

Expressed in dBm, RSSI is the sum `S + I + N`.

## Signal-to-Noise Ratio (SNR)

Determines the quality of the reception through the ratio between
the received signal strength of the useful signal (S), and the signal
strength of the interference (I) added to the one of the background
noise (N).

It is computed like this: `SNR = S/(I+N)`. It is expressed in
dB.

The higher the SNR (for instance positive SNR as opposed to
negative SNR), the better the reception quality.

## Spreading Factor (SF)

Determines the data rate used during transmission.

LoRaWAN® SF range is `[7..12]`: SF7 corresponds to the fastest
data rate (~5.5 Kbits/sec), while SF12 corresponds to the slowest data
rate (~300 bits/sec).
