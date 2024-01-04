[//]: # (---)

[//]: # (lang: en-us)

[//]: # (sidebar_label: What is a noise scan?)

[//]: # (sidebar_position: 0)

[//]: # (---)

[//]: # ()
[//]: # (# What is a noise scan?)

[//]: # ()
[//]: # (During a noise scan, the Base Station measures the number of times the)

[//]: # (energy appears at a certain level, per frequency range. This frequency)

[//]: # (range depends of the Base Station hardware and HAL.)

[//]: # ()
[//]: # (For Base Stations using Semtech HAL &#40;Hardware Abstraction Layer&#41;:)

[//]: # ()
[//]: # (- For gateways designed and based on Semtech's v1.0 reference design;)

[//]: # (  that is to say, no dedicated FPGA or SX1272 chipsets for noise scans)

[//]: # (  &#40;so noise scan cannot be run in parallel with downlink/uplink LoRaWAN®)

[//]: # (  transmission/reception&#41;:)

[//]: # ()
[//]: # (  - Binary "rssi_histo_tools")

[//]: # ()
[//]: # (  - HAL version ≤ v3.2)

[//]: # ()
[//]: # (  - No FPGA firmware)

[//]: # ()
[//]: # (  - Measurement bandwidth for each center frequency: 125kHz)

[//]: # ()
[//]: # (- For gateways designed and based on Semtech's v1.5 and v2 reference)

[//]: # (  designs; that is to say, with a dedicated FPGA and SX1272 chipsets to)

[//]: # (  run noise scans without interrupting radio service:)

[//]: # ()
[//]: # (  - Binary "util_spectral_scan")

[//]: # ()
[//]: # (  - HAL version \> v3.2)

[//]: # ()
[//]: # (  - FPGA firmware version v27. Last version, v33 will allow to change)

[//]: # (    the frequency range from 25 to 500kHz.)

[//]: # ()
[//]: # (  - Measurement bandwidth for each center frequency: 125kHz by default.)

[//]: # ()
[//]: # (  - More information about util_spectral_scan can be found at the)

[//]: # (    following link:)

[//]: # ()
[//]: # (  - <https://github.com/Lora-net/lora_gateway/tree/master/util_spectral_scan>)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (The energy measured corresponds to the RSSI &#40;Received Signal Strength)

[//]: # (Indicator&#41;: Signal &#40;from an end-device, if communicating at this)

[//]: # (moment&#41; + Interferences + Thermal Noise &#40;of the Base Station&#41;. The unit)

[//]: # (is dBm: dB mWatt.)

[//]: # ()
[//]: # (dBm is an abbreviation for the power ratio in decibels &#40;dB&#41; of the)

[//]: # (measured power referenced to one milliwatt &#40;mW&#41;.)

[//]: # ()
[//]: # (To express an arbitrary power P in mW as x in dBm, or vice versa, the)

[//]: # (following equivalent expressions may be used:)

[//]: # (![]&#40;./_images/what-is-a-noise-scan.png&#41;)

[//]: # ()
[//]: # (![]&#40;./_images/what-is-a-noise-scan-1.png&#41;)

[//]: # ()
[//]: # (Here are some values:)

[//]: # ()
[//]: # (| dBm | mW  |)

[//]: # (|-----|-----|)

[//]: # (| 0   | 1   |)

[//]: # (| -3  | 0.5 |)

[//]: # (| -10 | 0.1 |)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (The noise scan is always launched with input parameters:)

[//]: # ()
[//]: # (- Start frequency)

[//]: # ()
[//]: # (- Stop frequency)

[//]: # ()
[//]: # (- Step)

[//]: # ()
[//]: # (By default, the values set are based on the ISM band configured on the)

[//]: # (Base Station. But, the values can be defined manually when launching a)

[//]: # (noise scan.)

[//]: # ()
[//]: # (For better analysis of the spectrum's cleanliness &#40;including potential)

[//]: # (RF blockers&#41;, it is recommended to extend the noise scan range beyond)

[//]: # (the frequencies of interest. From example, for EU868 ISM Band, LoRaWAN™)

[//]: # (frequencies typically range from 865.5 MHz to 869.525 MHz, but the)

[//]: # (preconized noise scan frequencies range is from 863 to 870MHz.)

[//]: # ()
[//]: # (Verify that the chosen step is neither too wide nor too tight, and)

[//]: # (includes all the frequencies used by the ISM Band. The preconized step)

[//]: # (is 0.1MHz; small steps directly impact the duration of each noise scan.)

[//]: # ()
[//]: # (Noise scan result CSV file example for a Base Station using a Semtech)

[//]: # (HAL:)

[//]: # ()
[//]: # (``` text)

[//]: # (863000000,0.0,0,-0.5,0,-1.0,0,-1.5,0,-2.0,0,-2.5,0,-3.0,0,-3.5,0,-4.0,0,-4.5,0,-5.0,0,-5.5,0,-6.0,0,-6.5,0,-7.0,0,-7.5,0,-8.0,0,-8.5,0,-9.0,0,)

[//]: # (-9.5,0,-10.0,0,-10.5,0,-11.0,0,-11.5,0,-12.0,0,-12.5,0,-13.0,0,-13.5,0,-14.0,0,-14.5,0,-15.0,0,-15.5,0,-16.0,0,-16.5,0,-17.0,0,-17.5,0,-18.0,0,)

[//]: # (-18.5,0,-19.0,0,-19.5,0,-20.0,0,-20.5,0,-21.0,0,-21.5,0,-22.0,0,-22.5,0,-23.0,0,-23.5,0,-24.0,0,-24.5,0,-25.0,0,-25.5,0,-26.0,0,-26.5,0,-27.0,0,)

[//]: # (-27.5,0,-28.0,0,-28.5,0,-29.0,0,-29.5,0,-30.0,0,-30.5,0,-31.0,0,-31.5,0,-32.0,0,-32.5,0,-33.0,0,-33.5,0,-34.0,0,-34.5,0,-35.0,0,-35.5,0,-36.0,0,)

[//]: # (-36.5,0,-37.0,0,-37.5,0,-38.0,0,-38.5,0,-39.0,0,-39.5,0,-40.0,0,-40.5,0,-41.0,0,-41.5,0,-42.0,0,-42.5,0,-43.0,0,-43.5,0,-44.0,0,-44.5,0,-45.0,0,)

[//]: # (-45.5,0,-46.0,0,-46.5,0,-47.0,0,-47.5,0,-48.0,0,-48.5,0,-49.0,0,-49.5,0,-50.0,0,-50.5,0,-51.0,0,-51.5,0,-52.0,0,-52.5,0,-53.0,0,-53.5,0,-54.0,0,)

[//]: # (-54.5,0,-55.0,0,-55.5,0,-56.0,0,-56.5,0,-57.0,0,-57.5,0,-58.0,0,-58.5,0,-59.0,0,-59.5,0,-60.0,0,-60.5,0,-61.0,0,-61.5,0,-62.0,0,-62.5,0,-63.0,0,)

[//]: # (-63.5,0,-64.0,0,-64.5,0,-65.0,0,-65.5,0,-66.0,0,-66.5,0,-67.0,0,-67.5,0,-68.0,0,-68.5,0,-69.0,0,-69.5,0,-70.0,0,-70.5,0,-71.0,0,-71.5,0,-72.0,0,)

[//]: # (-72.5,0,-73.0,0,-73.5,0,-74.0,0,-74.5,0,-75.0,0,-75.5,0,-76.0,0,-76.5,0,-77.0,0,-77.5,0,-78.0,0,-78.5,0,-79.0,0,-79.5,0,-80.0,0,-80.5,0,-81.0,0,)

[//]: # (-81.5,0,-82.0,0,-82.5,0,-83.0,0,-83.5,0,-84.0,0,-84.5,0,-85.0,0,-85.5,0,-86.0,0,-86.5,0,-87.0,0,-87.5,0,-88.0,0,-88.5,0,-89.0,0,-89.5,0,-90.0,0,)

[//]: # (-90.5,0,-91.0,0,-91.5,0,-92.0,0,-92.5,0,-93.0,0,-93.5,0,-94.0,0,-94.5,0,-95.0,0,-95.5,0,-96.0,0,-96.5,0,-97.0,0,-97.5,0,-98.0,0,-98.5,0,-99.0,0,)

[//]: # (-99.5,0,-100.0,0,-100.5,0,-101.0,0,-101.5,0,-102.0,0,-102.5,0,-103.0,0,-103.5,0,-104.0,0,-104.5,17,-105.0,23,-105.5,417,-106.0,736,-106.5,1353,)

[//]: # (-107.0,4729,-107.5,3219,-108.0,2770,-108.5,2833,-109.0,399,-109.5,115,-110.0,30,-110.5,0,-111.0,0,-111.5,0,-112.0,0,-112.5,0,-113.0,0,-113.5,0,)

[//]: # (-114.0,0,-114.5,0,-115.0,0,-115.5,0,-116.0,0,-116.5,0,-117.0,0,-117.5,0,-118.0,0,-118.5,0,-119.0,0,-119.5,0,-120.0,0,-120.5,0,-121.0,0,-121.5,0,)

[//]: # (-122.0,0,-122.5,0,-123.0,0,-123.5,0,-124.0,0,-124.5,0,-125.0,0,-125.5,0,-126.0,0,-126.5,0,-127.0,0,)

[//]: # (-127.5,0 863050000,0.0,0,-0.5,0,…)

[//]: # (```)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (The first value of the line is the frequency, the second value is the)

[//]: # (RSSI level, and the third value is the number of times the Base Station)

[//]: # (measured this RSSI level for this frequency &#40;that is to say, the RSSI)

[//]: # (count&#41;.)

[//]: # ()
[//]: # (The lower the RSSI measured by the Base Station, the better.)

[//]: # ()
[//]: # (Following are some reference values for channels using 125 kHz)

[//]: # (bandwidth:)

[//]: # ()
[//]: # (- \< -130dBm: impossible result. The RSSI measured by the Base Station)

[//]: # (  should not be even lower than the thermal noise floor &#40;around)

[//]: # (  -120dBm&#41;.)

[//]: # ()
[//]: # (- -130 to -120 dBm: wrong result. The RSSI measured by the Base Station)

[//]: # (  should not be even lower than the thermal noise floor &#40;around)

[//]: # (  -120dBm&#41;. Probably a measurement issue on the Base Station.)

[//]: # ()
[//]: # (- -120 to -110dBm: excellent result. No signal or interferences around)

[//]: # (  the Base Station.)

[//]: # ()
[//]: # (- -110 to -100dBm: very good result. Very few interferences around the)

[//]: # (  Base Station.)

[//]: # ()
[//]: # (- -100 to -95dBm: good result. Little interferences around the Base)

[//]: # (  Station, but not disturbing the Base Station.)

[//]: # ()
[//]: # (- \> -95dBm: bad result. Signal coming from an end-device or strong)

[//]: # (  interferences around the Base Station. Do not use the corresponding)

[//]: # (  channel.)

[//]: # ()
[//]: # (- ≥ 0dBm: impossible result. RSSI cannot be null or positive.)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (Following are some reference values for channels using 500 kHz)

[//]: # (bandwidth:)

[//]: # ()
[//]: # (- \< -125dBm: impossible result. The RSSI measured by the Base Station)

[//]: # (  should not be even lower than the thermal noise floor &#40;around)

[//]: # (  -114dBm&#41;.)

[//]: # ()
[//]: # (- -125 to -114 dBm: wrong result. The RSSI measured by the Base Station)

[//]: # (  should not be even lower than the thermal noise floor &#40;around)

[//]: # (  -114dBm&#41;. Probably a measurement issue on the Base Station.)

[//]: # ()
[//]: # (- -114 to -105 dBm: excellent result. No signal or interferences around)

[//]: # (  the Base Station.)

[//]: # ()
[//]: # (- -105 to -95 dBm: very good result. Very few interferences around the)

[//]: # (  Base Station.)

[//]: # ()
[//]: # (- -95 to -90 dBm: good result. Little interferences around the Base)

[//]: # (  Station, but not disturbing the Base Station.)

[//]: # ()
[//]: # (- \> -90 dBm: bad result. Signal coming from an end-device or strong)

[//]: # (  interferences around the Base Station. Do not use the corresponding)

[//]: # (  channel.)

[//]: # ()
[//]: # (- ≥ 0 dBm: impossible result. RSSI cannot be null or positive.)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (The duration of the noise scan can depend on the version of the Semtech)

[//]: # (HAL, and the input parameters set.)

[//]: # ()
[//]: # (The noise scan is organized in **captures**: each capture is 4096)

[//]: # (samples long. By default, each frequency has 90 captures, which means)

[//]: # (around 3s for 125 kHz sample rate:)

[//]: # ()
[//]: # (- Samples \* captures = 4096 \* 90 = 368640 consecutive points.)

[//]: # ()
[//]: # (- The sample rate is rate = 125 kHz.)

[//]: # ()
[//]: # (- Thus, the analysis of one frequency point, that is, the duration of)

[//]: # (  one step is:)

[//]: # ()
[//]: # (- Duration = samples \* captures / rate = 2.95 seconds \~ 3 seconds)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (**Example 1:** How long would a scan over the \[915...928\] MHz range)

[//]: # (last, provided that the resolution &#40;measurement step&#41; is 25 kHz?)

[//]: # ()
[//]: # (Range = 928 - 915 = 13 MHz)

[//]: # ()
[//]: # (Resolution = 25 kHz)

[//]: # ()
[//]: # (Steps = range / resolution = 13 / 0.025 = 520)

[//]: # ()
[//]: # (Duration_total = steps \* duration = 520 \* 3 = 1560 seconds = 26)

[//]: # (minutes)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (**Example 2:** How long would a scan over the \[902...927.6\] MHz range)

[//]: # (last, provided that the resolution is 100 kHz?)

[//]: # ()
[//]: # (Range = 927.6 - 902 = 25.6 MHz)

[//]: # ()
[//]: # (Resolution = 100 kHz)

[//]: # ()
[//]: # (Steps = range / resolution = 25.6 / 0.1 = 256)

[//]: # ()
[//]: # (Duration_total = steps \* duration = 256 \* 3 = 768 seconds = 12.8)

[//]: # (minutes)

[//]: # ()
[//]: # ( )

[//]: # ()
[//]: # (For a better analysis, it is preconized to run several noise scans per)

[//]: # (base station at different hours of the day, to identify the energy)

[//]: # (coming from end-devices communicating, and punctual interferences.)
