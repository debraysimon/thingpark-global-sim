---
lang: en-us
sidebar_label: Process
sidebar_position: 2
---

## Process

![](./_images/process.png)

The following diagram depicts the noise scan workflow.

When a noise scan request is executed:

- The associated LRC sends a command to the Base Station for it to
  execute an internal script: rfscanv1.

- The rfscanv1 can call rfscanv0, if no dedicated SX1272 chipset is
  detected on the Base Station. These scripts permit to execute the
  noise scan especially calling util_spectral_scan script. Raw scan
  results file is then created in the Base Station, compressed in GZip
  format, and directly transmitted to FTP, SFTP or SCP to the Support
  server with the following name format:

- `rfscan_<lrrid>_<network_partner_name>_<date>.csv`

- A Python script hosted on the TWA server will transmit the files to
  SCP every five minutes from the Support server to the TWA server, then
  delete them from the Support server.

- The Python script will parse the gzipped CSV files, analyze the data,
  and inject them into a MongoDB database, and delete the gzipped files
  from TWA server.

- After a few minutes, the result files appear in the Spectrum Analysis
  GUI.
