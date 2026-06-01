# Linux_experience

My experience of linux

-> Everything is ABSURD yet, ENTERTAINING!
-> AI has been a great help!


-> Heroic launcher, to use epicgames.
-> 2 method to play roblox, sober(QR code quick login is better), or a hacking_like method.


# Bluetooth

- `bluetoothctl` (to see bluetooth things), USB tethering in andorid, to use wifi from phone
- do `discoverable on` and `pairing on`

# Data usage in linux/debian-based

- `sudo apt install vnstat`

- `sudo apt install iftop`

- `sudo apt install nload`

- `watch -n 1 'echo "RX MB:" $(( $(cat /sys/class/net/wlan0/statistics/rx_bytes) /1024/1024 )); echo "TX MB:" $(( $(cat /sys/class/net/wlan0/statistics/tx_bytes) /1024/1024 ))' `

- `sudo apt install bmon`, bmon, try this.

- `sudo apt install nethogs`, just see sent, received and total bandwidth

# shows CPU, RAM, disk, processes, and network usage

- `sudo apt install btop`, btop, check everything!

- `df -h` check disk usage, and free dish, in human-readeable format

- `lsblk`

- `fdisk -l`

- `fsck -p location`, chek space, `fsck`

- `dmesg` , `dmesg | grep name`, diagnostic msg

# networks

- `curl ifconfig.me` public ip
- `sudo lsof -i`, real time network connections
- `iwconfig`

- `ifconfig name up/down` & `ifconfig name1 hw name1 number`, name=[mac, wlan0, eth0], name2 = [name before address ], number = [new address]

# kdeconnect

> connect linux to any kind of phone `sudo apt install kdeconnect`, kdeconnect-app. use phone screen to control screen mouse, share static files, custom commands, do anything...

