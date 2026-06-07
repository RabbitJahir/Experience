# Hardware Information (Kali Linux)

This document contains commands to check SSD and RAM details in Kali
Linux.

------------------------------------------------------------------------

## Install required tools

``` bash
sudo apt install smartmontools
sudo apt install dmidecode
```

------------------------------------------------------------------------

## SSD / Disk information

To check SSD or HDD details and health status:

``` bash
sudo smartctl -a /dev/sda
```

Notes: - Replace `/dev/sda` with your actual disk name - For NVMe SSDs
use `/dev/nvme0n1`

------------------------------------------------------------------------

## RAM information

To view detailed memory information:

``` bash
sudo dmidecode --type memory
```

This shows: - Memory type (DDR3, DDR4, DDR5) - Speed - Manufacturer -
Slot information - Maximum supported RAM

------------------------------------------------------------------------

## Quick memory overview

``` bash
free -h
```

------------------------------------------------------------------------

## Disk overview

``` bash
lsblk
```
