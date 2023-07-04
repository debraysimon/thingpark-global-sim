---
lang: en-us
sidebar_label: Requirements
sidebar_position: 1
---

## Requirements

In order to run a noise scan, the base station must be registered
on the Network Manager.

Spectrum Analysis is only able to analyze and display noise scan results
formatted as per the previous example. By default, all noise scan
results coming from base stations using a Semtech HAL are formatted this
way and can be analyzed by Spectrum Analysis.

For gateways version \< v1.5, the script rfscanv0 must be executed. It
is available from LRR version 1.4.18 onwards.

Be aware that when launching a noise scan on hardware with no dedicated
SX1272 chipset, it will stop the radio while executing the noise scan.

For gateways version ≥ v1.5, the script rfscanv1 must be executed. It is
present from LRR version 1.6.2.

**Important** On full-duplex gateways (for instance, in US902-928MHz),
triggering a noise scan may pick up the gateway's own emitted signal.
