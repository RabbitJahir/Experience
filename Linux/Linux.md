# Linux_experience

My experience of linux

-> Everything is ABSURD yet, ENTERTAINING!
-> AI has been a great help!

-> sudo dpkg -i name_of.deb (Data PacKet manaGer, install, name of that deb)

-> Heroic launcher, to use epicgames.
-> 2 method to play roblox, sober(QR code quick login is better), or a hacking_like method.

-> img2pdf, convert(converts any formats),
-> pdftoppm(breaks the pdf pages to images).
-> pdftoppm, converts images to pdf, and breaks pdf to images.
-> qpdf "name_of.pdf" --pages . 01-101 -- name_of_new.pdf (breaks the pages of the pdf to a new pdf).
-> convert, (sudo apt isntall imagemagick)

.

## sudo apt install poppler-utils

> - pdfunite first.pdf second.pdf third.pdf merged.pdf



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

# random

- `sudo apt install cmatrix`, cmatrix, show green matrix like symbols falling

- ` sudo apt install cowsay fortune`, quotes, fortune, fortune | cowsay

- `sudo apt install tree`, tree ~ , shows all files and directories inside the device.

- `sudo apt install ncdu`, ncdu ~, shows disk usage and interactive

- `sudo apt install fim`, see images on terminal

> `sudo apt install ghostscript`
>```bash
> gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
>```

# networks

- `curl ifconfig.me` public ip
- `sudo lsof -i`, real time network connections
- `iwconfig`

- `ifconfig name up/down` & `ifconfig name1 hw name1 number`, name=[mac, wlan0, eth0], name2 = [name before address ], number = [new address]

# kdeconnect

> connect linux to any kind of phone `sudo apt install kdeconnect`, kdeconnect-app. use phone screen to control screen mouse, share static files, custom commands, do anything...

